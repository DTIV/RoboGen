
import { useState } from "react"
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import { checkWallet,
      connectWallet, 
      loadContract, 
      loadGallery,
      robotHead,
      robotEyes,
      robotBrows,
      robotMouth} from './Functions'
import Owned from "./components/Owned";
import Mint from "./components/Mint";
import Buy from "./components/Buy";
import { buildQueries } from "@testing-library/dom";
//import BuildFly from "./components/BuildFly";

function App() {
  const [getOwner, setOwner] = useState(false)
  const [getURI, setURI] = useState(false)
  const [getAddr, setAddr] = useState(false)
  const [getMD, setMD] = useState(false)
  const [getDNA, setDNA] = useState(false)
  var ContractAddress;
  
  var ContractObject;
  var ContractState;

  async function onloadInit(){
    try{
      var check1 = checkWallet();
      var check2 = await connectWallet();
      if(check1 && check2){ 
        var ContractAddress = "0x062534cabe31a7a2ebc41f05ba7a253e87d8c840";
        setAddr(ContractAddress)
        ContractObject = loadContract(ContractAddress);

        localStorage.setItem("ContractObject", JSON.stringify(ContractObject))
        if(ContractObject){
          ContractObject.getState().then(function(stateData){
            ContractState = stateData;
            localStorage.setItem("ContractState", JSON.stringify(ContractState))  
            const tokenOwners = ContractState.token_owners;
            const tokenURI = ContractState.token_uris;
            loadGallery();
            setOwner(tokenOwners)
            setURI(tokenURI)
            setAddr(ContractAddress)
          });  
        }
      }

      function buildrobot(){
        var canvas = document.getElementById('canvas')
        var ctx = canvas.getContext('2d');
        // HEAD //
        ctx.drawImage(nftHead, (500 - 500)/2, 0)
        // EYES //
        ctx.drawImage(nftEyes, (500 - 500)/2, 0)
        // BROWS //
        ctx.drawImage(nftBrows, (500 - 500)/2, 0)
        // MOUTH //
        ctx.drawImage(nftMouth, (500 - 500)/2, 0)
      } 
      
      /////////  HEAD    //////////
      const nftHead = new Image();
      var rando = Math.floor(Math.random()*4)+1
      nftHead.src = robotHead(rando)
      nftHead.onload = function(){
        buildrobot();
      }

      /////////  EYES    //////////
      const nftEyes = new Image();
      var rando = Math.floor(Math.random()*3)+1
      nftEyes.src = robotEyes(rando)
      nftEyes.onload = function(){
        buildrobot();
      }

      /////////  BROWS    ///////////

      const nftBrows = new Image();
      var rando = Math.floor(Math.random()*2)+1
      nftBrows.src = robotBrows(rando)
      nftBrows.onload = function(){
        buildrobot();
      }

      /////////  MOUTH    //////////
      const nftMouth = new Image();
      var rando = Math.floor(Math.random()*2)+1
      nftMouth.src = robotMouth(rando)
      nftMouth.onload = function(){
        buildrobot();
      }

    }catch{
      console.log("INIT ERROR")
    }
  }

  function loadNewContract(){
    var contractAddress = prompt("Please enter contract address");
    if(contractAddress){
      ContractObject = loadContract(contractAddress);
      localStorage.setItem("ContractObject", JSON.stringify(ContractObject))
      if(ContractObject){
          ContractObject.getState().then(function(stateData){
              ContractState = stateData;
              localStorage.setItem("ContractState", JSON.stringify(ContractState))
              ContractAddress = contractAddress;
              const tokenOwners = ContractState.token_owners;
              const tokenURI = ContractState.token_uris;
              const tokenMds = ContractState.token_mds;
              setMD(tokenMds)
              loadGallery(false);
              setOwner(tokenOwners)
              setURI(tokenURI)
              setAddr(ContractAddress)
          });
      }else{
          ContractObject = undefined;
          alert("No contract address")
      }
      return ContractObject
    }
    

  }
  


  window.onload = onloadInit

  const Contract = JSON.parse(localStorage.getItem("ContractObject"))
  const State = JSON.parse(localStorage.getItem("ContractState"))
  return (
    <div className="App">
      <div className="main-wrapper">
        <Header check={checkWallet} connect={connectWallet()} loadContract={loadNewContract} /> 
        <section id="mint" className="hide">
          <Mint gallery={getOwner} contract={Contract} state={State} address={getAddr} />
        </section>
        {/* <BuildFly /> */}
        <section> 
          <Buy gallery={getOwner} contract={Contract} state={State} address={getAddr} metadata={getMD}/>
        </section>
        <section className="gallery">
            <Owned gallery={getOwner} uris={getURI} address={getAddr}/>
            <Gallery gallery={getOwner} uris={getURI}/>
        </section>
      </div>
    </div>
  );
}

export default App;
