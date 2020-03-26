const triviaCategory = 'https://opentdb.com/api_category.php';

const getCategory = () => (
  fetch(`${triviaCategory}`)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    )));


export default getCategory;
