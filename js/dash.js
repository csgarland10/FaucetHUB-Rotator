var s=[
"dash.1index.html",
    "http://dash-faucet.com/?r=XpUhWPoQjbU7RTTXr6xB5fKUMcf7RsR7xK",
    "http://www.ref-hunters.ch/dashfaucet/?r=XpUhWPoQjbU7RTTXr6xB5fKUMcf7RsR7xK",
    "http://dashfaucet.club/?r=XpUhWPoQjbU7RTTXr6xB5fKUMcf7RsR7xK",
    "http://dash.cryptodrops.net/?r=XpUhWPoQjbU7RTTXr6xB5fKUMcf7RsR7xK",
    "https://bagi.co.in/dashcoin/?ref=1822",
    "http://dash.cryptodrops.net/?r=XpUhWPoQjbU7RTTXr6xB5fKUMcf7RsR7xK",
    "http://www.adrianocoins.com/faucet/185CcVThQhKE4XQU9fwousBtu2mbGbAm82/dash200/?r=XpUhWPoQjbU7RTTXr6xB5fKUMcf7RsR7xK",
    "http://yibtccoins.com/dash/?r=XpUhWPoQjbU7RTTXr6xB5fKUMcf7RsR7xK",
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
