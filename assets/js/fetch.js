// const cep = document.querySelector("#cep");

// o evento blur significa que clicamos na caixa de texto e saímos dela.
/** cep.addEventListener("blur", async (e) => {
  let search = cep.value.replace("-", "");

  const options = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };

  https://viacep.com.br/ws/71680389/json/
  fetch vai gerar uma promise. Promise é uma promessa de que algo vai acontecer, é uma intenção.
  se der certo, ele vai retornar o resultado. Se der errado, ele vai retornar um erro.
  se der certo nós resolvemos a promise. Se der errado, nos rejeitamos a promise.

  fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then((response) => {
      response.json().then((result) => console.log(result));
    })
    .catch((e) => console.log(e.message));

  async/await - são primos um do outro (Onde o await está, o async tem de estar).
  Veja abaixo como fazer a mesma operação acima, só que muito mais simples.

  const resultado = await fetch(
    `https://viacep.com.br/ws/${search}/json/`,
    options
  );
  const json = await resultado.json();
  console.log(json);
});*/

const cep = document.querySelector("#cep");

const showData = (result) => {
  for (const campo in result) {
    if (document.querySelector("#" + campo)) {
      document.querySelector("#" + campo).value = result[campo];
    }
  }
};

cep.addEventListener("blur", async (e) => {
  let search = cep.value.replace("-", "");

  if (search < 8 || Number(search) === NaN) {
    alert("CEP inválido");
    return;
  }

  const options = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };

  const resultado = await fetch(
    `https://viacep.com.br/ws/${search}/json/`,
    options
  );
  const json = await resultado.json();
  showData(json);
});
