<?xml version="1.0" encoding="UTF-8"?>

<project>
  <name>🎴 Dynamic Card v2.0</name>
  <tagline>
    The most customizable, framework-agnostic card component for the modern web.
  </tagline>

  <links>
    <docs>#attributes-reference</docs>
    <demo>#quick-start</demo>
    <issues>https://github.com/FarhanBinShafiq/dynamic-card/issues</issues>
  </links>

  <tableOfContents>
    <section>Key Features</section>
    <section>Installation</section>
    <section>Quick Start</section>
    <section>Built-in Themes</section>
    <section>Framework Integration</section>
    <section>Attributes Reference</section>
    <section>Development &amp; Contribution</section>
  </tableOfContents>

  <features>
    <feature>Zero Dependencies – Built with pure Vanilla JavaScript and native Web Components.</feature>
    <feature>Featherweight – Tiny footprint (under 3KB gzipped).</feature>
    <feature>Universal – Works with React, Vue, Angular, Svelte, or standard HTML.</feature>
    <feature>High Performance – Utilizes Shadow DOM for encapsulated styles.</feature>
    <feature>Customization First – Full control over gradients, animations, and hover effects.</feature>
  </features>

  <installation>
    <cdn>
      <description>Place inside &lt;head&gt; or before closing &lt;/body&gt; tag:</description>
      <script>
        &lt;script src="https://unpkg.com/@farhanbshafiq/dynamic-card@latest/dist/dynamic-card.min.js"&gt;&lt;/script&gt;
      </script>
    </cdn>

    <npm>
      <command>npm install @farhanbshafiq/dynamic-card</command>
      <command>yarn add @farhanbshafiq/dynamic-card</command>
      <import>import '@farhanbshafiq/dynamic-card';</import>
    </npm>
  </installation>

  <quickStart>
    <example name="Modern Gradient Card">
      <code>
        &lt;dynamic-card 
          title="Advanced Analytics"
          subtitle="v2.0 Performance"
          icon="📈"
          gradient-start="#667eea"
          gradient-end="#764ba2"
          text-color="#ffffff"
          animation="fade"
          hover-effect="lift"&gt;

          &lt;p&gt;Our new engine is 40% faster than previous versions.&lt;/p&gt;
          &lt;button&gt;View Report&lt;/button&gt;

        &lt;/dynamic-card&gt;
      </code>
    </example>

    <example name="Glassmorphism Effect">
      <code>
        &lt;dynamic-card theme="glass" elevation="3" title="Glass Card"&gt;
          &lt;p&gt;Perfect for modern UI designs with background images.&lt;/p&gt;
        &lt;/dynamic-card&gt;
      </code>
    </example>
  </quickStart>

  <themes>
    <theme name="primary">Vibrant purple gradient</theme>
    <theme name="success">Refreshing green-blue gradient</theme>
    <theme name="glass">Modern translucent glassmorphism</theme>
    <theme name="sunset">Warm red-yellow aesthetic</theme>
    <theme name="ocean">Deep professional blues</theme>
    <theme name="dark">Sleek dark-mode compatible</theme>
  </themes>

  <frameworkIntegration>
    <react>
      <code>
        import '@farhanbshafiq/dynamic-card';

        export const MyCard = () => (
          &lt;dynamic-card title="React Component" theme="primary"&gt;
            &lt;p&gt;Interoperability at its finest.&lt;/p&gt;
          &lt;/dynamic-card&gt;
        );
      </code>
    </react>

    <vue>
      <code>
        &lt;template&gt;
          &lt;dynamic-card title="Vue Integrated" :theme="userTheme"&gt;
            &lt;p&gt;Static or reactive attributes work natively.&lt;/p&gt;
          &lt;/dynamic-card&gt;
        &lt;/template&gt;

        &lt;script setup&gt;
        import '@farhanbshafiq/dynamic-card';
        const userTheme = "success";
        &lt;/script&gt;
      </code>
    </vue>
  </frameworkIntegration>

  <attributesReference>
    <attribute name="title" type="string">Main heading of the card</attribute>
    <attribute name="subtitle" type="string">Optional subheading</attribute>
    <attribute name="icon" type="string">Emoji or icon text</attribute>
    <attribute name="theme" type="string">Built-in theme name</attribute>
    <attribute name="gradient-start" type="color">Start gradient color</attribute>
    <attribute name="gradient-end" type="color">End gradient color</attribute>
    <attribute name="text-color" type="color">Custom text color</attribute>
    <attribute name="animation" type="string">fade, slide, etc.</attribute>
    <attribute name="hover-effect" type="string">lift, glow, scale</attribute>
    <attribute name="elevation" type="number">Shadow depth (1–5)</attribute>
  </attributesReference>

  <development>
    <steps>
      <step>git clone https://github.com/FarhanBinShafiq/dynamic-card.git</step>
      <step>npm install</step>
      <step>npm run dev</step>
      <step>npm run build</step>
    </steps>
  </development>

  <support>
    <message>If this project helped you, please give it a star on GitHub ⭐</message>
    <author>Made with ❤️ by Farhan</author>
  </support>

</project>
