//let nome = "Heitor"

//function ola(nome){
//    return "Ola, " + nome + "!";
//}

//console.log(ola("hEITOR"));


//const somaNumeros = (a,b) => a + b;
//console.log(somaNumeros(10,5));

//() => {}

    let frutas = ["Maçãn", "Banana", "Uva"];
    console.log(frutas[1]);//Acessar um iten de array

    frutas.push("Uva");//Adicionar um item ao array
    console.log(frutas);

    frutas.pop(""); //Remove o ultimo item so array
    console.log(frutas);

    //Objetos
    let carro = {
        marca: "Fiat",
        modelo: "Uno",
        ano: 2020
        detalhes: function(){
            return "Carro " + this.marca + " " + this.modelo + " " + this.ano;
        }
    };


