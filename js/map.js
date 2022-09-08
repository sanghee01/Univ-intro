const mapLocation = document.querySelector("#map");
const npcs = document.querySelectorAll(".human");
let npcLocation = 0;
let locationY = [];
scrollTo(0, 0);

for (let npc of npcs) {
  npcLocation = window.pageXOffset + npc.getBoundingClientRect().top;
  locationY.push(npcLocation);
}

addEventListener("scroll", () => {
  const scrollY = this.scrollY;

  if (scrollY >= locationY[0] && scrollY <= locationY[1]) {
    mapLocation.src = "./img/Unimap_bonboo.png";
  } else if (scrollY >= locationY[1] && scrollY <= locationY[2]) {
    mapLocation.src = "./img/Unimap_student.png";
  } else if (scrollY >= locationY[2] && scrollY <= locationY[3]) {
    mapLocation.src = "./img/Unimap_prime.png";
  } else if (scrollY >= locationY[3] && scrollY <= locationY[4]) {
    mapLocation.src = "./img/Unimap_sudeokho.png";
  } else if (scrollY >= locationY[4] && scrollY <= locationY[5]) {
    mapLocation.src = "./img/Unimap_Surpport.png";
  } else if (scrollY >= locationY[5]) {
    mapLocation.src = "./img/Unimap_Library.png";
  } else {
    mapLocation.src = "./img/Unimap.png";
  }
});
