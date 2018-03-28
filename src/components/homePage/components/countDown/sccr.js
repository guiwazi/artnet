
		$(document).ready(function() {

			$("#countdown_def").countdown(	

											{

												dateEnd:'11/12/2014 18:01:30',

												format:true,

												callback:function(){alert('Def Ready')}

											},

											{

												timezone:false,

												offset:0

											}

										);



			$("#countdown_knob").countdown(

											{

												skin: 'knob',

												option:{

														global:{thickness:0.1},

														day:{thickness:0.2},

														hour:{thickness:0.4},

														second:{thickness:.0}

													},

												dateEnd:'05/19/2025 22:01:30',

												dateStart:'01/18/2012 18:01:30',

												format:true,

												callback:function(){alert('Knob Ready')}

											},

											{

												timezone:true,

												offset:6

											}

										);

		});