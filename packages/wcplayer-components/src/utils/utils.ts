export function format(first?: string, middle?: string, last?: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

export function throttle (fn, threshold = 250, scope?) {
  let lastTime = 0
  let deferTimer: ReturnType<typeof setTimeout>
  return function (...args) {
    const context = scope || this
    const now = Date.now()
    if (now - lastTime > threshold) {
      fn.apply(this, args)
      lastTime = now
    } else {
      clearTimeout(deferTimer)
      deferTimer = setTimeout(() => {
        lastTime = now
        fn.apply(context, args)
      }, threshold)
    }
  }
}

export const requestFullscreen = async (target: HTMLElement) => {
  await target.requestFullscreen()
}

export const exitFullscreen = async () => {
  await document.exitFullscreen()
}

export const isFullscreen = (): boolean => {
  return !!document.fullscreenElement
}