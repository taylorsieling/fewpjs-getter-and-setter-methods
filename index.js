class Circle {
    constructor(radius) {
      this.radius = radius
    }
    
    get diameter() {
      return this.radius * 2
    }
  
    get circumference() {
      return (this.radius * 2) * Math.PI
    }
  
    get area() {
        return Math.PI * Math.pow(this.radius, 2)
    }
  
    set diameter(newDi) {
      this.radius = newDi/2
    }
  
    set circumference(newCir) {
      this.radius = (newCir/Math.PI)/2
    }
  
    set area(newArea) {
      this.radius = Math.sqrt(newArea)
    }
  
  }
  