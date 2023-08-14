import { useEffect, useState } from 'react'

const url = '/data.json'
function App() {
  const [timetable, setTimetable] = useState([])
  const [isFlipped, setIsFlipped] = useState(false)
  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(url)
        const result = await response.json()
        setTimetable(result)
      } catch (error) {
        console.error(error)
      }
    }
    getData()
  }, [])

  useEffect(() => {
    const flipInterval = setInterval(() => {
      setIsFlipped((prevIsFlipped) => !prevIsFlipped)
    }, 3000)

    return () => {
      clearInterval(flipInterval)
    }
  }, [])

  return (
    <>
      <div className='title'>
        <h1>Tablica odlotów Port Lotniczy Szczecin </h1>
      </div>
      <table>
        <thead>
          <tr>
            <th>Czas</th>
            <th>Nr Lotu</th>
            <th>Kierunek</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {timetable.map((el) => {
            return (
              <tr key={el.id}>
                <td>
                  🛫
                  {el.time.split('').map((element, index) => {
                    return (
                      <div
                        className={isFlipped ? 'flip' : 'lest'}
                        key={index}
                      >
                        {element}
                      </div>
                    )
                  })}
                </td>
                <td>
                  {el.flight.split('').map((element, index) => {
                    return (
                      <div
                        className={isFlipped ? 'flip' : 'lest'}
                        key={index}
                      >
                        {element}
                      </div>
                    )
                  })}
                </td>
                <td>
                  {el.direction.split('').map((element, index) => {
                    return (
                      <div
                        className={isFlipped ? 'flip' : 'lest'}
                        key={index}
                      >
                        {element}
                      </div>
                    )
                  })}
                </td>
                <td>
                  {el.status.split('').map((element, index) => {
                    return (
                      <div
                        className={isFlipped ? 'flip' : 'lest'}
                        key={index}
                      >
                        {element}
                      </div>
                    )
                  })}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default App
