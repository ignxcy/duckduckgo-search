// github.com/jishanshaikh4/brave-search
// License: MIT
// v1.0.1, last updated: May 2022

chrome.omnibox.onInputEntered.addListener((text) => {
  var newURL =
    "https://duckduckgo.com/?q=" +
    encodeURIComponent(text);
  chrome.tabs.create({ url: newURL });
});
