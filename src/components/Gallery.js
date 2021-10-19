import React from 'react'
import Card from './Card'

const Gallery = (props) => {
    if(!props.gallery){
        return(
            <div>
                Loading...
            </div>
        )
    }else{
        return(
            <section id="gallery-main">
                <div>ALL</div>
                <div className="nft-wrap">
                    {Object.keys(props.gallery).map(key => (
                        <Card key={key} gallery={props.gallery} tokenID={key} uris={props.uris}/>
                    ))}
                </div>
            </section>
        )
    }    
}

export default Gallery
