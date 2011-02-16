Titanium.UI.setBackgroundColor('#000');

var searchBar = Titanium.UI.createSearchBar({ hintText:'input your question', height: 40, top: 0, showCancel:true });

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

searchBar.addEventListener('cancel', function(e){
    Titanium.API.info('search bar:cancel received');
//    Ti.API.debug(e);
    searchBar.value = '';
    searchBar.blur();
});

var window = Titanium.UI.createWindow({ backgroundColor:'#999' });




var tableView;
var books;
var data = [];

books = [
    {
        author: 'Kent Beck',
        title: 'Extreme programming explained: embrace change',
        desc: 'You may love XP, or you may hate it, but "Extreme Programming Explained" will force you to take a fresh look at how you develop software. ',
        thumbnail: 'http://bks8.books.google.com/books?id=G8EL4H4vf7UC&printsec=frontcover&img=1&zoom=5&edge=curl&sig=ACfU3U2YQ3tLJr6ifDbb7AY4NfI3RWpCRw&source=gbs_gdata'
    },
    {
        author: 'Kent Beck',
        title: 'Test-driven development: by example',
        desc: 'Clean code that works--now. This is the seeming contradiction that lies behind much of the pain of programming.',
        thumbnail: 'http://bks9.books.google.com/books?id=gFgnde_vwMAC&printsec=frontcover&img=1&zoom=5&edge=curl&h=75&w=60'
    }
]



renderBooksList(books, tableView);
tableView = Ti.UI.createTableView({data: data, top: 40});

window.add(tableView);

function renderBooksList(books, tableView) {
    for(bookIndex in books) {
        var row = Ti.UI.createTableViewRow();
        row.selectedBackgroundColor = '#fff';
        row.height = 100;
        row.top = 10;
        row.className = 'datarow';
        row.clickName = 'row';

        var thumbnail = Ti.UI.createImageView({
            image: books[bookIndex].thumbnail,
            height: 75,
            width: 60,
            top: 10,
            left: 10
        });

        row.add(thumbnail);

        var fontSize = 16;

        var comment = Ti.UI.createLabel({
            color:'#222',
            font:{fontSize:fontSize,fontWeight:'normal', fontFamily:'Arial'},
            left:70,
            top:21,
            height:50,
            width:200,
            clickName:'comment',
            text:'Got some fresh fruit, conducted some business, took a nap'
        });
        row.add(comment);

        data.push(row);
    }
}


tableView.search = searchBar;
tableView.top = 0;

window.add(searchBar);
window.open();

