import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="header">
            <img src="https://media.tenor.com/ijffyjt8WKYAAAAj/dog-twerk.gif" alt="" />
            <h1>DogGo</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/" >Home</Link>
                    </li>
                    <li>
                        <Link to="/about" >About</Link>
                    </li>
                    <li>
                        <Link to="/user/123" >User</Link>
                    </li>
                    <li>
                        <Link to="/login" >Login</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}