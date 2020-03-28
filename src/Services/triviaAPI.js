const triviaTokenURL = 'https://opentdb.com/api_token.php?command=request';
const triviaQuestionsURL = 'https://opentdb.com/api.php?amount=5';

export const getQuestions = (token, category, difficulty, type) => {
  const andCategory = (category) ? `&category=${category}` : '';
  const andDifficulty = (difficulty) ? `&difficulty=${difficulty}` : '';
  const andType = (type) ? `&type=${type}` : '';
  return fetch(`${triviaQuestionsURL}${andCategory}${andDifficulty}${andType}&token=${token}`)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ));
};

export const generateToken = () => (
  fetch(triviaTokenURL)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
        .then((data) => (data.token))
    )));
