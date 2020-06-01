const controller = {
    profile : (req, res) => {
        res.send('Hola Mundo');
    },

    myList : (req, res) => {
        console.log(req.query, req.params);
        res.send('Ruta Parametrizada')
    }


}

module.exports = controller;