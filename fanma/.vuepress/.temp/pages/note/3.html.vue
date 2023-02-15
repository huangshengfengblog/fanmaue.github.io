<template><div><p>使用 VuePress Theme Hope 主题的时候，我发现其默认的 代码块样式 配色太浅。一开始我就想把它换成更深一点的样式，可是一直都找到设置的方法。直到今天我才找到如何设置，下面就把我找到的方法分享给大家。</p>
<h2 id="可用样式" tabindex="-1"><a class="header-anchor" href="#可用样式" aria-hidden="true">#</a> 可用样式</h2>
<p>在修改模式前，先给大家列出 VuePress Theme Hope 提供给我们可修改的一些样式信息。下面就是一些可以使用的样式，可根据自己的喜好选择自己想要的样式。</p>
<div class="hint-container tip">
<p class="hint-container-title">浅色样式</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code>ateliersulphurpool-light
coldark-cold
coy
duotone-light
ghcolors
gruvbox-light
material-light
one-light
vs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<div class="hint-container tip">
<p class="hint-container-title">深色样式</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code>atom-dark
cb
coldark-dark
dark
dracula
duotone-dark
duotone-earth
duotone-forest
duotone-sea
duotone-space
gruvbox-dark
holi
hopscotch
lucario
material-dark
material-oceanic
night-owl
nord
one-dark
pojoaque
shades-of-purple
solarized-dark-atom
tomorrow
vsc-dark-plus
xonokai
z-touch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h2 id="更改样式" tabindex="-1"><a class="header-anchor" href="#更改样式" aria-hidden="true">#</a> 更改样式</h2>
<p>找到并打开 .vuepress/styles/config.scss 样式配置文件，这是 VuePress Theme Hope 提供给我们可以独立设置一些主题样式的文件，想要修改主题的其他样式也是可以直接修改这个文件的。</p>
<p>在 config.scss 添加下面的样式代码，在这里添加的样式代码会覆盖掉主题里所使用的样式。</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code>$<span class="token property">code-light-theme</span><span class="token punctuation">:</span> one-dark<span class="token punctuation">;</span>
$<span class="token property">code-dark-theme</span><span class="token punctuation">:</span> one-dark<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>我比较喜欢颜色深一点的 代码块 样式，所以我就选择了 one-dark 作为代码块所显示的样式。其中 $code-light-theme 为日间模式下的样式，另外 $code-dark-theme 为夜间模式的样式。我在两个模式下使用了同一个样式，当然你也可能根据自己的喜好可以分别选择不同的 代码块 样式。</p>
</div></template>


