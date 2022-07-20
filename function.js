const PI = 3.14;
function getArea(r) {
    let area = PI*r*r;
    return area;
}
function showArea() {
    let r = +document.getElementById("r").value;
    let area = getArea(r);
    document.getElementById("result").innerText = area;
}
