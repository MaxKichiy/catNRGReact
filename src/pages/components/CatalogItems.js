import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchingData } from '../../redux/actions/catalog';

const CatalogItems = () => {
  const dispatch = useDispatch();
  const catalog = useSelector((state) => state.catalog.catalog);

  useEffect(() => {
    dispatch(fetchingData());
  }, [dispatch]);

  let catalogList = catalog.map((el, index) => (
    <li key={el._id} className='catalog__item'>
      <div className='catalog__item-image'>
        <picture>
          <source media='(min-width: 768px)' srcSet={el.pictureBig} />
          <img src={el.picture} alt='Фото товара' />
        </picture>
      </div>
      <div className='catalog__item-description'>
        <p className='catalog__item-text'>{el.name}</p>
        <table>
          <tbody>
            <tr>
              <td>Объем</td>
              <td>{el.amount}</td>
            </tr>
            <tr>
              <td>Вкус</td>
              <td>{el.flavor}</td>
            </tr>
            <tr>
              <td>Цена</td>
              <td>{el.price} Р.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button className='catalog-item__button button'>Заказать</button>
    </li>
  ));

  return <>{catalogList}</>;
};

export default CatalogItems;
