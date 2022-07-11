import Grid from "@mui/material/Grid";
import Products from "../Produtos/Produtos";


export default function ProdutosList() {


    return (
        <div id="ProdutosList">
          <Grid container spacing={2}>
            {ProdutosList.map((product) => (
              <Grid item xs={4}>
                <Products
                  data={{
                    nome: product.name,
                    url: product.url,
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      );
}