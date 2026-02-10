# 画像追加の簡単な方法

## 方法1: npmスクリプトを使う（推奨）

```bash
npm run add-image "画像のパス" "保存先ファイル名"
```

**例:**
```bash
npm run add-image "C:\Users\user\Downloads\new-image.png" "hero-new.png"
```

これで画像が `public/images/hero-new.png` にコピーされ、Gitに自動追加されます。

## 方法2: エクスプローラーで直接コピー

1. 画像ファイルを `public/images/` フォルダにコピー
2. Cursorのソース管理（Git）パネルで画像ファイルを確認
3. 「+」ボタンでステージング
4. コミット → プッシュ

## 方法3: PowerShellスクリプトを使う

```powershell
.\scripts\add-image.ps1 "画像のパス" "保存先ファイル名"
```

**例:**
```powershell
.\scripts\add-image.ps1 "C:\Users\user\Downloads\image.png" "card-new.png"
```

## 画像ファイル名の命名規則

- **ヒーロー画像**: `hero-{名前}.png`（例: `hero-spa.png`, `hero-seihin.png`）
- **カード画像**: `card-{名前}.png`（例: `card-school.png`, `card-seihin.png`）
- **その他**: 用途に応じて適切な名前を付ける

## lib/images.tsの更新

画像を追加したら、`lib/images.ts` で画像パスを更新してください：

```typescript
heroNew: `/images/hero-new.png`,
cardNew: `/images/card-new.png`,
```
