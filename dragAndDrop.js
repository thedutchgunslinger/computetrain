// const fill = document.querySelector('#fill');
// const items = document.querySelectorAll('.item');

// fill.addEventListener('dragstart', dragStart);
// fill.addEventListener('dragend', dragEnd);

// for(const item of items){
//     item.addEventListener('dragover', dragOver);
//     item.addEventListener('dragenter', dragEnter);
//     item.addEventListener('dragleave', dragLeave);
//     item.addEventListener('drop', dragDrop);
// }


// function dragStart(){
//     console.log('drag start');
//     setTimeout(() => this.classList.add('hold'), 0);
// }

// function dragEnd(){
//     console.log('drag end');
//     this.classList.remove('hold');
// }


// function dragOver(e){
//     e.preventDefault();
//     console.log('drag over');
// }

// function dragEnter(e){
//     e.preventDefault();
//     console.log('drag enter');
//     this.classList.add("hover");

// }

// function dragLeave(){
//     console.log('drag leave');
//     this.classList.remove("hover");

// }

// function dragDrop(){
//     console.log('drag drop');
//     if(this.hasChildNodes()) {
//         this.removeChild(this.childNodes[0]);
//     };

//     this.classList.remove("hover");
//     const newEl = fill.cloneNode(true);
//     newEl.classList.remove('hold');

//     const randomNum = Math.floor(Math.random() * 100) + 200;
//     newEl.style.background = `url('https://picsum.photos/${randomNum}') no-repeat center center/cover`
//     this.appendChild(newEl)
// }



const container = document.querySelector("#dropzoneY");
const items = document.querySelectorAll(".itemY");
const button = document.querySelector("#toArray");
const dropContainer = document.querySelector("#dropContainer");

let counter = 1;
for(const item of items){
    item.setAttribute("draggable", true);
    item.setAttribute('id', `item${counter}`);
    item.addEventListener("dragstart", drag);
    item.addEventListener("dragend", dragEnd);
    item.setAttribute("data-id", item.style.top)
    item.style.background = getRandomHexColor();
    item.innerHTML = `<p>${counter}</p>`
    counter++;
}


container.addEventListener("dragover", allowDrop);
container.addEventListener("drop", drop);

button.addEventListener("click", handleClick);

function drag(e){
    setTimeout(() => this.classList.add("hold"), 0);
e.dataTransfer.setData("text", e.target.id);
e.dataTransfer.setData("id", e.target.getAttribute("data-id"));
}

function dragEnd(){
this.classList.remove("hold");
}

function drop(e){
e.preventDefault();
const data = e.dataTransfer.getData("text");
const el = document.getElementById(data);
el.classList.remove("hold");

let style = window.getComputedStyle(el);
let top = parseInt(style.top.replace("px", ""));
let left = parseInt(style.left.replace("px", ""));

top = e.offsetY;
left = e.offsetX;

el.style.top = top+"px";
el.setAttribute("data-id", top);


console.log(e.offsetX, e.offsetY);
}

function allowDrop(e){
e.preventDefault();
}

function handleClick(){
    const array = [];
    container.querySelectorAll(".itemY").forEach((item) => {
        console.log(item.getAttribute("data-id"));
        array.push({el: item, top: item.getAttribute("data-id")})

    })

    console.log(filterArray(array));

    function filterArray(array) {
      // sort array by top
      const newArray = array.sort((a, b) => {
        return a.top - b.top;
      });
      return newArray;
    }

    function mapArray(array){
        const newArray = array.map((item) => {
            return item.el;
        })
        return newArray;
    }

    console.log(mapArray(array));
    const mappedArray = mapArray(array);
    console.log(mappedArray);
    for (element of mappedArray) {
        console.log(element)
        element.setAttribute("draggable", false);
      dropContainer.appendChild(element);
    }
}
