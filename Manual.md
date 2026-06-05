# 项目主页使用手册（Manual）

本手册说明如何把这个学术项目网页模板，维护成你的论文
**《Enabling Robust Cloth Manipulation via Inference-Time Simulator-in-the-Loop Refinement》(CoRL 2026)**
的展示 / 宣传主页。

> 重要：网页的大部分内容**我已经替你改好了**（见 [§3 我已经替你改好了什么](#3-我已经替你改好了什么)）。
> 你现在只需要：①填几个链接占位符；②（评审期可选）切换匿名/实名；③需要时替换图片视频。
> 本手册既是「现状说明」，也是「日后自己改」的参考书。

---

## 目录

1. [这个网页是什么 / 技术栈](#1-这个网页是什么--技术栈)
2. [目录结构总览](#2-目录结构总览)
3. [我已经替你改好了什么](#3-我已经替你改好了什么)
4. [本地预览（必看）](#4-本地预览必看)
5. [⭐ 必须你来填的占位符（TODO 清单）](#5--必须你来填的占位符todo-清单)
6. [⭐ 公开实名版 / 匿名版 一键切换](#6--公开实名版--匿名版-一键切换)
7. [逐区块修改指南](#7-逐区块修改指南)
8. [素材整理：图片与视频](#8-素材整理图片与视频)
9. [NeRF 专属区块的两种处理（改造 / 删除）](#9-nerf-专属区块的两种处理改造--删除)
10. [部署到 GitHub Pages](#10-部署到-github-pages)
11. [上线前检查清单](#11-上线前检查清单)
12. [常见问题 FAQ](#12-常见问题-faq)

---

## 1. 这个网页是什么 / 技术栈

这是著名的 **Nerfies 学术项目主页模板**（很多机器人/视觉论文主页都用它）。特点：

- **纯静态网站**：只有 HTML + CSS + JS，没有后端、不需要数据库、不需要编译。把文件夹原样丢到任何静态托管（GitHub Pages）就能跑。
- **技术栈**：
  - [Bulma](https://bulma.io/)：CSS 框架，负责响应式布局（手机/电脑自适应）。
  - **bulma-carousel**：结果视频轮播组件。
  - **bulma-slider**：滑块组件（原模板的 NeRF 插值用，我们已不用）。
  - **Font Awesome / Academicons**：图标（GitHub、PDF、arXiv 等图标）。
  - **jQuery**：少量交互（导航栏汉堡菜单、轮播初始化）。
- **改它 = 改文本和换素材**：90% 的工作就是在 `index.html` 里改文字、换 `static/` 里的图片视频文件。不需要懂前端框架。

---

## 2. 目录结构总览

```
项目根目录/
├── index.html              ← 网页主体（所有文字、区块都在这里）★最常改
├── Manual.md               ← 本手册
├── README.md               ← 模板自带说明（Nerfies 原始版权说明，可保留）
└── static/
    ├── css/
    │   ├── index.css       ← 自定义样式（我已在末尾追加本项目样式）
    │   ├── bulma.min.css   ← 框架，勿动
    │   └── ...（其余 .min.css 库文件，勿动）
    ├── js/
    │   ├── config.js       ← ★匿名/实名切换开关（新增）
    │   ├── index.js        ← 导航栏 + 轮播初始化（我已精简）
    │   └── ...（其余 .min.js 库文件，勿动）
    ├── images/             ← 网页用到的图片（我已替换成你的论文图）
    └── videos/             ← 网页用到的 demo 视频（我已替换成你的 demo）
```

> 原模板里 NeRF 的 `static/interpolation/`（240 张插值帧）和旧视频、旧图片**已被删除**。

---

## 3. 我已经替你改好了什么

为了让你少动手，下面这些我已经基于你 `RL_MPPI` 项目和论文 `main.tex` 完成了：

| 区块 | 已替换为 |
|---|---|
| 网页标题 / 关键词 / 描述 | 论文真实标题与关键词 |
| Google Analytics | **已删除**（避免误统计到原作者账号，模板许可也要求删） |
| 标题区作者 | 真实 10 位作者 + NUS / SJTU 机构 + 共一/通讯标注（实名版）；另备好匿名版 |
| 会议徽标 | `CoRL 2026` |
| 首屏 | **预留约 3min 讲解视频位**（待你放入 `static/videos/overview.mp4`）|
| 系统总览图 | 论文 pipeline 图 `teaser.png`，放在 Abstract 正下方 |
| Abstract | 论文摘要**原文** |
| Method | 三支柱卡片（FLASH / RGB Real-to-Sim / Prior-guided MPPI）+ 重建对比图 |
| Real-Robot Results | 8 个 demo 视频轮播 + 真机折叠网格图 |
| Comparison & Ablation | CORL 主结果**对比表**（Pure RL 25% / Vanilla MPPI 75% / Ours 95%）+ 收敛曲线 + 消融图 |
| Generalization & Robustness | 泛化网格图 + 鲁棒性扰动图 |
| BibTeX | CoRL 2026 引用条目（实名版 + 匿名版各一份） |
| Footer | 保留模板的 CC-BY-SA 协议与致谢链接（**许可要求保留，请勿删**） |
| 匿名/实名切换 | 新增 `static/js/config.js` 开关 + CSS 显隐规则 |

**还没完成、需要你来做的**只有：填几个链接占位符（见下一节）、选匿名还是实名、（可选）压缩视频。

---

## 4. 本地预览（必看）

改完任何东西，**先在本地看一眼**再上线。在项目根目录打开终端：

```bash
cd "项目根目录"
python3 -m http.server 8000
```

然后浏览器打开 **http://localhost:8000** 。改了文件后回到浏览器按 **Ctrl + Shift + R**（强制刷新，清缓存）即可看到最新效果。

> ⚠️ 不要直接双击用 `file://` 打开 `index.html`！那样视频和部分脚本会因为浏览器安全策略失效，必须用上面的本地服务器方式。

---

## 5. ⭐ 必须你来填的占位符（TODO 清单）

我在 `index.html` 里把不确定的链接都设成了占位 `href="#"`，并在旁边加了 `<!-- TODO: ... -->` 注释。用编辑器全局搜索 **`TODO`** 或 **`href="#"`** 就能逐个找到。需要你填的：

| 位置（搜索关键词） | 填什么 | 实名/匿名 |
|---|---|---|
| 导航栏 `navbar-item` | 项目主页或通讯作者主页 | 仅实名版显示 |
| `Paper` 按钮 | 论文 PDF 或 OpenReview 链接 | 两版都显示 |
| `arXiv` 按钮 | arXiv abstract 页链接 | 仅实名版 |
| `Code` 按钮 | GitHub 仓库链接 | 仅实名版 |
| Footer 的 PDF / GitHub 图标 | 论文 PDF、GitHub 主页 | 仅实名版 |
| Abstract 下方 `Video`（被注释掉） | 若有 YouTube 讲解视频，填视频 ID 并取消注释 | 可选 |
| `Related Links` 里的 `TODO` | 补充 FLASH / UniClothDiff 等相关工作链接 | 可选 |

另外两个**内容确认项**：

- **方法名**：网页结果表里我用的是 **"Ours (prior-guided MPPI)"**。你论文表格 `corl_table.tex` 里用过缩写 **"GRIP"**。如果确定对外用 GRIP，把 `index.html` 里 `Ours` 改成 `GRIP (Ours)` 即可（搜索 `Ours`）。
- **首屏视频**：首屏已预留约 3 分钟讲解视频位，把视频放到 `static/videos/overview.mp4` 即可（详见 [§7.4](#74-首屏讲解视频约-3-分钟)）；系统总览图已移到 Abstract 下方。

---

## 6. ⭐ 公开实名版 / 匿名版 一键切换

> 你的论文摘要里项目页写的是 `anonymous-clothmani.github.io`，`main.tex` 用的是 initial submission 宏包 —— 说明**可能还在双盲评审**。双盲期请务必用匿名版，否则可能被反匿名（de-anonymize）。

### 怎么切换

打开 **`static/js/config.js`**，只改这**一行**：

```js
window.SITE_CONFIG = {
  anonymous: false     // ← false = 公开实名版；true = 匿名版
};
```

- `false`：显示真实标题、10 位作者、NUS/SJTU、GitHub/arXiv 链接 → **录用后/转 preprint 公开宣传用**。
- `true`：作者变成 "Anonymous Author(s)"、机构隐藏、个人/代码链接隐藏、引用变匿名、"Project Page" 按钮指向匿名页 → **双盲评审期用**。

改完保存，刷新网页即可。**不需要改 HTML，整站自动切换。**

### 它是怎么实现的（原理，了解即可）

- `config.js` 在页面加载最早期，根据 `anonymous` 的值给 `<html>` 标签加上（或不加）`class="anon"`。
- `static/css/index.css` 末尾有两条规则：
  ```css
  html.anon .public-only      { display: none !important; }  /* 匿名时藏起实名内容 */
  html:not(.anon) .anon-only  { display: none !important; }  /* 实名时藏起匿名内容 */
  ```
- `index.html` 里凡是要区分的地方，都写了**两套**：实名内容带 `class="... public-only"`，匿名内容带 `class="... anon-only"`。

### 如果以后想加一处「只在实名版显示」的内容

给那个元素加上 `public-only` 类即可，例如：

```html
<span class="link-block public-only">
  <a href="https://twitter.com/...">Twitter</a>
</span>
```

反之，只在匿名版显示就用 `anon-only`。

---

## 7. 逐区块修改指南

`index.html` 里每个区块都用醒目的注释分隔，例如 `<!-- ===== Method ... ===== -->`。搜索这些注释就能快速跳转。下面按从上到下顺序说明。

### 7.1 网页标题 / 元信息（`<head>` 内）

- `<title>...</title>`：浏览器标签页标题。
- `<meta name="description">`：搜索引擎/分享摘要。
- `<meta name="keywords">`：关键词。
- Google Analytics：已删除（注释保留了模板，需要再开）。

### 7.2 标题区（作者、机构、按钮）

搜索 `publication-title`。结构是：

1. `<h1 ...>` 论文标题。
2. 两套作者块（`public-only` / `anon-only`）——见 [§6](#6--公开实名版--匿名版-一键切换)。
3. `CoRL 2026` 徽标（`publication-venue`）。
4. `publication-links`：5 个按钮（Paper / arXiv / Code / Project Page）。改链接见 [§5](#5--必须你来填的占位符todo-清单)。

> 想加一位作者？复制一行 `<span class="author-block">名字<sup>角标</sup>,</span>` 即可。想让作者名可点击到个人主页，把它包成 `<a href="主页">名字</a>`。

### 7.3 Abstract

搜索 `<!-- ===== Abstract`。摘要原文，改文字即可。摘要**正下方紧跟着系统总览图**（`teaser.png`，由首屏移来）；不想要可整段删除那个 `columns` 块。

### 7.4 首屏讲解视频（约 3 分钟）

搜索 `<!-- ===== 首屏讲解视频`。标题区正下方**预留**了一个约 3 分钟的讲解视频位，默认是本地视频：

```html
<video controls playsinline width="100%">
  <source src="./static/videos/overview.mp4" type="video/mp4">
</video>
```

- **放视频**：把你的讲解视频命名为 `overview.mp4` 放进 `static/videos/` 即可，**无需改 HTML**。
- **播放方式**：默认**手动点播**（`controls`），访客点一下即带声音播放，适合讲解视频。想让它**进页面自动播放**，加上 `autoplay muted loop`——但浏览器只允许**静音**自动播放，访客需手动点喇叭开声音。
- **（可选）封面**：给 `<video>` 加 `poster="./static/images/teaser.png"`，可在视频未播时显示一张封面图。
- **想用 YouTube / Bilibili**：删掉上面的 `<video>`，取消其下方注释里的 `<iframe>`，把 `VIDEO_ID` 换成你的视频 ID（16:9 自适应已写好）。

### 7.5 Method（三支柱 + 重建图）

搜索 `<!-- ===== Method`。三个 `pillar` 卡片分别是 FLASH / Real-to-Sim / MPPI，改卡片里的文字即可。配图是 `real2sim.png`，想换图改 `src`。

### 7.6 Real-Robot Results（视频轮播）

搜索 `<!-- ===== Real-Robot Results`。里面是 `id="results-carousel"`，每个 `<div class="item">` 是一个视频。

- **增删视频**：复制/删除整个 `<div class="item">...</div>` 块。
- **换视频**：改 `<source src="./static/videos/xxx.mp4">`。
- 轮播一次显示几个、是否自动播放，在 `static/js/index.js` 的 `carouselOptions` 里调（`slidesToShow`、`autoplay` 等）。

### 7.7 Comparison & Ablation（结果表）

搜索 `<!-- ===== Comparison`。是一个标准 HTML `<table class="result-table">`：

- 改数字：直接改 `<td>` 里的内容。
- 高亮你自己的方法：给那一行 `<tr>` 加 `class="ours"`（已给 Ours 行加好，是淡蓝底）。
- 加一列/一行：照着现有 `<th>` / `<td>` 复制。

### 7.8 其余图片区块

Generalization / Robustness 等都是 `<img src="..." class="section-figure">` + 一句 `figure-caption` 说明，照改即可。

### 7.9 BibTeX

搜索 `id="BibTeX"`。有两份 `<pre>`（实名 / 匿名），跟着切换开关自动显隐。录用后记得把会议信息补全（卷号、页码等）。

### 7.10 Footer

搜索 `<footer`。PDF / GitHub 图标在 `public-only` 里。**底部那段 CC-BY-SA 协议和「template borrowed from Nerfies」的致谢请保留**——这是模板开源协议的要求。

---

## 8. 素材整理：图片与视频

### 8.1 当前素材是从哪来的（源 → 网页文件 对照表）

日后论文图/视频更新了，按这张表重新生成同名文件覆盖即可，**无需改 HTML**。

**图片**（源都在 `…/overleaf/corl_2026_template_submission/figures/` 或 `…/RL_MPPI/RealWorldSim/realdata_for_paper/`）：

| 网页文件 `static/images/` | 源文件 | 处理方式 | 网页用途 |
|---|---|---|---|
| `teaser.png` | `figures/teaser4.pdf` | PDF→PNG | Abstract 下总览图 |
| `real2sim.png` | `figures/Real2Sim_reconstruction_overlay.pdf` | PDF→PNG | Method 重建图 |
| `realworld_grid.png` | `realdata_for_paper/fig3_realworld_grid.png` | 直接复制 | 真机折叠网格 |
| `generalization_grid.png` | `realdata_for_paper/fig4_generalization_grid.png` | 缩到宽1920 | 泛化网格 |
| `convergence.png` | `figures/convergence_paper.png` | 直接复制 | 收敛曲线 |
| `ablation_success.png` | `figures/ablation_samples_success.png` | 直接复制 | 消融 |
| `disturbance.png` | `figures/disturbance.png` | 缩到宽1920 | 鲁棒性 |
| `generalization_curve.png` | `figures/generalization_results3.pdf` | PDF→PNG | **备用**（未用） |
| `framework.png` | `figures/framework.png` | 直接复制 | **备用**（未用） |
| `bimanual_shorts.png` | `figures/bimanual_shorts_folding.png` | 直接复制 | **备用**（未用） |

**视频**（源都在 `…/RL_MPPI/Scripts/abc_output/`）：

| 网页文件 `static/videos/` | 源文件 | 内容 |
|---|---|---|
| `fold_towel.mp4` | `bi_towel/run_20260603_193742_live/demo_bi_towel.mp4` | 双臂毛巾 |
| `fold_pant.mp4` | `bi_pant/run_20260603_200332_live/demo_bi_pant.mp4` | 双臂短裤 |
| `fold_tshirt.mp4` | `bi_tshirt/run_20260505_213810_live/demo_bi_tshirt.mp4` | 双臂 T 恤 |
| `fold_longsleeve.mp4` | `bi_long_sleeve/run_20260603_214124_live/demo_bi_long_sleeve.mp4` | 双臂长袖 |
| `fold_4corner.mp4` | `bi_4corner/run_20260505_204944_live/demo_bi_4corner.mp4` | 双臂四角 |
| `fold_single.mp4` | `single_fold/run_20260602_145019_live/demo_live.mp4` | 单臂对角 |
| `baseline_vmppi.mp4` | `single_fold_baselines/run_20260505_143727_vmppi_live/demo_vmppi_seed0.mp4` | 基线 Vanilla MPPI |
| `baseline_rlonly.mp4` | `single_fold_baselines/run_20260505_153205_rlonly_rerun5_live/demo_rlonly_seed0_rerun5.mp4` | 基线 Pure RL |

> `abc_output/` 里还有很多其他 demo（每类的 `select1/2/3` 等），想换更好看的，按上表路径规律去挑、复制过来覆盖同名文件即可。

### 8.2 PDF 图 → PNG（论文图大多是 PDF，网页不能直接用）

本机已装好 `pdftoppm` 和 `convert`（ImageMagick）。任选其一：

```bash
# 方式 A：poppler（推荐，矢量渲染清晰）；-r 是 DPI，越大越清晰也越大
pdftoppm -png -r 200 -singlefile  你的图.pdf  static/images/你的图

# 方式 B：ImageMagick
convert -density 200 你的图.pdf -quality 92 static/images/你的图.png
```

### 8.3 压缩超大图片

> 本机有 `convert`。把过宽的大图限制到 1920px 宽（仅当更宽才缩小，质量几乎无损）：

```bash
convert 大图.png -resize '1920x>' static/images/输出.png
```

（`disturbance.png`、`generalization_grid.png` 我已这样处理过。）

### 8.4 压缩视频（可选，本机暂无 ffmpeg）

当前 8 个视频合计约 20 MB，体积可以接受，**不压也行**。若以后视频很大想压缩，需要先安装 `ffmpeg`（`sudo apt install ffmpeg`），再：

```bash
# crf 越大文件越小（23~30 合适）；-an 去掉音轨；faststart 利于网页边下边播
ffmpeg -i 原视频.mp4 -vcodec libx264 -crf 28 -preset slow -an -movflags +faststart 输出.mp4
```

网页视频请统一用 **H.264 编码的 .mp4**，兼容性最好。

---

## 9. NeRF 专属区块的两种处理（改造 / 删除）

模板原本有 3 个 NeRF 专属、和布料项目无关的区块：**视角插值滑块（Animation）**、**Visual Effects**、**Matting**。你之前选择「两种方案都给」，这里说明。

### 方案 A：改造（本网站当前采用 ✅）

我已经把这些区块的「外壳」复用、内容换成你的项目：

- **Visual Effects 区** → 改造成 **Method**（三支柱 + 重建图）。
- **Matting 区** → 改造成 **真机折叠网格图**。
- **Animation（插值滑块）区** → 改造成 **Comparison & Ablation**（结果表 + 曲线）。

所以你现在看到的是「内容丰富版」。`index.js` 里 NeRF 的插值/滑块代码、`static/interpolation/` 帧序列都已删除。**你不用做任何事**。

### 方案 B：删除（如果你想要更精简的页面）

如果你觉得页面太长，想删掉某个区块，**整段删除**对应的 `<section>...</section>` 即可（从 `<!-- ===== 区块名` 注释删到该 section 的 `</section>`）。各区块互相独立，删任意一个都不会影响其它部分。比如只想保留「Teaser + Abstract + Results + BibTeX」，把 Method、Comparison、Generalization、Related Links 四个 section 删掉即可。

> 提示：删区块前先 `git commit` 一次，删错了能 `git checkout` 还原。

---

## 10. 部署到 GitHub Pages

> 当前这个文件夹的 git 远程仓库还指向 **原模板作者**（`nerfies/nerfies.github.io`），上线前必须改成你自己的仓库。

### 步骤

1. **在 GitHub 新建一个空仓库**。仓库名决定网址：
   - 取名 `<你的用户名>.github.io` → 网址是 `https://<用户名>.github.io/`（**根路径，最推荐**）。
   - 取任意名字（如 `cloth-mani-page`）→ 网址是 `https://<用户名>.github.io/cloth-mani-page/`（子路径，也完全可用）。
   - 匿名评审：用一个不含真实姓名的 GitHub 账号/组织，对应论文里的 `anonymous-clothmani.github.io`。

2. **把远程改成你的仓库并推送**：
   ```bash
   cd "项目根目录"
   git remote set-url origin https://github.com/<你的用户名>/<仓库名>.git
   git add -A
   git commit -m "Build CoRL 2026 cloth manipulation project page"
   git push -u origin main
   ```

3. **开启 Pages**：GitHub 仓库页 → **Settings → Pages** → Source 选 **Deploy from a branch** → 选 `main` 分支、`/ (root)` 目录 → Save。等一两分钟，页面就上线了。

> 本模板用的是相对路径（`./static/...`），所以放根路径或子路径都能正常显示，无需改动。

### 关于大文件

- GitHub 单个文件上限 **100 MB**，仓库建议总量 < 1 GB。我们的素材远低于此，正常 `git push` 即可，**不需要 Git LFS**。
- 如果将来加了很大的视频导致 push 慢，再考虑 [Git LFS](https://git-lfs.com/) 或外链到 YouTube。

---

## 11. 上线前检查清单

- [ ] `static/js/config.js` 的 `anonymous` 设成了正确的值（评审期=`true`，公开=`false`）。
- [ ] 搜索 `href="#"`，确认该填的链接（Paper / arXiv / Code / 主页）都填了；评审期保持匿名的可不填。
- [ ] 本地 `python3 -m http.server 8000` 预览过，视频能自动播放、轮播能滑动、图片都显示。
- [ ] 手机上看一眼（浏览器开发者工具切到手机视图），布局没有错乱。
- [ ] 确认要不要用方法缩写 GRIP（见 [§5](#5--必须你来填的占位符todo-清单)）。
- [ ] Footer 的协议与模板致谢仍保留。
- [ ] `git remote` 已改成你自己的仓库。

---

## 12. 常见问题 FAQ

**Q：视频不自动播放？**
A：浏览器规定：自动播放的视频**必须静音**。确保 `<video>` 标签同时有 `autoplay muted loop playsinline` 四个属性（本项目已加好）。其中 `playsinline` 是 iPhone 上不全屏强占所必需。

**Q：本地预览视频能播放，但进度条拖不动 / 不能快进？**
A：这是预览工具的限制——`python -m http.server` **不支持 HTTP Range（字节范围）请求**，浏览器无法 seek，**不是你视频的问题**。两个办法：①直接部署到 GitHub Pages，线上支持 Range，拖动完全正常；②本地换一个支持 Range 的服务器，例如 VS Code 的 **Live Server** 扩展，或 Node 的 `npx http-server`，或 `pip install rangehttpserver && python3 -m RangeHTTPServer 8000`。

**Q：本地双击 `index.html` 打开，视频/脚本不工作？**
A：必须用本地服务器（`python3 -m http.server`），不能用 `file://`。这是浏览器安全策略限制，上线到 GitHub Pages 后一切正常。

**Q：改了文件，浏览器没变化？**
A：浏览器缓存。按 **Ctrl + Shift + R**（Mac：Cmd + Shift + R）强制刷新。

**Q：上线后图片/视频 404，本地却正常？**
A：GitHub（Linux）**区分文件名大小写**。`index.html` 里写的路径大小写，必须和 `static/` 里实际文件名**完全一致**（包括扩展名 `.png` / `.PNG`）。

**Q：图标（GitHub/PDF）变成方框？**
A：Font Awesome 没加载。本项目用的是本地 `static/js/fontawesome.all.min.js`，确认该文件还在、`<head>` 里的引用没被删。

**Q：切换匿名/实名后没效果？**
A：①确认改的是 `static/js/config.js` 并保存了；②强制刷新清缓存；③确认 `index.css` 末尾那两条 `.public-only / .anon-only` 规则还在。

**Q：想完全恢复成原始 Nerfies 模板？**
A：本目录是 git 仓库，`git log` 能看到改动历史，`git checkout <旧commit> -- index.html` 可还原单个文件。

---

*本手册随网页一起放在项目根目录，改完网页建议一并提交，方便合作者参考。*
