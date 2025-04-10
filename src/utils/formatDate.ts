export const formatDate = (date: Date, locale: string = 'ru-RU'): string => {
  const formattedDate = new Intl.DateTimeFormat(locale, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(new Date(date));

  const utcOffset = -new Date(date).getTimezoneOffset() / 60;

  const formattedUtcOffset = `(UTC${utcOffset >= 0 ? '+' : ''}${utcOffset})`;

  return `${formattedDate} ${formattedUtcOffset}`;
};
