import HeaderTop from "./header_top/HeaderTop"
import "./Header.scss"
import HeaderBottom from "./header_bottom/HeaderBottom"

function Header() {
  return (
    <nav className="navbar">
      <HeaderTop />
      <HeaderBottom />
    </nav>
  )
}

export default Header
