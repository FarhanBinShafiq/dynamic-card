# 🚀 Quick Start Guide - Dynamic Card v2.0

## 📦 What's New

**Dynamic Card v2.0** is now **10x more powerful** with:
- ✅ Custom background colors (any hex/rgb color)
- ✅ Custom gradients with direction control
- ✅ Entrance animations (fade, slide, scale, bounce)
- ✅ Hover effects (lift, scale, glow, rotate, shake)
- ✅ Icons & subtitles in headers
- ✅ Image support (top, bottom, background)
- ✅ Custom dimensions (width, height, padding)
- ✅ Clickable cards with events
- ✅ 13 built-in themes
- ✅ Perfect for GitHub READMEs!

---

## ⚡ 3-Step Quick Start

### Step 1: Extract & Navigate
```bash
# Extract the ZIP file
# Open terminal and go to the folder
cd dynamic-card-package
```

### Step 2: Install & Build
```bash
# Install dependencies
npm install

# Build the package
npm run build
```

### Step 3: Test Locally
**Double-click and open in browser:**
```
examples/index.html
```

You'll see:
- 🎨 Interactive color picker demo
- 🌈 Custom gradient examples
- 🎭 All animation effects
- ✨ All hover effects
- 🖼️ Image position examples
- 📝 GitHub README use cases
- 🎯 13 built-in themes

---

## 🎨 New Features Examples

### 1. Custom Background Color
```html
<dynamic-card 
  title="My Card"
  bg-color="#9b59b6"
  text-color="#ffffff"
>
  <p>Use ANY color you want!</p>
</dynamic-card>
```

### 2. Custom Gradient
```html
<dynamic-card 
  title="Gradient Card"
  gradient-start="#667eea"
  gradient-end="#764ba2"
  gradient-direction="135deg"
  text-color="#ffffff"
>
  <p>Beautiful gradients!</p>
</dynamic-card>
```

### 3. With Animation
```html
<dynamic-card 
  title="Animated"
  theme="primary"
  animation="fade"
  hover-effect="lift"
>
  <p>Smooth animations!</p>
</dynamic-card>
```

### 4. With Image
```html
<dynamic-card 
  title="Product"
  image="https://example.com/image.jpg"
  image-position="top"
  theme="light"
>
  <p>Perfect for products!</p>
</dynamic-card>
```

### 5. With Icon & Subtitle
```html
<dynamic-card 
  title="Notifications"
  subtitle="5 new messages"
  icon="🔔"
  theme="primary"
>
  <p>Enhanced headers!</p>
</dynamic-card>
```

---

## 📖 Documentation Files

1. **README.md** - Complete documentation with all features
2. **docs/ATTRIBUTES.md** - Every attribute explained in detail
3. **examples/index.html** - Interactive demo with ALL features
4. **examples/github-readme.html** - GitHub README examples

---

## 🎯 How to Use in Different Places

### 1. Plain HTML (Like Bootstrap)
```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/@yourusername/dynamic-card@latest"></script>
</head>
<body>
  <dynamic-card title="Hello" theme="primary">
    <p>Content here!</p>
  </dynamic-card>
</body>
</html>
```

### 2. React
```jsx
import '@yourusername/dynamic-card';

function App() {
  return (
    <dynamic-card title="React Card" theme="success">
      <p>Works in React!</p>
    </dynamic-card>
  );
}
```

### 3. Vue
```vue
<template>
  <dynamic-card title="Vue Card" theme="primary">
    <p>Works in Vue!</p>
  </dynamic-card>
</template>

<script setup>
import '@yourusername/dynamic-card';
</script>
```

### 4. GitHub README
Create `index.html` in your repo:
```html
<script src="https://unpkg.com/@yourusername/dynamic-card@latest"></script>

<dynamic-card 
  title="My Project"
  icon="🚀"
  bg-color="#24292e"
  text-color="#ffffff"
>
  <p>Project description</p>
</dynamic-card>
```

Then enable GitHub Pages and embed!

---

## 🎨 All Available Attributes

| Attribute | Example | Description |
|-----------|---------|-------------|
| `title` | `title="My Card"` | Card title |
| `subtitle` | `subtitle="Description"` | Subtitle below title |
| `icon` | `icon="🎉"` | Icon/emoji in header |
| `theme` | `theme="primary"` | Pre-built theme |
| `bg-color` | `bg-color="#9b59b6"` | Custom background |
| `text-color` | `text-color="#fff"` | Custom text color |
| `border-color` | `border-color="#333"` | Custom border |
| `gradient-start` | `gradient-start="#667eea"` | Gradient start |
| `gradient-end` | `gradient-end="#764ba2"` | Gradient end |
| `gradient-direction` | `gradient-direction="90deg"` | Gradient angle |
| `elevation` | `elevation="3"` | Shadow depth (0-5) |
| `animation` | `animation="fade"` | Entrance effect |
| `hover-effect` | `hover-effect="lift"` | Hover effect |
| `image` | `image="url.jpg"` | Image URL |
| `image-position` | `image-position="top"` | Image placement |
| `width` | `width="300px"` | Card width |
| `height` | `height="200px"` | Card height |
| `padding` | `padding="30px"` | Internal spacing |
| `clickable` | `clickable="true"` | Makes card clickable |

**See docs/ATTRIBUTES.md for complete details!**

---

## 🎨 All 13 Built-in Themes

```html
<dynamic-card theme="light">...</dynamic-card>
<dynamic-card theme="dark">...</dynamic-card>
<dynamic-card theme="primary">...</dynamic-card>
<dynamic-card theme="success">...</dynamic-card>
<dynamic-card theme="warning">...</dynamic-card>
<dynamic-card theme="danger">...</dynamic-card>
<dynamic-card theme="info">...</dynamic-card>
<dynamic-card theme="glass">...</dynamic-card>
<dynamic-card theme="glass-dark">...</dynamic-card>
<dynamic-card theme="sunset">...</dynamic-card>
<dynamic-card theme="ocean">...</dynamic-card>
<dynamic-card theme="forest">...</dynamic-card>
<dynamic-card theme="aurora">...</dynamic-card>
```

---

## 📦 Publishing to NPM

### 🎯 Important: You Get Both NPM + CDN Automatically!

When you publish to NPM, your package becomes available in **3 ways**:
1. ✅ **CDN Link** (like Bootstrap) - Automatic via UNPKG & jsDelivr
2. ✅ **NPM Install** - `npm install @yourusername/dynamic-card`
3. ✅ **Yarn Add** - `yarn add @yourusername/dynamic-card`

**You only publish ONCE to NPM, users choose how they want to use it!**

---

### Before Publishing:
1. Edit `package.json` → Replace `@yourusername` with YOUR npm username
2. Edit `README.md` → Replace `@yourusername` everywhere
3. Run `npm run build`

### Publish:
```bash
# Login to NPM (create account at npmjs.com first)
npm login

# Publish (do this just ONCE)
npm publish --access public
```

### After Publishing (Automatic):
Your package is instantly available at:
- **NPM:** `https://www.npmjs.com/package/@yourusername/dynamic-card`
- **CDN:** `https://unpkg.com/@yourusername/dynamic-card@latest/dist/dynamic-card.min.js`

**📚 See PUBLISHING_GUIDE.md for complete details!**
**📊 See FLOWCHART.md for visual explanation!**

---

## 🎯 Common Use Cases

### Hero Section
```html
<dynamic-card 
  image="hero.jpg"
  image-position="background"
  text-color="#ffffff"
  padding="60px"
  height="500px"
>
  <h1 style="font-size: 3rem;">Welcome!</h1>
  <button>Get Started</button>
</dynamic-card>
```

### Pricing Card
```html
<dynamic-card 
  title="Pro Plan"
  subtitle="$29/month"
  theme="success"
  elevation="3"
>
  <h2 style="text-align: center; font-size: 3rem;">$29</h2>
  <ul>
    <li>✓ Feature 1</li>
    <li>✓ Feature 2</li>
  </ul>
  <button>Subscribe</button>
</dynamic-card>
```

### Profile Card
```html
<dynamic-card 
  title="John Doe"
  subtitle="Software Engineer"
  icon="👨‍💻"
  theme="primary"
>
  <img src="avatar.jpg" style="width: 100px; border-radius: 50%;">
  <p>📍 Location</p>
</dynamic-card>
```

---

## 💡 Pro Tips

1. **Color Picker:** Open `examples/index.html` and use the interactive color picker to find perfect colors!

2. **Gradients:** Use gradient generators like:
   - https://cssgradient.io
   - https://uigradients.com

3. **Images:** Use Unsplash for free images:
   - https://source.unsplash.com/400x300/?nature

4. **Animations:** Refresh the page to see entrance animations again

5. **GitHub Pages:** Perfect for creating beautiful README demos!

---

## 🆘 Need Help?

- **Full Documentation:** Open `README.md`
- **All Attributes:** Open `docs/ATTRIBUTES.md`
- **Live Examples:** Open `examples/index.html`
- **GitHub Example:** Open `examples/github-readme.html`

---

## ✅ Quick Checklist

- [ ] Extracted ZIP file
- [ ] Ran `npm install`
- [ ] Ran `npm run build`
- [ ] Opened `examples/index.html` in browser
- [ ] Tried the interactive color picker
- [ ] Saw all animations and effects
- [ ] Ready to customize and publish!

---

**🎉 You're all set! Start building amazing cards!**
