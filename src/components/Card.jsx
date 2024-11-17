import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Card = ({ gadget }) => {
  const { product_id, product_title, product_image, price } = gadget;
  return (
    <div className="card bg-base-100 w-11/12 mx-auto lg:w-80 md:w-[300px]  shadow-xl">
      <figure className="p-8">
        <img
          className="w-[280px] rounded-xl"
          src={product_image}
          alt={product_title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product_title}</h2>
        <p className="font-thin">Price: ${price}</p>
        <Link to={`/details/${product_id}`} className="card-actions">
          <button className="btn border-purple-500 text-[#9538E2] rounded-full">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
