/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function Carousel() {
	const carouselContainer = document.querySelector('.carousel-container');
	//Create Elements
	const carousel = document.createElement('div');
	const left = document.createElement('div');
	const img1 = document.createElement('img');
	const img2 = document.createElement('img');
	const img3 = document.createElement('img');
	const img4 = document.createElement('img');
	const right = document.createElement('div');
	//Set Content
	left.textContent = '<';
	right.textContent = '>';
	img1.src = './assets/carousel/mountains.jpeg';
	img2.src = './assets/carousel/computer.jpeg';
	img3.src = './assets/carousel/trees.jpeg';
	img4.src = './assets/carousel/turntable.jpeg';

	//Set Content
	left.textContent = '<';
	right.textContent = '>';
	img1.src = './assets/carousel/mountains.jpeg';
	img2.src = './assets/carousel/computer.jpeg';
	img3.src = './assets/carousel/trees.jpeg';
	img4.src = './assets/carousel/turntable.jpeg';

	//Append Elements
	carouselContainer.appendChild(carousel);
	carousel.appendChild(left);
	carousel.appendChild(img1);
	carousel.appendChild(img2);
	carousel.appendChild(img3);
	carousel.appendChild(img4);
	carousel.appendChild(right);

	//Classes
	carousel.classList.add('carousel');
	left.classList.add('left-button');
	right.classList.add('right-button');

	//Event Listeners
	const imgArray = [img1, img2, img3, img4];
	let tempImg;
	img1.classList.add('img-visible');

	right.addEventListener('click', () => {
		tempImg = imgArray.shift();
		imgArray.push(tempImg);
		imgArray[3].classList.remove('img-visible');
		imgArray[0].classList.add('img-visible');
	});

	left.addEventListener('click', () => {
		tempImg = imgArray.pop();
		imgArray.unshift(tempImg);
		imgArray[1].classList.remove('img-visible');
		imgArray[0].classList.add('img-visible');
	});

	return carousel;
}

Carousel();
