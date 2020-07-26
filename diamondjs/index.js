const picturesList = [
	{
		url: "https://i.imgur.com/e6Ij0Bl.jpg",
		alt: "girls are like glass of wine"
	},
	{
		url: "https://i.imgur.com/pMhIsqv.jpg",
		alt: "cars > chicks"
	},
	{
		url: "https://i.imgur.com/PIPi4C4.jpg",
		alt: "lofi ski-fi wanna be"
	},
	{
		url: "https://i.imgur.com/8OME5Af.jpg",
		alt: "no heels no fun"
	},
	{
		url: "https://i.imgur.com/ia8yzTa.jpg",
		alt: "wish i could play with japanese kids"
	},
	{
		url: "https://i.imgur.com/W0rqy3I.jpg",
		alt: "altText"
	},
	{
		url: "https://i.imgur.com/OTFD2Hx.jpg",
		alt: "altText"
	},
	{
		url: "https://i.imgur.com/olNcEUt.jpg",
		alt: "altText"
	},
	{
		url: "https://i.imgur.com/SBXwpPg.png",
		alt: "altText"
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
let textField = $("#alt-text");
lightbox.on("click", () => lightbox[0].classList.remove("visible"));
let currentImageIndex;

$(".nav-button").click((e)=> {
	e.stopPropagation();
	console.log(e.target);
	if (e.target.classList.contains("nav-button-next")) {
		currentImageIndex = currentImageIndex === picturesList.length-1 ? 0 : currentImageIndex + 1;
	} else if (e.target.classList.contains("nav-button-prev")) {
		currentImageIndex = currentImageIndex ===  0 ? picturesList.length-1 : currentImageIndex - 1;
	}
	lightboxImage.attr("src", picturesList[currentImageIndex].url)
	textField.html(picturesList[currentImageIndex].alt)

})

lightboxImage.click((e) => {
	e.stopPropagation();
	console.log(currentImageIndex)
})

for (let i = 0; i < items.length; i++) {
	items[i].style.backgroundImage = `url(${picturesList[i].url})`;
	items.eq(i).on("click", () => {
		currentImageIndex = i;
		lightboxImage.attr("src", picturesList[i].url);
		// lightbox.attr('style', 'display: block');
		console.log(lightbox[0].classList.add("visible"))
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