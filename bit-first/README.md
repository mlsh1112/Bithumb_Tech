# 빗썸 아카데미 1일차

## react 구조
node_modules
public
    L images folder
    L index.html ->web browser에서 실행 (View) 
src
    L img
    L App.js  -> 처리 1
    L index.js  -> 처리 2
package.json


## react 흐름
App.js(웹 동작 처리) -> index.js(웹 View를 가져옴) -> index.html (View/웹 브라우저에 뿌려주는 역할)

## react 특징
- jsx -> html 테그로 보지 않는다. 테그를 **열고 닫고**를 확실하게 해야한다!
- public 이 기본 접근 영역이다. -> img 테그를 '../public/images/--" 가 안먹는 이유