function toggleGenres() {
	var div = document.getElementById('');
    if (div.style.display === 'none') {
        div.style.display = 'block';
    } else {
        div.style.display = 'none';
    }
    //console.log(div);
}

function myMusicFrame(genres) {

	var musiclistGenres = [];

		listMixes[7] = musiclistGenres.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/280037209&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true", 
			"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/259644221&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true", 
			"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293648147&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true", 
			"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/308571386&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
			"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/302985014&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
			"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/312699279&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
			"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/314223197&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
			"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/313826184&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"
			"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/314905059&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true");

			//var musiclistDivMixes = document.getElementById("musiclistDivMixes");
		
		listDownTempo[6] = musiclistGenres.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/303526366&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
			"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/308250247&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
			"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/313872241&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
			"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/314928383&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true");

			//var musiclistDownTempo = document.getElementById("musiclistDivDownTempo");

		listDeep[5] = musiclistGenres.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/308571386&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
			"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/302985014&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
			"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/297065386&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
			"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/313473755&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
			"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/314905059&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true");

			//var musiclistDivDeep = document.getElementById("musiclistDivDeep");

		listHouse[4] = musiclistGenres.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/297065386&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
			"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/307864972&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
			"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/313473755&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
			"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/314905059&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true");

			//var musiclistDivHouse = document.getElementById("musiclistDivHouse");

		listTechno[3] = musiclistGenres.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/280037209&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true");

			//var musiclistDivTechno = document.getElementById("musiclistDivTechno");

		listMinimal[2] = musiclistGenres.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/259644221&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
			"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293648147&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
			"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/297065386&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
			"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/314223197&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
			"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/313826184&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
			"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/314905059&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true");		

			//var musiclistDivMinimal = document.getElementById("musiclistDivMinimal");

		listAll[1] = musiclistGenres.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/280037209&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
			"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/259644221&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
			"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293648147&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
			"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/308571386&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
			"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/302985014&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
			"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/303526366&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
			"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/297065386&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
			"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/307864972&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
			"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/308250247&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
			"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/312699279&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
			"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/313872241&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
			"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/313473755&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
			"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/314223197&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
			"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/313826184&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
			"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/314928383&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
			"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/314905059&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true");

			//var musiclistDivAll = document.getElementById("musiclistDivAll");

			var musiclistDivGenres = document.getElementById("musiclistDivGenres");

			for (var i = musiclistGenres.length - 1; i >= 0; i--) {

				var iframeAll = document.createElement('iframe');

				iframeAll.src = musiclistGenres[i];

				iframeAll.className = "musicFrame"; 

				musiclistDivGenres.appendChild(iframeAll);
		
			}


			/*for (var i = myMusicFrame.length - 1; i >= 0; i--) {

				var iframeAll = document.createElement('iframe');

				iframeAll.src = myMusicFrame[i];

				iframeAll.className = "musicFrame"; 

				musicFrameDiv.appendChild(iframeAll);
		
			}*/
			
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