function reloadPage() {
    window.scrollTo(0, 0);
    location.reload();
}



let reloadTimerId = 0;
document.body.addEventListener("mousemove", (event) => {
const x = event.clientX;
const y = event.clientY;
const coor = "Coordinates: (" + x + "," + y + ")";
if(reloadTimerId)
  clearTimeout(reloadTimerId);

  
reloadTimerId = setTimeout(() => {
window.localStorage.removeItem("tcart");
window.location.replace("/");
}, 12000);
  
  
});
