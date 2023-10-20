import axios from "axios";
import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product key={product._id} product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
