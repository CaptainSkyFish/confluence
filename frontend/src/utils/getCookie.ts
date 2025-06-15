const getCookie = (name: string): string | undefined => {
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`));
  const cookieItem = match?.split("=")[1];
  return cookieItem;
};

export default getCookie;
