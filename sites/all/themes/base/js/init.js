Drupal.behaviors.init = {
	attach: function (context, settings) {
		

		var win = jQuery(window);
		var doc = jQuery(document);
		var head_in = jQuery('#header-inner');
		var logo = jQuery('#logo');
		var win_w = win.width();
		var win_h = win.height();
		var windowScroll = win.scrollTop();



		win.resize(function(){
			windowResized();
		});

		jQuery(window).scroll(function(){
			
			onScroll();
		});

		function onScroll(){
			windowScroll = win.scrollTop();
			if(windowScroll > 80){
				windowScroll = 80;
			}

			if(!jQuery('body').hasClass('mobile')){
				setNavSize();
			}
		}

		function setNavSize(){
			
			var nav_h = jQuery('#nav').height();
			
			jQuery('#nav').css('height', 150 - windowScroll);
			jQuery('#block-system-main-menu li a').css('padding-bottom', 60 - windowScroll / 2.25);
		}


		// MOBILE STUFF
		jQuery('.menu-toggle').click(function(){
			jQuery('#nav').stop(false, true).slideToggle();
		});

		


		function windowResized(){

			
			var win_w = jQuery(window).width();
			var win_h = jQuery(window).height();

			var targ_w = 1350 / jQuery('#main').width();
			var targ_h = 900 / targ_w;
			
			
			
			if(win_w < 700){
				jQuery('body').addClass('mobile');
			}else{
				jQuery('body').removeClass('mobile');
			}

			if(!jQuery('body').hasClass('mobile')){
				jQuery('#featured-projects, .images-holder').css('height', targ_h);
			}

			//console.log(win_w);
		}

		windowResized();
		if(!jQuery('body').hasClass('mobile')){
			onScroll();
		}


		// MASONRY!!!
		//===================================
		var masonry_container = jQuery('.node-type-intro-gallery .images');
		
		masonry_container.imagesLoaded(function(){
			var mason = masonry_container.masonry({
			  itemSelector: '.field-name-field-project-images'
			}).masonry();
		});

		var masonry_container_2 = jQuery('.page-press .view-display-id-block_1');
		
		masonry_container_2.imagesLoaded(function(){
			var mason = masonry_container_2.masonry({
			  itemSelector: '.press-teaser'
			}).masonry();
		});


	}
}


