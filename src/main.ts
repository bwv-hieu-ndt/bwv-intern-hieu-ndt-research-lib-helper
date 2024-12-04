import express from 'express';
import UserRoute from './api/user/user_route';
import path from "path";


const boostrap = async () => {

  const app = express();
  const port = 8080;

  app.use(express.json());

  const viewPath = path.join(__dirname, "views")
  const indexPath = path.join(__dirname, "views/index.html")

  app.set("view engine", "ejs");
  app.set("views", viewPath);

  app.get("/", (req, res) => {
    res.sendFile(indexPath);
  });

  app.use('/users',UserRoute)

  app.listen(port, () => {
    console.log(viewPath)
    console.log(indexPath)

    console.log(`Server is running on port ${port}`)
  })
} 

boostrap()