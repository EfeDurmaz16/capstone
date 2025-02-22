import { useNavigate } from "react-router-dom";


const Hero = () => {
    const navigate = useNavigate();
    return (
      <section className="hero">
      <div className="hero-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua
        </p>
        <button className="cta-button" onClick={() => navigate("/reservations")}>Reserve a Table</button>
      </div>
      <div className="hero-image">
        <img src="./icons_assets/restauranfood.jpg" width={"375px"}  alt="Restaurant hero" />
      </div>
      </section>
    )
  }
  
  export default Hero
  
  