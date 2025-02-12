const Specials = () => {
    const specialItems = [
        {
          title: "Greek Salad",
          price: "12.99",
          description:
            "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
          image: "./icons_assets/greek salad.jpg",
        },
        {
          title: "Bruchetta",
          price: "5.99",
          description:
            "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and virgin olive oil. ",
          image: "./icons_assets/bruchetta.svg",

        },
        {
          title: "Lemon Dessert",
          price: "5.00",
          description:
            "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
          image: "./icons_assets/lemon dessert.jpg",
        },
      ]
    
      return (
        <section className="specials">
          <div className="specials-header">
            <h1>This weeks specials!</h1>
            <button className="online-menu-button">Online Menu</button>
          </div>
          <div className="specials-grid">
            {specialItems.map((item, index) => (
              <div key={index} className="special-card">
                <img src={item.image || "/placeholder.svg"} alt={item.title} />
                <div className="special-content">
                  <div className="special-title">
                    <h3>{item.title}</h3>
                    <span className="price">${item.price}</span>
                  </div>
                  <p>{item.description}</p>
                  <button className="order-button">Order a delivery</button>
                  <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.4708 1.72713C14.4708 0.8993 13.7206 0.221985 12.8036 0.221985H10.3028V1.72713H12.8036V3.72145L9.9027 6.99513H6.96843V3.23227H3.63404C1.79179 3.23227 0.299652 4.57938 0.299652 6.24256V8.50028H1.96685C1.96685 9.74955 3.08387 10.758 4.46764 10.758C5.85141 10.758 6.96843 9.74955 6.96843 8.50028H10.7029L14.4708 4.24825V1.72713ZM4.46764 9.25285C4.00916 9.25285 3.63404 8.91419 3.63404 8.50028H5.30124C5.30124 8.91419 4.92612 9.25285 4.46764 9.25285Z" fill="black"/>
<path d="M6.96844 0.974548H2.80045V2.47968H6.96844V0.974548Z" fill="black"/>
<path d="M14.4708 6.24255C13.087 6.24255 11.97 7.251 11.97 8.50026C11.97 9.74952 13.087 10.758 14.4708 10.758C15.8546 10.758 16.9716 9.74952 16.9716 8.50026C16.9716 7.251 15.8546 6.24255 14.4708 6.24255ZM14.4708 9.25283C14.0123 9.25283 13.6372 8.91417 13.6372 8.50026C13.6372 8.08635 14.0123 7.74769 14.4708 7.74769C14.9293 7.74769 15.3044 8.08635 15.3044 8.50026C15.3044 8.91417 14.9293 9.25283 14.4708 9.25283Z" fill="black"/>
                  </svg>

                </div>
              </div>
            ))}
          </div>
        </section>
      )
}

export default Specials;
