 function formatedDate(date, locale = "es-ES"){
    const fecha = new Date(date);
    return new Intl.DateTimeFormat(locale, {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(fecha);
}

 function formattedDateShort(date) {
  const formatDate = new Date(date);
  return `${formatDate.getDate()} / ${formatDate.toLocaleString('default', { month: 'short' })} / ${formatDate.getFullYear()}`;
}

module.exports = {
    formatedDate,
    formattedDateShort
}