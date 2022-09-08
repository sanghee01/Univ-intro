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

  if (scrollY > locationY[0] - 1000 && scrollY <= locationY[1] - 1000) {
    mapLocation.style.backgroundImage = `url(${"../img/Unimap_bonboo.png"}`;
  } else if (scrollY >= locationY[1] - 1000 && scrollY <= locationY[2] - 1000) {
    mapLocation.style.backgroundImage = `url(${"../img/Unimap_student.png"}`;
  } else if (scrollY >= locationY[2] - 1000 && scrollY <= locationY[3] - 1000) {
    mapLocation.style.backgroundImage = `url(${"../img/Unimap_prime.png"}`;
  } else if (scrollY >= locationY[3] - 1000 && scrollY <= locationY[4] - 1000) {
    mapLocation.style.backgroundImage = `url(${"../img/Unimap_sudeokho.png"}`;
  } else if (scrollY >= locationY[4] - 1000 && scrollY <= locationY[5] - 1000) {
    mapLocation.style.backgroundImage = `url(${"../img/Unimap_Surpport.png"}`;
  } else if (scrollY >= locationY[5] - 1000) {
    mapLocation.style.backgroundImage = `url(${"../img/Unimap_Library.png"}`;
  } else {
    mapLocation.style.backgroundImage = `url(${"../img/Unimap.png"}`;
  }
});
