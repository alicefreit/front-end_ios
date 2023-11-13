let idade = Math.random()*10;
let idadeInt = idade.toFixed(0) * idade.toFixed(0);


if(idadeInt < 18){
    console.log('Idade: '+idadeInt+'\n'+'Pessoa menor de idade')
}

else if (idadeInt < 59){
    console.log('Idade: '+idadeInt+'\n'+'Pessoa maior de idade')
}
/* coole.log(idade)
console.log(idadeInt)ns */