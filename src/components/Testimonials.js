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
                    ★
                  </span>
                ))}
              </div>
              <div className="reviewer">
                <img src="/placeholder.svg?height=64&width=64" alt={`Reviewer ${item}`} />
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
  
  