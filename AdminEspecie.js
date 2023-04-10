import { PrismaClient } from '@prisma/client'


//Esta clase va  a tener dos metodos segun el diagrama

class AdminEspecie{

    constructor(){
        this.prisma = new PrismaClient()
    }

    async crearEspecie(req, res){

        const datos=req.body;

//prisma es un cliente y tiene un modelo que se llama especie

        const especie= await this.prisma.especie.create(
            {
                data:datos
            }
        )

    }

    //metodo
    listarEspecie(req, res){

    }
}

module.exports=AdminEspecie;