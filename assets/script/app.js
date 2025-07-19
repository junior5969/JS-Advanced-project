

import "../css/style.css";
import { setupMenuToggle } from "./navbar.js";
import { setupSearch } from "./search.js";
import { hiddenLoader } from './loader';

document.addEventListener("DOMContentLoaded", () => {
   hiddenLoader();
  setupMenuToggle();
  setupSearch();
});