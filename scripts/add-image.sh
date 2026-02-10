#!/bin/bash
# 画像ファイルをpublic/imagesにコピーしてGitに追加するスクリプト

if [ $# -lt 2 ]; then
    echo "使用方法: ./scripts/add-image.sh <画像パス> <保存先ファイル名>"
    echo "例: ./scripts/add-image.sh ~/Downloads/image.png hero-new.png"
    exit 1
fi

IMAGE_PATH=$1
TARGET_NAME=$2
TARGET_PATH="public/images/$TARGET_NAME"

# 画像をコピー
cp "$IMAGE_PATH" "$TARGET_PATH"

# Gitに追加
git add "$TARGET_PATH"

echo "✅ 画像を追加しました: $TARGET_PATH"
echo "📝 次にコミットしてください: git commit -m '画像を追加: $TARGET_NAME'"
echo "🚀 プッシュしてください: git push"
