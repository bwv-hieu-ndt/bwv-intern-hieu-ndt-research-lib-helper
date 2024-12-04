import express from 'express';
import UserRoute from './api/user/user_route';
import path from "path";
import cors from "cors"

const boostrap = async () => {

  const app = express();
  const port = 8080;
  

  app.use(express.json());
  app.use(cors({ origin: '*' }));


  const viewPath = path.join(__dirname, "views")
  const indexPath = path.join(__dirname, "views/index.html")
  const appjs = path.join(__dirname, "views/app.js") 

  app.use(express.static(appjs));

  app.set("view engine", "ejs");
  app.set("views", viewPath);

  app.get("/", (req, res) => {
    res.sendFile(indexPath);
  });

  app.use('/users',UserRoute)

  app.listen(port, () => {
    console.log(viewPath)
    console.log(indexPath)
    console.log(appjs)

    console.log(`Server is running on port ${port}`)
  })
} 

boostrap()