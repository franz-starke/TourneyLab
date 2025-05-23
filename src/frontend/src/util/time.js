export function addMinutes(time, minutesAdd) {
  let [hours, minutes] = time.split(':').map(Number);

  if (minutesAdd > 500) {
    console.error("This many minutes should not be added");
    return null;
  }

  let totalMinutes = hours * 60 + minutes + minutesAdd;

  let newHours = Math.floor(totalMinutes / 60) % 24;
  let newMinutes = totalMinutes % 60;

  // Pad with leading zeros
  let formattedHours = String(newHours).padStart(2, '0');
  let formattedMinutes = String(newMinutes).padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}`;
}


