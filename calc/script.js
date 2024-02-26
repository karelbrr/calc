let example = "";
let label = document.getElementById("result-text");

const AddToLabel = (num) => {
  example = example + num;
  label.innerHTML = example;
};

const Eval = () => {
  let result = math.evaluate(example);
  label.innerHTML = result
  example = result
};
