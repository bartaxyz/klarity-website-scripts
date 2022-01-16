import { Component } from "../Component";

export class FeedbackCarousel extends Component {
  public static data = "feedback-carousel";

  public controls: HTMLElement;
  public controlsArrowBack: HTMLElement;
  public controlsArrowForward: HTMLElement;
  public scrollArea: HTMLElement;
  public headline: HTMLElement;

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

    this.headline = element.querySelector(
      `[data-component="${FeedbackCarousel.data}/headline"]`
    )!;

    this.controlsArrowBack.addEventListener(
      "click",
      this.onBackClick.bind(this)
    );

    this.controlsArrowForward.addEventListener(
      "click",
      this.onForwardClick.bind(this)
    );

    this.scrollArea.addEventListener(
      "scroll",
      this.onScrollAreaScroll.bind(this)
    );

    this.onScrollAreaScroll();

    window.addEventListener("resize", this.onResize.bind(this));

    this.onResize();
  }

  public onResize() {
    this.onScrollAreaScroll();

    this.scrollArea.style.paddingLeft = `${this.headline.offsetLeft}px`;

    const items = Array.from(
      this.scrollArea.children[0].children
    ) as HTMLElement[];

    items[
      items.length - 1
    ].style.paddingRight = `${this.headline.offsetLeft}px`;
  }

  public onScrollAreaScroll() {
    const area = this.scrollArea;

    if (area.scrollLeft + area.offsetWidth >= area.scrollWidth) {
      this.controlsArrowForward.classList.add("disabled");
    }

    if (area.scrollLeft === 0) {
      this.controlsArrowBack.classList.add("disabled");
    }

    if (area.scrollLeft + area.offsetWidth < area.scrollWidth) {
      this.controlsArrowForward.classList.remove("disabled");
    }

    if (area.scrollLeft > 0) {
      this.controlsArrowBack.classList.remove("disabled");
    }
  }

  public onBackClick() {
    const area = this.scrollArea;

    area.scrollTo({
      left: area.scrollLeft - Math.min(area.offsetWidth - 40, 560),
      behavior: "smooth",
    });
  }

  public onForwardClick() {
    const area = this.scrollArea;

    area.scrollTo({
      left: area.scrollLeft + Math.min(area.offsetWidth - 40, 560),
      behavior: "smooth",
    });
  }
}
