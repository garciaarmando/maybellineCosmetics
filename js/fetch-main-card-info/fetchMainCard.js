import darkMode from "../components/indexDarkMode.js";
import modalFunction from "../components/modalFunction.js";
import readMore from "../components/readMore.js";

let d = document;

function fetchMainCardInfo() {
    const $mainItemContainer = d.querySelector(".main-item-container"),
        $fragment = d.createDocumentFragment();
    async function getData() {
        try {
            let res = await fetch(
                    "https://secret-retreat-74869.herokuapp.com/https://makeup-api.herokuapp.com/api/v1/products.json"
                ),
                json = await res.json();
            if (!res.ok) {
                throw { status: res.status, statusText: res.statusText };
            }
            json.forEach((el) => {
                const $section = d.createElement("section"),
                    $figure = d.createElement("figure"),
                    $img = d.createElement("img"),
                    $h3 = d.createElement("h3"),
                    $hr = d.createElement("hr"),
                    $h2 = d.createElement("h2"),
                    $p = d.createElement("p"),
                    $a = d.createElement("a");
                $section.classList.add("main-item-card");
                $section.id = "main-item-card";
                $figure.classList.add("main-img-container");
                $h3.classList.add("main-item-name");
                $h2.classList.add("main-item-specs");
                $p.classList.add("main-item-desc");
                $p.classList.add("content");
                $section.setAttribute("data-darkModeBorderWhite", "");
                $section.dataset.id = el.id;
                $h3.setAttribute("data-darkModeItemName", "");
                $h2.setAttribute("data-darkModeItemSpecsAndName", "");
                $p.setAttribute("data-darkModeItemSpecsAndName", "");
                $img.setAttribute("src", `${el.api_featured_image}`);
                $img.setAttribute("alt", "Product image");
                $img.setAttribute("data-darkModeItemSpecsAndName", "");
                // $h3.textContent = `${el.name} | ${el.price}`;
                $h3.textContent = el.name;
                // $h2.textContent = `${el.brand} | ${el.category} | ${el.product_type}`;
                $h2.textContent = el.brand;
                $h2.textContent = $h2.textContent.toUpperCase();
                $p.textContent = el.description;
                $p.textContent = $p.textContent.replace(/<[^>]*>?/g, "");
                $a.classList.add("more");
                $figure.appendChild($img);
                $section.appendChild($figure);
                $section.appendChild($h3);
                $section.appendChild($hr);
                $section.appendChild($h2);
                $section.appendChild($p);
                $section.appendChild($a);
                $fragment.appendChild($section);
            });
            $mainItemContainer.appendChild($fragment);
            darkMode(
                "dark-mode-backgroundColor",
                "dark-mode-borderWhite",
                "dark-mode-itemName",
                "dark-mode-itemSpecsAndDesc"
            );
            readMore();
            modalFunction();
        } catch (err) {
            let errorMessage =
                err.statusText || "Ocurrió un error al tratar de obtener los datos";
            $mainItemContainer.innerHTML = `<p>Error ${err.status}: ${errorMessage}</p>`;
        } finally {}
    }
    getData();
}
fetchMainCardInfo();