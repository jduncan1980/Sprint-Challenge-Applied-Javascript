// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

function CardMaker(data) {
	const cardsContainer = document.querySelector('.cards-container');
	//Create Elements

	const card = document.createElement('div');
	const headline = document.createElement('div');
	const author = document.createElement('div');
	const imgContainer = document.createElement('div');
	const img = document.createElement('img');
	const authorName = document.createElement('span');

	//Append Elements
	cardsContainer.appendChild(card);
	card.appendChild(headline);
	card.appendChild(author);
	author.appendChild(imgContainer);
	imgContainer.appendChild(img);
	card.appendChild(authorName);

	//Add Classes
	card.classList.add('card');
	headline.classList.add('headline');
	author.classList.add('author');
	imgContainer.classList.add('img-container');

	//Add Content
	headline.textContent = data.headline;
	img.src = data.authorPhoto;
	authorName.textContent = `By ${data.authorName}`;

	return card;
}

axios
	.get(
		'https://cors-anywhere.herokuapp.com/https://lambda-times-backend.herokuapp.com/articles'
	)
	.then((response) => {
		for (let item in response.data.articles) {
			response.data.articles[item].forEach((article) => {
				CardMaker(article);
			});
		}
	});
