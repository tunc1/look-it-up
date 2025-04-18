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
		browser.storage.local.get("dictionaryURL").then(data=>{
			if(data.dictionaryURL)
			{
				const url=data.dictionaryURL.replace("%searchText%",info.selectionText);
				browser.tabs.create({"url":url});
			}
		});
	}
};
browser.contextMenus.onClicked.addListener(contextClick);