		    	addImage("http://www.clker.com/cliparts/Q/j/a/y/T/q/ghost.svg", "Spöke");

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