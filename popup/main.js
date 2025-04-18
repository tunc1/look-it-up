const urlInput=document.getElementById("urlInput");
const updateURL=()=>
{
	browser.storage.local.set({dictionaryURL:urlInput.value});
};
document.getElementById("updateURL").onclick=updateURL;
browser.storage.local.get("dictionaryURL").then(data=>{
	if(data.dictionaryURL)
		urlInput.value=data.dictionaryURL;
});