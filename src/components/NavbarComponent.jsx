import { Link, useNavigate } from "react-router-dom";


const NavbarComponent = () => {
    let user = JSON.parse(localStorage.getItem("user"));
    let navigator = useNavigate()

    const logout = () => {
        localStorage.clear();
        navigator("/signin");
    }
    return (
        <nav className="navbar navbar-expand-lg">

            <Link className="navbar-brand" to="/"><img src="BOOKISH.png" alt="" style={{height:100}}/></Link>

            <button className="navbar-toggler" type="button" data-bs-collapse="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="navbar-nav">
                    <Link className="nav-link" to="/">Home </Link>
                    <Link className="nav-link" to="/addproduct">Add Product</Link>
                </div>

                <div>
                    {/* <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                    <form>
                        {/* <SearchBarComponent/> */}
                     
                    </form>
                </div>

                {user ?
                    <div className="navbar-nav ms-auto">
                        <p className="nav-link" >{user.username}</p>
                        <button className="nav-link" onClick={logout}>Log out</button>
                    </div>

                    :

                    <div className="navbar-nav ms-auto">
                        <Link className="nav-link" to="/signin">Sign In</Link>
                        <Link className="nav-link" to="/signup">Sign Up</Link>
                    </div>

                }
            </div>
        </nav>
    );
}

export default NavbarComponent