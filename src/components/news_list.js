import React,{Component} from 'react';

const NewsList = (props)=>{
    console.log(props)
    const items = props.news.map((items)=>{
        return <div>
            <h3>{items.title} </h3>
            <div>{items.feed} </div>
        </div>
    })
    return(
        <div>
            {items}
        </div>
    )
}

export default NewsList;