import { IWoodProduct } from "../interfaces/interface/woodProductInterface";


export class WoodProduct implements IWoodProduct {


    constructor (
        public id: number,
        public name: string,
        public article: string,
        public minSize: string,
        public maxSize: string,
        public image: string,
        public description: string,
        public count: number,
        // public price?: number,
    ) {}
    

}