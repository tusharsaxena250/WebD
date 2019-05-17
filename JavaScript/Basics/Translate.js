    
function translate(lex, s){
  document.write(lex[s], " ");
}

l = {"merry":"god","christmas":"jul","and":"och","happy":"gott","new":"nytt","year":"ar"};
var q = prompt("Enter your wish!", "merry christmas");
var t = q.split(" ");

for(var i=0;i<t.length;i++){
  translate(l,t[i]);
}