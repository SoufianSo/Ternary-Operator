console.log("it works");

function checkAge() {
  const age = parseInt(document.getElementById("ageInput").value);
  const resultElement = document.getElementById("result");
  const ageStatus = age >= 18 ? "volljährig" : "minderjährig";
  resultElement.textContent = "Die Person ist " + ageStatus + ".";
}

function codeeingabe() {
  const codeinput = parseInt(document.getElementById("code").value);
  const ergebnis = document.getElementById("result2");
  const codelength = codeinput >= 11111111 ? "sicher" : "unsicher";
  ergebnis.textContent = "Passwort ist " + codelength + ".";
}

function anzeigen() {
  const nachricht = document.getElementById("message").value;
  const ausgabeElement = document.getElementById("ausgabe");

  if (nachricht === "") {
    ausgabeElement.textContent = "Bitte geben Sie eine Nachricht ein.";
  } else {
    ausgabeElement.textContent = "Ihre Nachricht: " + nachricht;
  }
}
