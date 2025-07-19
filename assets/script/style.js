export function showSection(section) {
  section.style.display = "flex";
  section.style.flexDirection = "column";
  section.style.alignItems = "center";
  section.style.justifyContent = "center";
  section.innerHTML = "";
}

export function showElement(element) {
  element.style.display = "block";
}

export function hiddenElement(element) {
  element.style.display = "none";
}
