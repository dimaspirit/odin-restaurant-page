
const data = {
  title: 'About',
  body: [
    {
      header: 'Starters:',
      list: [
        'Borscht (Traditional beetroot soup served with sour cream and pampushky) - €7.50',
        'Pickled Herring with Boiled Potatoes - €8.95',
        'Assorted Ukrainian Appetizer Platter (salo, pickles, cheeses) - €12.95',
      ]
    },
    {
      header: 'Main Courses',
      list: [
        'Chicken Kyiv (Breaded chicken fillet filled with herb butter) - €16.95',
        'Varenyky (Potato & Cheese Dumplings) - €13.95',
        'Golubsti (Stuffed Cabbage Rolls) - €14.95',
      ]
    },
    {
      header: 'Desserts & Drinks',
      list: [
        'Medovik (Honey Cake) - €6.50',
        'Syrniki (Sweet Cheese Pancakes) - €5.95',
        'Kvass (Traditional fermented drink) - €3.50',
        'Uzvar (Dried fruit compote) - €3.00',
      ]
    }
  ]
}

export const renderPage = () => {
  const sectionNode = document.createElement('section');
  sectionNode.id = 'menu';
  const titleNode = document.createElement('h2');
  titleNode.textContent = data.title;
  sectionNode.appendChild(titleNode);

  data.body.forEach(section => {
    const menuSectioNode = document.createElement('div');

    const headerNode = document.createElement('h3');
    headerNode.textContent = section.header;
    menuSectioNode.appendChild(headerNode);

    const listNode = document.createElement('ul');

    section.list.forEach(item => {
      const listItemNode = document.createElement('li');
      listItemNode.textContent = item;

      listNode.appendChild(listItemNode);
    });

    menuSectioNode.appendChild(listNode);
    sectionNode.appendChild(menuSectioNode);
  });

  return sectionNode;
}