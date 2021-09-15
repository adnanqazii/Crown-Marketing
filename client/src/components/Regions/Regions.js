import React from 'react'

export default () => {
    return (
        <div id="regions" className="mb-2 container carousel slide" data-ride="carousel">
            <h1 className="m-0 mb-3">Regions:</h1>

            <ul className="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" className="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
            
            </ul>


            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img  className="d-block w-100" src="https://www.w3schools.com/bootstrap4/chicago.jpg" alt="What To Watch For in the 2019 Hungarian Grand Prix" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://www.w3schools.com/bootstrap4/chicago.jpg" alt="Hamilton wants harder championship fight from Leclerc and
                  Verstappen" />
                </div>
           
            </div>


            <a className="carousel-control-prev" href="#demo" data-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </a>
            <a className="carousel-control-next" href="#demo" data-slide="next">
                <span className="carousel-control-next-icon"></span>
            </a>
        
        </div>
    )
}