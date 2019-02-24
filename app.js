//event listener

document.getElementById('input').addEventListener('submit', function(e){
    //display the results portion of the UI
    //if there's something in local storage this should be displayed to start with
    //probably check outside of this function?
    results.style.display = 'block';
    grabData();

    e.preventDefault();

});


function grabData(){    
    //grab all variables
    const title = document.getElementById('bookTitle').value;
    const author = document.getElementById('bookAuthor').value;

    const position = parseInt(document.getElementById('listPosition').value);
    
    //validate number, make sure it's not less than zero
    if(position <= 0){
        alert("Please enter a number higher than 0.");
    }
    
    //find a way to allow input of multiple tags
    const tags = document.getElementById('tags').value;

    //get UI 
    const results = document.getElementById('results');

    //UL Items
    const titleUL = document.getElementById('titleList');
    const authorUL = document.getElementById('authorList');
    const positionUL = document.getElementById('positionList');
    const genreUL = document.getElementById('genreList');
    
    //display everything in a list, add items

    /* 
    const titleLI = document.createElement('li');
    titleLI.appendChild(document.createTextNode(title));
    titleUL.appendChild(titleLI);

    //display author
    const authorLI = document.createElement('li');
    authorLI.appendChild(document.createTextNode(author));
    authorUL.appendChild(authorLI);

    //display position
    const positionLI = document.createElement('li');
    positionLI.appendChild(document.createTextNode(position));
    positionUL.appendChild(positionLI);

    //display genre
    const genreLI = document.createElement('li');
    genreLI.appendChild(document.createTextNode(tags));
    genreUL.appendChild(genreLI);
    */
   appendList(titleUL, title);
   appendList(authorUL, author);
   appendList(genreUL, tags);
   appendList(positionUL, position);
    
}

function appendList(UL, text){
    //write function to display all four of the elements
    let LI = document.createElement('li');
    LI.appendChild(document.createTextNode(text));
    UL.appendChild(LI);
}