import { Request, Response } from "express";
import { where } from "sequelize/types";
import { Usuario, UsuarioI } from "../models/Usuario";
import { VentaI } from '../models/Venta';
//import { RegularExpressionLiteral } from "typescript";

export class Usuariocontroller{

    public async getAllUsuario(req: Request, res:Response){
        try{
        const user: UsuarioI[] = await Usuario.findAll(
            {
                where: { activo: true}
            }
        )
         res.status(200).json({user})
        } catch (error){
        }
    }


    public async getOneUsuario(req: Request, res:Response){
        const{ id: idParam} = req.params

        try{
            const user:UsuarioI | null = await Usuario.findOne(
                {
                    where:{ 
                        id: idParam,
                        activo:true
                    }
                }
            )
            res.status(200).json(user)
        } catch(error){res.status(500).json({msg: "Error Internal"})

                
            }
        
    }
    public async createUsuario(req: Request, res:Response){
        const {
             nombre, 
             correo, 
             telefono, 
             direccion,
             activo
            

        } = req.body;

        try {
            let body:UsuarioI = {
                nombre, 
                correo, 
                telefono, 
                direccion,
                activo
                

            }
            const user:UsuarioI = await Usuario.create({...body});
            res.status(200).json({user});
        } catch (error) {
            
        }
        
    }
    public async updateUsuario(req: Request, res:Response){
        const { id:pk} = req.params;

        const {
            id,
            nombre, 
            correo, 
            telefono, 
            direccion,
            activo
            
        }= req.body
        
        try {
            let body:UsuarioI = {
                nombre, 
                correo, 
                telefono, 
                direccion,
                activo
                
               
            }
            const userExist: UsuarioI | null = await Usuario.findByPk(pk);
            //const userExist: UsuarioI | null = await Usuario.findOne(
                //{
                    //where: { id: pk}
                //}
            //);

            //console.log(userExist);
            if(!userExist) return res.status(500).json({msg:"El Usuario No existe"})
            await Usuario.update(
                body,{

                    where: {id:pk}
                }
            );

            


        } catch (error) {
            
        }
        
        const user: UsuarioI | null = await Usuario.findByPk(pk);
        if(user) return res.status(200).json({user})
    }

    public async deleteUsuario(req: Request, res:Response){
        const { id:pk} = req.params;
        /*
        try {
            const userExist: UsuarioI | null = await Usuario.findByPk(pk);
            if(!userExist) return res.status(500).json({msg:"El Usuario No existe"})
            await Usuario.destroy(
                {
                    where: {id: pk}
                }
            )
            res.status(200).json({msg:"Usuario Eliminado"})
        } catch (error) {
            
        }*/

        try {

            const userExist: UsuarioI | null = await Usuario.findByPk(pk);
            if(!userExist) return res.status(500).json({msg:"El Usuario No existe"})

             await Usuario.update(
                {
                   activo: false,
                },
                {

                    where: {id:pk}
                }
            );

            return res.status(200).json({msg:"Usuario Eliminado"})

        } catch (error) {
            
        }
    }
}

//function body(body: any, arg1: { where: { id: string; }; }) {
// throw new Error("Function not implemented.");

