<h1>
proxy-toolkit <a href="https://npmjs.org/package/proxy-toolkit"><img src="https://img.shields.io/badge/npm-v0.1.0-F00.svg?colorA=000"/></a> <a href="src"><img src="https://img.shields.io/badge/loc-34-FFF.svg?colorA=000"/></a> <a href="https://cdn.jsdelivr.net/npm/proxy-toolkit@0.1.0/dist/proxy-toolkit.min.js"><img src="https://img.shields.io/badge/brotli-274b-333.svg?colorA=000"/></a> <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-F0B.svg?colorA=000"/></a>
</h1>

<p></p>

Proxy toolkit.

<h4>
<table><tr><td title="Triple click to select and copy paste">
<code>npm i proxy-toolkit </code>
</td><td title="Triple click to select and copy paste">
<code>pnpm add proxy-toolkit </code>
</td><td title="Triple click to select and copy paste">
<code>yarn add proxy-toolkit</code>
</td></tr></table>
</h4>

## Examples

<details id="example$node" title="node" open><summary><span><a href="#example$node">#</a></span>  <code><strong>node</strong></code></summary>  <ul>    <details id="source$node" title="node source code" open><summary><span><a href="#source$node">#</a></span>  <code><strong>view source</strong></code></summary>  <a href="example/node.ts">example/node.ts</a>  <p>

```ts
import { add } from 'proxy-toolkit'

console.log(add(1, 2))
```

</p>
</details></ul></details><details id="example$web" title="web" open><summary><span><a href="#example$web">#</a></span>  <code><strong>web</strong></code></summary>  <ul>    <details id="source$web" title="web source code" open><summary><span><a href="#source$web">#</a></span>  <code><strong>view source</strong></code></summary>  <a href="example/web.ts">example/web.ts</a>  <p>

```ts
import { add } from 'proxy-toolkit'

const main = document.querySelector('main')!

main.innerHTML = `<h1>1 + 2 = ${add(1, 2)}</h1>`
```

</p>
</details></ul></details>

## API

<p>  <details id="FluentCapture$15" title="TypeAlias" ><summary><span><a href="#FluentCapture$15">#</a></span>  <code><strong>FluentCapture</strong></code>    </summary>  <a href="src/proxy-toolkit.ts#L11">src/proxy-toolkit.ts#L11</a>  <ul><p>readonly     [  <code>"get"</code>, string | symbol  ] | readonly     [  <code>"apply"</code>, any  []  ]  []</p>        </ul></details><details id="GetterReturn$1" title="TypeAlias" ><summary><span><a href="#GetterReturn$1">#</a></span>  <code><strong>GetterReturn</strong></code>    </summary>  <a href="src/proxy-toolkit.ts#L1">src/proxy-toolkit.ts#L1</a>  <ul><p>{}</p>        </ul></details><details id="FluentCaptureSymbol$16" title="Variable" ><summary><span><a href="#FluentCaptureSymbol$16">#</a></span>  <code><strong>FluentCaptureSymbol</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>...</code></span>  </summary>  <a href="src/proxy-toolkit.ts#L13">src/proxy-toolkit.ts#L13</a>  <ul><p>typeof   <a href="#FluentCaptureSymbol$16">FluentCaptureSymbol</a></p>        </ul></details><details id="FluentCapture$13" title="Function" ><summary><span><a href="#FluentCapture$13">#</a></span>  <code><strong>FluentCapture</strong></code><em>()</em>    </summary>  <a href="src/proxy-toolkit.ts#L15">src/proxy-toolkit.ts#L15</a>  <ul>    <p>      <p><strong>FluentCapture</strong><em>()</em>  &nbsp;=&gt;  <ul>any</ul></p></p>    </ul></details><details id="Getter$6" title="Function" ><summary><span><a href="#Getter$6">#</a></span>  <code><strong>Getter</strong></code><em>(cb)</em>     &ndash; Creates a proxy that calls <code>cb</code> for every property accessed and returns its result.</summary>  <a href="src/proxy-toolkit.ts#L8">src/proxy-toolkit.ts#L8</a>  <ul>    <p>    <details id="cb$9" title="Function" ><summary><span><a href="#cb$9">#</a></span>  <code><strong>cb</strong></code><em>(key)</em>    </summary>    <ul>    <p>    <details id="key$12" title="Parameter" ><summary><span><a href="#key$12">#</a></span>  <code><strong>key</strong></code>    </summary>    <ul><p>string</p>        </ul></details>  <p><strong>cb</strong><em>(key)</em>  &nbsp;=&gt;  <ul><a href="#T$8">T</a></ul></p></p>    </ul></details>  <p><strong>Getter</strong>&lt;<span>T</span>&gt;<em>(cb)</em>  &nbsp;=&gt;  <ul><a href="#GetterReturn$1">GetterReturn</a>&lt;<a href="#T$8">T</a>&gt;</ul></p></p>    </ul></details><details id="applyFluentCapture$17" title="Function" ><summary><span><a href="#applyFluentCapture$17">#</a></span>  <code><strong>applyFluentCapture</strong></code><em>(capture, target)</em>    </summary>  <a href="src/proxy-toolkit.ts#L33">src/proxy-toolkit.ts#L33</a>  <ul>    <p>    <details id="capture$19" title="Parameter" ><summary><span><a href="#capture$19">#</a></span>  <code><strong>capture</strong></code>    </summary>    <ul><p><a href="#FluentCapture$13">FluentCapture</a></p>        </ul></details><details id="target$20" title="Parameter" ><summary><span><a href="#target$20">#</a></span>  <code><strong>target</strong></code>    </summary>    <ul><p>any</p>        </ul></details>  <p><strong>applyFluentCapture</strong><em>(capture, target)</em>  &nbsp;=&gt;  <ul>any</ul></p></p>    </ul></details></p>

## Contributing

[Fork](https://github.com/stagas/proxy-toolkit/fork) or [edit](https://github.dev/stagas/proxy-toolkit) and submit a PR.

All contributions are welcome!

## License

<a href="LICENSE">MIT</a> &copy; 2022 [stagas](https://github.com/stagas)
