// A piece of code that changes the font family of the labels

let labels = document.getElementsByTagName('label');
console.log(labels);

for  (let i = 0; i < labels.length; i++) {
    labels[i].style.fontFamily = "Reddit Mono, monospace";
    labels[i].style.fontWeight = 'bold';
} 

