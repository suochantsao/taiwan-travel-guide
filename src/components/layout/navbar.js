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
          <Link to="/stay">
            <li>熱門住宿</li>
          </Link>
          <Link to="/foods">
            <li>最夯美食</li>
          </Link>
          <Link to="exhibition">
            <li>活動與展覽</li>
          </Link>
          <Link to="member">
            <li>登入 / 註冊</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
