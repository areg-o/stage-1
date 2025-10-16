import { use, useEffect } from "react"
import usersAPI from "./api/users"
import { useFetch } from "./hooks/useFetch"

function App() {

  let {data} = useFetch({
    queryFn: usersAPI.getUsers
  })

  return (
    <>

      {data && 
          data.map((user) => (<div>{JSON.stringify(user.name)}</div>))
        }

    </>
  )
}

export default App
