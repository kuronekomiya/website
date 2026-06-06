class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <div>
          <p>Hey, thanks for reading my writing! I am approximately one thousand rats living and working in Beijing. </br>A lot of what I publish on this website was first written by hand. It is far from perfect and I try to edit as little as posible, but I hope you've enjoyed it!</p>
        </div>
      </footer>
    ;
  `}
}

customElements.define('footer-component', FooterComponent);