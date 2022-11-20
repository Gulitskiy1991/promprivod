import { ImSearch } from "react-icons/im"

import "./HeaderBottom.scss"
import logo from "../../../assets/images/logo_ru.png"

function HeaderBottom() {
  return (
    <div className="bottom-bar">
      <div>
        <img src={logo} alt="ООО Промпривод - Энергосберегающее оборудование" />
      </div>
      <div className="items">
        <ul>
          <li>
            <a href="/">О компании</a>
          </li>
          <li>
            <a href="/">Услуги</a>
          </li>
          <li>
            <a href="/">Продукция</a>
          </li>
          <li>
            <a href="/">Статьи</a>
          </li>
          <li>
            <a href="/">Контакты</a>
          </li>
          <li>
            <a href="/">Оформить заказ</a>
          </li>
        </ul>
        <ul>
          <li>
            <ImSearch />
          </li>
        </ul>
        <ul>
          <li>English</li>
        </ul>
      </div>
      <div></div>
    </div>
  )
}

export default HeaderBottom
