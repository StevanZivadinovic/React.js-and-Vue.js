export function getTimePassedSinceCreation(creationTime) {
  const currentTime = new Date();

  const timeDifference = currentTime.getTime() - creationTime.getTime();
  const secondsPassed = Math.floor(timeDifference / 1000);

  if (secondsPassed < 10) {
    return " just now";
  } else if (secondsPassed < 60) {
    return secondsPassed + " seconds ago";
  } else if (secondsPassed < 3600) {
    const minutesPassed = Math.floor(secondsPassed / 60);
    return (
      minutesPassed + (minutesPassed === 1 ? " minute ago" : " minutes ago")
    );
  } else if (secondsPassed < 86400) {
    const hoursPassed = Math.floor(secondsPassed / 3600);
    return hoursPassed + (hoursPassed === 1 ? " hour ago" : " hours ago");
  } else {
    const daysPassed = Math.floor(secondsPassed / 86400);
    return daysPassed + (daysPassed === 1 ? " day ago" : " days ago");
  }
}

export function setCookie(cname:string, cvalue:string | number, exdays:number) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
