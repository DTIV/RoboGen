import React from 'react'
import { useState } from 'react'
import { loadContract } from '../Functions'
////////////    MINT     //////////////
// function mintNFT(){
//     if(!ContractObject){
//         alert("Please load contract first");
//         return;
//     }

//      flag = false;
//      var currentAccountAddress = window.zilPay.wallet.defaultAccount.base16;
//      for(i in ContractState.minters){
//       if(i.toUpperCase() == currentAccountAddress.toUpperCase()){
//        flag = true;
//        break;
//       }
//      }
//     if(!flag){
//       alert("You don't have a mint access");
//       return;
//      }

//      var NftTo = document.querySelector("#mintnft_to").value;
//      var NftUri = document.querySelector("#mintnft_uri").value;

//      const gasPrice = window.zilPay.utils.units.toQa('2000', window.zilPay.utils.units.Units.Li);
//     var tx = ContractObject.call('Mint',[{
//       vname: "to",
//       type: "ByStr20",
//       value: NftTo
//      },{
//       vname: "token_uri",
//       type: "String",
//       value: NftUri
//      }],
//      {
//       gasPrice: gasPrice,
//       gasLimit: window.zilPay.utils.Long.fromNumber(10000)
//      });

//      tx.then(function(a){
//       console.log(a);
//      });
//     console.log(t);
//     }

const Mint = (props) => {
    const [getMint, setMint] = useState("");
    const [getURI, setURI] = useState("");
    const ContractObject = loadContract(props.address);
    const ContractState = props.state;
    const next_num = Object.keys(props.gallery)[0] + 1
    // console.log("CONTRACT", ContractObject)
    // console.log("STATE", ContractState)
    console.log(getURI)
    const uri = getURI.toString()
    return (
        <div className="mint-wrap">
            <form className="mint-form" action="" onSubmit = {e => {
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
                        value: getMint
                    },{
                        vname: "token_uri",
                        type: "String",
                        value: uri
                    },{
                        vname: "token_id",
                        type: "Uint256",
                        value: next_num
                    }],
                    {
                        gasPrice: gasPrice,
                        gasLimit: window.zilPay.utils.Long.fromNumber("25000")
                    })
                    .then(function(a){
                    console.log("RESPONSE",a);
                    });
                console.log("Form subbmitted!")
                console.log(tx)
            }}>
                <div>
                    <input className="mint-input" type="text" placeholder="Mint Address" onChange={(e) => setMint(e.target.value)}/>
                </div>
                <div>
                    <input className="mint-input" type="text" placeholder="URI Link" onChange={(e) => setURI(e.target.value)}/>
                </div>
                <div>
                    <button className="btn" type="submit">Mint</button>
                </div>
            </form>
        </div>
    )
}

export default Mint
