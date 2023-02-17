<template><div><p>我们把 Git 安装好后，还要生成SSH密钥和公钥才可以正常使用。下面就是 Git生成SSH密钥和公钥 的一些详细步骤，以及在 Github 上的相关配置方法。</p>
<h2 id="_1、git初步配置" tabindex="-1"><a class="header-anchor" href="#_1、git初步配置" aria-hidden="true">#</a> 1、Git初步配置</h2>
<p>1.1、第一步要做的就是打开 Git 窗口程序，你可以选择一个空文件夹，或者新建一个文件夹。在这个文件夹空白的地方点击右键，然后选择并点击 Git Bash Here 就可以打开 Git 窗口程序了，注意不要点错哦。</p>
<p>1.2、在 Git 窗口输入你的用户名和邮箱。</p>
<div class="language-git line-numbers-mode" data-ext="git"><pre v-pre class="language-git"><code>git config --global user.name fanmaue
git config --global user.email fanmaeu@outlook.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、生成密钥公钥" tabindex="-1"><a class="header-anchor" href="#_2、生成密钥公钥" aria-hidden="true">#</a> 2、生成密钥公钥</h2>
<p>2.1、输入 ssh-keygen -t rsa -C <a href="mailto:fanmaeu@outlook.com">fanmaeu@outlook.com</a> 生成 SSH 密钥和公钥。</p>
<div class="language-git line-numbers-mode" data-ext="git"><pre v-pre class="language-git"><code>ssh-keygen -t rsa -C fanmaeu@outlook.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-git line-numbers-mode" data-ext="git"><pre v-pre class="language-git"><code>Generating public/private rsa key pair.
Enter file in which to save the key (/c/Users/FanMa/.ssh/id_rsa):
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /c/Users/FanMa/.ssh/id_rsa
Your public key has been saved in /c/Users/FanMa/.ssh/id_rsa.pub
The key fingerprint is:
SHA256:+9AxMoNEAE6U3l0BNR3cNj9qldnlJPz3UtmrSn4e28M fanmaeu@outlook.com
The key's randomart image is:
<span class="token inserted">+---[RSA 3072]----+</span>
| .+o..oo++.o .   |
| o.  .  ..o + o o|
| ... ...   . o O+|
|  . ....      *.B|
|      . S o  o o+|
|         * oo ...|
|        o .o .o. |
|         oo  o+E |
|          .o+o ..|
<span class="token inserted">+----[SHA256]-----+</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 Git生成SSH密钥和公钥 的过程中出现一些提示，你一直按回车键就可以了，最后出现上面的画面就代表Git的SSH密钥和公钥都已经生成好了。</p>
<h2 id="_3、查看密钥公钥" tabindex="-1"><a class="header-anchor" href="#_3、查看密钥公钥" aria-hidden="true">#</a> 3、查看密钥公钥</h2>
<p>3.1、输入 Git 命令 cat ~/.ssh/id_rsa.pub 并按回车键就可以直接查看公钥了。</p>
<div class="language-git line-numbers-mode" data-ext="git"><pre v-pre class="language-git"><code>cat ~/.ssh/id_rsa.pub
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-git line-numbers-mode" data-ext="git"><pre v-pre class="language-git"><code>ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDCQJ9GaIrhfZWZ6Stt6y9Z5Du1vT7CkFZiXB6hWTQbxZjlehfrfksKDB6szyjPJQNgQG80hyoBoRCdhkSYtmgT7AmbKE0T8CL34e91rDGraNIb4um5FlXnH5l7fXBQz6+qYrYnP49hXRjsE4og9ltUmxCwpY6HQc1e11Tm+pQIZM+dRCNAT4XTUFDmAViT941OeF+1QICOHflvZ+l9fDRu0VzHZE2iALS8bMikgk7Tt8axGHBO/5bqe/DNDgbFg1cuMmg6kXamAI4I8wYM/EqoqbBF3ZYS92V9lOxdxpXtHQVsFH89kI9RIuzzZYVDgB8lmZ5LuuPqmLcHd8Yf5hii8vrII7o2kzis703OQhA+RwM5oAAGgnNmYEOcAON2OOj2VS9/L00Oh53gig8oq1X/hqVTcimbednplBNhB3bGn4gaua5fWwd/W6WrgrjQQma8ocUvHixEW7YfZukzYSywRwTU29l4u3OMmHbhs/a5TVJ1K2135ixxVT9Kx1C9xJU= helle@fanma.eu.org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3.2、输入 Git 命令 cat ~/.ssh/id_rsa 并按回车键就可以直接查看密钥了。</p>
<div class="language-git line-numbers-mode" data-ext="git"><pre v-pre class="language-git"><code>cat ~/.ssh/id_rsa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-git line-numbers-mode" data-ext="git"><pre v-pre class="language-git"><code><span class="token deleted">-----BEGIN OPENSSH PRIVATE KEY-----</span>
b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAABlwAAAAdzc2gtcn
NhAAAAAwEAAQAAAYEAwkCfRmiK4X2VmekrbesvWeQ7tb0+wpBWYlweoVk0G8WY5XoX635L
CgwerM8ozyUDYEBvNIcqAaEQnYZEmLZoE+wJmyhNE/Ai9+Hvdawxq2jSG+LpuRZV5x+Ze3
1wUM+vqmK2Jz+PYV0Y7BOKIPZbVJsQsKWOh0HNXtdU5vqUCGTPnUQjQE+F01BQ5gFYk/eN
TnhftUCAjh35b2fpfXw0btFcx2RNogC0vGzIpIJO07fGsRhwTv+W6nvwzQ4GxYNXLjJoOp
PZ5mcJTaBN2trJAayEbLkSY+9iUuoqjqJbxqpiPlIshYIv+Inw0n+PxJBz2F5BB/kHWnM7
e+HdXV3kkR6HjSVmmiBA8quvSUBgrPQE0TzOnFritCuKUpLS3Stfcrcgc+35nXG35aWjvn
I815VZpGPgVjD69mmJjFhw3OxHQBepE6qIHFp/NjaEwDngiVh2LZztF6pw+u1cNJ47b9qM
F1SJC5BHh7XOB5b/o+h8Rw3R8RlLA8XwAAAMEAzWihVU2xF59x8Zme2Frah/wlHQmGFyJn
0cW1kD+DEZt11eG11FUO+rHf2V4Z/cT0UcxbGEX0ODyJncYlAhN0zPtuW1oFenspcVh//x
EAq/jiTW2MmxyR/m4LVjLnER52SJeTYM6BT7QsPW2POHfzIK6VIGy1l5NyM6owzTnNzPym
8iOCz3CYszsxth2rWIBaiPifxqLd3K9eN0Fgbn+H36+L2/k+Zn3RD7/yTFaQFivGnULmQV
IABfDaO182tCOLAAAAE2Zhbm1hZXVAb3V0bG9vay5jb20BAgMEBQYH
<span class="token deleted">-----END OPENSSH PRIVATE KEY-----</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.3、查看SSH密钥和公钥方法二</p>
<p>如果你是 Windows 系统的用户，直接可以进入 C盘 的 C:\Users\FanMa.ssh 目录下（FanMa为你的系统用户名称）。</p>
<p>在这个目录有两个文件</p>
<div class="language-FanMa line-numbers-mode" data-ext="FanMa"><pre v-pre class="language-FanMa"><code>id_rsa
id_rsa.pub
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>其中 id_rsa 是密钥，另外 id_rsa.pub 就是密钥，你可以使用任何编辑器来打开并查看它们。</p>
<h2 id="_4、github-ssh-key-设置" tabindex="-1"><a class="header-anchor" href="#_4、github-ssh-key-设置" aria-hidden="true">#</a> 4、Github SSH key 设置</h2>
<p>4.1、打开 Github 官网并登录上去，点击你的 头像 然后选择下面的 settings 链接。找到左边栏的 SSH and GPG keys 并点击它。然后你就可以看到有 SSH keys 的相关信息，这时候我个点击 SSH keys 右边的 New SSH key 按钮。</p>
<p>4.2、在 Title 输入框里你可以根据自己的喜好取个名称，在 Key 下面的大输入框里填写刚才我们生成的公钥。</p>
<p>注意是填写公钥，不是密钥！</p>
<p>就是填写入以 ssh-rsa  开头，邮箱结尾的就是公钥。</p>
<h2 id="_5、配置完成" tabindex="-1"><a class="header-anchor" href="#_5、配置完成" aria-hidden="true">#</a> 5、配置完成</h2>
<p>验证 SSH Keys 是否连接成功。</p>
<div class="language-git line-numbers-mode" data-ext="git"><pre v-pre class="language-git"><code>ssh -T helle@fanma.eu.org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其实这一步做与不做都可以，反正我从来都没有连接成功过，还不是照样能正常使用。具体是什么原因，这个我也不太清楚，只要能够正常使用就行了，就没去管那么多了。</p>
</div></template>


