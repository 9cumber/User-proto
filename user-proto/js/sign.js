/*$(document).ready(function () {
    $('.forgot-pass').click(function(event) {
	$(".pr-wrap").toggleClass("show-pass-reset");
    }); 
    
    $('.pass-reset-submit').click(function(event) {
	$(".pr-wrap").removeClass("show-pass-reset");
    }); 
});*/


function check(){
    var flag = 0;
    if(document.loginform.field1.value == ""){
	flag = 1;
    }
    else if(document.loginform.field2.value == ""){
	flag = 1;
    }

    if(flag){
	window.alert('Eメールアドレス、またはパスワードが正しくありません');
	return false;
    }
    else{
	location.href="./index.html";
    }
}
