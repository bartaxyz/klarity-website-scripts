import { Component } from "../Component";

export class DynamicLink extends Component {
  public static data = "dynamic-link";

  public href: string;

  constructor(element: HTMLElement) {
    super(element);

    this.href = element.getAttribute("data-href") || "";
  }

  public onLinkClick() {
    window.open(this.href, "_blank");
  }
}
