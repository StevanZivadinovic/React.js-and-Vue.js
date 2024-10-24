let initialState = {
  status: {
    textarea: false,
    phone: false,
    validationInput: false,
    validation: false,
    validationInputSubject: false,
  },
};

const rootReducer = (state = initialState, action) => {
  if (action.type === 'WHOLE_STATE_TO_FALSE') {
    return state;
  }
  if (action.type === 'VALIDATION_TEXTAREA_TRUE') {
    return {
      status: {
        ...state,
        textarea: true,
      },
    };
  }

  if (action.type === 'VALIDATION_TEXTAREA_FALSE') {
    return {
      status: {
        ...state,
        textarea: false,
      },
    };
  }

  return state;
};

export default rootReducer;
