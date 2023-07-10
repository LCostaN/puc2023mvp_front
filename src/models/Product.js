export default class Product {
  constructor(name, category, description, src, count) {
    this.name = name || ''
    this.category = category || ''
    this.description = description || ''
    this.src = src
    this.count = count || 0
  }

  static fromObject(object) {
    return new Product(object.name, object.category, object.description, object.src, object.count)
  }
}
