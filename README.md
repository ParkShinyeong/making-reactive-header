# making-reactive-header

간단하게 html과, css, js로 반응형 헤더를 만들어보았습니다.
드림코딩 엘리 유튜버님의 [반응형 헤더 만들기 유튜브 영상](https://www.youtube.com/watch?v=X91jsJyZofw&t=427s)을 참고해서 만들었습니다.

결과물 [https://parkshinyeong.github.io/making-reactive-header/]

- 일반 화면

![Page1](<./picture/Untitled(1).png>)

- 화면 넓이가 768px 이하일 때 아래와 같이 햄버거 아이콘이 나타나게 했고, 햄버거 아이콘을 클릭하면, 아래 메뉴와 트위터, 페이스북 아이디가 뜰 수 있도록 했다.
  - 아이콘을 누르지 않았을 때
  ![Untitled](<./picture/Untitled(2).png>)
  - 아이콘을 눌렀을 때
  ![Untitled](<./picture/Untitled(3).png>)

## HTML

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>반응형 헤더 만들기</title>
  <script
   src="https://kit.fontawesome.com/a883abb82f.js"
   crossorigin="anonymous"
  ></script>
  <!--CSS와 연결-->
  <link rel="stylesheet" href="style.css" />
 </head>

 <body>
  <!--헤더-->
  <nav class="navbar">
   <!--사이트 로고-->
   <div class="navbar__logo">
    <i class="fas fa-book"></i>
    <span>STUDY WITH ME</span>
   </div>
   <!--사이트 메뉴-->
   <ul class="navbar__menu">
    <li><a href="">Home</a></li>
    <li><a href="">Gallery</a></li>
    <li><a href="">FAQ</a></li>
    <li><a href="">Bookings</a></li>
   </ul>
   <!--다른 링크 아이콘-->
   <ul class="navbar__icons">
    <li><i class="fab fa-twitter"></i></li>
    <li><i class="fab fa-facebook-f"></i></li>
   </ul>
   <!--메뉴 토클 버튼-->
   <a href="#" class="navbar__toogleBtn">
    <i class="fas fa-bars"></i>
   </a>
  </nav>

  <!--자바스크립트와 연결-->
  <script src="main.js"></script>
 </body>
</html>
```

1. 헤더이므로 **<nav> 태그**로 전체를 감싸주었다.

> **<nav>**: 다른 페이지 또는 현재 페이지의 다른 부분과 연결되는 네비게이션 링크들의 집합을 정의할 때 사용

![Untitled](<./picture/Untitled(4).png>)

1. 사이트 로고가 있는 부분, 메뉴가 있는 부분, 트위터/ 페이스북으로 이동하는 로고가 있는 부분, 총 3가지 부분으로 나누었다.
   - 각각 'navbar**logo', 'navbar**menu', 'navbar\_\_icons'라는 클래스명을 사용하여 구분해주었다.
   - 로고는 div 태그로, 메뉴 및 아이콘들은 리스트를 이용해 표시해주었다.

### 사이트 로고

```jsx
<div class="navbar__logo">
 <i class="fas fa-book"></i>
 <span>STUDY WITH ME</span>
</div>
```

Font Awesome에서 아이콘을 가져왔다.

[Font Awesome](https://fontawesome.com/) - 여기서 무료로 아이콘을 사용할 수 있다.

```html
<!--head 부분에 넣고 나서 사용할 수 있다. -->
<script
 src="https://kit.fontawesome.com/a883abb82f.js"
 crossorigin="anonymous"
></script>
```

![Untitled](<./picture/Untitled(5).png>)

빨간색으로 표시한 부분을 복사해서 html에 갖다붙이면 아이콘을 사용할 수 있다.

# CSS

```css
* {
 box-sizing: border-box;
}
```

모든 박스를 여백과 테두리를 포함한 크기로 계산한다.

```css
body {
 margin: 0;
}
```

body 태그에 기본으로 설정된 스타일에 약간의 여백이 있다. 이것을 제거하기 위해 바깥 여백을 0으로 해주었다. (박스의 시작(0, 0))

```css
/*a 태그의 밑줄 삭제 => text-decoration*/
a {
 text-decoration: none;
 color: rgb(252, 248, 241);
}

/*리스트의 점 삭제*/
li {
 list-style: none;
}
```

### navbar

클래스명을 사용해 css를 작성할 때는 클래스명 앞에 . 붙이는 거 까먹지 말자!

```css
.navbar {
 background-color: rgb(28, 66, 116); /*배경색*/
 padding: 8px 12px; /*안쪽 여백*/
 display: flex; /*display: flex로 자식 박스의 방향과 크기 결정*/
 justify-content: space-between; /*아이템들 사이에 균일한 간격을 만들어준다. */
 align-items: center; /*아이템을 수직 방향에서 가운데로 정렬한다. */
 color: rgb(252, 248, 241); /*글자 색*/
}
```

### navbar\_\_logo

```css
.navbar__logo {
 display: flex;
 font-size: 20px;
 padding: 8px;
}

.navbar__logo i {
 padding: 4px;
 color: rgb(214, 157, 0);
}
```

### navbar\_\_menu

```css
.navbar__menu {
 display: flex; /*리스트 요소들을 가로로 정렬해주었다. */
 padding-left: 0; /*?*/
}

.navbar__menu li {
 padding: 8px 12px;
}

.navbar__menu li**:hover** {
 background-color: rgb(172, 172, 140);
 border-radius: 4px;
}
```

> **[hover**:](https://developer.mozilla.org/ko/docs/Web/CSS/:hover) [(CSS 의사 클래스)](https://developer.mozilla.org/ko/docs/Web/CSS/Pseudo-classes) 사용자가 포인팅 장치를 이용해 상호작용 중인 요소를 선택한다. ( 주로 사용자의 커서가 요소 위에 올라가 있을 때)

hover을 이용해 커서가 메뉴 요소에 올라가있을 경우 배경색을 노란빛으로 바꾸어주었다.

### navbar\_\_icons

```css
.navbar__icons {
 display: flex; /*아이콘 요소들을 가로로 정렬해주었다.*/
 padding-left: 0;
}

.navbar__icons li {
 padding: 8px 12px;
}
```

### navbar\_\_toogleBtn

현재 상태에서는 토글 버튼이 보이면 안되므로, `display: none`을 이용하여 숨겨준다.

```css
.navbar__toogleBtn {
 display: none;
}
```

### @media

[media 쿼리](https://developer.mozilla.org/ko/docs/Web/CSS/@media)를 사용하면, 해당 쿼리를 만족할 때만 CSS 블록을 적용할 수 있다.

```css
@media screen and (max-width: 768px) {
 .navbar {
  flex-direction: column;
  align-items: flex-start;
 }
 .navbar__menu {
  display: none;
  flex-direction: column;
  align-items: center;
  width: 100%;
 }

 .navbar__menu li {
  text-align: center;
  padding: 8px 12px;
 }

 .navbar__menu li:hover {
  background-color: rgb(172, 172, 140);
  width: 100%;
 }

 .navbar__icons {
  display: none;
  justify-content: center;
  width: 100%;
 }

 .navbar__toogleBtn {
  display: block;
  position: fixed;
  right: 20px;
  top: 20px;
  font-size: 20px;
 }

 .navbar__menu.active,
 .navbar__icons.active {
  display: flex;
 }
}
```

1. `@media screen and (max-width: 768px)` : 화면 상에서 화면 너비가 768px 이하일 때 ⇒ 다음 항목이 적용된다.

1. 로고, 메뉴, 아이콘이 **세로로 정렬**되어야 한다.

   ```css
   .navbar {
    flex-direction: column; /*정렬 방향을 column으로 바꾸어준다.*/
    align-items: flex-start; /*사이트 로고가 중간이 아닌, 왼쪽이어야 한다. */
   }
   ```

   flex-direction을 column으로 바꾸면, justify-content, align-items의 방향이 바뀌므로 주의하자!

   ![Untitled](<./picture/Untitled(6).png>)

1. **메뉴**는 가운데에 정렬되어야 하고, 메뉴 내부의 요소들이 세로로 정렬되어야 한다. 또, 메뉴 토클 버튼을 누르기 전에는 보이지 않아야 한다.

```css
.navba4r__menu {
 display: none; /*토글 버튼을 누르기 전에는 보이지 않아야 한다.*/
 flex-direction: column; /*메뉴 내부의 요소들도 세로로 정렬*/
 align-items: center; /*가운데 정렬*/
 width: 100%; /*너비를 100%로 해주어야 가운데로 정렬이 제대로 된다.*/
}

.navbar__menu li {
 text-align: center; /*텍스트 요소들을 중간으로 정렬한다.*/
 padding: 8px 12px;
}

.navbar__menu li:hover {
 background-color: rgb(172, 172, 140);
 width: 100%;
}
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c3ec3909-731a-4859-8adb-7da650497859/Untitled.png)

1. **아이콘** 도 마찬가지로 중앙에 정렬해야 하고, 토클 버튼을 누르기 전에는 보이지 않아야 한다.

```css
.navbar__icons {
 display: none;
 justify-content: center;
 width: 100%;
}
```

여기서는 flex-direction이 default 값인 row로 설정되어 있으므로, justify-content를 이용해 중앙에 정렬한다.

그리고 width = 100%로 설정해주어야 제대로 정렬이 된다.

1. **토글 버튼**

   토글 버튼은 오른쪽 상단에 위치해야 한다.

   ```css
   .navbar__toogleBtn {
    display: block;
    position: fixed;
    right: 20px;
    top: 20px;
    font-size: 20px;
   }
   ```

   position: fixed를 이용해 오른쪽에서 20px, 상단에서 20px 떨어진 곳에 위치를 고정해주었다.

   유튜브를 참고했을 때, **position: fixed**가 아닌, **absolute**를 사용하셨다.

   - absolute와 fixed는 둘 다 **요소를 일반적인 문서 흐름에서 제거**하고, **페이지 레이아웃에 공간도 배정하지 않는다**는 공통점이 있다.
   - 그러나 차이점은
     - **absolute**는 가장 가까운 위치 지정 조상 요소에 대해 상대적으로 배치한다. (조상 중 위치 지정 요소가 없으면 초기 컨테이닝 블록 기준)
     - **fixed**는 뷰포트의 초기 컨테이닝 블록을 기준으로 배치한다고 한다.
       - [뷰포트](https://developer.mozilla.org/ko/docs/Glossary/Viewport): 현재 화면에 보여지는 직사각형의 영역
       - [컨테이닝 블록](https://developer.mozilla.org/ko/docs/Web/CSS/Containing_block) : position이 fixed인 경우, 뷰포트나 페이지 영역
   - [position mdn](https://developer.mozilla.org/ko/docs/Web/CSS/position) 참고해보자!

# JavaScript

자바스크립트 DOM을 이용해 토글 버튼을 눌렀을 때 이벤트를 추가해주었다.

```jsx
const navbar_menu = document.querySelector(".navbar__menu");
const navbar_icons = document.querySelector(".navbar__icons");
const navbar_toogleBtn = document.querySelector(".navbar__toogleBtn");
```

`document.querySelector('클래스네임')`을 이용해 html 요소에 접근해주었다.

```jsx
navbar_toogleBtn.onclick = function () {
 navbar_menu.classList.toggle("active");
 navbar_icons.classList.toggle("active");
};
```

`onclick` 을 이용해 토글 버튼을 눌렀을 때 이벤트를 추가해주었다.

- 메뉴와, 아이콘 요소의 클래스 속성에 `toggle()` 메소드를 사용했다.
- **toggle( String )**
  - 인수가 있을 때 ⇒ 클래스 값을 토글링한다.
  - 즉 클래스가 존재하면 제거하고, false를 반환
  - 클래스가 존재하지 않으면 클래스를 추가, true를 반환

이렇게 하면 버튼을 클릭했을 때 menu, icons 클래스에 active를 추가하거나 삭제할 수 있도록 해주었다.

CSS에도 active 속성이 있을 때를 추가해주었다.

```css
.navbar__menu.active,
.navbar__icons.active {
 display: flex;
}
```

display: none ⇒ **display: flex**로 변경해주었다.

### +) CSS ⇒ 전역 변수 선언하기

`:root` 를 이용해 CSS에서 전역 변수를 선언하여 유용하게 사용할 수 있다.

```css
:root {
 --text-color: rgb(238, 238, 238);
 --background-color: rgb(8, 13, 26);
 --accent-color: rgb(240, 237, 65);
}
```

이렇게 텍스트 컬러나, 배경 컬러를 전역 변수로 선언해서, 각 컬러를 지정해줄 수 있다.

⇒ 수정 사항이 있으면 일일히 컬러를 하나하나 다 바꾸지 않고, 변수로 선언한 컬러 부분만 바꾸어주면 쉽게 수정이 가능하다.

```css
.navbar {
 background-color: var(--bagkground-color);
}

.navbar__logo {
 color: var(--text-color);
}

.navbar__menu li:hover {
 background-color: var(--accent-color);
}
```

이런식으로 변수를 사용할 수 있다.
