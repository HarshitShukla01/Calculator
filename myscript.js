let screen = document.getElementById("calculation");

buttons = document.querySelectorAll("button");
console.log("hello calculator! ");
let svalue = "";
for (btn of buttons) {
  btn.addEventListener("click", function (e) {
    btntext = e.target.innerText;
    console.log(btntext);

    if (btntext == "x") {
      btntext = "*";
      svalue += btntext;
      screen.value = svalue;
    } else if (btntext == "C") {
      svalue = "";
      screen.value = svalue;
    } else if (btntext == "⌫") {
      svalue = svalue.substring(0, svalue.length - 1);
      screen.value = svalue;
    } else if (btntext == "=") {
      screen.value = eval(svalue);
      svalue = "";
    } else {
      svalue += btntext;
      screen.value = svalue;
    }
  });
}
document.addEventListener("keydown", (e) => {
  var key = e.key;

  if (e.key === "Enter") {
    //document.getElementById("equalling").style.backgroundColor="#6574ff";
    document.getElementById("calculation").value = eval(svalue);
    svalue = "";
  } else if (e.key === "Backspace" || e.key === "Delete") {
    svalue = svalue.substring(0, svalue.length - 1);
    document.getElementById("calculation").value = svalue;
  } else if (
    key == "/" ||
    key == "*" ||
    key == "+" ||
    key == "-" ||
    key == "(" ||
    key == ")" ||
    key == "="
  ) {
    svalue += key;
    screen.value = svalue;
  } else if (isNaN(key)) {
    alert("Must input numbers");
    return false;
  } else {
    svalue += key;
    screen.value = svalue;
  }
});
function myfunc(keyvalue) {
  for (btn of buttons) {
    btntext = btn.innerText;
    if (keyvalue == "Enter") {
      document.getElementById("equalling").style.backgroundColor = "#6574ff";
    } else if (keyvalue == "Backspace" || keyvalue == "Delete") {
      document.getElementById("backspace").style.backgroundColor = "#6574ff";
    } else if (keyvalue == "*") {
      document.getElementById("multiply").style.backgroundColor = "#6574ff";
    } else if (btntext == keyvalue) {
      btn.style.backgroundColor = "#6574ff";
      setTimeout(function () {
        btn.style.backgroundColor = null;
      }, 1000);
    }
  }
}
document.addEventListener("keypress", (ef) => {
  var key = ef.key;
  if (key == "Enter") myfunc(key);
  else if (key == ")") myfunc(key);
  else if (key == "(") myfunc(key);
  else if (key == "+") myfunc(key);
  else if (key == "-") myfunc(key);
  else if (key == "*") myfunc(key);
  else if (key == "/") myfunc(key);
  else if (key == "1") myfunc(key);
  else if (key == "2") myfunc(key);
  else if (key == "3") myfunc(key);
  else if (key == "4") myfunc(key);
  else if (key == "5") myfunc(key);
  else if (key == "6") myfunc(key);
  else if (key == "7") myfunc(key);
  else if (key == "8") myfunc(key);
  else if (key == "9") myfunc(key);
  else if (key == "0") myfunc(key);
});
document.addEventListener("keydown", (eg) => {
  var key = eg.key;
  if (key === "Backspace" || key === "Delete") {
    myfunc(key);
  }
});
