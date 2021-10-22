import React from 'react'
import { loadContract, toggle} from '../Functions'
import { useState, useEffect, useRef } from "react"

// var xml = new XMLSerializer().serializeToString(document.getElementById('fly'));


const Buy = (props) => {
    const ContractObject = loadContract(props.address);
    const ContractState = props.state;
    var next_num = (parseInt(Object.keys(props.gallery).slice(-1)[0]) + 1)
    if(!next_num){
        next_num = "1"
        next_num.toString()
    }else{
        next_num.toString()
    }
    const canvas = useRef(null)
    var url;
    var refcanvas = document.getElementById('canvas');
    if(refcanvas){
        var url = refcanvas.toDataURL()
    }

    var flag = false;
    for(const i in ContractState.minters){
        if(props.currWallet){
            if(i.toUpperCase() === props.currWallet.toUpperCase()){
                flag = true;
            }
        }
        
    }

    if(!flag){
        return(
            <div>
                <form className="config-form "action="" onSubmit = {e => {
                    e.preventDefault();
                    if(!ContractObject){
                        alert("Load a NFT Contract")
                    }
                    
                    const gasPrice = window.zilPay.utils.units.toQa('2000', window.zilPay.utils.units.Units.Li);
                    var enable = ContractObject.call('configureMinter',[{
                        vname: "minter",
                        type: "ByStr20",
                        value: props.currWallet
                    }],
                    {
                        amount: 25000000000000,
                        gasPrice: gasPrice,
                        gasLimit: window.zilPay.utils.Long.fromNumber("60000")
                    })
                    .then(function(a){
                    console.log("RESPONSE",a);
                    });
                }}>

                    <div id="submit-form">
                        <button className="btn" type="submit">Enable</button>
                    </div>
                </form>
            </div>
        )
    }
    return (
        <div className="buy-wrap">
            {/* MINT FORM */}
            <form className="buy-form" action="" onSubmit = {e => {
                e.preventDefault();
                if(!ContractObject){
                    alert("Load a NFT Contract")
                }
                
                const gasPrice = window.zilPay.utils.units.toQa('2000', window.zilPay.utils.units.Units.Li);
                var flag = false;
                var currentAccountAddress = window.zilPay.wallet.defaultAccount.base16;
                for(const i in ContractState.minters){
                    if(i.toUpperCase() === currentAccountAddress.toUpperCase()){
                        flag = true;
                    }
                }
                
                if(!flag){
                    console.log("ACCESS DENIED! Configure Minter!")
                }
                if(flag){
                    var tx = ContractObject.call('mint',[{
                        vname: "to",
                        type: "ByStr20",
                        value: window.zilPay.wallet.defaultAccount.base16
                    },{
                        vname: "token_uri",
                        type: "String",
                        value: url
                    },{
                        vname: "token_id",
                        type: "Uint256",
                        value: next_num.toString()
                    }],
                    {
                        amount: 25000000000000,
                        gasPrice: gasPrice,
                        gasLimit: window.zilPay.utils.Long.fromNumber("60000")
                    })
                    .then(function(a){
                    console.log("RESPONSE",a);
                    toggle("main-robo")
                    });
                }
            }}>
                <canvas id="canvas"
                    ref={canvas}
                    width={500}
                    height={500}
                />
                <img id="main-robo" src={url} alt="" />
                <div id="submit-form" className="enable-gen">
                    <button className="btn" type="submit">Generate</button>
                </div>
            </form>
        </div>
    )
}

export default Buy
