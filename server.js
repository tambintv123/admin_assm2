// khai báo thư viện express và sử dụng nó
const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;

const port = process.env.PORT || 3000;
const app = express();

// This tells Express we’re using EJS as the template engine.
app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

// Make sure you place body-parser before your CRUD handlers!
app.use(bodyParser.urlencoded({ extended: true }));

// get json from server
app.use(express.json());
// connection string
const connectionString =
  "mongodb+srv://tambintv123:minhtam100902@cluster0.jdfddan.mongodb.net/?retryWrites=true&w=majority";

// connect to MongoDB Atlas
MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then((client) => {
    console.log("Connected to Database");

    const db = client.db("admin_db");

    // kết nối / tạo collection 'quotes'
    const usersCollection = db.collection("users");
    const productsCollection = db.collection("products");
    // khi client truy cập port 3000 của server,
    // server sẽ trả về file index.html
    app.get("/", (req, res) => {
      // tìm data trong database MongoDB Atlas
      res.render("pages/dashboard");
    });

    // show list users
    app.get("/users", (req, res) => {
      db.collection("users")
        .find()
        .toArray()
        .then((results) => {
          // console.log(results);

          // trả vê file index.ejs cho client
          res.render("pages/users", { users: results });
        })
        .catch((error) => console.error(error));
    });

    // show list products
    app.get("/products", (req, res) => {
      db.collection("products")
        .find()
        .toArray()
        .then((results) => {
          // trả vê file index.ejs cho client
          res.render("pages/products", { products: results });
        })
        .catch((error) => console.error(error));
    });

    // get detail user
    app.get("/users/:id", (req, res) => {
      db.collection("users")
        .find()
        .toArray()
        .then((results) => {
          let user = results.find((user) => {
            return user._id.toString() == req.params.id;
          });

          res.json({
            user: user,
          });
        })
        .catch((error) => console.error(error));
    });

    // get detail product
    app.get("/products/:id", (req, res) => {
      db.collection("products")
        .find()
        .toArray()
        .then((results) => {
          let product = results.find((item) => {
            return item._id.toString() == req.params.id;
          });

          res.json({
            productItem: product,
          });
        })
        .catch((error) => console.error(error));
    });

    // client -> POST -> '/users' -> server ->

    app.post("/users", (req, res) => {
      usersCollection
        .insertOne(req.body)
        .then((result) => {
          res.redirect("/users");
        })
        .catch((error) => console.error(error));
    });

    // client -> POST -> '/products' -> server ->

    app.post("/products", (req, res) => {
      productsCollection
        .insertOne(req.body)
        .then((result) => {
          console.log(result);
          res.redirect("/products");
        })
        .catch((error) => console.error(error));
    });

    // delete user
    app.delete("/users", (req, res) => {
      usersCollection
        .deleteOne({ username: req.body.username })
        .then((result) => {
          if (res.deletedCount === 0) {
            return res.json("No user to delete");
          }

          res.json("Deleted");
        })
        .catch((err) => console.log(err));
    });

    // delete product
    app.delete("/products", (req, res) => {
      productsCollection
        .deleteOne({ name: req.body.name })
        .then((result) => {
          if (res.deletedCount === 0) {
            return res.json("No product to delete");
          }

          res.json("Deleted");
        })
        .catch((err) => console.log(err));
    });

    // update user

    app.put("/users", (req, res) => {
      usersCollection
        .findOneAndUpdate(
          { username: req.body.userInfo.username },
          {
            $set: {
              firstName: req.body.userInfo.firstName,
              lastName: req.body.userInfo.lastName,
              DoB: req.body.userInfo.DoB,
              phone: req.body.userInfo.phone,
            },
          },
          {
            upsert: true,
          }
        )
        .then((results) => res.json("Success"))
        .catch((err) => console.log(err));
    });

    // update product

    app.put("/products", (req, res) => {
      console.log(req.body);
      productsCollection
        .findOneAndUpdate(
          { name: req.body.product.name },
          {
            $set: {
              name: req.body.product.name,
              image: req.body.product.image,
              category: req.body.product.category,
              price: req.body.product.price,
              quantity: req.body.product.quantity,
            },
          },
          {
            upsert: true,
          }
        )
        .then((results) => res.json("Success"))
        .catch((err) => console.log(err));
    });
    // server lắng nghe port 3000
    app.listen(port, function () {
      console.log(`Server running at port ` + port);
    });
  })
  .catch((error) => console.error(error));
