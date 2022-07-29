export type GetterReturn<T> = { [K: string]: T }

/**
 * Creates a proxy that calls `cb` for every property accessed and returns its result.
 *
 * @param cb Called with the key of the property being accessed.
 */
export const Getter = <T>(cb: (key: string) => T): GetterReturn<T> =>
  new Proxy({}, { get: (_, key: string) => cb(key) })

export type FluentCapture = (readonly ['get', string | symbol] | readonly ['apply', any[]])[]

export const FluentCaptureSymbol = Symbol()

export const FluentCapture = () => {
  const fn = () => {}
  const results: FluentCapture = []
  const proxy: any = new Proxy(fn, {
    get: (_, key, receiver) => {
      if (key === FluentCaptureSymbol) return true
      if (key === '_results') return results
      results.push(['get', key] as const)
      return receiver
    },
    apply: (_, __, args: any[]) => {
      results.push(['apply', args] as const)
      return proxy
    },
  })
  return proxy
}

export const applyFluentCapture = (capture: FluentCapture, target: any) => {
  let res = target
  for (const [op, args] of capture) {
    if (op === 'get') {
      res = res[args]
    } else if (op === 'apply') {
      res = res(...args)
    }
  }
  return res
}
