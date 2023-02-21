const fetchReservations = () => {
  return fetch("http://localhost:3001/api/v1/reservations")
    .then(res => {
      if (!res.ok) {
        throw new Error("Something went wrong retrieving information")
      } else {
        return res.json()
      }
    })
}

const postReservation = (res) => {
  return fetch("http://localhost:3001/api/v1/reservations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(res)
  })
    .then(res => {
      if (!res.ok) {
        throw new Error("Sorry, couldn't post")
      } else {
        return res.json();
      }
    })
}

export { fetchReservations, postReservation }