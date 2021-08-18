const d = document,
    ls = localStorage;

/**
 * This function applies the dark mode to the page if the hour is > 20 pm, further, it saves the value applied before in the local storage to avoid re-apply the dark/light theme if the user reloads the page.
 * @param {String} darkBackground A class defined on the .css file that put the background in dark mode in the body and in every card rendered
 * @param {String} darkBorderWhite A class defined on the .css file that put the border in white in dark mode in every card rendered
 * @param {String} darkItemName A class defined on the .css file that put the item name in white in dark mode in every card rendered
 * @param {String} darkItemSpecsAndDesc A class defined on the .css file that put the item specs and description in white in dark mode in every card rendered
 */
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
}