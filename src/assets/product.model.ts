export interface Product {
    name: string;
    price: number;
    image: string;
}

export interface CartItem {
    product: Product;
    quantity: number;
    totalPrice: number;
}
