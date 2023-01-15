const app = require('../app');

const nameValidade = (req, resp, next) => {
    const { name } = req.body;
    if(name.length > 4 && name.length <= 30 ) {
        next();
    }else if (name.length < 4){
        return  resp.status(400).json({ "message": "O campo name deve ter pelo menos 4 caracteres" })
    }else {
        return resp.status(400).json({ "message": "O campo name é obrigatório" });
    }
}

module.exports = nameValidade;