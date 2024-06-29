import React from "react";
import StarRating from "./StarRating";

// Array of products with details such as id, name, price, image URL, rating, and sale status
const products = [
  {
    id: 1,
    name: "Classic White Shirt",
    price: "25.00",
    image:
      "https://img.freepik.com/premium-photo/portrait-groom-wearing-suit_159701-1174.jpg?ga=GA1.1.1293904183.1719584306&semt=ais_user",
    rating: 4,
    isSale: false,
  },
  {
    id: 2,
    name: "Casual Denim Shirt",
    originalPrice: "40.00 ",
    price: "30.00",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20231110/FCqd/654e5b0dafa4cf41f582d4a5/-473Wx593H-469567930-darkblue-MODEL.jpg",
    rating: 5,
    isSale: true,
  },
  {
    id: 3,
    name: "Plaid Flannel Shirt",
    originalPrice: "28.00 ",
    price: "20.00",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20240607/5JyC/6662a98316fd2c6e6a561288/-473Wx593H-469497903-yellow-MODEL.jpg",
    rating: 3,
    isSale: true,
  },
  {
    id: 4,
    name: "Oxford Button-Down Shirt",
    price: "35.00",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20230328/ecTu/6423110b907deb497ab7f334/-473Wx593H-442104998-white-MODEL2.jpg",
    rating: 5,
    isSale: false,
  },
  {
    id: 5,
    name: "Printed Short Sleeve Shirt",
    price: "28.00",
    image:
      "https://img.freepik.com/free-photo/attractive-young-man-sunglasses-holding-coconut-cocktail_171337-19017.jpg?ga=GA1.1.1293904183.1719584306&semt=ais_user",
    rating: 4,
    isSale: false,
  },
  {
    id: 6,
    name: "Linen Blend Shirt",
    originalPrice: "39.00 ",
    price: "32.00",
    image:
      "https://img.freepik.com/free-photo/medium-shot-man-dealing-with-imposter-syndrome_23-2149692408.jpg?ga=GA1.1.1293904183.1719584306&semt=ais_user",
    rating: 5,
    isSale: true,
  },
  {
    id: 7,
    name: "Chambray Shirt",
    originalPrice: "35.00 ",
    price: "27.00",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20231228/SieV/658d5c59afa4cf41f5f2a4cb/-473Wx593H-442295912-ltblue-MODEL6.jpg",
    rating: 4,
    isSale: true,
  },
  {
    id: 8,
    name: "Striped Dress Shirt",
    price: "40.00",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20240206/gMhc/65c2121916fd2c6e6adec236/-473Wx593H-462152986-green-MODEL2.jpg",
    rating: 5,
    isSale: false,
  },
  {
    id: 9,
    name: "Slim Fit Shirt",
    price: "22.00",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20231205/LBwK/656ed464afa4cf41f5b4f71c/-473Wx593H-462323964-white-MODEL.jpg",
    rating: 4,
    isSale: false,
  },
  {
    id: 10,
    name: "Casual Checkered Shirt",
    originalPrice: "30.00 ",
    price: "25.00",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20231116/5i4c/655629caddf779151989af37/-473Wx593H-410393405-z414-MODEL2.jpg",
    rating: 5,
    isSale: true,
  },
  {
    id: 11,
    name: "Formal Black Shirt",
    price: "45.00",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20240304/KqyU/65e5b66505ac7d77bb94782d/-473Wx593H-443030366-jetblack-MODEL.jpg",
    rating: 5,
    isSale: false,
  },
  {
    id: 12,
    name: "Summer Floral Shirt",
    originalPrice: "35.00 ",
    price: "28.00",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20240214/TtKQ/65ccc3f516fd2c6e6af87590/-473Wx593H-467075096-multi-MODEL.jpg",
    rating: 4,
    isSale: true,
  },
];

// Component to display the list of products
const ProductList = ({ addToCart, removeFromCart, isInCart }) => {
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center">
          {products.map((product) => (
            <div className="col mb-5" key={product.id}>
              <div className="card h-100">
                {product.isSale && (
                  <div
                    className="badge bg-dark text-white position-absolute"
                    style={{ top: "0.5rem", right: "0.5rem" }}
                  >
                    Sale
                  </div>
                )}
                <img
                  className="card-img-top"
                  src={product.image}
                  alt={product.name}
                />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">{product.name}</h5>
                    <StarRating rating={product.rating} />
                    {product.isSale ? (
                      <>
                        <span className="text-muted text-decoration-line-through">
                          ${product.originalPrice}
                        </span>
                        ${product.price}
                      </>
                    ) : (
                      <>${product.price}</>
                    )}
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    {isInCart(product) ? (
                      <button
                        className="btn btn-outline-danger mt-auto"
                        onClick={() => removeFromCart(product)}
                      >
                        Remove from cart
                      </button>
                    ) : (
                      <button
                        className="btn btn-outline-dark mt-auto"
                        onClick={() => addToCart(product)}
                      >
                        Add to cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
