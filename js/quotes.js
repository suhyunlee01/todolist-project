const quotesInnertextQuotes = document.querySelector("#quotes-innertext_quotes");
const quotesInnertextAuthors = document.querySelector("#quotes-innertext_authors");
const quotes = [
    {
        quote:"Always remember that you are absolutely unique. Just like everyone else.",
        author:"Margaret Mead"
    },
    {
        quote:"Don't judge each day by the harvest you reap but by the seeds that you plant.",
        author:"Robert Louis Stevenson"
    },
    {
        quote:"Do not go where the path may lead, go instead where there is no path and leave a trail.",
        author:"Ralph Waldo Emerson"
    },
    {
        quote:"If life were predictable it would cease to be life and be without flavor.",
        author:"Eleanor Roosevelt"
    },
    {
        quote:"In the end, it's not the years in your life that count. It's the life in your years.",
        author:"Abraham Lincoln"
    },
    {
        quote:"You will face many defeats in life, but never let yourself be defeated.",
        author:"Maya Angelou"
    },
    {
        quote:"Never let the fear of striking out keep you from playing the game.",
        author:"Babe Ruth"
    },
    {
        quote:"The only impossible journey is the one you never beginde",
        author:"Tony Robbins"
    },
    {
        quote:"Only a life lived for others is a life worthwhile.",
        author:"Albert Einstein"
    },
    {
        quote:"The purpose of our lives is to be happy.",
        author:"Dalai Lama"
    },
];

function randomQuotes(){
    const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
    quotesInnertextQuotes.innerText = todaysQuote.quote;
    quotesInnertextAuthors.innerText = todaysQuote.author;
}

randomQuotes();
setInterval(randomQuotes,5000);