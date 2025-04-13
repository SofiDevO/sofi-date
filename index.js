function formateFull(date, locale) {
  const gettingDate = new Date(date);
  if (locale === "es-ES") {
    const formatter = new Intl.DateTimeFormat(locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const parts = formatter.formatToParts(gettingDate);
    return parts
      .map((part) => {
        if (part.type === "month") {
          return part.value.charAt(0).toUpperCase() + part.value.slice(1);
        }
        return part.value;
      })
      .join("");
  } else {
    return new Intl.DateTimeFormat(locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(gettingDate);
  }
}

function formateShort(date, locale) {
  const formatDate = new Date(date);
  const day = formatDate.getDate();
  const monthAbbreviation = formatDate
    .toLocaleString(locale, { month: "long" })
    .slice(0, 3);
  const month = monthAbbreviation.charAt(0).toUpperCase() + monthAbbreviation.slice(1).toLowerCase();
  const year = formatDate.getFullYear();

  if (locale === "es-ES") {
    return `${day}/${month}/${year}`;
  } else if (locale === "en-US") {
    return `${month}/${day}/${year}`;
  }
}

module.exports = { formateFull, formateShort };
