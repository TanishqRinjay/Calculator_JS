let string = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (
      document.querySelector("input").value == "0" ||
      document.querySelector("input").value == 0 ||
      document.querySelector("input").value == "Error"
    ) {
      document.querySelector("input").value = " ";
    }
    if (e.target.innerText == "del") {
      string = Math.floor(parseInt(string) / 10);

      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "AC") {
      string = 0;
      document.querySelector("input").value = 0;
    } else if (e.target.innerHTML == "=") {
      string = eval(string)+0.4;
      document.querySelector("input").value = string;
    } else {
      if (string == "0" || string == 0) {
        string = e.target.innerHTML;
      } else {
        string = string + e.target.innerHTML;
      }
      document.querySelector("input").value = string;
    }
  });
  window.onerror = () => {
    document.querySelector("input").value == "Error";
    string = 0;
  };
});
