import { Component } from "../Component";

export class NavBar extends Component {
  public static data = "nav-bar";

  constructor(element: HTMLElement) {
    super(element);

    addEventListener("scroll", this.onScrollHandler.bind(this));
  }

  public onScrollHandler() {
    if (window.scrollY > 24) {
      this.element.classList.add("scrolled");
    }
    else {
      this.element.classList.remove("scrolled");
    }
  }
}
