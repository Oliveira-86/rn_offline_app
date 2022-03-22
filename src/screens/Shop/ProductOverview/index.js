import React, { useEffect } from "react";
import { Container, List, Loading } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../../features/products/products-thunk";
import ProductItem from "../../../components/Shop/ProdutItem";


const ProductOverview = () => {
  const dispatch = useDispatch();

  const { products, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (loading) return <Loading>Loading...</Loading>;

  return (
    <Container>
      {/* <List
        data={availableProducts}
        keyExtractor={(item) => item.id}
      /> */}
      <Loading>Hello expo</Loading>
    </Container>
  );
};

export default ProductOverview;
