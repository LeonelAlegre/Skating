$(document).ready(function(){
	var info = { 
		padre: $('#info'),
		numeroSlides: $('#info').children('.slide').length,
		posicion: 1
	}
	
	info.padre.children('.slide').first().css({
		'left': 0,
	});
	
	$('#info').children('.slide').each(function(){
		$('#botones').append('<span>');
	});
	//agrega la clase "active" al primer elemento
	$('#botones').children('span').first().addClass('active');
	
	//info
	//boton siguiente
	$('#boton_next').on('click', function(e){
		e.preventDefault();
		//se ejecuta desde la primera posicion hasta la ante-ultima
		if(info.posicion < info.numeroSlides){
			//clases no activadas a la derecha
			info.padre.children().not('.active').css({
				'left' : '100%'
			});
			//quita la clase active y se la agrega al siguiente elemento y lo anima
			$('#informacion .active').removeClass('active').next().addClass('active').animate({
				'left' : '0'
			});	
			//anima la clase activada a la izquierda
			$('#informacion .active').prev().animate({
				'left' : '-100%'
			});
			//suma uno a la posicion
			info.posicion = info.posicion + 1;
			
		} else{ //se ejecuta en la ultima posicion
			//clase activada a la izquierda
			$('#informacion .active').animate({
				'left' : '-100%'
			});
			//clases no activadas a la derecha
			info.padre.children().not('.active').css({
				'left' : '100%'
			});
			//quita la clase active al elemento
			$('#informacion .active').removeClass('active');	
			//agrega la clase active al primer elemento
			info.padre.children('.slide').first().addClass('active').animate({
				'left' : 0
			});
			//quita la clase active y se la agrega al primer elemento
			$('#botones').children('span').removeClass('active').first().addClass('active');
			//reinicia la posicion
			info.posicion = 1;
		}
		
	});
	
	//boton anterior
	$('#boton_prev').on('click', function(e){
		e.preventDefault();
        //se ejecuta desde la segunda posicion hasta la ultima
		if(info.posicion > 1){
			//clases no activadas a la izquierda
			info.padre.children().not('.active').css({
				'left' : '-100%'
			});
            //anima la clase activada a la derecha
			$('#informacion .active').animate({
				'left' : '100%'
			});
			//quita la clase active y se la agrega al anterior elemento y lo anima
			$('#informacion .active').removeClass('active').prev().addClass('active').animate({
				'left' : 0
			});
			//resta uno a la posicion
			info.posicion = info.posicion -1;
		} else{ //se ejecuta en la primera posicion
            //elementos no activadas se posicionan a la izquierda
			info.padre.children().not('.active').css({
				'left' : '-100%'
			});
			//elemento activado se anima a la derecha
			$('#informacion .active').animate({
				'left' : '100%'
			});
			//quita la clase active  y se la agrega al ultimo elemento y lo anima
			$('#informacion .active').removeClass('active');
			info.padre.children().last().addClass('active').animate({
				'left' : 0
			});
			//quita la clase active y se la agrega al ultimo elemento
			$('#botones').children('span').removeClass('active').last().addClass('active');
			//cambia la posicion por la ultima
			info.posicion = info.numeroSlides;
		}
	});
});