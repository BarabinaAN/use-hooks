const getName = (id) => {
   return fetch(`https://swapi.dev/api/planets/${id}`)
      .then(res => res.json())
      .then(data => data); 
}

export default getName