# 빗썸 아카데미 1일차

## react 구조
node_modules
public
    L images folder
    L index.html ->web browser에서 실행 (View) 
src
    L img
    L components
        L js 파일들
    L App.js  -> 처리 1
    L index.js  -> 처리 2
package.json


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
    - class App 상속 부모 =>{ 
        render(){
            return( HTML TAG );
    }   }

- js (App 제외) 생성하는 파일은 단독 실행이 안된다. App.js에 땡겨와서 사용한다.


## {문서파일}.js 사용법

```
import 대표자객체명 from '경로';

function App() { 
    return(
        HTML TAGs
    )
}
```