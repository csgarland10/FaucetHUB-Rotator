var s=[
"doge.index.html",
"http://ecards.nijahosting.com/multifaucet/?r=D9W2mPRZbeR7sPqhWPd35CAiPnS6dzdLq7",
"http://doge.snails.racing/?r=D9W2mPRZbeR7sPqhWPd35CAiPnS6dzdLq7",
"https://coinsinafaucet.ddns.net/dogecoin/?r=D9W2mPRZbeR7sPqhWPd35CAiPnS6dzdLq7",
"https://coinsinafaucet.ddns.net/dogecoin/?r=D9W2mPRZbeR7sPqhWPd35CAiPnS6dzdLq7",
"http://bonusbtc.cf/?r=D9W2mPRZbeR7sPqhWPd35CAiPnS6dzdLq7",
"http://www.ref-hunters.ch/dogecoin/?r=D9W2mPRZbeR7sPqhWPd35CAiPnS6dzdLq7",
"http://bonusbtc.cf/?r=D9W2mPRZbeR7sPqhWPd35CAiPnS6dzdLq7",
"http://ecards.nijahosting.com/cryptotheme/?r=D9W2mPRZbeR7sPqhWPd35CAiPnS6dzdLq7",
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
