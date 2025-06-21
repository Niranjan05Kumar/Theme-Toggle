import "../index.css"
import heroImg from '/public/hero-img.jpg'

const hero = () => {
    return (
        <section className="hero-section">
            <div className="container">
                <div className="text-content">
                    <h1>Before they sold out<br className="desktop-break" />readymade gluten</h1>
                    <p>
                        Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke
                        beard tote bag.
                        Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
                        chambray.
                    </p>
                    <div className="buttons">
                        <button className="btn primary">Button</button>
                        <button className="btn secondary">Button</button>
                    </div>
                </div>
                <div className="image-content">
                    <img src={heroImg} alt="hero image" />
                </div>
            </div>
        </section>

    )
}

export default hero
