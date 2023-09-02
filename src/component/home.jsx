import { Link } from "react-router-dom";
import './home.css';

export function HomeComponent() {
    return (
        <div className="container-fluid">
            <div className="homepage">
                <div className="mt-4">
                    <h2>Please Login to access the Posts
                        <button className="btn btn-primary ms-4"><Link to="/login" className="text-dark text-decoration-none h4" >Login</Link></button>
                    </h2>
                </div>
                <div className="mt-4">
                    <h2>New User Please Register
                        <button className="btn btn-warning ms-4"><Link to="/register" className="text-dark text-decoration-none h4" >Register</Link></button>
                    </h2>
                </div>
            </div>
        </div>

    )
}