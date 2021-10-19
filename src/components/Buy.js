import React from 'react'
import { loadContract, buildFly } from '../Functions'
import { useState, useEffect, useRef } from "react"
import images from './Images'
import BuildFly from './BuildFly'

// var xml = new XMLSerializer().serializeToString(document.getElementById('fly'));
const Buy = (props) => {
    const [getMint, setMint] = useState("");
    const [getURI, setURI] = useState("");
    const ContractObject = loadContract(props.address);
    const ContractState = props.state;
    const next_num = (parseInt(Object.keys(props.gallery).slice(-1)[0]) + 1).toString()

    // NEW
    // const tokenMds = ContractState.token_mds;
    // const mdToId = ContractState.metadata_to_id;

    const [image, setImage] = useState(null)

    const canvas = useRef(null)
    useEffect(() => {
      // NUG
      const nftCanvas = new Image();
      nftCanvas.src = buildFly()
      nftCanvas.onload = () => setImage(nftCanvas)      
    }, [])

    useEffect(() => {
      if(image && canvas){
        const ctx = canvas.current.getContext("2d")
        ctx.drawImage(image, (500 - 500)/2, 0)
      }
    }, [image, canvas])
  
    
    function reload(){
      window.location.reload()
    }
    var url;
    var refcanvas = document.getElementById('canvas');

    if(refcanvas){
        var url = refcanvas.toDataURL()
    }
    // var dataURL = refcanvas.toDataURL();
    // console.log("DATA",dataURL);
    // NEW END
    var x;
    var y;
    var z;
    for (var i = 0;i<=0xf; i++) {
        for (var j = 0;j<=0xf; j++) {
            if(i == j) continue;
            for (var k = 0;k<=0xf; k++) {
                if(k == j || i==k) continue;
                
                const x=i.toString(16);
                const y=j.toString(16);
                const z=k.toString(16);
            }
        }
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
                
                {/* <img width="500" height="500" id="svg-img" src={buildFly()} alt="" /> */}
                <img src={url} alt="" />
                <div>
                    <button className="btn" type="submit">Buy NFT</button>
                </div>
            </form>
        </div>
    )
}

export default Buy
