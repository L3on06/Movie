// let person = prompt('Whats is your email');
// while (true) {
//     if (person === 'leon') break;
//     else {
//         person = alert("Email eshte gabim ju lutem provoni perseri")
//          person = prompt('Whats is your email');
//     }
// }
// let password = prompt('Whats is your password');
// while (true) {
//     if (password === '12345678') break;
//     else {
//         password = alert("Password eshte gabim ju lutem provoni perseri")
//         password = prompt('Whats is your password');
//     }
// }

// function addCard() {
//     let title = document.getElementById('title');
//     let paragraf = document.getElementById('paragraf');
//     let image = document.getElementById('image');

//     let flex = document.querySelector('.flex');


// let div = document.createElement('div');
// div.className = "card";

//     let a = document.createElement('a');
// a.href = '#'

//     let img = document.createElement("img");
// img.src = `./sourse/Images/Movies/${image.value}.jpg`;
// image.value = ''


// let cardBody = document.createElement('div');
// cardBody.className = "card-body";

// let h1 = document.createElement('h1');
//     h1.innerText = title.value;
// title.value = ''
    

// let p = document.createElement('p');
// p.innerText = paragraf.value;
// paragraf.value = ''

// flex.appendChild(div);
// div.appendChild(a);
// a.appendChild(img);
//     div.appendChild(cardBody);
//     cardBody.append(h1, p);
// }

// let person = prompt('Whats is your email');
// while (true) {
//     if (person === 'leon') break;
//     else {
//         person = alert("Email eshte gabim ju lutem provoni perseri")
//          person = prompt('Whats is your email');
//     }
// }
// let password = prompt('Whats is your password');
// while (true) {
//     if (password === '12345678') break;
//     else {
//         password = alert("Password eshte gabim ju lutem provoni perseri")
//         password = prompt('Whats is your password');
//     }
// }

function addCard() {
    let title = document.getElementById('title');
    let paragraf = document.getElementById('paragraf');
    let image = document.getElementById('image');
    let flex = document.querySelector('.flex');


    let div = document.createElement('div').className = "card";

    let a = document.createElement('a').href = '#'

    let img = document.createElement("img");
    img.src = `./sourse/Images/Movies/${image.value}.jpg`;
    // img.alt = 'Movie Image'
    image.value = ''


    let cardBody = document.createElement('div').className = "card-body";

    let h1 = document.createElement('h1');
    h1.innerText = title.value;
    title.value = ''

    let p = document.createElement('p');
    p.innerText = paragraf.value;
    paragraf.value = ''

    flex.appendChild(div);
    div.appendChild(a);
    a.appendChild(img);
    div.appendChild(cardBody);
    cardBody.append(h1, p);
}