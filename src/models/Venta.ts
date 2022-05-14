import sequelize from "sequelize";
import { Model, DataTypes } from 'sequelize';
import { database } from "../database/db";
import { Usuario } from "./Usuario";


export class Venta extends Model{
    public id!: number;
    public fechaVenta!: Date;
    public valorTotal!: number;
    public tipoPago!: string;
    public usuarioId!: number;

}


export interface VentaI {
     fechaVenta: Date;
     valorTotal: number;
     tipoPago: string;
     usuarioId: number;
}

Venta.init(
    {
        fechaVenta: { 
            type: DataTypes.DATE,
            allowNull: false
        },

        valorTotal: { 
            type: DataTypes.BIGINT,
            allowNull: false
        },

        tipoPago: { 
            type: DataTypes.ENUM('Efectivo','credito'),
            allowNull: false
        },
    },
    {
        tableName: "ventas",
        sequelize: database,
        timestamps: false
    }
    
);

Usuario.hasMany(Venta);
Venta.belongsTo(Usuario);