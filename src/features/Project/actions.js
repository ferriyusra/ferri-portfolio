import debounce from "debounce-promise";


import { START_FETCHING_PROJECT, SUCCESS_FETCHING_PROJECT, ERROR_FETCHING_PROJECT } from "./constants"

import { getProjects } from "../../api/project"

let debounceFetchProjects = debounce(getProjects, 2000)

export const fetchProjects = () => {
    return async (dispatch) => {
        dispatch(startFetchingProjects())
        try {
            let { data: { data } } = await debounceFetchProjects();
            // let { data: { data } } = await getProjects({});

            dispatch(successFetchingProjects({ data }))
        } catch (err) {
            dispatch(errorFetchingProjects())
        }
    }
}
export const startFetchingProjects = () => {
    return {
        type: START_FETCHING_PROJECT
    }
}

export const successFetchingProjects = ({ data }) => {
    return {
        type: SUCCESS_FETCHING_PROJECT,
        data
    }
}

export const errorFetchingProjects = () => {
    return {
        type: ERROR_FETCHING_PROJECT
    }
}