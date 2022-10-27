var obj = {
    especie: 'Sapo',
    raca: 'Sapo-de-barriga-de-fogo-oriental'
};
obj.tamanho = "4cm";

console.log(obj);

var obj2 = Object.create(null);
obj2.especie = "Sapo";
obj2.raca = "Cururu";

console.log(obj2);

var obj3 = Object.create(obj, {
    especie: {value: "Sapo"},
    raca: {value: "Bufo Bufo"}
});

console.log(obj3);

function obj4(){
    var especie = "Sapo"; //Private
    this.raca = "Sapo-Malhado-Caucasiano"; //Public

    function pular(){
        console.log("Sapo pulando...");
    }

    this.coaxar = () => {
        console.log("Sapo coaxando alto...");
        pular();
    }

}

var obj4Sapo = new obj4();
obj4Sapo.tamanho = "15cm";

var obj5 = new obj4();
obj5.coaxar();

console.log(obj4Sapo);
console.log(obj5);

function sapoAbsoluto(){
    this.estado = "Nirvana";
    this.vestimenta = "Cortina da Mãe";
    this.skill = "Voo";
}

var absoluto = new sapoAbsoluto();

function SapoCururu(){
    sapoAbsoluto.call(this);
    this.especialidade = "Não lava o pé";
}

console.log(absoluto);