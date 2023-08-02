import { StarIcon } from '@heroicons/react/24/outline';

const ProductRatings = (props) => {
  const { avgRating, ratings } = props;
  return (
    <div className="flex">
      { Array.from({ length: avgRating }, (_, i) => (
        <StarIcon
          key={i}
          className="stroke-[#F1861F]
      fill-[#F1861F] h-[28px]"
        />
      ))}
      { Array.from({ length: 5 - avgRating }, (_, i) => (
        <StarIcon
          key={i}
          className="stroke-[#F1861F]
      h-[28px]"
        />
      ))}
      <span className="ml-3 text-blue-500">
        {ratings}
        {' '}
        ratings
      </span>
    </div>

  );
};

export default ProductRatings;
