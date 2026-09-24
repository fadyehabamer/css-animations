# Scroll-Reveal-Timeline

> Timeline entries that slide in as you scroll

### [View Live Demo](https://fadyehabamer.github.io/css-animations/Scroll-Reveal-Timeline/)

## Overview

A vertical timeline of a few milestones in web animation. Each entry fades and slides in the first time it enters the viewport. The script only adds a `reveal-ready` class to the page when `IntersectionObserver` is available and the visitor has not asked for reduced motion, so without JavaScript, in older browsers, or with reduced motion on, every entry is simply visible.

## Built With

**Languages:** HTML · CSS · JavaScript

## Techniques Demonstrated

- `IntersectionObserver` with `unobserve` after the first reveal
- CSS transitions driven by a single class
- Progressive enhancement: content is visible by default
- Logical properties (`inset-inline`, `padding-inline`) so the layout mirrors in RTL
- Single-column layout under 720px
- `prefers-reduced-motion` checked in both CSS and JS

## Files

```
index.html
script.js
style.css
```

## Run Locally

```bash
git clone https://github.com/fadyehabamer/css-animations.git
cd css-animations/Scroll-Reveal-Timeline
```

Then open `index.html` in your browser.

---
↩ Part of the [**css-animations**](../) collection · [all my repos](https://github.com/fadyehabamer?tab=repositories) · [@fadyehabamer](https://github.com/fadyehabamer)
