#!/usr/bin/env node
/**
 * 画像ファイルをpublic/imagesにコピーしてGitに追加するスクリプト
 * 
 * 使用方法:
 * npm run add-image <画像パス> <保存先ファイル名>
 * 
 * 例:
 * npm run add-image "C:\\Users\\user\\Downloads\\image.png" "hero-new.png"
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const args = process.argv.slice(2);

if (args.length < 2) {
  console.log('使用方法: npm run add-image <画像パス> <保存先ファイル名>');
  console.log('例: npm run add-image "C:\\Users\\user\\Downloads\\image.png" "hero-new.png"');
  process.exit(1);
}

const [imagePath, targetName] = args;
const targetPath = path.join('public', 'images', targetName);

try {
  // 画像をコピー
  fs.copyFileSync(imagePath, targetPath);
  console.log(`✅ 画像をコピーしました: ${targetPath}`);

  // Gitに追加
  execSync(`git add "${targetPath}"`, { stdio: 'inherit' });
  console.log(`✅ Gitに追加しました: ${targetPath}`);

  console.log('\n📝 次のステップ:');
  console.log(`   git commit -m "画像を追加: ${targetName}"`);
  console.log('   git push');
} catch (error) {
  console.error('❌ エラーが発生しました:', error.message);
  process.exit(1);
}
