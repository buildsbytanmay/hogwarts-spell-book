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