const pool = require('../../bd/database');
const {buscadorTallerQuery} = require('../../bd/queries');

class Service {
    static async buscadorTaller(info) {
        const dicInfo = info.split(",")
        const placa = dicInfo[0];
        const distrito = dicInfo[1];
        const tipo_taller = dicInfo[2];
        return response = await pool.query(buscadorTallerQuery(placa,distrito,tipo_taller));
    }
}

module.exports = Service;