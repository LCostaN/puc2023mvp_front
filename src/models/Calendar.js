export default class Calendar {
  constructor(unavailableDates, startDate) {
    this.now = startDate || new Date(new Date().getTime() + 86400000)
    this.unavailableDates = unavailableDates.map((d) => d.getTime())
    
    this.computeDates()
  }

  computeDates() {
    this.dates = new Map()
    for (var i = 0; i < 7; i++) {
      let day = this.now.getDate() + i
      let allDates = []

      allDates.push(new Date(this.now.getFullYear(), this.now.getMonth(), day, 8))
      allDates.push(new Date(this.now.getFullYear(), this.now.getMonth(), day, 8, 30))
      allDates.push(new Date(this.now.getFullYear(), this.now.getMonth(), day, 9))
      allDates.push(new Date(this.now.getFullYear(), this.now.getMonth(), day, 9, 30))
      allDates.push(new Date(this.now.getFullYear(), this.now.getMonth(), day, 10))
      allDates.push(new Date(this.now.getFullYear(), this.now.getMonth(), day, 10, 30))
      allDates.push(new Date(this.now.getFullYear(), this.now.getMonth(), day, 11))
      allDates.push(new Date(this.now.getFullYear(), this.now.getMonth(), day, 11, 30))
      allDates.push(new Date(this.now.getFullYear(), this.now.getMonth(), day, 12))
      allDates.push(new Date(this.now.getFullYear(), this.now.getMonth(), day, 12, 30))
      allDates.push(new Date(this.now.getFullYear(), this.now.getMonth(), day, 13))
      allDates.push(new Date(this.now.getFullYear(), this.now.getMonth(), day, 13, 30))
      allDates.push(new Date(this.now.getFullYear(), this.now.getMonth(), day, 14))
      allDates.push(new Date(this.now.getFullYear(), this.now.getMonth(), day, 14, 30))
      allDates.push(new Date(this.now.getFullYear(), this.now.getMonth(), day, 15))
      allDates.push(new Date(this.now.getFullYear(), this.now.getMonth(), day, 15, 30))
      allDates.push(new Date(this.now.getFullYear(), this.now.getMonth(), day, 16))
      allDates.push(new Date(this.now.getFullYear(), this.now.getMonth(), day, 16, 30))
      allDates.push(new Date(this.now.getFullYear(), this.now.getMonth(), day, 17))
      allDates.push(new Date(this.now.getFullYear(), this.now.getMonth(), day, 17, 30))

      const availableDates = allDates.filter((date) => !this.unavailableDates.includes(date.getTime()))

      this.dates.set(day, availableDates)
    }
  }

  addSchedule(date) {
    this.unavailableDates.push(date.getTime())
    this.computeDates()
  }

  changeStartDate(newDate) {
    this.now = newDate
    this.computeDates()
  }

  static mock() {
    var dates = [
      new Date(2023, 6, 5, 8),
      new Date(2023, 6, 5, 8, 30),
      new Date(2023, 6, 5, 9),
      new Date(2023, 6, 5, 9, 30),
      new Date(2023, 6, 5, 10),
      new Date(2023, 6, 5, 10, 30),
      new Date(2023, 6, 5, 11),
      new Date(2023, 6, 5, 11, 30),
      new Date(2023, 6, 5, 12),
      new Date(2023, 6, 5, 12, 30),
      new Date(2023, 6, 5, 13),
      new Date(2023, 6, 5, 13, 30),
      new Date(2023, 6, 5, 14),
      new Date(2023, 6, 5, 14, 30),
      new Date(2023, 6, 5, 15),
      new Date(2023, 6, 5, 15, 30),
      new Date(2023, 6, 5, 16),
      new Date(2023, 6, 5, 16, 30),
      new Date(2023, 6, 5, 17),
      new Date(2023, 6, 5, 17, 30),

      new Date(2023, 6, 6, 8),
      new Date(2023, 6, 6, 8, 30),
      new Date(2023, 6, 6, 9),
      new Date(2023, 6, 6, 9, 30),
      new Date(2023, 6, 6, 10),
      new Date(2023, 6, 6, 10, 30),
      new Date(2023, 6, 6, 11),
      new Date(2023, 6, 6, 11, 30),
      new Date(2023, 6, 6, 12),
      new Date(2023, 6, 6, 12, 30),
      new Date(2023, 6, 6, 13),
      new Date(2023, 6, 6, 13, 30),
      new Date(2023, 6, 6, 14),
      new Date(2023, 6, 6, 14, 30),
      new Date(2023, 6, 6, 15),
      new Date(2023, 6, 6, 15, 30),
      new Date(2023, 6, 6, 16),
      new Date(2023, 6, 6, 16, 30),
      new Date(2023, 6, 6, 17),
      new Date(2023, 6, 6, 17, 30),

      new Date(2023, 6, 7, 8),
      new Date(2023, 6, 7, 8, 30),
      new Date(2023, 6, 7, 9),
      new Date(2023, 6, 7, 9, 30),
      new Date(2023, 6, 7, 10),
      new Date(2023, 6, 7, 10, 30),
      new Date(2023, 6, 7, 11),
      new Date(2023, 6, 7, 11, 30),
      new Date(2023, 6, 7, 12),
      new Date(2023, 6, 7, 12, 30),
      new Date(2023, 6, 7, 13),
      new Date(2023, 6, 7, 13, 30),
      new Date(2023, 6, 7, 14),
      new Date(2023, 6, 7, 14, 30),
      new Date(2023, 6, 7, 15),
      new Date(2023, 6, 7, 15, 30),
      new Date(2023, 6, 7, 16),
      new Date(2023, 6, 7, 16, 30),
      new Date(2023, 6, 7, 17),
      new Date(2023, 6, 7, 17, 30),

      new Date(2023, 6, 8, 8),
      new Date(2023, 6, 8, 8, 30),
      new Date(2023, 6, 8, 9),
      new Date(2023, 6, 8, 9, 30),
      new Date(2023, 6, 8, 10),
      new Date(2023, 6, 8, 10, 30),
      new Date(2023, 6, 8, 11),
      new Date(2023, 6, 8, 11, 30),
      new Date(2023, 6, 8, 12),
      new Date(2023, 6, 8, 12, 30),
      new Date(2023, 6, 8, 13),
      new Date(2023, 6, 8, 13, 30),
      new Date(2023, 6, 8, 14),
      new Date(2023, 6, 8, 14, 30),
      new Date(2023, 6, 8, 15),
      new Date(2023, 6, 8, 15, 30),
      new Date(2023, 6, 8, 16),
      new Date(2023, 6, 8, 16, 30),
      new Date(2023, 6, 8, 17),
      new Date(2023, 6, 8, 17, 30),

      new Date(2023, 6, 9, 8),
      new Date(2023, 6, 9, 8, 30),
      new Date(2023, 6, 9, 9),
      new Date(2023, 6, 9, 9, 30),
      new Date(2023, 6, 9, 10),
      new Date(2023, 6, 9, 10, 30),
      new Date(2023, 6, 9, 11),
      new Date(2023, 6, 9, 11, 30),
      new Date(2023, 6, 9, 12),
      new Date(2023, 6, 9, 12, 30),
      new Date(2023, 6, 9, 13),
      new Date(2023, 6, 9, 13, 30),
      new Date(2023, 6, 9, 14),
      new Date(2023, 6, 9, 14, 30),
      new Date(2023, 6, 9, 15),
      new Date(2023, 6, 9, 15, 30),
      new Date(2023, 6, 9, 16),
      new Date(2023, 6, 9, 16, 30),
      new Date(2023, 6, 9, 17),
      new Date(2023, 6, 9, 17, 30),

      new Date(2023, 6, 10, 8),
      new Date(2023, 6, 10, 8, 30),
      new Date(2023, 6, 10, 9),
      new Date(2023, 6, 10, 9, 30),
      new Date(2023, 6, 10, 10),
      new Date(2023, 6, 10, 10, 30),
      new Date(2023, 6, 10, 11),
      new Date(2023, 6, 10, 11, 30),
      new Date(2023, 6, 10, 12),
      new Date(2023, 6, 10, 12, 30),
      new Date(2023, 6, 10, 13),
      new Date(2023, 6, 10, 13, 30),
      new Date(2023, 6, 10, 14),
      new Date(2023, 6, 10, 14, 30),
      new Date(2023, 6, 10, 15),
      new Date(2023, 6, 10, 15, 30),
      new Date(2023, 6, 10, 16),
      new Date(2023, 6, 10, 16, 30),
      new Date(2023, 6, 10, 17),
      new Date(2023, 6, 10, 17, 30)
    ]

    return new Calendar(dates)
  }
}
