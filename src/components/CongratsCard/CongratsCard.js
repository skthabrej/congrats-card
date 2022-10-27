import React from "react";
import { Component } from "react";
import './CongratsCard.css'

class CongratsCard extends Component {
    render() {
        return (
            <div className="bg-container">
                <h1 className="heading">CinEuphoria Awards</h1>
                <div className="congrats-card">
                    <img src="https://i.postimg.cc/vBdN78HF/wallpaperflare-com-wallpaper.jpg" alt='spider-man' className="img"/>
                    <h1 className="name">Tobey Maguire</h1>
                    <p className="para">
                    Best Actor – International Competition - 2011
                    </p>
                </div>
            </div>
        )
    }
}

export default CongratsCard