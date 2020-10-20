import React from 'react';
import '../css/styles.css'

// const getYear = ()=>{
//     const newDate = new Date();
//     return newDate.getFullYear()
// }


const Header = (props) =>{

        return <header>
            <div className="logo">The E-Guardians</div>
            <input type="text" onChange={props.keyword}/>
            {/* <div>{this.state.title}</div>
            <div> {this.state.keywords} </div> */}
        </header>

}

export default Header;