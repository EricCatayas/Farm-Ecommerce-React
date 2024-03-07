export const createAction = (type, payload) => {
  if (payload === undefined) {
    return { type };
  } else {
    return { type, payload };
  }
};
