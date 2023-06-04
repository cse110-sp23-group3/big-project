const cardStyle = `
article.about-card-left {
  width: 100%;
  display: grid;
  grid-template-columns: 25% 75%;
  grid-template-rows: 100%;
}

article.about-card-right {
  width: 100%;
  display: grid;
  grid-template-columns: 75% 25%;
  grid-template-rows: 100%;
}

img.profile-left {
  width: 150px;
  height: 150px;
  border-radius: 100%;
  grid-column-start: 1;
  grid-column-end: 1;
  align-self: center;
  justify-self: center;
  object-fit: cover;
}

img.profile-right {
  width: 150px;
  height: 150px;
  border-radius: 100%;
  grid-column-start: 2;
  grid-column-end: 2;
  align-self: center;
  justify-self: center;
  object-fit: cover;
}

h1 {
  justify-self: center;
}

div.about-card-inner-holder-right {
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 1;
}

div.about-card-inner-holder-left {
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 1;
  grid-row-end: 1;
}

h2 {
  font-size: 16pt;
  font-weight: bolder;
}
`

const cardProfileLeftHTML = `
<img class="profile-left" src="profile.webp">
<div class="about-card-inner-holder-right">
  <h2 class="name">Name | Role</h2>
  <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab, debitis quos nam, ut impedit quae illo, veritatis unde dolorum enim ipsum. Cupiditate non voluptas quisquam maiores odit obcaecati omnis.</p>
</div>
`

const cardProfileRightHTML = `
<img class="profile-right" src="profile.webp">
<div class="about-card-inner-holder-left">
  <h2 class="name">Name | Role</h2>
  <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab, debitis quos nam, ut impedit quae illo, veritatis unde dolorum enim ipsum. Cupiditate non voluptas quisquam maiores odit obcaecati omnis.</p>
</div>
`

const DEFAULT_PROFILE = "profile.webp";

class AboutCard extends HTMLElement {
  constructor() {
    super();
    let shadowDOM = this.attachShadow({mode: 'open'});
    let article = document.createElement("article");
    let style = document.createElement("style");
    style.textContent = cardStyle;
    shadowDOM.append(style, article);
  }

  /**
   * @description This function sets the data in the card (profile pic, name, etc.)
   * @param {Object} data - An object containing the data to put into the card in the following format:
   *                        {
   *                          "profileSrc": "string",
   *                          "name": "string",
   *                          "role": "string",
   *                          "description": "string",
   *                          "profilePos": "string"
   *                        }
   */
  set data(data) {
    if (!data) {
      return;
    }

    let shadowDOM = this.shadowRoot;
    let article = shadowDOM.lastChild;
    if (data['profilePos'] === "left") {
      article.classList.add("about-card-left");
    } else if (data['profilePos'] === "right") {
      article.classList.add("about-card-right");
    }
    if (article.classList[0] === "about-card-left") {
      article.innerHTML = `
      <img class="profile-left" src="${data['profileSrc'] ? data['profileSrc'] : DEFAULT_PROFILE}">
      <div class="about-card-inner-holder-right">
        <h2 class="name">${data['name']} | ${data['role']}</h2>
        <p class="description">${data['description']}</p>
      </div>
      `;
    } else if (article.classList[0] === "about-card-right") {
      article.innerHTML = `
      <img class="profile-right" src="${data['profileSrc'] ? data['profileSrc'] : DEFAULT_PROFILE}">
      <div class="about-card-inner-holder-left">
        <h2 class="name">${data['name']} | ${data['role']}</h2>
        <p class="description">${data['description']}</p>
      </div>
      `;
    }
  }
}

customElements.define('about-card', AboutCard);
