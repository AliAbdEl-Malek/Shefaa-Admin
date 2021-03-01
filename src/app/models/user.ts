export class User{
    
    cartProducts:
    [{
        _id: string,
       photoURL: string,
       price: number,
       name: string,
       itemQuantity: number,
   }];
   favouriteProducts:
   [{
        _id: string,
        photoURL: string,
        price: number,
        name: string,
   }];
   orders:[];
    id:string;
    name:string;
    email:string;
    password:string;
    phone:string;
    address:string;
    gender:string;
    photoURL:string

}