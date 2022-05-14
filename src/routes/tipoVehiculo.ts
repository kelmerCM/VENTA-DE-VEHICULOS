import { Request, Response, Application, Router } from "express";

import { TipoVehiculoController } from '../controllers/tipoVehiculo.controller';

export class TipoVehiculoRoutes{
    public tipoVehiculoController: TipoVehiculoController = new TipoVehiculoController();
    
    public routes(app: Application): void {
        app.route("/tipovehiculos").get(this.tipoVehiculoController.getAllTipoVehiculo)
        
    }
}