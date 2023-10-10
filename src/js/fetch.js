const username = 'RajuFGC'
const direction = 'desc'
const repositoriesContainer = document.querySelector('.repositoreis--js')

fetch(`https://api.github.com/users/${username}/repos?direction=${direction}`)
.then(response => response.json())
.then(response => {
  for (let repository of response) {
    const {name, html_url} = repository; 
    const element = `<li><a href="${html_url}">${name}</a></li>`;
    repositoriesContainer.insertAdjacentHTML('beforeend', element)
    }
})
.catch((e) => console.log(e))