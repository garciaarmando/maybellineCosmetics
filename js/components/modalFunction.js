const d = document;

export default function modalFunction() {
    let $modalContainer = d.createElement("div"),
        $modalContent = d.createElement("div"),
        $modalContentCloseBtn = d.createElement("button");

    $modalContainer.className = "modal-container";
    $modalContainer.id = "modal-container";

    $modalContent.className = "modal-content";
    $modalContent.id = "modal-content";

    $modalContentCloseBtn.className = "modal-close-btn";
    $modalContentCloseBtn.id = "modal-close-btn";
    $modalContentCloseBtn.innerText = "Close";

    d.addEventListener("click", (e) => {
        if (e.target.matches(".main-item-container *")) {
            let id = e.target.getAttribute("data-id");
            const $moreSpecsContaine = d.createElement("div"),
                $pBrand = d.createElement("p"),
                $pName = d.createElement("p"),
                $pPriceCurrency = d.createElement("p"),
                $pProductType = d.createElement("p"),
                $ulTags = d.createElement("ul"),
                $liTags = d.createElement("li"),
                $divColorsContainer = d.createElement("div"),
                $divColors = d.createElement("colors");
            async function getData(id) {
                try {
                    let res = await fetch(
                            `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`
                        ),
                        json = await res.json();
                    if (!res.ok) {
                        throw { status: res.status, statusText: res.statusText };
                    }
                    console.log(json);
                    //json.brand -p
                    //json.name - p
                    //`${json.price} ${json.currency}` - p
                    // json.category; - p
                    // json.product_type; - p
                    //json.tag_list.forEach - ul
                    //json.product_colors.forEach - div style=`background:${el.hex_value}`
                } catch (err) {
                    let errorMessage =
                        err.statusText || "Ocurrió un error al tratar de obtener los datos";
                    $modalContent.innerHTML = `<p>Error ${err.status}: ${errorMessage}</p>`;
                    $modalContent.appendChild($modalContentCloseBtn);
                }
            }
            getData(id);
            d.body.appendChild($modalContainer);
            $modalContainer.appendChild($modalContent);
            $modalContent.appendChild($modalContentCloseBtn);
            d.getElementsByTagName("html")[0].style.overflow = "hidden";
        }
    });
}

const modalClose = () => {
    d.addEventListener("click", (e) => {
        let $modalContainer = d.getElementById("modal-container");
        if (e.target.id === "modal-close-btn") {
            d.body.removeChild($modalContainer);
            d.getElementsByTagName("html")[0].style.overflow = "auto";
        }
    });
};

// modalOpen();
modalClose();

/*    let $modalContent = d.getElementById("modal-content");
                                                                                    $modalContent.innerHTML = "Loading...";
                                                                                    let $modalContainer = d.getElementById("modal-container");
                                                                                    $modalContainer.style.display = "block"; */