const Form = document.querySelector('.form')
const TipValues = document.querySelectorAll('.tip__value')
const CustomTip = document.querySelector('.input--tip')
const inputBill = document.querySelector('.input--bill')
const inputTip = document.querySelector('.input--tip')
const Calculate = document.querySelector('.button--submit')
const NumberOfPeople = document.querySelector('.input--people')
const ErrorPeople = document.querySelector('.people__error')
let tip = 0

Form.addEventListener('click',(e)=>{
  e.preventDefault()
});
const TransformToNumber = (value)=>{
  return Number.parseInt(value)
}
const ActiveTip = (e)=>{
  TipValues.forEach(tip=>{
    if(tip.classList.contains('add-tip')){
      tip.classList.remove('add-tip')
    }
  })
  e.target.classList.add('add-tip')
  tip = TransformToNumber(e.target.textContent.substring(0,2))
}

TipValues.forEach(tip=>{
  tip.addEventListener('click',ActiveTip)
  
})
CustomTip.addEventListener('click',()=>{
  TipValues.forEach(item=>item.classList.remove('add-tip'))
})

inputBill.addEventListener('change',(e)=>{
  const valor = TransformToNumber(e.target.value)
  if(typeof(valor)==='string'){
    e.target.focus()
    e.target.classList.add('error')
  }else{
    e.target.blur()
    e.target.classList.remove('error')
  }
})
inputTip.addEventListener('change',()=>{
  tip = TransformToNumber(inputTip.value)
})
NumberOfPeople.addEventListener('change',(e)=>{
  const numbers = TransformToNumber(e.target.value)
  if(numbers<=0){
    e.target.focus()
    ErrorPeople.classList.add('show-error')
    e.target.classList.add('error')
  }else{
    e.target.blur()
    ErrorPeople.classList.remove('show-error')
    e.target.classList.remove('error')
  }
})
Calculate.addEventListener('click',()=>{
  const bill = TransformToNumber(inputBill.value)
  const numberOfpeople = TransformToNumber(NumberOfPeople.value)
  
})


