import React,{Component} from 'react';
import '../css/styles.css'

// const getYear = ()=>{
//     const newDate = new Date();
//     return newDate.getFullYear()
// }


class Header extends Component{

    state = {
        keywords:''
    }

    inputChangeHandlerEvent = (event)=>{
        //console.log(event.target.value)
        this.setState({
            keywords:event.target.value
        })
    }

    render(){
        return <header>
            <div className="logo">Logo</div>
            <input type="text" onChange={this.inputChangeHandlerEvent}/>
            {/* <div>{this.state.title}</div>
            <div> {this.state.keywords} </div> */}
        </header>
    }
}

export default Header;