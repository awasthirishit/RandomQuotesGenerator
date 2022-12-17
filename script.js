let num = Math.floor(Math.random() * 1644);
let d;
let s;
fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
	d = data[num].text;
	s = data[num].author; 
    console.log(d);
	document.getElementById("quotes").innerText = d
	document.getElementById("source").innerText = s
    console.log(typeof(d));
    // console.log(num);
  });

  