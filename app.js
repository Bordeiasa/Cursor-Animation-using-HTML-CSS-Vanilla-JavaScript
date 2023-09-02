const cursor = document.getElementById("cursor");

const img = document.querySelector("img");

img.addEventListener("mouseover", () => {
    cursor.classList.add("hovering");
    cursor.innerText = img.alt;
});

img.addEventListener("mouseleave", () => {
    cursor.innerText = "";
    cursor.classList.remove("hovering");
});

document.addEventListener("mousemove", e => {
    console.log(e.pageX, e.pageY);
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});