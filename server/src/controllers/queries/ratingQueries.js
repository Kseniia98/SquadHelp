const bd = require('../../models');
const ServerError = require('../../errors/ServerError');

module.exports.updateRating = async (data, predicate, transaction) => {
  const [updatedCount, [updatedRating]] = await bd.Ratings.update(data, {
    where: predicate,
    returning: true,
    transaction,
  });
  if (updatedCount !== 1) {
    throw new ServerError('cannot update mark on this offer');
  }
  return updatedRating.dataValues;
};

const createRating = async (data, transaction) => {
  const result = await bd.Ratings.create(data, { transaction });
  if (!result) {
    throw new ServerError('cannot mark offer');
  } else {
    return result.get({ plain: true });
  }
};

module.exports.createRating = createRating;

module.exports.getMarkQuery = function getQuery(
  offerId,
  userId,
  mark,
  isFirst,
  transaction,
) {
  const getCreateQuery = () =>
    ratingQueries.createRating(
      {
        offerId,
        mark,
        userId,
      },
      transaction,
    );
  const getUpdateQuery = () =>
    ratingQueries.updateRating({ mark }, { offerId, userId }, transaction);
  return isFirst ? getCreateQuery : getUpdateQuery;
};
