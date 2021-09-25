# Nomad Coder (React)

# node.js설치 (npm -v로 버전 확인)

1. node.js  홈페이지에서 컴퓨터 환경에 맞에 설치한다.

# 폴더 안에 yarn create react-app 폴더명

1. 바탕화면에 mkdir 폴더명으로 폴더 생성
2. cd 폴더명으로 안으로 들어가서
3. yarn create react-app 폴더명으로 폴더안에 리액트 폴더? 생성
4. vscode에서 오픈
5. [REA](http://read.me)DME.md 내용 삭제 후 

```jsx
# Movie app 2021
React JS Fundamentals Course (2021 Update!)
```

# git commit

```jsx
### 터미널 명령어로 커밋하기

1. git init //초기화 시킨 다음 시작
2. git remote add origin 레파지토리주소 
3. git add .
4, git commit - "주제(내가 정하고싶은) 정하기" //위에 적은 부분임 #Movie app 2021~ ...
5. git push origin master
 
```

4번이 들어가는 곳 ㅋ

![Nomad%20Coder%20(React)/1.png](Nomad%20Coder%20(React)/1.png)

# 실행시키기

1. yarn start 혹은 npm start로 실행시키기
2. 중요한 것은 프로젝프 폴더 안에서 실행시켜야 한다.

# 깃허브에 푸쉬 하는법 (터미널 편)

1. 프로젝트 상위폴더에서 git init을 실행
2. 깃허브에서 저장소 생성 생성 할 때에는

    ![Nomad%20Coder%20(React)/2.png](Nomad%20Coder%20(React)/2.png)

1. 생성을 하면 오른쪽 상단쯤에 보이는 링크를 복사한다.
2. 터미널에 돌아와 git remote at  origin 복사한링크 치고 엔터
3. git add 치고 엔터
4. git commit -m "커밋하려는게 뭔지 설명해주는 단어나 글 적어주기"
5. git push origin master 엔터
6. 깃 저장소 가서 확인해보면 나의 [READ](http://read.me)ME.md가 업로드 되어있을 것이다.

![Nomad%20Coder%20(React)/1.png](Nomad%20Coder%20(React)/1%201.png)

# App.js 아래 상태로 시작한다.

```jsx
import React from "react";

function App() {
	return <div clssName="App" />;
}

export default App;
```

↓

```jsx
import React from "react";

function App() {
	return <div>Hello</div>;      //이런식으로 return 안의 내용들을 바꿔주면 된다.
}

export default App;
```

---

## 이해해 보기

index.html은 id="root"를 가져오고 

(root라는 이름이 아니여도 된다. index.js에서 보내는것과 여기서 받는것의 이름이 같으면 되는거임)

index.js에서 App.js를 부르고 "root"로 보냄

 ㄴ ReactDOM.render(<App />, document.getElementById("root"));

App.js의 return 안에 있는 것들이 보여지는 것인데, 그걸 export

### 결론.....

App.js를 index.js에서 가져가고 App를 갖고 있는  index.js를 index.html이 가져가서 index.html은 텅 비어있지만 미리 완성된 App를 텅빈 html에 밀어넣으며 보여주기 때문에 빠르게 보여진다.

---

# component = html을 반환하는 함수이다

App.js

```jsx
import React from "react";  //꼭 import해줘야 react에서 이해 할 수 있게 된다.

function App() {      //여기서  function App를 가지고 있고 이것은 html을 반환 할거임.
	return (
		<div>
			<h1>Hello</h1>
		</div>
	)
}

export default App;   //반환하려면 export를 해줘야 App를 가져다 쓸 수 있게 된다.
```

function 다음에 나오는 App을 보면 맨 앞이 대문자인데, 그것은 리액트 사용할 때의 약속이다.

component 이름 정해줄때 맨 앞 글자는 대문자로 하기

index.js

```jsx
import React from "react";
import ReatDOM from "reat-dom:;
import App from "./App";   //위 App.js에서 export했으니 여기서 import하여 사용가능한 것이다.

ReactDOM.render(<App />, document.getElementById("이름")); 리엑트 돔 렌더로 가져온 App.js를
저 이름 엘리먼트로 보내주겠다는 소리.
```

<App /> 

 ㄴ> 이러한 형태를 html과 javascript의 조합으로 jsx라고 부르며 리액트에서만 존재하고 사용할 수 있다. App, 라고 하면 아무일도 일어나지 않으며 <App />라고 해줘야 리액트가 알아듣고 반영해 준다.

(중요한것은 import Reat from "react";를 해줘야 리액트가 jsx가 있는 component를 사용할 수 있게 된다는 것 )

# 내가 새 컴포넌트(Potato라는.js)를 만들었다면, App.js에 jsx 방법으로 추가가능하다.

```jsx
import React from "react";
import Potato from "./Potato";   //꼭 import를 해줘야 사용가능하다.

function App() {
	return(
		<div>
			<h1>Hello</h1>
			<Potato />   // 이렇게 jsx 형식으로 추가해주면 화면에 Potato에 적은 내용들도 포함된다.
		</div>
	)
}
```

# component를 import해서 써도 되지만,

App.js

```jsx
import React from "react";

function Potato() {              //이렇게 App.js 안에 component를 추가하고 바로 사용도 가능.
	return <h1>I like Potato</h1>
}

function App() {  
	return (
		<div>
			<Potato />    //여기에 바로 사용
		</div>
	)
}

export default Potato;
```

# 21번 부터 이어 적기
