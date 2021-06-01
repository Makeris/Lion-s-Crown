import { IDoors } from "../interfaces/interface/shefieldDoorsInterface";


export class Product implements IDoors {

    constructor (

        public id: number,
        public className: string,
        public type: string,
        public name: string,
        public article: string,
        public avalible: boolean,
        public individualSize:boolean,
        public preparingTime: string,
        public containment: any,
        public decoration: string,
        public furniture: any,
        public construction: any,
        public brand: any,
        public image?: any,
        public price?: any,
        public description?: any
    ) {

    }
}