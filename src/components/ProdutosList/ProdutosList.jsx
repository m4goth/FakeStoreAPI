import Grid from "@mui/material/Grid";
import Produto from "../Produto/Produto";
import { getProducts } from "../../utils/FakeStoreApi";
import React, { useState, useEffect } from "react";

export default function ProdutosList() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div id="ProdutosList" style={{ "margin-top": "1rem" }}>
      {loading && (
        <div>
          {" "}
          <h1>Loading...</h1>
        </div>
      )}
      <Grid container spacing={2}>
        {data.map((product) => (
          <Grid item xs={12} md={6} lg={4}>
            <Produto dados={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
