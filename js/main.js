$(document).ready(function(){
	function scrollToAnchor(aid){
	    var aTag = $("a[name='"+ aid +"']");
	    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
	}

	$("#work-link").click(function() {
	   scrollToAnchor('work');
	});
	$("#about-link").click(function() {
	   scrollToAnchor('about');
	});
	$("#contact-link").click(function() {
	   scrollToAnchor('contact');
	});


	 $("*").find("a[href='"+window.location.href+"']").each(function(){
        $(this).addClass("active");
       
    })
    
function checkName(){
	var form = $('form');
   var nameWarning = $("<span>Please enter your full name</span>");
   var input = document.getElementsByTagName('form')[0].getElementsByTagName('input')[0].value;
   if(input.length < 2 || isNaN(input) == false){ 
   console.log('u suck');
   
   nameWarning.addClass('nameWarning');
   
   form.prepend(nameWarning);
   
   
   document.getElementsByTagName('form')[0].getElementsByTagName('input')[0].className += ' error';
}     
else{     
	console.log(nameWarning);
	$(document).detach(nameWarning);
	
	document.getElementsByTagName('form')[0].getElementsByTagName('input')[0].className = document.getElementsByTagName('form')[0].getElementsByTagName('input')[0].className.replace('error','')    } }


   document.getElementsByTagName('form')[0].getElementsByTagName('input')[0].onblur = checkName;


});
	