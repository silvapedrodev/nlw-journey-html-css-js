export default function Dates () {

  const formatter = (date) => {
    return {
     day: {
       numeric: dayjs(date).format('DD'),
       week: {
         short: dayjs(date).format('ddd'),
         long: dayjs(date).format('dddd'),
       }
     },
     month: dayjs(date).format('MMMM'),
     hours: dayjs(date).format('HH:mm')
   
    }
   }

  const createSelectionDays = () => {
    const days = [
      "2024-12-27",
      "2024-12-28",
      "2024-12-29",
      "2024-12-30",
      "2024-12-31",
    ]
  
    let selectionDays = ''
  
    for(let day of days) {
      const format = formatter(day)
      const formattedDay = `
      ${format.day.numeric} de
      ${format.month}
      `
      selectionDays += `
        <option value=${day}>${formattedDay}</option>
      `
    }
  
    document.querySelector('select[name="day"]').innerHTML = selectionDays
  }
  createSelectionDays()


  const createSelectionHours = () => {
    let hoursAvailable = ''
  
    for(let i = 6; i < 23; i++) {
      const hour = String(i).padStart(2, '0')
      hoursAvailable += `<option value="${hour}:00">${hour}:00</option>`
      hoursAvailable += `<option value="${hour}:30">${hour}:30</option>`
    }
  
    document.querySelector('select[name="hour"]').innerHTML = hoursAvailable
  }
  createSelectionHours()


  return {
    formatter,
    createSelectionDays,
    createSelectionHours
  }
 }
