// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
	const headerContainer = document.querySelector('.header-container');

	//Create Elements
	const headerDiv = document.createElement('div');
	const date = document.createElement('span');
	const heading = document.createElement('h1');
	const temp = document.createElement('span');

	//Add Classes
	headerDiv.classList.add('header');
	date.classList.add('date');
	temp.classList.add('temp');

	//Append Elements
	headerDiv.appendChild(date);
	headerDiv.appendChild(heading);
	headerDiv.appendChild(temp);
	headerContainer.appendChild(headerDiv);

	//Content
	date.textContent = 'SMARCH 28, 2019';
	heading.textContent = 'Lambda Times';
	temp.innerHTML = '98&deg';

	return headerDiv;
}

Header();
