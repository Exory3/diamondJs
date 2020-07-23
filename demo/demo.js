const picturesList = [
	"https://i.imgur.com/e6Ij0Bl.jpg",
	"https://i.imgur.com/pMhIsqv.jpg",
	"https://i.imgur.com/PIPi4C4.jpg",
	"https://i.imgur.com/8OME5Af.jpg",
	"https://i.imgur.com/ia8yzTa.jpg",
	"https://i.imgur.com/W0rqy3I.jpg",
	"https://i.imgur.com/OTFD2Hx.jpg",
	"https://i.imgur.com/olNcEUt.jpg",
	"https://i.imgur.com/SBXwpPg.png"
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
lightboxImage.on("click", () => lightbox.attr('style', 'display: none'));

for (let i = 0; i < items.length; i++) {
	items[i].style.backgroundImage = `url(${picturesList[i]})`;
	items.eq(i).on("click", () => {
		lightboxImage.attr("src", picturesList[i]);
		lightbox.attr('style', 'display: block');
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