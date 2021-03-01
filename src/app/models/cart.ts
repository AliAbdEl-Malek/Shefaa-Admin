export class Cart {
    constructor() { }

    cartId:string;
    userId: [string];
    
    productsIds: [{
        photoURL: string,
        price: Number,
        name: String,
    }];
    quantity: number;
    
}