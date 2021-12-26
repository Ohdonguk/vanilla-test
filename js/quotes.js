const quotes = [
  {
    quote: "aaaaaaa",
    author: "oh",
  },
  {
    quote: "bbbbbb",
    author: "oh",
  },
  {
    quote: "cccccc",
    author: "oh",
  },
  {
    quote: "dddddd",
    author: "oh",
  },
  {
    quote: "eeeeee",
    author: "oh",
  },
  {
    quote: "ffffff",
    author: "oh",
  },
  {
    quote: "gggggg",
    author: "oh",
  },
  {
    quote: "hhhhhh",
    author: "oh",
  },
  {
    quote: "iiiiii",
    author: "oh",
  },
  {
    quote: "jjjjjj",
    author: "oh",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
