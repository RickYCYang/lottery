window.addEventListener("load", () => {
  const count = document.querySelector("#count");
  const start = document.querySelector("#start");
  const end = document.querySelector("#end");
  const submit = document.querySelector("input[type=submit]");
  const result = document.querySelector("#result");
  const list = document.querySelector("#list");

  const formSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!count.value) {
      return alert("請輸入抽出幾組數字");
    }
    if (!start.value) {
      return alert("請輸入起始數字");
    }
    if (!end.value) {
      return alert("請輸入結尾數字");
    }

    submit.disabled = true;

    result.classList.add("hidden");
    list.innerHTML = "";

    setTimeout(() => {
      let final = [];
      for (let i = 0; i < count.value; i++) {
        let num = getRandom(start.value, end.value);
        final.push(num);
      }
      final.map((num) => {
        list.appendChild(document.createElement("li")).textContent = num;
        return;
      });
      result.classList.remove("hidden");
      submit.disabled = false;
    }, 0);
  };

  submit.addEventListener("click", formSubmit);
});

function getRandom(min, max) {
  const result = parseInt(Math.random() * (max - min)) + parseInt(min);
  return result;
}
