import axios from 'axios'

const initState={
    loading : false,
    posts: [],
    error: null
}
const reducer=(state=initState,action)=>{
    switch(action.type){
        case 'F_P_R':
            return {
                ...state,
                loading: true
            }
        case 'F_P_S':
            return {
                ...state,
                posts: action.payload,
                loading: true
            }
        case 'F_P_F':
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}

export const asyncA_creator=()=>{
    return (dispatch)=>{
        dispatch({type:'F_P_R'});
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            var posts=res.data.slice(0,5);
            dispatch({type:'F_P_S',payload:posts });

        }).catch(err=>{
            var msg = err
            dispatch({type:'F_P_F',payload: msg});
        })
    }
}

export default reducer;