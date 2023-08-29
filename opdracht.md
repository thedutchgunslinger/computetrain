# opdracht!

pas de huidige code aan zodat als je bij de laatste item aankomt er 10 nieuwe items toe worden gevoegd aan de lijst. dit moet zo "potentieel" tot oneindigheid door gaan.

```html
<div id="cardContainer">
        <div class="card">item</div>
        <div class="card">item</div>
        <div class="card">item</div>
        <div class="card">item</div>
        <div class="card">item</div>
        <div class="card">item</div>
        <div class="card">item</div>
        <div class="card">item</div>
        <div class="card">item</div>
        <div class="card">item</div>
        <div class="card">item</div>
        <div class="card">item</div>
        <div class="card">item</div>
        <div class="card">item</div>
        <div class="card">item</div>
        <div class="card">item</div>
        <div class="card">item</div>
        <div class="card">item</div>
        <div class="card">item</div>
        <div class="card">item</div>
        <div class="card">item</div>
        <div class="card">item</div>
        <div class="card">item</div>
        <div class="card">item</div>
        <div class="card">item</div>
        <div class="card">item</div>
        <div class="card">item</div>
        <div class="card">item</div>
        <div class="card">item</div>
        <div class="card">item</div>
        <div class="card">item</div>
        <div class="card">item</div>
        <div class="card">item</div>
        <div class="card">item</div>
        <div class="card">item</div>
        <div class="card">item</div>
        <div class="card">item</div>
        <div class="card">item</div>
        <div class="card">item</div>
        <div class="card">Last Item</div>
    </div>
```

```css 

  body {
        height: 200vh;
  }


  #cardContainer {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .card {
    padding: .5em 1em;
    border: 1px solid black;
    width: 100px;
    visibility: hidden;
    margin-left: 100px;
    transition: margin-left 0.2s ease-in-out;
  }

  .show {
    visibility: visible;
    margin-left: 0px;
  }

```


```js
const myIntersectionObserver = new IntersectionObserver((entries) => {
    console.log(entries);

    entries.forEach((entry) => {
        entry.target.classList.toggle("show", entry.isIntersecting);
        if(entry.isIntersecting){
            myIntersectionObserver.unobserve(entry.target);
        }
    })
}, {
    threshold: 1,
})


const cards = document.querySelectorAll('.card');

for(card of cards){
    myIntersectionObserver.observe(card);
}
```