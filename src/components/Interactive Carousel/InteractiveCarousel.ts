import { Component } from "../Component";

export class InteractiveCarousel extends Component {
  public static data = "interactive-carousel";

  public currentIndex = 0;
  public currentProgress = 0;

  public tabContainer: HTMLElement;
  public tabs: HTMLElement[];
  public tabsCards: HTMLElement[];
  public tabsContent: HTMLElement[];

  public progresses: HTMLElement[] = [];
  public progressBars: HTMLElement[] = [];

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

    this.tabsCards = Array.from(
      element.querySelectorAll(
        `[data-component="${InteractiveCarousel.data}/cards"] > *`
      )
    );

    this.tabsContent = Array.from(
      element.querySelectorAll(
        `[data-component="${InteractiveCarousel.data}/content"] > *`
      )
    );

    this.progresses = Array.from(
      element.querySelectorAll(
        `[data-component="${InteractiveCarousel.data}/progress"]`
      )
    );

    this.progressBars = Array.from(
      element.querySelectorAll(
        `[data-component="${InteractiveCarousel.data}/progress-bar"]`
      )
    );

    this.changeIndex(0);

    this.tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        this.changeIndex(index);
      });

      tab.addEventListener("mouseover", () => {
        if (tab.classList.contains("current")) {
          this.pauseProgress = true;
        }
      });

      tab.addEventListener("mouseleave", () => {
        this.pauseProgress = false;
        this.updateProgress();
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

    /**
     * Prevent manual scrolling
     */
    this.tabContainer.addEventListener("scroll", (event) => {
      event.preventDefault();
    });
  }

  public changeIndex(index: number) {
    this.currentIndex = index;

    const currentTab = this.tabs[index];
    const currentProgress = this.progresses[index];
    const currentProgressBar = this.progressBars[index];
    this.currentProgress = 0;

    this.tabs.forEach((tab) => {
      tab.classList.remove("current");
      tab.ariaSelected = "false";
    });

    this.progresses.forEach((progress) => {
      progress.style.display = "none";
    });

    currentTab.classList.add("current");
    currentTab.ariaSelected = "true";

    if (currentProgress && currentProgressBar) {
      currentProgress.style.display = "block";
      currentProgressBar.style.width = `${this.currentProgress}%`;
    }

    /**
     * Try & catching to make sure errors here don't fail the entire function
     */
    try {
      this.tabsCards.forEach((card) => {
        card.classList.remove("current");
      });
      this.tabsCards[index].classList.add("current");
    } catch (e) {}
    try {
      this.tabsContent.forEach((tabContent) => {
        tabContent.classList.remove("current");
      });
      this.tabsContent[index].classList.add("current");
    } catch (e) {}

    this.tabContainer.scrollTo({
      left:
        currentTab.offsetLeft -
        (this.tabContainer.offsetWidth - currentTab.offsetWidth) / 2,
      behavior: "smooth",
    });

    if (currentProgress && currentProgressBar) {
      this.updateProgress();
    }
  }

  public animationDurationSecond = 12;
  public updateFramesPerCycle = 360;

  public pauseProgress = false;

  public updateProgress() {
    if (this.pauseProgress) {
      return;
    }

    const currentProgressBar = this.progressBars[this.currentIndex];
    const progressDelta = 100 / this.updateFramesPerCycle;

    this.currentProgress = Math.min(this.currentProgress + progressDelta, 100);

    currentProgressBar.style.width = `${this.currentProgress}%`;

    if (this.currentProgress === 100) {
      if (this.currentIndex === this.tabs.length - 1) {
        this.changeIndex(0);
      } else {
        this.changeIndex(this.currentIndex + 1);
      }
    } else {
      setTimeout(() => {
        this.updateProgress();
      }, (this.animationDurationSecond * 1000) / this.updateFramesPerCycle);
    }
  }
}
