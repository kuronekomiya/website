class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <div>
          <p> Hey, thanks for reading my writing! A lot of what I publish on this website was written by hand while waiting for the bus or having my morning coffee. It is far from perfect and I try to edit as little as posible. I'm trying to capture thinking-as-it-happens.</p>
        </div>
        <nav>
          <ul>
            <li><a href="blog_index.html">Home</a></li>
            <li><a href="/blog_essays.html">Essays</a></li>
            <li><a href="/blog_weekly.html">Weekly</a></li>
            <li><a href="/blog_about.html">About</a></li>
            <li><a href="/blog_archive.html">Misc./archive</a></li>
          </ul>
        </nav>
      </footer>
    `;
  }
}

customElements.define('footer-component', FooterComponent);