# 빗썸 4일차 수업

## export default keyword
- 다른 문서에서 참조할 때 필요

## react life-cycle
 - constructor (초기 생성)
    - 자동 호출이 된다.
    - 컴포넌트 생성자 함수로 컴포넌트가 새로 만들어질 때 마다 호출됨
    ``` constructor(){super();} ```
    생성자 안 state 선언할 때 this 사용

 - componentWillMount() (초기 생성)
    - 컴포넌트가 화면에 나타나기 직전에 호출되는 API
    ``` componentWillMount(){자동호출}``` 
 - componentDidMount() (초기 생성)
    - 컴포넌트가 화면에 나타난 후 호출되는 API
    ``` componentDidMount(){자동호출}``` 

 - shouldComponentUpdate(nextProps, nextState) (업데이트)
    - 갱신 / 수정 / 조회
    - 컴포넌트 최적화 작업에서 유용한 API
 - componentDidUpdate(nextProps, nextState)
    - 갱신 / 수정 / 조회
    - shouldComponentUpdate가 true로 반환했을 경우 호출
 - componentDidCatch(err,info)
    - render 함수 안에서 에러가 발생될 때 호출
    
## SPA (single page applicatioin)
    - life-cycle
        변경된 형태만 JSON 형태로 받게 된다.
        서버가 데이터를 JSON 형태로 전송
    - View는 하나이고 Component로 제작
    - 장점
        - 안정적인 속도
    - 단점
        - 첫 로드 속도가 느림
    - 관련 기술
        - Angular / Vue / React

## Virtual DOM
 - 기존은 MVVM MVC ,,, 다양한 디자인 패턴
    - 이벤트로 데이터가 변해 실제 브라우저가 DOM 을 넣음
 - 서비스 로직의 양방향 바인딩을 통해 서로 모델의 값이 동기화
 - 변경된 부분만 업데이트

## bind 함수
- event 함수 뒤에 bind 함수를 붙였는데 없어도 오류는 안나지만 이벤트가 일어나지 않는다.
- 이벤트 메소드를 연결해주는 중요한 함수이다.
- event와 prop에서 보낸 데이터를 연결해준다.

## e.preventDefault()
- 기본 default 함수가 활성화가 된 함수를 막는다.
- 이동은 되지만 갔다가 되돌아 온다 (SPA 원리 때문에)