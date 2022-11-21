
if (localStorage.length == 0){
    container_of_jokes = document.getElementById('maincontainerforjoke').innerHTML += `<div><b><u><i><h1>YOU HAVE NOT GIVEN ANY JOKES.</h1></i></u></b></div`
}else{
    for (i = 0; i < localStorage.length; i++) {
        joke = localStorage.key(i)// getting the i no. key
        joke_time = localStorage.getItem(joke)//getting value of key i
        container_of_jokes = document.getElementById('maincontainerforjoke').innerHTML += `<div class = 'user_jokes'><div><p>JOKE => ${joke}</p></div><div><p>TIME OF SUBMISSION => ${joke_time}</p></div></div><br>`//basically adding a two divs, one for joke and another for time in main div
    
    }
}
