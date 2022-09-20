// Categories of the Month_________________________________

let products = [
  {
    id: 1,
    image:
      "https://ae04.alicdn.com/kf/Hfca1e841b52e4e1ab4a422d5de69dad7E/-.jpg",
    name: "Watches",
    price: 100,
  },
  {
    id: 2,
    image: "https://ae01.alicdn.com/kf/HTB1uF53U5LaK1RjSZFxq6ymPFXas/2019.jpg",
    name: "Shoes",
    price: 170,
  },
  {
    id: 3,
    image:
      "https://ae04.alicdn.com/kf/HTB1cAnObN6I8KJjSszfq6yZVXXaX/Xiaomi-Mijia-Turok-Steinhardt-TS.jpg",
    name: "Accessories",
    price: 60,
  },
  {
    id: 4,
    image:
      "https://wishmaster.me/upload/iblock/8c9/8c9e46ff0852964e2426b8df2ae21a8d.jpg",
    name: "Notebooks",
    price: 800,
  },
  {
    id: 5,
    image: "https://ae01.alicdn.com/kf/He5f6fc0e46504e9b94886d5a86518f2b6.jpg",
    name: "Shirts",
    price: 99.8,
  },
  {
    id: 6,
    image:
      "https://playfrag.ru/upload/resize/349/3499/1000x1000x75/hyperx-alloy-origins-mx-red_7.jpg",
    name: "Keyboards",
    price: 76.77,
  },

  {
    id: 7,
    image: "https://ae04.alicdn.com/kf/HTB1cc58L3HqK1RjSZFgq6y7JXXaR.jpg",
    name: "Travel Bags",
    price: 230,
  },
  {
    id: 8,
    image:
      "https://poisktehniki.ru/wp-content/uploads/2020/09/maxresdefault1.jpg",
    name: "Smartphones",
    price: 370,
  },
  {
    id: 9,
    image:
      "https://img.tttcdn.com/product/xy/2000/2000/p/gu1/C/2/C4242/C4242-1-c252-zMPU.jpg",
    name: "Routers",
    price: 88.09,
  },
];

let Parent = document.querySelector(".products");

const Total = document.querySelector("#total");

const count = document.querySelector("#count");

let emptyBox = [];

products.map((product) => {
  let Box = document.createElement("div");
  Parent.appendChild(Box);
  Box.className = "product";

  let image = document.createElement("img");
  Box.appendChild(image);
  image.src = product.image;

  let p = document.createElement("p");
  Box.appendChild(p);
  p.className = "name_of_product";
  p.innerText = product.name;

  let btn = document.createElement("button");
  Box.appendChild(btn);
  btn.innerHTML = "Go Shop";
  btn.className = "btn";

  btn.addEventListener("click", () => {
    let check = false;
    emptyBox.filter((item) =>
      item.id === product.id ? (check = true) : check
    );

    if (check === true) {
      alert("This product has already been added");
    } else {
      emptyBox.push(product);
    }

    emptyBox.map((item) => {
      if (items.innerHTML.includes(item.name)) {
        ("");
      } else {
        let innerBox = document.createElement("div");
        items.appendChild(innerBox);
        innerBox.className = "in_box";
        innerBox.innerHTML += `<h4>${item.name}</h4>`;

        let Img = document.createElement("img");
        innerBox.appendChild(Img);
        Img.src = item.image;

        let price_adding = document.createElement("div");
        innerBox.appendChild(price_adding);
        price_adding.className = "price_adding";
        price_adding.innerHTML += `<h4>${"$ " + item.price}</h4>`;

        // Delete Button _______________________
        let deleteBtn = document.createElement("button");
        price_adding.appendChild(deleteBtn);
        deleteBtn.innerHTML = "Delete";

        deleteBtn.addEventListener("click", (e) => {
          console.log(e);
          let filtered = emptyBox.filter((ar) => ar.id !== item.id);
          emptyBox = [];
          filtered.map((filteredItem) => emptyBox.push(filteredItem));
          e.target.parentNode.parentNode.remove();
          count(filtered);
        });
      }
    });

    function count() {
      let count = document.querySelector("#count");
      count.innerHTML = emptyBox.length;

      let totalPrice = [];

      emptyBox.map((ar) => {
        totalPrice.push(Number(ar.price));
      });
      let totalSum = totalPrice.reduce((a, b) => a + b, 0);
      totalSum = totalSum.toFixed(2);
      Total.innerHTML = "Total: " + "$ " + totalSum;
    }
    count();
  });
});

// Featured Products_______________________________

let products2 = [
  {
    id: 10,
    image:
      "https://n1.sdlcdn.com/imgs/b/y/8/DOMYOS-Ankle-Weight-2-x-SDL216931447-3-b5739.jpg",
    stars: "https://ak.picdn.net/shutterstock/videos/1019062039/thumb/11.jpg",
    price: "240.00",
    name: "Gym Weight",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.",
  },
  {
    id: 11,
    image: "http://picture-cdn.wheretoget.it/wsyuzg-i.jpg",
    stars: "https://ak.picdn.net/shutterstock/videos/1019062039/thumb/11.jpg",
    price: "480.00",
    name: "Cloud Nike Shoes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.",
  },
  {
    id: 12,
    image:
      "https://sneakers.by/image/cache/data/photo/6/kupit-adidas-originals-topanga-s80055-v-belarusi-210843659-1000x800.jpg",
    stars: "https://ak.picdn.net/shutterstock/videos/1019062039/thumb/11.jpg",
    price: "550.00",
    name: "Summer Adidas Shoes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.",
  },
  {
    id: 13,
    image:
      "https://ae01.alicdn.com/kf/HTB1qGtXXnHuK1RkSndVq6xVwpXar/2018-Yeni-Spor-Ko-u-Pantolon-Gev-ek-Atletik-Basketbol-Futbol-Futbol-pantolon-E-itim-Esneklik.jpg",
    stars: "https://ak.picdn.net/shutterstock/videos/1019062039/thumb/11.jpg",
    price: "165.00",
    name: "Sport Pants",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.",
  },
  {
    id: 14,
    image:
      "https://kotofoto.ru/product_img/504/192720/192720_tsifrovoy_fotoapparat_canon_powershot_sx70_hsm.jpg?v=1558453854",
    stars: "https://ak.picdn.net/shutterstock/videos/1019062039/thumb/11.jpg",
    price: "2550.00",
    name: "Canon Camera",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.",
  },
  {
    id: 15,
    image:
      "https://static3.nordic.pictures/30338171-thickbox_default/pioneer-se-ms7bt-t-brown.jpg",
    stars: "https://ak.picdn.net/shutterstock/videos/1019062039/thumb/11.jpg",
    price: "220.00",
    name: "Headphones",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.",
  },
];

let container = document.querySelector(".featured_products");

let items = document.querySelector(".items");

products2.map((product2) => {
  let box = document.createElement("div");
  container.appendChild(box);
  box.className = "featured_product";

  let image = document.createElement("img");
  box.appendChild(image);
  image.src = product2.image;

  let star_price = document.createElement("div");
  box.appendChild(star_price);
  star_price.className = "star_and_price";

  let stars = document.createElement("div");
  star_price.appendChild(stars);
  stars.className = "stars";

  let stars_image = document.createElement("img");
  stars.appendChild(stars_image);
  stars_image.src = product2.stars;

  let price = document.createElement("p");
  star_price.appendChild(price);
  price.className = "price_of__featured_product";
  price.innerHTML = "$ " + product2.price;

  let description = document.createElement("div");
  box.appendChild(description);
  description.className = "description_of_featured_product";

  let name = document.createElement("p");
  description.appendChild(name);
  name.className = "name";
  name.innerHTML = product2.name;

  let info = document.createElement("p");
  description.appendChild(info);
  info.className = "text_info2";
  info.innerHTML = product2.description;

  let btn2 = document.createElement("button");
  box.appendChild(btn2);
  btn2.className = "btn2";
  btn2.innerHTML = "Add to Cart";

  btn2.addEventListener("click", () => {
    check = false;
    emptyBox.filter((item2) =>
      item2.id === product2.id ? (check = true) : check
    );
    console.log("check>>", check);
    console.log(product2.id);

    if (check === true) {
      alert("This product has already been added");
    } else {
      emptyBox.push(product2);
      console.log("product2>>>", product2);
    }

    emptyBox.map((item2) => {
      if (items.innerHTML.includes(item2.name)) {
        ("");
      } else {
        let innerBox = document.createElement("div");
        items.appendChild(innerBox);
        innerBox.className = "in_box";
        innerBox.innerHTML += `<h4>${item2.name}</h4>`;

        let Img = document.createElement("img");
        innerBox.appendChild(Img);
        Img.src = item2.image;

        let price_adding = document.createElement("div");
        innerBox.appendChild(price_adding);
        price_adding.className = "price_adding";
        price_adding.innerHTML += `<h4>${"$ " + item2.price}</h4>`;

        // Delete Button _______________________
        let deleteBtn = document.createElement("button");
        price_adding.appendChild(deleteBtn);
        deleteBtn.innerHTML = "Delete";

        deleteBtn.addEventListener("click", (e) => {
          console.log(e);
          let filtered = emptyBox.filter((ar) => ar.id !== item2.id);
          emptyBox = [];
          filtered.map((filteredItem) => emptyBox.push(filteredItem));
          e.target.parentNode.parentNode.remove();
          count(filtered);
        });
      }
    });

    function count() {
      let count = document.querySelector("#count");
      count.innerHTML = emptyBox.length;

      let totalPrice = [];

      emptyBox.map((ar) => {
        totalPrice.push(Number(ar.price));
      });
      let totalSum = totalPrice.reduce((a, b) => a + b, 0);
      totalSum = totalSum.toFixed(2);
      Total.innerHTML = "Total: " + "$ " + totalSum;
    }
    count();
  });
});

// Opening and Closing Slider Functions____________

let opens = false;

const Open = () => {
  if (opens === false) {
    const rightSlider = document.querySelector(".rightSlider");
    rightSlider.style.transform = "translateY(0)";
    opens = true;
  } else {
    const rightSlider = document.querySelector(".rightSlider");
    rightSlider.style.transform = "translateY(-1000px)";
    opens = false;
  }
};

const Close = () => {
  const rightSlider = document.querySelector(".rightSlider");
  rightSlider.style.transform = "translateY(-1000px)";
  opens = false;
};
