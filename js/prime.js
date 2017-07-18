var s=[
"prime.1index.html",
  "http://getfree.co.in/primecoin/?r=AKne3RfJB7GWwtgxhhwHoNE3pBPM5Vfpk3",
"http://xpm-faucet.com/?r=AKne3RfJB7GWwtgxhhwHoNE3pBPM5Vfpk3",
"http://primecoins.club/?r=AKne3RfJB7GWwtgxhhwHoNE3pBPM5Vfpk3",
"http://topfaucetptc.info/primecoin/?r=AKne3RfJB7GWwtgxhhwHoNE3pBPM5Vfpk3",
"http://cryptorains.com/primecoin/index.php?r=AKne3RfJB7GWwtgxhhwHoNE3pBPM5Vfpk3",
"https://primecoin.us/?r=AKne3RfJB7GWwtgxhhwHoNE3pBPM5Vfpk3",
"http://xpm.cryptodrops.net/?r=AKne3RfJB7GWwtgxhhwHoNE3pBPM5Vfpk3",
"http://btcinbtc.com/primecoin/?ref=84",
];
var adr,i,x=0,c=s.length;
function address() {
adr=prompt('Enter your bitcoin address:');
s=s.map(function(x){
  return x.indexOf("a=") != -1 ? x + adr : x; 
});
}
function next(){
x+=1;
if (x>c-1)
  {
  x=0;
  }
changeSrc();
}
function prev(){
x-=1;
if (x<=0)
  {
  x=c-1;
  }
changeSrc();
}
function jumpTo() {
i=prompt("Enter a number to skip to that faucet.");
x=0;
while (i!=x) {
  if (x>c-2) {
  break;
  }
  x+=1;
}
changeSrc();
}
function newTab() {
var win=window.open(document.getElementById("fm").src, '_blank');
win.focus();
}
function changeSrc() {
document.getElementById("fm").src=s[x];
}
