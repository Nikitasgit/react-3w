import { ADD_DRAGON, SET_DRAGON } from "../constants/action";

const initialState = {
  dragons: [],
  dragon: {
    name: "",
    id: "",
  },
  error: "",
  id: 0,
};

const dragonReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DRAGON:
      if (
        state.dragons.find(
          (dragon) =>
            dragon.name.toLowerCase() === state.dragon.name.toLowerCase()
        )
      ) {
        return {
          ...state,
          error: "Ce nom existe déjà",
        };
      }
      if (
        state.dragon.name.length < 2 ||
        /[^a-zA-Z0-9]/.test(state.dragon.name)
      ) {
        return {
          ...state,
          error:
            "Choisissez un nom de plus de 2 charactères sans charactères spéciaux.",
        };
      }
      return {
        ...state,
        dragons: state.dragons.concat([{ ...state.dragon, id: state.id + 1 }]),
        id: state.id + 1,
        error: "",
      };
    case SET_DRAGON:
      return {
        ...state,
        dragon: {
          name: action.payload,
        },
      };
    default:
      return state;
  }
};

export default dragonReducer;
