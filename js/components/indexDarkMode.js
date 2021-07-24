const d = document;
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
    if (hour < 5 || hour >= 20) {
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
    } else {
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
    }
}