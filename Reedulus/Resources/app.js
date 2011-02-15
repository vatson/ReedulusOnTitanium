Titanium.UI.setBackgroundColor('#000');

var searchBar = Titanium.UI.createSearchBar({ hintText:'input your question', height: 60, showCancel:true });

searchBar.addEventListener('return', function(e)
{
    if( e.value.substr(-1, 1) == '?' ) {
        Titanium.UI.createAlertDialog({title:'Answer', message:'Yep, yep, yep!' }).show();
	    searchBar.blur();
    } else {
        Titanium.UI.createAlertDialog({title:'Wrong question', message:'Ouch. You gave wrong question.' }).show();
	    searchBar.blur();
    }
});

var window = Titanium.UI.createWindow({ backgroundColor:'#999' });

window.add(searchBar);
window.open();