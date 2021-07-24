const d = document;
export default function darkMode(darkElements) {
    const $selectors = d.querySelectorAll("[data-dark]"),
        date = new Date(),
        hour = date.getHours(); //if hour < 5 || >=20
}