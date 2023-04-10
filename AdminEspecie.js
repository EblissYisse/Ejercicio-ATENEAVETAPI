const {PrismaClient}=require('@prisma/client');


//Esta clase va  a tener dos metodos segun el diagrama

class AdminEspecie{

    constructor(){
        this.prisma = new PrismaClient()
    }

    async crearEspecie(req, res){

        const datos=req.body;
        console.log("Estos son los datos"+datos);

//prisma es un cliente y tiene un modelo que se llama especie

        const especie= await this.prisma.especie.create(
            {
                data:datos
            }
        );

        res.json(especie);

    }

    //metodo
    async listarEspecies(req, res){
        const especies= await this.prisma.especie.findMany();
        res.json(especies);
    }
}

module.exports=AdminEspecie;