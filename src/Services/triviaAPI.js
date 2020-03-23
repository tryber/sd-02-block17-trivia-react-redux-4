const triviaTokenURL = 'https://opentdb.com/api_token.php?command=request';
const triviaQuestionsURL = 'https://opentdb.com/api.php?amount=5&token='

const generateToken = () => (
  fetch(`${triviaTokenURL}`, { method: 'GET' })
  .then(res => res.json())
  .then((response) => (
    response
      .json()
      .then((json) => (response.ok ? getQuestions(data.token) : Promise.reject(json)))
  ))
);

const getQuestions = (token) => (
  fetch(`${triviaQuestionsURL}${token}`, { method: 'GET' })
  .then(res => res.json())
  .then((response) => (
    response
      .json()
      .then((json) => (response.ok ? console.log(json) : Promise.reject(json)))
  ))
);

export default triviaAPI