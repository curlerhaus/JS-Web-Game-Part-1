function newImage(pic, left, bottom){
    let greenCharacter = document.createElement('img')
    greenCharacter.src = pic
    greenCharacter.style.position = 'fixed'
    greenCharacter.style.left = left + 'px'
    greenCharacter.style.bottom = bottom + 'px'
    document.body.append(greenCharacter)
    return greenCharacter
}

newImage('assets/green-character.gif', 100, 100)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)
newImage('assets/pine-tree.png', 450, 200)

function newItem(pic, left, bottom){
    let thing = newImage(pic, left, bottom)

    thing.addEventListener('dblclick', function(){
       thing.remove()
    })
}

newItem('assets/sword.png', 500, 405)
newItem('assets/sheild.png', 165, 185)
newItem('assets/staff.png', 600, 100)
