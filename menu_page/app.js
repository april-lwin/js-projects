// items
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./img/item1.jpg",
    desc: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the`,
  },
  {
    id: 2,
    title: "dinner double",
    category: "lunch",
    price: 38.5,
    img: "./img/item2.jpeg",
    desc: `At ourselves direction believing do he departure. Celebrated her had sentiments understood are projection set. Possession ye no mr unaffected remarkably at.`,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./img/item3.jpeg",
    desc: `Wrote house in never fruit up. Pasture imagine my garrets an he. However distant she request behaved see nothing. Talking settled at pleased an of me brother weather.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "lunch",
    price: 20.99,
    img: "./img/item4.jpeg",
    desc: `Lose away off why half led have near bed. At engage simple father of period others except. My giving do summer of though narrow marked at.`,
  },
  {
    id: 5,
    title: "egg attack",
    category: "breakfast",
    price: 22.99,
    img: "./img/item5.jpeg",
    desc: `Spring formal no county ye waited. My whether cheered at regular it of promise blushes perhaps.`,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./img/item6.jpeg",
    desc: `Uncommonly simplicity interested mr is be compliment projecting my inhabiting. Gentleman he september in oh excellent.`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./img/item7.jpg",
    desc: `Mr do raising article general norland my hastily. Its companions say uncommonly pianoforte favourable. Education affection consulted by mr.`,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./img/item8.jpeg",
    desc: `attending he therefore on forfeited. High way more far feet kind evil play led. Sometimes furnished collected add for resources attention.`,
  },
  {
    id: 9,
    title: "steak dinner",
    category: "dinner",
    price: 39.99,
    img: "./img/item9.jpeg",
    desc: `attending he therefore on forfeited. High way more far feet kind evil play led. Sometimes furnished collected add for resources attention.`,
  },
];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

// load items
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  // const catagories = menu.map(function (item) {
  //   return item.category;
  // });
  // console.log(catagories);
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);
    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  // displayMenu = displayMenu.join();
  // join()မှာ ဘာမှာ မထည့်ပေးထားရင် နောက်တစ်ခုနဲ့ ဆက်တဲ့ နေရာမှာ , တွေ ပါလာလို့ , မပါအောင် ("") နဲ့ ဆက်။
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  // console.log(categories);
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>${category}</button>`;
    })
    .join("");
  // console.log(categoryBtns);
  container.innerHTML = categoryBtns;
  const filterBtns = container.querySelectorAll(".filter-btn");
  // filter items
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCatagory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      // console.log(menuCatagory);
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCatagory);
      }
    });
  });
}
