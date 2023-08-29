

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


const lazyLoadObserver = new IntersectionObserver((entries) => {
    const lastItem = entries[0];
    if(lastItem.isIntersecting){
        for(let i =0; i < 10; i++){
            const newCard = document.createElement("div");
            newCard.classList.add("card");
            newCard.innerHTML = `card ${i}`;
            document.querySelector("#cardContainer").appendChild(newCard);
            myIntersectionObserver.observe(newCard);
        }
        lazyLoadObserver.unobserve(lastItem.target);
        lazyLoadObserver.observe(document.querySelector(".card:last-of-type"));
    }
})

lazyLoadObserver.observe(document.querySelector(".card:last-of-type"));