const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');
const btnEl = document.getElementById('btn');

// Get a random quote from the anime quote API
const getQuote = async () => {
  try {
    const response = await fetch('https://animechan.vercel.app/api/quotes');
    const data = await response.json();
    const randomIndex = Math.floor(Math.random() * data.length);
    const quote = data[randomIndex];

    quoteEl.innerText = quote.quote;
    authorEl.innerText = quote.author;
  } catch (err) {
    console.error(err);
  }
};

// Initially get a quote
getQuote();

// When the button is clicked, get a new quote
btnEl.addEventListener('click', getQuote);