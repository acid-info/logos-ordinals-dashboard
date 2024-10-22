export function keys<O extends object>(obj: O): (keyof O)[] {
  return Object.keys(obj) as (keyof O)[]
}

export function arrayIncludesAnyElementFromOtherArray<T>(a: T[], b: T[]) {
  if (b && b.length === 0) {
    return true
  }

  return a.some((el) => b.includes(el))
}

export function numberWithCommas(x: number) {
  return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

// truncates a string to first 5 and last 5, appends an ellipsis in the middle
export function truncateString(str: string, length = 10) {
  if (!str) {
    return ''
  }
  if (str?.length <= length) {
    return str
  }

  return `${str.slice(0, 5)}...${str.slice(-5)}`
}
