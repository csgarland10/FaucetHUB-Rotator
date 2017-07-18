var s=[
"black.index.html",
"http://getfree.co.in/blackcoin/?r=BRZDWQv7T3FxNtExtbggFv4iv6BnHEM1fF",
"http://blackcoin.info/ref/BBDQdiy9pYSb7zh21z9Hc8RMEzseT6bjmX",
"http://hamsab.net/blackcoin/?ref=1908",
"http://blackcoinfaucet.com/?r=BRZDWQv7T3FxNtExtbggFv4iv6BnHEM1fF",
"http://faucetmega.com/faucetbox/index.php?r=BRZDWQv7T3FxNtExtbggFv4iv6BnHEM1fF",
"https://www.yourfreecoin.com/blackcoin/?r=BRZDWQv7T3FxNtExtbggFv4iv6BnHEM1fF",
"https://www.forumcoin.win/blk/?r=BRZDWQv7T3FxNtExtbggFv4iv6BnHEM1fF",
"http://rektcoins.pw/Blackcoin/index.php?r=BRZDWQv7T3FxNtExtbggFv4iv6BnHEM1fF",
"http://bitcoinspace.us/blk/?r=BRZDWQv7T3FxNtExtbggFv4iv6BnHEM1fF",
"http://freesatoshisfh.us/blackcoin/?r=BRZDWQv7T3FxNtExtbggFv4iv6BnHEM1fF",
"http://getdogecoinsfaucet.us/blackcoin/?r=BRZDWQv7T3FxNtExtbggFv4iv6BnHEM1fF",
"http://bitcoinspace.us/blackcoin/?r=BRZDWQv7T3FxNtExtbggFv4iv6BnHEM1fF",
"https://www.xfaucet.net/blackcoin/?r=BRZDWQv7T3FxNtExtbggFv4iv6BnHEM1fF",
"http://yibtccoins.com/blackcoin/?r=BRZDWQv7T3FxNtExtbggFv4iv6BnHEM1fF",
"https://bagi.co.in/blackcoin/?ref=154",
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