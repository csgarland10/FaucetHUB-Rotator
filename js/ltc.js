var s=[
"ltc.index.html",
"http://litecoin-faucet.com/?r=LRvKrEQ77Hop7N3RZPnAN718jQKZumTjZn",
"http://getfree.co.in/litecoin/?r=LRvKrEQ77Hop7N3RZPnAN718jQKZumTjZn",
"http://www.ref-hunters.ch/litecoin/?r=LRvKrEQ77Hop7N3RZPnAN718jQKZumTjZn",
"http://bitcoinstraker.com/litecoin/?r=LRvKrEQ77Hop7N3RZPnAN718jQKZumTjZn",
"http://getfree.co.in/litecoin/?r=LRvKrEQ77Hop7N3RZPnAN718jQKZumTjZn",
"http://yibtccoins.com/litecoin/?r=LRvKrEQ77Hop7N3RZPnAN718jQKZumTjZn",
"https://www.xfaucet.net/litecoin/?r=LRvKrEQ77Hop7N3RZPnAN718jQKZumTjZn",
"http://bitzer.com.es/litecoin/?r=LRvKrEQ77Hop7N3RZPnAN718jQKZumTjZn",
"https://bagi.co.in/litecoin/?ref=9293",
"http://litecoin-faucet.com/?r=LRvKrEQ77Hop7N3RZPnAN718jQKZumTjZn",
"http://gabicoins.com/litecoin/?r=LRvKrEQ77Hop7N3RZPnAN718jQKZumTjZn",
"http://freesatoshisfh.us/litecoin/?r=LRvKrEQ77Hop7N3RZPnAN718jQKZumTjZn",
"https://www.forumcoin.win/ltc/?r=LRvKrEQ77Hop7N3RZPnAN718jQKZumTjZn",
"https://dayuzarce.com/litecoin/?r=LRvKrEQ77Hop7N3RZPnAN718jQKZumTjZn",
"http://getcoin.site/litecoin/?id=722",
"https://www.keran.co/litecoin/?ref=1622",
"http://noticrypto.website/ltccut/?r=LRvKrEQ77Hop7N3RZPnAN718jQKZumTjZn",
    "http://litecoin.dogecoinspace.us/?r=LRvKrEQ77Hop7N3RZPnAN718jQKZumTjZn",
"http://lite.coins4free.club/?r=LRvKrEQ77Hop7N3RZPnAN718jQKZumTjZn",
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
