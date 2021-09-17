/*jQuery(".node__content.field--name-field-ccomponent.field__item#paragraph--1").hover(
	function() {
		jQuery(this).children('.field--name-field-profile').addClass("open-toggle");
	}, function() {
		jQuery(this).children('.field--name-field-profile').removeClass("open-toggle");
	}
);*/

/*jQuery(".node__content.field--name-field-ccomponent.field__item#paragraph--1.field--name-field-title, .node__content.field--name-field-ccomponent.field__item#paragraph--1.field--name-field-image").click(function() {
	jQuery( ".node__content.field--name-field-ccomponent.field__item#paragraph--1.field--name-field-profile" ).toggle( "slow", function() {
	  // Animation complete.
	});
  });*/

  jQuery(document).ready(function(){
	jQuery(".node__content .field--name-field-ccomponent .field__item#paragraph--1").click(function(){

	  var target = jQuery(this).parent().children(".field--name-field-profile");
	  jQuery(target).slideToggle();
	});
  });

  function accordion_button() {
	var rich_text = document.getElementById("rich-text");
	if (rich_text.classList.contains("open-toggle")) {
	  rich_text.classList.remove("open-toggle");
	} else {
	  rich_text.classList.add("open-toggle");
	}
}
document.getElementById("accordion-button").addEventListener('click', accordion_button);