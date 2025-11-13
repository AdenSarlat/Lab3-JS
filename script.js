class ToyCar {
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

  getDescription() {
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
}


