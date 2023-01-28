export const symbols = [
  {
    label: "Total",
    value: "total",
  },
  {
    label: "Remainder",
    value: "remainder",
  },
]

export const getSymbol = value => {
  if (!value) return ""

  return symbols?.find(symbol => value === symbol?.value)?.label || value
}
