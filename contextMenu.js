function search(string,q) {
	var reg = /&/;
	text = string.selectionText.replace(reg, "");
  chrome.tabs.create({  
    url: "https://play.spotify.com/search/results/" + encodeURIComponent(text)
  });           
}

chrome.contextMenus.create({
	onclick: search,
	title: "Search: %s", 
	contexts:["selection"]
  
});