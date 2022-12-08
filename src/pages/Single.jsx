import { useParams, Link } from "react-router-dom"
import cars from '../assets/db.json'

function Single() {
    const { id } = useParams()
    const value = cars[id]

    function newId(n) {
        if (n > -1) {
            return n % cars.length
        } else {
            return cars.length + n % cars.length
        }
    }

    return (
        <>
            <h1 className="single-title">{`${ value['mark'] } ${ value['model'] } ${ value['year'] }` }</h1>
            <img className="single-image" src={ value['img'] } />
            <ul className="single-characteristics">
                <li>Пробег: { value['mileage'] }км</li>
                <li>Трансмиссия: { value['transmission'] }</li>
                <li>Двигатель: { value['engine'] }л</li>
                <li>Мощность: { value['power'] }л.с.</li>
                <li>Цена: { value['price'] }Р</li>
            </ul>
            <a className="blue-button">Купить</a>
            <div className="icons">
                <Link to={ '/gallery/' + newId(Number(id) - 1) } className="icon-left">
                    <iconify-icon icon="material-symbols:arrow-back-ios-new-rounded" width="50"></iconify-icon>
                </Link>
                <Link to={ '/gallery/' + newId(Number(id) + 1) } className="icon-right">
                    <iconify-icon icon="material-symbols:arrow-forward-ios-rounded" width="50"></iconify-icon>
                </Link>
            </div>
        </>
    ) 
}

export default Single