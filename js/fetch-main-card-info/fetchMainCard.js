let d = document;

function fetchMainCardInfo() {
    const $mainItemContainer = d.querySelector(".main-item-container"),
        $template = d.getElementById("template-card").content,
        $fragment = d.createDocumentFragment();
    async function getData() {
        try {
            let res = await fetch(
                    "https://makeup-api.herokuapp.com/api/v1/products.json"
                ),
                json = await res.json();
            json.forEach((el) => {
                $template.querySelector("img").setAttribute("src", el.image_link);
                $template.querySelector("img").setAttribute("alt", "Product Image");
                $template.querySelector("h3").textContent = `${el.name} | ${el.price}`;
                $template.querySelector(
                    "h2"
                ).textContent = `${el.brand} | ${el.category} | ${el.product_type}`;
                $template.querySelector("p").textContent = el.description;
                let $clone = d.importNode($template, true);
                $fragment.appendChild($clone);
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