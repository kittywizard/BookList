//event listener

document.getElementById('input').addEventListener('submit', function(e){
    grabData();

    e.preventDefault();

});


function grabData(){
    //grab all variables
    const title = document.getElementById('bookTitle').value;
    const author = document.getElementById('bookAuthor').value;
    const position = parseInt(document.getElementById('listPosition').value);
    //find a way to allow input of multiple tags
    const tags = document.getElementById('tags').value;

    //get UI 
    const results = document.getElementById('results');
    const card = document.querySelector('.card');
    
    //display everything in an unordered list
    // const createList = document.createElement('ul');
    // results.insertBefore(createList, card);

    // const listItem = document.createElement('li');
    // createList.insertBefore(listItem, );
    
}