const screenDisplay = document.querySelector('.screen')
const buttons = document.querySelectorAll('button')

let  calculation = []
let simulate

function calculate(button){
    const value = button.textContent 
   if(value === "Clear"){
      calculation =[]
      screenDisplay.textContent = '.'
}else if(value === '=' ){
   console.log(simulate)
   screenDisplay.textContent = eval(simulate)
}else{ 
    calculation.push(value)
   simulate = calculation.join('')
   screenDisplay.textContent = simulate

}
}

buttons.forEach(button => button.addEventListener('click',()=>calculate(button)));