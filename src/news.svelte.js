export let currentHeadline = $state({
  text: "It's a new dawn for tubip manufacturing!",
});

let genericHeadlines = [
  {
    headline: "Acclaimed human's tubip mention sparks purchasing craze",
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

export function updateNews() {
  const fetchNewHeadline =
    Math.random() > 0.5 || currentHeadline.text == undefined;
  if (fetchNewHeadline == true) {
    currentHeadline.text = fetchRandomHeadline(genericHeadlines).headline;
  }
}
