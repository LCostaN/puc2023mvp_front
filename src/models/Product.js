export default class Product {
  constructor(name, description, src, count) {
    this.name = name || ''
    this.description = description || ''
    this.src = src
    this.count = count || 0
  }

  static fromObject(object) {
    return new Product(object.name, object.description, object.src, object.count);
  }
}
