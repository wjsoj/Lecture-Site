# Website Worflow

## 技术选型

使用字节跳动开源的基于Rust工具链+React开发的静态网站生成器RsPress，具有高扩展性、可自定义主题、原生具备全文搜索能力（作为对比，Docusaurus需手动配置接入algolia等搜索组件）、冷启动和热重载速度快等优势。

## 目录结构

```
├── docs
│   ├── about
│   │   ├── _meta.json
│   │   └── （网站介绍用的Markdown文件放在这里，需在_meta.json中配置路径和名称）
│   ├── index.md
│   ├── _meta.json
│   ├── Notes
│   │   ├── ......(Notes放在这里，由Workflow自动生成)
│   │   └── index.md
│   └── public
│       ├── （静态文件放置在这里）
│       └── rspress-light-logo.png
├── LICENSE
├── package.json
├── package-lock.json
├── postcss.config.js
├── README.md
├── rspress.config.ts
├── src
│   ├── components
│   │   ├── PdfObject.tsx
│   │   └── PdfViewer.tsx
│   └── styles
│       └── index.css
├── tailwind.config.js
└── tsconfig.json

```

## 本地开发

安装依赖：

```bash
npm install
```

启动开发服务器（热重载）：

```bash
npm run dev
```

构建静态文件：
```bash
npm run build
```

预览构建效果：
```bash
npm run preview
```

## 自动化CI/CD

使用Vercel进行部署，仓库push后自动完成网站部署，注意RsPress构建出的静态网站位于`./doc_build`目录下，与常规项目不同，需特别注意。

使用Github Actions完成笔记的自动拉取和整理，对应文件`.github/workflows/sync-lecture-notes.yml`，目前配置为每周自动拉取一次，如有需要可向网站仓库发起push触发手动拉取：

```yaml
name: Sync Lecture Notes

on:
  schedule:
    - cron: '34 12 * * 2'  # 每周二12：34运行一次（错峰）
  push:
    branches:
      - main  # 当 main 分支有 push 时运行

jobs:
  sync-notes:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Lecture Site repository
        uses: actions/checkout@v2

      - name: Checkout Lecture Notes repository
        uses: actions/checkout@v2
        with:
          repository: StephenQSstarThomas/Lecture-Notes
          path: Lecture-Notes

      - name: Sync Markdown Files
        run: |
          mkdir -p docs/Notes
          rsync -av --include='*/' --exclude='README.md' --exclude='.assets/*' --include='*.md'  --exclude='*' Lecture-Notes/ docs/Notes/

      - name: Commit and Push Changes
        run: |
          git config --global user.name 'github-actions'
          git config --global user.email 'github-actions@github.com'
          git add docs/Notes
          git diff --quiet && git diff --staged --quiet || git commit -m "Sync Lecture Notes"
          git push
```

以上自动化流程会自动将笔记主仓库的Markdown文件拉取到网站仓库并完成部署，下面是一个示例Markdown文件，注意应包含本文件夹下的pdf文件直链以及基本的课程和上传者信息，文件命名为`课程名.md`：

```markdown
## 2024 Spring,taught by Prof.Yinan Wang, notes uploaded by ThomasYang
[群论2wyn(by_yy).pdf](https://ghproxy.wjsphy.top/https://raw.githubusercontent.com/StephenQSstarThomas/Lecture-Notes/main/群论2/群论2wyn(by_yy).pdf)
```

:::warning
由于自动化工作流的存在，请在每次对本仓库发起push前先进行pull操作以同步文件更新
:::