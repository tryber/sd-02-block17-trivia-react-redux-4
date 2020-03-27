const triviaTokenURL = 'https://opentdb.com/api_token.php?command=request';
const triviaQuestionsURL = 'https://opentdb.com/api.php?amount=5';

function treatResponse(param) {
  return (
    param
      .json()
      .then((json) => (param.ok ? Promise.resolve(json) : Promise.reject(json)))
  )
}

export const getQuestions = (token, category, difficulty, type) => {
  if (difficulty !== '') {
    fetch(`${triviaQuestionsURL}&difficulty=${difficulty}&token=${token}`)
      .then((response) => (
        treatResponse(response)
      ))
  }
  if (difficulty !== '' && category !== '') {

  }
}

export const generateToken = () => (
  fetch(triviaTokenURL)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
        .then((data) => (data.token))
    )));
