// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

function TabMaker(data) {
	const topics = document.querySelector('.topics');

	const tab = document.createElement('div');

	tab.classList.add('tab');
	tab.textContent = data;
	topics.appendChild(tab);

	return tab;
}

axios
	.get(
		'https://cors-anywhere.herokuapp.com/https://lambda-times-backend.herokuapp.com/topics'
	)
	.then((response) => {
		response.data.topics.forEach((data) => {
			TabMaker(data);
		});
	});
