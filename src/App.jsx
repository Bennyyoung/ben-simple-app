import { useEffect, useState } from "react"
import { Content, FilterButtons, Search } from "./components"

const INFO_QUERY = `
query AllPersons {
  person {
    id
    date
    name
    country
    organization
    image
  }
}
`

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9002/graphql", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: INFO_QUERY })
    })
      .then(res => res.json())
      .then(data => setData(data.data.person))
  }, [])

  const handleSearch = (e) => {
    setQuery(e.target.value)
  }

  const handleAllFilter = (e) => {
    setQuery(e.target.value)
  }

  return (
    <div className="container">
      <Search handleSearch={handleSearch} />
      <FilterButtons handleAllFilter={handleAllFilter} setQuery={setQuery} />
      <Content data={data} query={query} />
    </div>
  );
}

export default App;