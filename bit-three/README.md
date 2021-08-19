# 빗썸 아카데미 3일차

## state & props
- state나 props에 있는 것은 주로 const로 변수 지정
- props, state를 상수라고 생각함
- this.을 생략하면 안됨(this는 가져다가 사용할 경우에 this로 접근한다.)
- this는 생성자에는 적음
- props 는 자체적으로 초기값을 가질 수 있고 값을 전달할 수 있음 / 값을 변경할 수 없음
- state 값을 변경 (입력추가 / 수정 / 삭제)

## state
내부적으로 값을 변경할 경우 / 초기화 가능
- 값을 입력하기 : setState(대상)
- 값을 가져오기 : getState(대상)

## props
- 여러 항목을 모아서 값 전달 가능 또는 초기화 가능
- props에는 set대상 적용이 안됨

## 화살표 함수
- 기본 문법 : 변수이름 = ( 파라미터 ) =>{ 구현 }

## 생성자 
constructor(props){<br/>
&nbsp; &nbsp; super(props);<br/>
&nbsp; &nbsp; this.state={}<br/>
}<br/>