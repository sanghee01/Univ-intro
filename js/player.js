const player = document.querySelector("#player");
const npcList = document.querySelectorAll(".npc");
const talk = document.querySelector(".talk");
const overlay = document.querySelector(".talk__overlay");
const nextBtn = document.querySelector(".nextBtn");
const talkNpc = document.querySelector(".talk__npc");
const cat = document.querySelectorAll(".cat");
const talkPlayer = document.querySelector(".talk__player"); // 대사 고양이
const talkNpcImg = document.querySelector(".talk-npc-img"); // 대사 npc이미지
const talkNpcName = document.querySelector(".talk__npc>h3"); // 대사 npc 이름
const talkChar = document.querySelector(".talk__char-wrap"); // 대사 이미지 + 이름
const talkScript = document.querySelector(".talk__script"); // 대사
const talkWrap = document.querySelector(".talk__char"); // 대사 player일때 오른쪽 정렬하기 위해 씀

//link
const ground = document.querySelector(".ground");
const groundheader = document.querySelector(".groundheader");
const groundbody = document.querySelector(".groundbody");
// 오디오 설정
const audio = document.getElementById("nyaong");

const dialogList = {
  0: {
    name: "미대생",
    script: [
      "안녕, 이곳은 대학 본부야",
      "본부는 어떤 일을 하니?",
      "이곳에서는 대학의 내부적인 운영이 이루어져",
      "그렇구나",
      "궁금한게 더 남아있니?",
    ],
    img: "img/대학본부.png",
    npcImg: "img/npc1.png",
    url: "https://www.wku.ac.kr/about/institutions/offices.html",
  },
  1: {
    name: "인문대생",
    script: [
      "안녕, 이곳은 학생회관이야.",
      "학생회관을 소개해줄래?",
      "1층에는 서점과 식당들, 2층에는 학생 복지시설이 있어.",
      "그럼 나머지층은?",
      "3층에는 학생자치기구들이 있고, 4~5층에는 동아리 방들이 있어. 더 궁금한게 있니~?",
    ],
    img: "img/학생회관.png",
    npcImg: "img/npc2.png",
    url: "https://www.youtube.com/watch?v=UKAspu8Lz_k",
  },
  2: {
    name: "공대생",
    script: [
      "안녕, 이곳은 프라임관이야.",
      "프라임관을 소개해줄래?",
      "창의공과대학 학생들이 많이 이용하는 건물이야. ",
      "건물이 깨끗하네? 건축한지 얼마 안됐니?",
      "소프트웨어 중심대학에 선정되어서 새로 지었어.",
    ],
    img: "img/프라임관.png",
    npcImg: "img/npc3.png",
    url: "https://www.youtube.com/watch?v=F2b7d18Sl4Y",
  },
  3: {
    name: "자연대생",
    script: [
      "안녕, 이곳은 우리학교의 랜드마크 수덕호야!",
      "풍경이 멋지다. 그 커피는 어디서 산거야?",
      "수덕호 가운데에 카페가 있어, 거기서 산거야.",
      "맛있겠다!",
      "맛있어! 수덕호에 관심있으면 더 알려줄까?",
    ],
    img: "img/수덕호.png",
    npcImg: "img/npc4.png",
    url: "https://www.youtube.com/watch?v=2_j5GXY7624",
  },
  4: {
    name: "교수님",
    script: [
      "그래 원냥이구나",
      "여기는 어디인가요?",
      "이곳은 학생지원관이란다.",
      "그렇군요, 무엇을 하나요?",
      "이곳은 각종 행사를 진행하며 학생들이 다양한 경험을 하게 도와주는 곳이지.",
    ],
    img: "img/학생지원관.png",
    npcImg: "img/npc5.png",
    url: "https://www.youtube.com/watch?v=ZqWBvbJJrbo",
  },
  5: {
    name: "의대생",
    script: [
      "어? 아.. 여기는 중앙 도서관이야",
      "도서관이 뭔데?",
      "학술 정보를 제공하기 위한 자료들이 존재하지",
      "여기는 아무나 이용할 수 있어?",
      "아니, 원대 학생이거나 회원증이 있는 사람만 이용할 수 있어",
    ],
    img: "img/중앙도서관.png",
    npcImg: "img/npc6.png",
    url: "https://elibrary.wku.ac.kr/lib/SlimaPlus.csp#link",
  },
};

let npcIndex = 0;

// 클릭한 npc 인식 및 그 npc로 대사 설정, 대화창 띄움
npcList.forEach((npc, index) => {
  npc.addEventListener("click", () => {
    audio.play(); // "냐옹" 효과음 플레이
    dialog = dialogList[index]; // 클릭한 npc index
    // console.dir(dialog);
    npcIndex = index;
    openTalk(npcIndex);
    console.log();
  });
});
let dialog = {};

// hidden을 없애면서 대화창 띄움. 띄워야지 nextBtn click event를 인식함
const openTalk = (npcIndex) => {
  talkPlayer.classList.remove("hidden");
  talkNpc.classList.add("hidden");
  talkWrap.classList.add("talk__char--right");
  talk.classList.remove("hidden");
  cat[npcIndex].classList.remove("hidden");
  player.classList.add("hidden");
  nextBtn.addEventListener("click", nextTalk);
  talkNpcName.textContent = dialog.name; // 클릭한 npc 이름 설정
  talkNpcImg.src = dialogList[npcIndex].npcImg; // 클릭한 npc 이미지 설정
  //overlay[npcIndex].addEventListener("click", closeTalk);
};
let talkIndex = 0;

// nextBtn을 누르면 대화 내용 다음꺼로 변경, 마지막 대화 넘으면 closeTalk 실행(대화창 끔)
const nextTalk = () => {
  if (talkIndex % 2 == 0) {
    // 짝수일때 player 보임
    talkPlayer.classList.add("hidden");
    talkNpc.classList.remove("hidden");
    talkWrap.classList.remove("talk__char--right");
  } else {
    // 홀수일때 npc 보임
    talkPlayer.classList.remove("hidden");
    talkWrap.classList.add("talk__char--right");
    talkNpc.classList.add("hidden");
  }
  talkScript.textContent = dialog.script[talkIndex];
  talkIndex++;

  if (talkIndex === dialog.script.length + 1) {
    talkScript.textContent = "안녕! 이 건물은 뭐하는 곳이야?";
    groundheader.href = dialogList[npcIndex].url;
    groundheader.style.backgroundImage = `url(${dialogList[npcIndex].img})`;
    talkIndex = 0;
    closeTalk();
  }
};

// 대화창 끔
const closeTalk = () => {
  talk.classList.add("hidden");
  cat[npcIndex].classList.add("hidden");
  player.classList.remove("hidden");
  ground.classList.remove("hidden");
};

const clicklink = () => {
  ground.classList.add("hidden");
};
ground.addEventListener("click", clicklink);
