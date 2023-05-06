import React from "react";
import img from "./images/image-header-desktop.jpg";
import img2 from "./images/image-header-mobile.jpg";


function PreviewComponents() {
    return (
        <div className="container-fluid">

            {/* making a card */}

            <div className="card" >

                {/* making a picture tag for responsive images */}

                <picture className="wrapper">
                    <source media="(max-width: 768px)" srcset={img2} />
                    <source media="(min-width: 769px)" srcset={img} />
                    <img src={img2} alt="herosection" className="img-fluid radius" />
                    <div className="color"></div>
                </picture>

                {/* card body */}
                <div className="card-body">
                    <h3 className="card-title">Get <span className="voilet">insights</span> that help your business grow.</h3>
                    <p className="card-text">Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>

                    {/* card footer */}

                    <div className="card-footer">
                        <div className="col-4">
                            <h4 className="card-title3">10k+</h4>
                            <p className="card-text2">COMPANIES</p>
                        </div>
                        <div className="col-4">
                            <h4 className="card-title3">314</h4>
                            <p className="card-text2">TEMPLATES</p>
                        </div>
                        <div className="col-4">
                            <h4 className="card-title3">12M+</h4>
                            <p className="card-text2">QUERIES</p>
                        </div>
                    </div>

                    {/* card footer end */}



                </div>


            </div>

            {/* card end */}

        </div>
    );
}

export default PreviewComponents;