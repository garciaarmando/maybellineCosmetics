let d = document;

function fetchBrands() {
    const $brandsContainer = d.querySelector(".main-brands-list"),
        $template = d.getElementById("brands-list").content,
        $fragment = d.createDocumentFragment();
    async function getData() {
        try {
            let res = await fetch(
                    "https://makeup-api.herokuapp.com/api/v1/products.json"
                ),
                json = await res.json();
            json.forEach((el) => {
                $template.querySelector("a").setAttribute("href", el.website_link);
                $template.querySelector("a").setAttribute("target", "_blank");
                $template.querySelector("a").textContent = `${el.name}`;
                let $clone = d.importNode($template, true);
                $fragment.appendChild($clone);
            });
            $brandsContainer.appendChild($fragment);

            console.log(json);
        } catch (err) {
            let errorMessage =
                err.statusText || "Ocurrió un error al tratar de obtener los datos";
            $brandsContainer.innerHTML = `<p>Error: ${errorMessage}</p>`;
        } finally {}
    }
    getData();
}

fetchBrands();