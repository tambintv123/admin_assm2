class Product {
  constructor(_name, _image, _category, _price, _quantity) {
    this.name = _name;
    this.image = _image;
    this.category = _category;
    this.price = _price;
    this.quantity = _quantity;
  }
}

const getEle = (id) => {
  return document.getElementById(id);
};

const getVal = (id) => document.getElementById(id).value;

getEle("btnCreate").addEventListener("click", () => {
  getEle("exampleModalLabel").innerHTML = "Add product";
  getEle("btnSubmit").style.display = "block";
  getEle("btnUpdate").style.display = "none";
});

const getDelete = (name) => {
  fetch(`/products`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
    }),
  })
    .then((res) => {
      if (res.ok) return res.json();
    })

    .then((response) => {
      if (response === "No product to delete") {
        getEle("message").textContent = "No product to delete";
      } else {
        window.location.reload(true);
      }
    })

    .catch((err) => console.log(err));
};

const getEdit = (id) => {
  getEle("exampleModalLabel").innerHTML = "Edit Product";
  getEle("btnSubmit").style.display = "none";
  document.querySelector(".modal-footer").innerHTML = `
  <button  type="button" class="btn btn-warning" onclick="handleUpdate('${id}')">Update</button>
`;

  fetch(`/products/${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => {
      if (res.ok) return res.json();
    })
    .then((response) => {
      console.log(response);
      const { productItem } = response;

      getEle("name").value = productItem.name;
      getEle("category").value = productItem.category;
      getEle("price").value = productItem.price;
      getEle("quantity").value = parseInt(productItem.quantity);
    })
    .catch((err) => console.log(err));
};

const handleUpdate = (id) => {
  let name = getEle("name").value;
  let image = "";
  if (getEle("image").files.length > 0) {
    image = getEle("image").files[0].name;
  }
  let category = getEle("category").value;
  let price = getEle("price").value;
  let quantity = getEle("quantity").value < 0 ? 0 : getEle("quantity").value;

  const product = new Product(name, image, category, price, quantity);
  fetch(`/products/${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => {
      if (res.ok) res.json();
    })
    .then((response) => {
      console.log(response);
      const { productItem } = response;

      if (!product.image) {
        product.image = productItem.image;
      }
      return product;
    });
  fetch("/products", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      product,
    }),
  })
    .then((res) => {
      if (res.ok) res.json();
    })
    .then((response) => {
      console.log(response);
      window.location.reload(true);
    })
    .catch((err) => console.log(err));
};
window.handleUpdate = handleUpdate;
