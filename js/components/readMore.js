const d = document;
export default function readMore() {
    let $more = d.querySelectorAll(".more");
    for (let i = 0; i < $more.length; i++) {
        $more[i].addEventListener("click", function() {
            $more[i].parentNode.classList.toggle("active");
        });
    }
}