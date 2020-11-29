// gneiss rock: lal bagh
// get out and get some ice cream: ibaco
// 

function decrypt(){
  try{
    var password = document.querySelector("#passwordInput").value.toLowerCase().replace(/ /g,"").replace(/-/g,"");
    var decrypted = CryptoJS.AES.decrypt(cipheredText,password)
    decrypted = decrypted.toString(CryptoJS.enc.Utf8);
    var obj = JSON.parse(decrypted);
    if(obj.validated){
      location.href = obj.link;
    }
  }
  catch(error){
    console.log(error);
    alert("Wrong Password");
  }
  document.querySelector("#passwordInput").value = "";
}


function encrypt(link,password){
  var text = JSON.stringify({validated:true,link:link})
  return CryptoJS.AES.encrypt(text,password).toString();
}
