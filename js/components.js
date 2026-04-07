class SiteNav extends HTMLElement {
  connectedCallback() {
    const active = this.getAttribute("active") || "";
    const isInPagesDir = window.location.pathname.includes("/pages/");
    const homeHref = isInPagesDir ? "../index.html" : "index.html";
    const pageHref = (name) => (isInPagesDir ? `${name}.html` : `pages/${name}.html`);
    const logoSrc = isInPagesDir ? "../images/duotech-wordmark.svg" : "images/duotech-wordmark.svg";
    const isActive = (name) => (active === name ? "active" : "");
    this.innerHTML = `
      <nav>
        <a href="${homeHref}" class="nav-logo" aria-label="DuoTech Home">
          <img class="brand-wordmark" src="${logoSrc}" alt="duotech logo">
          <span class="brand-tail">TECHNOLOGY</span>
        </a>
        <div class="nav-links">
          <a href="${homeHref}" class="${isActive("home")}">Home</a>
          <a href="${pageHref("usecases")}" class="${isActive("usecases")}">Use Cases</a>
          <a href="${pageHref("impact")}" class="${isActive("impact")}">Impact</a>
          <a href="${pageHref("company")}" class="${isActive("company")}">Company</a>
          <a href="${pageHref("blog")}" class="${isActive("blog")}">Blog</a>
          <a href="${pageHref("meeting")}" class="nav-cta ${isActive("meeting")}">Request a Meeting</a>
        </div>
      </nav>
    `;
  }
}

class SiteFooter extends HTMLElement {
  connectedCallback() {
    const isInPagesDir = window.location.pathname.includes("/pages/");
    const homeHref = isInPagesDir ? "../index.html" : "index.html";
    const pageHref = (name) => (isInPagesDir ? `${name}.html` : `pages/${name}.html`);
    const assetHref = (path) => (isInPagesDir ? `../${path}` : path);
    const logoSrc = isInPagesDir ? "../images/duotech-wordmark.svg" : "images/duotech-wordmark.svg";
    this.innerHTML = `
      <footer>
        <div class="footer-top">
          <div class="footer-brand">
            <a href="${homeHref}" class="nav-logo" aria-label="DuoTech Home">
              <img class="brand-wordmark" src="${logoSrc}" alt="duotech logo">
              <span class="brand-tail">TECHNOLOGY</span>
            </a>
            <p>Building digital products that drive business growth across Africa.</p>
          </div>
          <div class="footer-col">
            <h4>Navigate</h4>
            <a href="${homeHref}">Home</a>
            <a href="${pageHref("usecases")}">Use Cases</a>
            <a href="${pageHref("impact")}">Impact</a>
          </div>
          <div class="footer-col">
            <h4>Company</h4>
            <a href="${pageHref("company")}">About Us</a>
            <a href="${pageHref("blog")}">Blog</a>
            <a href="${pageHref("meeting")}">Request a Meeting</a>
          </div>
          <div class="footer-col">
            <h4>Compliance</h4>
            <a href="${assetHref("pdf/data_controller.pdf")}" target="_blank" rel="noopener noreferrer">Data Controller Certificate</a>
            <a href="mailto:info@duotech.rw">info@duotech.rw</a>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="footer-copy">© 2026 DuoTech. All rights reserved.</div>
          <div class="footer-socials">
            <a href="https://linkedin.com/company/duotech-rw" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://x.com/duotech_rw" target="_blank" rel="noopener noreferrer">X</a>
            <a href="https://youtube.com/@duotech" target="_blank" rel="noopener noreferrer">YouTube</a>
          </div>
        </div>
      </footer>
    `;
  }
}

class PageHeader extends HTMLElement {
  connectedCallback() {
    const images = this.getAttribute("images") || "";
    const tag = this.getAttribute("tag") || "";
    const title = this.getAttribute("title") || "";
    const subtitle = this.getAttribute("subtitle") || "";
    this.innerHTML = `
      <div class="page-hero blend-card" style="${images}">
        <div class="section-tag">${tag}</div>
        <h1>${title}</h1>
        <p class="hero-sub">${subtitle}</p>
      </div>
    `;
  }
}

customElements.define("site-nav", SiteNav);
customElements.define("site-footer", SiteFooter);
customElements.define("page-header", PageHeader);
