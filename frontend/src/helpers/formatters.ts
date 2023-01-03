export function formatDate(dateString: string) {
  const date = new Date(dateString);
  date.setHours(0, 0, 0, 0);
  return [
    date.getDate().toLocaleString().padStart(2, "0"),
    (date.getMonth() + 1).toLocaleString().padStart(2, "0"),
    date.getFullYear(),
  ].join("/");
}

export function formatValue(totalValue: number) {
  return new Number(totalValue).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
}
