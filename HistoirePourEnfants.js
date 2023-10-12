
exports.action = function(data, callback){

	var tblCommand = {
		crapichouille : function() {histoirEnfants ("crapichouille", data, client);},					
		madameMidas : function() {histoirEnfants ("madame_midas", data, client);},
		dromaderio : function() {histoirEnfants ("dromaderio", data, client);},					
		arnaud : function() {histoirEnfants ("arnaud", data, client);},
		chaperonRouge : function() {histoirEnfants ("chaperon_rouge", data, client);},					
		petitPoucet : function() {histoirEnfants ("petit_poucet", data, client);},
		belleEtBete : function() {histoirEnfants ("belleEtBete", data, client);},					
		cendrillon : function() {histoirEnfants ("cendrillon", data, client);},
		leLoup : function() {histoirEnfants ("leLoup", data, client);},
		Leberger : function() {histoirEnfants ( "leBerger", data, client);},
		stopHistoire : function() {histoirEnfants ("stopHistoire", data, client);}
	};

	function histoirEnfants (history, data, client) {

		if(history === "crapichouille") {

			Avatar.play('%URL%https://mespetitesrevuescom.files.wordpress.com/2020/04/mister-macchu-picchu-et-crapichouille-mp3.mp3', data.client);

		}
		if(history === "madame_midas") {
			Avatar.play('%URL%https://mespetitesrevuescom.files.wordpress.com/2020/04/le-destin-de-madame-midas-mp3.mp3', data.client);
			
		}
		if(history === "dromaderio") {
			Avatar.play('%URL%https://mespetitesrevuescom.files.wordpress.com/2020/04/la-vie-agitc3a9-de-monsieur-dromaderio-mp3.mp3', data.client);
			
		}
		if(history === "arnaud") {
			Avatar.play('%URL%https://mespetitesrevuescom.files.wordpress.com/2020/04/histoire-d_arnaud-mp3.mp3', data.client);
			
		}
		if(history === "chaperon_rouge") {
			Avatar.play('%URL%https://mespetitesrevuescom.files.wordpress.com/2020/04/charles_perrault_-_le_petit_chaperon_rouge-1.mp3', data.client);
			
		}
		if(history === "petit_poucet") {
			Avatar.play('%URL%https://mespetitesrevuescom.files.wordpress.com/2020/04/charles_perrault_-_le_petit_poucet-1.mp3', data.client);
			
		}
		if(history === "belleEtBete") {
			Avatar.play('%URL%https://mespetitesrevuescom.files.wordpress.com/2020/04/jeanne_-_marie_leprince_de_beaumont_-_la_belle_et_la_bete.mp3', data.client);
			
		}
		if(history === "cendrillon") {
			Avatar.play('%URL%https://mespetitesrevuescom.files.wordpress.com/2020/04/charles_perrault_-_cendrillon.mp3', data.client);
			
		}
		if(history === "leLoup") {
			Avatar.play('%URL%https://mespetitesrevuescom.files.wordpress.com/2020/04/les_freres_grimm_-_le_loup_et_les_sept_chevreaux.mp3', data.client);
			
		}
		if(history === "leBerger") {
			Avatar.play('%URL%https://mespetitesrevuescom.files.wordpress.com/2020/04/alphonse_daudet_-_les_toiles_rcit_d_un_berger_provenal.mp3', data.client);
			
		}

		if(history === "stopHistoire") {
			Avatar.speak("J'arète les histoire pour enfant", data.client, () => {
				Avatar.Speech.end(data.client, true, () => {
				Avatar.stop(null, client, () => {
				});
			});
		});
		}
	
	}
	

	let client = setClient(data);
	info("HistoirePourEnfants:", data.action.command, "From:", data.client, "To:", client);
	tblCommand[data.action.command]();
	callback();
}


function setClient (data) {
	let client = data.client;
	if (data.action.room)
	client = (data.action.room != 'current') ? data.action.room : (Avatar.currentRoom) ? Avatar.currentRoom : Config.default.client;
	if (data.action.setRoom)
	client = data.action.setRoom;
	return client;
}