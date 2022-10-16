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
      name: "Bearbrick Candy",
      image: "bearbrick_candy.png",
      category: "Bearbrick",
      quantity: 100,
      price: 33490000,
    },
    {
      name: "Bearbrick Halloween",
      image: "bearbrick_halloween.png",
      category: "Bearbrick",
      quantity: 150,
      price: 30490000,
    },
    {
      name: "Bearbrick Kaws",
      image: "bearbrick_kaws.jpeg",
      category: "Bearbrick",
      quantity: 100,
      price: 27499000,
    },
    {
      name: "Bearbrick Terminator",
      image: "bearbrick_terminator.png",
      category: "Bearbrick",
      quantity: 340,
      price: 24499000,
    },
    {
      name: "Lego Elsa",
      image: "lego_elsa.jpeg",
      category: "Lego",
      quantity: 300,
      price: 7499000,
    },
    {
      name: "Lego Bella",
      image: "lego_bella.jpeg",
      category: "Lego",
      quantity: 150,
      price: 4999000,
    },
    {
      name: "Lego Harry Potter",
      image: "lego_harrypotter.jpeg",
      category: "Lego",
      quantity: 250,
      price: 6999000,
    },
    {
      name: "Lego Minecraft",
      image: "lego_minecraft.jpeg",
      category: "Lego",
      quantity: 150,
      price: 2999000,
    },
    {
      name: "Lego Police",
      image: "lego_police.jpeg",
      category: "Lego",
      quantity: 100,
      price: 4199000,
    },
    {
      name: "Remote Car Off-road (Green)",
      image: "xeDieuKhien_1.jpeg",
      category: "Car",
      quantity: 200,
      price: 20990000,
    },
    {
      name: "Remote Car Off-road (Orange)",
      image: "xeDieuKhien_2.jpeg",
      category: "Car",
      quantity: 20,
      price: 19990000,
    },
    {
      name: "Super Remote Car",
      image: "xeDieuKhien_3.jpeg",
      category: "Car",
      quantity: 140,
      price: 37990000,
    },
    {
      name: "New version Remote Car",
      image: "xeDieuKhien_4.jpeg",
      category: "Car",
      quantity: 120,
      price: 15490000,
    },
    {
      name: "Remote Car Transform",
      image: "xeDieuKhien_5.jpeg",
      category: "Car",
      quantity: 220,
      price: 24990000,
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
