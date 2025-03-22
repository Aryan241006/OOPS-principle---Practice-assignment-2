class Product {
    constructor(name, productID, price, stock) {
        this.productID = productID;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    addStock(quantity) {
        this.stock += quantity;
        return `Added ${quantity} quantities, available stock ${this.stock}`;
    }
    sellStock(quantity) {
        if(this.stock < 0) {
            return "Stock value should be positive"
        }else{
            if(this.stock < quantity){
                return "Not enough stock to sell"
        }else{
            this.stock -= quantity;
            return `Available stock: ${this.stock}`;
        }
        }
    }
}

const product1 = new Product("Laptop", 1, 1000, 10);
const product2 = new Product("Mobile", 2, 500, 20);
product1.addStock(10);
console.log(product1);
product2.sellStock(5);
console.log(product2);