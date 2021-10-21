export function tester(){
    console.log("HEELLO!")
}

export function checkWallet(){
    if(window.zilPay){
        return true;
    }else{
        return false;
    }
}

export function getContractAddress(){
    var ContractAddress = "0x062534cabe31a7a2ebc41f05ba7a253e87d8c840";
    return ContractAddress
}

/////////////    CONNECT WALLET   ///////////////
export async function connectWallet(){
    try{
        if(window.zilPay){
            return (await window.zilPay.wallet.connect());
        }else{
            return false;
        }
    }catch{
        console.log("ERROR")
    }
}

////////////    LOAD INIT CONTRACT    //////////////
export function loadContract(contractAddr){
    try{
        if(window.zilPay){
            return window.zilPay.contracts.at(contractAddr);
        }else{
            return false;
        }
    }catch(err){
        console.log(err.message);
        return false;
    }
}

/////////////   NETWORK / ACCOUNT CHANGES  ////////////////
export function observer(currAccount, currNet){
    window.zilPay.wallet.observableAccount().subscribe(function(){
        const newAcc = window.zilPay.wallet.defaultAccount.bech32;
        const nb = window.zilPay.wallet.defaultAccount.base16;
        localStorage.setItem("currentAccB", nb)
        if(newAcc !== currAccount){
            window.location.reload()
        }
        currAccount = window.zilPay.wallet.defaultAccount.bech32
    });
    window.zilPay.wallet.observableNetwork().subscribe(function(){
        const newNet = window.zilPay.wallet.net
        if(newNet !== currNet){
            window.location.reload()
        }
        currNet = window.zilPay.wallet.net
    });
}

////////////   LOAD GALLERY    //////////
export function loadGallery(){
    var currAccount = window.zilPay.wallet.defaultAccount.bech32;
    var currNet = window.zilPay.wallet.net;
    
    observer(currAccount, currNet)
}

///////////////////   HEAD     ///////////////////
export function robotHead(num){
    var color1 = Math.floor(Math.random()*200)+1;
    var color2 = Math.floor(Math.random()*200)+1;
    var color3 = Math.floor(Math.random()*200)+1;
    if(num === 1){
        return `data:image/svg+xml;utf8,<svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;">
<style type="text/css">
	.st0{fill:rgb(${color1}, ${color2}, ${color3});stroke:black;stroke-width:9;stroke-miterlimit:10;}
</style>
<path class="st0" d="M372.98,430.09H127.02c-22.91,0-41.48-18.57-41.48-41.48V111.4c0-22.91,18.57-41.48,41.48-41.48h245.96
	c22.91,0,41.48,18.57,41.48,41.48V388.6C414.46,411.51,395.89,430.09,372.98,430.09z"/>
</svg>
`
    }else if(num===2){
        return `data:image/svg+xml;utf8,<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">
   <style type="text/css">
       .st0{fill:rgb(${color1},${color2},${color3});stroke:black;stroke-width:9;stroke-miterlimit:10;}
   </style>
   <circle class="st0" cx="250" cy="250" r="188.91"/>
   </svg>`
    }else if(num===3){
        return `data:image/svg+xml;utf8,<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">
   <style type="text/css">
       .st0{fill:rgb(${color1},${color2},${color3});stroke:black;stroke-width:9;stroke-miterlimit:10;}
   </style>
   <path class="st0" d="M198.35,420.82L57.95,177.63c-24.19-41.9,6.05-94.27,54.43-94.27l280.82,0c48.38,0,78.62,52.37,54.43,94.27
       L307.21,420.82C283.02,462.72,222.55,462.72,198.35,420.82z"/>
   </svg>`
    }else if(num===4){
        return `data:image/svg+xml;utf8,<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">
   <style type="text/css">
       .st0{fill:rgb(${color1},${color2},${color3});stroke:black;stroke-width:9;stroke-miterlimit:10;}
   </style>
   <path class="st0" d="M343.26,60.46H156.74c-10,0-19.25,5.34-24.25,14L39.22,236c-5,8.66-5,19.34,0,28l93.26,161.54
       c5,8.66,14.25,14,24.25,14h186.53c10,0,19.25-5.34,24.25-14L460.78,264c5-8.66,5-19.34,0-28L367.52,74.46
       C362.51,65.8,353.27,60.46,343.26,60.46z"/>
   </svg>
   `
    }
}
// BROWS
export function robotBrows(num){
    var color1 = Math.floor(Math.random()*200)+1;
    var color2 = Math.floor(Math.random()*200)+1;
    var color3 = Math.floor(Math.random()*200)+1;
    var color4 = Math.floor(Math.random()*200)+1;
    var color5 = Math.floor(Math.random()*200)+1;
    var color6 = Math.floor(Math.random()*200)+1;
    var color7 = Math.floor(Math.random()*200)+1;
    var color8 = Math.floor(Math.random()*200)+1;
    var color9 = Math.floor(Math.random()*200)+1;
    if(num===1){
        return `data:image/svg+xml;utf8,<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">
<style type="text/css">
	.st0{fill:rgb(${color1}, ${color2}, ${color3});}
	.st1{fill:rgb(${color4}, ${color5}, ${color6});}
	.st2{fill:none;stroke:black;stroke-width:3;stroke-miterlimit:10;}
</style>
<g>
	<g>
		<path class="st0" d="M228.57,165.09l2.55-9.23c1.07-3.87-1.2-7.88-5.08-8.95l-92.41-25.54c-1.19-0.33-2.4-0.34-3.53-0.09
			C151.51,150.57,192.9,162.48,228.57,165.09z"/>
		<path class="st1" d="M130.11,121.28c-2.53,0.57-4.68,2.48-5.42,5.16l-2.59,9.36c-1.07,3.87,1.2,7.88,5.08,8.95l92.41,25.54
			c3.87,1.07,7.88-1.2,8.95-5.08l0.03-0.13C192.9,162.48,151.51,150.57,130.11,121.28z"/>
		<path class="st2" d="M219.58,170.38l-92.41-25.54c-3.87-1.07-6.15-5.08-5.08-8.95l2.59-9.36c1.07-3.87,5.08-6.15,8.95-5.08
			l92.41,25.54c3.87,1.07,6.15,5.08,5.08,8.95l-2.59,9.36C227.46,169.18,223.46,171.45,219.58,170.38z"/>
		<line class="st2" x1="139.62" y1="123.11" x2="137.52" y2="145.92"/>
		<line class="st2" x1="145.12" y1="125.52" x2="143.01" y2="148.33"/>
	</g>
	<g>
		<path class="st0" d="M274.95,165.09l-2.55-9.23c-1.07-3.87,1.2-7.88,5.08-8.95l92.41-25.54c1.19-0.33,2.4-0.34,3.53-0.09
			C352.01,150.57,310.62,162.48,274.95,165.09z"/>
		<path class="st1" d="M373.41,121.28c2.53,0.57,4.68,2.48,5.42,5.16l2.59,9.36c1.07,3.87-1.2,7.88-5.08,8.95l-92.41,25.54
			c-3.87,1.07-7.88-1.2-8.95-5.08l-0.03-0.13C310.62,162.48,352.01,150.57,373.41,121.28z"/>
		<path class="st2" d="M283.94,170.38l92.41-25.54c3.87-1.07,6.15-5.08,5.08-8.95l-2.59-9.36c-1.07-3.87-5.08-6.15-8.95-5.08
			l-92.41,25.54c-3.87,1.07-6.15,5.08-5.08,8.95l2.59,9.36C276.05,169.18,280.06,171.45,283.94,170.38z"/>
		<line class="st2" x1="363.9" y1="123.11" x2="366" y2="145.92"/>
		<line class="st2" x1="358.4" y1="125.52" x2="360.51" y2="148.33"/>
	</g>
</g>
</svg>
`
    }else if(num===2){
        return`data:image/svg+xml;utf8,<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">
   <style type="text/css">
       .st0{fill:rgb(${color1}, ${color2}, ${color3});}
       .st1{fill:rgb(${color4}, ${color5}, ${color6});}
       .st2{fill:rgb(${color7}, ${color8}, ${color9});}
       .st3{fill:none;stroke:black;stroke-width:4;stroke-miterlimit:10;}
   </style>
   <g>
       <path class="st0" d="M133.12,105.43c4.44,4.34,8.4,9.07,11.64,14.15c3.39-3.95,7.47-7.29,12.04-9.85
           c-0.29-6.39-1.21-12.7-2.43-18.96C146.29,94.15,139.06,99.17,133.12,105.43z"/>
       <path class="st1" d="M178.18,85.91c-8.44,0.05-16.48,1.78-23.81,4.86c1.21,6.26,2.14,12.57,2.43,18.96
           c6.36-3.57,13.67-5.64,21.48-5.68c24.58-0.14,44.62,19.67,44.76,44.25l18.13-0.1C240.97,113.59,212.77,85.71,178.18,85.91z"/>
       <path class="st2" d="M133.12,105.43c-10.75,11.32-17.32,26.63-17.22,43.47l18.13-0.1c-0.06-11.16,3.99-21.37,10.73-29.22
           C141.52,114.5,137.56,109.77,133.12,105.43z"/>
   </g>
   <path class="st3" d="M134.03,149.1c-0.14-24.58,19.67-44.62,44.25-44.76c24.58-0.14,44.62,19.67,44.76,44.25l18.13-0.1
       c-0.2-34.59-28.4-62.48-62.99-62.28c-34.59,0.2-62.48,28.4-62.28,62.99L134.03,149.1z"/>
   <g>
       <g>
           <path class="st0" d="M363.26,105.43c-4.44,4.34-8.4,9.07-11.64,14.15c-3.39-3.95-7.47-7.29-12.04-9.85
               c0.29-6.39,1.21-12.7,2.43-18.96C350.09,94.15,357.32,99.17,363.26,105.43z"/>
           <path class="st1" d="M318.2,85.91c8.44,0.05,16.48,1.78,23.81,4.86c-1.21,6.26-2.14,12.57-2.43,18.96
               c-6.36-3.57-13.67-5.64-21.48-5.68c-24.58-0.14-44.62,19.67-44.76,44.25l-18.13-0.1C255.4,113.59,283.61,85.71,318.2,85.91z"/>
           <path class="st2" d="M363.26,105.43c10.75,11.32,17.32,26.63,17.22,43.47l-18.13-0.1c0.06-11.16-3.99-21.37-10.73-29.22
               C354.86,114.5,358.82,109.77,363.26,105.43z"/>
       </g>
       <path class="st3" d="M362.35,148.8c0.14-24.58-19.67-44.62-44.25-44.76c-24.58-0.14-44.62,19.67-44.76,44.25l-18.13-0.1
           c0.2-34.59,28.4-62.48,62.99-62.28c34.59,0.2,62.48,28.4,62.28,62.99L362.35,148.8z"/>
   </g>
   </svg>
   `
    }
}
///////////////////   EYES    ///////////////////
export function robotEyes(num){
    var color1 = Math.floor(Math.random()*200)+1;
    var color2 = Math.floor(Math.random()*200)+1;
    var color3 = Math.floor(Math.random()*200)+1;
    var color4 = Math.floor(Math.random()*200)+1;
    var color5 = Math.floor(Math.random()*200)+1;
    var color6 = Math.floor(Math.random()*200)+1;
    if(num === 1){
        return `data:image/svg+xml;utf8,<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">
    <style type="text/css">
    .st0{display:none;fill:red;stroke:black;stroke-width:9;stroke-miterlimit:10;}
    .st1{fill:rgb(${color1}, ${color2}, ${color3});stroke:black;stroke-width:9;stroke-miterlimit:10;}
    .st2{stroke:black;stroke-width:9;stroke-miterlimit:10;}
    </style>
    <path class="st0" d="M372.98,430.09H127.02c-22.91,0-41.48-18.57-41.48-41.48V111.4c0-22.91,18.57-41.48,41.48-41.48h245.96
    c22.91,0,41.48,18.57,41.48,41.48V388.6C414.46,411.51,395.89,430.09,372.98,430.09z"/>
    <circle class="st1" cx="185.63" cy="181.64" r="43.68"/>
    <circle class="st1" cx="310.61" cy="181.64" r="43.68"/>
    <circle class="st2" cx="185.63" cy="181.64" r="22.8"/>
    <circle class="st2" cx="310.61" cy="181.64" r="22.8"/>
    </svg>
    `
    }else if(num=== 2){
        return `data:image/svg+xml;utf8,<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">
   <style type="text/css">
       .st0{fill:rgb(${color1}, ${color2}, ${color3});stroke:black;stroke-width:9;stroke-miterlimit:10;}
       .st1{fill:rgb(${color4}, ${color5}, ${color6});stroke:black;stroke-width:4;stroke-miterlimit:10;}
   </style>
   <g>
       <rect x="66.54" y="170.16" class="st0" width="363.19" height="61.54"/>
       <rect x="68.65" y="185" class="st1" width="361.08" height="10.99"/>
   </g>
   </svg>`
    }else if(num===3){
        return `data:image/svg+xml;utf8,<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">
   <style type="text/css">
       .st0{fill:rgb(${color1}, ${color2}, ${color3})}
       .st1{fill:rgb(${color4}, ${color5}, ${color6})}
       .st2{fill:none;stroke:black;stroke-width:5;stroke-miterlimit:10;}
   </style>
   <g>
       <g>
           <g>
               <path class="st0" d="M133.61,215.83c3.3,6.06,6.61,12.16,9.47,18.39l5.02-6.37c-2.95-6.42-5.76-12.96-8.66-19.43L133.61,215.83z"
                   />
               <path class="st1" d="M139.44,208.42c2.9,6.47,5.71,13.01,8.66,19.43l1.95-2.48c-3.91-5.94-6.39-12.63-8.8-19.24L139.44,208.42z"
                   />
               <path class="st0" d="M165.84,174.88l-24.59,31.24c2.41,6.61,4.9,13.3,8.8,19.24l15.79-20.06l29.81,37.87h23.95L165.84,174.88z"/>
               <path class="st1" d="M127.09,224.11c3.07,5.95,6.42,11.76,10.4,17.22l5.59-7.1c-2.86-6.23-6.17-12.33-9.47-18.39L127.09,224.11z"
                   />
               <path class="st0" d="M112.08,243.18h23.95l1.46-1.85c-3.98-5.45-7.33-11.27-10.4-17.22L112.08,243.18z"/>
           </g>
           <polygon class="st2" points="165.84,204.7 195.65,242.57 219.6,242.57 165.84,174.27 112.08,242.57 136.03,242.57 		"/>
       </g>
       <g>
           <g>
               <path class="st0" d="M369.91,213.53c-3.3,6.06-6.61,12.16-9.47,18.39l-5.02-6.37c2.95-6.42,5.76-12.96,8.66-19.43L369.91,213.53z
                   "/>
               <path class="st1" d="M364.08,206.12c-2.9,6.47-5.71,13.01-8.66,19.43l-1.95-2.48c3.91-5.94,6.39-12.63,8.8-19.24L364.08,206.12z"
                   />
               <path class="st0" d="M337.68,172.58l24.59,31.24c-2.41,6.61-4.9,13.3-8.8,19.24l-15.79-20.06l-29.81,37.87h-23.95L337.68,172.58z
                   "/>
               <path class="st1" d="M376.43,221.81c-3.07,5.95-6.42,11.76-10.4,17.22l-5.59-7.1c2.86-6.23,6.17-12.33,9.47-18.39L376.43,221.81z
                   "/>
               <path class="st0" d="M391.44,240.88h-23.95l-1.46-1.85c3.98-5.45,7.33-11.27,10.4-17.22L391.44,240.88z"/>
           </g>
           <polygon class="st2" points="337.68,202.4 307.87,240.27 283.92,240.27 337.68,171.97 391.44,240.27 367.49,240.27 		"/>
       </g>
   </g>
   </svg>
   `
    }
        
}

///////////////////   MOUTH     ///////////////////
export function robotMouth(num){
    //COLOR 1
    var color1 = Math.floor(Math.random()*200)+1;
    var color2 = Math.floor(Math.random()*200)+1;
    var color3 = Math.floor(Math.random()*200)+1;
    //COLOR 2
    var color4 = Math.floor(Math.random()*200)+1;
    var color5 = Math.floor(Math.random()*200)+1;
    var color6 = Math.floor(Math.random()*200)+1;

    //COLOR 3
    var color7 = Math.floor(Math.random()*200)+1;
    var color8 = Math.floor(Math.random()*200)+1;
    var color9 = Math.floor(Math.random()*200)+1;
    if(num===1){
        return `data:image/svg+xml;utf8,<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">
   <style type="text/css">
       .st0{fill:white;stroke:black;stroke-width:9;stroke-miterlimit:10;}
       .st1{fill:none;stroke:black;stroke-width:9;stroke-miterlimit:10;}
   </style>
   <g>
       <rect x="141.94" y="287.75" class="st0" width="226.37" height="71.43"/>
       <line class="st1" x1="144.26" y1="323.46" x2="368.32" y2="323.46"/>
   </g>
   </svg>`
    }else if(num===2){
        return `data:image/svg+xml;utf8,<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">
   <style type="text/css">
       .st0{fill:black;stroke:black;stroke-width:9;stroke-miterlimit:10;}
       .st1{fill:rgb(${color1}, ${color2}, ${color3});stroke:black;stroke-width:7;stroke-miterlimit:10;}
       .st2{fill:rgb(${color1}, ${color2}, ${color3});stroke:black;stroke-width:6;stroke-miterlimit:10;}
   </style>
   <g>
       <path class="st0" d="M257.2,404.08l90.47-59.76c15.11-9.98,8.04-33.5-10.07-33.5H156.66c-18.11,0-25.18,23.52-10.07,33.5
           l90.47,59.76C243.17,408.12,251.09,408.12,257.2,404.08z"/>
       <path class="st1" d="M330.97,345.54H161.13c-15.64,0-28.31-12.68-28.31-28.31v-9.05h233.65v1.87
           C366.46,329.65,350.57,345.54,330.97,345.54z"/>
       <polygon class="st2" points="247.13,406.52 211.84,380.6 282.42,380.6 	"/>
   </g>
   </svg>`
    }
}