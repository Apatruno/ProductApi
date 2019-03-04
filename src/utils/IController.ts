import { Router } from 'express-serve-static-core';
export interface IController {
    initializeRoutes(): void;
    path: string;
    router: Router;

}