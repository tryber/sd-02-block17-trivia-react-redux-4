const triviaTokenURL = 'https://opentdb.com/api_token.php?command=request';
const triviaQuestionsURL = 'https://opentdb.com/api.php?amount=5&token='

const getQuestions = (token) => (
  fetch(`${triviaQuestionsURL}${token}`)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    )));

const generateToken = () => (
  fetch(triviaTokenURL)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
        .then((data) => getQuestions(data.token))
    )));

export default generateToken;
