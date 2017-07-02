document.querySelector("form.remote").addEventListener("submit", function(event){
  event.preventDefault(); // Stop normal HTML form submission
  document.querySelector(".response").textContent = `...submitting`


  const name = document.querySelector("input[name='name']").value;

  fetch("/processFetch", {
    method: "POST",
    body: JSON.stringify({
      name: name
    }),
    headers: {
      'content-type': "application/json"
    }
  })
  .then( function(response) {
    return response.json()
  })
  .then( function(json){

    console.log("json received", json);
    document.querySelector(".response").textContent = `name received from node: ${json.name}`

  })
  .catch( function(error){
    console.log("error received", error);
    document.querySelector(".response").textContent = `Error received: ${error}`
  })


})
