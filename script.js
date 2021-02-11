const quotes = [
  {
    name: "Malala Yousafzai",
    text: "When the whole world is silent, even one voice becomes powerful.",
  },
  {
    name: "Rosa Parks",
    text: "Knowing what must be done does away with fear.",
  },
  {
    name: "Ruth Bader Ginsberg",
    text:
      "Women will only have true equality when men share with them the responsibility of bringing up the next generation.",
  },
  {
    name: "Michelle Obama",
    text:
      "There is power in allowing yourself to be known and heard, in owning your unique story, in using your authentich voice.",
  },
  {
    name: "Eleanor Roosevelt",
    text:
      "Do what you fell in your heart to be right - for you will be critized anyway.",
  },
];

const quotesBtn = document.querySelector('#quotesBtn');
const quote = document.querySelector('#quote');
const author = document.querySelector('#quoteAuthor');

quotesBtn.addEventListener("click", getQuotes);

function getQuotes() {
  let number = Math.floor(Math.random()*quotes.length);
  quote.innerHTML = quotes[number].text;
  author.innerHTML = quotes[number].name;
}
