// This is a modified fork of https://github.com/jishanshaikh4/brave-search!!!

chrome.omnibox.onInputEntered.addListener((text) => {
  var newURL =
    "https://duckduckgo.com/?q=" +
    encodeURIComponent(text);
  chrome.tabs.update({ url: newURL });
});