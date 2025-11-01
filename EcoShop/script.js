document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a[data-route]");
  const views = document.querySelectorAll(".view");

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);

      views.forEach(view => {
        view.classList.toggle("active", view.id === targetId);
      });

      window.history.pushState({}, "", `#${targetId}`);
    });
  });
});
