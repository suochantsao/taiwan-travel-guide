// Router
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <header>
      <h1>
        <Link to="/"> WEB LOGO </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/attractions"> 景點探索 </Link>
          </li>
          <li>熱門住宿</li>
          <li>最夯美食</li>
          <li>活動與展覽</li>
          <li>登入 / 註冊</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
