import { Request, Response, Application, Router } from "express";

import { Usuariocontroller } from "../controllers/usuario.controller";

export class UsuarioRoutes{
    public usuarioController: Usuariocontroller = new Usuariocontroller();

    public routes(app: Application): void {
        app.route("/usuarios").get(this.usuarioController.getAllUsuario)
        app.route("/usuario/:id").get(this.usuarioController.getOneUsuario)
        //app.route("/usuario").get(this.usuarioController.updateUsuario)
        app.route("/usuario").post(this.usuarioController.createUsuario)
        app.route("/usuario/:id").patch(this.usuarioController.updateUsuario)
        //app.route("/usuario/:id").delete(this.usuarioController.deleteUsuario)
        app.route("/Delusuario/id").patch(this.usuarioController.deleteUsuario)
    }
}