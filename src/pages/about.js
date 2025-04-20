const data = {
  title: 'About',
  body: 'Nestled in the heart of Drogheda, Baba\'s Kitchen brings authentic Ukrainian flavors to Ireland. Our family-run restaurant celebrates generations of traditional recipes passed down from our beloved grandmothers (babas), combined with a warm, modern atmosphere. Experience the soulful taste of Ukraine through our handmade varenyky, hearty borscht, and signature Chicken Kyiv.'
}

export const renderPage = () => {
  const sectionNode = document.createElement('section');
  sectionNode.id = 'about';
  const titleNode = document.createElement('h2');
  titleNode.textContent = data.title;
  const descriptionNode = document.createElement('p');
  descriptionNode.textContent = data.body;

  sectionNode.appendChild(titleNode);
  sectionNode.appendChild(descriptionNode);

  return sectionNode;
}