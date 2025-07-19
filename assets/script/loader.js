

export function showLoader() {
  const loader = document.querySelector("#loader-overlay");
  loader.classList.remove("hidden");
}

export function hiddennLoader() {
  const loader = document.querySelector("#loader-overlay");
  loader.classList.add("hidden");
}