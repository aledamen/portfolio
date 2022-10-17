import { createAction, createReducer } from '@reduxjs/toolkit'

export const setLanguage = createAction('SET_LANGUAGE')

const languageReducer = createReducer(
    'es',
    {
        [setLanguage]: (state, action) => action.payload,
    }
)

export default languageReducer
