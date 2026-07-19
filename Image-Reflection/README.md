# Image Reflection
> Code snippet : 

```css
.bg::before {
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.2),
    #fff 60%,
    #fff
  );
  
  .bg::after {
  content: "";
  position: absolute;
  background-image: inherit;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: inherit;
  height: inherit;
  top: 101%;
  transform: rotateX(180deg);
}
  
```
