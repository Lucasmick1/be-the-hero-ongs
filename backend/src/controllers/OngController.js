const connection = require('../database/connection');

const crypto = require('crypto');

module.exports = {
    async index (request, response){
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response){
        const { name, email ,whatsapp, city , uf} = request.body;

        const id = crypto.randomBytes(4).toString('HEX');
    
       await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })
    
        return response.json({ id });
    }

    
}


/* const params = request.query; 
        //request.query tem os valores em formato objeto dos parâmetros enviados na rota
    console.log(params);
    */

    /*const params = request.params;
     // para esse tipo de resposta o primeiro parâmetro do get() tem que ser app.get('/rota/:id') obrigatório os :
        console.log(params);
    */

    /*const params = request.body;
        // esse tipo de resposta é para o método .post e nos trás o corpo da requisição e o express precisa receber .json
    console.log(params);
    */
    