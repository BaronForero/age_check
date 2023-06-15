
// console.log(inputAge);
// console.log(output);


function adult() {
    const inputAge = document.querySelector('form input[type="number"]').value
    const output = document.querySelector('form p')

    if (inputAge >= 18) {
        output.innerHTML = "You get iiiin, my friend! Keep rocking it! 🤘 "
    } else {
        output.innerHTML = "Nice try, my friend! Catch you on the flip side when you hit the big 1-8! 😉";
    }
}