import BASE_URL from "../urls";


function getBooks(handler) {
  fetch(`${BASE_URL}`)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      handler(result.items);
      //   console.log(result.items[0].volumeInfo);
    })
    .catch((e) => console.log(e));
}

export default getBooks;
