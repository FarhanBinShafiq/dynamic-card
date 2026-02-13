# 🎴 Dynamic Card v2.0<div align="center">The most customizable, framework-agnostic card component for the modern web.Explore Docs • View Demo • Report Bug</div>📖 Table of Contents✨ Key Features📦 Installation🚀 Quick Start🎨 Built-in Themes⚛️ Framework Integration🛠️ Attributes Reference🚀 FeaturesZero Dependencies – Built with pure Vanilla JavaScript and native Web Components.Featherweight – Tiny footprint (under 3KB gzipped).Universal – Seamless integration with React, Vue, Angular, Svelte, or standard HTML.High Performance – Utilizes the Shadow DOM for encapsulated styles and optimal speed.Customization First – Total control over gradients, animations, and hover effects via attributes.📦 InstallationOption 1: CDN (Fastest)Place this script in your <head> or before the closing </body> tag:HTML<script src="https://unpkg.com/@farhanbshafiq/dynamic-card@latest/dist/dynamic-card.min.js"></script>
Option 2: NPM / YarnBashnpm install @farhanbshafiq/dynamic-card
# or
yarn add @farhanbshafiq/dynamic-card
Then import it into your entry file:JavaScriptimport '@farhanbshafiq/dynamic-card';
📖 Quick StartModern Gradient CardHTML<dynamic-card 
  title="Advanced Analytics"
  subtitle="v2.0 Performance"
  icon="📈"
  gradient-start="#667eea"
  gradient-end="#764ba2"
  text-color="#ffffff"
  animation="fade"
  hover-effect="lift"
>
  <p>Our new engine is 40% faster than previous versions.</p>
  <button>View Report</button>
</dynamic-card>
Glassmorphism EffectHTML<dynamic-card theme="glass" elevation="3" title="Glass Card">
  <p>Perfect for modern UI designs with background images.</p>
</dynamic-card>
🎨 Built-in ThemesThemeDescriptionprimaryVibrant purple gradientsuccessRefreshing green-blue gradientglassModern translucent glassmorphismsunsetWarm red-yellow aestheticoceanDeep professional bluesdarkSleek dark-mode compatible⚛️ Framework ExamplesReact / Next.jsJavaScriptimport '@farhanbshafiq/dynamic-card';

export const MyCard = () => (
  <dynamic-card title="React Component" theme="primary">
    <p>Interoperability at its finest.</p>
  </dynamic-card>
);
Vue 3Code snippet<template>
  <dynamic-card title="Vue Integrated" :theme="userTheme">
    <p>Static or reactive attributes work natively.</p>
  </dynamic-card>
</template>

<script setup>
import '@farhanbshafiq/dynamic-card';
const userTheme = "success";
</script>
🛠️ Development & ContributionBash# 1. Clone & Install
git clone https://github.com/FarhanBinShafiq/dynamic-card.git
npm install

# 2. Start Dev Server
npm run dev

# 3. Build for Production
npm run build
<div align="center">⭐ Show Your SupportIf this project helped you, please give it a star on GitHub!Made with ❤️ by Farhan</div>