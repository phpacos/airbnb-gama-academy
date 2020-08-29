// Faremos as requisações em uma API externa, cujo endpoint já está listado abaixo.
const API_URL = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";

  
fetch(API_URL).then(response => response.text())
  .then(result => {

    const data = JSON.parse(result);

    data.map(element => {
      const {photo, property_type, name, price}= element;
       // row
      const row = document.getElementById("row");
      //div col
      const div = document.createElement("div");
      div.className = "col-md-4";
      //card
      const card = document.createElement('card');
      card.className = "card mb-4 box shadow";
      //img
      const image = document.createElement("img");
      image.className = "card-img-top";
      image.src = photo;
      //cardBody
      const cardBody = document.createElement('div');
      cardBody.className = "card-body";
      //cardText
      const cardText = document.createElement('div');
      cardText.className ="card-text";
      const propertyType = document.createElement('p');
       //propertyType
      propertyType.className = "property-type";
      propertyType.innerHTML = property_type;
      //propertyName
      const propertyName = document.createElement('p');
      propertyName.className = "property-name";  
      propertyName.innerHTML = name;  
      //propertyPrice
      const propertyPrice = document.createElement('p');
      propertyPrice.className = "property-price";  
      propertyPrice.innerHTML = `Preço: R$ ${price},00`;  
      
      //Criando os elementos...
      row.appendChild(div);
      div.appendChild(card);
      card.appendChild(image);
      card.appendChild(cardBody);
      cardBody.appendChild(cardText);
      cardText.appendChild(propertyType);
      cardText.appendChild(propertyName);
      cardText.appendChild(propertyPrice);

    });

    


  });


