import React,{useEffect} from 'react'
import { asyncA_creator } from '../reducer/reducer'
import { connect } from 'react-redux'

function CakeContainer({data,buyCake}) {
    // console.log(data)
    // useEffect(()=>{
    //     buyCake()
    // },[]);

    return data.loading ?(<div>
            {
                data.posts.map(post=>{
                   return <p key={post.id}>{post.title}</p>
                })
            }
        </div>):(<h1>loading</h1>)
}

const mapStateToProps = state =>{
    return{
        data: state
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        buyCake: ()=>dispatch(asyncA_creator())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer);