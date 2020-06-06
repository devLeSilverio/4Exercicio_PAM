var acertos=0;

$(document).on("click", '#responder1',function(){
function confirma(buttonIndex){
if(buttonIndex==2){
 navigator.notification.beep(1);
 acertos+=1;
}else{
 navigator.vibrate(5000);
 }
}
navigator.notification.confirm("Escolha o que achar correto!✅ Se vibrou,errou!",confirma,"Escolha",['Jair Bolsonaro','George Washingotn']);
});

$(document).on("click", '#responder2',function(){
function confirma(buttonIndex){
if(buttonIndex==2){
 navigator.notification.beep(1);
  acertos+=1;
}else{
 navigator.vibrate(5000);
 }
}
navigator.notification.confirm("Escolha o que achar correto!✅ Se vibrou,errou!",confirma,"Escolha",['Gripe','coronavírus SARS-CoV-2']);
});

$(document).on("click", '#responder3',function(){
function confirma(buttonIndex){
if(buttonIndex==2){
 navigator.notification.beep(1);
  acertos+=1;
}else{
 navigator.vibrate(5000);
 }
}
navigator.notification.confirm("Escolha o que achar correto!✅ Se vibrou,errou!",confirma,"Escolha",['Em torno de 30','Em torno de 50']);
});

$(document).on("click", '#acertos',function(){
navigator.notification.alert("Tu acertou::" +acertos,null,"Aviso","Ok");
});