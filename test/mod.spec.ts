import { applyFluentCapture, FluentCapture, FluentCaptureSymbol, Getter } from '../src/proxy-toolkit'

describe('Getter(cb)', () => {
  it('creates a getter', () => {
    const results: string[] = []
    const get = Getter(key => 'hello' + key)
    results.push(get.foo)
    results.push(get.bar)
    expect(results).toEqual(['hellofoo', 'hellobar'])
  })
})

describe('FluentCapture(cb)', () => {
  it('creates a fluent capture', () => {
    const fluent = FluentCapture()
    expect(fluent[FluentCaptureSymbol]).toBe(true)

    fluent.some.thing(10).is.ok()
    expect(fluent._results).toMatchSnapshot()

    const other = FluentCapture()
    applyFluentCapture(fluent._results, other)
    expect(other._results).toEqual(fluent._results)
  })
})
