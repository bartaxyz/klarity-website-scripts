import { Component } from "../Component";

export class FeedbackCarousel extends Component {
  public static className = "feedback-carousel";

  constructor(element: HTMLElement) {
    super(element);

    console.log("Feedback Carousel");
    console.log(element);
  }
}
