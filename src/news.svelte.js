export let currentHeadline = $state({ text: undefined });

let genericHeadlines = [
  {
    headline: "Tubip mention by acclaimed celebrity sparks tubip craze",
    priceMultiplier: 1.2,
  },
  {
    headline: "Tubip companies on the rise. Bubble?",
    priceMultiplier: 0.8,
  },
];

function fetchRandomHeadline(source) {
  return source[Math.floor(Math.random() * source.length)];
}

function updateNews() {
  const fetchNewHeadline =
    Math.random() > 0.5 || currentHeadline.text == undefined;
  if (fetchNewHeadline == true) {
    currentHeadline.text = fetchRandomHeadline(genericHeadlines);
  }
}
