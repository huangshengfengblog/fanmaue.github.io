import{_ as a,W as e,X as t,Z as p,a4 as n,a3 as i,a6 as l,a5 as u,C as c}from"./framework-6fb4b441.js";const o={},r=u(`<p>我们把 Vuepress 网站搭建好后，就可以把网站内容部署到网络上的静态空间了。在这里我选择的平台是 GitHub Pages 为我的网站进行托管，使用 GitHub Pages 的好处就不需要我多说了。</p><h2 id="自动部署的好处" tabindex="-1"><a class="header-anchor" href="#自动部署的好处" aria-hidden="true">#</a> 自动部署的好处</h2><p>如果我们的 Vuepress 项目不进行配置自动部署，那么我们每次写一篇文章，发布一篇文章的时候，就需要重新打包生成静态页。要知道 Vuepress 打包生成静态页的时候是比较花时间的，我刚开始搭建 Vuepress 项目的时候，网站上没几篇文章，打包的时候也需要花费一段时间。</p><p>在一个群里其中有一个群友，他有一个 Vuepress 项目，里面有 3100多 部法律法规的文章，包含 1600多 万字。根据他的描述，他打包花费了差不多一天的时间，大概是23个小时。</p><p>可见我们给 Vuepress 项目配置自动部署是多么的方便，它可以给我们省很多时间，一年换算下来是一个非常可观的一个数字。</p><h2 id="准备部署" tabindex="-1"><a class="header-anchor" href="#准备部署" aria-hidden="true">#</a> 准备部署</h2><p>在部署前要先了解一些基本的信息：</p><ul><li>1、默认情况下 Markdown 源文件是在你项目的 docs 目录里的；</li><li>2、网站找包生成的静态页文件会放在 .vuepress/dist 目录里；</li><li>3、Vuepress 推荐使用 pnpm 作为包管理器，当然也可以使用 npm 或 yarn ；</li><li>4、VuePress 作为项目依赖安装，并在 package.json 是配置了如下脚本： ；</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;fama:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build fanma&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在我的 package.json 文件里，我根据自己的情况对默认的配置进行了一点修改，我把默认的 &quot;docs:build&quot;: &quot;vuepress build docs&quot; 改成了 &quot;fama:build&quot;: &quot;vuepress build fanma&quot; ，需要打包的时候可以直接用 pnpm fama:build 命令就可以打包了。你也可以根据自己的实际情况进行修改，当然了也可以不需要修改，直接使用默认的就好了。</p><p>修改信息</p><ul><li><ul><li>4.1、可以把 &quot;docs:build&quot; 你想要的任何命令，这里随便你怎么改。</li></ul></li><li><ul><li>4.2、这里 &quot;vuepress build docs&quot; 后面的 docs 你的文档文件夹，你的文档文件夹也可能是 src 的。这里要根据你自己的实际情况来配置，不然配置错了后面的操作就运行不了了。</li></ul></li><li><p>5、在 GitHub Pages 上配置好仓库的相关设置，需要新建一个新分支用来存放静态页。</p></li></ul><h2 id="仓库配置" tabindex="-1"><a class="header-anchor" href="#仓库配置" aria-hidden="true">#</a> 仓库配置</h2><p>1、在 GitHub 新建一个仓库（已经建有仓库的可以省略这一步骤），建立仓库后会自动生成一个名为 main 的默认主分支。这个分支我们用来存放 Vuepress 项目的源码文件，包括我们的 md 文件也在里面。</p><p>2、在这个仓库里再新建一个分支，我建立了一个名为 fanma 的分支。分支名你可以随便取，这个没什么要求。</p><p>这样我们的 GitHub 仓库里就有了两个分支，其中 main 默认主分支用来存放项目的所有源码文件。另外一个分支 fanma 用下存放静态文件，也就是用来运行网站的文件。</p><p>这样我们的仓库配置就基本完成了。</p><h2 id="自动部署" tabindex="-1"><a class="header-anchor" href="#自动部署" aria-hidden="true">#</a> 自动部署</h2><p>在 GitHub Pages 托管平台上，我使用的是 GitHub Actions 来为 Vuepress 项目搭建的网站来进行自动部署。</p><p>1、在仓库默认主分支 main 根目录创建一个名为 .github 的文件夹，在 .github 文件夹里再创建一个 workflows 工作流文件夹，继续再这个 workflows 新建一个 fanma.yml 的文件。</p><p>最终的文件路径为 .github/workflows/fanma.yml 完整的路径。</p><p>其中 fanma.yml 的文件名是可以随便取的，只要 .yml 文件后缀不变就可以了。</p><p>2、工作流文件 fanma.yml 配置如下：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> fanma

<span class="token key atrule">on</span><span class="token punctuation">:</span> 
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>main<span class="token punctuation">]</span>
  <span class="token key atrule">workflow_dispatch</span><span class="token punctuation">:</span>

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">docs</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest

    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># “最近更新时间” 等 git 日志相关信息，需要拉取全部提交记录</span>
          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup pnpm
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> pnpm/action<span class="token punctuation">-</span>setup@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># 选择要使用的 pnpm 版本</span>
          <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token number">7</span>
          <span class="token comment"># 使用 pnpm 安装依赖</span>
          <span class="token key atrule">run_install</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup Node.js
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># 选择要使用的 node 版本</span>
          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token number">18</span>
          <span class="token comment"># 缓存 pnpm 依赖</span>
          <span class="token key atrule">cache</span><span class="token punctuation">:</span> pnpm

      <span class="token comment"># 运行构建脚本</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build VuePress site
        <span class="token key atrule">run</span><span class="token punctuation">:</span> pnpm build

      <span class="token comment"># 查看 workflow 的文档来获取更多信息</span>
      <span class="token comment"># @see https://github.com/crazy-max/ghaction-github-pages</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy to GitHub Pages
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> crazy<span class="token punctuation">-</span>max/ghaction<span class="token punctuation">-</span>github<span class="token punctuation">-</span>pages@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># 部署到 gh-pages 分支</span>
          <span class="token key atrule">target_branch</span><span class="token punctuation">:</span> fanma
          <span class="token comment"># 部署目录为 VuePress 的默认输出目录</span>
          <span class="token key atrule">build_dir</span><span class="token punctuation">:</span> fanma/.vuepress/dist
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token comment"># @see https://docs.github.com/cn/actions/reference/authentication-in-a-workflow#about-the-github_token-secret</span>
          <span class="token key atrule">GITHUB_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITHUB_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面就是我的工作流文件 fanma.yml 相关配置信息，现在已经是正常运行的，没有问题的。</p><p>下面这三个配置，需要根据你自己的实际情况进行配置：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">run</span><span class="token punctuation">:</span> pnpm build
<span class="token key atrule">target_branch</span><span class="token punctuation">:</span> fanma
<span class="token key atrule">build_dir</span><span class="token punctuation">:</span> fanma/.vuepress/dist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自动部署完成" tabindex="-1"><a class="header-anchor" href="#自动部署完成" aria-hidden="true">#</a> 自动部署完成</h2><p>到这里我们 Vuepress 项目的自动部署就完成了，只要我们在本地新建文件或修改文件，进行 Push 就可以触发自动部署。</p><p>现在我们就不需要在本地进行打包生成静态页了，只要把 md 文件写好，打包生成静态页就 Push 就交给 GitHub Actions 帮我们自动部署就可以了。</p><h2 id="错误解决方案" tabindex="-1"><a class="header-anchor" href="#错误解决方案" aria-hidden="true">#</a> 错误解决方案</h2><p>在配置自动部署中会遇到一些问题，下面的一些错误解决应该可以帮助得到你。</p>`,32);function d(k,m){const s=c("RouterLink");return e(),t("div",null,[r,p("p",null,[n("设置 GitHub Pages 工作流权限： "),i(s,{to:"/note/5.html"},{default:l(()=>[n("Error The process '/usr/bin/git' failed with exit code 128")]),_:1})])])}const b=a(o,[["render",d],["__file","1.html.vue"]]);export{b as default};
