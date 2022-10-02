import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// components

import CardTable from "../../components/Cards/CardTable";
import { getAllProducts } from "../../features/products/productSlice";

export default function ProductTables() {
  const { products, isProductLoading, page, search, filter, sort } =
    useSelector((store) => store.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [page, search, filter, sort]);

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTable />
        </div>
      </div>
    </>
  );
}
