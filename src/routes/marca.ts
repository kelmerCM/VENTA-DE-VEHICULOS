import { Request, Response, Application, Router } from "express";

import { MarcaController } from '../controllers/marca.cntroller';

export class MarcaRoutes{
    public marcaController: MarcaController = new MarcaController();
    
    public routes(app: Application): void {
        app.route("/marca").get(this.marcaController.getAllMarca)
        
    }
}