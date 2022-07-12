const { Router } = require('express');
const userController = require('../controllers/userController');
const validators = require('../middlewares/validators');
const { checkRefreshToken } = require('../middlewares/checkToken');

const authRouter = Router();

authRouter.post(
  '/registration',
  validators.validateRegistrationData,
  userController.registration,
);

authRouter.post('/login', validators.validateLogin, userController.login);

authRouter.put('/refresh', checkRefreshToken, userController.refreshSession);

module.exports = authRouter;
