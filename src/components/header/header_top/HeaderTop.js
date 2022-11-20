import { FaLinkedinIn } from "react-icons/fa"
import { GrMail, GrYoutube } from "react-icons/gr"
import { GiRotaryPhone } from "react-icons/gi"
import { AiFillFacebook, AiFillHome } from "react-icons/ai"

import "./HeaderTop.scss"

function HeaderTop() {
  return (
    <div className="top-bar">
      <ul>
        <li>Энергосберегающее оборудование</li>
      </ul>
      <ul>
        <li>
          <GrMail />
          <a href="mailto:prom-privod@mail.ru">prom-privod@mail.ru</a>
        </li>
        <li>
          <GiRotaryPhone />
          +375 (17) 363-47-09
        </li>
        <li>
          <AiFillHome />
          220026, Беларусь, Минск, пер. Бехтерева, 8, оф. 220П
        </li>
        <li>
          <AiFillFacebook />
        </li>
        <li>
          <FaLinkedinIn />
        </li>
        <li>
          <GrYoutube />
        </li>
      </ul>
    </div>
  )
}

export default HeaderTop
