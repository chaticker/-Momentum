const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");
const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text); //로컬 스토리지에 데이터 저장
}

function handleSubmit(event) { //
  event.preventDefault(); //이벤트의 기본 동작 막기
  const currentValue = input.value; //currentValue에 유저 이름 저장
  paintGreeting(currentValue); //paintGreeting에 currentValue 보내기
  saveName(currentValue); //saveName에 currentValue 보내기
}

function askForName() { 
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) { 
  form.classList.remove(SHOWING_CN); //form을 지우고 
  greeting.classList.add(SHOWING_CN); //유저가 입력한 내용을 보여줌

function loadName() { //로컬 스토리지에서 저장된 데이터 가져옴
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    // 로컬 스토리지에 유저가 없을 때 askForName함수를 사용하여 유저 이름 물어보는 폼 생성
    askForName();
  } else { //스토리지에 유저가 있을 경우
    paintGreeting(currentUser); //로컬 스토리지에서 가져온 text와 함께 paintGreeting 호출
  }
}
function init() {
  loadName();
}

init();