export default function formatDate(dateStr: string): string {
  const date = new Date(dateStr);

  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "2-digit",
    year: "numeric",
  };
  let formattedDate = date.toLocaleDateString("en-US", options);

  // Format as "July, 23 2022"
  formattedDate = formattedDate.replace(
    /(\w+)\s(\d{2}),\s(\d{4})/,
    "$1 $2, $3"
  );

  return formattedDate;
}
