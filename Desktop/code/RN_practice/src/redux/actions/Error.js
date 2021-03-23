
export const errMess = (statusErr) => ({
    type: 'ADD_ERROR_MESSAGE',
    payload: { statusErr }
  });

export const deleteErrMess = () => ({
  type: 'DELETE_ERROR_MESSAGE',
})
