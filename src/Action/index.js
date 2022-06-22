export const increment = (no) => {
  return {
    type: "INCREMENT",
    payload: no,
  };
};
export const decrement = (no) => {
  return {
    type: "DECREMENT",
    payload: no,
  };
};
export const signIn = () => {
  return {
    type: "SIGN_IN",
  };
};
