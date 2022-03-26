
window.onload = () => {
    var btn = document.getElementById("create-account-button");
    var popup = document.getElementById("register-popup");
    var overlay = document.getElementById("overlay");

    btn.addEventListener("click", (e) => {
        e.preventDefault();
        popup.style.display = "block";
        overlay.style.display = "block";
    })

    var close_popup = document.getElementById("close-popup");
    close_popup.addEventListener("click", () => {
        popup.style.display = "none";
        overlay.style.display = "none";
    })
}