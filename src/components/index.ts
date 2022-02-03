import { DynamicLink } from "./DynamicLink/DynamicLink";
import { FeedbackCarousel } from "./FeedbackCarousel/FeedbackCarousel";
import { InteractiveCarousel } from "./Interactive Carousel/InteractiveCarousel";
import { NavBar } from "./NavBar/NavBar";

export const componentClasses = [
  DynamicLink,
  FeedbackCarousel,
  InteractiveCarousel,
  NavBar,
];

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
