//1.importamos express

const express=require("express");
const AdminEspecie=require("./AdminEspecie");

class AteneaVetAPI{

    constructor(){

        this.puerto= 3000;

        this.app=express();
        //Recordar letra incial de los nombres de clases mayuscula y objeto minusculas 
        this.adminEspecie=new AdminEspecie();

        //obtener informacion desde api se utliza metodo get
        //enviar datos al servidor para que los guarde y haga algo con ellos se utliza metodo post

        //crear rutas para los diferentes metodos
        this.app.post("/crear_especie", (req, res)=>{

            this.adminEspecie.crearEspecie(req, res);

        });
        this.app.get("/Listar_especies", (req, res)=>{

            this.adminEspecie.listarEspecie(req, res);

        });

        this.app.use(this.configurarCORS);
        this.app.use(express.json());

    }

    //configurar los encabezados para CORS
    configurarCORS(req, res, next){

        res.header("Access-Control-Allow-Origen", "*");
        res.header("Access-Control-Allow-Methods", "GET, POST");
        res.header("Access-Control-Allow-Headers", "Content-Type");
        next();


    }
    iniciarServidor(){

        this.app.listen(this.puerto, ()=>{
            console.log("Servidor se esta ejecutando en el puerto 3000")
        });

    }
}

//creamos un objeto de la clase (instanciamos la clase)

const ateneaVetAPI= new AteneaVetAPI();
ateneaVetAPI.iniciarServidor();