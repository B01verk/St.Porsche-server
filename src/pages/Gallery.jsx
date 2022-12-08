import cars from '../assets/db.json'
import '../catalog.css'
import { Link } from 'react-router-dom'

function Gallery() {
    return (
        <div id="catalog-1" className="catalog">
            { cars.map((value, index) => (
                <Link key={ index } to={ '/gallery/' + index } className="element">
                    <img className="kartinka" src={ value['img'] } />
                    <h2 className="zagolovok">{`${ value['mark'] } ${ value['model'] } ${ value['year'] }` }</h2>
                    <span className="cena">Price: { value['price'] }</span>
                    <span className="probeg">Mileage: { value['mileage'] }</span>
                </Link>
            )) }
        </div>
    )
}

export default Gallery