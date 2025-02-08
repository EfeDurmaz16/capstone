const Specials = () => {
    const specialItems = [
        {
          title: "Greek Salad",
          price: "12.99",
          description:
            "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Bruschetta",
          price: "5.99",
          description:
            "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Lemon Dessert",
          price: "5.00",
          description:
            "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
          image: "/placeholder.svg?height=200&width=300",
        },
      ]
    
      return (
        <section className="specials">
          <div className="specials-header">
            <h2>Specials</h2>
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
                </div>
              </div>
            ))}
          </div>
        </section>
      )
}

export default Specials;
