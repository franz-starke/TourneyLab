
export function addMinutes(time, minutesAdd) {
  let [hours, minutes] = time.split(':').map(Number);
  if (minutesAdd > 500) {

    console.error("this much minutes should not be added");
  }
  minutes += minutesAdd;
  hours += (Math.floor(minutes / 60)) % 24;

  minutes = minutes % 60;

  return `${hours}:${minutes}`
}


