
		var questionAsked = "";
		function questionAI() {
			questionAsked = document.getElementById("question").value;		    
		    var question = document.getElementById("question").value;
		    var question = question.toLowerCase(); //sets all letters in question to lowercase so that the question is not case sensitive
		    if(question.length === 0){ //checks if there are any characters in the question
		    	document.getElementById("answer").innerHTML = "Du måste skriva din fråga med hjälp av tangentbordet";
		    } else if(question.indexOf("?") < 0){ //checks if question has a question mark. if it does not it says "det där är inte en fråga"
		    	document.getElementById("answer").innerHTML = "Det där är inte en fråga";//om det inte är en fråga
		    } else if(question.indexOf("? ") > -1 && question.indexOf("?") > -1){
		    	document.getElementById("answer").innerHTML = "En fråga åt gången.";//if the question contains two question marks.
		    } else if(question.indexOf("eller") > -1){ //checks if the word "eller" exists in the question
		    	document.getElementById("answer").innerHTML = "Båda.";
		    } else if (question === "vad är roten ur 16?"){ // checks if the answer is "vad är roten ur 16?" 
		    	document.getElementById("answer").innerHTML = "4";
		    } else if(question.indexOf("favoritfärg") > -1){ //checks if the word "favoritfärg" exists in the question
		    	document.getElementById("answer").innerHTML = "En färg";
		    } else if(question.indexOf("mcdonald") > -1){ //checks if the word "mcdonald" exists in the question
		    	changeToLink("http://www.mcdonalds.se/se/restauranger.html", "Här finns McDonald's.");
		    } else if(question.indexOf("var är jag?") > -1){ //checks if the word "var är jag?" exists in the question, might have to change to something smarter! :)
		    	changeToLink("http://www.where-am-i.net/", "Du är här.");
		    } else if(question.indexOf("sett") > -1 && question.indexOf("spöke") > -1){ //checks if the word "sett" & "spöke" exists in the question.
		    	changeToLink("http://www.clker.com/cliparts/Q/j/a/y/T/q/ghost.svg", "Nu har du.");
		    	addImage("http://www.clker.com/cliparts/Q/j/a/y/T/q/ghost.svg", "Spöke");
		    } else if(question.indexOf("ufo") > -1){ //checks if the word "ufo" exists in the question.
		    	changeToLink("https://en.wikipedia.org/wiki/Unidentified_flying_object", "UFO:n finns.");
		    } else if(question.indexOf("eller") > -1){ //checks if the word "eller" exists in the question
		    	document.getElementById("answer").innerHTML = "Båda.";
		    } else if(question.indexOf("titta") > -1 && question.indexOf("på") > -1){ //checks if the word "titta" & "på" exists in the question
		    	document.getElementById("answer").innerHTML = "På Tom.";
		    } else if(question.indexOf("fyller") > -1 && question.indexOf("år") > -1){ //checks if the word "fyller" & "år" exists in the question
		    	document.getElementById("answer").innerHTML = "Varje år.";
		    } else if(question.indexOf("elefanter") > -1 && question.indexOf("flyga")|| ("flyger") > -1){ //checks if the word "elefanter" & "flyga/flyger" exists in the question
		    	document.getElementById("answer").innerHTML = "Bara dumbo.";
		    } else if(question.indexOf("lever") > -1){ //checks if the word "lever" exists in the question
		    	document.getElementById("answer").innerHTML = "Det beror på vad man menar med lever.";
		    } else if(question.indexOf("umeå") > -1 && question.indexOf("är") > -1){ //checks if the word "Umeå" & "är" exists in the question
		    	document.getElementById("answer").innerHTML = "Umeå är fantastiskt.";
		    } else{
		    	ifNoAnswer (); //runs the random insult ifNoanswer script if the question does not have a predefined answer
		    };
		};

		function addImage(imageLink, imageID) {
			    var x = document.createElement("IMG");
			    var imageLink;
			    var imageID;
			    x.setAttribute("src", imageLink);
			    x.setAttribute("width", "100");
			    x.setAttribute("width", "100");
			    x.setAttribute("alt", imageID);
			    document.body.appendChild(x);
		} 

		function changeToLink(link, linkText) {
			var str = linkText;
			var result = str.link(link);
			document.getElementById("answer").innerHTML = result;
		}
		function ifNoAnswer (){
			var x = Math.floor((Math.random() * 100) + 1); //assigns random integer between 1 and 100 to the new local variable x
			if (x > 50){
				insultGenerator();
			} else if (x > 25) {
				changeToLink("http://lmgtfy.com/?q=" + questionAsked, "Tryck här") 
			} else {
				document.getElementById("answer").innerHTML = 'Det beror på vad du menar med:' + ' "' + questionAsked + '"';

			}

		}



		
		function insultGenerator(){ //script that chooses a random insult
			
			var x = Math.floor((Math.random() * 100) + 1); //assigns random integer between 1 and 100 to the new local variable x
			var insults = ["Är du helt dum i huvudet?", "Den här snubben kan ju inte stava."]; 
			var i = insults.length;
			var insultPosition = Math.floor((Math.random() * i) );
			document.getElementById("answer").innerHTML = insults [insultPosition];
		}    

		