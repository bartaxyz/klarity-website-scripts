import { FeedbackCarousel } from "./FeedbackCarousel/FeedbackCarousel";

export const componentClasses = [FeedbackCarousel];

export const enableComponents = () => {
  componentClasses.forEach((Component) => {
    const data = Component.data;
    const elements = document.querySelectorAll(`[data-component=${data}]`);

    Array.from(elements).forEach((element) => {
      new Component(element as HTMLElement);
    });
  });
};

enableComponents();
