class CardNews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  build() {
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card-news");

    const imageContainer = document.createElement("div");
    imageContainer.setAttribute("class", "image-container");
    const newsImage = document.createElement("img");
    newsImage.setAttribute("class", "news-image");
    newsImage.src = this.getAttribute("image");
    imageContainer.appendChild(newsImage);

    const newsContent = document.createElement("div");
    newsContent.setAttribute("class", "news-content");
    const category = document.createElement("div");
    category.setAttribute("class", "category");
    category.textContent = this.getAttribute("category");
    const linkTitle = document.createElement("a");
    linkTitle.setAttribute("class", "news-title");
    linkTitle.textContent = this.getAttribute("title");
    linkTitle.href = this.getAttribute("url");
    linkTitle.target = "_blank";
    const newsDescription = document.createElement("p");
    newsDescription.setAttribute("class", "news-description ");
    newsDescription.textContent = this.getAttribute("description");
    newsContent.appendChild(category);
    newsContent.appendChild(linkTitle);
    newsContent.appendChild(newsDescription);

    componentRoot.appendChild(imageContainer);
    componentRoot.appendChild(newsContent); 

    return componentRoot;
  }

  styles() {
    const style = document.createElement("style");
    style.textContent = `
      .card-news {
        display: flex;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        max-width: 800px;
        padding-left: 16px;
      }

      .image-container {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 40%;
      }

      .news-image {
        max-width: 100%;
        height: auto;
        object-fit: cover;
      }

      .news-content {
        flex: 2;
        padding: 16px;
      }

      .category {
        font-size: 14px;
        color: #8e8e8e;
        margin-bottom: 8px;
        text-transform: uppercase;
      }

      .news-title {
        font-size: 24px;
        font-weight: bold;
        color: #2e7d32;
        margin: 0 0 16px 0;
        line-height: 1.2;
        text-decoration: none;
      }

      .news-description {
        font-size: 16px;
        color: #4a4a4a;
        margin-bottom: 16px;
      }
    `;

    return style;
  }
}

customElements.define("card-news", CardNews);