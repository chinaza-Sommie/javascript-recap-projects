const decreaseval = document.getElementById("decrease");
const resetval = document.getElementById("resetval");
const increaseval = document.getElementById("increase");
const numvalue = document.getElementById("num")
let count = 0;
numvalue.textContent = count;

decreaseval.onclick = function() {
    count -= 1;
    document.getElementById("num").textContent = count;
}

increaseval.onclick = function() {
    count += 1;
    document.getElementById("num").textContent = count;
}

resetval.onclick = function() {
    count = 0;
    document.getElementById("num").textContent = count;
}