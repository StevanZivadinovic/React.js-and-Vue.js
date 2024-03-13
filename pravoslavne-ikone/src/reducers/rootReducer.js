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
    console.log('akcija');

    return state;
  }
  if (action.type === 'VALIDATION_TEXTAREA_TRUE') {
    console.log('truetextareaTRUE');
    console.log(state.status.textarea);
    return {
      status: {
        ...state,
        textarea: true,
      },
    };
  }

  if (action.type === 'VALIDATION_TEXTAREA_FALSE') {
    console.log('truetextareaFALSE');
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
