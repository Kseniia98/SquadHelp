const { MulterError } = require('multer');

module.exports = (err, req, res, next) => {
  console.log(err);

  if (err instanceof MulterError) {
    err.code = 400;
  }

  if (
    err.message ===
      'new row for relation "Banks" violates check constraint "Banks_balance_ck"' ||
    err.message ===
      'new row for relation "Users" violates check constraint "Users_balance_ck"'
  ) {
    err.message = 'Not Enough money';
    err.code = 406;
  }
  if (!err.message || (!err.code && err.status)) {
    res.status(500).send('Server Error');
  } else {
    res.status(err.code).send(err.message);
  }
};
