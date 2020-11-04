const form = document.querySelector('#searchForm')
form.addEventListener('submit', async function (e) {
  e.preventDefault()
  const searchTerm = form.elements.query.value; //saves what was searched into a variable
  //below way does work here but might be difficult when we have multiple things etc. or if searchTerm is 2 words so can just create a config variable
  //const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`)
  const config = { params: {q: searchTerm}}
  const res = await axios.get(`http://api.tvmaze.com/search/shows`, config)
  makeImages(res.data)
  form.elements.query.value = ""
})

const makeImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement('img')
      console.log(result)
      img.src = result.show.image.medium; //.show being the show property coming from the API
      document.body.append(img)
    }
    
  }
} 