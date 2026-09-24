const items = document.querySelectorAll(".timeline .item");

if ("IntersectionObserver" in window && items.length) {
  document.documentElement.classList.add("reveal-ready");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
  );

  items.forEach((item) => observer.observe(item));
}
