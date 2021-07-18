let d = document;
//createElement en lugar de usar el template
//colocarle a img un width y un height
function fetchMainCardInfo() {
    const $mainItemContainer = d.querySelector(".main-item-container"),
        // $template = d.getElementById("template-card").content,
        $fragment = d.createDocumentFragment();
    async function getData() {
        try {
            let res = await fetch(
                    "https://makeup-api.herokuapp.com/api/v1/products.json"
                ),
                json = await res.json();
            json.forEach((el) => {
                const $section = d.createElement("section"),
                    $figure = d.createElement("figure"),
                    $img = d.createElement("img"),
                    $h3 = d.createElement("h3"),
                    $hr = d.createElement("hr"),
                    $h2 = d.createElement("h2"),
                    $p = d.createElement("p");
                $section.classList.add("main-item-card");
                $figure.classList.add("main-img-container");
                $h3.classList.add("main-item-name");
                $h2.classList.add("main-item-specs");
                $p.classList.add("main-item-desc");
                $img.setAttribute("src", `${el.image_link}`);
                $img.setAttribute("alt", "Product image");
                $h3.textContent = `${el.name} | ${el.price}`;
                $h2.textContent = `${el.brand} | ${el.category} | ${el.product_type}`;
                $p.textContent = el.description;
                $p.style.setProperty("margin-block-end", "0.1rem");
                $figure.appendChild($img);
                $section.appendChild($figure);
                $section.appendChild($h3);
                $section.appendChild($hr);
                $section.appendChild($h2);
                $section.appendChild($p);
                $fragment.appendChild($section);
            });
            $mainItemContainer.appendChild($fragment);
        } catch (err) {
            let errorMessage =
                err.statusText || "Ocurrió un error al tratar de obtener los datos";
            $mainItemContainer.innerHTML = `<p>Error: ${errorMessage}</p>`;
        } finally {}
    }
    getData();
}
fetchMainCardInfo();