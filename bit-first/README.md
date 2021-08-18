# 빗썸 아카데미 1일차

## react 구조
node_modules<br/>
public<br/>
    L images folder<br/>
    L index.html ->web browser에서 실행 (View) <br/>
src<br/>
    L img<br/>
    L components<br/>
        L 사용자 정의 js 파일들<br/>
    L App.js  -> 처리 1<br/>
    L index.js  -> 처리 2<br/>
package.json<br/>


## react 흐름
App.js(웹 동작 처리) -> index.js(public/index.html 문서 연결) -> index.html (View/웹 브라우저에 뿌려주는 역할)

## react 특징
- jsx -> html tag로 보지 않는다. tag를 **열고 닫고**를 확실하게 해야한다!
- public 이 기본 접근 영역이다. -> img tag를 '../public/images/--" 가 안먹는 이유
- html tag는 반드시 **return 내부**에 적어야 한다.
- html tag는 반드시 큰 tag로 감싸야 한다.
- {react 문서파일}.js
    - function App() { return( HTML TAG ); }
    - const App() => { return( HTML TAG ); }
    - class App 상속 부모 =>{ <br/>
        render(){<br/>
            return( HTML TAG );<br/>
    }   }<br/>

- js (App 제외) 생성하는 파일은 단독 실행이 안된다. App.js에 땡겨와서 사용한다.
- react 객체를 화면에 출력 
    ```
    return (<div> {출력} </div>)
    ```
- js 파일은 대문자로 시작
- 파일을 내보낼 때는 export default
- react 변수는 let 키워드 중복 불가 -> 권장
- react 상수는 const 키워드 -> 권장
- var 는 변수를 중복해서 사용할 수 있음 -> 비권장
- react에서 함수 function 함수명 (){} 비권장
- handleAdd = 함수명() => {}  권장


## {문서파일}.js 사용법
```
import 대표자객체명 from '경로';

function App() { 
    return(
        HTML TAGs
    )
}
```

# this / let / const
```
<MyColor kind="cake" price="5700"></MyColor>
```
kind : 속성
속성에 전달자가 속성의 값을 전달함
props -> 변수의 값