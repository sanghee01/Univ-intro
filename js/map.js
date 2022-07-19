(function (open) {
  console.log("시작");
  scrollTo(0, 0);
})("open");

addEventListener("scroll", (eventname) => {
  const scrollY = this.scrollY;

  if (scrollY >= 2543 && scrollY <= 3775) {
    document.getElementById("map").src = "img/Unimap_bonboo.png";
  } else if (scrollY >= 4117 && scrollY <= 5520) {
    document.getElementById("map").src = "img/Unimap_student.png";
  } else if (scrollY >= 6042 && scrollY <= 7186) {
    document.getElementById("map").src = "img/Unimap_prime.png";
  } else if (scrollY >= 7318 && scrollY <= 8946) {
    document.getElementById("map").src = "img/Unimap_sudeokho.png";
  } else if (scrollY >= 9683 && scrollY <= 11134) {
    document.getElementById("map").src = "img/Unimap_Surpport.png";
  } else if (scrollY >= 11336) {
    document.getElementById("map").src = "img/Unimap_Library.png";
  } else {
    document.getElementById("map").src = "img/Unimap.png";
  }

  // switch(scrollY){
  //     case scrollY >= 2543 || scrollY <= 3775:
  //         document.getElementById("map").src="Unimap_bonboo.png";
  //         console.log("ㅎㅇ");
  //     break;

  //     case scrollY >= 4117 || scrollY <= 5520:

  //     break;

  //     case scrollY >= 6042 || scrollY <= 7186:

  //     break;

  //     case scrollY >= 7318 || scrollY <= 8946:

  //     break;

  //     case scrollY >= 9683 || scrollY <= 11134:

  //     break;

  //     case scrollY >= 11336 :

  //     break;

  //     default:
  // }
  // // console.log(scrollY);
});
