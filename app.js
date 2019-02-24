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
    
    //validate number, make sure it's not less than zero
    if(position <= 0){
        alert("Please enter a number higher than 0.");
    }
    
    //find a way to allow input of multiple tags
    const tags = document.getElementById('tags').value;

    //get UI 
    const results = document.getElementById('results');
    const card = document.querySelector('.card');

    //display the results portion of the UI
    //if there's something in local storage this should be displayed to start with, probably check outside of this function?

    results.style.display = 'block';
    
    //display everything in a list
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(title));

    console.log(li);

    // results.insertBefore(createList, card);

    // const listItem = document.createElement('li');
    // createList.insertBefore(listItem, );
    
}