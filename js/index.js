const init = () => {

    
fetch('http://hp-api.herokuapp.com/api/characters/house/gryffindor')
    .then(resp => resp.json())
    .then(data => renderHouseMembers(data))

fetch('http://hp-api.herokuapp.com/api/characters/')
    .then(resp => resp.json())
    .then(data => renderCharacterInfo(data[0]))  


document.getElementById('Gryffindor').addEventListener('click', () => {
    let housePlaceholder = document.getElementById('houseplaceholder')
    housePlaceholder.textContent = "Gryffindor"

    fetch(`http://hp-api.herokuapp.com/api/characters/house/gryffindor`) 
    .then(resp => resp.json())
    .then(data => renderHouseMembers(data))
    

    
})

document.getElementById('Hufflepuff').addEventListener('click', () => {
    let housePlaceholder = document.getElementById('houseplaceholder')
    housePlaceholder.textContent = "Hufflepuff"

    fetch(`http://hp-api.herokuapp.com/api/characters/house/hufflepuff`) 
    .then(resp => resp.json())
    .then(data => renderHouseMembers(data))

    
})

document.getElementById('Ravenclaw').addEventListener('click', () => {
    let housePlaceholder = document.getElementById('houseplaceholder')
    housePlaceholder.textContent = "Ravenclaw"

    fetch(`http://hp-api.herokuapp.com/api/characters/house/ravenclaw`) 
    .then(resp => resp.json())
    .then(data => renderHouseMembers(data))

    
})

document.getElementById('Slytherin').addEventListener('click', () => {
    let housePlaceholder = document.getElementById('houseplaceholder')
    housePlaceholder.textContent = "Slytherin"

    fetch(`http://hp-api.herokuapp.com/api/characters/house/Slytherin`) 
    .then(resp => resp.json())
    .then(data => renderHouseMembers(data))

    
})
}





function renderHouseMembers(characterArray) {
    const characterList = document.getElementById('member-list')
    characterList.replaceChildren();
    characterArray.forEach(character => {
        const characterLi = document.createElement('li')
        characterLi.textContent = character.name;
        characterLi.addEventListener('click', () => {
            renderCharacterInfo(character);
        })
        characterList.appendChild(characterLi)
    })

    
    
}


function renderCharacterInfo(character) {
    const memberName = document.getElementById('member-name')
    const memberImage = document.getElementById('member-image')
    const memberSpecies = document.getElementById('member-species')
    const memberGender = document.getElementById('member-gender')
    const memberHouse = document.getElementById('member-house')
    const memberDob = document.getElementById('member-dob')
    const memberAncestry = document.getElementById('member-ancestry')
    const memberEyes = document.getElementById('member-eyes')
    const memberHair = document.getElementById('member-hair')
    const wandWood = document.getElementById('wand-wood')
    const wandCore = document.getElementById('wand-core')
    const wandLength = document.getElementById('wand-length')
    const memberPatronus = document.getElementById('member-patronus')
    const memberStudent = document.getElementById('member-student')
    const memberStaff = document.getElementById('member-staff')
    const memberActor = document.getElementById('member-actor')
    const memberAlive = document.getElementById('member-alive')
    memberName.textContent = "Name:   " + character.name;
    memberImage.src = character.image;
    memberImage.alt = "No Image Available"
    memberSpecies.textContent = "Species:   " + character.species;
    memberGender.textContent = "Gender:   " + character.gender;
    memberHouse.textContent = "House:   " + character.house;
    memberDob.textContent = "Date Of Birth:   " + character.dateOfBirth;
    memberAncestry.textContent = "Ancestry:   " + character.ancestry;
    memberEyes.textContent = "Eye Color:   " + character.eyeColour;
    memberHair.textContent = "Hair Color:   " + character.hairColour;
    wandWood.textContent = "Wood:   " + character.wand.wood;
    wandCore.textContent = "Core:   " + character.wand.core;
    wandLength.textContent = "Length:   " + character.wand.length;
    memberPatronus.textContent = "Patronus:   " + character.patronus;
    memberActor.textContent = "Actor:   " + character.actor;
    memberAlive.textContent = "Alive:   " + character.alive;

}



document.addEventListener("DOMContentLoaded", init)
