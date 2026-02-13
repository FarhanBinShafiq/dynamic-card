🎴 Dynamic Card v2.0
<center>

Modern, lightweight, and fully customizable Web Component card system for the modern web.

</center>
Description

Dynamic Card v2.0 is a lightweight Web Component that allows developers to create highly customizable, animated, and theme-ready cards using pure Vanilla JavaScript.

It works seamlessly with React, Vue, Angular, Svelte, and standard HTML — with zero dependencies and Shadow DOM encapsulation for optimal performance.

Default Feature Support
Feature / Property	Support
Supported environment(s)	HTML, React, Vue, Angular, Svelte
Zero dependencies	Yes
Shadow DOM encapsulation	Yes
Built-in themes	Yes
Custom gradients	Yes
Animation effects	Yes
Hover effects	Yes
Elevation control	Yes
How to use

Install the package via CDN or NPM.

Import the component (if using a framework).

Add the <dynamic-card> element inside your HTML.

Provide the desired attributes (see below).

CDN Usage

Add this script inside your <head> or before closing </body>:

<script src="https://unpkg.com/@farhanbshafiq/dynamic-card@latest/dist/dynamic-card.min.js"></script>

NPM Installation
npm install @farhanbshafiq/dynamic-card
# or
yarn add @farhanbshafiq/dynamic-card


Then import:

import '@farhanbshafiq/dynamic-card';

Parameters
Key	Value
title	Main heading of the card
subtitle	Optional subheading
icon	Emoji or icon text
theme	Built-in theme (primary, success, glass, sunset, ocean, dark)
gradient-start	Custom gradient start color
gradient-end	Custom gradient end color
text-color	Custom text color
animation	Animation type (fade, slide, etc.)
hover-effect	Hover effect (lift, glow, scale)
elevation	Shadow depth level (1–5)

Example:

<dynamic-card 
  title="Advanced Analytics"
  subtitle="v2.0 Performance"
  icon="📈"
  theme="primary"
  animation="fade"
  hover-effect="lift"
>
  <p>Our new engine is 40% faster than previous versions.</p>
</dynamic-card>

Author

Farhan Bin Shafiq
 <br>
GitHub: https://github.com/FarhanBinShafiq

More resources

GitHub Repository
https://github.com/FarhanBinShafiq/dynamic-card

NPM Package
https://www.npmjs.com/package/@farhanbshafiq/dynamic-card

Issue Tracker
https://github.com/FarhanBinShafiq/dynamic-card/issues