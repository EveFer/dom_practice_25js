

const productsArray = []
const buttonAddProduct = document.getElementById('add-product')
const inputSearch = document.getElementById('search')

buttonAddProduct.addEventListener('click', (event) => {
    const newProduct = getDataForm ()
    productsArray.push(newProduct)
    printProducts(productsArray)
})

inputSearch.addEventListener('keyup', (event) => {
    const query = event.target.value
    const productsFiltered = productsArray.filter(product => product.name.includes(query) )
    printProducts(productsFiltered)
})

function getDataForm () {
    const inputs = document.querySelectorAll('form input.input')
    const productObject = {}
    inputs.forEach(input => {
        // console.log(input)
        // console.log('=====')
        // console.log(input.name)
        // console.log(input.value)
        // console.log(input.type)
        // console.log(input.checked)
        const propertyName = input.name
        const value = input.value
        productObject[propertyName] = value

        if(input.type === 'checkbox') {
            productObject[propertyName] = input.checked
        }
    })

    return productObject

    // returne un objeto con los datos de producto
}

function printProducts (products) {
    const listContainer = document.getElementById('list-products')
    listContainer.innerHTML = "" //💀
    products.forEach((product) => {
        const liElement = document.createElement('li')
        const textNode = document.createTextNode(product.name)
        liElement.appendChild(textNode)
        listContainer.appendChild(liElement)
        const className = product.isAvailable ? 'list-group-item-success' : 'list-group-item-danger'
        liElement.classList.add('list-group-item', className)
    })
}

// 