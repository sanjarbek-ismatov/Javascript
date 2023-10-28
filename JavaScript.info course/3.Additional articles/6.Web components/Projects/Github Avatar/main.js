const API_URL = "https://api.github.com/users/";
const template = document.getElementById("avatar-template");

class GitHubAvatarElement extends HTMLElement {
  constructor() {
    super();
  }

  async request(username) {
    const response = await fetch(API_URL + username);
    return await response.json();
  }

  connectedCallback() {
    const username = this.getAttribute("username");
    this.request(username).then((value) => {
      this.attachShadow({ mode: "open" });
      this.shadowRoot.append(template.content.cloneNode(true));
      const image = this.shadowRoot.getElementById("user-image");
      const title = this.shadowRoot.getElementById("user-name");
      const description = this.shadowRoot.getElementById("description");
      image.src = value["avatar_url"];
      title.innerText = value.name;
      description.innerText = value.bio;
    });
  }
}

customElements.define("github-avatar", GitHubAvatarElement);
