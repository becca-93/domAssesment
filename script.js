const main = document.querySelector('main');

const firstJoke = "Why do Java developers wear glasses? Because they can't C#.";
const secondJoke = "Why do front-end developers eat lunch alone? Because, they don't know how to join tables.";
const thirdJoke = "A programmer puts two glasses on his bedside table before going to sleep. A full one, in case he gets thirsty, and an empty one, in case he does not.";

const template = `
    <section>
        <h1>My Jokes</h1>
        <ul>
            <li>${firstJoke}</li>
            <li>${secondJoke}</li>
            <li>${thirdJoke}</li>
        </ul>        
    </section>
`;

const p = document.createElement('p')

main.innerHTML = template;
main.appendChild(p);
p.textContent = "That's all folks!";