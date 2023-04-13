window.onload = function() { //Funcion que controla los tiempos minimos y maximos para las reservaciones
    const timeElapsed = Date.now();
    var d = new Date(timeElapsed);
    weekday = d.toLocaleString('default', { weekday: 'short'});
    day = d.toLocaleString('default', { day: '2-digit' });
    month = d.toLocaleString('default', { month: '2-digit' });
    year = d.toLocaleString('default', { year: 'numeric' });
    var ToDay = year + "-" + month + "-" + day;
    document.getElementById("Date").setAttribute("min", ToDay);
  }

function ReservationDate() { //Funcion que acomoda el tiempo de la reservacion al formato correcto
  var userDateEntry = document.getElementById("Date").value;
  var Year = userDateEntry.substring(0,4);
  var Month = userDateEntry.substring(5,7);
  var Day = userDateEntry.substring(8,10);
  var Date = Month + "/" + Day + "/" + Year;
  console.log(Date);
  document.getElementById("startDate").value = Date;
}