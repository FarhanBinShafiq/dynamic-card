/**
 * DynamicCard - Advanced Universal Web Component
 * @version 2.0.0
 * @license MIT
 */

class DynamicCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return [
      'title',
      'subtitle', 
      'theme',
      'bg-color',
      'text-color',
      'border-color',
      'elevation',
      'border-radius',
      'width',
      'height',
      'padding',
      'hover-effect',
      'animation',
      'gradient-start',
      'gradient-end',
      'gradient-direction',
      'border-width',
      'icon',
      'image',
      'image-position',
      'clickable'
    ];
  }

  connectedCallback() {
    this.render();
    this.attachEventListeners();
    // Trigger animation after render
    requestAnimationFrame(() => {
      const card = this.shadowRoot.querySelector('.card');
      if (card) {
        card.style.opacity = '1';
      }
    });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      // For animation changes, we need to re-trigger
      if (name === 'animation') {
        this.restartAnimation();
      } else {
        this.render();
      }
    }
  }

  restartAnimation() {
    const card = this.shadowRoot.querySelector('.card');
    if (!card) return;
    
    const animation = this.getAttribute('animation') || 'none';
    
    // Remove all animation classes
    card.classList.remove('animation-fade', 'animation-slide', 'animation-scale', 'animation-bounce');
    
    // Force reflow
    void card.offsetWidth;
    
    // Add new animation class
    if (animation !== 'none') {
      card.classList.add(`animation-${animation}`);
    }
  }

  attachEventListeners() {
    if (this.getAttribute('clickable') === 'true') {
      const card = this.shadowRoot.querySelector('.card');
      card.style.cursor = 'pointer';
      card.addEventListener('click', () => {
        this.dispatchEvent(new CustomEvent('card-click', {
          bubbles: true,
          composed: true,
          detail: { card: this }
        }));
      });
    }
  }

  render() {
    const title = this.getAttribute('title') || '';
    const subtitle = this.getAttribute('subtitle') || '';
    const theme = this.getAttribute('theme') || 'light';
    const bgColor = this.getAttribute('bg-color');
    const textColor = this.getAttribute('text-color');
    const borderColor = this.getAttribute('border-color');
    const elevation = this.getAttribute('elevation') || '1';
    const borderRadius = this.getAttribute('border-radius') || '8px';
    const width = this.getAttribute('width') || 'auto';
    const height = this.getAttribute('height') || 'auto';
    const padding = this.getAttribute('padding') || '20px';
    const hoverEffect = this.getAttribute('hover-effect') || 'lift';
    const animation = this.getAttribute('animation') || 'none';
    const gradientStart = this.getAttribute('gradient-start');
    const gradientEnd = this.getAttribute('gradient-end');
    const gradientDirection = this.getAttribute('gradient-direction') || '135deg';
    const borderWidth = this.getAttribute('border-width') || '1px';
    const icon = this.getAttribute('icon') || '';
    const image = this.getAttribute('image') || '';
    const imagePosition = this.getAttribute('image-position') || 'top';

    // Build custom background
    let backgroundStyle = '';
    if (gradientStart && gradientEnd) {
      backgroundStyle = `background: linear-gradient(${gradientDirection}, ${gradientStart}, ${gradientEnd});`;
    } else if (bgColor) {
      backgroundStyle = `background: ${bgColor};`;
    }

    // Build custom text color
    const customTextColor = textColor ? `color: ${textColor};` : '';

    // Build custom border
    const customBorder = borderColor ? `border: ${borderWidth} solid ${borderColor};` : '';

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          box-sizing: border-box;
        }

        * {
          box-sizing: border-box;
        }

        @keyframes fadeIn {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        @keyframes slideIn {
          from { 
            transform: translateX(-50px); 
            opacity: 0; 
          }
          to { 
            transform: translateX(0); 
            opacity: 1; 
          }
        }

        @keyframes scaleIn {
          from { 
            transform: scale(0.7); 
            opacity: 0; 
          }
          to { 
            transform: scale(1); 
            opacity: 1; 
          }
        }

        @keyframes bounceIn {
          0% { 
            transform: scale(0.3); 
            opacity: 0; 
          }
          50% { 
            transform: scale(1.05); 
            opacity: 1;
          }
          70% { 
            transform: scale(0.95); 
          }
          100% { 
            transform: scale(1); 
            opacity: 1; 
          }
        }

        @keyframes rotateIn {
          from {
            transform: rotate(-10deg) scale(0.8);
            opacity: 0;
          }
          to {
            transform: rotate(0deg) scale(1);
            opacity: 1;
          }
        }

        .card {
          border-radius: ${borderRadius};
          padding: ${padding};
          margin: 10px 0;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          width: ${width};
          height: ${height};
          ${backgroundStyle}
          ${customTextColor}
          ${customBorder}
          position: relative;
          overflow: hidden;
          opacity: 0;
        }

        /* Animations - Start hidden and animate in */
        .animation-fade { 
          animation: fadeIn 0.6s ease-out forwards; 
        }
        .animation-slide { 
          animation: slideIn 0.6s ease-out forwards; 
        }
        .animation-scale { 
          animation: scaleIn 0.5s ease-out forwards; 
        }
        .animation-bounce { 
          animation: bounceIn 0.8s ease-out forwards; 
        }
        .animation-rotate {
          animation: rotateIn 0.6s ease-out forwards;
        }
        .animation-none {
          opacity: 1;
        }

        /* Elevation Shadows */
        .elevation-0 { box-shadow: none; }
        .elevation-1 { box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .elevation-2 { box-shadow: 0 4px 8px rgba(0,0,0,0.12); }
        .elevation-3 { box-shadow: 0 8px 16px rgba(0,0,0,0.15); }
        .elevation-4 { box-shadow: 0 12px 24px rgba(0,0,0,0.18); }
        .elevation-5 { box-shadow: 0 16px 32px rgba(0,0,0,0.2); }

        /* Hover Effects */
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 32px rgba(0,0,0,0.2);
        }

        .hover-scale:hover {
          transform: scale(1.03);
        }

        .hover-glow:hover {
          box-shadow: 0 0 20px rgba(102, 126, 234, 0.6);
        }

        .hover-rotate:hover {
          transform: rotate(2deg);
        }

        .hover-shake:hover {
          animation: shake 0.5s;
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }

        /* Light Theme */
        .theme-light {
          background: #ffffff;
          color: #333333;
          border: 1px solid #e0e0e0;
        }

        /* Dark Theme */
        .theme-dark {
          background: #2d2d2d;
          color: #ffffff;
          border: 1px solid #444444;
        }

        /* Primary Theme */
        .theme-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #ffffff;
          border: none;
        }

        /* Success Theme */
        .theme-success {
          background: linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%);
          color: #1a1a1a;
          border: none;
        }

        /* Warning Theme */
        .theme-warning {
          background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
          color: #1a1a1a;
          border: none;
        }

        /* Danger Theme */
        .theme-danger {
          background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
          color: #ffffff;
          border: none;
        }

        /* Info Theme */
        .theme-info {
          background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
          color: #1a1a1a;
          border: none;
        }

        /* Glass Theme */
        .theme-glass {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #333333;
        }

        /* Glassmorphism Dark */
        .theme-glass-dark {
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #ffffff;
        }

        /* Gradient Themes */
        .theme-sunset {
          background: linear-gradient(135deg, #ff6b6b 0%, #feca57 100%);
          color: #ffffff;
          border: none;
        }

        .theme-ocean {
          background: linear-gradient(135deg, #2E3192 0%, #1BFFFF 100%);
          color: #ffffff;
          border: none;
        }

        .theme-forest {
          background: linear-gradient(135deg, #134e5e 0%, #71b280 100%);
          color: #ffffff;
          border: none;
        }

        .theme-aurora {
          background: linear-gradient(135deg, #00c6ff 0%, #0072ff 100%);
          color: #ffffff;
          border: none;
        }

        /* Card Image */
        .card-image {
          width: 100%;
          border-radius: 4px;
          margin-bottom: 16px;
        }

        .card-image.position-top {
          margin-bottom: 16px;
          margin-top: -20px;
          margin-left: -20px;
          margin-right: -20px;
          width: calc(100% + 40px);
          border-radius: ${borderRadius} ${borderRadius} 0 0;
        }

        .card-image.position-bottom {
          margin-top: 16px;
          margin-bottom: -20px;
          margin-left: -20px;
          margin-right: -20px;
          width: calc(100% + 40px);
          border-radius: 0 0 ${borderRadius} ${borderRadius};
        }

        .card-image.position-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.3;
          border-radius: ${borderRadius};
          margin: 0;
        }

        .card-header {
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .card-icon {
          font-size: 2rem;
          line-height: 1;
        }

        .card-header-text {
          flex: 1;
        }

        .card-title {
          margin: 0;
          font-size: 1.5rem;
          font-weight: 600;
          line-height: 1.4;
        }

        .card-subtitle {
          margin: 4px 0 0 0;
          font-size: 0.9rem;
          opacity: 0.8;
          font-weight: 400;
        }

        .card-content {
          line-height: 1.6;
          position: relative;
          z-index: 1;
        }

        .card-content ::slotted(*) {
          margin: 0;
        }

        .card-content ::slotted(p) {
          margin-bottom: 12px;
        }

        .card-content ::slotted(h1),
        .card-content ::slotted(h2),
        .card-content ::slotted(h3) {
          margin-top: 0;
          margin-bottom: 12px;
        }

        .card-content ::slotted(img) {
          max-width: 100%;
          height: auto;
          border-radius: 4px;
        }

        .card-content ::slotted(button) {
          margin-top: 12px;
        }

        .card-content ::slotted(ul),
        .card-content ::slotted(ol) {
          padding-left: 20px;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .card {
            padding: 16px;
          }
          
          .card-title {
            font-size: 1.25rem;
          }
        }

        /* Print styles */
        @media print {
          .card {
            box-shadow: none;
            border: 1px solid #ccc;
            page-break-inside: avoid;
          }
        }
      </style>
      
      <div class="card theme-${theme} elevation-${elevation} hover-${hoverEffect} animation-${animation}">
        ${image && imagePosition === 'background' ? `
          <img src="${image}" class="card-image position-background" alt="" />
        ` : ''}
        
        ${image && imagePosition === 'top' ? `
          <img src="${image}" class="card-image position-top" alt="" />
        ` : ''}
        
        ${(title || subtitle || icon) ? `
          <div class="card-header">
            ${icon ? `<div class="card-icon">${icon}</div>` : ''}
            <div class="card-header-text">
              ${title ? `<h2 class="card-title">${title}</h2>` : ''}
              ${subtitle ? `<p class="card-subtitle">${subtitle}</p>` : ''}
            </div>
          </div>
        ` : ''}
        
        <div class="card-content">
          <slot></slot>
        </div>
        
        ${image && imagePosition === 'bottom' ? `
          <img src="${image}" class="card-image position-bottom" alt="" />
        ` : ''}
      </div>
    `;
  }
}

// Register the custom element
if (!customElements.get('dynamic-card')) {
  customElements.define('dynamic-card', DynamicCard);
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DynamicCard;
}

// Add utility function for creating cards programmatically
if (typeof window !== 'undefined') {
  window.createDynamicCard = function(options) {
    const card = document.createElement('dynamic-card');
    
    Object.keys(options).forEach(key => {
      if (key === 'content') {
        card.innerHTML = options[key];
      } else {
        card.setAttribute(key, options[key]);
      }
    });
    
    return card;
  };
}
