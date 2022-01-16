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

    this.controlsArrowBack.addEventListener("click", () => {
      if (this.controlsArrowBack.classList.contains("disabled")) {
        return;
      }

      this.changeIndex(this.currentIndex - 1);

      if (this.currentIndex === 0) {
        this.controlsArrowBack.classList.add("disabled");
      }

      this.controlsArrowForward.classList.remove("disabled");
    });

    this.controlsArrowForward.addEventListener("click", () => {
      if (this.controlsArrowForward.classList.contains("disabled")) {
        return;
      }

      this.changeIndex(this.currentIndex + 1);

      if (this.currentIndex === this.tabs.length - 1) {
        this.controlsArrowForward.classList.add("disabled");
      }

      this.controlsArrowBack.classList.remove("disabled");
    });
  }

  public changeIndex(index: number) {
    this.currentIndex = index;

    const currentTab = this.tabs[index];

    this.tabs.forEach((tab) => {
      tab.classList.remove("current");
      tab.ariaSelected = "false";
    });

    currentTab.classList.add("current");
    currentTab.ariaSelected = "true";

    this.tabsContent.forEach((tabContent) => {
      tabContent.classList.remove("current");
    });

    this.tabsContent[index].classList.add("current");

    /**
     * TODO
     * - [ ] Scroll current tab in the middle of the screen
     */

    console.log(this.tabContainer);
    console.log("trying to scroll to:", currentTab.offsetLeft);

    this.tabContainer.scrollTo({
      left:
        currentTab.offsetLeft -
        (this.tabContainer.offsetWidth - currentTab.offsetWidth) / 2,
      behavior: "smooth",
    });
  }
}
