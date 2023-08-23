const hour=document.querySelector(".hr");
const mint=document.querySelector(".mn");
const second=document.querySelector(".sn");
let hr,mn,sn;

setInterval(clock,1000);
function clock(){
    let dt=new Date();
     hr=dt.getHours();
     mn=dt.getMinutes();
     sn=dt.getSeconds();

     indicator(hr, mn, sn);

    hr<10 ?(hr="0"+hr):hr;
    mn<10 ?(mn="0"+mn):mn;
    sn<10 ?(sn="0"+sn):sn;

   

    hour.innerHTML=hr;
    mint.innerHTML=mn;
    second.innerHTML=sn;
   
}
const hourindicator=document.querySelector(".indicatorHR");
const mintindicator=document.querySelector(".indicatorMN");
const secondindicator=document.querySelector(".indicatorSN");

const hourindicatorBC=document.querySelector(".bcindicatorHR");
const mintindicatorBC=document.querySelector(".bcindicatorMN");
const secondindicatorBC=document.querySelector(".bcindicatorSN");

function indicator(hr, mn, sn){
    //hours=hr*100/24=7.5
    //minute=60*160/60=3
    //second=60*160/60=3

    let hours,minutes,seconds;
    hours=hr*7.5;
    minutes=mn*3;
    seconds=sn*3;

    hourindicator.style.background = `conic-gradient(var(--color) ${hours}deg ,#000 0deg)`;
    mintindicator.style.background = `conic-gradient(var(--color) ${minutes}deg ,#000 0deg)`;
    secondindicator.style.background = `conic-gradient(var(--color) ${seconds}deg ,#000 0deg)`;

    hourindicatorBC.style.transform = `rotate(${hours}deg)`;
    mintindicatorBC.style.transform = `rotate(${minutes}deg)`;
    secondindicatorBC.style.transform = `rotate(${seconds}deg)`;
}