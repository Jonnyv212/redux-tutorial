export function getName(name){
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: "GET_NAME",
                payload: name
            });
        }, 2000)
    }
}

export function setAge(age){
    return {
        type: "SET_AGE",
        payload: age
    }
}