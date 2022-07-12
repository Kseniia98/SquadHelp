const { Router } = require('express');
const basicMiddlewares = require('../middlewares/basicMiddlewares');
const contestController = require('../controllers/contestController');
const checkToken = require('../middlewares/checkToken');
const upload = require('../utils/fileUpload');

const contestRouter = Router();

contestRouter.post(
  '/dataForContest',
  checkToken.checkToken,
  contestController.dataForContest,
);

contestRouter.get(
  '/getCustomersContests',
  checkToken.checkToken,
  contestController.getCustomersContests,
);

contestRouter.get(
  '/getContestById/:id',
  checkToken.checkToken,
  basicMiddlewares.canGetContest,
  contestController.getContestById,
);

contestRouter.get(
  '/getAllContests',
  checkToken.checkToken,
  basicMiddlewares.onlyForCreative,
  contestController.getContests,
);

contestRouter.get(
  '/downloadFile/:fileName',
  checkToken.checkToken,
  contestController.downloadFile,
);

contestRouter.patch(
  '/updateContest',
  checkToken.checkToken,
  upload.updateContestFile,
  contestController.updateContest,
);

contestRouter.post(
  '/setNewOffer',
  checkToken.checkToken,
  upload.uploadLogoFiles,
  basicMiddlewares.canSendOffer,
  contestController.setNewOffer,
);

contestRouter.post(
  '/setOfferStatus',
  checkToken.checkToken,
  basicMiddlewares.onlyForCustomerWhoCreateContest,
  contestController.setOfferStatus,
);


module.exports = contestRouter;