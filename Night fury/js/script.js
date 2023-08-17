(function($) {              

	/*var galleries = $('.gallery-set'),
		menuLinks = $('.controls a');

	// skryjeme vsetky galerie, okrem prvej
	galleries.not(':first').hide();

	// po kliknuti na link ideme robit veci
	menuLinks.on('click', function(event) {

		// ked sa pozrieme do HTML, vidime, ze hodnota href linku sa rovna idcku prislusnej sekcie
		var id = $(this).attr('href');

		// skryjeme galerie
		galleries.hide();

		// kedze href je rovny idcku galeriu, mozeme ju podla neho vytiahnut a nechat zobrazit
		// toto je to iste, ako keby sme napisali napr. $('#video').fadeIn();
		$(id).fadeIn();

		// klasika
		event.preventDefault();

	});*/

// najdeme vs. galerie
var galleries = $('.gallery-set');

// skryjeme
galleries.hide();

// najdeme link, ktory je selected
var selected = $('.controls').find('.selected'),
selectedGallery;

// funkcia na zobrazenie selectnutej galerie
function showGallery( selected ) {

if ( selected.length ) {
var id = selected.find('a').attr('href');
selectedGallery = $(id);

}

// ak galeria neexistuje, zobrazime PRVY, inak zobrazime existujuc
var newGallery = selectedGallery. length ? selectedGallery : galleries.eq(0);
galleries.not( newGallery ).hide();
newGallery.show().addClass('fadeInRight');
}

	showGallery(selected);

	$('.controls a').on('click', function(event) {
		var li = $(this).parent();

		console. log( 'fadeIn' + li.data('from') );
		
		// novo-kliknutemu linku pridame class selected
		// a vsetkym surodencom odstranime, keby ho nahodou mali
		li.addClass('selected')
		li.siblings().removeClass('selected');
		
		// zobrazimu novu galeriu
		showGallery( li );
		
		// zamedzime defaulnemu spravaniu sa kliknuteho linku
		event.preventDefault();
		
	});

})(jQuery);
