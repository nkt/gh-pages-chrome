chrome.browserAction.onClicked.addListener(function (tab) {
    var parser = document.createElement('a');
    parser.href = tab.url;
    var parts = parser.pathname.split('/');
    var user = parts[1]; // 0 always empty
    var repo = parts[2];
    chrome.tabs.update(tab.id, {
        url: 'http://' + user + '.github.io/' + repo
    });
});
