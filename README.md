

<h1>
proxy-toolkit <a href="https://npmjs.org/package/proxy-toolkit"><img src="https://img.shields.io/badge/npm-v1.2.0-F00.svg?colorA=000"/></a> <a href="src"><img src="https://img.shields.io/badge/loc-51-FFF.svg?colorA=000"/></a> <a href="https://cdn.jsdelivr.net/npm/proxy-toolkit@1.2.0/dist/proxy-toolkit.min.js"><img src="https://img.shields.io/badge/brotli-334b-333.svg?colorA=000"/></a> <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-F0B.svg?colorA=000"/></a>
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

<p>  <details id="FluentCaptureHandler$21" title="Interface" ><summary><span><a href="#FluentCaptureHandler$21">#</a></span>  <code><strong>FluentCaptureHandler</strong></code>    </summary>  <a href=""></a>  <ul>        <p>  <details id="callMethod$22" title="Method" ><summary><span><a href="#callMethod$22">#</a></span>  <code><strong>callMethod</strong></code><em>(name, args, ops)</em>    </summary>  <a href=""></a>  <ul>    <p>    <details id="name$24" title="Parameter" ><summary><span><a href="#name$24">#</a></span>  <code><strong>name</strong></code>    </summary>    <ul><p>string</p>        </ul></details><details id="args$25" title="Parameter" ><summary><span><a href="#args$25">#</a></span>  <code><strong>args</strong></code>    </summary>    <ul><p>unknown  []</p>        </ul></details><details id="ops$26" title="Parameter" ><summary><span><a href="#ops$26">#</a></span>  <code><strong>ops</strong></code>    </summary>    <ul><p><a href="#FluentCapture$1">FluentCapture</a></p>        </ul></details>  <p><strong>callMethod</strong><em>(name, args, ops)</em>  &nbsp;=&gt;  <ul>unknown</ul></p></p>    </ul></details></p></ul></details><details id="FluentCapture$1" title="TypeAlias" ><summary><span><a href="#FluentCapture$1">#</a></span>  <code><strong>FluentCapture</strong></code>    </summary>  <a href=""></a>  <ul><p>readonly     [  <code>"get"</code>, string | symbol  ] | readonly     [  <code>"apply"</code>, any  []  ]  [] &amp; {<p>  <details id="origin$3" title="Property" ><summary><span><a href="#origin$3">#</a></span>  <code><strong>origin</strong></code>    </summary>  <a href=""></a>  <ul><p><span>Error</span></p>        </ul></details></p>}</p>        </ul></details><details id="GetterReturn$7" title="TypeAlias" ><summary><span><a href="#GetterReturn$7">#</a></span>  <code><strong>GetterReturn</strong></code>    </summary>  <a href=""></a>  <ul><p>{}</p>        </ul></details><details id="FluentCaptureSymbol$20" title="Variable" ><summary><span><a href="#FluentCaptureSymbol$20">#</a></span>  <code><strong>FluentCaptureSymbol</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>...</code></span>  </summary>  <a href=""></a>  <ul><p>typeof   <a href="#FluentCaptureSymbol$20">FluentCaptureSymbol</a></p>        </ul></details><details id="FluentCapture$4" title="Function" ><summary><span><a href="#FluentCapture$4">#</a></span>  <code><strong>FluentCapture</strong></code><em>(handler)</em>    </summary>  <a href=""></a>  <ul>    <p>    <details id="handler$6" title="Parameter" ><summary><span><a href="#handler$6">#</a></span>  <code><strong>handler</strong></code>    </summary>    <ul><p><a href="#FluentCaptureHandler$21">FluentCaptureHandler</a></p>        </ul></details>  <p><strong>FluentCapture</strong><em>(handler)</em>  &nbsp;=&gt;  <ul>any</ul></p></p>    </ul></details><details id="Getter$12" title="Function" ><summary><span><a href="#Getter$12">#</a></span>  <code><strong>Getter</strong></code><em>(cb, target)</em>    </summary>  <a href=""></a>  <ul>    <p>    <details id="cb$15" title="Function" ><summary><span><a href="#cb$15">#</a></span>  <code><strong>cb</strong></code><em>(key)</em>    </summary>    <ul>    <p>    <details id="key$18" title="Parameter" ><summary><span><a href="#key$18">#</a></span>  <code><strong>key</strong></code>    </summary>    <ul><p>string</p>        </ul></details>  <p><strong>cb</strong><em>(key)</em>  &nbsp;=&gt;  <ul><a href="#T$14">T</a></ul></p></p>    </ul></details><details id="target$19" title="Parameter" ><summary><span><a href="#target$19">#</a></span>  <code><strong>target</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>{}</code></span>  </summary>    <ul><p>any</p>        </ul></details>  <p><strong>Getter</strong>&lt;<span>T</span>&gt;<em>(cb, target)</em>  &nbsp;=&gt;  <ul><a href="#GetterReturn$7">GetterReturn</a>&lt;<a href="#T$14">T</a>&gt;</ul></p></p>    </ul></details><details id="applyFluentCapture$27" title="Function" ><summary><span><a href="#applyFluentCapture$27">#</a></span>  <code><strong>applyFluentCapture</strong></code><em>(capture, target)</em>    </summary>  <a href=""></a>  <ul>    <p>    <details id="capture$29" title="Parameter" ><summary><span><a href="#capture$29">#</a></span>  <code><strong>capture</strong></code>    </summary>    <ul><p><a href="#FluentCapture$1">FluentCapture</a></p>        </ul></details><details id="target$30" title="Parameter" ><summary><span><a href="#target$30">#</a></span>  <code><strong>target</strong></code>    </summary>    <ul><p>any</p>        </ul></details>  <p><strong>applyFluentCapture</strong><em>(capture, target)</em>  &nbsp;=&gt;  <ul>any</ul></p></p>    </ul></details></p>



## Contributing

[Fork](https://github.com/stagas/proxy-toolkit/fork) or [edit](https://github.dev/stagas/proxy-toolkit) and submit a PR.

All contributions are welcome!

## License

<a href="LICENSE">MIT</a> &copy; 2022 [stagas](https://github.com/stagas)
