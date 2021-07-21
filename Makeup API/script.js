const buttonss = document.createElement('button');
buttonss.setAttribute('id', 'button');
buttonss.setAttribute('class', 'btn btn-outline-primary');
buttonss.setAttribute('onclick', 'getData()');
buttonss.innerText = "Click to view data";
document.body.append(buttonss);

const container = document.createElement('div');
container.setAttribute('class', 'container');
const row = document.createElement('div');
row.setAttribute('class', 'row');
container.append(row);
document.body.append(container);

async function getData() {
    try {
        let jsondata = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json");
        var data = await jsondata.json();
        createcards(data);
    } catch (error) {
        console.log('error in getData()');
    }
}

function createcards(data) {

    let datas = data;

    for (i = 0; i < data.length; i++) {

        let brand_data = datas[i].brand;
        let name_data = datas[i].name;
        let price_data = datas[i].price;
        let description_data = datas[i].description;
        let product_data = datas[i].product_link;
        let image_url = datas[i].image_link;

        const column = document.createElement('div');
        column.setAttribute('class', 'col-4');
        const cards = document.createElement('div');
        cards.setAttribute('class', 'cards');
        const brandsssss = document.createElement('p');
        brandsssss.innerText = "Brand: " + brand_data;
        const names = document.createElement('p');
        names.innerText = "name: " + name_data;
        const price = document.createElement('p');
        price.innerText = "Price: " + price_data;
        const product = document.createElement('p');
        product.innerText = "Product: " + product_data;
        const description = document.createElement('p');
        description.innerText = "Description: " + description_data;
        const images = document.createElement('img');
        images.setAttribute('src', image_url);
        images.setAttribute('class', 'img-fluid');
        images.setAttribute('width', '300px');
        images.setAttribute('height', '300px');
        cards.append(brandsssss, names, price, product, description, images);
        column.append(cards);
        row.append(column);

    }

}


