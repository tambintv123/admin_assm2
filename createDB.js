const mongo = require("mongodb").MongoClient;

const connectionString =
  "mongodb+srv://tambintv123:minhtam100902@cluster0.jdfddan.mongodb.net/?retryWrites=true&w=majority";
mongo.connect(connectionString, { useNewUrlParser: true }, (err, db) => {
  if (err) {
    console.log(err);
    process.exit(0);
  }

  let users = [
    {
      firstName: "Nguyen",
      lastName: "Tam",
      username: "tamnguyentv123",
      DoB: "10/09/2002",
      phone: "0354023754",
    },
    {
      firstName: "Nguyen",
      lastName: "Thai",
      username: "thainguyentv1",
      DoB: "10/01/2000",
      phone: "0123454548",
    },
    {
      firstName: "Ly",
      lastName: "Tran",
      username: "lytrantvc",
      DoB: "09/09/2005",
      phone: "0184984521",
    },
    {
      firstName: "Nguyen",
      lastName: "Chuong",
      username: "chuongsuper123",
      DoB: "19/02/2003",
      phone: "015975312",
    },
    {
      firstName: "Nguyen",
      lastName: "Huy",
      username: "huynguyentv12345",
      DoB: "10/05/2002",
      phone: "0354218451",
    },
    {
      firstName: "Tran",
      lastName: "Bao",
      username: "bantrantv0",
      DoB: "13/09/2002",
      phone: "0987456112",
    },
    {
      firstName: "Nguyen",
      lastName: "Anh",
      username: "duyanhproviptv",
      DoB: "22/09/2002",
      phone: "0225181298",
    },
    {
      firstName: "Ton",
      lastName: "Tai",
      username: "tontaitv456",
      DoB: "28/01/2001",
      phone: "0123489425",
    },
    {
      firstName: "Ha",
      lastName: "Dang",
      username: "hadangtv789",
      DoB: "29/09/2002",
      phone: "0485978412",
    },
    {
      firstName: "Phan",
      lastName: "Vi",
      username: "viphantv12",
      DoB: "23/07/1999",
      phone: "0484952156",
    },
  ];

  let products = [
    {
      name: "Iphone 14 Pro Max",
      image: "ip14promax.jpeg",
      category: "Iphone",
      quantity: 100,
      price: 33490000,
    },
    {
      name: "Iphone 14 Pro",
      image: "ip14pro.jpeg",
      category: "Iphone",
      quantity: 150,
      price: 30490000,
    },
    {
      name: "Iphone 14 Plus",
      image: "ip14plus.jpeg",
      category: "Iphone",
      quantity: 100,
      price: 27499000,
    },
    {
      name: "Iphone 14",
      image: "ip14.jpeg",
      category: "Iphone",
      quantity: 340,
      price: 24499000,
    },
    {
      name: "Iphone 13 Pro Max",
      image: "ip13promax.jpeg",
      category: "Iphone",
      quantity: 300,
      price: 27499000,
    },
    {
      name: "Iphone 13 Pro",
      image: "ip13pro.jpeg",
      category: "Iphone",
      quantity: 150,
      price: 24999000,
    },
    {
      name: "Iphone 13 mini",
      image: "ip13mini.jpeg",
      category: "Iphone",
      quantity: 250,
      price: 16999000,
    },
    {
      name: "Iphone 13",
      image: "ip13.jpeg",
      category: "Iphone",
      quantity: 150,
      price: 16999000,
    },
    {
      name: "Iphone 12",
      image: "ip12.jpeg",
      category: "Iphone",
      quantity: 100,
      price: 16499000,
    },
    {
      name: "Galaxy Z Flip4",
      image: "zflip4.jpeg",
      category: "Samsung",
      quantity: 200,
      price: 20990000,
    },
    {
      name: "Galaxy Z Flip4 Bespoke Edition",
      image: "zflip4.jpeg",
      category: "Samsung",
      quantity: 20,
      price: 22990000,
    },
    {
      name: "Galaxy Z Fold4",
      image: "zfold4.jpeg",
      category: "Samsung",
      quantity: 140,
      price: 37990000,
    },
    {
      name: "Galaxy S22 5G",
      image: "s225g.jpeg",
      category: "Samsung",
      quantity: 120,
      price: 15490000,
    },
    {
      name: "Galaxy S22 Ultra 5G",
      image: "s22ultra5g.jpeg",
      category: "Samsung",
      quantity: 220,
      price: 24990000,
    },
    {
      name: "Galaxy S22 Plus 5G",
      image: "s22plus5g.jpeg",
      category: "Samsung",
      quantity: 420,
      price: 19490000,
    },
    {
      name: "Xiaomi Redmi 10",
      image: "redmi10.jpeg",
      category: "Xiaomi",
      quantity: 20,
      price: 3490000,
    },
    {
      name: "Xiaomi Redmi Note 11",
      image: "redminote11.jpeg",
      category: "Xiaomi",
      quantity: 20,
      price: 4390000,
    },
    {
      name: "Xiaomi Redmi Note 11 Pro",
      image: "redminote11pro.jpeg",
      category: "Xiaomi",
      quantity: 20,
      price: 6790000,
    },
    {
      name: "Xiaomi Redmi Note 11S",
      image: "redminote11s.jpeg",
      category: "Xiaomi",
      quantity: 20,
      price: 5990000,
    },
    {
      name: "Xiaomi 11T",
      image: "xiaomi11t.jpeg",
      category: "Xiaomi",
      quantity: 20,
      price: 8490000,
    },
    {
      name: "Xiaomi 11T Pro",
      image: "xiaomi11tpro.jpeg",
      category: "Xiaomi",
      quantity: 20,
      price: 11490000,
    },
    {
      name: "OPPO Find X5 Pro",
      image: "findx5.jpeg",
      category: "Oppo",
      quantity: 20,
      price: 27990000,
    },
    {
      name: "OPPO Reno8 4G",
      image: "reno84g.jpeg",
      category: "Oppo",
      quantity: 20,
      price: 8990000,
    },
    {
      name: "OPPO Reno8 Z 5G",
      image: "reno8z5g.jpeg",
      category: "Oppo",
      quantity: 20,
      price: 10490000,
    },
    {
      name: "OPPO Reno7",
      image: "reno7.png",
      category: "Oppo",
      quantity: 20,
      price: 6990000,
    },
    {
      name: "OPPO Reno6 5G",
      image: "reno6.jpeg",
      category: "Oppo",
      quantity: 20,
      price: 9990000,
    },
    {
      name: "OPPO Reno 7 Z 5G",
      image: "reno7z5g.jpeg",
      category: "Oppo",
      quantity: 20,
      price: 8990000,
    },
  ];
  var dbo = db.db("admin_db");
  console.log("database connected!");

  // dbo.collection("users").insert(users, (err, result) => {
  //   if (err) {
  //     console.log(err);
  //     process.exit(0);
  //   }

  //   console.log("records added.");

  //   db.close();
  // });
  dbo.collection("products").insert(products, (err, result) => {
    if (err) {
      console.log(err);
      process.exit(0);
    }

    console.log("records added.");
    console.log(result);
    db.close();
  });
});
