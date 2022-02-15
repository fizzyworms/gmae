const generateNum = document.getElementById("generateNum");
const guessNum = document.getElementById("guessNum");
const btn = document.getElementById("btn");
const printDiv = document.getElementById("printDiv");
const youChoseNum = document.getElementById("youChoseNum");
const machineChoseNum = document.getElementById("machineChoseNum");
const won = document.getElementById("won");
const lost = document.getElementById("lost");

const CLASS_HIDDEN = "hidden";

function submitBtn(event) {
  event.preventDefault();
  printDiv.classList.remove(CLASS_HIDDEN);
  const randomNum = Math.floor(
    Math.random() * (parseInt(generateNum.value) + parseInt(1))
  ); // parseInt로 정수 변환하여 덧셈연산 해준다.
  youChoseNum.innerText = guessNum.value;
  machineChoseNum.innerText = `${randomNum}.`;
  if (guessNum.value == randomNum) {
    won.classList.remove(CLASS_HIDDEN);
    lost.classList.add(CLASS_HIDDEN);
  } else {
    lost.classList.remove(CLASS_HIDDEN);
    won.classList.add(CLASS_HIDDEN);
  }
}

btn.addEventListener("click", submitBtn);
