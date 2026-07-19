# Dark Animated Social Icons
> Ribbon show on hover with some cool transitions
>
> Tools used : 
* CSS
  - Transition property
  - fade effect using ( visibility + opacity + transition )

```css
    
    /* Animation Effect */
    
    .target {
    visibility: hidden;
    opacity: 0;
    transition: transform 0.3s ease-in-out, visibility 0s, opacity 0.5s ease-in-out;
    }
    
    .target:hover {
    visibility: visible;
    opacity: 1;
    transform: rotate(360deg);
    }
    
```
