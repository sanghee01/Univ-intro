window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

const player = document.querySelector("#player");

const npcList = document.querySelectorAll(".npc");

// const talk1 = document.querySelector("#talk1");
// const talk2 = document.querySelector("#talk2");
// const talk3 = document.querySelector("#talk3");
const talk = document.querySelectorAll(".talk");
const overlay = document.querySelectorAll(".talk__overlay");
const nextBtn = document.querySelectorAll(".nextBtn");
const talkNpc = document.querySelectorAll(".talk__npc");
const talkScript = document.querySelectorAll(".talk__script");

const dialogList = {
  0: {
    name: "미대생",
    script: [
      "안녕? 거기서 뭐하니",
      "여기는 뭐하는데야?",
      "여기는 대학본부이야~",
      "그렇구나!",
    ],
  },
  1: {
    name: "인문대생",
    script: [
      "못보던 고양이네?",
      "대학 구경 왔어",
      "여기는 학생회관이야~ 1층엔 뭐가있고 2층엔 ~",
      "고마워!",
    ],
  },
  2: {
    name: "공대생",
    script: [
      "끄어어...",
      "왜그래??",
      "여기는 프라임관.. 대부분 SW계열과가 여기에 있어.. 코딩하느라 힘들다",
      "그렇구나! 힘내!",
    ],
  },
};
let npcIndex = 0;

// 클릭한 npc 인식 및 그 npc로 대사 설정, 대화창 띄움
npcList.forEach((npc, index) => {
  npc.addEventListener("click", () => {
    dialog = dialogList[index]; // 추후 close에서 수정해야하나? 근데 실행할때마다 해서 상관업을 것 같기도
    // console.dir(dialog);
    npcIndex = index;
    openTalk(npcIndex);
  });
});

let dialog = {};

// hidden을 없애면서 대화창 띄움. 띄워야지 nextBtn click event를 인식함
const openTalk = (npcIndex) => {
  talk[npcIndex].classList.remove("hidden");
  nextBtn[npcIndex].addEventListener("click", nextTalk);
  talkNpc[npcIndex].textContent = dialog.name; // 클릭한 npc 이름 설정
};

let talkIndex = 0;

// nextBtn을 누르면 대화 내용 다음꺼로 변경, 마지막 대화 넘으면 closeTalk 실행(대화창 끔)
const nextTalk = () => {
  console.log(dialog);
  console.log(talkScript.textContent);
  talkScript[npcIndex].textContent = dialog.script[talkIndex];
  talkIndex++;
  if (talkIndex === dialog.script.length + 1) {
    talkIndex = 0;
    talkScript[npcIndex].textContent = "안녕! 다시 물어보러왔어!";

    closeTalk();
  }
};

// 대화창 끔
const closeTalk = () => {
  talk[npcIndex].classList.add("hidden");
};

// overlay[npcIndex].addEventListener("click", closeTalk);
// npc[npcIndex].addEventListener("click", openTalk);
