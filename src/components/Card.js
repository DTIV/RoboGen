import React from 'react'

const Card = (props) => {
    console.log()
    return (
        <div key={props.tokenID} className="nft-card">
            <div className="nft-item">
                <div className="token-id-header">{props.tokenID}</div>
                <div className="image">
                    <img alt={props.tokenID} className="nft-img" src={props.uris[props.tokenID]}></img>
                </div> 
                <div className="nft-owner">{props.gallery[props.tokenID]}</div> 
            </div>
        </div>
    )
}

export default Card
