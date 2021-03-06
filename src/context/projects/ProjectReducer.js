import {
  FORM_PROJECT,
  GET_PROJECTS,
  ADD_PROJECT,
  VALIDATE_FORM,
  PROJECT_SELECTED,
  DELETE_PROJECT,
  PROJECT_ERROR
} from "../../types";

/**
 * Switch reducer
 * @param state
 * @param action
 * @returns {{message: *}|{project: *}|{projects: *, project: null}|{showForm: boolean}|*|{projects: *}|{errorForm: boolean}|{errorForm: boolean, projects: *[], showForm: boolean}}
 */
export default (state, action) => {
  switch (action.type) {
    case FORM_PROJECT:
      return {
        ...state,
        showForm: true
      };

    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload
      };

    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
        showForm: false,
        errorForm: false
      };

    case VALIDATE_FORM:
      return {
        ...state,
        errorForm: true
      };

    case PROJECT_SELECTED:
      return {
        ...state,
        project: state.projects.filter( project => project._id === action.payload )
      };

    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter( project => project._id !== action.payload ),
        project: null
      };

    case PROJECT_ERROR:
      return {
        ...state,
        message: action.payload
      }

    default:
      return state
  }
}