var links = document.getElementsByTagName("a");
var urls = [];
for (var i = 0; i < links.length; i++) {
  urls.push(links[i].href);
}
alert(urls.join("\n"));
