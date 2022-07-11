import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
const Produto = (props) => {
  let product = props.dados;
  return (
    <div className="products-container">
      {
        // <div key={product.id} className="card">
        //  <div><img src={product.image} alt="#"/></div>
        //  <div className="card-description">
        //      <h6>{product.title}</h6>
        //      <h6>{`Price: ${product.price}`}</h6>
        //      <h6>{`Category: ${product.category}`}</h6>
        //  </div>
        // </div>

        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia component="img" src={product.image} alt="" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {`Price: ${product.price}`}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      }
    </div>
  );
};

export default Produto;
