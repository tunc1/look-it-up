const ID="look-it-up";
browser.contextMenus.create({
	id: ID,
	title:"Look it Up",
	contexts: ["selection"]
});
const contextClick=(info,tab)=>
{
	if(info.menuItemId==ID)
	{
		url="https://dictionary.cambridge.org/dictionary/english/"+info.selectionText;
		browser.tabs.create({"url":url});
	}
};
browser.contextMenus.onClicked.addListener(contextClick);