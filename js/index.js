const init = () => {
fetch('http://hp-api.herokuapp.com/api/characters/')
    .then(resp => resp.json())
    .then(data => renderHouseMenu(data))
    
fetch('http://hp-api.herokuapp.com/api/characters/house/gryffindor')
    .then(resp => resp.json())
    .then(data => autoGryffindor(data))

fetch('http://hp-api.herokuapp.com/api/characters/')
    .then(resp => resp.json())
    .then(data => autoHarry(data))  
}


function renderHouseMenu(houseArray){
        const houseList = document.getElementById('house-list');
        houseList.replaceChildren();
        houseArray.forEach(character => {
            const li = document.createElement('li');
            li.textContent = character.house;
            li.addEventListener('click', () => { 
                autoGryffindor(character);
            })
            houseList.appendChild(li);
        })
    }

function autoGryffindor(characterArray) {
    const characterList = document.getElementById('member-list')
    characterList.replaceChildren();
    characterArray.forEach(character => {
        const characterLi = document.createElement('li')
        characterLi.textContent = character.name;
        characterLi.addEventListener('click', () => {
            autoHarry(character);
        })
        characterList.appendChild(characterLi)
    })
}

// function autoHarry(detailArray) {
//     const detailList = document.getElementById('member-info')
//     detailList.replaceChildren();
//     detailArray.forEach(member => {
//         const memberName = document.getElementById('member-name')
//         const memberImage = document.getElementById('member-image')
//         const memberSpecies = document.getElementById('member-species')
//         const memberGender = document.getElementById('member-gender')
//         const memberHouse = document.getElementById('member-house')
//         const memberDob = document.getElementById('member-dob')
//         const memberAncestry = document.getElementById('member-ancestry')
//         const memberEyes = document.getElementById('member-eyes')
//         const memberHair = document.getElementById('member-hair')
//         const memberWand = document.getElementById('member-wand')
//         const wandWood = document.getElementById('wand-wood')
//         const wandCore = document.getElementById('wand-core')
//         const wandLength = document.getElementById('wand-length')
//         const memberPatronus = document.getElementById('member-patronus')
//         const memberStudent = document.getElementById('member-student')
//         const memberActor = document.getElementById('member-actor')
//         const memberAlive = document.getElementById('member-alive')
//         memberName.textContent = member.name
//         memberImage.src = member.memberImage
//         memberImage.alt = member.name
//         memberSpecies.textContent = member.species
//         memberGender.textContent = member.memberGender
//         detailList.appendChild(memberName, memberImage, memberSpecies)

//     })
// }

document.addEventListener("DOMContentLoaded", init)
