export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_AGE = 'SET_USER_AGE';
export const GET_PROFILE = 'GET_PROFILE';

const API_URL = 'https://mocki.io/v1/34009842-9c95-4c2c-9f0a-a63e70a35f62';

export const setName = (name) => (dispatch) => {
    dispatch({
        type: SET_USER_NAME,
        payload: name,
    });
};

export const setAge = (age) => (dispatch) => {
    dispatch({
        type: SET_USER_AGE,
        payload: age,
    });
};

export const getProfile = () => {
    try {
        return async (dispatch) => {
            const result = await fetch(API_URL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const json = await result.json();
            if (json) {
                dispatch({
                    type: GET_PROFILE,
                    payload: json,
                });
            } else {
                console.log('Unable to fetch');
            }
        };
    } catch (error) {
        console.log(error);
    }
};
