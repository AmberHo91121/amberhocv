# GitHub Pages 部署完整教學

這份文件將詳細教你如何將專案部署到 GitHub Pages，讓網站可以透過網址直接瀏覽。

## 📋 前置準備

1. **GitHub 帳號**：如果還沒有，請前往 [github.com](https://github.com) 註冊
2. **Git**：確認電腦已安裝 Git（如果沒有，請下載 [git-scm.com](https://git-scm.com)）
3. **專案檔案**：確保所有檔案都在專案資料夾中

## 🚀 步驟一：初始化 Git 倉庫（如果還沒初始化）

在你的專案資料夾中打開終端機（Terminal / PowerShell / CMD），執行：

```bash
# 檢查是否已經初始化 Git
git status

# 如果顯示 "not a git repository"，則執行：
git init
```

## 📦 步驟二：將檔案加入 Git

```bash
# 將所有檔案加入暫存區
git add .

# 提交檔案（建立第一個版本）
git commit -m "Initial commit: CV portfolio website"
```

## 🔗 步驟三：在 GitHub 上建立新倉庫

1. **登入 GitHub**
   - 前往 [github.com](https://github.com)
   - 登入你的帳號

2. **建立新倉庫**
   - 點擊右上角的 **"+"** 圖示
   - 選擇 **"New repository"**

3. **設定倉庫資訊**
   - **Repository name**：輸入倉庫名稱（例如：`cv-portfolio` 或 `amberho-portfolio`）
   - **Description**：可選，輸入描述（例如：`Personal CV Portfolio Website`）
   - **Public**：選擇 **Public**（GitHub Pages 免費版需要公開倉庫）
   - **不要勾選** "Initialize this repository with a README"（因為我們已經有檔案了）
   - 點擊 **"Create repository"**

## 📤 步驟四：將本地專案推送到 GitHub

在終端機中執行以下指令（將 `你的用戶名` 和 `你的倉庫名` 替換成實際值）：

```bash
# 連接到 GitHub 倉庫
git remote add origin https://github.com/你的用戶名/你的倉庫名.git

# 將 main 分支推送到 GitHub
git branch -M main
git push -u origin main
```

**範例**：
```bash
git remote add origin https://github.com/amberho/cv-portfolio.git
git branch -M main
git push -u origin main
```

**注意**：第一次推送時，GitHub 會要求你輸入帳號密碼。建議使用 **Personal Access Token** 代替密碼：
- 前往 GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
- 點擊 "Generate new token"
- 勾選 `repo` 權限
- 複製產生的 token，在輸入密碼時使用這個 token

## 🌐 步驟五：啟用 GitHub Pages

1. **進入倉庫設定**
   - 在 GitHub 倉庫頁面，點擊上方的 **"Settings"** 標籤

2. **找到 Pages 設定**
   - 在左側選單中找到 **"Pages"**（在 "Code and automation" 區塊下）
   - 點擊進入

3. **設定部署來源**
   - 在 **"Source"** 區塊中：
     - **Branch**：選擇 `main`
     - **Folder**：選擇 `/ (root)`
   - 點擊 **"Save"**

4. **等待部署**
   - GitHub 會開始部署你的網站
   - 通常需要 1-2 分鐘
   - 頁面會顯示：**"Your site is live at https://你的用戶名.github.io/你的倉庫名/"**

## ✅ 步驟六：訪問你的網站

部署完成後，你的網站網址格式為：
```
https://你的用戶名.github.io/你的倉庫名/
```

**範例**：
- 用戶名：`amberho`
- 倉庫名：`cv-portfolio`
- 網址：`https://amberho.github.io/cv-portfolio/`

## 🔄 更新網站內容

當你修改了本地檔案後，要更新網站：

```bash
# 1. 將修改的檔案加入暫存區
git add .

# 2. 提交修改
git commit -m "更新網站內容"

# 3. 推送到 GitHub
git push
```

推送後，GitHub Pages 會自動重新部署（通常需要 1-2 分鐘）。

## 📝 常見問題

### Q1: 網站顯示 404 錯誤？
- **檢查**：確認 GitHub Pages 已正確啟用（Settings → Pages）
- **等待**：首次部署可能需要 5-10 分鐘
- **確認**：網址是否正確（注意大小寫）

### Q2: 圖片無法顯示？
- **檢查**：確認圖片路徑是相對路徑（例如：`Works/封面.png` 而不是 `E:\...`）
- **確認**：所有圖片檔案都已推送到 GitHub

### Q3: 如何自訂網址？
- GitHub Pages 免費版提供 `你的用戶名.github.io/倉庫名` 格式
- 如需自訂網域，可在 Pages 設定中設定 Custom domain

### Q4: 如何刪除或重新部署？
- 在 Settings → Pages 中可以停用 GitHub Pages
- 刪除倉庫：Settings → 最下方 "Danger Zone" → "Delete this repository"

## 🎉 完成！

現在你的網站已經上線了！可以分享給任何人，他們都可以透過網址直接瀏覽，無需下載任何檔案。

---

**提示**：建議將這個網址加入你的履歷、LinkedIn 或作品集中，讓雇主和客戶可以直接查看你的作品！
