# 画像ファイルをpublic/imagesにコピーしてGitに追加するスクリプト
param(
    [Parameter(Mandatory=$true)]
    [string]$ImagePath,
    
    [Parameter(Mandatory=$true)]
    [string]$TargetName
)

$targetPath = "public/images/$TargetName"

# 画像をコピー
Copy-Item -Path $ImagePath -Destination $targetPath -Force

# Gitに追加
git add $targetPath

Write-Host "✅ 画像を追加しました: $targetPath"
Write-Host "📝 次にコミットしてください: git commit -m '画像を追加: $TargetName'"
Write-Host "🚀 プッシュしてください: git push"
