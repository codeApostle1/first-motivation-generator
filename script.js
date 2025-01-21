const button = document.querySelector('#generate');
const quote = document.querySelector('#quote');




const normalQuotes= [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
    "The way to get started is to quit talking and begin doing. -Walt Disney",
    "Your time is limited, so don't waste it living someone else's life. -Steve Jobs",
    "If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt",
    "Life is what happens when you're busy making other plans. -John Lennon",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela"
]

const funnyQuotes = [
    "Get your facts first, then you can distort them as you please. -Mark Twain",
    "I find television very educational. Every time someone turns it on, I go in the other room and read a book. -Groucho Marx",
    "The only mystery in life is why the kamikaze pilots wore helmets. -Al McGuire",
    "The only mystery in life is why the kamikaze pilots wore helmets. -Al McGuire"
];

bibleQuotes = [
     
]

function showQuote(quotes) {
    const container = document.querySelector('#quoteContainer');
    container.style.display = 'flex'
    const random = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[random];
}

button.addEventListener('click', () => showQuote(normalQuotes));