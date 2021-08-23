const d = document,
    ls = localStorage;
export default function darkMode(
    darkBackground,
    darkTitleAnchorAndMenus,
    darkBorderProductContainer
) {
    const $darkBackground = d.querySelectorAll("[data-darkModeBackgroundColor]"),
        $darkTitleAnchorAndMenus = d.querySelectorAll(
            "[data-darkTitleAnchorAndMenus]"
        ),
        $darkBorderProductContainer = d.querySelectorAll(
            "[data-darkBorderProductContainer]"
        ),
        date = new Date(),
        hour = date.getHours();
    const enableLightMode = () => {
        $darkBackground.forEach((el) => {
            el.classList.remove(darkBackground);
        });
        $darkTitleAnchorAndMenus.forEach((el) => {
            el.classList.remove(darkTitleAnchorAndMenus);
        });
        $darkBorderProductContainer.forEach((el) => {
            el.classList.remove(darkBorderProductContainer);
        });

        ls.setItem("theme", "light");
    };
    const enableDarkMode = () => {
        $darkBackground.forEach((el) => {
            el.classList.add(darkBackground);
        });
        $darkTitleAnchorAndMenus.forEach((el) => {
            el.classList.add(darkTitleAnchorAndMenus);
        });
        $darkBorderProductContainer.forEach((el) => {
            el.classList.add(darkBorderProductContainer);
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
    console.log(
        $darkBackground,
        $darkTitleAnchorAndMenus,
        $darkBorderProductContainer
    );
}