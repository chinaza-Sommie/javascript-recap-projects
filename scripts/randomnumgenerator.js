const btn = document.getElementById("btn");
const displayRandNum = document.getElementById("btn");

btn.onclick = function() {
    // get a random number between 0 & 6

    let randNumber = Math.floor((Math.random() * 6) + 1);
    document.getElementById("num").textContent = randNumber;
}