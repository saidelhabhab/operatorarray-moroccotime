
const  DateTimeInArabicMorocco = ()=> {
    const options = {
      weekday: "long",   
      year: "numeric",
      month: "long",     
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZone: "Africa/Casablanca" // Set the time zone to Morocco (Africa/Casablanca)
    };
  
    const currentDateTime = new Date();
    const arabicDateTime = currentDateTime.toLocaleString("ar-MA", options);
  
    //console.log(arabicDateTime);
  }

  export default DateTimeInArabicMorocco;
  