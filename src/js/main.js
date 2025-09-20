import ProductData from "./ProductData.mjs";
import ProductList from "./productList.mjs";

const dataSource = new ProductData('tents');
const element = document.querySelector('.product-list');

const productList = new ProductList('tents', dataSource, element);

const list = new ProductList(ProductData);