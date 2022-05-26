export type GetterReturn<T> = { [K: string]: T }

/**
 * Creates a proxy that calls `cb` for every property accessed and returns its result.
 *
 * @param cb Called with the key of the property being accessed.
 */
export const Getter = <T>(cb: (key: string) => T): GetterReturn<T> =>
  new Proxy({}, { get: (_, key: string) => cb(key) })
