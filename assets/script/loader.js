
export function showLoader() {
  const loader = document.querySelector("#loader-overlay");
  loader.classList.remove("hidden-loader");
}

export function hiddenLoader() {
  const loader = document.querySelector("#loader-overlay");
  loader.classList.add("hidden-loader");
}