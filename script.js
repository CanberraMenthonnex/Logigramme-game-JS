//exercice 1

let investigation = {

    investigation1 :{
        title : "Bar à chat",
        tableClue : ["1 - Tornado adore se mettre en boule au niveau du dos des clients. Il n'est pas le chat préféré de l'ami qui a commandé un café.", "2 - Alan a reçu la visite d'un chat de plus que Lucie, et de deux de moins que l'ami(e) qui a un faible pour Pitou.", " 3 - Le charpardeur est l'animal préféré de la personne qui a commandé un chocoloat chaud. Elle a été approchée par un chat de plus que celle qui a craqué pour le félin s'installant sur les genoux des clients.", " 4 - L'ami qui a pris un thé a fondu pour Châtaigne.", " 5 - Matt n'a pas commandé de café"],
        tableElement : [["Ami","Alan","Isabelle","Lucie","Matt"],["Boisson","Café","Chocolat","Limonade","Thé"],["Félins","3","4","5","6"],["Chat","Châtaigne","Pitou","Quizzy","Tornado"],["Particularité","Caresses","Chapardeur","Dos","Genoux"]],
        tableAsw: ["00","05","010","012","11","17","19","113","22","24","211","214","33","36","38","315"]
    },

    investigation2 : {
        title : "La main dans le sac !",
        tableClue : ["1 - Le pop-corn sucré a été commandé en même temps que les biscuits, mais pas par Océance.", " 2 - Le paquet d'Alexis contenait cent grammes de plus que celui de Mathilde, et cinquante de moins que celui au beurre.", "3 - Le pop-corn enrobé de chocolat n'a pas été acheté par Alexis ni par celui/celle qui a pris de barres chocolatées.", "4 - Eva a commandé de l'eau avec son pop-corn salé ou sucré. Son paquet contenait cinquante grammes de moins que celui de l'ami(e) qui a commandé un soda.", "5 - Océane a commandé 200 g de pop-corn." ],
        tableElement : [["Copain","Alexis","Eva","Mathilde","Océane","Théo"],["Pop-corn","Beurre","Caramel","Chocolat","Salé","Scuré"],["Quantité","200g","250g","300g","350g","400g"],["Achat","Biscuits","Bonbons","Chocolat","Eau","Soda"]],
        tableQuestion : "Ces copaines se sont retrouvés au cinéma. Quelle sorte de pop-corn chacun a-t-il achetée et en quelle quantité ? Qu'à-t-il pris en + ?",
        tableAsw: ["01","08","014","13","17","113","24","26","210","32","35","311","40","49","412"]
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////
//Chrono

let s = 0;
let m = 0;
let h = 0;
let timer = true;

function chronometre(){    
    
    if (timer == true){
        s++;            //second count 
        displayTimer(); //refresh chrono
        seconde();
        if(s == 59){
            m++;        //min count
            s = -1;
            if(m == 60){
                h++;    //hours count
                m = 0;
                if(h > 24){
                    timer = false;  //stop chrono
                }
            }
        }
    }
}

//define one seconde
function seconde(){
    setTimeout(chronometre, 1000);
}

/**
 * function displayTimer -> display timer
 */
function displayTimer(){
    if (s>=10){
        $("#seconde").replaceWith('<span id="seconde">' + s + '</span>');
    }else{
        $("#seconde").replaceWith('<span id="seconde">0' + s + '</span>');
    }
    if(m>=10){
        $("#minute").replaceWith('<span id="minute">' + m + '</span>');
    }else{
        $("#minute").replaceWith('<span id="minute"> 0' + m + '</span>');
    }
    if(h>=10){
        $("#hour").replaceWith('<span id="hour">' + h + '</span>');
    }else{
        $("#hour").replaceWith('<span id="hour">0' + h + '</span>');
    }
}

//chrono button

$("#stopChrono").on("click", function(){
    timer = false;
    console.log("Le chronomètre est arreté");
})

$("#playChrono").on("click", function(){
    timer = true;
    seconde();
    console.log("There is where the fun begin");
})



////////////////////////////////////////////////////////////////////////////////////////////////////////
                                    //-- Usefull function --\\
/**
 * function addClass
 * @param {string} element, which element to add class 
 * @param {string} classToAdd, class to add 
 */

function addClass(element, classToAdd){
    $(element).addClass(classToAdd);
}


/**
 * function addAttrivute
 * @param {string} element, wich element to add attribute 
 * @param {string} attribute, type of attribute
 * @param {sting} value, attribute value
 */

function addAttribute(element, attribute, value){
    $(element).attr(attribute,value);
}


/**
 * function appendDOMTimes
 * @param {string} element, element to add in DOM 
 * @param {number} times, number of time element add
 * @param {string} positionDOM, where element is add
 */

function appendDOMTimes(element, positionDOM, times = 1){
    for (let index = 0; index < times; index++) {
        n++;
        $(positionDOM).append(element);
        
    }
}


// useless function same use then appendDOMTimes
function appendEachElementDOM(positionDOM, arrayElement){
    arrayElement.forEach(element => {
        appendDOMTimes(element,positionDOM);
    });
    
}


/**
 * function parseInvestigationData, parsing data from object investigation to new variable
 * @param {string} investigationNumber, number of the investigation to data parse
 */

function parseInvestigationData(investigationNumber){
    investigationTitle = investigation[investigationNumber].title;
    investigationClue = investigation[investigationNumber].tableClue;
    investigationAsw = investigation[investigationNumber].tableAsw;
    numberElement = (investigation[investigationNumber].tableElement[0].length - 1) * (investigation[investigationNumber].tableElement.length - 1);
    numberCol = investigation[investigationNumber].tableElement.length - 1;
    numberUnderCol = (investigation[investigationNumber].tableElement[0].length - 1).toString();
    for (let index = 1; index < investigation[investigationNumber].tableElement.length; index++) {
        titleCol.push(investigation[investigationNumber].tableElement[index][0]);
    };
    
    let x = 1
    let n;

    
    for (let index = 0; index < investigation[investigationNumber].tableElement[0].length - 1; index++) {
        titleLign.push(investigation[investigationNumber].tableElement[0][x]);
        x++;

    }

    x = 1;
    n = 1;
    for (let index = 0; index < investigation[investigationNumber].tableElement.length - 2; index++) {
        x= 1;
        for (let index = 0; index < investigation[investigationNumber].tableElement[0].length - 1; index++){

            titleLign.push(investigation[investigationNumber].tableElement[investigation[investigationNumber].tableElement.length - n][x]);
            x++;
    
        }
        n++;
    }

    n = 1;
    for (let index = 0; index < investigation[investigationNumber].tableElement.length - 1; index++) {
        x = 1;
        
        for(let index = 0; index < investigation[investigationNumber].tableElement[0].length -1; index++){
            titleUnderCol.push(investigation[investigationNumber].tableElement[n][x]);
            x++;
        }
        n++;   
    }

}

/////////////////////////////////////////////////////////////////////////////////////////////////


//Exercice 2

//Data Parse

let elementDOM = "#table";

let investigationNumber;
let investigationTitle;
let investigationClue;
let investigationAsw;
let numberElement;
let numberCol;
let numberUnderCol;
let titleCol = [];
let titleLign = [];
let titleUnderCol = [];

//Generate Wireframe

function displayGameStart(){
    $("#buttonValidation").on("click", function(){
        
        
        let enquete = $("select").val();
        if(enquete != "choix"){

            investigationNumber = "investigation" + $("select").val();
            parseInvestigationData(investigationNumber);
            addClass("form","none");
            generateBoard();
            timer = true;
            seconde();

        }else{
            alert("choix pas bon")
        }

    })
}

let n = 0;

function generateClues(){
    investigationClue.forEach(element => {
        $("#clues").append("<p>" + element + "</p>")
    });
}

/**
 * function generateTableHead
 * @param {string} positionDOM 
 * @param {number} numberElement 
 */
function generateTableHead(positionDOM, numberElement){
    appendDOMTimes("<thead><tr id='line1'></tr><tr id='line2'></tr></thead>", positionDOM); //first line
    appendDOMTimes("<td></td>","#line1"); 

    for (let index = 0; index < titleCol.length; index++) { //title
        $("#line1").append("<th class='th_tr_thead' colspan=" + numberUnderCol + ">" + titleCol[index] + "</th>");
    }
    appendDOMTimes("<td class='td_textarea cell_none' ><textarea placeholder='Ecrivez-vos notes ici:' cols='30' rows='10'></textarea></td>", "#line2"); //placeholder
    for (let index = 0; index < numberElement; index++) {
        $("#line2").append("<th><p><span>" + titleUnderCol[index] + "</span></p></th>");
        
    }
    addClass('#line2 > th > p', "rotate");
    addClass('td', "cell_none");

}


function generateTableBody(positionDOM, numberElement){ //generate main body
    appendDOMTimes("<tbody></tobdy>", positionDOM);
    id2=0;
    let classBodyLine = 0;

    for (let index = 0; index < numberElement; index++) { //generate line and give all the good class and value stocked in the data values

        $("tbody").append("<tr class='bodyLine" + classBodyLine + "'><th>"+ titleLign[index] +"</th></tr>");
        id=0;

        for (let index = 0; index < numberUnderCol*numberCol; index++) { //generate all the case and give them the id for their coordinates by (xy) => id2id
            $(".bodyLine" + classBodyLine).append("<td><input class='case' id='"+ id2 + id +"'type='texte' value='' onClick='fillClick(this.id)'></input></td>");
            id++;
        }
        id2++;
        classBodyLine++;
        
        
    }

}

function generateTitle(){
    appendDOMTimes(investigationTitle, "h3");
}

function importantCase(investigationNumber){ //give the class "importantCase" to first result of line -> color cyan
    let numberLineImportant = investigation[investigationNumber].tableElement[0].length - 1;
    for (let index = 0; index < numberLineImportant; index++) {
        addClass($('[class$=bodyLine' + index + '] > td >input'),"importantCase");
        
    }
    
}

function generateBoard(){ //generate board by calling important function
    appendDOMTimes("<article id='clues'></article>", "#boardGame");
    appendDOMTimes("<article id='table'></article>", "#boardGame");
    generateTitle(elementDOM);
    generateTableHead(elementDOM, numberElement);
    generateTableBody(elementDOM,numberElement);
    generateClues();

    appendDOMTimes("<button id='validateForm' type='submit' onClick='getUserInput()'>Valider</button>",elementDOM);

    importantCase(investigationNumber);
}

//Exercice 3


/**
 * function fillClick, automatique function onclick to fill up the box
 * @param {*} clicked_id 
 */
function fillClick(clicked_id)
{
    if($("#" +clicked_id).val() == ""){
        $("#" +clicked_id).val("0");
        $("#" +clicked_id).attr("value","0");
    }else if($("#" +clicked_id).val() == "0"){
        $("#" +clicked_id).val("1");
        $("#" +clicked_id).attr("value","1");
    }else{
        $("#" +clicked_id).val("");
        $("#" +clicked_id).attr("value","");
    }
    
}

//Exercie 4 & 5

let userInput = [];
let userAsw = [];
let y = 0;
let x = 0;
function getUserInput(){ //get all user's answers/input
    let numberLineImportant = investigation[investigationNumber].tableElement[0].length - 1;
    for (let index = 0; index < numberLineImportant; index++) {
        y = 0;
        for (let index = 0; index < numberUnderCol*numberCol; index++) {
            userInput.push($('#' + x + y ).attr("value")); //get all type of answer
            if($('#' + x + y).val() == "1"){
                userAsw.push('' + x +y); //get the answer when the input was 1
            }
        y++;
        }
        x++;
    }

    x = 0;
    y = 0;
    checkInputUser();
}


function checkInputUser(){ //check if user filled up all important (cyan) box
    if(userInput.includes("")){
        alert("Merci de bien compléter toutes les cases en cyan");
        userInput = []; //refresh user input
    }else{
        console.log("Verification")
        compareUserInputAnswer() //if yes go to compare the answer of t he user
    }
}



let correctAnswer = 0;
let wrongAnswer = 0;

function compareUserInputAnswer(){
    // console.log(investigationAsw);
    // console.log(userAsw);
    
    for (let index = 0; index < userAsw.length; index++) { //compare the answer, and count the number of good and bad answer
        if(investigationAsw.includes(userAsw[index])){
            correctAnswer++;
        }else{
            wrongAnswer++
        }
        
    }
    if(investigationAsw.length != userAsw.length){ //if user add less or more answer then correct amount of answer
        if(investigationAsw.length > userAsw.length){
            missingError = investigationAsw.length - userAsw.length;
            wrongAnswer += missingError;
        }else{
            missingError = userAsw.length - investigationAsw.length
            wrongAnswer += missingError;
        }
    }
    // console.log(correctAnswer);
    // console.log(wrongAnswer);

    displayGG(); //display next page
}


function displayGG(){
    timer = false;
    addAttribute("#boardGame","class","none");
    addAttribute("h3","class","none");
    appendDOMTimes("<section id='result'><h3>Les résultats</h3></section>","body")
    appendDOMTimes("<p id='pScore'>GG voici votre score <span>" + s +"s "+ m +"m "+ h +"h "+ "</span></p>","#result");
    appendDOMTimes("<p> Temps de malus :" + wrongAnswer * 30 + "s soit " + wrongAnswer + " mauvaise(s) réponse(s)</p>", "#result");
    appendDOMTimes("<p>Nombre de bonne(s) réponse(s) " + correctAnswer +"</p>","#result");
}

//Launch function 

displayGameStart();

