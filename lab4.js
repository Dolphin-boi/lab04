function pic_change() {
        c1.classList.toggle("black");
        c2.classList.toggle("black");
        c3.classList.toggle("black");
        c4.classList.toggle("black");
}

const c1 = document.getElementById("c1");
const c2 = document.getElementById("c2");
const c3 = document.getElementById("c3");
const c4 = document.getElementById("c4");
const table = document.querySelector("table");
table.addEventListener("click", pic_change)

