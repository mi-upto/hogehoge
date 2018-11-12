## # 概要

LP のスターターテンプレート
- sass (scss)
- autoprefixer
- browserSync,

<br>

## # 環境構築

※ git clone したら最初だけ

```
npm install
```

<br>

## # 使い方

### 開発開始コマンド

```
npm run dev
```

`webpack --mode development --watch`を実行

### 本番デプロイ前のコマンド

```
npm run build
```

<br>

## # 本番デプロイ方法
1. 本番デプロイ前のコマンドを実行 ( `npm run build` )
2. pageディレクトリの中身をサーバにアップ
3. おわり

### check
Netlifyと連携するとmasterにpushしたものが、そのまま本番にデプロイできます。 
https://www.netlify.com/

<br>


## # 開発用コマンドまとめ

`npm install` 済の場合

```
1. ターミナル起動
2. cd project/lp-template-designer
3. npm run dev
```

http://localhost:3000/ が立ち上がります。 <br>
ファイルに変更を加えるとブラウザが自動でリロードされます。

### ターミナル止め方

```
Control + C
```

<br>

## # 触る場所

### # HTML

```
page/index.html
```

### # scss ( CSS )

```
src/styles.scss
```

### # 自作したJavaScript/jQuery

```
page/assets/js/index.js
```

### # jQueryプラグインなどのライブラリ置き場
page/assets/js/lib/library_name.js

### # image

```
page/assets/images/dummy.png
```

#### html で画像を指す方法

```
<img src="assets/images/dummy.png" alt="世界一かわいい犬">
```

#### scss で画像を指す方法

```
body {
  background: url('assets/images/dummy.png');
}
```
