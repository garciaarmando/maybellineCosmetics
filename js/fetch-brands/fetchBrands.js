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
            /*  json.forEach((el) => {
                      const $li = d.createElement("li"),
                          $anchor = d.createElement(a);
                      $li.appendChild($anchor);
                      //   $template.querySelector("img").setAttribute("src", el.image_link);
                  }); */
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

/* 
parámetros de la api a usar

brand
website_link
*/