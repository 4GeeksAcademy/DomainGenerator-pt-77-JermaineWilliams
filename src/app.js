import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


  //write your code here
  let pronoun = ['the', 'our', 'them', 'you', 'she'];
  let adj = ['great', 'big', 'old', 'fluffy','deep'];
  let noun = ['jogger', 'racoon','Park', 'Chicago', 'banana'];

  for(let i = 0; i < pronoun.length; i++){
    console.log( "i=", i)
    for(let a = 0; a < adj.length; a++){
      console.log( "a=", a)
      for(let n= 0; n < noun.length; n++){
        console.log( "n=", n)
      console.log(pronoun[i] + adj[a] + noun[n]);
      };}
    }
  
    

