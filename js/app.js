
let options = []

document.getElementById('button-add').addEventListener('click', function () {

    let inputValue = document.getElementById('input-options').value
    options.push(inputValue)

    var item = document.createElement('li')
    item.innerHTML = `${inputValue}`
    document.getElementById('availableOptions').appendChild(item)

    document.getElementById('input-options').value = ''

    console.log(`La logitud del array es de ${options.length}, y el inputValue es ${inputValue}`)

})

document.getElementById('button-random').addEventListener('click', function () {

    if (options.length === 0) {
        alert('Agrega algunos elementos primero')
    } else {
        let randomValue = options[Math.floor(Math.random() * options.length)]

        var itemRandom = document.createElement('h3')
        itemRandom.innerHTML = `${randomValue}`
        document.getElementById('randomValue').appendChild(itemRandom)

        return console.log(randomValue)

    }

})