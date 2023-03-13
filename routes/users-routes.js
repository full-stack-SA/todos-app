module.exports = funcion (app) {
    const userService = require("../controllers/users-controllers");

    app.post('/api/register', userService.register);

    app.post('/api/login', userService.login);

}