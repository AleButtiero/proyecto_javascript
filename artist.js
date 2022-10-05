
// ACÁ CONSULTO CON FETCH ALGUNOS ARTISTAS DESDE LA API Y LOGRO TRAER LOS DATOS A LA CONSOLA.

fetch ("https://theaudiodb.com/api/v1/json/2/search.php?s=bjork")
   .then((data) => data.json())
   .then((json) => console.log (json.artists[0].strArtist,json.artists[0].strBiographyES))


fetch ("https://theaudiodb.com/api/v1/json/2/search.php?s=adele")
   .then((data) => data.json())
   .then((json) => console.log (json.artists[0].strArtist,json.artists[0].strBiographyES))


fetch ("https://theaudiodb.com/api/v1/json/2/search.php?s=metallica")
   .then((data) => data.json())
   .then((json) => console.log (json.artists[0].strArtist,json.artists[0].strBiographyES))








//ACÁ LO TRAIGO AL HTML  (la API solo nos limita para traer a COLDPLAY// lo dice en la documentación ya que no es una api libre)

const lista = document.getElementById("lista")



fetch ("https://theaudiodb.com/api/v1/json/2/search.php?s=coldplay")
.then((res) => res.json())
.then((data) => {
   console.log("{artists: [{strBiographyES}]} =", data)
   let {artists } = data
   console.log("[{coldplayData}] = ", artists)
   artists.forEach((info) => {
      const li = document.createElement("li")
      li.innerHTML = `
      <p class="info__artist"> ${info.strArtist}</p>
      <p> ${info.strBiographyES}</p>
      <p>Año de formación: ${info.intFormedYear}</p>
      <p>Género: ${info.strStyle}</p>
      <img src="${info.strArtistThumb}">

      `
      lista.append(li)
   })

})








