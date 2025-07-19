

export function showLoader() {
  const loader = document.querySelector("#loader-overlay");
  loader.classList.remove("hidden");
}

export function hiddenLoader() {
  const loader = document.querySelector("#loader-overlay");
  loader.classList.add("hidden");
}