
import { useState } from "react"
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import { checkWallet,
        connectWallet, 
        loadContract, 
        loadGallery } from './Functions'
import Owned from "./components/Owned";
import Mint from "./components/Mint";
import Buy from "./components/Buy";
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

            // NEW END

            loadGallery();
            setOwner(tokenOwners)
            setURI(tokenURI)
            setAddr(ContractAddress)
          });  
        }
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

              // NEW
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
