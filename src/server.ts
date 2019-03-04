import { App } from './app';
import { ProductController } from './resources/product/product.controller';

const app = new App(
    [
        new ProductController(),
    ],
    5000,
);

app.listen();