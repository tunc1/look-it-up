var search=info=>
{
    url="https://dictionary.cambridge.org/dictionary/english/"+info.selectionText;
    chrome.tabs.create({"url":url});
};
chrome.contextMenus.create(
    {
        title:"Look it Up",
        contexts:["selection"],
        onclick: search
    }
)