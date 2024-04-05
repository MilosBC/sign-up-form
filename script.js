// A piece of code that changes the font family of the labels

let labels = document.getElementsByTagName('label');
console.log(labels);

for  (let i = 0; i < labels.length; i++) {
    labels[i].style.fontFamily = "Reddit Mono, monospace";
    labels[i].style.fontWeight = 'bold';
} 

const submitButton = document.querySelector('.account-creation');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    alert("Well.....sorry to break it to you but you can't send the data right now. It was just a dummy form. The backend isn't set up yet, LOL" )
})