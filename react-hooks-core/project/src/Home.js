import React from 'react';
import {Header} from "./Header";
import {Menu} from "./Menu";

const Home = () => {
    return (
        <div>
            <Header/>
            <Menu/>
            <div className="container">
                <div className="row">
                    <div className="col margintopbottom">
                        <h2>Home</h2>
                        <h6 className="margintopbottom20">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate,
                            urna eget faucibus hendrerit,
                            lorem mauris maximus erat, vel maximus ex mi sed diam. Curabitur tempor ligula
                            in turpis semper, in ornare elit iaculis.
                            Ut a ipsum at turpis porttitor bibendum quis vel ipsum.
                            Aliquam euismod sagittis erat, ut vulputate.
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;