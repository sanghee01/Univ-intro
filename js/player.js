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
const cat = document.querySelectorAll(".cat");
const talkNpcName = document.querySelectorAll(".talk__npc>h3");
const talkPlayer = document.querySelectorAll(".talk__player");
const talkWrap = document.querySelectorAll(".talk__char"); // 대사 player일때 오른쪽 정렬하기 위해 씀
const talkScript = document.querySelectorAll(".talk__script"); // 대사
const talkChar = document.querySelectorAll(".talk__char-wrap"); // 이미지 + 이름

const audio = document.getElementById("nyaong");


//link 선언 // link css
//const ground = document.querySelectorAll(".ground");

const dialogList = {
  0: {
    name: "미대생",
    script: [

      "음? 원냥이 구나! 여기는 대학본부인데 대학의 내부적인 운영이 이루어지는 곳이야",
      "그렇구나",
      "더 자세히 알고 싶니?",

    ],
  },
  1: {
    name: "인문대생",
    script: [
      "여기는 학생회관이야~ 학생들의 편의를 봐주는 시설들과 복지시설 자치기구들과 동아리 방들이 있어!",
      "여기는 주로 동아리 활동을 하거나 밥먹으러 올거 같아",
      "응! 나도 동아리 활동하러 왔어 혹시 더 궁금하니?",
    ],
  },
  2: {
    name: "공대생",
    script: [
      "어..여기는 프라임관이라고 하는데 컴퓨터나 식품에 관련있는 학과 학생들이 주로 공부하고 있어",
      "너는 컴퓨터학과야?",
      "어..그렇지? 프라임관에 대해 더 궁금해?",
    ],
  },
  3: {
    name: "자연대생",
    script: [
      "음? 저기는 수덕호인데 봉황각이라고도 불려 원대에 랜드마크 같은 존재지",
      "그 음료수는 어디서 산거야?",
      "이거? 수덕호 중앙에 있는 카페에서 샀어",
      "맛있겠다!",
      "맛있지~ 수덕호에 관심있으면 더 알려줄까?",
    ],
  },
  4: {
    name: "교수님",
    script: ["여기 말인가? 이곳은 여러 행사들을 진행하여 학생들이 다양한 경험을 하게 도와주는 곳이지",
             "그렇군요! 재밌는것도 많이 하겠네요!", 
             "흥미를 돋울만한 것 위주로 하지..더 궁금하니?",
            ],
  },
  5: {
    name: "의대생",
    script: [
      "어? 아..여기는 중앙 도서관이야. 학술정보를 제공하기 위한 자료들이 존재하지",
      "여기는 아무나 이용할 수 있어?",
      "아니 원대 학생이거나 회원증이 있는 사람만 이용할 수 있어",
      "오...난 못 들어가겠네",
      "중앙 도서관에 대해 더 알고 싶어?",
    ],
  },
};

let npcIndex = 0;

// 클릭한 npc 인식 및 그 npc로 대사 설정, 대화창 띄움
npcList.forEach((npc, index) => {
  
  npc.addEventListener("click", () => {
    audio.play();

    dialog = dialogList[index]; // 추후 close에서 수정해야하나? 근데 실행할때마다 해서 상관업을 것 같기도
    // console.dir(dialog);
    npcIndex = index;
    openTalk(npcIndex);
  });
});
let dialog = {};

// hidden을 없애면서 대화창 띄움. 띄워야지 nextBtn click event를 인식함
const openTalk = (npcIndex) => {
  talkPlayer[npcIndex].classList.remove("hidden");
  talkNpc[npcIndex].classList.add("hidden");
  talkWrap[npcIndex].classList.add("talk__char--right");
  talk[npcIndex].classList.remove("hidden");
  cat[npcIndex].classList.remove("hidden");
  player.classList.add("hidden");
  nextBtn[npcIndex].addEventListener("click", nextTalk);
  talkNpcName[npcIndex].textContent = dialog.name; // 클릭한 npc 이름 설정
  //overlay[npcIndex].addEventListener("click", closeTalk);
};
let talkIndex = 0;

// nextBtn을 누르면 대화 내용 다음꺼로 변경, 마지막 대화 넘으면 closeTalk 실행(대화창 끔)
const nextTalk = () => {
  if (talkIndex % 2 == 0) {
    // 짝수일때 player 보임
    talkPlayer[npcIndex].classList.add("hidden");
    talkNpc[npcIndex].classList.remove("hidden");
    talkWrap[npcIndex].classList.remove("talk__char--right");
  } else {
    // 홀수일때 npc 보임
    talkPlayer[npcIndex].classList.remove("hidden");
    talkWrap[npcIndex].classList.add("talk__char--right");
    talkNpc[npcIndex].classList.add("hidden");
  }
  talkScript[npcIndex].textContent = dialog.script[talkIndex];
  talkIndex++;

  if (talkIndex == dialog.script.length + 1) {
    talkIndex = 0;
    if(npcIndex == 4){
    talkScript[npcIndex].textContent = "여기에 대해 다시 듣고 싶어요!";
    closeTalk();
    }
    else{
    talkScript[npcIndex].textContent = "여기에 대해 다시 듣고 싶어!";
    closeTalk();
    }
  }
};
// 대화창 끔
const closeTalk = () => {
  talk[npcIndex].classList.add("hidden");
  cat[npcIndex].classList.add("hidden");
  player.classList.remove("hidden");
  //ground[npcIndex].classList.remove("hidden");
};