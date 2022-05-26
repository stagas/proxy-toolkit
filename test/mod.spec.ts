import { Getter } from '../src/mod'

describe('getter(cb)', () => {
  it('creates a getter', () => {
    const results: string[] = []
    const get = Getter(key => 'hello' + key)
    results.push(get.foo)
    results.push(get.bar)
    expect(results).toEqual(['foo', 'bar'])
  })
})
