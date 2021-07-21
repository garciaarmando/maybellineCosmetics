const d = document;

function fetchProdyctTypes() {
    const $mainProductTypesContainer = d.getElementById(
            "main-productTypes-container"
        ),
        $fragment = d.createDocumentFragment();
    async function getData() {
        try {
            const res = await fetch(
                    "https://makeup-api.herokuapp.com/api/v1/products.json"
                ),
                json = await res.json(),
                setObj = new Set(),
                uniques = json.reduce((acc, el) => {
                    if (!setObj.has(el.product_type)) {
                        setObj.add(el.product_type, el);
                        acc.push(el);
                    }
                    return acc;
                }, []);
            uniques.forEach((el) => {
                const $section = d.createElement("section"),
                    $anchor = d.createElement("a");
                $section.classList.add("main-productTypes-item");
                $anchor.setAttribute("href", `${el.product_link}`);
                $anchor.setAttribute("target", "_blank");
                $anchor.setAttribute("rel", "noopener");
                $anchor.textContent = `${el.product_type}`;
                $anchor.textContent = $anchor.textContent.replace(/_/g, " ");
                $anchor.textContent = $anchor.textContent.toUpperCase();
                $section.appendChild($anchor);
                $fragment.appendChild($section);
            });
            $mainProductTypesContainer.appendChild($fragment);
        } catch (err) {
            let errorMessage =
                err.statusText || "Ocurrió un error al tratar de obtener los datos";
            $mainProductTypesContainer.innerHTML = `<p>Error: ${errorMessage}</p>`;
        } finally {}
    }
    getData();
}
fetchProdyctTypes();