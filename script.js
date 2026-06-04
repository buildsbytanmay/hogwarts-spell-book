const URL = "https://potterapi-fedeperin.vercel.app/en/spells";
// const URL = "https://potterapi-fedeperin.vercel.app/es/characters?search=Weasley";
// const URL = "https://potterapi-fedeperin.vercel.app/en/books";

async function getSpells(i){
    let response = await fetch(URL);
    let spells = await response.json();
    let spellbox = document.querySelector("#box1");
    let usebox = document.querySelector("#box2");
    spellbox.innerText = spells[i].spell;
    usebox.innerText = spells[i].use;
}

let i = 0;
let nbtn = document.querySelector("#nbtn");
nbtn.addEventListener("click", () => {
    if(i >= 0 && i <= 71){
        getSpells(i);
        i++;
    }
    else{
        i = 0;
    }
    console.log(i);
})