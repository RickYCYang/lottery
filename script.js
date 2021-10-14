window.addEventListener("load", () => {
  console.log("hello World");

  const count = document.querySelector("#count");
  const start = document.querySelector("#start");
  const end = document.querySelector("#end");
  const submit = document.querySelector("input[type=submit]");
  const result = document.querySelector("#result");
  const list = document.querySelector("#list");

  const formSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    console.log("value", count.value);
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
      [10, 20, 30].map((num) => {
        list.appendChild(document.createElement("li")).textContent = num;
        return;
      });
      result.classList.remove("hidden");
    }, 3000);
  };

  submit.addEventListener("click", formSubmit);
});
