// helper functions

import url from './URL';

// flatten
export function flattenProducts(data) {
    return data.map( item => {
        //cloudinary
        let image = (item.image && item.image.url) || null;
        //local setup no deployment
        //let image = `${url}${item.image.url}`;
        return {...item, image};
    })
}

export function featuredProducts(data) {
    return data.filter(item => {
        return item.featured === true;
    });
}

//paginate
export function paginate(products) {

    const itemsPerPage = 4;
    const numberOfPages = Math.ceil(products.length / itemsPerPage);

    // const newProducts = Array.from({length: numberOfPages}, () => {
    //     return products.splice(0, itemsPerPage);
    // });
    const newProducts = Array.from({length: numberOfPages}, (_, index) => {
        const start = index * itemsPerPage;
        return products.slice(start, start + itemsPerPage)
    });

    return newProducts;
}