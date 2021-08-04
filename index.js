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
  message.textContent=`${e.target.parentNode.firstChild.textContent} was deleted`
  revealMessage(e)
}

function crossOffMovie(e){
  e.target.classList.toggle("checked")

  if(e.target.classList.contains("checked")){
    message.textContent=`${e.target.parentNode.firstChild.textContent} was watched!`
    
  } else {
    message.textContent=`${e.target.parentNode.firstChild.textContent} added back!`}
 revealMessage(e)
}

function revealMessage(){
  message.classList.remove("hide")
  setTimeout(()=>{message.classList.toggle("hide")}, 1000)

}

document.querySelector('form').addEventListener('submit', addMovie)