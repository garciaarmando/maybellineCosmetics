const d = document,
    ls = localStorage;
export default function darkMode(darkBackground, darkLi, darkTitleAndAnchor) {
    const $darkBackground = d.querySelectorAll("[data-darkModeBackgroundColor]"),
        $darkLi = d.querySelectorAll("[data-darkModeLi]"),
        $darkTitleAndAnchor = d.querySelectorAll(
            "[data-darkModeTitleAndAnchorColor]"
        ),
        date = new Date(),
        hour = date.getHours();
    const enableLightMode = () => {
        $darkBackground.forEach((el) => {
            el.classList.remove(darkBackground);
        });
        $darkLi.forEach((el) => {
            el.classList.remove(darkLi);
        });
        $darkTitleAndAnchor.forEach((el) => {
            el.classList.remove(darkTitleAndAnchor);
        });
        ls.setItem("theme", "light");
    };
    const enableDarkMode = () => {
        $darkBackground.forEach((el) => {
            el.classList.add(darkBackground);
        });
        $darkLi.forEach((el) => {
            el.classList.add(darkLi);
        });
        $darkTitleAndAnchor.forEach((el) => {
            el.classList.add(darkTitleAndAnchor);
        });
        ls.setItem("theme", "dark");
    };
    if (hour < 5 || hour >= 20) {
        enableDarkMode();
    } else {
        enableLightMode();
    }
    d.addEventListener("DOMContentLoaded", (e) => {
        if (ls.getItem("theme") === null) {
            ls.setItem("theme", "light");
        }
        if (ls.getItem("theme") === "light") {
            enableLightMode();
        }
        if (ls.getItem("theme") === "dark") {
            enableDarkMode();
        }
    });

    // console.log($darkBackground, $darkTitleAndAnchor);
}