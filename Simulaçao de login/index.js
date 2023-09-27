import DadosCadastrais from "./Class.js";

const cadastro = document.querySelector("#formCadastro");

const loginForm = document.querySelector("#formLogin");

const loginButton = document.querySelector(".login");

const registroButton = document.querySelector(".cadastro");

const buttonCadastro = document.querySelector(".botaoCadastro");

const buttonEntrar = document.querySelector("#botaoLogin");

const arrayCadastros = [];

loginButton.addEventListener("click", () => {
  loginForm.classList.remove("hidden");
  cadastro.classList.add("hidden");
});

registroButton.addEventListener("click", () => {
  loginForm.classList.add("hidden");
  cadastro.classList.remove("hidden");
});

buttonCadastro.addEventListener("submit", (event) => {
  event.preventDefault();

  let dadoNome = document.querySelector(".NomeInput").value;
  let dadoEmail = document.querySelector(".emailInput").value;
  let dadoDataDeNascimento = document.querySelector(".dataInput").value;
  let dadoSenha = document.querySelector(".senhaInput").value;

  arrayCadastros.push(
    new DadosCadastrais(dadoNome, dadoEmail, dadoDataDeNascimento, dadoSenha)
  );

  console.log(arrayCadastros);
});

buttonEntrar.addEventListener("click", (event) => {
  event.preventDefault();

  let loginEmail = document.querySelector(".inputLoginEmail").value;
  let loginSenha = document.querySelector(".inputLoginSenha").value;

  arrayCadastros.forEach((elementoArray) => {
    if (
      elementoArray.email === loginEmail &&
      elementoArray.senha === loginSenha
    ) {
      console.log("voce entrou :D");
    } else {
      ("acesso negado! D:");
    }
  });
});
