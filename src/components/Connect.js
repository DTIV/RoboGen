import React from 'react'

// console.log(window.zilPay.wallet.defaultAccount)

function checkWallet(){
    if(window.zilPay){
        return true;
    }else{
        return false;
    }
  }

async function connectWallet(){
    try{
        if(window.zilPay){
            return (await window.zilPay.wallet.connect());
        }else{
            return false;
        }
    }catch{
        console.log("ERROR ln20")
    }
    
}

const Connect = (props) => {
    if(checkWallet() && connectWallet() && window.zilPay.wallet.defaultAccount){
        return (
            <div className="connect-wrap">
                <div className="net">
                        <strong>{window.zilPay.wallet.net}</strong>
                    <div className="circle"></div>
                </div>
                <div>
                    {window.zilPay.wallet.defaultAccount.bech32}
                </div>
            </div>
        )
    }else if(checkWallet() && connectWallet() && !window.zilPay.wallet.defaultAccount){
        return(
            <div className="connect-wrap">
                <div className="net">
                        <strong>ZilPay Disabled</strong>
                    <div className="angry-circle"></div>
                </div>
                <div>
                    Contract Does Not Exist
                </div>
            </div>
        )
    }
    else{
        return (
            <div className="connect-wrap">
                <button className="connect-btn" onClick={connectWallet}>Connect Wallet</button>
            </div>
        )
    }
    
}

export default Connect
