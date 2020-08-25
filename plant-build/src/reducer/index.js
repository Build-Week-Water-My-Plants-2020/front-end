import {
    FETCHING_START, FETCHING_ERROR, 
    GET_PLANTS_SUCCESS, GET_PLANT_SUCCESS, GET_USERS_PLANTS_SUCCESS,
    POST_REG_SUCCESS, POST_LOG_SUCCESS, POST_PLANT_SUCCESS,
    PUT_USER_SUCCESS, PUT_PLANT_SUCCESS, 
    DELETE_PLANT_SUCCESS
} from '../actions'

const initialState = {
    isLoading: false,
    error: '',
    plants: [],
    plant: {},
    users: [
        {username:'Example User',
        phonenumber: '0000000000',
        password: 'password'}
    ]
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_START:
            return {
                ...state, 
                isLoading: true
            }

        case FETCHING_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }

        case GET_PLANTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                plants: action.payload
            }

        case GET_PLANT_SUCCESS: 
            return {
                ...state,
                isLoading: false,
                error: '',
                plant: action.payload
            }
    
        case POST_PLANT_SUCCESS: 
        return { 
            ...state,
            isLoading: false,
            error: '',
            plants: [...state.plants, action.payload]
        }
        
        case POST_REG_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                users: [...state.users, action.payload]
            }

        case POST_LOG_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
            }
        
        case PUT_USER_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                error: '',
                users: [...state.users.map(user => {
                    if (user.id === action.payload.id) {
                        return action.payload;
                    };
                    return user;
                })]
            };
        };
        
     

        
    }
}