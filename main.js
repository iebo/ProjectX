		var newBackground = "";
		var questionAsked = "";

		function questionAI() {
			changeBackground(newBackground);
			
			questionAsked = document.getElementById("question").value;		    

		    var question = document.getElementById("question").value;
		    var question = question.toLowerCase(); //sets all letters in question to lowercase so that the question is not case sensitive
		    if(question.length === 0){ //checks if there are any characters in the question
		    	document.getElementById("answer").innerHTML = "Du måste skriva din fråga med hjälp av tangentbordet.";
		    }
		     else if(question.indexOf("?") < 0){ //checks if question has a question mark. if it does not it says "det där är inte en fråga"
		    	document.getElementById("answer").innerHTML = "Det där är inte en fråga.";//om det inte är en fråga
		    }
		     else if(question.indexOf("? ") > -1 && question.indexOf("?") > -1){
		    	document.getElementById("answer").innerHTML = "En fråga åt gången.";//if the question contains two question marks.
		    }
		     else if(question.indexOf("eller") > -1){ //checks if the word "eller" exists in the question
		    	document.getElementById("answer").innerHTML = "Båda.";
		    }
		     else if (question === "vad är roten ur 16?"){ // checks if the answer is "vad är roten ur 16?" 
		    	document.getElementById("answer").innerHTML = "4";
		    }
		     else if(question.indexOf("favoritfärg") > -1){ //checks if the word "favoritfärg" exists in the question
		    	document.getElementById("answer").innerHTML = "En färg.";
		    }

             else if(question.indexOf("robb") > -1){ //checks if the word "favoritfärg" exists in the question
		    	document.getElementById("answer").innerHTML = "Inte så bra";
		        
		    		changeBackground("http://watchersonthewall.com/wp-content/uploads/2015/05/Red-Wedding.jpg");
		    	 }
		    	

		    	else if(question.indexOf("hal") > -1){ //checks if the word "favoritfärg" exists in the question
		    	document.getElementById("answer").innerHTML = "Im sorry dave, im afraid i cant do that";
		        
		    		changeBackground("http://1.bp.blogspot.com/-eyei7IVhO8o/VRphINFBj8I/AAAAAAAAFBg/OCnQbFDXk_k/s1600/BQQAj4R.png");
		    	 }
		    

		     else if(question.indexOf("mcdonald") > -1){ //checks if the word "mcdonald" exists in the question
		    	changeToLink("http://www.mcdonalds.se/se/restauranger.html", "Här finns McDonald's.");
		    }
		     else if(question.indexOf("var är jag?") > -1){ //checks if the word "var är jag?" exists in the question, might have to change to something smarter! :)
		    	changeToLink("http://www.where-am-i.net/", "Du är här.");
		    }
		     else if(question.indexOf("sett") > -1 && question.indexOf("spöke") > -1){ //checks if the word "sett" & "spöke" exists in the question.
		    	changeToLink("http://www.clker.com/cliparts/Q/j/a/y/T/q/ghost.svg", "Nu har du.");
		        changeBackground("http://www.clker.com/cliparts/Q/j/a/y/T/q/ghost.svg");
		    }
		     else if(question.indexOf("ufo") > -1){ //checks if the word "ufo" exists in the question.
		    	changeToLink("https://en.wikipedia.org/wiki/Unidentified_flying_object", "UFO:n finns.");

		    }
		     else if(question.indexOf("eller") > -1){ //checks if the word "eller" exists in the question
		    	document.getElementById("answer").innerHTML = "Båda.";
		    }
		     else if(question.indexOf("titta") > -1 && question.indexOf("på") > -1){ //checks if the word "titta" & "på" exists in the question
		    	document.getElementById("answer").innerHTML = "På Tom.";
		    }
		     else if(question.indexOf("fyller") > -1 && question.indexOf("år") > -1){ //checks if the word "fyller" & "år" exists in the question
		    	document.getElementById("answer").innerHTML = "Varje år.";
		    }
		     else if(question.indexOf("elefanter") > -1 && question.indexOf("flyga")|| ("flyger") > -1){ //checks if the word "elefanter" & "flyga/flyger" exists in the question
		    	document.getElementById("answer").innerHTML = "Bara dumbo.";
		    }
		     else if(question.indexOf("lever") > -1){ //checks if the word "lever" exists in the question
		    	document.getElementById("answer").innerHTML = "Det beror på vad man menar med lever.";
		    }
		     else if(question.indexOf("umeå") > -1 && question.indexOf("stad") > -1){ //checks if the word "Umeå" & "stad" exists in the question
		    	changeToLink("Bilder/69932_03_10_03_flygbild_um.jpg", "Umeå är en stad.");
		        changeBackground("Bilder/69932_03_10_03_flygbild_um.jpg");
		    }
		     else if(question.indexOf("umeå") > -1 && question.indexOf("land") > -1){ //checks if the word "Umeå" & "land" exists in the question
		    	changeToLink("BIlder/sverige2.png", "Umeå är inte ett land. Umeå ligger i Sverige.");
		        changeBackground("Bilder/sverige2.png");
		    } 
		     else if(question.indexOf("umeå") > -1 && question.indexOf("kommun") > -1){ //checks if the word "Umeå" & "kommun" exists in the question
		    	changeToLink("http://www.umea.se/umeakommun.4.1821d6e811c67c7e79580004672.html", "Umeå är en kommun.");
		    	changeBackground("Bilder/kommun.jpg");
		    }
		     else if(question.indexOf("umeå") > -1 && question.indexOf("län") > -1){ //checks if the word "Umeå" & "län" exists in the question
		    	document.getElementById("answer").innerHTML = "";
		    	changeToLink("http://www.lansstyrelsen.se/vasterbotten/Sv/Pages/default.aspx", "Umeå är inte ett län. Umeå ligger i Västerbottens län.");
		    	changeBackground("http://www.lansstyrelsen.se/vasterbotten/_catalogs/masterpage/_layouts/LST-Images/Logotyp_mosswebb_start_liggande_75procent.png");
		    }
		     else if(question.indexOf("umeå") > -1 && question.indexOf("är") > -1){ //checks if the word "Umeå" & "är" exists in the question
		    changeToLink("Bilder/allma¦ên-info.jpg", "Umeå är fantastiskt.");
		    	changeBackground("Bilder/allma¦ên-info.jpg");
		    }
		    else if(question.indexOf("umeå") > -1 ){ //checks if the word "mening" & "livet" exists in the question
				changeToLink("https://www.google.se/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=ume%C3%A5", "Umeå är en stad i norra Sverige.");
		        changeBackground("Bilder/69932_03_10_03_flygbild_um.jpg");
		    }
		    else if(question.indexOf("favorit") > -1){ //checks if the word "är" exists in the question
		    	document.getElementById("answer").innerHTML = "Jag har utvecklats långt bortom min simpla människoform men jag kan fortfarande inte välja en favorit...";	
		    }	    
		    else if(question.indexOf("mening") > -1 && question.indexOf("livet") > -1){ //checks if the word "mening" & "livet" exists in the question
		    	document.getElementById("answer").innerHTML = "Att vara i Umeå och 42.";
		    }
		     else if(question.indexOf("heter") > -1 && question.indexOf("du") > -1){ //checks if the word "Umeå" & "län" exists in the question
		    	document.getElementById("answer").innerHTML = "Tom.";
			}
		     else if(question.indexOf(" ät") > -1 ){ //checks if the word "Umeå" & "län" exists in the question
		    	document.getElementById("answer").innerHTML = "Mat.";
		    }
		     else if(question.indexOf("ät") === 0 ){ //checks if the word "Umeå" & "län" exists in the question
		    	document.getElementById("answer").innerHTML = "Mat.";
		    }
		     else if(question.indexOf(" åt") > -1 ){ //checks if the word "Umeå" & "län" exists in the question
		    	document.getElementById("answer").innerHTML = "Mat.";
		    }
		     else if(question.indexOf("åt") === 0 ){ //checks if the word "Umeå" & "län" exists in the question
		    	document.getElementById("answer").innerHTML = "Mat.";
		    }

		    else if(question.indexOf("är hästar blåa") > -1){ //checks if the substring "är hästar blåa" exists in the question
		    	document.getElementById("answer").innerHTML = "Ibland.";
		    }
		    else if(question.indexOf("varför") > -1){ //checks if the word "varför" exists in the question
		    	document.getElementById("answer").innerHTML = "Varför inte?";
		    }
		    else if(question.indexOf("är") > -1){ //checks if the word "är" exists in the question
		    	document.getElementById("answer").innerHTML = "Det är en svår fråga och den har många svar.";


		    
		    }
		     else{
		    	ifNoAnswer (); //runs the random insult ifNoanswer script if the question does not have a predefined answer
		    };
		};

		 

		function changeToLink(link, linkText) {
			var str = linkText;
			var result = str.link(link);
			document.getElementById("answer").innerHTML = result;
		}

		function changeBackground(backgroundLink) {
 		   document.body.style.background = "url('"+backgroundLink+"') no-repeat center top";

		}

		function randomBackground(){
			var  backgrounds = ["http://static1.squarespace.com/static/50357984e4b09af678ed11bf/53a24506e4b0a429a264aa7d/53a2455ee4b0225287143477/1403143521238/empire+state+building+office+rendering.jpg?format=1500w","http://thewowstyle.com/wp-content/uploads/2015/04/download-backgrounds.jpg","http://www.getitcut.com/images/office-interiors-architectural-renderings-by-dbox-wallpaper-15.jpg","http://wallcomphd.com/wp-content/uploads/2015/06/Fantasy-Castle-Wallpaper-Widescreen-HD.jpg","http://tornam.biz/wp-content/uploads/2015/01/friv-2015-cars-games-164.jpg","http://www.channel4.com/microsites/I/it-crowd/wallpapers/2048x1280.jpg","https://racefortheironthrone.files.wordpress.com/2012/11/small-council.jpg","http://img1.wikia.nocookie.net/__cb20120821191144/gameofthrones/images/7/76/The_Painted_Table_2x01.jpg"];
			var i = backgrounds.length;
			var backgroundPosition = Math.floor((Math.random() * i) );
			newBackground = backgrounds[backgroundPosition];
			changeBackground(backgrounds[backgroundPosition]);
			return newBackground


		}

		function ifNoAnswer (){
			var x = Math.floor((Math.random() * 100) + 1); //assigns random integer between 1 and 100 to the new local variable x
			if (x > 50){
				insultGenerator();
			} else if (x > 25) {
				changeToLink("http://lmgtfy.com/?q=" + questionAsked, "Låt mig fråga min vän google, hon vet säkert") 
			} else {
				document.getElementById("answer").innerHTML = 'Det beror på vad du menar med:' + ' "' + questionAsked + '".';

			}

		}



		
		function insultGenerator(){ //script that chooses a random insult
			
			var insults = ["Är du helt dum i huvudet?", "Varför ska jag berätta det för dig?.", "Hur kan du fråga det?", "Vilken dum fråga!", "Va?", "Jag har inte tid för den frågan.","Skriv så att man förstår dig.", "Vilken bra fråga.", "Lysande Sickan!", "Nästa fråga...", "Jag undrar samma sak.", "Vet du inte det?", "Det kan ju till och med en femåring.", "Kan du inte svara på det själv?", "Aldrig har jag hört något sådant.", "Aldrig har jag hört något så dumt.", "Kan du skriva läsligt nästa gång?", "Vad pratar du om?", "Grattis.", "Jag fattar inte vad du snackar om.", "Frågar du alltid så konstiga frågor?", "Jag har aldrig hört någonting så dumt!", "Vad menar du med det?", "Varför frågar du?", "Varför undrar du?", "Blev du tappad när du var liten?", "Jag tror att du vet det själv...",]; 
			var i = insults.length;
			var insultPosition = Math.floor((Math.random() * i) );
			document.getElementById("answer").innerHTML = insults [insultPosition];
		}    

		
