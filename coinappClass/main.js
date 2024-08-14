import "./scss/style.scss"

const form = document.querySelector("header form");
 // header içerisindeki form elementi yakala.
//  console.log(form); // her zamana kontrol amaçlı 

form.addEventListener("submit",(e)=>{
  e.preventDefault() //! forma ait defult olan davranışları iptal eder.
  // console.log("Form Submit oldu ! ");
  getInputVal()
  form.reset(); //input girildikten button submit edildikten sonra formu resetler


})

const getInputVal = () =>{
  const inputVal = document.querySelector("header form input").value      //dışarda yakalamalar boş string göndericek o yüzden scope içinde ve elementin kendisi olan value olarak çağırmak sağlıklı ve işlemi fonk. çağırıldığında yeniden yaptığı için içeride yazılır
  console.log(inputVal);


  //?input doldurmadan submit yapılmaması için
  if(!inputVal.trim()){ //trim metodu başta ve sonra boşluk varsa API istek atmasını engelle
    alert("input not blank!")
  }else{
    console.log("input doldurulmuş!");
  }

}