import * as reviewsRepository from '../repositories/reviewsRepository';

async function addReview(
  userId: string,
  filmId: string,
  title: string,
  content: string
) {
  const duplicate = await reviewsRepository.findByFilmIdUserIdAndTitle(
    userId,
    filmId,
    title
  );

  if (duplicate) {
    throw {
      type: 'CONFLICT',
      message: 'Reviews must have an unique title',
    };
  }

  return await reviewsRepository.create({ userId, filmId, title, content });
}

export { addReview };
