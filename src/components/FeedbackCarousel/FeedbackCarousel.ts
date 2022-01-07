import { Component } from "../Component";

export class FeedbackCarousel extends Component {
  public static data = "feedback-carousel";

  public controls: HTMLElement;
  public controlsArrowBack: HTMLElement;
  public controlsArrowForward: HTMLElement;
  public scrollArea: HTMLElement;

  constructor(element: HTMLElement) {
    super(element);

    this.controls = element.querySelector(
      `[data-component="${FeedbackCarousel.data}/controls"]`
    )!;
    this.controlsArrowBack = element.querySelector(
      `[data-component="${FeedbackCarousel.data}/controls/arrow-back"]`
    )!;
    this.controlsArrowForward = element.querySelector(
      `[data-component="${FeedbackCarousel.data}/controls/arrow-forward"]`
    )!;
    this.scrollArea = element.querySelector(
      `[data-component="${FeedbackCarousel.data}/scroll-area"]`
    )!;

    this.controlsArrowBack.addEventListener(
      "click",
      this.onBackClick.bind(this)
    );

    this.controlsArrowForward.addEventListener(
      "click",
      this.onForwardClick.bind(this)
    );

    console.log("Feedback Carousel");
    console.log(this.controls);
  }

  public onBackClick() {
    console.log("Back");
  }

  public onForwardClick() {
    console.log("Forward");
  }
}
