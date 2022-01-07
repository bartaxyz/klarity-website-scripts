import { Component } from "../Component";

export class DynamicLink extends Component {
  public static data = "dynamic-link";

  public href: string;

  constructor(element: HTMLElement) {
    super(element);

    this.href = element.getAttribute("data-href") || "";

    this.element.addEventListener("click", this.onLinkClick.bind(this));
  }

  public onLinkClick() {
    window.open(this.href, "_blank");
  }
}
