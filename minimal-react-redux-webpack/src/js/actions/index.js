export const addArticle = article => ({
  type: "ADD_ARTICLE",
  payload: article
});

export const testAction = test => (
  {
    type: "TEST",
    t: test
});
