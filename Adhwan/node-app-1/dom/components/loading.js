class AdhLoading extends HTMLElement {
  constructor () {
    super(); 
    this.attachShadow({ mode: 'open' });
    const wrapper = document.createElement('div'),
      dots = document.createElement('div'),
      dot1 = document.createElement('i'),
      dot2 = document.createElement('i'),
      dot3 = document.createElement('i');
    
    wrapper.setAttribute('class', 'loading-content');
    dots.setAttribute('class', 'loading-dots dark-gray');
    dots.appendChild(dot1);
    dots.appendChild(dot2);
    dots.appendChild(dot3);

    wrapper.appendChild(dots);
    
    const style = document.createElement('link');
    style.setAttribute('rel', 'stylesheet');
    style.setAttribute('href', 'loading.css');

    this.shadowRoot.append(style, wrapper);
  }
}

customElements.define('loading-dots', AdhLoading);

