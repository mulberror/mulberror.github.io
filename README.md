## 本地预览
```bash
hugo serve --disableFastRender -e production --buildDrafts
```

## 工作流
```bash
hugo serve --disableFastRender -e production
# 上传 index.json 文件到 algolia，本地编译完上传即可
python3 algolia.py
# 上传网站文件
git add .
git commit -m "fix: upload"
git push -u origin main

```

## 创建文章
```
python3 newpost.py xxx [-e] # e if both English
```