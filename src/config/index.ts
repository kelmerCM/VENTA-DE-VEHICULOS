import  express, {Application}  from 'express';
import  morgan from 'morgan';
import { Routes } from '../routes/index';



export class App{
    public routePrv: Routes = new Routes();
    app: Application;
    
   

    constructor(
        private port?: number | string
        

    ){
        this.app = express();
        this.settings();
        this.widdlewares();
        this.routes()
    
    
    }

    settings() {
        this.app.set('port', this.port || 3000);
    }

    async listen(){
        await this.app.listen(this.app.get('port'));
        console.log('server on port', this.app.get('port'));
    }
    
    widdlewares() {
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));

        
    }
    routes() {
        this.routePrv.usuarioRoutes.routes(this.app)
        this.routePrv.ventaRoutes.routes(this.app)
        this.routePrv.marcaRoutes.routes(this.app)
        this.routePrv.tipoVehiculoRoutes.routes(this.app)
        this.routePrv.vehiculoRoutes.routes(this.app)
        
    }
}