import { Request, Response, Application, Router } from "express";

import { VehiculoController } from '../controllers/vehiculo.controller';

export class VehiculoRoutes{
    public VehiculoController: VehiculoController = new VehiculoController();
    
    public routes(app: Application): void {
        app.route("/Vehiculo").get(this.VehiculoController.getAllVehiculo)
        
    }
}
