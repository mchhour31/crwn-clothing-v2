import { Link, Outlet } from 'react-router-dom';
import { Fragment } from 'react';
// import ShopIcon from '../../../public/apple-touch-icon.png';
import './navbar.scss';

export default function Navbar() {
    const categories = [
        {
          "id": 1,
          "title": "hats",
          "imageUrl": "https://i.ibb.co/cvpntL1/hats.png",
          "url": "/hats"
        },
        {
          "id": 2,
          "title": "jackets",
          "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png",
          "url": "/jackets"
        },
        {
          "id": 3,
          "title": "sneakers",
          "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png",
          "url": "/sneakers"
        },
        {
          "id": 4,
          "title": "womens",
          "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png",
          "url": "/womens"
        },
        {
          "id": 5,
          "title": "mens",
          "imageUrl": "https://i.ibb.co/R70vBrQ/men.png",
          "url": "/mens"
        }
    ]

    return (
        <Fragment>
          <ul>
              <div className="container">
                  <li>
                      <Link className="shop" to="/">Shop</Link>
                  </li>
                  <div className="content">
                      {categories.map((item) => {
                          return (
                          <li key={item.id} className="content">
                              <Link to={item.url} >
                                  {item.title} <img src={item.imageUrl} alt='null' />
                              </Link>
                          </li>
                      )})}
                  </div>
              </div>
          </ul>
          <Outlet />
        </Fragment>
    )
}
