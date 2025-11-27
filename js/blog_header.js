class HeaderComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <nav>
          <div class="logo"><a href="blog_index.html"></a>NekoMiya</div>
          <ul>
            <li><a href="blog_index.html">Home</a></li>
            <li><a href="/blog_essays.html">Essays</a></li>
            <li><a href="/blog_weekly.html">Weekly</a></li>
            <li><a href="/blog_about.html">About</a></li>
            <li><a href="/blog_archive.html">Misc./archive</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define('header-component', HeaderComponent);