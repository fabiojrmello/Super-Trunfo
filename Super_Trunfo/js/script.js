let card1 = {
    name: 'Neymar',
    photo: 'https://img2.gratispng.com/20180405/ddq/kisspng-neymar-2014-fifa-world-cup-brazil-national-footbal-ronaldo-5ac67149005c23.1288896915229545690015.jpg',
    attributes:{
        attack: 62,
        defese: 33,
        magic: 73,
        gol: 80	
    }    
}
let card2 = {
    name: 'Cristiano Ronaldo',
    photo: 'https://img2.gratispng.com/20180319/gpw/kisspng-cristiano-ronaldo-portugal-national-football-team-cristiano-ronaldo-png-transparent-image-5ab033762addc0.9623315915214969501756.jpg',
    attributes:{
        attack: 35,
        defese: 38,
        magic: 76,
        gol: 90
    } 
}
let card3 = {
    name: 'Messi',
    photo: 'https://img2.gratispng.com/20180201/wzw/kisspng-lionel-messi-fc-barcelona-football-player-lionel-messi-5a72cc45eb0845.7085889315174728379627.jpg',
    attributes:{
        attack: 77,
        defese: 25,
        magic: 36,
        gol: 98
    } 
}
let card4 = {
    name: 'Lewandowski',
    photo: 'https://img2.gratispng.com/20180711/rau/kisspng-robert-lewandowski-fifa-17-fc-bayern-munich-jersey-javier-hernandez-5b46a391089372.4884868415313560490351.jpg',
    attributes:{
        attack: 30,
        defese: 66,
        magic: 71,
        gol: 75
    }    
}
let card5 = {
    name: 'Luis Suarez',
    photo: 'https://img2.gratispng.com/20180704/get/kisspng-team-sport-football-tournament-competition-luis-su-aacute-rez-5b3d1ba19a6d65.9624001015307314256325.jpg',
    attributes:{
        attack: 58,
        defese: 62,
        magic: 36,
        gol: 87
    } 
}
let card6 = {
    name: 'Pirlo',
    photo: 'https://img2.gratispng.com/20180529/zjx/kisspng-andrea-pirlo-juventus-f-c-a-c-milan-football-pla-david-de-gea-5b0cfc8ab4e7f0.787015251527577738741.jpg',
    attributes:{
        attack: 44,
        defese: 72,
        magic: 39,
        gol: 65
    } 
}

let card7 = {
    name: 'Ronaldinho Gaucho',
    photo: 'https://img2.gratispng.com/20190620/lyv/kisspng-ronaldinho-portable-network-graphics-football-imag-ronaldinho-putuskan-akhiri-karirnya-di-dunia-sepak-5d0b8f9a8f3626.0815075815610387465866.jpg',
    attributes:{
        attack: 30,
        defese: 55,
        magic: 65,
        gol: 75
    } 
}

let card8 = {
    name: 'Mohamed Salah',
    photo: 'https://img2.gratispng.com/20180601/uje/kisspng-mohamed-salah-liverpool-f-c-premier-league-a-s-r-mohamad-salah-5b11594678fb19.7409393915278636224956.jpg',
    attributes:{
        attack: 30,
        defese: 42,
        magic: 72,
        gol: 87
    } 
}

let card9 = {
    name: 'Roberto Firmino ',
    photo: 'https://img2.gratispng.com/20180526/vrr/kisspng-roberto-firmino-liverpool-f-c-football-player-ren-roberto-firmino-5b097993b70f13.2394382015273476037498.jpg',
    attributes:{
        attack: 30,
        defese: 70,
        magic: 40,
        gol: 73
    } 
}

let card10 = {
    name: 'Kevin De Bruyne',
    photo: 'https://img2.gratispng.com/20180527/kf/kisspng-cristiano-ronaldo-europe-transfer-window-football-kevin-de-bruyne-5b0abadcef3c92.3157484215274298529799.jpg',
    attributes:{
        attack: 70,
        defese: 34,
        magic: 18,
        gol: 85
    } 
}

let card11 = {
    name: 'Kylian Mbappé',
    photo: 'https://img2.gratispng.com/20180920/jve/kisspng-kylian-mbapp-2-18-world-cup-france-national-foot-kylian-mbapp-football-render-4-857-footyrend-5ba38818141c19.5460300915374438640824.jpg',
    attributes:{
        attack: 62,
        defese: 40,
        magic: 69,
        gol: 66
    } 
}

let card12 = {
    name: 'Sergio Ramos',
    photo: 'https://img2.gratispng.com/20180409/isw/kisspng-sergio-ramos-football-player-real-madrid-c-f-spor-real-madrid-5acba2ea5cb8f4.9689786615232949543798.jpg',
    attributes:{
        attack: 42,
        defese: 35,
        magic: 55,
        gol: 45
    } 
}

let card13 = {
    name: 'Toni Kroos',
    photo: 'https://img2.gratispng.com/20180606/ejr/kisspng-toni-kroos-real-madrid-c-f-germany-national-footb-toni-kroos-germany-5b177135314c06.2002236015282629652019.jpg',
    attributes:{
        attack: 10,
        defese: 44,
        magic: 69,
        gol: 70
    } 
}

let card14 = {
    name: 'Paul Pogba',
    photo: 'https://img2.gratispng.com/20180920/faw/kisspng-wayne-rooney-football-player-portable-network-grap-pogba-by-flashdsg-on-deviantart-5ba3ac7131ce52.095920981537453169204.jpg',
    attributes:{
        attack: 70,
        defese: 40,
        magic: 10,
        gol: 68
    } 
}

let cheap = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12, card13, card14];
let myDeck = [];

//Função que distribui os cartões
function distributesCards(){
    for (let myCard = 0; myCard < 7; myCard++){
        let indexRandom = Math.floor(Math.random() * cheap.length);

        if(indexRandom >= cheap.length && indexRandom >= cheap.length){
            indexRandom = (cheap.length-1);
        }

        myDeck.push(cheap.splice(indexRandom, 1)[0]);
        
    }
}

//Invocar a função
distributesCards();

let cardMachine;
let cardPlayer;
let mineCard = document.querySelector('#cardChosen');
let fieldPlayer = document.querySelector('.cardPlayer');
let fieldMachine = document.querySelector('.cardMachine');
let spots = document.querySelector('.punctuation');
let versus = document.querySelector('.versus');

spots.innerHTML = `Jogador possui ${myDeck.length} cartas | Máquina possui ${cheap.length} cartas`;

//Sortear as cartas
function drawCard(){    
    numberCardMachine = Math.floor(Math.random() * cheap.length); 
        numberCardPlayer = Math.floor(Math.random() * myDeck.length);

        if(numberCardMachine >= cheap.length && numberCardPlayer >= myDeck.length){
            numberCardMachine = (cheap.length-1);
        }
        cardMachine = cheap[numberCardMachine];

        cardPlayer = myDeck[numberCardPlayer];
        document.getElementById('battleField').style.display="none";
        document.getElementById('btnRaffle').style.display="none";
        document.getElementById('btnPlay').disabled = false;
        document.getElementById('chooseAttribute').style.display="block";

        mineCard.style.display = 'block';

        mineCard.innerHTML = `
        <div class='card'>
        <div class="nameCard">${cardPlayer.name}</div>
        <img class="imgCard" src="${cardPlayer.photo}" alt="">             
        <div class="attributesCard">
        <div class="bg1"><span>Ataque</span><span>${cardPlayer.attributes.attack}</span></div>
        <div class="bg2"><span>Defesa</span><span>${cardPlayer.attributes.defese}</span></div>
        <div class="bg1"><span>Magica</span><span>${cardPlayer.attributes.magic}</span></div>
        <div class="bg2"><span>Gol</span><span>${cardPlayer.attributes.gol}</span></div>
        </div></div>` 
        displayOptions()
                           
}

//Exibir as opções dos atributos no display.
function displayOptions(){
    let options = document.getElementById('options');
    let optionsText = '';
    for (let attribute in cardPlayer.attributes){
        optionsText += `<div><input  type='radio' name='attribute' value='${attribute}'>${attribute}</div>`;
    }
    options.innerHTML = optionsText;
}

//Pegar os cartões selecionados
function getsSelectedAttribute(){
    let radioAttribute = document.getElementsByName('attribute');
    for (let i = 0; i < radioAttribute.length; i++){
        if(radioAttribute[i].checked){
            return radioAttribute[i].value;
        }
    }
    
}

let result = document.querySelector('#result');

//Iniciar o jogo
function play(){
    let selectedAttribute =  getsSelectedAttribute()
    mineCard.innerHTML = '';
    //Exibir o cartão do jogador
    fieldPlayer.innerHTML = `
    <div class='card'>
    <div class="nameCard">${cardPlayer.name}</div>
    <img class="imgCard" src="${cardPlayer.photo}" alt="">             
    <div class="attributesCard">
    <div class="bg1"><span>Ataque</span><span>${cardPlayer.attributes.attack}</span></div>
    <div class="bg2"><span>Defesa</span><span>${cardPlayer.attributes.defese}</span></div>
    <div class="bg1"><span>Magica</span><span>${cardPlayer.attributes.magic}</span></div>
    <div class="bg2"><span>Gol</span><span>${cardPlayer.attributes.gol}</span></div>
    </div></div>`

    versus.innerHTML = `<img class="img-x" src="../img/imgx.png" alt="">`

    //Exibir o cartão da maquina
    fieldMachine.innerHTML = `
    <div class='card'>
    <div class="nameCard">${cardMachine.name}</div>
    <img class="imgCard" src="${cardMachine.photo}" alt="">             
    <div class="attributesCard">
    <div class="bg1"><span>Ataque</span><span>${cardMachine.attributes.attack}</span></div>
    <div class="bg2"><span>Defesa</span><span>${cardMachine.attributes.defese}</span></div>
    <div class="bg1"><span>Magica</span><span>${cardMachine.attributes.magic}</span></div>
    <div class="bg2"><span>Gol</span><span>${cardMachine.attributes.gol}</span></div>
    </div></div>`
    
    if(cardPlayer.attributes[selectedAttribute] > cardMachine.attributes[selectedAttribute]){
        result.innerHTML = 'Você ganhou!';
        myDeck.push;
        myDeck.push(cheap.splice(numberCardMachine, 1)[0]);

    } else if(cardPlayer.attributes[selectedAttribute] < cardMachine.attributes[selectedAttribute]){
        result.innerHTML = 'Você perdeu!';
        cheap.push(myDeck.splice(numberCardPlayer, 1)[0]);
    } else{
        result.innerHTML = 'Empate';
    }
    
    document.getElementById('battleField').style.display="flex";
    document.getElementById('chooseAttribute').style.display="none";
    document.getElementById('btnPlay').disabled = true;
    document.getElementById('btnNewGame').disabled = false;
    spots.innerHTML = `Jogador possui ${myDeck.length} cartas | Máquina possui ${cheap.length} cartas`;
}

//Novo jogo
function newGame(){

    if(cheap.length == 0){
        result.innerHTML = `As cartas do seu oponente acabaram, e você ganhou o jogo.<br> Parabéns!`;
        cheap = myDeck;
        scodeButton()
    }else if(myDeck.length == 0){
        result.innerHTML = `As cartas acabaram, e você perdeu o jogo.<br> Boa sorte na próxima vez`;
        scodeButton();
    }else{
        document.getElementById('btnNewGame').disabled = true;
        mineCard.style.display = "none";
        document.getElementById('chooseAttribute').style.display="none"; 
        fieldPlayer.innerHTML = '';
        versus.innerHTML = '';
        fieldMachine.innerHTML = '';
        result.innerHTML = '';
        drawCard();
        spots.innerHTML = `Jogador possui ${myDeck.length} cartas | Máquina possui ${cheap.length} cartas`;
    }
}

//Iniciar um novo jogo
function restartGame(){
    myDeck = [];
    distributesCards();
    spots.innerHTML = `Jogador possui ${myDeck.length} cartas | Máquina possui ${cheap.length} cartas`;
    result.innerHTML = '';
    document.getElementById('btnNewGame').disabled = true; 
    showButton();

}

//Esconde o botão do Play e Novo Jogo
function scodeButton(){
    document.getElementById('restartGame').style.display="inline-block";
    document.getElementById('btnPlay').style.display="none";
    document.getElementById('btnNewGame').style.display="none"; 
    fieldPlayer.innerHTML = '';
    versus.innerHTML = '';
    fieldMachine.innerHTML = '';

}

//Exibit os botões
function showButton(){
    document.getElementById('restartGame').style.display="none";
    document.getElementById('btnPlay').style.display="inline-block";
    document.getElementById('btnNewGame').style.display="inline-block"; 
    document.getElementById('btnRaffle').disabled = false;
    document.getElementById('btnRaffle').style.display="inline-block";
    document.getElementById('restartGame').style.display="none"; 
}