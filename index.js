// console.log("hello world")
let message=document.querySelector('#message')

function addMovie(e){
  e.preventDefault()
  let inputField=document.querySelector('input')

  let movie=document.createElement('li')

  let movieTitle=document.createElement('span')
  movieTitle.textContent=inputField.value
  movie.appendChild(movieTitle)
movieTitle.addEventListener('click', crossOffMovie)


  let deleteBtn=document.createElement('button')
  deleteBtn.textContent="X"
  deleteBtn.addEventListener('click', deleteMovie)
  movie.appendChild(deleteBtn)




  document.querySelector('ul').appendChild(movie)

  inputField.value=""
}

function deleteMovie(e){
  e.target.parentNode.remove()
  message.textContent="message deleted"
  
}

function crossOffMovie(e){
  e.target.classList.toggle("checked")

  if(e.target.classList.contains("checked")){
    message.textContent="movie watched!"
  } else {
    message.textContent="movie added back!"}

}

document.querySelector('form').addEventListener('submit', addMovie)

