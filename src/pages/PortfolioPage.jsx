import React from "react"
import ilus from "../assets/Ilus.jpg"
import logo from "../assets/Logo.jpg"
import poster from "../assets/Poster.png"

function PortfolioPage (props){
    return(
        <>
            <h2 className="title" id="port">Portfolio</h2>
            <div className="cards">
                <div className="col">
                <div className="card h-100">
                    <img src={ilus} className="card-img-top" width="300px"/>
                    <div className="card-body">
                    <h5 className="card-title">Poster Design</h5>
                    <p className="card-text">View more</p>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="card h-100">
                    <img src={logo} className="card-img-top" width="305px"/>
                    <div className="card-body">
                    <h5 className="card-title">Logo Design</h5>
                    <p className="card-text">View more</p>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="card h-100">
                    <img src={poster} className="card-img-top" width="300px"/>
                    <div className="card-body">
                    <h5 className="card-title">Illustration</h5>
                    <p className="card-text">View more</p>
                    </div>
                </div>
                </div>
            </div>
            </>
    )
}

export default PortfolioPage