let d = document;

export default function mainCardInfo() {
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
                let $clone = document.importNode($template, true);
                $fragment.appendChild($clone);
            });
            $mainItemContainer.appendChild($fragment);
            // console.log(json[0].id);
            // console.log(json);
        } catch (err) {
            let errorMessage =
                err.statusText || "Ocurrió un error al tratar de obtener los datos";
            $mainItemContainer.innerHTML = `<p>Error: ${errorMessage}</p>`;
        } finally {}
    }
    getData();
}

/* <section class="main-item-container">
            <figure class="main-img-container">
                <img src="./assets/img/dummie-images/lippie-pencil.png" alt="Product Image" />
            </figure>
            <h3 class="main-item-name">Lippie Pencil | $5</h3>
            <hr />
            <h2 class="main-item-specs">Colourpop | Pencil | Lip liner</h2>
            <p class="main-item-desc">
                Lippie Pencil A long-wearing and high-intensity lip pencil that glides on easily and prevents feathering. Many of our Lippie Stix have a coordinating Lippie Pencil designed to compliment it perfectly, but feel free to mix and match!
            </p> */