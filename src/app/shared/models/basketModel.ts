import { IBasket} from "../interfaces/interface/basketInterface";

export class Order implements IBasket {

    constructor(
        public id: any,
        public userName: string,
        public userPhone: string,
        public userCity: string,
        public userStreet: string,
        public userHouse: string,
        public allOrders: Array<any>,
        public totalPrice: number,
        public userComment?: string,

    ) {}

}