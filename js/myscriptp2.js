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