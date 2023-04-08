fetch('https://icanhazdadjoke.com/slack')
    .then((data) =>  data.json())
    .then((jokedata) => {
        const joketext = jokedata.attachments[0].text;
        const jokes = document.getElementById('jokes');
        jokes.innerHTML = joketext;
    });

// document.querySelector('button').addEventListener('click', () => {
//     fetch('https://icanhazdadjoke.com/slack')
//         .then((data) =>  data.json())
//         .then((jokeData) => {
//             const jokeText = jokeData.attachments[0].text;
//             const jokes = document.getElementById('jokes');
//             jokes.innerHTML = jokeText;
//         });
// });
document.getElementById("refresh").addEventListener('click', () => {
    fetch('https://icanhazdadjoke.com/slack')
        .then((data) =>  data.json())
        .then((jokeData) => {
            const jokeText = jokeData.attachments[0].text;
            const jokes = document.getElementById('jokes');
            jokes.innerHTML = jokeText;
        });
});

document.getElementById("close").addEventListener('click', () => {
    window.close();
});