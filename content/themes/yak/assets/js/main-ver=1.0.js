(function($) {

	"use strict";

	var mainMenu = $( '#mpcth_main_menu' );
	var subMenu = $( 'ul li', mainMenu);
	var subMenuFirstChild = $( '.sub-menu li:first-child, .children li:first-child' );
	var subMenuLastChild = $( '.sub-menu li:last-child, .children li:last-child' );
	var topSearchForm = $( '.mpcth-search-form' );

	draw_triangle();
	various_triangles();
	sidebar_top_position();
	footer_on_bottom();
	home_triangles();
	full_width_triangles();
	accordition_triangles();

	$( window ).load(function() {
		setTimeout(function() {
			masonry_triangles()
		}, 500 );
		$( '#mpcth_blog_content, #mpcth_portfolio_content, .single .mpcth-article-wrapper, .mpcth-single-page .mpcth-article-wrapper' ).animate({
			'top': '0',
			'opacity': '1'
		});
	});

	$( '.mpcth-search' ).blur();
	$( '.mpc-sc-dropcaps' ).parent().css( 'margin-bottom', '2em' );

	$( 'body' ).on( 'click', '.mfp-arrow ', function(event) {
		event.stopPropagation();
	});

/* ---------------------------------------------------------------- */
/* Contact form - on blur effect
/* ---------------------------------------------------------------- */
	var $contact_form = $('.wpcf7');

	$contact_form.find('span[data-default] input, span[data-default] textarea').each(function() {
		var _this = $(this),
			_default_value = _this.parent('span').parent('span').attr('data-default');

		_this.on( 'focus', function() {
			if ( _this.val() == _default_value ) {
				_this.val('');
			}
		});
		_this.on('blur', function() {
			if ( _this.val() == '' ) {
				_this.val( _default_value );
			}
		});
	});

/* ---------------------------------------------------------------- */
/* Mobile menu - animation
/* ---------------------------------------------------------------- */
	$( '.mpcth-menu-mobile li' ).hover(function(){
		$( ' > ul.sub-menu' , this ).stop( true, true ).delay(200).slideDown(400);
	}, function(){
		$( '> ul.sub-menu' , this ).stop( true, true ).delay(200).slideUp(400);
	});

/* ---------------------------------------------------------------- */
/* Touch menu
 /* ---------------------------------------------------------------- */
	$( 'nav[role="navigation"] li a' ).on( 'click', function( e ) {
		var $this = $( this );

		if( $this.siblings( 'ul' ).is( '.sub-menu' ) && ('ontouchstart' in window) ) {
			if ( $this.hasClass( 'taped' ) ) {
				$this.removeClass( 'taped' );
				$this.find( '.overlay' ).remove();
				$( '.mpcth-menu-mobile > ul.sub-menu' ).stop(true,true).slideUp(400);
				$this.siblings( 'ul' ).stop(true,true).delay(200).slideUp(400);
			} else {
				$this.addClass( 'taped' );
				$this.append( '<div class="overlay"></div>' );
				$( ' .mpcth-menu-mobile > ul.sub-menu' ).stop(true,true).slideDown(400);
				$this.siblings( 'ul' ).stop(true,true).delay(200).slideDown(400);

				e.preventDefault();
			}
		}
	});

	$( 'nav[role="navigation"] li a .overlay' ).on( 'click touchmove touchstart touchend tap', function() {    alert( 'wtf wtf' );
		$( 'nav[role="navigation"] li a' ).find( '.overlay' ).remove();
		$( 'nav[role="navigation"] li a').removeClass( 'taped' );
		$( 'nav[role="navigation"] li a > ul.sub-menu' ).stop( true,true ).slideUp(400);
	} );

/* ---------------------------------------------------------------- */
/* Accondition - triangles
/* ---------------------------------------------------------------- */
	function accordition_triangles() {
		$( '.mpc-sh-accordion-title .mpcth-accord-triangle' ).each(function() {
			var _accord_triangle = $( this ),
				_font_size = parseFloat($( this ).parent().css('font-size')),
				_accord_triangle_parent_height = $( this ).parent().height();

			_accord_triangle.css({
				'border-bottom-width' : _accord_triangle_parent_height + ( _font_size * 1.1 )
			})
		});
	}

/* ---------------------------------------------------------------- */
/* Narrow Blog - triangles
/* ---------------------------------------------------------------- */
	function masonry_triangles() {
		$( '#mpcth-masonary-wrapper .mpcth-article-wrapper' ).each(function() {
			var _masonry_item_side = $( this );

			if( _masonry_item_side.css( 'left' ) == "0px" ) {
					_masonry_item_side.addClass( 'mpcth-masonry-left' );
				}
			else {
					_masonry_item_side.removeClass( 'mpcth-masonry-left' );
				}
		})
	}
/* ---------------------------------------------------------------- */
/* Blockquote lines
/* ---------------------------------------------------------------- */
	var blockquote = $( 'blockquote' );
	if ( blockquote.length ) {
		blockquote.append( '<span class="mpcth-blockquote-border-left"></span><span class="mpcth-blockquote-border-right"></span><span class="mpcth-blockquote-border-top"></span><span class="mpcth-blockquote-border-bottom"></span>' );
	}

/* ---------------------------------------------------------------- */
/* Footer triangles
/* ---------------------------------------------------------------- */
	function draw_triangle() {
		var _windowSize = $(window).width(),
			_socialIconsWrapperWidth = $( '.mpcth-social-icons-wrapper' ).width(),
			_mainMenuMaxWidth = _windowSize - _socialIconsWrapperWidth - 100;

		mainMenu.css( 'max-width', _mainMenuMaxWidth);

		$( '.mpcth-footer-top' ).css({
			'border-right-width' : _windowSize
		});
		$( '.mpcth-footer-left-side' ).css({
			'border-left-width' : ( _windowSize * 0.833 ) // footer left triangle - (0.833) maintains appropriate slant
		});
		$( '.mpcth-footer-right-side' ).css({
			'border-right-width' : _windowSize * 0.875 // footer right triangle - (0.875) maintains appropriate slant
		});

	}

/* ---------------------------------------------------------------- */
/* Triangles - logo, submenu items
/* ---------------------------------------------------------------- */
	function various_triangles() {
		subMenuFirstChild.each(function() {
			$( this ).append( "<span class='mpcth-triangle-top'></span>" )
		});

		subMenuLastChild.each(function() {
			$( this ).append( "<span class='mpcth-triangle-bottom'></span>" )
		});

		var _mpcthLogo = $( '.mpcth-logo' ),
			_mpcthLogoSize = $( '.mpcth-logo' ).width() * 1.5 + 60, // helps with correct triangle slant under logo
			_mpcthLogoImageHeight = $( '.mpcth-logo img' ).height();

		$( 'span', _mpcthLogo).css({
			'border-left-width' : _mpcthLogoSize
		});

		if ( $( 'img', _mpcthLogo).length > '0' ) {
			$( 'span', _mpcthLogo).css({
				'border-left-width' : _mpcthLogoSize + 40, // triangle under logo - (40) value for correct slant
				'border-bottom-width' : _mpcthLogoImageHeight * 1.8 + 20 // triangle under logo - (*1.8 + 20) value for correct slant
			});
		}
	}

/* ---------------------------------------------------------------- */
/* Triangles - full width page, blog wide
/* ---------------------------------------------------------------- */
	function full_width_triangles() {
		var _windowWidth = $(window).width();

		if ( _windowWidth < '1200') {
			$( '.mpcth-single-page .mpcth-article-top' ).css({
			'border-right-width' : _windowWidth
			});

			$( '.mpcth-single-page .mpcth-article-bottom' ).css({
				'border-left-width' : _windowWidth
			});
		}

		else {
			$( '.mpcth-single-page .mpcth-article-top' ).css({
			'border-right-width' : '1200px'
			});

			$( '.mpcth-single-page .mpcth-article-bottom' ).css({
				'border-left-width' : '1200px'
			});
		}


		$( '.mpcth-full-width .mpcth-article-top' ).css({
			'border-right-width' : _windowWidth
		});

		$( '.mpcth-full-width .mpcth-article-bottom' ).css({
			'border-left-width' : _windowWidth
		});
	}

/* ---------------------------------------------------------------- */
/* Triangles - home page
/* ---------------------------------------------------------------- */
	function home_triangles() {
		var _windowWidth = $(window).width(),
			_homeWidgetHeight = $( '.mpcth-home-widget' ).height(),
			_homeWideTriangle = $( '.mpcth-home-wide-triangle' );

		_homeWideTriangle.css({
			'border-right-width' : _windowWidth + ( .05 * _windowWidth ),
			'border-top-width' : _homeWidgetHeight + 90 // home page triangle - (90) helps with correct slant
		});
	}

/* ---------------------------------------------------------------- */
/* Hover effect on sub-menu items
/* ---------------------------------------------------------------- */
	subMenu.hover(function() {
		// menu position

		$( '> ul', this ).stop( true, true ).fadeIn( 300 );

		var _topBorder = $( 'ul li', this ).width(),
			_bottomBorder = $( 'ul li', this ).width();

		$( 'ul .mpcth-triangle-top', this ).css( 'border-right-width', _topBorder );
		$( 'ul .mpcth-triangle-bottom', this ).css( 'border-left-width', _bottomBorder );

		var _posSubMenu =  $( 'ul', this ),
			_widthSumMenu = $( '> ul', this ).width(),
			_winWidth = $(window).width(),
			_offset = _posSubMenu.offset(),
			_posSubMenuTarget = '';

		if ( _posSubMenu.children("li").length ) {
			_posSubMenuTarget = _winWidth - ( _offset.left + _widthSumMenu ) ;
		}

		if( _posSubMenuTarget < 20 ) {
				var _targetOffset = -_posSubMenuTarget + 30 ;

				$( '> ul', this ).css({
					left: -_targetOffset
						}, 100 )
			}
		else if( 20 < _posSubMenuTarget < 100 ) {
			var _this = $( '> ul', this );

			$( 'ul', _this ).css({
				left: 'auto',
				right: '100%'
				})
			}

		}, function() {
				$( '> ul', this ).stop( true, true ).fadeOut( 100 );
		});


//	counting sidebar top position
	function sidebar_top_position() {
		$( '#mpcth_sidebar' ).css( 'top', $( '#header_main' ).height());
	}

//	forces the footer to be at the bottom
	function footer_on_bottom() {
		$( '#mpcth_main_content' ).css( 'padding-bottom', $( 'section#footer' ).height() + 120 ); // (120) - helps to maintain a safe distance from footer
	}

	var $window = $( window ),
		$body = $( 'body' ),
		is_mobile = false;

/* ---------------------------------------------------------------- */
/* Smart resize
/* ---------------------------------------------------------------- */
	var resize_timer;

	$window.on( 'resize', function() {
		clearTimeout( resize_timer );
		resize_timer = setTimeout( function() {
			$window.trigger( 'smart_resize' );
		}, 250 );
	});

	$window.on( 'smart_resize', function() {
		draw_triangle();
		sidebar_top_position();
		footer_on_bottom();
		home_triangles();
		full_width_triangles();
		masonry_triangles();
		portfolio_content_height();
		accordition_triangles();
	});

/* ---------------------------------------------------------------- */
/* Mobile check
/* ---------------------------------------------------------------- */
	if ( $window.width() <= 768 ) is_mobile = true;
	if( $window.width() <= 1024 ) $( 'body').addClass( 'mobile' );
	else $( 'body').removeClass( 'mobile' );

	$window.on( 'resize', function() {
		if ( $window.width() <= 768 ) is_mobile = true;
		else is_mobile = false;

		if( $window.width() <= 1024 ) $( 'body').addClass( 'mobile' );
		else $( 'body').removeClass( 'mobile' );
	} );

/* ---------------------------------------------------------------- */
/* Load more
/* ---------------------------------------------------------------- */
( function() {
	function set_infinite_scroll_trigger_target() {
		$load_more_target.children( '.mpcth-article-wrapper' ).last().waypoint( {
			handler: function() {
				$load_more.trigger( 'click' );
			},
			offset: '200%',
			triggerOnce: true
		} );
	}
	function ajax_load_more( event ) {
		var target = "";
		if($( '#mpcth_main_content .mpcth-article-wrapper' ).length == 0 ) {
			target = " #mpcth_portfolio_content .mpc_portfolio";
		}
		else {
			target = " #mpcth_main_content .mpcth-article-wrapper";
		}

		if ( ! is_loading ) {
			$load_more.addClass( 'mpcth-disabled' );
			is_loading = true;

				$load_more_container.load( pages_next_link + target, function() {
				var $loaded_posts = $load_more_container.children();

				$load_more_container.imagesLoaded( function() {
					$loaded_posts.appendTo( $load_more_target );

					if ( $loaded_posts.find( '.twitter-tweet' ).length ) {
						$loaded_posts.find( '.twitter-tweet' ).after( '<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>' );
						$window.trigger( 'iframes_check' );
					}

					$load_more.removeClass( 'mpcth-disabled' );
					is_loading = false;

					if ( $portfolio.length ) {
						$( '#footer' ).prepend( $pagination_wrap );
						$portfolio.isotope( 'appended', $loaded_posts ).isotope({ sortBy: 'load_more' });
					}

					$window.trigger( 'init_lightbox', [ $load_more_target ] );
					$window.trigger( 'init_slick', [ $load_more_target ] );
					masonry_triangles();

					if( ++pages_current < pages_total ) {
						if( pages_next_link.indexOf( 'page/' ) != -1 )
							pages_next_link = pages_next_link.replace( /page\/[0-9]+\//, 'page/' + ( pages_current + 1 ) + '/' );
						else
							pages_next_link = pages_next_link.replace( /paged=[0-9]+/, 'paged=' + ( pages_current + 1 ) );

						if ( is_infinite_scroll ) set_infinite_scroll_trigger_target();
					}
					else {
							$load_more.remove();
					}
				} );
			} );

		}
		event.preventDefault();
	}

	var $load_more = $( '#mpcth_load_more' ),
		$load_more_container = $( '#mpcth_load_more_container' ),
		$pagination_wrap = $( '.mpcth-post-pagination' );

		if($( '#mpcth_main_content' ).is( '.mpcth-blog-page' )) {
			var $load_more_target = $( '#mpcth_blog_content' );
		}

		else if($( '#mpcth_main_content' ).is( '.mpcth-portfolio-page' )) {
			var $load_more_target = $( '#mpcth_portfolio_content' );
		}

		else {
			var $load_more_target = $( '#mpcth-masonary-wrapper' );
		}

	if ( $load_more.length ) {
		var pages_current = 1,
			pages_total = parseInt( $load_more.attr( 'data-total' ) ),
			pages_next_link = $load_more.attr( 'href' ),
			is_loading = false,
			is_infinite_scroll = $load_more.is( '.mpcth-infinite-scroll' );

		$load_more.on( 'click', ajax_load_more );

		$window.on( 'load', function() {
			if ( is_infinite_scroll ) set_infinite_scroll_trigger_target();
		} );
	}
} )();

/* ---------------------------------------------------------------- */
/* Mobile menu
/* ---------------------------------------------------------------- */
( function() {
	function mobile_menu_close() {
		$mobile_menu_toggle.click();
	}
	function mobile_menu_prevent_close( event ) {

		event.stopPropagation();
	}

	var $mobile_menu = $( '#mpcth_nav_mobile' ),
		$mobile_dim = $( '#mpcth_mobile_dim' ),
		$mobile_menu_toggle = $( '#mpcth_menu_mobile_toggle' ),
		$mobile_menu_toggle_wrap = $mobile_menu_toggle.parent(),
		is_mobile_menu_active = false;

	$mobile_menu_toggle.on( 'click', function( event ) {
		$mobile_menu.toggleClass( 'mpcth-active' );
		$mobile_dim.toggleClass( 'mpcth-active' );
		is_mobile_menu_active = ! is_mobile_menu_active;

		if ( is_mobile_menu_active ) {
			$mobile_menu_toggle.on( 'mousedown touchstart', mobile_menu_prevent_close );
			$mobile_menu.on( 'mousedown touchstart', mobile_menu_prevent_close );
			$window.on( 'mousedown touchstart', mobile_menu_close );
		} else {
			$mobile_menu_toggle.off( 'mousedown touchstart', mobile_menu_prevent_close );
			$mobile_menu.off( 'mousedown touchstart', mobile_menu_prevent_close );
			$window.off( 'mousedown touchstart', mobile_menu_close );
		}

		event.preventDefault();
	} );

	$window.on( 'smart_resize', function() {
		if ( ! is_mobile && is_mobile_menu_active ) $mobile_menu_toggle.trigger( 'click' );
	} );

	$window.on( 'scroll', function() {
		if ( $window.scrollTop() > 0 ) {
			$mobile_menu_toggle_wrap.addClass( 'mpcth-scrolled' );
		} else {
			$mobile_menu_toggle_wrap.removeClass( 'mpcth-scrolled' );
		}
	} );

	$window.on( 'load', function() {
		$mobile_menu_toggle.hide();
		$mobile_menu_toggle.show();
	} );
} )();


/* ---------------------------------------------------------------- */
/* Lightbox
/* ---------------------------------------------------------------- */
( function() {
	function init_lightbox( event, $target ) {

		$target.find( '.mpcth-lightbox, .mpc-sc-lightbox' ).magnificPopup( {
			type: 'image',
			key: 'mpcth-popup',
			removalDelay: 300,
			mainClass: 'mfp-fade',
			fixedContentPos: false,
			image: {
				verticalFit: true
			},
			gallery: {
				enabled: true
			},
			callbacks: {
				open: function() {
					$('body').addClass('no-scroll');
				},
				close: function() {
					$('body').removeClass('no-scroll');
				}
			}
		} );

		window.blockMenuHeaderScroll = false;
		$(window).on('touchstart', function(e) {
			if ($(e.target).closest('.mfp-fade').length == 1) {
				window.blockMenuHeaderScroll = true;
			}
		});
		$(window).on('touchend', function() {
			window.blockMenuHeaderScroll = false;
		});
		$(window).on('touchmove', function(e) {
			if (window.blockMenuHeaderScroll) {
				e.preventDefault();
			}
		});
	}

	init_lightbox( null, $( '#mpcth_main_content' ) );

	$window.on( 'init_lightbox', init_lightbox );
} )();


/* ---------------------------------------------------------------- */
/* Footer
/* ---------------------------------------------------------------- */
( function() {
	function update_values() {
		if ( is_mobile ) {
			$main.css( 'margin-bottom', '' );
			return;
		}

		footer_height = $footer.outerHeight();
		$main.css( 'margin-bottom', footer_height );
	}

	var $footer = $( '#mpcth_footer.mpcth-footer-fixed' );

	if ( $footer.length ) {
		var $main = $( '#mpcth_main' ),
			footer_height = 0;

		$main.addClass( 'mpcth-above-footer' );

		update_values();
		$window.on( 'smart_resize load', update_values );
	}
} )();

/* ---------------------------------------------------------------- */
/* Waypoint
/* ---------------------------------------------------------------- */
	$( '.mpcth-waypoint' ).waypoint( function() {
		$( this ).addClass( 'mpcth-waypoint-triggered' ).trigger( 'mpc_waypoint' );
	}, { offset: '85%' } );

/* ---------------------------------------------------------------- */
/* Slick slider
/* ---------------------------------------------------------------- */
( function() {
	function init_slick( event, $target ) {
		$target.find( '.mpcth-slider' ).each( function() {
			var $slider = $( this ),
				autoplay_delay = parseInt( $slider.attr( 'data-delay' ) );
				autoplay_delay = isNaN( autoplay_delay ) ? 0 : autoplay_delay;

			$slider.slick( {
				centerMode: true,
				centerPadding: 0,
				slidesToShow: 1,
				autoplay: autoplay_delay > 0 ? true : false,
				autoplaySpeed: autoplay_delay,
				prevArrow: '<span class="slick-prev" style="display: block"></span>',
				nextArrow: '<span class="slick-next" style="display: block"></span>'
			} );
		} );

		var touch_y = 0;
		$target.find( '.mpcth-slider' ).on( 'touchstart' , function( e ){
			e.preventDefault();
			var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];

			touch_y = touch.pageY;
		} );
		$target.find( '.mpcth-slider' ).on( 'touchend' , function( e ){
			e.preventDefault();
			var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0],
				touch_diff = touch.pageY - touch_y;

			if( touch_diff >= 30 || touch_diff <= -30) {
				$( 'body' ).animate( { 'scrollTop' : $( 'body').scrollTop() - touch_diff * 1.5 }, 300 );
			}
		} );

		$target.find( '.slick-next, .slick-prev').removeAttr( 'style' );
	}

	init_slick( null, $( '#mpcth_blog_content, #mpcth_portfolio_content, .mpcth-single-post, .mpcth-blog, .mpcth-home' ) );

	$window.on( 'init_slick', init_slick );

} )();

/* ---------------------------------------------------------------- */
/* Portfolio filters
/* ---------------------------------------------------------------- */
	var $portfolio = $( '.mpcth-portfolio-page #mpcth_portfolio_content, #mpcth-masonary-wrapper, .mpcth-blog-wide #mpcth_blog_content' ),
		$filters_list = $( '#mpcth_filters' ),
		is_portfolio_empty = ! ! $portfolio.find( '.mpcth-portfolio-not-found' ).length;

	$filters_list.on( 'click', 'a', function( event ) {
		var $this = $( this );

		$portfolio.isotope( { filter: $this.attr( 'data-filter' ) } );
		$( 'a', $filters_list).removeClass( 'portfolio-active-category' );
		$this.toggleClass( 'portfolio-active-category' );

		event.preventDefault();
	} );

	// Clone first portfolio image to filters list
	$window.on( 'load', function() {
		if ( is_portfolio_empty ) return;

		$portfolio.isotope( {
			itemSelector: '.mpcth-portfolio, .mpcth-article-wrapper ',
			stamp: '.mpcth-filters-wrap',
			getSortData: {
				load_more: function ( item ) {
					if( $( item ).hasClass( 'mpcth-pagination-wrap' ) )
						 return 2;
					return 1;
				}
			}
		} );

		portfolio_content_height();

	});

/* ---------------------------------------------------------------- */
/* Portfolio content height
/* ---------------------------------------------------------------- */
	function portfolio_content_height() {
		var portHeightGal = $( 'body.mpcth-portfolio-single .slick-active img' ).height();

		$( 'body.mpcth-portfolio-single  .mpcth-portfolio-content' ).css({
			'height' : portHeightGal - 35
		});
		$( 'body.mpcth-portfolio-single .format-gallery .mpcth-post-content' ).css({
			'height' : portHeightGal + 20
		});
		$( 'body.mpcth-portfolio-single  .mpcth-portfolio-content .mpcth-portfolio-main-content' ).css({
			'height' : portHeightGal - 70
		});

		var portHeightThumb = $( 'body.mpcth-portfolio-single .mpcth-post-thumbnail' ).height();
		$( 'body.mpcth-portfolio-single .has-post-thumbnail .mpcth-portfolio-content' ).css({
				'height' : portHeightThumb - 35
		});
		$( 'body.mpcth-portfolio-single  .has-post-thumbnail .mpcth-portfolio-main-content' ).css({
			'height' : portHeightThumb - 70
		})
	}

/* ---------------------------------------------------------------- */
/* Search form
/* ---------------------------------------------------------------- */
( function() {

	$( 'input', topSearchForm).focus(function() {
		$( 'span', topSearchForm).addClass( 'mpcth-input-focus' );
	});

	$( 'input', topSearchForm).blur(function() {
		$( 'span', topSearchForm).removeClass( 'mpcth-input-focus' );
	});

	function search_form_close() {
		$search_toggle.click();
	}

	function search_form_prevent_close( event ) {
		event.stopPropagation();
	}

	function overlay() {
		var _overlay = $( '#mpcth_overlay' );
		_overlay.fadeIn();
		$( '#searchform input' ).fadeIn();

		_overlay.click(function() {
			$( 'body' ).removeClass( 'mpcth-overlay-active' );
		})
	}

	var $search_toggle = $( '#mpcth_search_toggle' ),
		$seach_form_holder = $( '#mpcth_seach_form_holder' ),
		is_search_form_active = false;

	$search_toggle.on( 'click', function( event ) {
		$( 'body' ).toggleClass( 'mpcth-overlay-active' );
		overlay();

		var _windowOffset= $(window).scrollTop(),
			_windowHeight= $(window).height(),
			_search_field_position = ( _windowHeight/2  + _windowOffset ) - 130;

		$( '#searchform' ).css( 'top', _search_field_position);

		if ( is_search_form_active ) {
			$search_toggle.on( 'mousedown touchstart', search_form_prevent_close );
			$seach_form_holder.on( 'mousedown touchstart', search_form_prevent_close );
			$window.on( 'mousedown touchstart', search_form_close );
		} else {
			$search_toggle.off( 'mousedown touchstart', search_form_prevent_close );
			$seach_form_holder.off( 'mousedown touchstart', search_form_prevent_close );
			$window.off( 'mousedown touchstart', search_form_close );
		}

		event.preventDefault();
	} );

	$window.on( 'smart_resize', function() {
		if ( is_mobile && is_search_form_active ) $search_toggle.trigger( 'click' );
	} );
} )();

/* ---------------------------------------------------------------- */
/* Sidebar
/* ---------------------------------------------------------------- */
( function() {
	function sidebar_close() {
		if ( is_mobile ) return;

		$sidebar_toggles.first().click();
	}
	function sidebar_prevent_close( event ) {
		if ( is_mobile ) return;

		event.stopPropagation();
	}

	if ( $body.is( '.mpcth-sidebar-none' ) ) return;

	var $sidebar = $( '#mpcth_sidebar' ),
		$sidebar_toggles = $( '#mpcth_sidebar_toggle, #mpcth_sidebar_close' ),
		$sidebar_swipe = $( 'body' ),
		sidebar_side = $body.is( '.mpcth-sidebar-left' ) ? 'left' : 'right',
		is_sidebar_active = false;

	$sidebar_toggles.on( 'click', function( event ) {

		$sidebar.toggleClass( 'mpcth-active' );
		$sidebar_swipe.toggleClass( 'mpcth-sidebar-active' );
		is_sidebar_active = ! is_sidebar_active;

		if ( is_sidebar_active ) {
			$sidebar_toggles.on( 'mousedown touchstart', sidebar_prevent_close );
			$sidebar.on( 'mousedown touchstart', sidebar_prevent_close );
			$window.on( 'mousedown touchstart', sidebar_close );
		} else {
			$sidebar_toggles.off( 'mousedown touchstart', sidebar_prevent_close );
			$sidebar.off( 'mousedown touchstart', sidebar_prevent_close );
			$window.off( 'mousedown touchstart', sidebar_close );
		}

		event.preventDefault();

	} );

	$sidebar_swipe.on( 'swipeleft', function(event) {

		if ( ! $( event.target ).parents( '.mpcth-slider' ).length  ) {
			if ( ! is_mobile ) return;

			if ( sidebar_side == 'right' && ! is_sidebar_active ) { // open
				$sidebar_toggles.first().trigger( 'click' );
			} else if ( sidebar_side == 'left' && is_sidebar_active ) { // close
				$sidebar_toggles.first().trigger( 'click' );
			}
		}

	} );
	$sidebar_swipe.on( 'swiperight', function(event) {

		if ( ! $( event.target ).parents( '.mpcth-slider' ).length  ) {
			if ( ! is_mobile ) return;

			if ( sidebar_side == 'left' && ! is_sidebar_active ) { // open
				$sidebar_toggles.first().trigger( 'click' );
			} else if ( sidebar_side == 'right' && is_sidebar_active ) { // close
				$sidebar_toggles.first().trigger( 'click' );
			}
		}

	} );
} )();

/* ---------------------------------------------------------------- */
/* Forms lines
/* ---------------------------------------------------------------- */
	var $contact_form = $( '.wpcf7-form' ),
		$mpcth_comment_form = $( '#mpcth_comment_form' ),
		$search_form_on_page = $( '.mpcth-post-not-found .mpcth-search-form' ),
		$custom_button = $( '.mpcth-blog' );

	if ( $mpcth_comment_form.length ) {
		$mpcth_comment_form.find( '.mpcth-form-control-wrap' ).append( '<span class="mpcth-in-border mpcth-in-border-left mpcth-in-border-ver"></span><span class="mpcth-in-border mpcth-in-border-right mpcth-in-border-ver"></span><span class="mpcth-in-border mpcth-in-border-top mpcth-in-border-hor"></span><span class="mpcth-in-border mpcth-in-border-bottom mpcth-in-border-hor"></span>' );
		$mpcth_comment_form.find( '.form-submit' ).append( '<span class="mpcth-in-border mpcth-in-border-left mpcth-in-border-ver"></span><span class="mpcth-in-border mpcth-in-border-right mpcth-in-border-ver"></span><span class="mpcth-in-border mpcth-in-border-top mpcth-in-border-hor"></span><span class="mpcth-in-border mpcth-in-border-bottom mpcth-in-border-hor"></span>' );
	}

	if ( $contact_form.length ) {
		$contact_form.find( '.wpcf7-form-control-wrap' ).append( '<span class="mpcth-in-border mpcth-in-border-left mpcth-in-border-ver"></span><span class="mpcth-in-border mpcth-in-border-right mpcth-in-border-ver"></span><span class="mpcth-in-border mpcth-in-border-top mpcth-in-border-hor"></span><span class="mpcth-in-border mpcth-in-border-bottom mpcth-in-border-hor"></span>' );
		$contact_form.find( '.mpcth-contact-btn' ).append( '<span class="mpcth-in-border mpcth-in-border-left mpcth-in-border-ver"></span><span class="mpcth-in-border mpcth-in-border-right mpcth-in-border-ver"></span><span class="mpcth-in-border mpcth-in-border-top mpcth-in-border-hor"></span><span class="mpcth-in-border mpcth-in-border-bottom mpcth-in-border-hor"></span>' );
	}

	var $comment_submit = $( '#mpcth_comment_submit' );
	if ( $comment_submit.length ) {
		$comment_submit.after( '' );
	}

	$mpcth_comment_form.on( 'focus', 'input:not(.submit), textarea', {"space" : "15"}, show_lines );
	$mpcth_comment_form.on( 'blur', 'input:not(.submit), textarea', hide_lines  );

	$contact_form.on( 'focus', 'input:not(.wpcf7-submit), textarea', {space : "15"}, show_lines );
	$contact_form.on( 'blur', 'input:not(.wpcf7-submit), textarea', hide_lines  );

	$search_form_on_page.on( 'focus', 'input:not(#s)',  {space : "15"}, show_lines );
	$search_form_on_page.on( 'blur', 'input:not(#s)', hide_lines  );

	//$custom_button.on( 'focus', 'a, .mpc-sc-button-wrap ',  {space : "15"}, show_lines );
	//$custom_button.on( 'blur', 'a, .mpc-sc-button-wrap ', hide_lines  );

	function show_lines(space ) {
		var _bordersVertical = $( this ).parent().find( 'span.mpcth-in-border-ver' ),
			_bordersHorizontal = $( this ).parent().find( 'span.mpcth-in-border-hor' ),
			_bordersVerticalHeight = $( this ).parent().find( 'span.mpcth-in-border-ver' ).height(),
			_bordersHorizontalWidth = $( this ).parent().find( 'span.mpcth-in-border-hor' ).width();

		 _bordersVertical.stop().css({
		 		'height' : 0
		 	}).animate({
				height: _bordersVerticalHeight - space.data.space
			 }, 500, function() {}
		 );

		_bordersHorizontal.stop().css({
		 	'width' : 0
		}).animate({
			width: _bordersHorizontalWidth - space.data.space
			 }, 500, function() {
			 	$( this ).parent().find( 'textarea, input' ).css( 'border-color', 'transparent' );
			 }
		);
	}

	function hide_lines() {
		var _bordersVertical = $( this ).parent().find( 'span.mpcth-in-border-ver' ),
			_bordersHorizontal = $( this ).parent().find( 'span.mpcth-in-border-hor' );

		_bordersVertical.stop().css({

			}).animate({
				height: '100%'
				 }, 300, function() {}
			 );

			_bordersHorizontal.stop().animate({
				width: '100%'
				 }, 300, function() {
				 	$( this ).parent().find( 'textarea, input' ).css( 'border-color', '#dddddd' );
				 }
			);
	}

/* ---------------------------------------------------------------- */
/* Comment form validation
/* ---------------------------------------------------------------- */
( function() {
	function is_mail_valid( value ) { // contributed by Scott Gonzalez: http://projects.scottsplayground.com/email_address_validation/
		return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test( value );
	}

	function is_url_valid( value ) { // contributed by Scott Gonzalez: http://projects.scottsplayground.com/iri/
		return /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test( value );
	}

	function check_input( $input ) {
		var is_valid = true,
			add_invalid = false,
			remove_invalid = false,
			value = $input.val();

		if ( $input.is( '#mpcth_comment_form_author' ) ) {
			if ( value == default_author )
				is_valid = false;
			else if ( value == 'NAME*'  )
				add_invalid = true;
			else if ( value.length < 2 )
				add_invalid = true;
			else
				remove_invalid = true;
		}

		else if ( $input.is( '#mpcth_comment_form_mail' ) ) {
			if ( value == default_mail || value == '' )
				is_valid = false;
			else if ( ! is_mail_valid( value ) || value.length < 6 )
				add_invalid = true;
			else
				remove_invalid = true;
		}

		else if ( $input.is( '#mpcth_comment_form_url' ) ) {
			if ( value != '' && value != default_url && ! is_url_valid( value ) )
				add_invalid = false;
			else
				remove_invalid = true;
		}
		else if ( $input.is( '#mpcth_comment_form_message' ) ) {
			if ( value == default_message || value.replace( ' ', '' ) == '' )
				is_valid = false;
			else if ( value == 'MESSAGE'  )
				add_invalid = true;
			else if ( value.length < 5 )
				add_invalid = true;
			else
				remove_invalid = true;
		}

		if ( add_invalid ) {
			is_valid = false;
			$input.addClass( 'mpcth-input-invalid mpcth-color-main-background' );


		} else if ( remove_invalid ) {
			$input.removeClass( 'mpcth-input-invalid mpcth-color-main-background' );
		}

		if ( $comment_form.find( '.mpcth-input-invalid' ).length )
			$comment_form.addClass( 'form-invalid' );
		else
			$comment_form.removeClass( 'form-invalid' );

		return is_valid;
	}

	var $comment_form = $( '#mpcth_comment_form' ),
		$input_author = $( '#mpcth_comment_form_author' ),
		$input_mail = $( '#mpcth_comment_form_mail' ),
		$input_url = $( '#mpcth_comment_form_url' ),
		$input_message = $( '#mpcth_comment_form_message' );

	if ( typeof mpc_cf != 'undefined' ) {
		var default_author = mpc_cf.field_name,
			default_mail = mpc_cf.field_email,
			default_url = mpc_cf.field_url,
			default_message = mpc_cf.field_comment;
	} else {
		var default_author = default_mail = default_url = default_message = '';
	}

	$comment_form.on( 'focus', 'input, textarea', function() {
		$( this ).removeClass( 'mpcth-input-invalid mpcth-color-main-background' );

		$comment_form.addClass( 'form-active' );
	} );

	$comment_form.on( 'blur', 'input, textarea', function() {
		check_input( $( this ) );

		$comment_form.removeClass( 'form-active' );
	} );

	$comment_form.on( 'submit', function( event ) {
		var is_form_valid = true;

		if ( ! check_input( $input_author ) )
			is_form_valid = false;

		if ( ! check_input( $input_mail ) )
			is_form_valid = false;

		if ( ! check_input( $input_url ) )
			is_form_valid = false;

		if ( ! check_input( $input_message ) )
			is_form_valid = false;

		if ( ! is_form_valid ) {
			event.preventDefault();

			$comment_form.addClass( 'form-invalid' );
		} else if ( $input_url.val() == default_url ) {
			$input_url.val( '' );

			$comment_form.removeClass( 'form-invalid' );
		}
	} );
} )();


} )( jQuery );

