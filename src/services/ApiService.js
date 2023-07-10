const BASE_URL = 'http://localhost:5000'

class ApiService {
  getProducts() {
    return fetch(`${BASE_URL}/products`).then((response) => response.json())
  }

  getSchedules() {
    return fetch(`${BASE_URL}/schedules`)
    .then((response) => response.json())
  }

  postSchedule(data) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data
    }

    const request = fetch(`${BASE_URL}/schedule`, options)
    return request
  }
}

const service = new ApiService()

export default service