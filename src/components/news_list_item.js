import React,{Component} from 'react';
import { css } from 'glamor';
const NewsItem = (props)=>{
    console.log(props)
    
    let news_item = css({
        padding:'20px',
        fontFamily: 'Arvo',
        boxSizing:'border-box',
        borderBottom: '1px solid grey',
        borderLeft: '3px solid grey',
        borderTop: '1px solid grey',
        borderRight: '3px solid grey',
        ':hover':{
            background:'#FFDBAC',
            color:'#8D5524',
            transition:'0.3s'
        }
    })
    let feed = css({
        paddingLeft:'30px'
    })

    return(
        <div>
            <div className ={`${news_item}`}>
                <h3>{props.item.title} </h3>
                <div {...feed}>{props.item.feed} </div>
            </div>
        </div>
    )
}

export default NewsItem;

