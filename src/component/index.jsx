import { BrowserRouter, Route, Routes,Link} from "react-router-dom";
import { HomeComponent } from "./home";
import { Login } from "./login";
import { Register } from "./register";
import { PostPage } from "./predata";
import { ErrorPage } from "./error";


export function LoginRegisterIndex() {
    return (
        <div className="container-fluid">
            <BrowserRouter>
                <header className="bg-dark text-white p-3 d-flex justify-content-between">
                    <div className="h4">Posts</div>
                    <div>
                        <span className="me-3"><Link to="/home" className="text-white text-decoration-none h5">Home</Link></span>
                        <span className="me-3"><Link to="/login" className="text-white text-decoration-none h5">Login</Link></span>
                        <span className="me-3"><Link to="/register" className="text-white text-decoration-none h5">Register</Link></span>
                        <span className="me-3"><Link to="/login" className="text-white text-decoration-none h5">Posts</Link></span>
                    </div>
                    <div>
                        <span className="bi bi-person-fill me-2 h5"></span>
                        <span className="bi bi-search me-2 h5"></span>
                    </div>
                </header>
                <section className="mt-3" style={{height:'700px'}}>
                    <Routes>
                        <Route path="/" element={<HomeComponent /> } />
                        <Route path="/home" element={<HomeComponent />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/posts" element={<PostPage />} />
                        <Route path="/error" element={<ErrorPage />} />
                        <Route path="*" element={<div><h2 className="text-danger">Requested Path Not Found.</h2></div>} />
                    </Routes>
                </section>
            </BrowserRouter>
        </div>
    )
}