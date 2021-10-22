export function checkWallet(){
    if(window.zilPay){
        return true;
    }else{
        return false;
    }
}

export function getWallet(){
    if(checkWallet()){
        if(window.zilPay.wallet){
            if(window.zilPay.wallet.defaultAccount){
                if(window.zilPay.wallet.defaultAccount.base16){
                    return window.zilPay.wallet.defaultAccount.base16
                }
            }
        }
    }
}

export function toggle(id){
    var obj = document.getElementById(id);
    if (obj.style.display === "none") {
        obj.style.display = "block";
    } else {
        obj.style.display = "none";
    }

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
        console.log("ERROR ln40")
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
    var color4 = Math.floor(Math.random()*200)+1;
    var color5 = Math.floor(Math.random()*200)+1;
    var color6 = Math.floor(Math.random()*200)+1;
    var color7 = Math.floor(Math.random()*200)+1;
    var color8 = Math.floor(Math.random()*200)+1;
    var color9 = Math.floor(Math.random()*200)+1;
    if(num > 1000){
        
        num = Math.floor(Math.random()*4)+1
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
    }else{
        return `data:image/svg+xml;utf8,<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">
   <style type="text/css">
       .st0{fill:rgb(${color1},${color2},${color3});}
       .st1{fill:rgb(${color4},${color5},${color6});}
       .st2{fill:rgb(${color7},${color8},${color9});}
       .st3{fill:rgb(${color1},${color2},${color3});}
       .st4{fill:none;stroke:black;stroke-width:9;stroke-miterlimit:10;}
   </style>
   <g>
       <g>
           <path class="st0" d="M162.44,383.3c-6.25,0.89-11.69,2.59-14.92,7.92c0.92,4.91,4.92,8.28,8.92,9.08c5,1,11-7,10-14
               C164.44,386.3,163.44,383.3,162.44,383.3z"/>
           <path class="st1" d="M415.71,99.12c-8.64-2.98-14.03-10.33-22.11-17.68c-3-2-7-7-12-8c-16.58-0.92-32.31,1.54-47.97-3.53H130.11
               c-2.92,0-5.78,0.31-8.53,0.88c-1.54,11.66-1.84,23.32-0.09,34.97c1,10,2,20,3,30c6,68-1,136,2,204
               c1.28,30.15,2.56,60.3,0.41,90.18c1.06,0.08,2.12,0.14,3.2,0.14h230.85c19.78-14.05,40.88-26.38,56.6-44.44V111.4
               C417.56,107.12,416.91,103,415.71,99.12z M156.44,400.3c-4.01-0.8-8-4.17-8.92-9.08c-0.39,0.64-0.75,1.33-1.08,2.08
               c0.32-0.75,0.69-1.44,1.08-2.08c-0.23-1.22-0.28-2.53-0.08-3.92c-0.2,1.39-0.15,2.7,0.08,3.92c3.23-5.33,8.68-7.03,14.92-7.92
               c1,0,2,3,4,3C167.44,393.3,161.44,401.3,156.44,400.3z M173.44,401.3c-1.34-0.67-2.23-3.15-2.37-5.91
               c-0.25,0.29-0.47,0.58-0.63,0.91c0.16-0.33,0.38-0.62,0.63-0.91c-0.07-1.35,0.04-2.77,0.37-4.09c-0.33,1.31-0.44,2.74-0.37,4.09
               c1.27-1.47,3.37-2.58,3.37-5.09C180.44,392.3,178.44,403.3,173.44,401.3z M368.1,98.7c-5,2-9,0-12-4c0-0.83-0.68-3.02,0.78-4.32
               c-0.77-1.46-0.86-3.07,0.22-4.68c1-2,5-5,6-3c2,3,1,6,5,9C369.1,91.7,371.1,96.7,368.1,98.7z M394.1,104.7c-1,3-5,0-8-1
               c-0.62-0.62,0.31-1.25,0.85-2.11c-0.02-0.59,0.07-1.13,0.24-1.65c-0.03-0.08-0.05-0.16-0.09-0.24c0.04,0.08,0.07,0.16,0.09,0.24
               c0.78-2.34,3.16-4.02,3.91-6.24C395.1,95.7,396.1,101.7,394.1,104.7z"/>
           <path class="st2" d="M391.1,93.7c-0.74,2.22-3.12,3.9-3.91,6.24c0.23,0.64,0.05,1.18-0.24,1.65c0.01,0.36,0.05,0.72,0.15,1.11
               c-0.1-0.39-0.14-0.76-0.15-1.11c-0.55,0.87-1.48,1.49-0.85,2.11c3,1,7,4,8,1C396.1,101.7,395.1,95.7,391.1,93.7z"/>
           <path class="st1" d="M387.19,99.95c-0.17,0.51-0.26,1.06-0.24,1.65C387.24,101.13,387.42,100.59,387.19,99.95z"/>
           <path class="st0" d="M368.1,91.7c-4-3-3-6-5-9c-1-2-5,1-6,3c-1.08,1.61-0.99,3.22-0.22,4.68c0.31-0.27,0.7-0.51,1.22-0.68
               c-0.52,0.17-0.91,0.41-1.22,0.68c0.66,1.25,1.83,2.39,3.22,3.32c-1.39-0.92-2.55-2.07-3.22-3.32c-1.46,1.3-0.78,3.49-0.78,4.32
               c3,4,7,6,12,4C371.1,96.7,369.1,91.7,368.1,91.7z"/>
           <path class="st2" d="M174.44,390.3c0,2.51-2.1,3.62-3.37,5.09c0.14,2.76,1.03,5.24,2.37,5.91
               C178.44,403.3,180.44,392.3,174.44,390.3z"/>
           <path class="st3" d="M415.71,99.12c-5.23-16.92-21-29.2-39.63-29.2h-42.45c15.66,5.07,31.39,2.61,47.97,3.53c5,1,9,6,12,8
               C401.68,88.79,407.07,96.13,415.71,99.12z"/>
           <path class="st3" d="M417.56,388.6v-2.96c-15.72,18.06-36.82,30.4-56.6,44.44h15.11C398.99,430.09,417.56,411.51,417.56,388.6z"/>
           <path class="st3" d="M126.5,339.77c-3-68,4-136-2-204c-1-10-2-20-3-30c-1.75-11.66-1.45-23.32,0.09-34.97
               c-18.82,3.93-32.96,20.62-32.96,40.6V388.6c0,21.83,16.87,39.71,38.28,41.35C129.06,400.07,127.78,369.92,126.5,339.77z"/>
           <path class="st2" d="M338.21,80.03c2.06,1.12,3.28,3.77,5.45,4.95c0.67-0.11,1.17,0.16,1.58,0.53c0.35,0.05,0.72,0.08,1.12,0.05
               c-0.4,0.03-0.77,0-1.12-0.05c0.75,0.69,1.2,1.72,1.93,1.22c1.52-2.77,5.18-6.18,2.4-7.7C346.97,76.53,340.89,76.45,338.21,80.03z"
               />
           <path class="st2" d="M356.63,410.66c2.06,1.12,3.28,3.77,5.45,4.95c0.67-0.11,1.17,0.16,1.58,0.53c0.35,0.05,0.72,0.08,1.12,0.05
               c-0.4,0.03-0.77,0-1.12-0.05c0.75,0.69,1.2,1.72,1.93,1.22c1.52-2.77,5.18-6.18,2.4-7.7C365.39,407.16,359.3,407.08,356.63,410.66
               z"/>
       </g>
       <path class="st4" d="M376.08,430.09H130.11c-22.91,0-41.48-18.57-41.48-41.48V111.4c0-22.91,18.57-41.48,41.48-41.48h245.96
           c22.91,0,41.48,18.57,41.48,41.48V388.6C417.56,411.51,398.99,430.09,376.08,430.09z"/>
   </g>
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
    var color7 = Math.floor(Math.random()*200)+1;
    var color8 = Math.floor(Math.random()*200)+1;
    var color9 = Math.floor(Math.random()*200)+1;
    if(num > 4000){
        num = Math.floor(Math.random()*3)+1
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
    }else{
        return `data:image/svg+xml;utf8,<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">
   <style type="text/css">
       .st0{fill:rgb(${color1}, ${color2}, ${color3});}
       .st1{fill:rgb(${color4}, ${color5}, ${color6});}
       .st2{fill:none;stroke:black;stroke-width:9;stroke-miterlimit:10;}
       .st3{fill:rgb(${color7}, ${color8}, ${color9});}
   </style>
   <g>
       <g>
           <g>
               <circle class="st0" cx="182.63" cy="197.72" r="43.68"/>
               <polygon class="st1" points="182.63,197.72 180.85,241.4 184.41,241.4 			"/>
               <polygon class="st1" points="180.02,199.93 152.72,229.78 155.45,232.07 			"/>
           </g>
           <g>
               <circle class="st2" cx="182.63" cy="197.72" r="43.68"/>
               <g>
                   <path class="st3" d="M169.76,195.64c0,2,3,1,3,1c4-3,9-9,6-12C174.76,180.64,170.76,189.64,169.76,195.64z"/>
                   <path d="M182.63,174.92c-12.59,0-22.8,10.21-22.8,22.8c0,12.59,10.21,22.8,22.8,22.8s22.8-10.21,22.8-22.8
                       C205.43,185.13,195.22,174.92,182.63,174.92z M172.76,196.64c0,0-3,1-3-1c1-6,5-15,9-11
                       C181.76,187.64,176.76,193.64,172.76,196.64z"/>
               </g>
               <circle class="st2" cx="182.63" cy="197.72" r="22.8"/>
           </g>
       </g>
       <g>
           <g>
               <circle class="st0" cx="319.63" cy="197.72" r="43.68"/>
               <polygon class="st1" points="319.63,197.72 321.41,241.4 317.84,241.4 			"/>
               <polygon class="st1" points="322.23,199.93 349.54,229.78 346.8,232.07 			"/>
           </g>
           <g>
               <circle class="st2" cx="319.63" cy="197.72" r="43.68"/>
               <g>
                   <path class="st3" d="M332.5,195.64c0,2-3,1-3,1c-4-3-9-9-6-12C327.5,180.64,331.5,189.64,332.5,195.64z"/>
                   <path d="M296.82,197.72c0,12.59,10.21,22.8,22.8,22.8s22.8-10.21,22.8-22.8c0-12.59-10.21-22.8-22.8-22.8
                       S296.82,185.13,296.82,197.72z M323.5,184.64c4-4,8,5,9,11c0,2-3,1-3,1C325.5,193.64,320.5,187.64,323.5,184.64z"/>
               </g>
               <circle class="st2" cx="319.63" cy="197.72" r="22.8"/>
           </g>
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

export function robotNose(num){
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
    .st0{fill:rgb(${color1}, ${color2}, ${color3});stroke:black;stroke-width:9;stroke-miterlimit:10;}
    .st1{fill:rgb(${color4}, ${color5}, ${color6});stroke:black;stroke-width:9;stroke-miterlimit:10;}
    .st2{fill:rgb(${color7}, ${color8}, ${color9});stroke:black;stroke-width:9;stroke-miterlimit:10;}
    </style>
    <polygon class="st0" points="250,193.34 172.57,327.45 327.43,327.45 "/>
    <polygon class="st1" points="250,198.79 225.92,240.5 274.08,240.5 "/>
    <polygon class="st0" points="250,285.73 274.08,244.02 225.92,244.02 "/>
    <polygon class="st2" points="196.65,285.73 172.57,327.45 220.74,327.45 "/>
    <polygon class="st2" points="303.35,285.73 279.26,327.45 327.43,327.45 "/>
    <polygon class="st2" points="249.76,283.95 225.67,325.67 273.84,325.67 "/>
    <polygon class="st1" points="225.67,241.37 201.59,283.08 249.76,283.08 "/>
    <polygon class="st1" points="274.08,241.37 250,283.08 298.17,283.08 "/>
    </svg>`
    }else if(num===2){
        return `data:image/svg+xml;utf8,<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">
   <style type="text/css">
       .st0{fill:rgb(${color1}, ${color2}, ${color3});stroke:black;stroke-width:0.25;stroke-miterlimit:10;}
       .st1{fill:rgb(${color4}, ${color5}, ${color6});}
       .st2{fill:rgb(${color7}, ${color8}, ${color9});}
       .st3{fill:none;stroke:black;stroke-width:6;stroke-miterlimit:10;}
       .st4{fill:rgb(${color1}, ${color2}, ${color3});}
       .st5{fill:none;stroke:black;stroke-width:3;stroke-miterlimit:10;}
       .st6{fill:rgb(${color4}, ${color5}, ${color6});}
       .st7{fill:rgb(${color7}, ${color8}, ${color9});}
       .st8{fill:none;stroke:black;stroke-width:4;stroke-miterlimit:10;}
   </style>
   <g>
       <g>
           <g>
               <path class="st0" d="M235.96,292.64"/>
               <path class="st1" d="M227.69,206.07c-0.36-3.23,0.12-6.46,0.95-9.69c-9.59,0.87-17.1,8.93-17.1,18.75v83.11
                   c0,9.33,6.79,17.07,15.69,18.56c-0.46-4.24-0.46-8.55-0.77-12.56C223.99,271.52,228.93,238.79,227.69,206.07z"/>
               <path class="st2" d="M275.82,196.3h-45.46c-0.58,0-1.16,0.03-1.73,0.08c-0.83,3.23-1.3,6.46-0.95,9.69
                   c1.23,32.72-3.7,65.44-1.23,98.17c0.31,4.01,0.31,8.32,0.77,12.56c1.02,0.17,2.07,0.27,3.14,0.27h45.46
                   c10.4,0,18.83-8.43,18.83-18.83v-83.11C294.65,204.73,286.22,196.3,275.82,196.3z"/>
           </g>
           <path class="st3" d="M276.46,194.62h-46.74c-0.6,0-1.19,0.03-1.78,0.08c-9.86,0.9-17.58,9.18-17.58,19.27v85.42
               c0,9.59,6.98,17.54,16.13,19.08c1.05,0.18,2.13,0.27,3.23,0.27h46.74c10.69,0,19.36-8.66,19.36-19.35v-85.42
               C295.82,203.28,287.16,194.62,276.46,194.62z"/>
       </g>
       <g>
           <g>
               <g>
                   <path class="st4" d="M231.33,249.71c-5.31,3.33-8.84,9.23-8.84,15.96v23.57c0,10.4,8.43,18.83,18.83,18.83h2.8
                       C234.34,290.45,226.81,269.49,231.33,249.71z"/>
                   <path class="st1" d="M264.88,246.84h-23.57c-3.67,0-7.09,1.05-9.98,2.87c-4.52,19.78,3.01,40.74,12.78,58.35h20.77
                       c10.4,0,18.83-8.43,18.83-18.83v-23.57C283.71,255.27,275.28,246.84,264.88,246.84z"/>
               </g>
               <path class="st5" d="M264.88,246.84h-23.57c-3.67,0-7.09,1.05-9.98,2.87c-5.31,3.33-8.84,9.23-8.84,15.96v23.57
                   c0,10.4,8.43,18.83,18.83,18.83h2.8h20.77c10.4,0,18.83-8.43,18.83-18.83v-23.57C283.71,255.27,275.28,246.84,264.88,246.84z"/>
           </g>
           <g>
               <g>
                   <path class="st6" d="M250.7,261.85c0-1.87-1.52-3.39-3.39-3.39c-1.87,0-3.39,1.52-3.39,3.39v26.44
                       c2.27,0.28,4.53,0.56,6.78,0.87V261.85z"/>
                   <path class="st6" d="M240.55,261.85c0-1.87-1.52-3.39-3.39-3.39c-1.87,0-3.39,1.52-3.39,3.39v25.13
                       c2.26,0.32,4.52,0.61,6.78,0.89V261.85z"/>
                   <path class="st6" d="M261.09,261.85c0-1.87-1.52-3.39-3.39-3.39s-3.39,1.52-3.39,3.39v27.82c2.28,0.34,4.54,0.73,6.78,1.17
                       V261.85z"/>
                   <g>
                       <path class="st7" d="M247.31,296.45c1.87,0,3.39-1.52,3.39-3.39v-3.9c-2.26-0.31-4.52-0.59-6.78-0.87v4.77
                           C243.92,294.93,245.44,296.45,247.31,296.45z"/>
                       <path class="st7" d="M237.16,296.45c1.87,0,3.39-1.52,3.39-3.39v-5.18c-2.27-0.28-4.53-0.57-6.78-0.89v6.07
                           C233.76,294.93,235.28,296.45,237.16,296.45z"/>
                       <path class="st7" d="M257.7,296.45c1.87,0,3.39-1.52,3.39-3.39v-2.22c-2.24-0.44-4.51-0.83-6.78-1.17v3.39
                           C254.31,294.93,255.83,296.45,257.7,296.45z"/>
                       <path class="st7" d="M269.04,296.45c1.63,0,3-1.16,3.32-2.69c-2.21-0.74-4.45-1.37-6.71-1.92v1.22
                           C265.64,294.93,267.16,296.45,269.04,296.45z"/>
                       <path class="st6" d="M272.43,293.06v-31.21c0-1.87-1.52-3.39-3.39-3.39s-3.39,1.52-3.39,3.39v29.99
                           c2.27,0.55,4.51,1.18,6.71,1.92C272.4,293.53,272.43,293.3,272.43,293.06z"/>
                   </g>
               </g>
               <g>
                   <path class="st5" d="M247.31,296.45L247.31,296.45c-1.87,0-3.39-1.52-3.39-3.39v-31.21c0-1.87,1.52-3.39,3.39-3.39h0
                       c1.87,0,3.39,1.52,3.39,3.39v31.21C250.7,294.93,249.19,296.45,247.31,296.45z"/>
                   <path class="st5" d="M237.16,296.45L237.16,296.45c-1.87,0-3.39-1.52-3.39-3.39v-31.21c0-1.87,1.52-3.39,3.39-3.39l0,0
                       c1.87,0,3.39,1.52,3.39,3.39v31.21C240.55,294.93,239.03,296.45,237.16,296.45z"/>
                   <path class="st5" d="M257.7,296.45L257.7,296.45c-1.87,0-3.39-1.52-3.39-3.39v-31.21c0-1.87,1.52-3.39,3.39-3.39l0,0
                       c1.87,0,3.39,1.52,3.39,3.39v31.21C261.09,294.93,259.57,296.45,257.7,296.45z"/>
                   <path class="st5" d="M269.04,296.45L269.04,296.45c-1.87,0-3.39-1.52-3.39-3.39v-31.21c0-1.87,1.52-3.39,3.39-3.39l0,0
                       c1.87,0,3.39,1.52,3.39,3.39v31.21C272.43,294.93,270.91,296.45,269.04,296.45z"/>
               </g>
           </g>
       </g>
       <g>
           <g>
               <path class="st4" d="M253.06,212.27c-5.34,0.02-9.66,4.04-9.66,8.99c0,4.4,3.4,8.05,7.89,8.83
                   C250.04,224.8,251.48,217.72,253.06,212.27z"/>
               <path class="st2" d="M262.8,221.26c0-4.97-4.34-9-9.7-9c-0.01,0-0.03,0-0.04,0c-1.57,5.46-3.01,12.53-1.77,17.83
                   c0.59,0.1,1.19,0.16,1.81,0.16C258.45,230.26,262.8,226.23,262.8,221.26z"/>
           </g>
           <circle class="st8" cx="253.06" cy="221.18" r="9.16"/>
       </g>
   </g>
   </svg>
   `
    }
}

export function robotTop(num){
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
    if(num < 100){
        return `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">
   <style type="text/css">
       .st0{fill:rgb(${color1}, ${color2}, ${color3});}
       .st1{fill:rgb(${color4}, ${color5}, ${color6});}
       .st2{fill:rgb(${color7}, ${color8}, ${color9});}
       .st3{fill:none;stroke:#231F20;stroke-width:3;stroke-miterlimit:10;}
   </style>
   <g>
       <g>
           <g>
               <path class="st0" d="M439.7,98.36c5.77,1.78,11.74,3.01,17.8,3.76c-0.61,4.72-1.63,9.31-3.04,13.73
                   c-5.96-1.24-11.84-2.71-17.67-4.44C438.24,107.25,439.22,102.88,439.7,98.36z"/>
               <path class="st0" d="M457.72,83.74c0.29,2.73,0.44,5.5,0.44,8.3c0,3.42-0.23,6.78-0.66,10.09c-6.06-0.75-12.03-1.98-17.8-3.76
                   c0.22-2.08,0.35-4.19,0.35-6.33c0-2.77-0.2-5.49-0.57-8.15C445.42,84.73,451.62,84.42,457.72,83.74z"/>
               <path class="st1" d="M447.12,51.97c5.66,9.48,9.39,20.24,10.6,31.76c-6.1,0.69-12.3,0.99-18.24,0.15
                   c-0.92-6.69-2.97-13.01-5.92-18.79C438.53,61.54,442.88,56.8,447.12,51.97z"/>
               <path class="st2" d="M379.9,13.78c28.58,0,53.56,15.33,67.22,38.2c-4.24,4.83-8.59,9.56-13.56,13.11
                   c-9.81-19.19-29.75-32.33-52.79-32.33c-32.74,0-59.28,26.54-59.28,59.28c0,32.74,26.54,59.28,59.28,59.28
                   c25.95,0,48-16.68,56.03-39.91c5.83,1.73,11.71,3.2,17.67,4.44c-10.08,31.57-39.64,54.45-74.56,54.45
                   c-43.22,0-78.26-35.04-78.26-78.26C301.64,48.81,336.68,13.78,379.9,13.78z"/>
           </g>
           <path class="st3" d="M301.64,92.04c0,43.22,35.04,78.26,78.26,78.26s78.26-35.04,78.26-78.26c0-43.22-35.04-78.26-78.26-78.26
               S301.64,48.81,301.64,92.04z M321.49,92.04c0-32.74,26.54-59.28,59.28-59.28c32.74,0,59.28,26.54,59.28,59.28
               c0,32.74-26.54,59.28-59.28,59.28C348.03,151.32,321.49,124.78,321.49,92.04z"/>
       </g>
       <g>
           <g>
               <path class="st0" d="M66.49,95.82c-5.77,1.78-11.74,3.01-17.8,3.76c0.61,4.72,1.63,9.31,3.04,13.73
                   c5.96-1.24,11.84-2.71,17.67-4.44C67.95,104.71,66.97,100.34,66.49,95.82z"/>
               <path class="st0" d="M48.47,81.2c-0.29,2.73-0.44,5.5-0.44,8.3c0,3.42,0.23,6.78,0.66,10.09c6.06-0.75,12.03-1.98,17.8-3.76
                   c-0.22-2.08-0.35-4.19-0.35-6.33c0-2.77,0.2-5.49,0.57-8.15C60.77,82.19,54.57,81.88,48.47,81.2z"/>
               <path class="st1" d="M59.07,49.43c-5.66,9.48-9.39,20.24-10.6,31.76c6.1,0.69,12.3,0.99,18.24,0.15
                   c0.92-6.69,2.97-13.01,5.92-18.79C67.66,59,63.31,54.26,59.07,49.43z"/>
               <path class="st2" d="M126.29,11.24c-28.58,0-53.56,15.33-67.22,38.2c4.24,4.83,8.59,9.56,13.56,13.11
                   c9.81-19.19,29.75-32.33,52.79-32.33c32.74,0,59.28,26.54,59.28,59.28c0,32.74-26.54,59.28-59.28,59.28
                   c-25.95,0-48-16.68-56.03-39.91c-5.83,1.73-11.71,3.2-17.67,4.44c10.08,31.57,39.64,54.45,74.56,54.45
                   c43.22,0,78.26-35.04,78.26-78.26C204.55,46.27,169.51,11.24,126.29,11.24z"/>
           </g>
           <path class="st3" d="M126.29,11.24c-43.22,0-78.26,35.04-78.26,78.26c0,43.22,35.04,78.26,78.26,78.26s78.26-35.04,78.26-78.26
               C204.55,46.27,169.51,11.24,126.29,11.24z M125.42,148.78c-32.74,0-59.28-26.54-59.28-59.28c0-32.74,26.54-59.28,59.28-59.28
               c32.74,0,59.28,26.54,59.28,59.28C184.7,122.24,158.16,148.78,125.42,148.78z"/>
       </g>
   </g>
   </svg>`
    }
    
}