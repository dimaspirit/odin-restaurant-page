const data = {
  title: 'Location',
  hours: 'Hours: From sunrise to moonrise',
  phone: 'Phone: (888) 88E-ARTH',
  location: 'Location: 24 West Street, Drogheda, Co. Louth, A92 K8P7, Ireland',
}

export const renderPage = () => {
  const sectionNode = document.createElement('section');
  sectionNode.id = 'contacts';
  const titleNode = document.createElement('h2');
  titleNode.textContent = data.title;
  const hoursNode = document.createElement('p');
  hoursNode.textContent = data.hours;
  const phoneNode = document.createElement('p');
  phoneNode.textContent = data.phone;
  const locationNode = document.createElement('p');
  locationNode.textContent = data.location;

  sectionNode.appendChild(titleNode);
  sectionNode.appendChild(hoursNode);
  sectionNode.appendChild(phoneNode);
  sectionNode.appendChild(locationNode);

  return sectionNode;
}