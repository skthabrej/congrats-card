import React from "react";
import { Component } from "react";
import './CongratsCard.css'

class CongratsCard extends Component {
    render() {
        return (
            <div className="bg-container">
                <div>
                    <h1>Congratulations</h1>
                </div>
                <div className="congrats-card">
                    <div>
                        <img src="https://i.ibb.co/LkTRMb1/tobey-maguire-joins-avengers-kang-dynasty-as-spider-man-00001.jpg"/>
                    </div>
                    <h1 className="name">Tobey Maguire</h1>
                    <p className="para">Tobey Maguire is an American actor and producer. He gained international prominence for his role as Peter Parker / Spider-Man in the Spider-Man trilogy, which was directed by Sam Raimi, as well as the Marvel Cinematic Universe film Spider-Man: No Way Home.</p>
                </div>
            </div>
        )
    }
}

export default CongratsCard