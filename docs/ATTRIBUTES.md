# 🎨 Complete Attributes Guide

This guide covers all available attributes for the Dynamic Card component.

---

## 🎯 Basic Attributes

### title
- **Type:** `string`
- **Default:** `''` (empty)
- **Description:** Main title text displayed in the card header
- **Example:**
```html
<dynamic-card title="My Card Title">...</dynamic-card>
```

### subtitle
- **Type:** `string`
- **Default:** `''` (empty)
- **Description:** Subtitle text displayed below the title
- **Example:**
```html
<dynamic-card title="Welcome" subtitle="Get started today">...</dynamic-card>
```

### icon
- **Type:** `string`
- **Default:** `''` (empty)
- **Description:** Icon or emoji displayed before the title
- **Example:**
```html
<dynamic-card icon="🎉" title="Celebration">...</dynamic-card>
```

---

## 🎨 Color & Theme Attributes

### theme
- **Type:** `string`
- **Default:** `'light'`
- **Options:** `light`, `dark`, `primary`, `success`, `warning`, `danger`, `info`, `glass`, `glass-dark`, `sunset`, `ocean`, `forest`, `aurora`
- **Description:** Pre-built theme presets
- **Example:**
```html
<dynamic-card theme="primary">...</dynamic-card>
<dynamic-card theme="ocean">...</dynamic-card>
```

### bg-color
- **Type:** `string` (hex, rgb, rgba, color name)
- **Default:** Theme default
- **Description:** Custom background color (overrides theme)
- **Example:**
```html
<dynamic-card bg-color="#9b59b6">...</dynamic-card>
<dynamic-card bg-color="rgb(155, 89, 182)">...</dynamic-card>
<dynamic-card bg-color="purple">...</dynamic-card>
```

### text-color
- **Type:** `string` (hex, rgb, rgba, color name)
- **Default:** Theme default
- **Description:** Custom text color
- **Example:**
```html
<dynamic-card text-color="#ffffff">...</dynamic-card>
<dynamic-card text-color="white">...</dynamic-card>
```

### border-color
- **Type:** `string` (hex, rgb, rgba, color name)
- **Default:** Theme default
- **Description:** Custom border color
- **Example:**
```html
<dynamic-card border-color="#8e44ad">...</dynamic-card>
```

### border-width
- **Type:** `string` (CSS size)
- **Default:** `'1px'`
- **Description:** Border thickness
- **Example:**
```html
<dynamic-card border-width="2px">...</dynamic-card>
<dynamic-card border-width="0">...</dynamic-card>  <!-- No border -->
```

---

## 🌈 Gradient Attributes

### gradient-start
- **Type:** `string` (hex, rgb, rgba)
- **Default:** `null`
- **Description:** Starting color for gradient background
- **Note:** Must be used with `gradient-end`
- **Example:**
```html
<dynamic-card gradient-start="#667eea" gradient-end="#764ba2">...</dynamic-card>
```

### gradient-end
- **Type:** `string` (hex, rgb, rgba)
- **Default:** `null`
- **Description:** Ending color for gradient background
- **Note:** Must be used with `gradient-start`

### gradient-direction
- **Type:** `string` (CSS angle)
- **Default:** `'135deg'`
- **Options:** Any angle value (`0deg`, `45deg`, `90deg`, `135deg`, `180deg`, etc.)
- **Description:** Direction of the gradient
- **Examples:**
```html
<!-- Diagonal (default) -->
<dynamic-card gradient-start="#f00" gradient-end="#00f" gradient-direction="135deg">...</dynamic-card>

<!-- Horizontal -->
<dynamic-card gradient-start="#f00" gradient-end="#00f" gradient-direction="90deg">...</dynamic-card>

<!-- Vertical -->
<dynamic-card gradient-start="#f00" gradient-end="#00f" gradient-direction="180deg">...</dynamic-card>
```

---

## 🎭 Visual Effects

### elevation
- **Type:** `number` or `string`
- **Default:** `'1'`
- **Range:** `0` to `5`
- **Description:** Shadow depth level
- **Examples:**
```html
<dynamic-card elevation="0">...</dynamic-card>  <!-- Flat, no shadow -->
<dynamic-card elevation="1">...</dynamic-card>  <!-- Subtle -->
<dynamic-card elevation="2">...</dynamic-card>  <!-- Medium -->
<dynamic-card elevation="3">...</dynamic-card>  <!-- Prominent -->
<dynamic-card elevation="4">...</dynamic-card>  <!-- High -->
<dynamic-card elevation="5">...</dynamic-card>  <!-- Very high -->
```

### border-radius
- **Type:** `string` (CSS size)
- **Default:** `'8px'`
- **Description:** Corner roundness
- **Examples:**
```html
<dynamic-card border-radius="0px">...</dynamic-card>      <!-- Square -->
<dynamic-card border-radius="8px">...</dynamic-card>      <!-- Default -->
<dynamic-card border-radius="16px">...</dynamic-card>     <!-- Very round -->
<dynamic-card border-radius="50%">...</dynamic-card>      <!-- Circle (if square) -->
```

### animation
- **Type:** `string`
- **Default:** `'none'`
- **Options:** `none`, `fade`, `slide`, `scale`, `bounce`
- **Description:** Entrance animation when card appears
- **Examples:**
```html
<dynamic-card animation="fade">...</dynamic-card>     <!-- Fade in -->
<dynamic-card animation="slide">...</dynamic-card>    <!-- Slide from left -->
<dynamic-card animation="scale">...</dynamic-card>    <!-- Scale up from center -->
<dynamic-card animation="bounce">...</dynamic-card>   <!-- Bouncy entrance -->
```

### hover-effect
- **Type:** `string`
- **Default:** `'lift'`
- **Options:** `lift`, `scale`, `glow`, `rotate`, `shake`
- **Description:** Effect when hovering over the card
- **Examples:**
```html
<dynamic-card hover-effect="lift">...</dynamic-card>    <!-- Lifts up -->
<dynamic-card hover-effect="scale">...</dynamic-card>   <!-- Enlarges slightly -->
<dynamic-card hover-effect="glow">...</dynamic-card>    <!-- Glowing effect -->
<dynamic-card hover-effect="rotate">...</dynamic-card>  <!-- Slight rotation -->
<dynamic-card hover-effect="shake">...</dynamic-card>   <!-- Shakes -->
```

---

## 📏 Dimension Attributes

### width
- **Type:** `string` (CSS size)
- **Default:** `'auto'`
- **Description:** Card width
- **Examples:**
```html
<dynamic-card width="300px">...</dynamic-card>
<dynamic-card width="50%">...</dynamic-card>
<dynamic-card width="100%">...</dynamic-card>
<dynamic-card width="20rem">...</dynamic-card>
```

### height
- **Type:** `string` (CSS size)
- **Default:** `'auto'`
- **Description:** Card height
- **Examples:**
```html
<dynamic-card height="200px">...</dynamic-card>
<dynamic-card height="100%">...</dynamic-card>
<dynamic-card height="auto">...</dynamic-card>
```

### padding
- **Type:** `string` (CSS size)
- **Default:** `'20px'`
- **Description:** Internal spacing
- **Examples:**
```html
<dynamic-card padding="10px">...</dynamic-card>      <!-- Compact -->
<dynamic-card padding="20px">...</dynamic-card>      <!-- Default -->
<dynamic-card padding="40px">...</dynamic-card>      <!-- Spacious -->
<dynamic-card padding="20px 40px">...</dynamic-card> <!-- Vertical | Horizontal -->
```

---

## 🖼️ Image Attributes

### image
- **Type:** `string` (URL)
- **Default:** `''` (empty)
- **Description:** Image URL to display
- **Example:**
```html
<dynamic-card image="https://example.com/image.jpg">...</dynamic-card>
```

### image-position
- **Type:** `string`
- **Default:** `'top'`
- **Options:** `top`, `bottom`, `background`
- **Description:** Where to display the image
- **Examples:**
```html
<!-- Image above content -->
<dynamic-card image="url.jpg" image-position="top">...</dynamic-card>

<!-- Image below content -->
<dynamic-card image="url.jpg" image-position="bottom">...</dynamic-card>

<!-- Image as background overlay -->
<dynamic-card image="url.jpg" image-position="background">...</dynamic-card>
```

---

## 🖱️ Interactive Attributes

### clickable
- **Type:** `boolean` (string)
- **Default:** `'false'`
- **Values:** `'true'` or `'false'`
- **Description:** Makes the entire card clickable and fires `card-click` event
- **Example:**
```html
<dynamic-card id="myCard" clickable="true">...</dynamic-card>

<script>
  document.getElementById('myCard').addEventListener('card-click', (e) => {
    console.log('Card was clicked!', e.detail);
  });
</script>
```

---

## 🎯 Common Combinations

### Hero Section
```html
<dynamic-card 
  title="Welcome to Our Product"
  subtitle="The best solution for your needs"
  image="hero.jpg"
  image-position="background"
  text-color="#ffffff"
  padding="60px"
  height="500px"
  animation="fade"
>
  <h1 style="font-size: 3rem;">Get Started Today</h1>
  <button>Learn More</button>
</dynamic-card>
```

### Product Card
```html
<dynamic-card 
  title="Premium Headphones"
  subtitle="$199.99"
  image="product.jpg"
  image-position="top"
  theme="light"
  elevation="3"
  hover-effect="lift"
  width="300px"
>
  <p>Active noise cancellation</p>
  <button>Add to Cart</button>
</dynamic-card>
```

### Profile Card
```html
<dynamic-card 
  title="John Doe"
  subtitle="Software Engineer"
  icon="👨‍💻"
  theme="primary"
  elevation="3"
  animation="scale"
  width="350px"
>
  <div style="text-align: center;">
    <img src="avatar.jpg" style="width: 120px; border-radius: 50%;">
    <p>📍 San Francisco, CA</p>
    <button>Follow</button>
  </div>
</dynamic-card>
```

### GitHub README Card
```html
<dynamic-card 
  title="My Project"
  subtitle="v2.0.0"
  icon="🚀"
  bg-color="#24292e"
  text-color="#ffffff"
  border-color="#30363d"
  border-width="2px"
  elevation="2"
>
  <p>Description of your awesome project!</p>
  <button>View on GitHub</button>
</dynamic-card>
```

---

## 💡 Tips & Best Practices

### Performance
- Use `elevation="0"` to remove shadows and improve rendering performance
- Animations trigger on page load, use sparingly for large lists

### Accessibility
- Always provide descriptive `title` attributes
- Use sufficient color contrast for `text-color` and `bg-color`
- Ensure clickable cards have clear visual feedback

### Responsive Design
- Use percentage widths (`width="100%"`) for mobile-friendly layouts
- Reduce `padding` on smaller screens
- Consider using media queries in your parent CSS

### Color Selection
- Use gradients sparingly for visual hierarchy
- Stick to your brand colors with custom `bg-color`
- Ensure text is readable against background colors

### Combining Attributes
- Gradients override `bg-color` and `theme`
- Custom colors override theme colors
- Elevation enhances depth perception

---

## 📚 See Also

- [README.md](../README.md) - Main documentation
- [Examples](../examples/) - Live examples
- [GitHub README Example](../examples/github-readme.html) - GitHub integration
