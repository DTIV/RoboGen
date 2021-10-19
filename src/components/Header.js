import React from 'react'
import Connect from './Connect'
import Nav
 from './Nav'
const Header = (props) => {
    const connected = props.check() 
    return (
        <header className="main-header">
            <div className="mainbar">
                <div className="logo-wrap">   
                    <span className="logo">ROBO</span>
                </div>
                <Connect connected={connected} connect={props.connect} />
                
            </div>
            <Nav loadContract={props.loadContract}/>
        </header>
    )
}

export default Header
