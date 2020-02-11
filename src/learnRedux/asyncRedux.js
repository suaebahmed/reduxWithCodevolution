const axios = require('axios');
const redux = require('redux');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware
const thunk = require('redux-thunk').default

const F_R='F_R';
const F_S='F_S';
const F_F='F_F';

const X=()=>{
    return{
        type: F_R
    }
}
const Y=(users)=>{
    return{
        type: F_S,
        playload: users
    }
}
const Z=(err)=>{
    return{
        type: F_F,
        playload: err
    }
}

const initState = {
    loading: false,
    users: [],
    error: ''
}

const reducer=(state=initState,action)=>{
    switch(action.type){
        case F_R:
            return{
                ...state,
                loading: true
            }
        case F_S:
            return{
                loading: false,
                users: action.playload,
                error: ''
            }
        case F_F:
            return{
                loading: false,
                users: [],
                error: action.playload
            }
        default:
            return state;
    }
}

const fetchUser = () =>{
    return (dispatch)=>{
            dispatch({type: F_R})
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res=>{
            const users = res.data.slice(0,15).map(user=>(user.id));
            // dispatch({type: F_S,playload:users})
            dispatch(Y(users))
        })
        .catch(err=>{
            const ermsg = err.message;
            dispatch({type:F_F,playload: ermsg})
        })
    }
}

const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(()=>{console.log(store.getState())});



store.dispatch(fetchUser());
