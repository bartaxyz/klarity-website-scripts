import { Component } from "../Component";

export class InteractiveCarousel extends Component {
  public static data = "interactive-carousel";

  public currentIndex = 0;

  public tabContainer: HTMLElement;
  public tabs: HTMLElement[];
  public tabsContent: HTMLElement[];

  public controlsArrowBack: HTMLElement;
  public controlsArrowForward: HTMLElement;

  constructor(element: HTMLElement) {
    super(element);

    this.tabContainer = element.querySelector(
      `[data-component="${InteractiveCarousel.data}/tabs"]`
    )!;

    this.tabs = Array.from(
      this.tabContainer.querySelectorAll(
        `[data-component="${InteractiveCarousel.data}/tabs"] > *`
      )
    );

    this.tabsContent = Array.from(
      element.querySelectorAll(
        `[data-component="${InteractiveCarousel.data}/content"] > *`
      )
    );

    this.changeIndex(0);

    this.tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        this.changeIndex(index);
      });
    });

    this.controlsArrowBack = element.querySelector(
      `[data-component="${InteractiveCarousel.data}/controls/arrow-back"]`
    )!;
    this.controlsArrowForward = element.querySelector(
      `[data-component="${InteractiveCarousel.data}/controls/arrow-forward"]`
    )!;
    /* this.scrollArea = element.querySelector(
      `[data-component="${InteractiveCarousel.data}/scroll-area"]`
    )!; */

    this.controlsArrowBack.addEventListener(
      "click",
      () => {
        this.changeIndex(this.currentIndex - 1);

        if (this.currentIndex === 0) {
          this.controlsArrowBack.classList.add("disabled");
        }

        this.controlsArrowForward.classList.remove("disabled");
      }
    );

    this.controlsArrowForward.addEventListener(
      "click",
      () => {
        this.changeIndex(this.currentIndex + 1);

        if (this.currentIndex === this.tabs.length - 1) {
          this.controlsArrowForward.classList.add("disabled");
        }

        this.controlsArrowBack.classList.remove("disabled");
      }
    );
  }

  public changeIndex(index: number) {
    this.currentIndex = index;

    /**
     * TODO
     * - [ ] Remove "current" classes from all tabs
     * - [ ] Add "current" class to the current tab
     * - [ ] Hide all tab contents
     * - [ ] Show the current tab content
     */

    this.tabs.forEach((tab) => {
      tab.classList.remove("current");
      tab.ariaSelected = "false";
    });

    this.tabs[index].classList.add("current");
    this.tabs[index].ariaSelected = "true";

    this.tabsContent.forEach((tabContent) => {
      tabContent.classList.remove("current");
    });

    this.tabsContent[index].classList.add("current");


  }

  public onScrollAreaScroll() {
    /* const area = this.scrollArea;

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
    } */
  }
}
