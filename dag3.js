// awaitCall();
// thenCall();


// async function awaitCall(){
//     const catFacts = fetch("https://catfact.ninja/fact");
//     const result = await catFacts;
//     const json = await result.json();
//     console.log(json.fact);
// }

// async function thenCall(){
//     fetch("https://catfact.ninja/fact").then(result => result.json()).then(json => console.log(json.fact)); 

// }



// const myPromise1 = new Promise((resolve, reject) => {
//     const random = Math.random();
//     console.log(random);
//     setTimeout(() => {
//         if(random > 0.5){
//         resolve({ "Promise 1": random });
//         } else {
//             reject({ "Promise 1 failed": random });
//         }
//     }, 1000);
// })

// const myPromise2 = new Promise((resolve, reject) => {
//     const random = Math.random();
//     setTimeout(() => {
//         if(random > 0.5){
//         resolve({"Promise 2": random});
//         } else {
//             reject({"Promise 2 failed": random});
//         }
//     }, 2000);
// })


// console.log("Before Promise"); // 0
// myPromise1.then(result => console.log(result)).catch(result => console.log(result)); // 1
// myPromise2.then(result => console.log(result)).catch(result => console.log(result)); // 1
// myAsyncFunction();


// async function myAsyncFunction(){
//     try {
//         let result = await myPromise1;
       
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }


// extenden altijd een html element
// er moet altijd een - in de naam
// we moeten altijd super() aanroepen in de constructer

const template = document.createElement("template");
template.innerHTML = `
<span><slot></slot></span>
<span><slot name="secondSlot"></slot></span>

<style>
    p {
        color: var(--color);
    }
</style>
`;

class myFirstElement extends HTMLElement {
    constructor(){
        super();
        const shadow = this.attachShadow({ mode: "open" });

        const color = this.getAttribute("color") || "green";

        const p = document.createElement("p");
        p.innerText = "test";
        p.style.setProperty("--color", color);
        shadow.appendChild(p);

        shadow.appendChild(template.content.cloneNode(true));

        

    }
}

window.customElements.define("first-element", myFirstElement)


const template2 = document.createElement("template");
template2.innerHTML = `
<span><slot></slot></span>
<span><slot name="secondSlot"></slot></span>

<style>
    .slot {
        display: block;
        width: 100px;
        aspect-ratio: 1/1;
        background-color: var(--color);
    }
</style>
`;

class SlotsTest extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    for (let i = 0; i < 10; i++) {
      const slot = document.createElement("slot");
      slot.setAttribute("name", `slot${i}`);
      slot.classList.add("slot");
      slot.style.setProperty(
        "--color",
        `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
          Math.random() * 255
        })`
      );
      shadow.appendChild(slot);
    }
    shadow.appendChild(template2.content.cloneNode(true));
  }
}

window.customElements.define("slot-test", SlotsTest);


// tijdlijn bestaat uit een grid |left 300px|center 100px|right 300px|
// create top
// loop door de stam
    // check for element with attribute step
    //  place element in right or left column
// create bottom


const clickEl = document.querySelector("#click");

clickEl.addEventListener("click", () => {
    console.log("tweede click")
})
clickEl.addEventListener("dblclick", (e) => {
    console.log("eerste click")
    e.preventDefault();
})
