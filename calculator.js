let calculation = "";
const containerDiv = document.getElementById("container-div");
const btnDiv = document.getElementById("btn-container");
const numbers = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "+",
  "-",
  "/",
  "*",
  "(",
  ")",
  "C",
  "=",
];
let output = "";

numbers.map((num) => {
  let toStr = `'` + num + `'`;
  output += `
      <button onclick="btn(${toStr})">${num}</button>
    `;
  btnDiv.innerHTML = output;
});

const btn = (num) => {
  if (num === "C") return (containerDiv.innerHTML = calculation = "");
  else if (num === "=")
    return (containerDiv.innerHTML = `${eval(calculation)}`);
  else return (containerDiv.innerHTML = `${(calculation += num)}`);
};
