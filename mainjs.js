let wrapper = document.body.querySelector(".wrapper") //is a class
let url ="https://api.github.com/users/jmay89tiy";
let filler = []; // empty array


function readData(data) { // json data
	return data.json(); // returns info into readable form
}

function makeProf(data) {   //filler is key variable for data
	filler = data;
	console.log(filler);
	return filler;  //once returned this is done
}


function createTitle(filler) { //building out header divs
	let div = document.createElement("div"); //short for build div
	div.className = "header";
	div.innerHTML = `<h1>${filler.name}</h1>`; //write inside once div is built using template "yourname"
	wrapper.appendChild(div); //appends child to .wrapper class
	return filler; // once returned thisis done
}


function createTheBasics(profileFill) { //basics and input buildout
	let div = document.createElement("div"); // new div creation
	div.className = "basics"
	div.innerHTML = `
  <h3>The Basics</h3>
    <ul>
      <li><span>Name:</span> Joshua May</li>
      <li><span>GitHub URL:</span>
      <a href=${filler.html_url}>${filler.login}</a></li>
      <li><span>Email:</span> Jmay89@icloud.com</li>
      <li><span>Company:</span>The Iron Yard</li>
      <li><span>Website:</span>
      <a href=${filler.blog}>nerd-hibachi.wordpress.com</a></li>
    </ul>
  `;
  // above is creation of the h3 and the following info pulled using template
  wrapper.appendChild(div); // adding to div
	return filler; // once returned is done
}


function createStory(filler) {
	let div = document.createElement("div"); //creates new div
	div.className = "theStory"; //class name story
	div.innerHTML = `<h3>The Story </h3>
  <p>${filler.bio}</p>`
  ;
	wrapper.appendChild(div); //adds div to wrapper
	return filler; // once returned is done
}


function createPicture(filler) { // build out photo avatar
	let div = document.createElement("div"); // creates new div (is redundant)
	div.className = "pictureAvatar";
	div.innerHTML = `<img src=${filler.avatar_url}>`;
	wrapper.appendChild(div); //adds div to wrapper
	return filler; //once returned its done
}



// run below callstack in order to build, fill and add divs

fetch(url)       // .then x 6 in order
	.then(readData) //good reads data from json
	.then(makeProf) // good filler established
	.then(createTitle) //good builds title header
	.then(createTheBasics) //good builds basics + spans with template 1st column
	.then(createStory) //good builds story + p in 2cnd column
	.then(createPicture) //good builds pic in 3rd column
