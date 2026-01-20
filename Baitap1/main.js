// câu 1 : khai báo constructor function product 
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// câu 2 : tạo mảng  product  ít nhất 5  sản phẩm  , thuộc tối thiểu 2 danh mục khác nhau

const products = [
    new Product(1, "Phone", 500, 0, "Electronics", true),
    new Product(2, "Laptop", 1200, 5, "Electronics", true),
    new Product(3, "Headphones", 25, 0, "Accessories", true),
    new Product(4, "Charger", 15, 20, "Accessories", false),
    new Product(5, "Mouse", 30, 8, "Accessories", true),
];
// console.log(products);

// câu 3 : tạo mảng chứa name, price của mỗi sản phẩm

const namePriceList = products.map(p => ({
    name: p.name,
    price: p.price
}));

//  console.log(namePriceList);


// câu 4 : lọc các  sản phẩm còn hàng trong kho  ( quantity  >0) 
const inStockProducts = products.filter(p => p.quantity > 0);
// console.log(inStockProducts);


// câu 5 : kiểm tra ít nhất 1 sản phẩm có giá  > 30 
const hasExpensiveProduct = products.some(p => p.price > 30);
// console.log(hasExpensiveProduct);

// câu 6 : kiểm tra  xem tất cả  sản phẩm  thuộc danh mục "Accessories"  có đang bán hay không ( isAvailable = true )
const allAccessoriesAvailable
    =
    products.filter(

        p => p.category === "Accessories"

    ).every(
        p => p.isAvailable === true
    );

// console.log(allAccessoriesAvailable);


// câu 7 : tính tổng  giá trị  kho hàng
// giá trị = price * quantity

const totalInventoryValue
    =
    products.reduce(
        (sum, p) => sum + p.price * p.quantity,
        0
    );

// console.log(totalInventoryValue);


// câu 8 : dùng for .. of duyệt mảng  products và in ra
// Tên sp - danh mục  - Trạng thái 

for (const p of products) {
    // console.log(
    //     `${p.name} - ${p.category} - ${p.isAvailable ? "Đang bán" : "Ngừng bán"}`
    // );
}

// câu  9 : dùng for .. in  để :
// in ra tên thuộc tính

for (const key in products[0]) {
    // console.log(key);
}

// in ra  giá trị tương ứng 
for (const key in products[0]) {
    //   console.log(products[0][key]);
}


// câu 10 : lấy các danh sách  tên các sản phẩm  đang bán và còn hàng
const sellingInStockNames = products
    .filter(p => p.isAvailable === true && p.quantity > 0)
    .map(p => p.name);

console.log(sellingInStockNames);
