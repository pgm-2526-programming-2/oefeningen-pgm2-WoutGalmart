let amountOfMessages = 0;

function showMessage() {
  console.log("Hello");

  amountOfMessages++;
  if (amountOfMessages === 5) {
    return;
  }
  showMessage();
}

//showMessage();

const menu = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Explore",
    path: "/explore",
    subpages: [
      {
        name: "Awards",
        path: "/awards",
        subpages: [
          {
            name: "Nominees",
            path: "/nominees",
          },
          {
            name: "Sites of the day",
            path: "/sotd",
          },
        ],
      },
      {
        name: "Blog",
        path: "blog",
      },
    ],
  },
];

// oef
// log al de paginas en hun path in de console
// 1 ZONDER RECURSIE

const logMenu = (menu) => {
  menu.forEach((menuItem) => {
    console.log(menuItem.name, menuItem.path);

    if (menuItem.subpages) {
      menuItem.subpages.forEach((subpage) => {
        console.log(subpage.name, subpage.path);

        if (subpage.subpages) {
          subpage.subpages.forEach((subSubpage) => {
            console.log(subSubpage.name, subSubpage.path);
          });
        }
      });
    }
  });
};

logMenu(menu);

// 2 MET RECURSIE
const logMenuRecursie = (menu) => {
  menu.forEach((menuItem) => {
    console.log(menuItem.name, menuItem.path);
    if (menuItem.subpages) {
      logMenuRecursie(menuItem.subpages);
    }
  });
};

// logMenuRecursie(menu);
