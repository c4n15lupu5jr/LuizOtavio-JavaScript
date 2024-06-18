const arrayNumeros: Array<number> = [1, 2, 3, 4, 5, 6];
console.log(arrayNumeros);

async function promiseAsync() {
  return 1;
}

function minhaPromise() {
  return new Promise((resolve, reject) => {
    setTimeout()
  })
}

promiseAsync().then(resultado => console.log(resultado + 1));
