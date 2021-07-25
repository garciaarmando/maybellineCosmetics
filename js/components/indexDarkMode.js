const d = document,
    ls = localStorage;
export default function darkMode(
    darkBackground,
    darkBorderWhite,
    darkItemName,
    darkItemSpecsAndDesc
) {
    const $darkBackground = d.querySelectorAll("[data-darkModeBackgroundColor]"),
        $darkBorderWhite = d.querySelectorAll("[data-darkModeBorderWhite]"),
        $darkItemName = d.querySelectorAll("[data-darkModeItemName]"),
        $darkItemSpecsAndDesc = d.querySelectorAll(
            "[data-darkModeItemSpecsAndName]"
        ),
        date = new Date(),
        hour = date.getHours();
    const enableLightMode = () => {
        $darkBackground.forEach((el) => {
            el.classList.remove(darkBackground);
        });
        $darkBorderWhite.forEach((el) => {
            el.classList.remove(darkBorderWhite);
        });
        $darkItemName.forEach((el) => {
            el.classList.remove(darkItemName);
        });
        $darkItemSpecsAndDesc.forEach((el) => {
            el.classList.remove(darkItemSpecsAndDesc);
        });
        ls.setItem("theme", "light");
    };
    const enableDarkMode = () => {
        $darkBackground.forEach((el) => {
            el.classList.add(darkBackground);
        });
        $darkBorderWhite.forEach((el) => {
            el.classList.add(darkBorderWhite);
        });
        $darkItemName.forEach((el) => {
            el.classList.add(darkItemName);
        });
        $darkItemSpecsAndDesc.forEach((el) => {
            el.classList.add(darkItemSpecsAndDesc);
        });
        ls.setItem("theme", "dark");
    };
    if (hour < 5 || hour >= 18) {
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
}