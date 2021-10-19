import React from 'react'
import Card from './Card'


const Owned = (props) => {
    // console.log(props.gallery)
    // console.log(window.zilPay)
    const currAcc = localStorage.getItem("currentAccB")
    let newobj = JSON.parse(JSON.stringify(props.gallery));
    for( const key in newobj){
        if(newobj[key].toUpperCase() !== currAcc.toUpperCase()){
            delete newobj[key]
        }
    }

    if(!props.gallery){
        return(
            <div id="owned-loading" className="hide">
                Loading...
            </div>
        )
    }else{
        return(
            <div id="owned" className="hide">
                <div className="title">OWNED</div>
                <div className="owned-wrap">
                    {Object.keys(newobj).map(key => (
                        <Card key={key} gallery={props.gallery} tokenID={key} uris={props.uris}/>
                    ))}
                </div>
            </div>
            
        )
    }    
}

export default Owned
