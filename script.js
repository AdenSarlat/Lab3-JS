class ToyCar { // Builds a toy car object with 11 properties
  constructor(model, brand, scale, color, price, carType, topSpeed, engine, horsepower, launchYear, movieAppearance) {
    this.model = model;
    this.brand = brand;
    this.scale = scale;
    this.color = color;
    this.price = price;
    this.carType = carType;
    this.topSpeed = topSpeed;
    this.engine = engine;
    this.horsepower = horsepower;
    this.launchYear = launchYear;
    this.movieAppearance = movieAppearance;
  }

  getDescription() { // Converting car data into a layout
    return `
      <h2>${this.brand} ${this.model}</h2>
      <p><strong>Scale:</strong> ${this.scale}</p>
      <p><strong>Color:</strong> ${this.color}</p>
      <p><strong>Price:</strong> $${this.price}</p>
      <p><strong>Type:</strong> ${this.carType}</p>
      <p><strong>Top Speed:</strong> ${this.topSpeed} km/h</p>
      <p><strong>Engine:</strong> ${this.engine}</p>
      <p><strong>Horsepower:</strong> ${this.horsepower} HP</p>
      <p><strong>Launch Year:</strong> ${this.launchYear}</p>
      <p><strong>Movie Appearance:</strong> ${this.movieAppearance}</p>
    `;
  }
} // Waits for the button click to show off the car details
document.getElementById('showCarBtn').addEventListener('click', function () {
  const car = new ToyCar(
    "RX-7", "Jada Toys", "1:32", "Orange", 9.99, "Sports", 240, "Rotary", 276, 1997, "Fast & Furious"
  );
//// Image source: ModelToyCars.com - https://modeltoycars.com/hans-mazda-rx-7-fast-furious-jada-toys-30736-1-32-scale-diecast-model-toy-car/?searchid=979364&search_query=+Fast+%26+Furious
  document.getElementById('carDetails').innerHTML = car.getDescription();
  document.getElementById('carImage').innerHTML = `
    <img src="rx7newpic.png" alt="Mazda RX-7 Toy Car" />  
  `;
});
