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

async function deleteReview(id: string, userId: string) {
  const review = await reviewsRepository.findById(id);

  if (!review) {
    throw {
      type: 'NOT_FOUND',
      message: 'Review not found',
    };
  }

  if (review.userId !== userId) {
    throw {
      type: 'FORBIDDEN',
      message: '',
    };
  }

  await reviewsRepository.remove(id);
}

export { addReview, deleteReview };
