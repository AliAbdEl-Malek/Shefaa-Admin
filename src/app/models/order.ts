export class Order {
    constructor() { }

    order: [];
    user: {
        "id": string,
        'email':string
    };
    customer: {
        'name': string,
        'address': string,
        "promoCode": string,
        "phone": string
    }
    totalPrice:string

    
}