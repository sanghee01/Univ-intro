const player = document.querySelector("#player");

const npcList = document.querySelectorAll(".npc");

// const talk1 = document.querySelector("#talk1");
// const talk2 = document.querySelector("#talk2");
// const talk3 = document.querySelector("#talk3");
const talk = document.querySelectorAll(".talk");
const overlay = document.querySelectorAll(".talk__overlay");
const nextBtn = document.querySelectorAll(".nextBtn");
const talkNpc = document.querySelectorAll(".talk__char");
const talkScript = document.querySelectorAll(".talk__script");

const dialog = {
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
  3: {
    name: "공대생",
    script: [
      "끄어어...",
      "왜그래??",
      "여기는 프라임관.. 대부분 SW계열과가 여기에 있어.. 코딩하느라 힘들다",
      "그렇구나! 힘내!",
    ],
  },
};

let talkIndex = 0;
// const nextTalk = (npc) => {
//   console.dir(nextTalk);
//   console.dir(npc);
//   talkNpc.textContent = dialog[npc].name;
//   talkScript.textContent = dialog[npc].script[talkIndex];
//   talkIndex++;
//   if (talkIndex === 5) {
//     talkIndex = 0;
//     closeTalk();
//   }
// };
const openTalk = (index) => {
  talk[index].classList.remove("hidden");
  console.dir(index);

  nextBtn[index].addEventListener("click", (index) => {
    // talkNpc[index].textContent = dialog[index].name;
    // talkScript[index].textContent = dialog[index].script[talkIndex];
    // talkIndex++;
    // if (talkIndex === 5) {
    //   talkIndex = 0;
    //   closeTalk();
    // }
    console.dir(index);
  });
};
// const closeTalk = () => {
//   talk.classList.add("hidden");
// };

// overlay[npcIndex].addEventListener("click", closeTalk);
// npc[npcIndex].addEventListener("click", openTalk);
npcList.forEach((npc, index) => {
  npc.addEventListener("click", () => {
    // console.log("hi" + index);
    // console.dir(npc);
    openTalk(index);
  });
});
