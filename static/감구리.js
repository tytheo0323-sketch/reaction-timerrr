// 요소 참조
const panel = document.getElementById('panel');
const hint = document.getElementById('hint');
const result = document.getElementById('result');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const counter = document.getElementById('counter');
const playerName = document.getElementById('playerName');
const saveBtn = document.getElementById('saveBtn');
const leaderboardList = document.getElementById('leaderboard');
const leaderboardBox = document.querySelector('.leaderboard-box');

// 상태 정의
const STATE = { READY: 'READY', WAIT: 'WAIT', GO: 'GO' };
let currentState = STATE.READY;

let waitTimerId = null;
let startTimeMs = 0;
let attempts = 0;
let scores = [];

const TOTAL_TRIES = 5;
const LB_KEY = 'reaction_leaderboard_v1';

// 초기화
function resetGame() {
  attempts = 0;
  scores = [];
  currentState = STATE.READY;
  panel.textContent = "READY";
  panel.className = "ready";
  startBtn.classList.add("ready-btn");
  result.textContent = "결과가 여기에 표시됩니다.";
  counter.textContent = `도전 횟수: ${attempts} / ${TOTAL_TRIES}`;
  leaderboardBox.style.display = "none";
}

// START 버튼
startBtn.addEventListener('click', () => {
  if (currentState === STATE.READY) {
    startBtn.classList.remove("ready-btn");
    startRound();
  }
});

// RESET 버튼
resetBtn.addEventListener('click', resetGame);

// 라운드 시작 (WAIT → GO)
function startRound() {
  currentState = STATE.WAIT;
  panel.textContent = "WAIT...";
  panel.className = "wait";

  const randomDelay = Math.floor(Math.random() * 2000) + 1500; // 최소 1.5초
  waitTimerId = setTimeout(() => {
    currentState = STATE.GO;
    panel.textContent = "CLICK!";
    panel.className = "go";
    startTimeMs = Date.now();
  }, randomDelay);
}

// 패널 클릭
panel.addEventListener('click', () => {
  if (currentState === STATE.GO) {
    const reaction = Date.now() - startTimeMs;
    scores.push(reaction);
    attempts++;
    counter.textContent = `도전 횟수: ${attempts} / ${TOTAL_TRIES}`;

    // 결과 표시
    if (reaction < 200) {
      result.innerHTML = `✨ 반응 속도: ${reaction}ms`;
      result.classList.add("shiny");
      result.addEventListener("animationend", () => {
        result.classList.remove("shiny");
      }, { once: true });
    } else {
      result.textContent = `반응 속도: ${reaction}ms`;
    }

    if (attempts >= TOTAL_TRIES) {
      finishGame();
    } else {
      startRound(); // 자동 다음 라운드
    }
  }

  // 🚨 WAIT 상태일 때 클릭하면 → 경고 띄우고 1초 뒤 초기화
  else if (currentState === STATE.WAIT) {
    clearTimeout(waitTimerId);
    result.textContent = "⚠️ 빨랐어요! 다시 START를 누르세요!";
    panel.className = "wait";
    panel.textContent = "TOO FAST!";

    setTimeout(() => {
      resetGame();
    }, 1000);
  }
});

// 게임 끝
function finishGame() {
  const avg = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
  result.textContent = `✨ 평균 반응 속도: ${avg}ms ✨`;
  leaderboardBox.style.display = "block";
  currentState = STATE.READY;
  panel.textContent = "END";
  panel.className = "ready";
  startBtn.classList.add("ready-btn");
}

// 리더보드 저장
saveBtn.addEventListener("click", () => {
  const name = playerName.value.trim();
  if (!name) return;

  const avg = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);

  const leaderboard = JSON.parse(localStorage.getItem(LB_KEY)) || [];
  leaderboard.push({ name, avg });
  leaderboard.sort((a, b) => a.avg - b.avg);
  localStorage.setItem(LB_KEY, JSON.stringify(leaderboard));

  renderLeaderboard();
});

// 리더보드 렌더링
function renderLeaderboard() {
  leaderboardList.innerHTML = "";
  const leaderboard = JSON.parse(localStorage.getItem(LB_KEY)) || [];
  leaderboard.forEach((entry, idx) => {
    const li = document.createElement("li");
    li.textContent = `${idx + 1}. ${entry.name} - ${entry.avg}ms`;
    leaderboardList.appendChild(li);
  });
}

// 초기화 실행
resetGame();
