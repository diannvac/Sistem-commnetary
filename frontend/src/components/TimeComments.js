import React, { useEffect, useState } from 'react'

const TimeComponent = (props) => {

  const [time, setTime] = useState("")

  useEffect(() => {
    let today = new Date();

    // console.log(props.date)

    let dateFire = new Date(props.date.toDate().toString());

    let diffMs = (today - dateFire); // segundos
    let diffDays = Math.floor(diffMs / 86400000); // días
    let diffHrs = Math.floor((diffMs % 86400000) / 3600000); // horas
    let diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutos


    // console.log(diffDays + " days, " + diffHrs + " hours, " + diffMins + " min diferencia");



    if (diffDays > 0) {
      setTime("Hace " + diffDays + " días")
    } else if ( (diffHrs > 0) ) {
      setTime("Hace " + diffHrs + " horas")
    } else if (diffMins <= 60) {
      setTime("Hace " + diffMins + " minutos")
    }

  }, [])

  return (
    <span className="badge text-bg-secondary">
      { time }
    </span>
  )
}

export default TimeComponent