import {
    START_FETCHING_PROJECT,
    ERROR_FETCHING_PROJECT,
    SUCCESS_FETCHING_PROJECT,
} from './constants';

const statusList = {
    idle: 'idle',
    process: 'process',
    success: 'success',
    error: 'error',
}

const initialState = {
    data: [],
    status: statusList.idle
};

export default function reducer(state = initialState, action) {

    switch (action.type) {

        // TODO FETCH PORTFOLIO DATA
        case START_FETCHING_PROJECT:
            return { ...state, status: statusList.process, data: [] }
        case SUCCESS_FETCHING_PROJECT:
            return { ...state, status: statusList.success, data: action.data }
        case ERROR_FETCHING_PROJECT:
            return { ...state, status: statusList.error }

        default:
            return state;
    }

}