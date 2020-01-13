const url = 'https://www.omdbapi.com/?apikey=e4db3ced&t=';
const buttonElement = document.querySelector('#search-btn');
const inputElement = document.querySelector('#inputMovie');
const showElement = document.querySelector('#showData');
const showElement2 = document.querySelector('#showData2');

let ajax = new XMLHttpRequest();

ajax.onreadystatechange = function () {
    if (ajax.readyState === 4) {
        if (ajax.status === 200) {
            
            showElement.innerHTML = ajax.responseText;
            if (ajax.responseText === '{"Response":"False","Error":"Movie not found!"}') {
                alert('Filmas nerastas!')
            }
        }
        else {
            alert (ajax.statusText);
        }
    }
};

buttonElement.onclick = function (event) {
    event.preventDefault();
    const value = inputElement.value;
    const newUrl = url + value;
    console.log('Value: ', value);

    fetch(newUrl)
        .then((res) => res.json())
        .then((data) =>
            console.log('Data: ', data))
        //.then((data) =>
            //generateHTMLTable(data))
         .catch((error) => {
            console.log('Error: ', error )
            });

    ajax.open('GET', newUrl);
    ajax.send();
};

//Title, Plot, imdbRating, Runtime, Director isvesti i lentele (table)
/*function generateHTMLTable(data) {
    let str = "";
    for(let row=0; row<data.length; row++) {
        str += "<tr>";
        for(let col=0; col<data[row].length; col++)
            str += "<td>" + data[row][col].name + "</td>";
        str += "</tr>"; 
    }
    let table = showElement2;
    table.innerHTML = str;
};*/

