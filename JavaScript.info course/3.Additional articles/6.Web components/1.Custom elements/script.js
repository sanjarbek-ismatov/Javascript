class HTMLTimeFormatElement extends HTMLElement {
  constructor() {
    super();
  }
  render() {
    this.innerText =
      new Date(this.getAttribute("current-time")).toLocaleTimeString() ??
      new Date().toLocaleString();
  }
  connectedCallback() {
    if (!this.rendered) {
      this.render();
      this.rendered = true;
    }
  }
  static get observedAttributes() {
    return ["current-time"];
  }
  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }
}
class HTMLCounterElement extends HTMLButtonElement {
  connectedCallback() {
    setTimeout(() => {
      this.onclick = () => {
        const count = +this.innerText;
        this.innerText = count + 1;
      };
    });
  }
}
customElements.define("time-format", HTMLTimeFormatElement);
customElements.define("counter-button", HTMLCounterElement, {
  extends: "button",
});
// console.log(customElements.get('time-format'))
// customElements.whenDefined('time-format').then((elem) => {
//     console.log("Custom element has been defined")
// })

// /**
//  * @type {HTMLTimeFormatElement}
//  */
// const timeFormat = document.createElement('time-format')
// document.body.append(timeFormat)
// setInterval(() => {
//     timeFormat.setAttribute('current-time', new Date())
// }, 1000)
