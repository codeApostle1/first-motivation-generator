const button = document.querySelector('#generate');
const quote = document.querySelector('#quote');
const button2 = document.querySelector('#funny');
const button3 = document.querySelector('#bible')




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
    "I'm not arguing, I'm just explaining why I'm right.",
    "I’m on a seafood diet. I see food and I eat it.",
    "Why don’t scientists trust atoms? Because they make up everything!",
    "My bed is a magical place where I suddenly remember everything I forgot to do.",
    "I told my computer I needed a break, and now it won’t stop sending me Kit-Kats.",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "I don’t need a hair stylist, my pillow gives me a new hairstyle every morning.",
    "I used to think I was indecisive, but now I’m not so sure.",
    "If you think nobody cares if you’re alive, try missing a couple of payments.",
    "I tried to be normal once. Worst two minutes of my life.",
    "Behind every great man is a woman rolling her eyes.",
    "Some people graduate with honors, I am just honored to graduate.",
    "I’m not lazy, I’m just on energy-saving mode.",
    "Common sense is like deodorant. The people who need it most never use it.",
    "I told my wife she should embrace her mistakes. She gave me a hug."
    
];

const bibleQuotes = [
    "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope. -Jeremiah 29:11",
    "I can do all things through him who strengthens me. -Philippians 4:13",
    "Trust in the Lord with all your heart, and do not lean on your own understanding. -Proverbs 3:5",
    "The Lord is my strength and my shield; in him my heart trusts, and I am helped; my heart exults, and with my song I give thanks to him. -Psalm 28:7",
    "But they who wait for the Lord shall renew their strength; they shall mount up with wings like eagles; they shall run and not be weary; they shall walk and not faint. -Isaiah 40:31",
    "Be strong and courageous. Do not fear or be in dread of them, for it is the Lord your God who goes with you. He will not leave you or forsake you. -Deuteronomy 31:6",
    "The Lord is my shepherd; I shall not want. -Psalm 23:1",
]

function showQuote(quotes) {
    const container = document.querySelector('#quoteContainer');
    container.style.display = 'flex'
    const random = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[random];
}

button.addEventListener('click', () => showQuote(normalQuotes));

button2.addEventListener('click', ()=> showQuote(funnyQuotes));

button3.addEventListener('click', ()=> showQuote(bibleQuotes))

