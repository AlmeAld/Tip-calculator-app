const billInput = document.querySelector(".bill-input");
const btnTips = document.querySelectorAll(".tip-btn");
const tipInput = document.querySelector(".custom-tip");
const peopleInput = document.querySelector(".people-input");
const billPerson = document.querySelector(".bill-person");
const tipPerson = document.querySelector(".tip-person");

//variables globales
let billValue = 0;
let tipValue = 0;
let peopleValue = 0;

const handleBillInput = (e) => {
  billValue = parseFloat(e.target.value);
  calculate();
};

const handlePeopleInput = (e) => {
  peopleValue = parseFloat(e.target.value);
  calculate();
};

const handleTipInput = (e) => {
  btnTips.forEach((btn) => btn.classList.remove("active"));
  tipValue = parseFloat(e.target.value / 100);
  calculate();
};

billInput.addEventListener("input", handleBillInput);
peopleInput.addEventListener("input", handlePeopleInput);
tipInput.addEventListener("input", handleTipInput);

// obtener el valor de tip de cada boton y convertirlo a decimal (/100)
btnTips.forEach((btnTip) => {
  btnTip.addEventListener("click", (event) => {
    tipValue = parseFloat(btnTip.dataset.tip / 100);

    // filter
    btnTips.forEach((btn) => btn.classList.remove("active"));
    btnTip.classList.add("active");
    // btnTip.nextElementSibling.classList.remove("active");

    // btnTip.classList.remove("active");

    calculate();
  });
});

const calculate = () => {
  //  tip por persona
  const tipAmount = (billValue * tipValue) / peopleValue;
  //  cuenta por persona
  const totalPerson = (billValue * tipValue + billValue) / peopleValue;

  tipPerson.textContent = `$${tipAmount.toFixed(2)}`;
  billPerson.textContent = `$${totalPerson.toFixed(2)}`;
};

// Como ha visto, para permitir solo números enteros positivos (números enteros), puede combinar el uso del atributo min y el atributo onkeypress con un poco de JavaScript.
//<input type="number" min="0" onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))">
