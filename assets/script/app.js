

import "../css/style.css";
import { setupMenuToggle } from "./navbar.js";
import { setupSearch } from "./search.js";

document.addEventListener("DOMContentLoaded", () => {
  setupMenuToggle();
  setupSearch();
});