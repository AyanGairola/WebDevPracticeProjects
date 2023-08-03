let lowerCase="abcdefghijklmnopqrestuvwxyz"
let upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let numbers="0123456789"
let specialChar="!@#$%^&*()<>?/[]{}"
let funnyPass=["123456", "password", "12345678", "1234", "pussy", "12345", "baseball", "master", "michael", "football", "shadow", "monkey", "abc123", "pass", "6969", "jordan", "password", "123456", "qwerty", "123456789", "letmein", "admin", "welcome", "monkey", "password1", "12345", "abc123", "football", "iloveyou", "sunshine", "123123", "1234567890", "qwerty123", "dragon", "1234567", "baseball", , "ranger", "hunter", "2000", "test", "soccer", "hockey", "killer"]
let result = document.getElementById("password-result")
let ssp = document.getElementById("SuperStrongPass")
let sp = document.getElementById("StrongPass")
let wp = document.getElementById("WeakPass")
let fp = document.getElementById("FunnyPass")



class Password{
  constructor(){
    console.log("Welcome to pass Generator")
  }
  generateSuperStrongPassword(){
    let letter1=specialChar[Math.floor(Math.random()*specialChar.length)]
    let letter2=lowerCase[Math.floor(Math.random()*lowerCase.length)]
    let letter3=specialChar[Math.floor(Math.random()*specialChar.length)]
    let letter4=upperCase[Math.floor(Math.random()*upperCase.length)]
    let letter5=specialChar[Math.floor(Math.random()*specialChar.length)]
    let letter6=numbers[Math.floor(Math.random()*numbers.length)]
    let letter7=specialChar[Math.floor(Math.random()*specialChar.length)]
    let letter8=numbers[Math.floor(Math.random()*numbers.length)]
    let letter9=lowerCase[Math.floor(Math.random()*lowerCase.length)]
    let letter10=upperCase[Math.floor(Math.random()*upperCase.length)]
    let letter11=specialChar[Math.floor(Math.random()*specialChar.length)]
    let letter12=lowerCase[Math.floor(Math.random()*lowerCase.length)]
    let letter13=specialChar[Math.floor(Math.random()*specialChar.length)]
    let letter14=upperCase[Math.floor(Math.random()*upperCase.length)]
    let letter15=specialChar[Math.floor(Math.random()*specialChar.length)]
    let letter16=numbers[Math.floor(Math.random()*numbers.length)]
    let letter17=specialChar[Math.floor(Math.random()*specialChar.length)]
    let letter18=numbers[Math.floor(Math.random()*numbers.length)]
    let letter19=lowerCase[Math.floor(Math.random()*lowerCase.length)]
    let letter20=upperCase[Math.floor(Math.random()*upperCase.length)]

    let superStrongPass=`Your Super Strong Password is : ${letter1}${letter2}${letter3}${letter4}${letter5}${letter5}${letter6}${letter7}${letter8}${letter9}${letter10}${letter11}${letter12}${letter13}${letter14}${letter15}${letter16}${letter17}${letter18}${letter19}${letter20}`
    this.Password=superStrongPass
    result.innerHTML=superStrongPass
    console.log("superStrong pass generated")
  }

  generateStrondPass(){
    let letter1=specialChar[Math.floor(Math.random()*specialChar.length)]
    let letter2=lowerCase[Math.floor(Math.random()*lowerCase.length)]
    let letter3=specialChar[Math.floor(Math.random()*specialChar.length)]
    let letter4=upperCase[Math.floor(Math.random()*upperCase.length)]
    let letter5=specialChar[Math.floor(Math.random()*specialChar.length)]
    let letter6=numbers[Math.floor(Math.random()*numbers.length)]
    let letter7=specialChar[Math.floor(Math.random()*specialChar.length)]
    let letter8=numbers[Math.floor(Math.random()*numbers.length)]
    let letter9=lowerCase[Math.floor(Math.random()*lowerCase.length)]
    let letter10=upperCase[Math.floor(Math.random()*upperCase.length)] 
    let strongPass=`Your Super Strong Password is : ${letter1}${letter2}${letter3}${letter4}${letter5}${letter5}${letter6}${letter7}${letter8}${letter9}${letter10}`
    this.Password=strongPass
    result.innerHTML=strongPass
    console.log("strong pass generated")
  }

  generateWeakPassword(){
    let letter1=lowerCase[Math.floor(Math.random()*lowerCase.length)]
    let letter2=upperCase[Math.floor(Math.random()*upperCase.length)]
    let letter3=numbers[Math.floor(Math.random()*numbers.length)]
    let letter4=numbers[Math.floor(Math.random()*numbers.length)]
   let letter5=lowerCase[Math.floor(Math.random()*lowerCase.length)]
    let letter6=upperCase[Math.floor(Math.random()*upperCase.length)] 
    let weakPass=`Your Super Strong Password is : ${letter1}${letter2}${letter3}${letter4}${letter5}${letter5}${letter6}`
    this.Password=weakPass
    result.innerHTML=weakPass
    console.log("weak pass generated")
  }

  generateFunnyPassword(){
    let FunnyPassword = "Your Funny password is :  " + funnyPass[Math.floor(Math.random() * (funnyPass.length - 1))]
    this.Password = FunnyPassword
    result.innerHTML = FunnyPassword
    console.log("funny pass generated")
  }
}

let generatePassword= new Password()

ssp.onclick=()=>{
    generatePassword.generateSuperStrongPassword()
}
sp.onclick=()=>{
    generatePassword.generateStrondPass()
}
wp.onclick=()=>{
    generatePassword.generateWeakPassword()
}
fp.onclick=()=>{
    generatePassword.generateFunnyPassword()
}

