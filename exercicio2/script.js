/* # Exercício 2

Escreva uma função que receba três valores. Uma idade, um booleano que responda se a pessoa terminou ou não o ensino médio, e um booleano que responda se a pessoa está cursando alguma faculdade.

Crie um `if` para cada variável, checando as seguintes afirmacões:
- Se a pessoa tem 18 anos ou mais;
- Se a pessoa terminou o ensino médio;
- Se a pessoa NÃO está cursando alguma faculdade;

Crie um `if` que imprima que a afirmacão é verdadeira, e um `else` para imprimir que a afirmacão não é verdadeira.

<details>

<summary>Exemplo</summary>

Caso a primeira pessoa tenha idade >=18:

<b>"A pessoa é maior de idade"</b>

e caso não seja:

<b>"A pessoa é menor de idade"</b>

</details> */

const idade = prompt("qual sua idade")
const ensinoMedio = prompt("você terminou o ensino medio?")
const cursandoOutraFaculdade = prompt("você NÃO está cursando o ensino superior?")

if( idade >= 18 && idade <= 130){
console.log("A pessoa é maior de idade")
}else if(idade <= 17 && idade >= 1){
	console.log("A pessoa é menor de idade")
}else{
    console.log("dados invalidos")
}



if(ensinoMedio==="sim"){
    console.log("a pessoa terminou o ensino medio")
}else if(ensinoMedio ==="não" || ensinoMedio==="nao"){
    console.log("a pessoa não terminou o ensino medio")
}else{
    console.log("dados invalidos")
}



if(cursandoOutraFaculdade==="sim"){
    console.log("a pessoa não esta cursando outra faculdade")
}else if(cursandoOutraFaculdade==="não" || cursandoOutraFaculdade==="nao"){
    console.log("a pessoa está cursando outra faculdade")
}else{
    console.log("dados invalidos")
}
