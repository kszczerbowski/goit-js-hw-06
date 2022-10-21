const list = document.querySelector('#categories');
const categories = list.children;
const categoriesAmount = categories.length;
console.log(`Number of categories: ${categoriesAmount}`);
for (const category of categories) {
    const heading = category.querySelector('h2').textContent;
    const innerList = category.querySelector('ul');
    const recordsAmount = innerList.children.length;
    console.log(`Category: ${heading}`);
    console.log(`Elements: ${recordsAmount}`);

}