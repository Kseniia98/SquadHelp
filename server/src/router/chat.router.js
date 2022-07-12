const { Router } = require('express');
const checkToken = require('../middlewares/checkToken');
const chatController = require('../controllers/chatController');

const chatRouter = Router();

chatRouter.post(
  '/newMessage',
  checkToken.checkToken,
  chatController.addMessage,
);

chatRouter.get('/getChat', checkToken.checkToken, chatController.getChat);

chatRouter.get('/getPreview', checkToken.checkToken, chatController.getPreview);

chatRouter.post('/blackList', checkToken.checkToken, chatController.blackList);

chatRouter.post(
  '/favorite',
  checkToken.checkToken,
  chatController.favoriteChat,
);

chatRouter.post(
  '/createCatalog',
  checkToken.checkToken,
  chatController.createCatalog,
);

chatRouter.patch(
  '/updateNameCatalog',
  checkToken.checkToken,
  chatController.updateNameCatalog,
);

chatRouter.post(
  '/addNewChatToCatalog',
  checkToken.checkToken,
  chatController.addNewChatToCatalog,
);

chatRouter.delete(
  '/removeChatFromCatalog',
  checkToken.checkToken,
  chatController.removeChatFromCatalog,
);

chatRouter.delete(
  '/deleteCatalog',
  checkToken.checkToken,
  chatController.deleteCatalog,
);

chatRouter.delete(
  '/getCatalogs',
  checkToken.checkToken,
  chatController.getCatalogs,
);

module.exports = chatRouter;
