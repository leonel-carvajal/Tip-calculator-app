const Form = document.querySelector('.form')
const TipValues = document.querySelectorAll('.tip__value')
const CustomTip = document.querySelector('.input--tip')
const inputBill = document.querySelector('.input--bill')
const inputTip = document.querySelector('.input--tip')
const Calculate = document.querySelector('.button--submit')
const Reset = document.querySelector('.button--reset')
const NumberOfPeople = document.querySelector('.input--people')
const ErrorPeople = document.querySelector('.people__error')
const Total = document.querySelector('.total__value')
const Amount = document.querySelector('.amount__value')
const ImgDark = document.querySelector('.header__img')
let tip = 0
let darkMode = null
Form.addEventListener('click',(e)=>{
  e.preventDefault()
});
const TransformToNumber = (value)=>{
  return Number.parseInt(value)
}
const ActiveTip = (e)=>{
  CustomTip.value = 0
  TipValues.forEach(tip=>{
    if(tip.classList.contains('add-tip')){
      tip.classList.remove('add-tip')
    }
  })
  e.target.classList.add('add-tip')
  tip = TransformToNumber(e.target.textContent.substring(0,2))
}
const CalculateTotalBill = ()=>{
  const bill = TransformToNumber(inputBill.value)
  const numberOfpeople = TransformToNumber(NumberOfPeople.value)
  if(bill>0 && numberOfpeople >0 && tip >0){
    let SubTip = bill * tip /100
    let TipByPerson = SubTip/numberOfpeople
    let TotalByPerson = bill /numberOfpeople
    Amount.textContent = `${TipByPerson.toFixed(2)}$`
    Total.textContent = `${TotalByPerson.toFixed(2)}$`
  }
}
const ResetBill = ()=>{
  TipValues.forEach(item=>item.classList.remove('add-tip'))
  inputBill.value = 0
  inputTip.value = 0
  NumberOfPeople.value = 0
  Amount.textContent = `00.0$`
  Total.textContent = `00.0$`
}

const DarkMode = ()=>{
    localStorage.setItem('darkMode',true)
    darkMode = true
    ImgDark.setAttribute('src','images/sun.svg')
    document.documentElement.style.setProperty('--Light-grayish-cyan','rgb(13, 11, 19)')
    document.documentElement.style.setProperty('--Dark-grayish-cyan','#fff')
    Form.classList.add('dark--form')
    document.querySelectorAll('.input').forEach(item=>item.classList.add('dark'))
}
const RemoveDarkMode = ()=>{
  localStorage.setItem('darkMode',false)
  darkMode=false
  ImgDark.setAttribute('src','images/moon.svg')
  document.documentElement.style.setProperty('--Light-grayish-cyan','hsl(189, 41%, 97%)')
  document.documentElement.style.setProperty('--Dark-grayish-cyan','hsl(186, 14%, 43%)')
  Form.classList.remove('dark--form')
  document.querySelectorAll('.input').forEach(item=>item.classList.remove('dark'))
}
ImgDark.addEventListener('click',()=>{
  if(darkMode){
    RemoveDarkMode()
  }else{
    DarkMode()
  }
})

TipValues.forEach(tip=>{
  tip.addEventListener('click',ActiveTip)
  
})
CustomTip.addEventListener('click',()=>{
  TipValues.forEach(item=>item.classList.remove('add-tip'))
})
CustomTip.addEventListener('change',(e)=>{
  const valor = TransformToNumber(e.target.value)
  if(valor<=0){
    e.target.focus()
    CustomTip.classList.add('error')
  }else{
    e.target.blur()
    CustomTip.classList.remove('error')
  }
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

Calculate.addEventListener('click',CalculateTotalBill)
Reset.addEventListener('click',ResetBill)


window.addEventListener('DOMContentLoaded',()=>{
  if(localStorage.getItem('darkMode')===true){
    RemoveDarkMode()
  }else{
    DarkMode()
  }
})