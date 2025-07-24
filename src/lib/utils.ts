export const generatePageNumbers = (current: number, total: number) => {
  const pages: (number | string)[] = [];

  if (total <= 10) {
    for (let i = 1; i <= total; i++) pages.push(i);
  } else {
    if (current <= 6) {
      pages.push(...[1, 2, 3, 4, 5, 6, 7, '...', total]);
    } else if (current >= total - 5) {
      pages.push(...[1, '...', total - 6, total - 5, total - 4, total - 3, total - 2, total - 1, total]);
    } else {
      pages.push(
        1,
        '...',
        current - 2,
        current - 1,
        current,
        current + 1,
        current + 2,
        '...',
        total
      );
    }
  }

  return pages;
};