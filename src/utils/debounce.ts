export default function (func: any, time: number, immediate = false) {
  let timer: number | null = null
  return function (this: any, ...args: any) {
    if (timer) clearTimeout(timer)

    if (immediate) {
      if (!timer) func.apply(this, args)
      timer = setTimeout(() => {
        timer = null
      }, time)
    } else {
      timer = setTimeout(() => {
        func.apply(this, args)
      }, time)
    }
  }
}
