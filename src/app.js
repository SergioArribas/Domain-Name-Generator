/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];


function generateDomains(pronoun, adj, noun) {
  let domains = [];
  
  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        domains.push(p + a + n + ".com");
      }
    }
  }
  
  return domains;
}


let domainList = generateDomains(pronoun, adj, noun);
domainList.forEach(domain => console.log(domain));
let myTag = document.querySelector("Dominios")

};
