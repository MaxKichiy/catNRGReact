import React from 'react';

function AdditionalCatalogItems({ addCatalog }) {
  return (
    <>
      {addCatalog.map((el, index) => (
        <li key={`${el.name}_${index}`} className='advance__item'>
          <h4 className='advance__item-title'>{el.name}</h4>
          <p className='advance__item-description'>{el.amoung}</p>
          <p className='advance__item-price'>{el.price} Р.</p>
          <button className='advance__item-button button'>Заказать</button>
        </li>
      ))}
    </>
  );
}

export default AdditionalCatalogItems;
