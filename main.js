function criaCalculadora() {
  return {
    display: document.querySelector(".display"),

    inicia() {
      this.cliquesBotoes();
      this.clickEnter();
    },
    clearDisplay() {
      this.display.value = "";
    },
    apagUm() {
      this.display.value = this.display.value.slice(0, -1);
    },
    btnParaDisplay(valor) {
      this.display.value += valor;
      this.display.focus();
    },
    cliquesBotoes() {
      document.addEventListener("click", (e) => {
        const el = e.target;
        if (el.classList.contains("btn-num")) this.btnParaDisplay(el.innerText);
        if (el.classList.contains("btn-clear")) this.clearDisplay();
        if (el.classList.contains("btn-del")) this.apagUm();
        if (el.classList.contains("btn-eq")) this.result();
      });
    },
    clickEnter() {
      document.addEventListener("keypress", (e) => {
        if (e.code === "Enter") this.result();
      });
    },
    result() {
      try {
       this.display.value= eval(this.display.value);
        const resultDisplay = eval(this.display.value);
        if (!resultDisplay) this.display.value = "Digite uma conta válida!";
        return;
      } catch (e) {
        this.display.value = "Digite uma conta válida!";
        return;
      }
    },
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();
