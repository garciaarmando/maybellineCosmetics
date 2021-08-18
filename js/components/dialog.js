export default function modalWindow(url, width) {
    let
    const modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.zIndex = "99";
    modal.style.width = `${width}px`;
    modal.style.height = "100%";
    modal.style.backgroundColor = "#fff";
    modal.style.borderRadius = "5px";
    modal.style.boxShadow = "0px 0px 20px rgba(0,0,0,0.5)";
    modal.style.transition = "all 0.3s ease-in-out";
    modal.style.opacity = "0";
    modal.style.display = "none";
    modal.style.WebkitTransition = "all 0.3s ease-in-out";
    modal.style.MozTransition = "all 0.3s ease-in-out";
    modal.style.MsTransition = "all 0.3s ease-in-out";
    modal.style.OTransition = "all 0.3s ease-in-out";
    modal.style.transition = "all 0.3s ease-in-out";
    modal.style.WebkitTransform = "translateY(100%)";
    modal.style.MozTransform = "translateY(100%)";
    modal.style.MsTransform = "translateY(100%)";
    modal.style.OTransform = "translateY(100%)";
    modal.style.transform = "translateY(100%)";
    modal.style.WebkitTransition = "all 0.3s ease-in-out";
    modal.style.MozTransition = "all 0.3s ease-in-out";
    modal.style.MsTransition = "all 0.3s ease-in-out";
    modal.style.OTransition = "all 0.3s ease-in-out";
}