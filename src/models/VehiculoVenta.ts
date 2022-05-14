import { Model, DataTypes } from 'sequelize';
import { database  } from '../database/db';

export class VehiculoVenta extends Model {
    public VehiculoId!: number;
    public VentaId!: number;
    
}

export interface VehiculoVentaI{
 VehiculoId: number;
 VentaId: number;
   
   
}

VehiculoVenta.init(
    {
        VehiculoId:{ 
        type: DataTypes.BIGINT,
        allowNull: false
        },
        VentaId:{ 
            type: DataTypes.BIGINT,
            allowNull: false
            },
    },
    {
     
        tableName: "vehiculoventa",
        sequelize: database,
        timestamps: false
    
    }

)