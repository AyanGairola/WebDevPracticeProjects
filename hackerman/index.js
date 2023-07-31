//for the background animantion
const s = window.screen;
const w = (hacker.width = s.width);
const h = (hacker.height = s.height);
const ctx = hacker.getContext("2d");
const p=Array(Math.floor(w/10)+1).fill(0);
const random=(items) =>items[Math.floor(Math.random()* items.length)];
const hex="0123456789ABCDEFGHIJK".split("");


setInterval(()=>{
    ctx.fillStyle="rgba(0,0,0,0.5)";
    ctx.fillRect(0,0,w,h);
    ctx.fillStyle="green"
    p.map((v,i)=>{
        ctx.fillText(random(hex),i*10,v);
        p[i]=v >=h || v>50+10000*Math.random()? 0:v+10;
    });

   
},1000/30);

//for the text


  

let a = [
    "Initializing Hack tool...",
    "Connecting to Instagram..",
    "Connecting to server 1...",
    "Connection failed. Retrying...",
    "Connecting to server 2",
    "Connected Successfully...",
    "Username iamharry...",
    "Trying Brute Force...",
    "200K passwords tried...",
    "Match not found",
    "Another 200K passwords tried...",
    "Match not found...",
    "Another 200K passwords tried...",
    "Match not found...",
    "Another 200K passwords tried...",
    "Match found...",
    "Accessing Account...",
    "Hack Successful."
]



const sleep = async (seconds) => {
    return new Promise((resolve, reject) => {
            setTimeout(() => { resolve(true) }, seconds * 1000)
    })
}

const showHack = async (message) => {
    await sleep(3)
    // console.log(message)
    text.innerHTML = text.innerHTML + message + "<br>"
}

(async () => {
    for (let i = 0; i < a.length; i++) {
            await showHack(a[i])
    }
})()


