import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import { useShoppingCar } from "../hooks/useShoppingCar";
import { products } from '../data/products'
import "../styles/custom-styles.css";




export const ShoppingPage = () => {
  //objeto cuyas llaves sera el id del producto que apunta aun objeto
  //que tiene el producto y la cantidad que esta llevando
  
  const { shoppingCar, onProductCountChange } = useShoppingCar();

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
            onChange={onProductCountChange}
            value={shoppingCar[product.id]?.count || 0}
          >
            <ProductImage
              className="custom-image"
              style={{
                boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.2)",
              }}
            />
            <ProductTitle className="text-white" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>

      {/* carrito de compra */}
      <div className="shopping-car">
        {Object.entries(shoppingCar).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            className="bg-dark text-white"
            style={{
              width: "100px",
            }}
            value={product.count}
            onChange={onProductCountChange}
          >
            <ProductImage
              className="custom-image"
              style={{
                boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.2)",
              }}
            />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
