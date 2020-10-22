import React from 'react';
import {ProductContext} from "../context/products";

const Filters = () => {
    const {filters: {search, category, shipping, price}, updateFilters, sorted} = React.useContext(ProductContext);
    return (
        <section className="filters-section">
            <h2 className="search-products">search products</h2>
            <form className="filters-form">
                {/* search input  */}
                <div className="form-group">
                    <label htmlFor="search">search term</label>
                    <input
                        type="text"
                        id="search"
                        name="search"
                        value={search}
                        onChange={updateFilters}
                        className="form-control"
                    />
                    {/* end search input  */}
                    {/* select category */}
                    <div className="form-group">
                        <label htmlFor="category">category</label>
                        <select
                            name="category"
                            id="category"
                            className="form-control"
                            value={category}
                            onChange={updateFilters}>
                            <option value="all">all</option>
                            <option value="cake">cake</option>
                            <option value="cookie">cookie</option>
                            <option value="fruit">fruit</option>
                            <option value="drink">drink</option>
                        </select>
                    </div>
                    {/* end select category */}
                    {/* free shipping */}
                    <div className="form-group">
                        <input
                            type="checkbox"
                            name="shipping"
                            id="shipping"
                            checked={shipping}
                            onChange={updateFilters}/>
                        <label htmlFor="shipping">free shipping</label>
                    </div>
                    {/* end free shipping */}
                </div>
                <div className="price-group">
                    <p>price</p>
                    <label>
                        <input
                            type="radio"
                            name="price"
                            value="all"
                            checked={price === 'all'}
                            onChange={updateFilters}
                        />
                        all
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="price"
                            value="0"
                            checked={price === 0}
                            onChange={updateFilters}
                        />
                        $0 - $10
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="price"
                            value="10"
                            checked={price === 10}
                            onChange={updateFilters}
                        />
                        $10 - $20
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="price"
                            value="20"
                            checked={price === 20}
                            onChange={updateFilters}
                        />
                        over $20
                    </label>
                </div>
            </form>
            <h6>total products: {sorted.flat().length}</h6>
            <hr/>
        </section>
    );
}

export default Filters;