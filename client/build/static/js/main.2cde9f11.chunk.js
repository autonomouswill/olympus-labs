(this["webpackJsonpolympus-labs"]=this["webpackJsonpolympus-labs"]||[]).push([[0],{42:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},48:function(e,t){},59:function(e,t,n){"use strict";n.r(t);var a=n(11),i=n.n(a),s=n(32),u=n.n(s),r=(n(42),n(2)),p=n.n(r),o=n(13),l=n(21),y=(n(44),n(45),n(5)),c=function(e){var t=e.sidebarOpen,n=e.closeSidebar;return Object(y.jsxs)("div",{className:t?"sidebar_responsive h-full opacity-80 drop-shadow-xl":"",id:"sidebar",children:[Object(y.jsxs)("div",{className:"sidebar__title",children:[Object(y.jsx)("div",{className:"sidebar__img",children:Object(y.jsx)("h1",{children:"\u03a9 Olympus Labs"})}),Object(y.jsx)("i",{onClick:function(){return n()},className:"fa fa-times",id:"sidebarIcon","aria-hidden":"true"})]}),Object(y.jsxs)("div",{className:"sidebar__menu text-left",children:[Object(y.jsxs)("div",{className:"sidebar__link active_menu_link",children:[Object(y.jsx)("i",{className:"fa fa-home"}),Object(y.jsx)("a",{href:"#",children:"Daily Income"})]}),Object(y.jsxs)("div",{className:"sidebar__link",children:[Object(y.jsx)("i",{className:"fa fa-building-o"}),Object(y.jsx)("a",{href:"#",children:"True Performance"})]}),Object(y.jsxs)("div",{className:"sidebar__link",children:[Object(y.jsx)("i",{className:"fa fa-wrench"}),Object(y.jsx)("a",{href:"#",children:"Price to Floor"})]}),Object(y.jsxs)("div",{className:"sidebar__link",children:[Object(y.jsx)("i",{className:"fa fa-archive"}),Object(y.jsx)("a",{href:"#",children:"OHM Dashboard"})]}),Object(y.jsxs)("div",{className:"sidebar__link",children:[Object(y.jsx)("i",{className:"fa fa-handshake-o"}),Object(y.jsx)("a",{href:"#",children:"OHM 101 Docs"})]})]})]})};var d=function(e){return Object(y.jsx)("div",{class:"flex flex-wrap justify-center h-3/4 -mr-40",children:Object(y.jsx)("div",{class:"w-full mb-6 lg:mb-0 lg:w-1/2 px-4 flex flex-col",children:Object(y.jsxs)("div",{class:"flex-grow flex flex-col bg-white opacity-80 border-t border-b md:rounded sm:border shadow overflow-hidden",children:[Object(y.jsx)("div",{class:"border-b",children:Object(y.jsx)("div",{class:"flex justify-between px-6 -mb-px",children:Object(y.jsx)("h3",{class:"text-blue-dark py-4 font-normal text-xl text-bold",children:"Daily Income"})})}),Object(y.jsx)("div",{class:"flex-grow flex-1 px-6 py-6 text-grey-darker items-center -mx-4"}),console.log("props: "),console.log(e.value),""===e.value?Object(y.jsx)("div",{class:"px-6 py-2",children:Object(y.jsx)("div",{class:"text-center text-black bg-white",children:"Connect the wallet you used to stake OHM to see your rewards."})}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("div",{class:"flex-grow flex px-6 py-6 text-grey-darker items-center",children:Object(y.jsx)("div",{class:"flex-1 border-b mx-40 py-6",children:Object(y.jsxs)("span",{class:"text-8xl",children:["$",Number(e.value).toFixed(2).toString()]})})}),Object(y.jsx)("div",{class:"px-6 py-2",children:Object(y.jsx)("div",{class:"text-center text-grey",children:"Earning per day"})})]}),Object(y.jsx)("div",{class:"flex-grow flex px-6 py-10"}),Object(y.jsx)("div",{class:"flex-grow flex px-6 py-5"})]})})})},m=n(20),b=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],i=t[1],s=Object(a.useState)(0),u=Object(l.a)(s,2),r=u[0],b=u[1],f=Object(a.useState)(""),x=Object(l.a)(f,2),h=x[0],j=x[1],T=Object(a.useState)(""),v=Object(l.a)(T,2),w=v[0],O=v[1],g=[{inputs:[{internalType:"address",name:"_OHM",type:"address"},{internalType:"address",name:"_sOHM",type:"address"},{internalType:"uint256",name:"_epochLength",type:"uint256"},{internalType:"uint256",name:"_firstEpochNumber",type:"uint256"},{internalType:"uint256",name:"_firstEpochBlock",type:"uint256"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipPulled",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipPushed",type:"event"},{inputs:[],name:"OHM",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_recipient",type:"address"}],name:"claim",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"contractBalance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"distributor",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"epoch",outputs:[{internalType:"uint256",name:"length",type:"uint256"},{internalType:"uint256",name:"number",type:"uint256"},{internalType:"uint256",name:"endBlock",type:"uint256"},{internalType:"uint256",name:"distribute",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"forfeit",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_amount",type:"uint256"}],name:"giveLockBonus",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"index",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"locker",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"manager",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"pullManagement",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner_",type:"address"}],name:"pushManagement",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"rebase",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceManagement",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_amount",type:"uint256"}],name:"returnLockBonus",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"sOHM",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"enum OlympusStaking.CONTRACTS",name:"_contract",type:"uint8"},{internalType:"address",name:"_address",type:"address"}],name:"setContract",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_warmupPeriod",type:"uint256"}],name:"setWarmup",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_amount",type:"uint256"},{internalType:"address",name:"_recipient",type:"address"}],name:"stake",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"toggleDepositLock",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"totalBonus",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_amount",type:"uint256"},{internalType:"bool",name:"_trigger",type:"bool"}],name:"unstake",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"warmupContract",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"warmupInfo",outputs:[{internalType:"uint256",name:"deposit",type:"uint256"},{internalType:"uint256",name:"gons",type:"uint256"},{internalType:"uint256",name:"expiry",type:"uint256"},{internalType:"bool",name:"lock",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"warmupPeriod",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}],M=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"epoch",type:"uint256"},{indexed:!1,internalType:"uint256",name:"rebase",type:"uint256"},{indexed:!1,internalType:"uint256",name:"index",type:"uint256"}],name:"LogRebase",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"stakingContract",type:"address"}],name:"LogStakingContractUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"epoch",type:"uint256"},{indexed:!1,internalType:"uint256",name:"timestamp",type:"uint256"},{indexed:!1,internalType:"uint256",name:"totalSupply",type:"uint256"}],name:"LogSupply",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipPulled",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipPushed",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[],name:"DOMAIN_SEPARATOR",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"INDEX",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"PERMIT_TYPEHASH",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner_",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"value",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"gons",type:"uint256"}],name:"balanceForGons",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"who",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"circulatingSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"gonsForBalance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"index",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"stakingContract_",type:"address"}],name:"initialize",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"initializer",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"manager",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"nonces",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"uint256",name:"deadline",type:"uint256"},{internalType:"uint8",name:"v",type:"uint8"},{internalType:"bytes32",name:"r",type:"bytes32"},{internalType:"bytes32",name:"s",type:"bytes32"}],name:"permit",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"pullManagement",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner_",type:"address"}],name:"pushManagement",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"profit_",type:"uint256"},{internalType:"uint256",name:"epoch_",type:"uint256"}],name:"rebase",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"rebases",outputs:[{internalType:"uint256",name:"epoch",type:"uint256"},{internalType:"uint256",name:"rebase",type:"uint256"},{internalType:"uint256",name:"totalStakedBefore",type:"uint256"},{internalType:"uint256",name:"totalStakedAfter",type:"uint256"},{internalType:"uint256",name:"amountRebased",type:"uint256"},{internalType:"uint256",name:"index",type:"uint256"},{internalType:"uint256",name:"blockNumberOccured",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceManagement",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_INDEX",type:"uint256"}],name:"setIndex",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"stakingContract",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"value",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"value",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"}],k=function(){var e=Object(o.a)(p.a.mark((function e(){var t,n,a,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=window,n=t.ethereum){e.next=6;break}return console.log("Make sure you have metamask!"),e.abrupt("return");case 6:console.log("We have the ethereum object",n);case 7:return e.next=9,n.request({method:"eth_accounts"});case 9:0!==(a=e.sent).length?(s=a[0],console.log("Found an authorized account:",s),i(s),C()):console.log("No authorized account found");case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(o.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("fetching price.."),e.next=3,fetch("//olympus-labs.herokuapp.com/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify()}).then((function(e){return e.json()})).then((function(e){j(e.result)})).catch((function(e){console.log(e)}));case 3:e.sent;case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(o.a)(p.a.mark((function e(t){var a,i,s,u,o,l,y,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=new m.a.Contract("0x04F2694C8fcee23e8Fd0dfEA1d4f5Bb8c352111F",M,t),e.next=4,a.functions.balanceOf(n);case 4:return i=e.sent,b(m.a.utils.formatEther(i.toString())),s=new m.a.Contract("0xfd31c7d00ca47653c6ce64af53c1571f9c36566a",g,t),e.next=9,s.functions.epoch();case 9:return u=e.sent,o=u.distribute,e.next=13,a.functions.circulatingSupply();case 13:l=e.sent,y=Number(o.toString())/Number(l.toString()),c=(Number(y)*r).toFixed(4),O(c*h),console.log("Ethereum object doesn't exist!"),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(0),console.log(e.t0);case 23:case"end":return e.stop()}}),e,null,[[0,20]])})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(o.a)(p.a.mark((function e(){var t,n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t=window,n=t.ethereum){e.next=5;break}return alert("Get MetaMask!"),e.abrupt("return");case 5:return e.next=7,n.request({method:"eth_requestAccounts"});case 7:a=e.sent,console.log("Connected",a[0]),i(a[0]),C(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(o.a)(p.a.mark((function e(){var t,n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t=window,(n=t.ethereum)?(a=new m.a.providers.Web3Provider(n),_(),N(a),console.log("Setup event listener!")):console.log("Ethereum object doesn't exist!")}catch(i){console.log(i)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){k()}),[]);return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)(c,{sidebarOpen:!0}),Object(y.jsxs)("nav",{class:"flex items-center justify-between flex-wrap bg-teal-500 p-6",children:[Object(y.jsx)("div",{class:"flex items-center flex-shrink-0 text-white mr-6"}),Object(y.jsxs)("div",{class:"w-full block flex-grow lg:flex lg:items-center lg:w-auto",children:[Object(y.jsx)("div",{class:"text-sm lg:flex-grow"}),Object(y.jsx)("div",{children:""===n?Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("button",{onClick:S,className:"bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow",children:"Connect to Wallet"})}):Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("button",{onClick:null,className:"bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow",children:["Connected: 0x..",n.substr(n.length-6,n.length)]})})})]})]}),Object(y.jsx)("div",{className:"flex h-screen overflow-hidden",children:Object(y.jsxs)("div",{className:"relative flex flex-col flex-1",children:[console.log(w),Object(y.jsx)(d,{value:w})]})})]})};u.a.render(Object(y.jsx)(i.a.StrictMode,{children:Object(y.jsx)(b,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.2cde9f11.chunk.js.map