var slds = 0;
var sldc = 0;
$(document).ready(function(){

	//contactform
	$('#contactform').submit(function(){
		var campos = ['nombre', 'telefono', 'correo_electronico', 'asunto', 'mensaje'];
		for(i=0; i<campos.length; i++){ window[campos[i]] = $('#'+campos[i]).val().trim(); }
		$.post('php/smail.php', {no:nombre, te:telefono, co:correo_electronico, as:asunto, me:mensaje},function(data){
			alert(data);
		});
		return false;
	});
	


	//fancybox
	$('#portafolio article a').fancybox({
        padding : 0,
        openEffect: 'elastic'
    });



    //servicios
    $('#descripciones table tbody tr').hide();
    $('#servicios ul li a').click(function(){
    	$('#servicios ul li .active').removeClass('active');
	    $(this).addClass('active');
    });
    
    $('#servicios ul li:first-child').children('a').addClass('active');
    productnav("#s_1");

});

function productnav(goto){
	
	if(goto==null){
		goto = document.location.hash;
	}
	goto = goto.replace('#','.');
	
	$('#descripciones table tbody tr').hide(function(){
		$(goto).show();	
	});

	$('.fabricacion').hide(function(){
		var goto2 = goto.replace('.s','#f');
		$(goto2).show();
		//alert(goto2);
	});
	
}


