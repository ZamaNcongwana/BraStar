/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Home Slider
5. Init Featured Album Player
6. InitMagic
7. Init Single Player


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	var header = $('.header');
	var ctrl = new ScrollMagic.Controller();

	initMenu();
	initHomeSlider();
	initAlbumPlayer();
	initMagic();
	initSinglePlayer();

	setHeader();

	$(window).on('resize', function()
	{
		setHeader();
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	/* 

	2. Set Header

	*/

	function setHeader()
	{
		if($(window).scrollTop() > 91)
		{
			header.addClass('scrolled');
		}
		else
		{
			header.removeClass('scrolled');
		}
	}

	/* 

	3. Init Menu

	*/

	function initMenu()
	{
		if($('.menu').length)
		{
			var hamb = $('.hamburger');
			var menu = $('.menu');
			var menuOverlay = $('.menu_overlay');

			hamb.on('click', function()
			{
				menu.addClass('active');
			});

			menuOverlay.on('click', function()
			{
				menu.removeClass('active');
			});
		}
	}

	/* 

	4. Init Home Slider

	*/

	function initHomeSlider()
	{
		if($('.home_slider').length)
		{
			var homeSlider = $('.home_slider');
			homeSlider.owlCarousel(
			{
				animateOut: 'fadeOutLeft',
    			animateIn: 'fadeInRight',
				items:1,
				loop:true,
				autoplay:false,
				autoplayTimeout:8000,
				smartSpeed:1200,
				autoplaySpeed:1200,
				dotsSpeed:1200,
				mouseDrag:false,
				nav:false,
				dots:true,
				margin:250
			});
		}
	}

	/* 

	5. Init Featured Album Player

	*/

	function initAlbumPlayer()
	{
		if($('#jplayer_1').length)
		{
			// Duration has to be entered manually
			var playlist = 
			[
				{
					title:"0.1 Abazali bam",
					artist:"Bra Star",
					mp3:"files/0.1 Abazali bam.mp3",
					duration:"4.43"
				},
				{
					title:"02.Tat'uMandela",
					artist:"Bra Star ",
					mp3:"files/02.Tat'uMandela.mp3",
					duration:"5.07"
				},
				{
					title:"03.Molweni ma-Afrika",
					artist:"Bra Star",
					mp3:"files/03.Molweni ma-Afrika.mp3",
					duration:"4.53"
				},
				{
					title:"04.Bekezela",
					artist:"Bra Star",
					mp3:"files/04.Bekezela.mp3",
					duration:"4.18"
				},
				{
					title:"05.Sikelela",
					artist:"Bra Star",
					mp3:"files/05.Sikelela.mp3",
					duration:"5.42"
				},
				{
					title:"06.Ayikho indlela",
					artist:"Bra Star",
					mp3:"files/06.Ayikho indlela.mp3",
					duration:"4.15"
				},
				{
					title:"07.Ndiculele ingoma",
					artist:"Bra Star",
					mp3:"files/07.Ndiculele ingoma.mp3",
					duration:"7.33"
				},
				{
					title:"08.Khumbul'ekhaya",
					artist:"Bra Star",
					mp3:"files/08.Khumbul'ekhaya.mp3",
					duration:"4.51"
				},
				{
					title:"09.Khuphukani ma-Afrika",
					artist:"Bra Star",
					mp3:"files/09.Khuphukani ma-Afrika.mp3",
					duration:"5.22"
				},
				{
					title:"10.Kuzobanje",
					artist:"Bra Star",
					mp3:"files/10.Kuzobanje.mp3",
					duration:"5.10"
				},
				{
					title:"11.Maching over to",
					artist:"Bra Star",
					mp3:"files/11.Maching over to.mp3",
					duration:"4.55"
				},
				{
					title:"12.Ndimfumen'ujesu",
					artist:"Bra Star",
					mp3:"files/12.Ndimfumen'ujesu.mp3",
					duration:"4.44"
				},
				{
					title:"13.Sohlala simdumisa",
					artist:"Bra Star",
					mp3:"files/13.Sohlala simdumisa.mp3",
					duration:"5.18"
				},
				{
					title:"14.Ndikunika uthando",
					artist:"Bra Star",
					mp3:"files/14.Ndikunika uthando.mp3",
					duration:"4.40"
				},
				


			];

			var options =
			{
				playlistOptions:
				{
					autoPlay:false,
					enableRemoveControls:false
				},
				play: function() // To avoid multiple jPlayers playing together.
				{ 
					$(this).jPlayer("pauseOthers");
				},
				solution: 'html',
				supplied: 'oga, mp3',
				useStateClassSkin: true,
				preload: 'metadata',
				volume: 0.2,
				muted: false,
				backgroundColor: '#000000',
				cssSelectorAncestor: '#jp_container_1',
				errorAlerts: false,
				warningAlerts: false
			};

			var cssSel = 
			{
				jPlayer: "#jplayer_1",
				cssSelectorAncestor: "#jp_container_1",
				play: '.jp-play',
				pause: '.jp-pause',
				stop: '.jp-stop',
				seekBar: '.jp-seek-bar',
				playBar: '.jp-play-bar',
				globalVolume: true,
				mute: '.jp-mute',
				unmute: '.jp-unmute',
				volumeBar: '.jp-volume-bar',
				volumeBarValue: '.jp-volume-bar-value',
				volumeMax: '.jp-volume-max',
				playbackRateBar: '.jp-playback-rate-bar',
				playbackRateBarValue: '.jp-playback-rate-bar-value',
				currentTime: '.jp-current-time',
				duration: '.jp-duration',
				title: '.jp-title',
				fullScreen: '.jp-full-screen',
				restoreScreen: '.jp-restore-screen',
				repeat: '.jp-repeat',
				repeatOff: '.jp-repeat-off',
				gui: '.jp-gui',
				noSolution: '.jp-no-solution'
			};

			var myPlaylist = new jPlayerPlaylist(cssSel,playlist,options);
			
			
			setTimeout(function()
			{
				var items = $('.jp-playlist ul li > div');
				for(var x = 0; x < items.length; x++)
				{
					var item = items[x];
					var dur = playlist[x].duration;
					var durationDiv = document.createElement('div');
					durationDiv.className = "song_duration";
					durationDiv.append(dur);
					item.append(durationDiv);
				}
			},200);
		}
	}

	/* 

	6. Init Magic

	*/

	function initMagic()
	{
		if($('.image_overlay').length)
		{
			var eles = $('.image_overlay');
			eles.each(function()
			{
				var ele = this;

				var projectScene = new ScrollMagic.Scene(
				{
					triggerElement: ele,
			        triggerHook: "onEnter",
			        offset: 400,
			        reverse:false
				})
				.setClassToggle(ele, 'active')
				.addTo(ctrl);
			});
		}
	}

	/* 

	7. Init Single Player

	*/

	function initSinglePlayer()
	{
		if($("#jplayer_2").length)
		{
			$("#jplayer_2").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
				title:"uMsebenzie bonus track",
					artist:"Bra Star x Zama",
					mp3:"files/bra star_uMsebenzie.mp3"
			});
		},
		play: function() { // To avoid multiple jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		swfPath: "plugins/jPlayer",
		supplied: "mp3",
		cssSelectorAncestor: "#jp_container_2",
		wmode: "window",
		globalVolume: true,
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true,
		solution: 'html',
		preload: 'metadata',
		volume: 0.2,
		muted: false,
		backgroundColor: '#000000',
		errorAlerts: false,
		warningAlerts: false
	});
		}	
	}

});