# dynamic-card

A lightweight, zero-dependency web component for building beautiful, customizable cards. Works with React, Vue, Angular, Svelte, and plain HTML.

[![npm version](https://img.shields.io/npm/v/@farhanbshafiq/dynamic-card)](https://www.npmjs.com/package/@farhanbshafiq/dynamic-card)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@farhanbshafiq/dynamic-card)](https://bundlephobia.com/package/@farhanbshafiq/dynamic-card)
[![license](https://img.shields.io/npm/l/@farhanbshafiq/dynamic-card)](LICENSE)

## Installation

```bash
npm install @farhanbshafiq/dynamic-card
```

Or via CDN:

```html
<script src="https://unpkg.com/@farhanbshafiq/dynamic-card@latest/dist/dynamic-card.min.js"></script>
```

## Usage

```html
<!-- Basic -->
<dynamic-card title="Hello World" theme="primary" elevation="3">
  <p>Your content here!</p>
</dynamic-card>

<!-- Custom colors -->
<dynamic-card
  title="Custom Card"
  bg-color="#9b59b6"
  text-color="#ffffff"
  border-color="#8e44ad"
>
  <p>Use any hex or rgb color.</p>
</dynamic-card>

<!-- Gradient background -->
<dynamic-card
  title="Gradient Card"
  gradient-start="#667eea"
  gradient-end="#764ba2"
  gradient-direction="135deg"
  text-color="#ffffff"
>
  <p>Beautiful gradient backgrounds.</p>
</dynamic-card>

<!-- With animation -->
<dynamic-card title="Animated" theme="success" animation="fade" hover-effect="lift">
  <p>Smooth entrance and hover effects.</p>
</dynamic-card>
```

### JavaScript import

```js
import '@farhanbshafiq/dynamic-card';
```

### Clickable cards

```html
<dynamic-card id="myCard" title="Click Me" clickable="true" theme="primary">
  <p>This card fires an event when clicked.</p>
</dynamic-card>

<script>
  document.getElementById('myCard').addEventListener('card-click', (e) => {
    console.log('Card clicked!', e.detail);
  });
</script>
```

## Attributes

| Attribute | Type | Default | Description |
|---|---|---|---|
| `title` | string | — | Card header title |
| `subtitle` | string | — | Text below the title |
| `icon` | string | — | Emoji or icon in the header |
| `theme` | string | `light` | Built-in theme name |
| `bg-color` | string | — | Background color (hex/rgb) |
| `text-color` | string | — | Text color |
| `border-color` | string | — | Border color |
| `border-width` | string | `1px` | Border width |
| `gradient-start` | string | — | Gradient start color |
| `gradient-end` | string | — | Gradient end color |
| `gradient-direction` | string | `135deg` | Gradient angle |
| `elevation` | number | `1` | Shadow depth (0–5) |
| `border-radius` | string | `8px` | Corner radius |
| `width` | string | `auto` | Card width |
| `height` | string | `auto` | Card height |
| `padding` | string | `20px` | Internal padding |
| `animation` | string | `none` | Entrance animation |
| `hover-effect` | string | `lift` | Hover effect |
| `image` | string | — | Image URL |
| `image-position` | string | `top` | `top`, `bottom`, or `background` |
| `clickable` | boolean | `false` | Fires `card-click` event on click |

## Themes

```html
<!-- Base -->
<dynamic-card theme="light">...</dynamic-card>
<dynamic-card theme="dark">...</dynamic-card>

<!-- Colors -->
<dynamic-card theme="primary">...</dynamic-card>   <!-- Purple gradient -->
<dynamic-card theme="success">...</dynamic-card>   <!-- Green-blue gradient -->
<dynamic-card theme="warning">...</dynamic-card>   <!-- Orange gradient -->
<dynamic-card theme="danger">...</dynamic-card>    <!-- Red gradient -->
<dynamic-card theme="info">...</dynamic-card>      <!-- Cyan-pink gradient -->

<!-- Glass -->
<dynamic-card theme="glass">...</dynamic-card>
<dynamic-card theme="glass-dark">...</dynamic-card>

<!-- Nature -->
<dynamic-card theme="sunset">...</dynamic-card>
<dynamic-card theme="ocean">...</dynamic-card>
<dynamic-card theme="forest">...</dynamic-card>
<dynamic-card theme="aurora">...</dynamic-card>
```

## Animations

```html
<!-- Entrance -->
<dynamic-card animation="fade">...</dynamic-card>
<dynamic-card animation="slide">...</dynamic-card>
<dynamic-card animation="scale">...</dynamic-card>
<dynamic-card animation="bounce">...</dynamic-card>

<!-- Hover -->
<dynamic-card hover-effect="lift">...</dynamic-card>
<dynamic-card hover-effect="scale">...</dynamic-card>
<dynamic-card hover-effect="glow">...</dynamic-card>
<dynamic-card hover-effect="rotate">...</dynamic-card>
<dynamic-card hover-effect="shake">...</dynamic-card>
```

## Framework examples

<details>
<summary>React</summary>

```jsx
import '@farhanbshafiq/dynamic-card';

function App() {
  const [theme, setTheme] = useState('primary');

  return (
    <dynamic-card title="React Card" theme={theme} elevation="3">
      <p>Dynamic Card works in React!</p>
      <button onClick={() => setTheme('success')}>Change Theme</button>
    </dynamic-card>
  );
}
```
</details>

<details>
<summary>Vue 3</summary>

```vue
<template>
  <dynamic-card :title="cardTitle" :theme="selectedTheme" elevation="3">
    <p>{{ message }}</p>
    <button @click="changeTheme">Change Theme</button>
  </dynamic-card>
</template>

<script setup>
import '@farhanbshafiq/dynamic-card';
import { ref } from 'vue';

const cardTitle = ref('Vue Card');
const selectedTheme = ref('primary');
const message = ref('Works great in Vue!');

function changeTheme() {
  selectedTheme.value = 'success';
}
</script>
```
</details>

<details>
<summary>Angular</summary>

```typescript
import '@farhanbshafiq/dynamic-card';

@Component({
  selector: 'app-root',
  template: `
    <dynamic-card title="Angular Card" theme="primary" elevation="3">
      <p>{{ message }}</p>
    </dynamic-card>
  `
})
export class AppComponent {
  message = 'Dynamic Card in Angular!';
}
```
</details>

## Browser support

Chrome 67+, Firefox 63+, Safari 10.1+, Edge 79+, Opera 54+

## Development

```bash
git clone https://github.com/farhanbinshafiq/dynamic-card.git
cd dynamic-card
npm install
npm run dev
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m 'Add my feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a pull request

## License

[MIT](LICENSE) © Farhan Bin Shafiq