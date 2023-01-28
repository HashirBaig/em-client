const dev = {
  API_URL: "http://localhost:5000/api",
}
const prod = {
  API_URL: "https://vercel.app/api",
}

const config = process.env.NODE_ENV === "production" ? prod : dev

export default config
