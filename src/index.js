// write your code here!
fetch("http://localhost:3000/ducks")
    .then((r) => r.json())
    .then(duck => {
        duck.forEach(renderDucks)
        popDuck(duck[0])
    })



const duckLikes = document.getElementById("duck-display-likes")
duckLikes.addEventListener("click", () => {
    duckLikes.textContent = parseInt(duckLikes.textContent) + 1 + " Likes"
})

function renderDucks(duck) {

    const img = document.createElement("img")
    img.src = duck["img_url"]
    const duckPic = document.getElementById("duck-nav")
    duckPic.append(img)

    img.addEventListener("click", () => {
        popDuck(duck)

        // duckLikes.addEventListener("click", () => {
        //     duckLikes.textContent = duckObject["likes"]++ + " Likes"
        //     // parse interger in here?
        // })








    })

}
function popDuck(duck) {
    const imgUrl = document.getElementById("duck-display-image")
    const duckName = document.getElementById("duck-display-name")
    //const duckLikes = document.getElementById("duck-display-likes")

    duckName.textContent = duck["name"]
    imgUrl.src = duck["img_url"]
    imgUrl.alt = duck["name"]
    duckLikes.textContent = duck["likes"] + " Likes"
}

const findForm = document.getElementById("new-duck-form")
findForm.addEventListener("submit", (e) => {
    e.preventDefault()
    newDuckInput()
})

function newDuckInput() {
    const newName = document.getElementById("new-name")
    const newUrl = document.getElementById("new-url")



    fetch("http://localhost:3000/ducks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: newName.value,
            img_url: newUrl.value,
            likes: 0,





        }),
    })
        .then(r => r.json())
        .then(data => renderDucks(data))

}



