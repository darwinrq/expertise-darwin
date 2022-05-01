const Service = require('./service');

module.exports = {
    async buscadorTallerQuery(info) {
        const result = Service.buscadorTaller(info);
        return result;
    },
};