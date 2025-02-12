export const Testimonials = () => {
    const testimonials = [1, 2, 3, 4]
    return (
      <section className="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <div key={item} className="testimonial-card">
              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="star">
                    <img src= "./icons_assets/star?" width={"35px"} />
                  </span>
                ))}
              
              </div>
              <div className="reviewer">
                <img src={`/icons_assets/review${item}`} alt={`Reviewer ${item}`} />
                <div>
                  <h4>Review {item}</h4>
                  <p>Chicago, IL</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  export default Testimonials
  
  