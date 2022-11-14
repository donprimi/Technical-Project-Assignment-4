import { Routes, Route, Link} from 'react-router-dom';
import HomePage from "../pages/HomePage"
import AboutPage from "../pages/AboutPage"
import PortfolioPage from "../pages/PortfolioPage"
import BlogPage from "../pages/BlogPage"


function Navbar (props) {
    return (
        <>
            <div className='nav'>
                <Link className="a" to={"/"}>{props.nav1}</Link>
                <Link className="a" to={"/about"}>{props.nav2}</Link>
                <Link className="a" to={"/portfolio"}>{props.nav3}</Link>
                <Link className="a" to={"/blog"}>{props.nav4}</Link>
            </div>

            <Routes>
             <Route path="/" element ={<HomePage/>}/>
             <Route path="/about" element ={<AboutPage/>}/>
             <Route path="/portfolio" element ={<PortfolioPage/>}/>
             <Route path="/blog" element ={<BlogPage/>}/>
            </Routes>
        
        </>
    )
}

export default Navbar