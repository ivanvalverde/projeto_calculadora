let calculator= {
    eraseScreen1: function(){
        this.topDisplay.innerText = "";
    },

    eraseScreen2: function(){
        this.botDisplay.innerText = "";
    },

    onButtonPressed: function(){

        this.topDisplay.innerText += valueToAdd;
    },

    setValueToAdd: function(button){

        valueToAdd = button.innerText
         
        if (button == buttonTimes){
            valueToAdd = "*";
        } else if(button == buttonDivide){
            valueToAdd = "/";
        } else if(button == buttonPowerOf){
            valueToAdd = "**";
        } else if(button == buttonSqrtRoot){
            valueToAdd = "**0.5";
        } else if(button == buttonPercen){
            valueToAdd= "/100";
        } else if(button == buttonSin){
            valueToAdd= "Math.sin(";
        } else if(button == buttonCos){
            valueToAdd= "Math.cos(";
        } else if(button == buttonTan){
            valueToAdd= "Math.tan(";
        } else if(button == buttonln){
            valueToAdd= "Math.log(";
        }
  
    },

    forbidInvalidOperations: function(){

        if (this.topDisplay.innerText[calculator.topDisplay.innerText.length-1] == "+"){
            valueToAdd = "";
        } else if(this.topDisplay.innerText[this.topDisplay.innerText.length-1] == "-"){
            valueToAdd = "";
        } else if(this.topDisplay.innerText[this.topDisplay.innerText.length-1] == "/"){
            valueToAdd = "";
        } else if(this.topDisplay.innerText[this.topDisplay.innerText.length-1] == "*"){
            valueToAdd = "";
        }
    },

    factorialOf: function(display){
        let total =1;
        
        for(let i=parseInt(display); i>0;i--){
            total *=i;
        }
        return total;
    },

    deleteLastDigit: function(){
        this.topDisplay.innerText = this.topDisplay.innerText.slice(0,this.topDisplay.innerText.length-1);
    },

    changingRadDegree: function(button){
        if(this.radian){
            this.radian = false;
            button.innerText = "Deg";
        } else{
            this.radian = true;
            button.innerText = "Rad";
        }
    }
};

//Declarando variáveis auxiliares

let valueToAdd;
let sinString = new RegExp(/Math.sin./,"g");
let cosString = new RegExp(/Math.cos./,"g");
let tanString = new RegExp(/Math.tan./,"g");
let numberString = new RegExp(/[0-9]/);

//Declarando os botões

let buttons = document.querySelectorAll(".numbers .button");

let buttonAc = document.querySelector("#acButton");
let buttonPlus = document.querySelector("#sum");
let buttonMinus = document.querySelector("#subtraction");
let buttonTimes = document.querySelector("#times");
let buttonDivide = document.querySelector("#divide");
let buttonEquals = document.querySelector("#equals");
let buttonAnswer = document.querySelector("#ansButton");
let buttonPowerOf = document.querySelector("#toThePowerOf");
let buttonSqrtRoot = document.querySelector("#squareRoot");
let buttonFactorial = document.querySelector("#factorial");
let buttonClear = document.querySelector("#clButton");
let buttonSin = document.querySelector("#sine");
let buttonCos = document.querySelector("#cosine");
let buttonTan = document.querySelector("#tangent");
let buttonPercen = document.querySelector("#percentage");
let buttonln = document.querySelector("#logarithm");
let buttonClosePar = document.querySelector("#closePar");
let buttonOpenPar = document.querySelector("#openPar");
let buttonRadDegree = document.querySelector("#radDegree");

//Adicionando aos botões, funções

buttons.forEach(function(button){
    button.addEventListener("click",function(){calculator.setValueToAdd(button);calculator.onButtonPressed()});
})


buttonAc.addEventListener("click",function(){calculator.eraseScreen1();calculator.eraseScreen2()});
buttonPlus.addEventListener("click",function(){calculator.setValueToAdd(buttonPlus);calculator.forbidInvalidOperations();calculator.onButtonPressed()});
buttonMinus.addEventListener("click",function(){calculator.setValueToAdd(buttonMinus);calculator.forbidInvalidOperations();calculator.onButtonPressed()});
buttonTimes.addEventListener("click",function(){calculator.setValueToAdd(buttonTimes);calculator.forbidInvalidOperations();calculator.onButtonPressed()});
buttonDivide.addEventListener("click",function(){calculator.setValueToAdd(buttonDivide);calculator.forbidInvalidOperations();calculator.onButtonPressed()});
buttonAnswer.addEventListener("click",function(){calculator.topDisplay.innerText += calculator.botDisplay.innerText});
buttonPowerOf.addEventListener("click",function(){calculator.setValueToAdd(buttonPowerOf);calculator.forbidInvalidOperations();calculator.onButtonPressed()});
buttonSqrtRoot.addEventListener("click",function(){calculator.setValueToAdd(buttonSqrtRoot);calculator.forbidInvalidOperations();calculator.onButtonPressed()});
buttonFactorial.addEventListener("click",function(){calculator.botDisplay.innerText = calculator.factorialOf(calculator.topDisplay.innerText)});
buttonClear.addEventListener("click",function(){calculator.deleteLastDigit()});
buttonClosePar.addEventListener("click",function(){calculator.setValueToAdd(buttonClosePar);calculator.onButtonPressed()});
buttonOpenPar.addEventListener("click",function(){calculator.setValueToAdd(buttonOpenPar);calculator.onButtonPressed()});
buttonPercen.addEventListener("click",function(){calculator.setValueToAdd(buttonPercen);calculator.onButtonPressed()});
buttonSin.addEventListener("click",function(){calculator.setValueToAdd(buttonSin);calculator.onButtonPressed()});
buttonCos.addEventListener("click",function(){calculator.setValueToAdd(buttonCos);calculator.onButtonPressed()});
buttonTan.addEventListener("click",function(){calculator.setValueToAdd(buttonTan);calculator.onButtonPressed()});
buttonln.addEventListener("click",function(){calculator.setValueToAdd(buttonln);calculator.onButtonPressed()});
buttonRadDegree.addEventListener("click",function(){calculator.changingRadDegree(buttonRadDegree)});

buttonEquals.addEventListener("click",function(){
    if((numberString.test(calculator.topDisplay.innerText))&&(calculator.topDisplay.innerText[0] != "*")&&(calculator.topDisplay.innerText[0] != "/")){
        if(calculator.radian){
            calculator.botDisplay.innerText = eval(calculator.topDisplay.innerText);
            calculator.eraseScreen1();
        } else{
            if(sinString.test(calculator.topDisplay.innerText)){
                calculator.topDisplay.innerText = calculator.topDisplay.innerText.replace(sinString,"Math.sin((1/57.2958)*");
                console.log(calculator.topDisplay.innerText)
            } else if(cosString.test(calculator.topDisplay.innerText)){
                calculator.topDisplay.innerText = calculator.topDisplay.innerText.replace(cosString,"Math.cos((1/57.2958)");
            } else if(tanString.test(calculator.topDisplay.innerText)){
                calculator.topDisplay.innerText = calculator.topDisplay.innerText.replace(tanString,"Math.tan((1/57.2958)*");
            }
            calculator.botDisplay.innerText = eval(calculator.topDisplay.innerText);
            calculator.eraseScreen1();
        }
    }else{
        calculator.eraseScreen1();
    }
});


//Adicionando atributos à calculadora

calculator.topDisplay = document.querySelector("#display");
calculator.botDisplay = document.querySelector("#display2");
calculator.radian = true;

