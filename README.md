# 🎴 Dynamic Card v2.0 - Advanced Universal Web Component

<div align="center">

![Version](https://img.shields.io/npm/v/@yourusername/dynamic-card)
![License](https://img.shields.io/npm/l/@yourusername/dynamic-card)
![Size](https://img.shields.io/bundlephobia/minzip/@yourusername/dynamic-card)
![Downloads](https://img.shields.io/npm/dm/@yourusername/dynamic-card)

**The most customizable card component for the web**

Works with React • Vue • Angular • Svelte • Plain HTML

[Demo](#-live-demo) • [Installation](#-installation) • [Documentation](#-documentation)

</div>

---

## ✨ What's New in v2.0

- 🎨 **Custom Background Colors** - Use any hex/rgb color
- 🌈 **Custom Gradients** - Create beautiful gradient backgrounds
- 🎭 **Entrance Animations** - Fade, slide, scale, and bounce effects
- ✨ **Hover Effects** - Lift, scale, glow, rotate, and shake
- 🎯 **Icons & Subtitles** - Enhanced header options
- 🖼️ **Image Support** - Top, bottom, or background images
- 📏 **Custom Dimensions** - Set width, height, and padding
- 🖱️ **Clickable Cards** - Event support for interactive cards
- 🎨 **13 Built-in Themes** - More theme options
- 📝 **GitHub README Ready** - Perfect for project documentation

---

## 🚀 Features

- 🚀 **Zero Dependencies** - Pure vanilla JavaScript
- 📦 **Tiny Size** - Less than 3KB gzipped
- 🎨 **Fully Customizable** - Control every aspect with attributes
- 🔧 **Framework Agnostic** - Works everywhere
- 📱 **Responsive** - Mobile-friendly by default
- ⚡ **Fast** - Native Web Components performance
- 🌐 **Universal** - CDN or NPM installation
- 💪 **TypeScript Ready** - Full type support

---

## 📦 Installation

### Option 1: Via CDN (Recommended)

```html
<script src="https://unpkg.com/@yourusername/dynamic-card@latest/dist/dynamic-card.min.js"></script>
```

Or use jsDelivr:

```html
<script src="https://cdn.jsdelivr.net/npm/@yourusername/dynamic-card@latest/dist/dynamic-card.min.js"></script>
```

### Option 2: Via NPM

```bash
npm install @yourusername/dynamic-card
```

```javascript
import '@yourusername/dynamic-card';
```

### Option 3: Via Yarn

```bash
yarn add @yourusername/dynamic-card
```

---

## 📖 Quick Start

### Basic Usage

```html
<dynamic-card title="Hello World" theme="primary" elevation="3">
  <p>Your content here!</p>
  <button>Click Me</button>
</dynamic-card>
```

### Custom Colors

```html
<dynamic-card 
  title="Custom Card"
  bg-color="#9b59b6"
  text-color="#ffffff"
  border-color="#8e44ad"
  elevation="2"
>
  <p>Use any color you want!</p>
</dynamic-card>
```

### Custom Gradient

```html
<dynamic-card 
  title="Gradient Card"
  gradient-start="#667eea"
  gradient-end="#764ba2"
  gradient-direction="135deg"
  text-color="#ffffff"
>
  <p>Beautiful gradient backgrounds!</p>
</dynamic-card>
```

### With Animation

```html
<dynamic-card 
  title="Animated Card"
  theme="success"
  animation="fade"
  hover-effect="lift"
>
  <p>Smooth entrance and hover effects!</p>
</dynamic-card>
```

### With Image

```html
<dynamic-card 
  title="Product Card"
  image="https://example.com/product.jpg"
  image-position="top"
  theme="light"
>
  <p>Perfect for portfolios and product showcases!</p>
  <button>Learn More</button>
</dynamic-card>
```

### With Icon & Subtitle

```html
<dynamic-card 
  title="Notifications"
  subtitle="You have 5 new messages"
  icon="🔔"
  theme="primary"
>
  <p>Enhanced headers with icons and subtitles!</p>
</dynamic-card>
```

---

## 🎨 All Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `title` | string | - | Card header title |
| `subtitle` | string | - | Card subtitle (below title) |
| `icon` | string | - | Icon/emoji to display in header |
| `theme` | string | `light` | Pre-built theme (see themes below) |
| `bg-color` | string | - | Custom background color (hex/rgb) |
| `text-color` | string | - | Custom text color |
| `border-color` | string | - | Custom border color |
| `border-width` | string | `1px` | Border width |
| `gradient-start` | string | - | Gradient start color |
| `gradient-end` | string | - | Gradient end color |
| `gradient-direction` | string | `135deg` | Gradient direction |
| `elevation` | number | `1` | Shadow depth (0-5) |
| `border-radius` | string | `8px` | Corner radius |
| `width` | string | `auto` | Card width |
| `height` | string | `auto` | Card height |
| `padding` | string | `20px` | Internal padding |
| `animation` | string | `none` | Entrance animation (fade, slide, scale, bounce) |
| `hover-effect` | string | `lift` | Hover effect (lift, scale, glow, rotate, shake) |
| `image` | string | - | Image URL |
| `image-position` | string | `top` | Image position (top, bottom, background) |
| `clickable` | boolean | `false` | Make card clickable (fires `card-click` event) |

---

## 🎨 Built-in Themes

```html
<!-- Light & Dark -->
<dynamic-card theme="light">...</dynamic-card>
<dynamic-card theme="dark">...</dynamic-card>

<!-- Colors -->
<dynamic-card theme="primary">...</dynamic-card>   <!-- Purple gradient -->
<dynamic-card theme="success">...</dynamic-card>   <!-- Green-blue gradient -->
<dynamic-card theme="warning">...</dynamic-card>   <!-- Orange gradient -->
<dynamic-card theme="danger">...</dynamic-card>    <!-- Red gradient -->
<dynamic-card theme="info">...</dynamic-card>      <!-- Cyan-pink gradient -->

<!-- Special Effects -->
<dynamic-card theme="glass">...</dynamic-card>         <!-- Glassmorphism -->
<dynamic-card theme="glass-dark">...</dynamic-card>    <!-- Dark glass -->

<!-- Nature Gradients -->
<dynamic-card theme="sunset">...</dynamic-card>    <!-- Red-yellow -->
<dynamic-card theme="ocean">...</dynamic-card>     <!-- Deep blue -->
<dynamic-card theme="forest">...</dynamic-card>    <!-- Green -->
<dynamic-card theme="aurora">...</dynamic-card>    <!-- Sky blue -->
```

---

## 🎭 Animations & Effects

### Entrance Animations

```html
<dynamic-card animation="fade">...</dynamic-card>    <!-- Fade in -->
<dynamic-card animation="slide">...</dynamic-card>   <!-- Slide from left -->
<dynamic-card animation="scale">...</dynamic-card>   <!-- Scale up -->
<dynamic-card animation="bounce">...</dynamic-card>  <!-- Bounce in -->
```

### Hover Effects

```html
<dynamic-card hover-effect="lift">...</dynamic-card>    <!-- Lifts up -->
<dynamic-card hover-effect="scale">...</dynamic-card>   <!-- Enlarges -->
<dynamic-card hover-effect="glow">...</dynamic-card>    <!-- Glowing -->
<dynamic-card hover-effect="rotate">...</dynamic-card>  <!-- Rotates -->
<dynamic-card hover-effect="shake">...</dynamic-card>   <!-- Shakes -->
```

---

## 🖼️ Using Images

### Top Image
```html
<dynamic-card 
  image="https://example.com/image.jpg"
  image-position="top"
  title="Blog Post"
>
  <p>Image appears above content</p>
</dynamic-card>
```

### Bottom Image
```html
<dynamic-card 
  image="https://example.com/image.jpg"
  image-position="bottom"
  title="Product"
>
  <p>Image appears below content</p>
</dynamic-card>
```

### Background Image
```html
<dynamic-card 
  image="https://example.com/hero.jpg"
  image-position="background"
  text-color="#ffffff"
  title="Hero Section"
>
  <p>Image as background overlay</p>
</dynamic-card>
```

---

## 🖱️ Interactive Cards

Make cards clickable and listen for events:

```html
<dynamic-card 
  id="myCard"
  title="Click Me"
  clickable="true"
  theme="primary"
>
  <p>This card fires events when clicked!</p>
</dynamic-card>

<script>
  document.getElementById('myCard').addEventListener('card-click', (e) => {
    console.log('Card clicked!', e.detail);
    // Do something...
  });
</script>
```

---

## ⚛️ Framework Examples

### React

```jsx
import '@yourusername/dynamic-card';

function App() {
  const [theme, setTheme] = useState('primary');
  
  return (
    <dynamic-card 
      title="React Card" 
      theme={theme}
      elevation="3"
    >
      <p>Dynamic Card works perfectly in React!</p>
      <button onClick={() => setTheme('success')}>
        Change Theme
      </button>
    </dynamic-card>
  );
}
```

### Vue 3

```vue
<template>
  <dynamic-card 
    :title="cardTitle"
    :theme="selectedTheme"
    elevation="3"
  >
    <p>{{ message }}</p>
    <button @click="changeTheme">Change Theme</button>
  </dynamic-card>
</template>

<script setup>
import '@yourusername/dynamic-card';
import { ref } from 'vue';

const cardTitle = ref('Vue Card');
const selectedTheme = ref('primary');
const message = ref('Works great in Vue!');

function changeTheme() {
  selectedTheme.value = 'success';
}
</script>
```

### Angular

```typescript
// app.component.ts
import '@yourusername/dynamic-card';

@Component({
  selector: 'app-root',
  template: `
    <dynamic-card 
      title="Angular Card"
      theme="primary"
      elevation="3"
    >
      <p>{{ message }}</p>
    </dynamic-card>
  `
})
export class AppComponent {
  message = 'Dynamic Card in Angular!';
}
```

---

## 📝 Using in GitHub README

Perfect for creating beautiful project documentation!

```html
<!-- In your GitHub Pages or README -->
<script src="https://unpkg.com/@yourusername/dynamic-card@latest"></script>

<dynamic-card 
  title="My Awesome Project"
  subtitle="v2.0.0"
  icon="🚀"
  bg-color="#24292e"
  text-color="#ffffff"
  border-color="#30363d"
>
  <p>Project description here...</p>
  <button>View Demo</button>
</dynamic-card>
```

See [examples/github-readme.html](examples/github-readme.html) for complete GitHub README examples!

---

## 🎯 Advanced Examples

### Profile Card

```html
<dynamic-card 
  title="John Doe"
  subtitle="Software Engineer"
  icon="👨‍💻"
  theme="primary"
  elevation="3"
>
  <div style="text-align: center;">
    <img src="avatar.jpg" style="width: 100px; border-radius: 50%;">
    <p>📍 San Francisco, CA</p>
    <button>View Profile</button>
  </div>
</dynamic-card>
```

### Pricing Card

```html
<dynamic-card 
  title="Pro Plan"
  subtitle="$29/month"
  theme="success"
  elevation="2"
>
  <h2 style="text-align: center; font-size: 3rem;">$29</h2>
  <ul>
    <li>✓ Unlimited Projects</li>
    <li>✓ 24/7 Support</li>
    <li>✓ Advanced Analytics</li>
  </ul>
  <button style="width: 100%;">Get Started</button>
</dynamic-card>
```

### Stats Card

```html
<dynamic-card 
  title="Dashboard Stats"
  icon="📊"
  theme="dark"
  elevation="3"
>
  <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;">
    <div style="text-align: center;">
      <div style="font-size: 2rem; font-weight: bold;">1,234</div>
      <div>Visitors</div>
    </div>
    <div style="text-align: center;">
      <div style="font-size: 2rem; font-weight: bold;">567</div>
      <div>Sales</div>
    </div>
  </div>
</dynamic-card>
```

---

## 🌟 Browser Support

- ✅ Chrome 67+
- ✅ Firefox 63+
- ✅ Safari 10.1+
- ✅ Edge 79+
- ✅ Opera 54+

---

## 🛠️ Development

```bash
# Clone repository
git clone https://github.com/FarhanBinShafiq/dynamic-card.git
cd dynamic-card

# Install dependencies
npm install

# Build
npm run build

# Run development server
npm run dev
```

---

## 📝 License

MIT © [Your Name]

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 🐛 Bug Reports

Found a bug? [Open an issue](https://github.com/FarhanBinShafiq/dynamic-card/issues)

---

## ⭐ Show Your Support

Give a ⭐️ if this project helped you!

---

## 📚 Documentation

- [Full Documentation](https://github.com/FarhanBinShafiq/dynamic-card.git)
- [API Reference](docs/API.md)
- [Examples](examples/)
- [Changelog](CHANGELOG.md)

---

<div align="center">
Made with ❤️ by <a href="https://github.com/FarhanBinShafiq">Farhan</a>
</div>
#   d y n a m i c - c a r d  
 