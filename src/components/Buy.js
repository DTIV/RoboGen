import React from 'react'
import { loadContract, robotHead, robotEyes, robotMouth} from '../Functions'
import { useState, useEffect, useRef } from "react"

// var xml = new XMLSerializer().serializeToString(document.getElementById('fly'));
const Buy = (props) => {
    const ContractObject = loadContract(props.address);
    const ContractState = props.state;
    const next_num = (parseInt(Object.keys(props.gallery).slice(-1)[0]) + 1).toString()
    const canvas = useRef(null)
    var url;
    var refcanvas = document.getElementById('canvas');
    if(refcanvas){
        var url = refcanvas.toDataURL()
    }
    return (
        <div className="buy-wrap">
            <form className="buy-form" action="" onSubmit = {e => {
                e.preventDefault();
                if(!ContractObject){
                    alert("Load a NFT Contract")
                }
                var flag = false;
                var currentAccountAddress = window.zilPay.wallet.defaultAccount.base16;
                for(const i in ContractState.minters){
                    if(i.toUpperCase() === currentAccountAddress.toUpperCase()){
                        flag = true;
                        break;
                    }
                }
                if(!flag){
                    alert("Access Denied!");
                    return;
                }

                const gasPrice = window.zilPay.utils.units.toQa('2000', window.zilPay.utils.units.Units.Li);
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
                    value: next_num
                }],
                {
                    amount: 25000000000000,
                    gasPrice: gasPrice,
                    gasLimit: window.zilPay.utils.Long.fromNumber("60000")
                })
                .then(function(a){
                console.log("RESPONSE",a);
                });
                console.log("Form subbmitted!")
                console.log(tx)
            }}>
                <canvas id="canvas"
                    ref={canvas}
                    width={500}
                    height={500}
                />
                <img id="main-robo" src={url} alt="" />
                <div>
                    <button className="btn" type="submit">Generate</button>
                </div>
            </form>
        </div>
    )
}

export default Buy
