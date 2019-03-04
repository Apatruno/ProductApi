import { Router } from 'express';
import { IController } from '../../utils/IController';
import express = require('express');
import { Product } from './product.model';

export class ProductController implements IController {
    public path: string = '/products';
    public router: Router = express.Router();
    private products: Product[] = [new Product('Mountain Dew', '01290321321')];

    constructor() {
        this.initializeRoutes();
    }
    initializeRoutes(): void {
        this.router.get(this.path, this.getAllProducts);
        this.router.post(this.path, this.createProduct);
    }
    getAllProducts = (request: express.Request, response: express.Response) => {
        response.send(this.products);
    }
    createProduct = (request: express.Request, response: express.Response) => {
        try {
            const newProduct: Product = request.body;
            this.products.push(newProduct);
            response.send(newProduct);

        } catch (error) {
            response.status(400).send(error);
        }
    }
}