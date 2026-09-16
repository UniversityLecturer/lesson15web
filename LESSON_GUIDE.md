# 前期(ぜんき)最終(さいしゅう)授業(じゅぎょう)｜画像(がぞう)の指定(してい)と表現(ひょうげん)

## 本日(ほんじつ)のポイント

1. 画像(がぞう)と文字(もじ)の回(まわ)り込(こ)み（CodePenでタイピング）
2. 画像(がぞう)の絶対(ぜったい)パス（URL）でパララックスとホバー
3. 画像(がぞう)の相対(そうたい)パス（フォルダ）でGoogleドライブからダウンロードし、GitHub Pagesへ公開(こうかい)

## 90分(ぷん)の進行(しんこう)

- 0〜5分(ぷん)：完成(かんせい)画面(がめん)と本日(ほんじつ)のゴール
- 5〜25分(ふん)：画像(がぞう)と文字(もじ)の回(まわ)り込(こ)み
- 25〜45分(ふん)：絶対(ぜったい)パス、パララックス、ホバー
- 45〜55分(ふん)：絶対(ぜったい)パスと相対(そうたい)パスの比較(ひかく)
- 55〜65分：GoogleドライブからZIPをダウンロード
- 65〜80分(ふん)：GitHubへアップロード、Pages公開(こうかい)
- 80〜90分(ぷん)：表示(ひょうじ)確認(かくにん)とまとめ

## 画像(がぞう)パスの比較(ひかく)

### 絶対(ぜったい)パス（CodePen）

```html
<img src="https://ユーザー名.github.io/リポジトリ名/images/card-1.jpg" alt="画像の説明">
```

```css
background-image: url("https://ユーザー名.github.io/リポジトリ名/images/hero.jpg");
```

### 相対(そうたい)パス（ダウンロード後(ご)・GitHub Pages）

```html
<img src="images/card-1.jpg" alt="画像の説明">
```

```css
background-image: url("images/hero.jpg");
```

## 今日(きょう)の問(と)い / Today's Question

> CodePenには`images`フォルダがないのに、なぜ画像(がぞう)が見(み)えますか？  
> Why can we see the image without an `images` folder in CodePen?

### 学生(がくせい)の回答(かいとう) / Student Answer

```text
ここに答(こた)えを書(か)きます。
Write your answer here:


```

### 先生(せんせい)用(よう)の回答例(かいとうれい) / Answer Example

Webに公開(こうかい)された画像(がぞう)を、絶対(ぜったい)パス（URL）で読(よ)み込(こ)むからです。  
CodePen loads the image from its full URL.

## 02｜パララックス完成(かんせい)コード

CodePenでは、`url()`を先生(せんせい)のGitHub Pages画像(がぞう)URLに変更(へんこう)します。

```css
.hero-bg {
    position: absolute;
    inset: -15% 0;
    background-image:
        linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),
        url("https://ユーザー名.github.io/リポジトリ名/images/hero.jpg");
    background-size: cover;
    background-position: center;
    will-change: transform;
}
```

```javascript
const hero = document.querySelector(".section1");
const heroBg = document.querySelector(".hero-bg");

function updateParallax() {
    const rect = hero.getBoundingClientRect();
    const movement = -rect.top * 0.25;
    heroBg.style.transform = `translateY(${movement}px)`;
}

window.addEventListener("scroll", updateParallax, { passive: true });
updateParallax();
```

`0.25`を`0.1`または`0.4`へ変更(へんこう)し、動(うご)きの違(ちが)いを確認(かくにん)します。

## 02｜ホバー／タップ拡大(かくだい)の完成(かんせい)コード

```css
.card-image {
    transition: transform 0.4s ease;
}

.card:hover .card-image,
.card:active .card-image,
.card:focus .card-image {
    transform: scale(1.1);
}
```

`scale(1.1)`や`0.4s`の数値(すうち)を変更(へんこう)し、拡大率(かくだいりつ)と速度(そくど)を確認(かくにん)します。

## 配布(はいふ)ファイル

- `student/`：授業(じゅぎょう)開始時(かいしじ)のファイル。回(まわ)り込(こ)みは完成(かんせい)、パララックスとホバーは未設定(みせってい)です。
- `complete/`：授業(じゅぎょう)終了時(しゅうりょうじ)の完成(かんせい)見本(みほん)です。

## GitHub Pagesでの確認(かくにん)

1. ZIPを展開(てんかい)する
2. `student`または`complete`フォルダ内(ない)のファイルをリポジトリ直下(ちょっか)へアップロードする
3. `Settings` → `Pages` → `Deploy from a branch`
4. `main`、`/(root)`を選択(せんたく)して保存(ほぞん)する
5. 公開(こうかい)ページと画像(がぞう)URLを確認(かくにん)する
