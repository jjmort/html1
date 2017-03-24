function myMusicFrame() {

	var musiclist = [];

		musiclist.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/309904392&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true");

		musiclist.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/309904260&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true");

		musiclist.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/308571386&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true");

		musiclist.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/297834937&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true");

		musiclist.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/272708756&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true");

		musiclist.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/261123953&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true");

		musiclist.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/257763053&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true");

		musiclist.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/312699279&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true");

		musiclist.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/313826184&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true");

		musiclist.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/302985014&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true");

		musiclist.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/282593639&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true");

		musiclist.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/259644221&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true");

		musiclist.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/221829509&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true");

		musiclist.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/220861259&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true");

		var musiclistDiv = document.getElementById("musiclistDiv");

		for (var i = musiclist.length - 1; i >= 0; i--) {

			var iframe = document.createElement('iframe');

			iframe.src = musiclist[i];

			iframe.className = "musicFrame"; 

			musiclistDiv.appendChild(iframe);
	
		}
}

document.getElementById("mydate").innerHTML = Date();

function mySearch(){

var mytable, searchBox, table_rows, searchtd, loopcount;

mytable =  document.getElementById("table_rows");

searchBox = document.getElementById("searchNow");
//alert(searchBox.value);

searchtd = searchBox.value;

table_rows = mytable.getElementsByTagName("tr");
//console.log(table_rows);


for (var i=0;i<table_rows.length; i++){
	var mytd = table_rows[i].cells[0];
	var tdtext = mytd.innerText;
	//console.log(mytd);
	//mytd.innerHTML;
	if (searchtd == tdtext) {
		mytd.className = "backgroundred";
	}else {
		mytd.style.backgroundColor = "transparent";
	}
	}


}


function deleted(event){
	//alert('hello');
	//console.log(event);
	var tr = event.target.parentNode.parentNode;
	//var mytable =  document.getElementById("table_rows");
	console.log(tr);
	//console.log(mytable);
	tr.parentNode.removeChild(tr);
	//mytable.removeChild(tr);

}

function showmyID(){

var	mytext, mytable, count, mytr, btn, mytd;

mytext = document.getElementById("text_transfer");

mytable =  document.getElementById("table_rows");

count = mytable.rows.length;

mytr = mytable.insertRow(-1);

btn = document.createElement('input');
btn.type = "button";
btn.value = "delete";
btn.className = "btn btn-danger btn-xs"
btn.style.marginLeft = "10px";
//btn.class.fontcolor = "black";
//btn.onclick = remove.rows
btn.addEventListener('click', deleted);


if(count % 2 === 0){ 
   //alert('I am even '+count);
   mytr.style.textAlign = "right";
}else{
   //alert('I am odd '+count);
   mytr.style.textAlign = "left";
}


mytd = mytr.insertCell(0);

mytd.innerHTML = mytext.value;

mytd.appendChild(btn);

}

myMusicFrame();