// Detect request animation frame
const scroll = window.requestAnimationFrame || function (callback) {
  window.setTimeout(callback, 1000 / 60);
};

const elementsToShow = document.querySelectorAll(".animate-me");

function addOrRemoveClass() {
  Array.prototype.forEach.call(elementsToShow, function (element) {
    isElementInViewport(element)
      ? element.classList.add("visible")
      : element.classList.remove("visible");
  });

  scroll(addOrRemoveClass);
}

// initial call
addOrRemoveClass();

// Helper function
function isElementInViewport(el) {
  // for jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <=
      (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight))
  );
}
