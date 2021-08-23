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
    $modalContentCloseBtn.innerText = "X";

    d.addEventListener("click", (e) => {
        if (e.target.matches(".main-item-container *")) {
            let id = e.target.getAttribute("data-id");
            const $moreSpecsContainer = d.createElement("div"),
                $brandTitle = d.createElement("h2"),
                $brandContainer = d.createElement("div"),
                $nameTitle = d.createElement("h2"),
                $nameContainer = d.createElement("div"),
                $priceTitle = d.createElement("h2"),
                $priceContainer = d.createElement("div"),
                $productTypeTitle = d.createElement("h2"),
                $productTypeContainer = d.createElement("div"),
                $colorsTitle = d.createElement("h2"),
                $colorsContainer = d.createElement("div");
            async function getData(id) {
                try {
                    let res = await fetch(
                            `https://secret-retreat-74869.herokuapp.com/https://makeup-api.herokuapp.com/api/v1/products/${id}.json`
                        ),
                        json = await res.json();
                    if (!res.ok) {
                        throw { status: res.status, statusText: res.statusText };
                    }
                    //Adding css classes
                    $moreSpecsContainer.classList.add("modal-specsContainer");
                    $brandContainer.classList.add("modal-brandContainer");
                    $nameContainer.classList.add("modal-nameContainer");
                    $priceContainer.classList.add("modal-priceContainer");
                    $productTypeContainer.classList.add("modal-productTypeContainer");
                    $colorsContainer.classList.add("modal-colorsContainer");

                    //Adding content
                    $brandTitle.innerText = "Product Brand";
                    $brandContainer.innerText = json.brand;
                    $brandContainer.innerText = $brandContainer.innerText.toUpperCase();
                    $nameTitle.innerText = "Product Name";
                    $nameContainer.innerText = json.name;
                    $priceTitle.innerText = "Product Price";
                    $priceContainer.innerText = `$${json.price} ${json.currency}`;
                    $productTypeTitle.innerText = "Product Type";
                    $productTypeContainer.innerText = json.product_type;
                    $productTypeContainer.innerText =
                        $productTypeContainer.innerText.replace(/_/g, " ");
                    $productTypeContainer.innerText =
                        $productTypeContainer.innerText.toUpperCase();
                    $colorsTitle.innerText = "Available Colors";
                    json.product_colors.forEach((color) => {
                        let $colorContainer = d.createElement("div");
                        $colorContainer.classList.add("color-container");
                        $colorContainer.style.backgroundColor = `${color.hex_value}`;
                        $colorsContainer.appendChild($colorContainer);
                    });

                    //organizing the sections

                    d.body.appendChild($modalContainer);
                    $modalContainer.appendChild($modalContent);
                    $moreSpecsContainer.appendChild($brandTitle);
                    $moreSpecsContainer.appendChild($brandContainer);
                    $moreSpecsContainer.appendChild($nameTitle);
                    $moreSpecsContainer.appendChild($nameContainer);
                    $moreSpecsContainer.appendChild($priceTitle);
                    $moreSpecsContainer.appendChild($priceContainer);
                    $moreSpecsContainer.appendChild($productTypeTitle);
                    $moreSpecsContainer.appendChild($productTypeContainer);
                    $moreSpecsContainer.appendChild($colorsTitle);
                    $moreSpecsContainer.appendChild($colorsContainer);
                    $modalContent.appendChild($moreSpecsContainer);
                    $modalContent.appendChild($modalContentCloseBtn);

                    d.getElementsByTagName("html")[0].style.overflow = "hidden";
                } catch (err) {
                    let errorMessage =
                        err.statusText || "Ocurrió un error al tratar de obtener los datos";
                    $modalContent.innerHTML = `<p>Error ${err.status}: ${errorMessage}</p>`;
                    $modalContent.appendChild($modalContentCloseBtn);
                }
            }
            getData(id);
        }
    });
}

const modalClose = () => {
    d.addEventListener("click", (e) => {
        const $modalContainer = d.getElementById("modal-container"),
            $modalContent = d.getElementById("modal-content"),
            $moreSpecsContainer = d.querySelector(".modal-specsContainer");
        if (e.target.id === "modal-close-btn") {
            d.body.removeChild($modalContainer);

            $modalContent.removeChild($moreSpecsContainer);

            d.getElementsByTagName("html")[0].style.overflow = "auto";
        }
    });
};

modalClose();