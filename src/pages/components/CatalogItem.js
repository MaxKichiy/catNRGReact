import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CatalogItem = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3001/data')
      .then(({ data }) => console.log(data));
  }, []);

  // let catalogList = data.map((el, index) => (
  //   <li className='catalog__item'>
  //     <div className='catalog__item-image'>
  //       <picture>
  //         <source media='(min-width: 768px)' srcSet={el.pictureBig} />
  //         <img src={el.picture} alt='Фото товара' />
  //       </picture>
  //     </div>
  //     <div className='catalog__item-description'>
  //       <p className='catalog__item-text'>{el.name}</p>
  //       <table>
  //         <tbody>
  //           <tr>
  //             <td>Объем</td>
  //             <td>{el.amount}</td>
  //           </tr>
  //           <tr>
  //             <td>Вкус</td>
  //             <td>{el.flavor}</td>
  //           </tr>
  //           <tr>
  //             <td>Цена</td>
  //             <td>{el.price} Р.</td>
  //           </tr>
  //         </tbody>
  //       </table>
  //     </div>
  //     <button className='catalog-item__button button'>Заказать</button>
  //   </li>
  // ));

  return <h1>a</h1>;
};

export default CatalogItem;
