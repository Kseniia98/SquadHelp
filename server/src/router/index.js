const { Router } = require('express');
const authRouter = require('./auth.router');
const userRouter = require('./user.router');
const chatRouter = require('./chat.router');
const contestRouter = require('./contest.router');

const router = Router();

router.use('/auth', authRouter);

router.use('/users', userRouter);

router.use('/chats', chatRouter);

router.use('/contests', contestRouter);

module.exports = router;
