import Header from "./Header"

function Main({ children }) {
  return (
    <main>
      <Header />
      {children}
    </main>
  )
}

export default Main
