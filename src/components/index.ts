import { FeedbackCarousel } from "./FeedbackCarousel/FeedbackCarousel";

export const componentClasses = [FeedbackCarousel];

export const enableComponents = () => {
  componentClasses.forEach((Component) => {
    const className = Component.className;
    const elements = document.querySelectorAll(`.${className}`);

    Array.from(elements).forEach((element) => {
      new Component(element as HTMLElement);
    });
  });
};
