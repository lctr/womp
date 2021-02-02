const ready = function (f) {
  document.readyState === "loading"
    ? document.addEventListener("DOMContentLoaded", function (e) {
      f();
    }) : f();
};

