// background.js
chrome.contextMenus.create({
  id: "countWords",
  title: "Count Selected Words",
  contexts: ["selection"],
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "countWords" && info.selectionText) {
    const wordCount = info.selectionText.trim().split(/\s+/).length;
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: (count) => {
        alert(`Selected word count: ${count}`);
      },
      args: [wordCount],
    });
  }
});
