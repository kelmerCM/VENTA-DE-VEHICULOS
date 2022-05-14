import { Request, Response } from "express";
import { TipoVehiculo, TipoVehiculoI } from '../models/TipoVehiculo';

export class TipoVehiculoController{
    public async getAllTipoVehiculo(req: Request, res:Response){
        try {
            const marca: TipoVehiculoI[] = await TipoVehiculo.findAll()
            res.status(200).json({TipoVehiculo})
        } catch (error) {

        }
    }
}