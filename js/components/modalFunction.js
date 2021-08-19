const d = document;

export default function modalFunction() {
    let $modalContainer = d.createElement("div"),
        $modalContent = d.createElement("div"),
        $modalContentCloseBtn = d.createElement("button");
    // $fragment = d.createDocumentFragment();

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
            const $moreSpecsContainer = d.createElement("div"),
                $brandContainer = d.createElement("div"),
                $nameContainer = d.createElement("div"),
                $priceContainer = d.createElement("div"),
                $productTypeContainer = d.createElement("div"),
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

                    $brandContainer.innerText = json.brand;
                    $brandContainer.innerText = $brandContainer.innerText.toUpperCase();
                    $nameContainer.innerText = json.name;
                    $priceContainer.innerText = `$${json.price} ${json.currency}`;
                    $productTypeContainer.innerText = json.product_type;
                    $productTypeContainer.innerText =
                        $productTypeContainer.innerText.replace(/_/g, " ");
                    $productTypeContainer.innerText =
                        $productTypeContainer.innerText.toUpperCase();

                    // json.product_colors.forEach((color) => {
                    //     $divColors.appendChild(d.createElement("div"));
                    //     $divColors.children[
                    //         $divColors.children.length - 1
                    //     ].style.backgroundColor = color.color_name;
                    // });

                    //organizing the sections

                    d.body.appendChild($modalContainer);
                    $modalContainer.appendChild($modalContent);
                    $moreSpecsContainer.appendChild($brandContainer);
                    $moreSpecsContainer.appendChild($nameContainer);
                    $moreSpecsContainer.appendChild($priceContainer);
                    $moreSpecsContainer.appendChild($productTypeContainer);
                    $moreSpecsContainer.appendChild($colorsContainer);
                    $modalContent.appendChild($moreSpecsContainer);
                    $modalContent.appendChild($modalContentCloseBtn);

                    console.log(json);
                    d.getElementsByTagName("html")[0].style.overflow = "hidden";
                    //content into the modal content

                    //building the modal content
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

// modalOpen();
modalClose();

/*  
                                        json.product_colors.forEach((color) => {
                                            $divColors.appendChild(d.createElement("div"));
                                            $divColors.children[
                                                $divColors.children.length - 1
                                            ].style.backgroundColor = color.color_name;
                                        }); */

//json.product_colors.forEach - div style=`background:${el.hex_value}`