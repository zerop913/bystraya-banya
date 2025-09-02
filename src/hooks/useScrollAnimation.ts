import { useEffect, useState } from "react";

const viewedElements = new Set<string>();

export function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    const element = document.querySelector("[data-scroll-animation]");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return isVisible;
}

export function useIntersectionObserver(
  elementRef: React.RefObject<HTMLElement | null>,
  options?: IntersectionObserverInit,
  elementId?: string
) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || !elementId) return;

    // Проверяем, был ли этот элемент уже показан
    if (viewedElements.has(elementId)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          viewedElements.add(elementId); // Помечаем как просмотренный
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [elementRef, options, elementId]);

  return isVisible;
}
