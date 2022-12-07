export type GetterReturn<T> = { [K: string]: T }

/**
 * Creates a proxy that calls `cb` for every property accessed and returns its result.
 *
 * @param cb Called with the key of the property being accessed.
 */
export const Getter = <T>(cb: (key: string) => T, target: any = {}): GetterReturn<T> =>
  new Proxy(target, { get: (_, key: string) => cb(key) })

export type FluentCapture = (readonly ['get', string | symbol] | readonly ['apply', any[]])[] & { origin: Error }

export const FluentCaptureSymbol = Symbol()

export interface FluentCaptureHandler {
  callMethod(name: string, args: unknown[], ops: FluentCapture): unknown
}

export function FluentCapture(handler?: FluentCaptureHandler) {
  const fn = () => { }
  const results: FluentCapture = Object.assign([], { origin: new Error() })
  const proxy: any = new Proxy(fn, {
    get: (_, key, receiver) => {
      if (key === FluentCaptureSymbol)
        return true
      if (key === '_results')
        return results
      if (key === 'ops') {
        return results
      }
      results.push(['get', key] as const)
      return receiver
    },
    apply: (_, __, args: any[]) => {
      const op = ['apply', args] as const
      results.push(op)

      // if passed a callMethod interceptor and it returns
      // something, return that and not the proxy instead.
      const result = handler?.callMethod(
        results.at(-2)![1] as string,
        args,
        results
      )

      if (result != null) {
        return result
      }

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
