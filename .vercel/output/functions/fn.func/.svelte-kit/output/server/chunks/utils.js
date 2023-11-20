function formatDate(date, dateStyle = "medium", locales = "en") {
  if (!date) {
    return null;
  }
  const dateToFormat = new Date(date.replaceAll("-", "/"));
  const dateFormatter = new Intl.DateTimeFormat(locales, { dateStyle });
  return dateFormatter.format(dateToFormat);
}
export {
  formatDate as f
};
