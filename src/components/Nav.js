import React from 'react'

function showOwned(){
    var ownedSection = document.getElementById('owned');
    var ownedLoading = document.getElementById('owned-loading');
    var mainGallery = document.getElementById('gallery-main');
    var mintSection = document.getElementById('mint')
    mainGallery.classList.add('hide')
    mintSection.classList.add('hide')
    ownedSection.classList.remove('hide');
    if(ownedLoading){
        ownedLoading.classList.remove('hide');
    }
}

function showAll(){
    var ownedSection = document.getElementById('owned');
    var mainGallery = document.getElementById('gallery-main');
    var mintSection = document.getElementById('mint')
    ownedSection.classList.add('hide')
    mintSection.classList.add('hide')
    mainGallery.classList.remove('hide')

}

function showMint(){
    var mintSection = document.getElementById('mint')
    var mainGallery = document.getElementById('gallery-main');
    var ownedSection = document.getElementById('owned');
    mintSection.classList.remove('hide');
    ownedSection.classList.add('hide')
    mainGallery.classList.add('hide')
}


const Nav = (props) => {
    return (
        <nav className="mainnav">
            <div>
                <button onClick={showAll} className="btn">All</button>
            </div>
            <div>
                <button onClick={showOwned} className="btn">MyNfts</button>
            </div>
            <div>
                <button onClick={props.loadContract} className="btn">Load New Contract</button>
            </div>    
        </nav>
    )
}

export default Nav
