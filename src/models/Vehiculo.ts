import sequelize from "sequelize";
import { Model, DataTypes } from 'sequelize';
import { database } from "../database/db";
import { Marca } from "../models/Marca";
import { TipoVehiculo } from "../models/TipoVehiculo";
import { Venta } from "../models/Venta";
import { VehiculoVenta, VehiculoVentaI } from "../models/VehiculoVenta";


export class Vehiculo extends Model{
    public modelo!: string;
    public color!: string;
    public placa!: string;
    public motor!: string;
    public marcaId!: number;
    public TipoVehiculoId!: number;


}


export interface VehiculoI {
     modelo: string;
     color: string;
     placa: string;
     motor: string;
}

Vehiculo.init(
    {
        modelo: { 
            type: DataTypes.STRING,
            allowNull: false
        },

        color: { 
            type: DataTypes.BIGINT,
            allowNull: false
        },

        placa: { 
            type: DataTypes.STRING,
            allowNull: false
        },
        motor: { 
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        tableName: "vehiculo",
        sequelize: database,
        timestamps: false
    }
    
);
Marca.hasMany(Vehiculo);
Vehiculo.belongsTo(Marca);

TipoVehiculo.hasMany(Vehiculo);
Vehiculo.belongsTo(TipoVehiculo);

Venta.belongsToMany(Vehiculo,{through: VehiculoVenta});
Vehiculo.belongsToMany(Venta,{through: VehiculoVenta});
