const d = document;
export default function readMore() {
    let $more = d.querySelectorAll(".more");
    for (let i = 0; i < $more.length; i++) {
        $more[i].addEventListener("click", function() {
            $more[i].parentNode.classList.toggle("active");
        });
    }
}

/*   for (let i = 0; i < $more.length; i++) {
        $more[i].addEventListener("click", function (e) {
          e.preventDefault();
          let $this = this;
          let $moreText = $this.querySelector(".more-text");
          let $moreContent = $this.querySelector(".more-content");
          if ($moreContent.style.display === "none") {
            $moreText.innerHTML = "Show less";
            $moreContent.style.display = "block";
          } else {
            $moreText.innerHTML = "Show more";
            $moreContent.style.display = "none";
          }
        });
      } */