function toggleMinimal() {
	var divMinimal = document.getElementById('musiclistDivMinimal');
    if (divMinimal.style.display === 'none') {
        divMinimal.style.display = 'block';
    } else {
        divMinimal.style.display = 'none';
    }
    //console.log(divAll);
}

function toggleAll() {
	var divAll = document.getElementById('musiclistDivAll');
    if (divAll.style.display === 'none') {
        divAll.style.display = 'block';
    } else {
        divAll.style.display = 'block';
    }
    //console.log(divAll);
}

function myMusicFrame() {

	var musiclistMixes = [];

		musiclistMixes.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/280037209&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true")

		musiclistMixes.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/259644221&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true")

		musiclistMixes.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293648147&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true")

		musiclistMixes.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/308571386&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true")

		musiclistMixes.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/302985014&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true")

		musiclistMixes.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/312699279&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true")

		musiclistMixes.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/314223197&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true")

		musiclistMixes.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/313826184&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true")

		musiclistMixes.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/314905059&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true")
		
	var musiclistDownTempo = [];

		musiclistDownTempo.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/303526366&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true")

		musiclistDownTempo.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/308250247&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true")

		musiclistDownTempo.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/313872241&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true")

		musiclistDownTempo.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/314928383&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true")

	var musiclistDeep= [];

		musiclistDeep.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/308571386&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true")

		musiclistDeep.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/302985014&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true")

		musiclistDeep.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/297065386&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true")

		musiclistDeep.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/313473755&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true")

		musiclistDeep.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/314905059&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true")

	var musiclistHouse = [];

		musiclistHouse.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/297065386&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true")

		musiclistHouse.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/307864972&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true")

		musiclistHouse.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/313473755&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true")

		musiclistHouse.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/314905059&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true")

	var musiclistTechno = [];

		musiclistTechno.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/280037209&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true")

	var musiclistMinimal = [];

		musiclistMinimal.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/259644221&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true")

		musiclistMinimal.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293648147&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true")

		musiclistMinimal.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/297065386&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true")

		musiclistMinimal.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/314223197&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true")

		musiclistMinimal.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/313826184&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true")

		musiclistMinimal.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/314905059&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true")		

	var musiclistAll = [];

		musiclistAll.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/280037209&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true")

		musiclistAll.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/259644221&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true")

		musiclistAll.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293648147&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true")

		musiclistAll.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/308571386&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true")

		musiclistAll.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/302985014&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true")

		musiclistAll.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/303526366&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true")

		musiclistAll.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/297065386&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true")

		musiclistAll.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/307864972&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true")

		musiclistAll.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/308250247&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true")

		musiclistAll.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/312699279&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true")

		musiclistAll.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/313872241&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true")
		
		musiclistAll.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/313473755&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true")

		musiclistAll.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/314223197&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true")

		musiclistAll.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/313826184&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true")

		musiclistAll.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/314928383&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true")

		musiclistAll.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/314905059&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true")

			var musiclistDivAll = document.getElementById("musiclistDivAll");

			for (var i = musiclistAll.length - 1; i >= 0; i--) {

				var iframeAll = document.createElement('iframe');

				iframeAll.src = musiclistAll[i];

				iframeAll.className = "musicFrame"; 

				musiclistDivAll.appendChild(iframeAll);
		
			}
			
			/*var musiclistDivMinimal = document.getElementById("musiclistDivMinimal");

			for (var f = musiclistMinimal.length - 1; f >= 0; f--) {

				var iframeMinimal = document.createElement('iframe');

				iframeMinimal.src = musiclistAll[i];

				iframeMinimal.className = "musicFrame"; 

				musiclistDivAll.appendChild(iframeMinimal);
		
			} */
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