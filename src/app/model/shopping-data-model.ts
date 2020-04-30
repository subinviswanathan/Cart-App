export interface ShoppingDataModel {
    name: string;
    image: string;
    price: { 
        actual: number, 
        display: number 
    };
    discount: number;
}