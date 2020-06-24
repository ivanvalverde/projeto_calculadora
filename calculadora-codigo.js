let calculator= {
    eraseScreen1: function(){
        this.topDisplay.innerText = "";
    },

    eraseScreen2: function(){
        this.botDisplay.innerText = "";
    },

    onButtonPressed: function(button){

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
            valueToAdd = "**1/2";
        } 

        if(screen.width > 1024){
            if (this.topDisplay.innerText.length > 25){
                valueToAdd = "";
            }
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
    }
};

//Declarando variáveis auxiliares

let valueToAdd;

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

//Adicionando aos botões, funções

buttons.forEach(function(button){
    button.addEventListener("click",function(){calculator.setValueToAdd(button);calculator.onButtonPressed(button)});
})


buttonAc.addEventListener("click",function(){calculator.eraseScreen1();calculator.eraseScreen2()});
buttonPlus.addEventListener("click",function(){calculator.setValueToAdd(buttonPlus);calculator.forbidInvalidOperations();calculator.onButtonPressed(buttonPlus)});
buttonMinus.addEventListener("click",function(){calculator.setValueToAdd(buttonMinus);calculator.forbidInvalidOperations();calculator.onButtonPressed(buttonMinus)});
buttonTimes.addEventListener("click",function(){calculator.setValueToAdd(buttonTimes);calculator.forbidInvalidOperations();calculator.onButtonPressed(buttonTimes)});
buttonDivide.addEventListener("click",function(){calculator.setValueToAdd(buttonDivide);calculator.forbidInvalidOperations();calculator.onButtonPressed(buttonDivide)});
buttonEquals.addEventListener("click",function(){calculator.botDisplay.innerText = eval(calculator.topDisplay.innerText);calculator.eraseScreen1()});
buttonAnswer.addEventListener("click",function(){calculator.topDisplay.innerText += calculator.botDisplay.innerText});
buttonPowerOf.addEventListener("click",function(){calculator.setValueToAdd(buttonPowerOf);calculator.forbidInvalidOperations();calculator.onButtonPressed(buttonPowerOf)});
buttonSqrtRoot.addEventListener("click",function(){calculator.setValueToAdd(buttonSqrtRoot);calculator.forbidInvalidOperations();calculator.onButtonPressed(buttonSqrtRoot)});
buttonFactorial.addEventListener("click",function(){calculator.botDisplay.innerText = calculator.factorialOf(calculator.topDisplay.innerText)})

//Adicionando atributos à calculadora

calculator.topDisplay = document.querySelector("#display");
calculator.botDisplay = document.querySelector("#display2");

