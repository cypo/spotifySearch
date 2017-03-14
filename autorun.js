document.addEventListener("click", createButton);

setInterval(createButton, 1000);

function createButton(){

	var check = document.getElementById('przycisk');
	
	if(check==null && (window.location.hostname=='www.youtube.pl' || window.location.hostname=='www.youtube.com')){
		var eow = document.getElementById('eow-title');
		if (eow!=null){
			var przycisk = document.createElement('img');
			przycisk.id = 'przycisk';
			przycisk.setAttribute('src', 'http://cypo.esy.es/spotifysearch/logo.jpg')
			przycisk.style.width = '15px';
			przycisk.style.height = '15px';
			eow.insertBefore(przycisk, eow.childNodes[0]);
			przycisk.addEventListener('click', begin);

		}
		else{

		}
		
	}
	else{

	}
}

function begin(){
	var eow = document.getElementById("eow-title");
	var amp = /&/g;
	var bracketA = /\(/g;
	var bracketB = /\)/g;
	var dash = /-/g;
	var dashB = /–/g;
	var slash = /\//g;
	var bSlash = /\\/g;
	var origMix = /original mix/ig;
	var musicVideo = /music video/ig;
	var official = /\(official\)/ig;
	var officialVideo = /official video/ig;
	var officialAudio = /official audio/ig;
	var officialMusVideo = /Official Music Video/ig;
	var lyricVideo = /Lyric Video/ig
	var audio = /\(audio\)/ig;
	var explicit = /\(Explicit\)/gi;
	var bracketsA = /\[.*\]/g;
	var ftA = / ft /ig;
	var ftB = /ft./ig;
	var feat = /feat./ig;
	var comma = /,/g;
	var quotation = /"/g
	var featExt = /\(f.*?\)/gi;
	var vs = / vs /g;
	var colon = /:/g;
	var hd = / HD/g;
	var radioEdit = /radio edit/ig;
	var bootleg = /bootleg/ig;
	
	var text = eow.textContent.replace(amp, "");
	text = text.replace(hd, " ");
	text = text.replace(vs, " ");
	text = text.replace(colon, " ");
	text = text.replace(quotation, "");
	text = text.replace(featExt, "");
	text = text.replace(radioEdit, "");
	text = text.replace(explicit, "");
	text = text.replace(official, " ");
	text = text.replace(officialMusVideo, "");
	text = text.replace(officialAudio, " ");
	text = text.replace(lyricVideo, "");
	text = text.replace(audio, "");
	text = text.replace(comma, "");
	text = text.replace(dash, "");
	text = text.replace(dashB, "");
	text = text.replace(slash, "");
	text = text.replace(bSlash, "");
	text = text.replace(bracketA, "");
	text = text.replace(bracketB, "");
	text = text.replace(bracketsA, "");
	text = text.replace(origMix, "");
	text = text.replace(musicVideo, "");
	text = text.replace(officialVideo, "");
	text = text.replace(ftA, " ");
	text = text.replace(ftB, "");
	text = text.replace(feat, "");
	text = text.replace(bracketA, "");
	text = text.replace(bracketB, "");
	
	if(eow!=null){
		window.open("https://play.spotify.com/search/results/"+encodeURIComponent(text));
	}
	else{
		console.log("[SpotifySearch] Nie wykryto obiektu eow-title");
	}
}

