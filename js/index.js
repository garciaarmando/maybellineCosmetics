// import fetchBrands from "./components/fetchBrands.js";
// import fetchMainCardInfo from "./components/fetchMainCard.js";
import hamburgerMenu from "./components/hamburgerMenu.js";

const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
});
/* fetchMainCardInfo();
fetchBrands(); */