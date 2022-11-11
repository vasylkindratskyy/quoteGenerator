const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

// Loading Spinner Shown

const loading = function () {
  loader.hidden = false;
  quoteContainer.hidden = true;
};

// Remove Loading Spinner

const complete = function () {
  if (!loader.hidden) {
    quoteContainer.hidden = false;
    loader.hidden = true;
  }
};

// Retrieve Quote From API

loading();

// Need to use a Proxy URL to make our API call in order to avoid a CORS error
