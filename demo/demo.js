const picturesList = [
	{
		url:"https://i.imgur.com/e6Ij0Bl.jpg",
		alt:"girls are like glass of wine"},
	{
		url:"https://i.imgur.com/pMhIsqv.jpg",
		alt:"cars > chicks"
	},
	{
		url:"https://i.imgur.com/PIPi4C4.jpg",
		alt:"lofi ski-fi wanna be"
	},
	{
		url:"https://i.imgur.com/8OME5Af.jpg",
		alt: "no heels no fun"
	},
	{
		url:"https://i.imgur.com/ia8yzTa.jpg",
		alt:"wish i could play with japanese kids"
	},
	{
		url:"https://i.imgur.com/W0rqy3I.jpg",
		alt:"wish i could play with japanese kids"
	},
	{
		url:"https://i.imgur.com/OTFD2Hx.jpg",
		alt:"wish i could play with japanese kids"
	},
	{
		url:"https://i.imgur.com/olNcEUt.jpg",
		alt:"wish i could play with japanese kids"
	},
	{
		url:"https://i.imgur.com/SBXwpPg.png",
		alt:"wish i could play with japanese kids"
	},
];

for (let i = 0; i < picturesList.length; i++) {
	$(".demo").append('<a href="#" class="item"></a>');
}

$(".demo").diamonds({
	size: 200,
	gap: 2,
	hideIncompleteRow: false, // default: false
	autoRedraw: true, // default: true
	itemSelector: ".item"
});

let items = $("a");
let lightbox = $(".lightbox");
let lightboxImage = $(".lightboxImage");
let button = $("#close-button");
let textField = $("#alt-text");
button.on("click", () => lightbox.attr('style', 'display: none'));

let currentImageIndex;
lightboxImage.on("click", ()=> {
	currentImageIndex = currentImageIndex === picturesList.length ? 0 : currentImageIndex + 1;
	console.log(currentImageIndex);
	lightboxImage.attr("src", picturesList[currentImageIndex].url)
	textField.html(picturesList[currentImageIndex].alt)

})

for (let i = 0; i < items.length; i++) {
	items[i].style.backgroundImage = `url(${picturesList[i].url})`;
	items.eq(i).on("click", () => {
		currentImageIndex = i;
		lightboxImage.attr("src", picturesList[i].url);
		lightbox.attr('style', 'display: block');
		textField.html(picturesList[i].alt)
		console.log(picturesList[i].alt)
	});
};

// fetch("https://api.unsplash.com/photos/?client_id=s1tEk9HM7KpHHAirgZalHUGNra5LML9DRgXZsZYVATk")
// 	.then(response => response.json())
// 	.then(json => {
// 		let picturesList = json.map(array => array.urls.full);
// 		for (let i = 0; i < picturesList.length; i++) {
// 			$(".demo").append('<a href="#" class="item"></a>');
// 		}

// 		$(".demo").diamonds({
// 			size: 200,
// 			gap: 2,
// 			hideIncompleteRow: false, // default: false
// 			autoRedraw: true, // default: true
// 			itemSelector: ".item"
// 		});

// 		let items = $("a");
// 		let lightbox = $(".lightbox");
// 		let lightboxImage = $(".lightboxImage");
// 		lightboxImage.on("click", () => lightbox.attr('style', 'display: none'));

// 		for (let i = 0; i < items.length; i++) {
// 			items[i].style.backgroundImage = `url(${picturesList[i]})`;
// 			console.log(items.eq(i));
// 			items.eq(i).on("click", () => {
// 				lightboxImage.attr("src", picturesList[i]);
// 				lightbox.attr('style', 'display: block');
// 			});
// 		};
// 	})	