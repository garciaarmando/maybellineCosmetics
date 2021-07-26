import darkMode from "../components/brandsDarkMode.js";

let d = document;

function fetchBrands() {
    const $brandsContainer = d.querySelector(".main-brands-list"),
        // $template = d.getElementById("brands-list").content,
        $fragment = d.createDocumentFragment();
    async function getData() {
        try {
            let res = await fetch(
                    "https://makeup-api.herokuapp.com/api/v1/products.json"
                ),
                json = await res.json(),
                setObj = new Set(),
                uniques = json.reduce((acc, el) => {
                    if (!setObj.has(el.brand)) {
                        setObj.add(el.brand, el);
                        acc.push(el);
                    }
                    return acc;
                }, []);
            uniques.forEach((el) => {
                const $li = d.createElement("li"),
                    $a = d.createElement("a");
                $li.setAttribute("data-darkModeLi", "");
                $a.setAttribute("href", `${el.website_link}`);
                $a.setAttribute("target", "_blank");
                $a.setAttribute("rel", "noopener noreferrer");
                $a.setAttribute("data-darkModeTitleAndAnchorColor", "");
                $a.textContent = `${el.brand}`;
                $a.textContent = $a.textContent.toUpperCase();
                $li.appendChild($a);
                $fragment.appendChild($li);
            });
            $brandsContainer.appendChild($fragment);
            darkMode(
                "dark-mode-backgroundColor",
                "dark-mode-menus",
                "dark-mode-li",
                "dark-mode-title-anchor"
            );
        } catch (err) {
            let errorMessage =
                err.statusText || "Ocurrió un error al tratar de obtener los datos";
            $brandsContainer.innerHTML = `<p>Error: ${errorMessage}</p>`;
        } finally {}
    }
    getData();
}

fetchBrands();