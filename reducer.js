//1. Import
//이 예제에서는 import가 필요없음

//2. Actions
//재생,멈춤,타이머 액션을 정의

const START_TIMER = "START_TIMER";
const RESTART_TIMER ="RESTART_TIMER";
const ADD_SECOND = "ADD_SECOND";

//3. Action Creators 정의 
//액션 크리에이터라고 불리우는 이유는 이와 같이 액션을 만들기때문이야..

function startTimer(){
    return {
        type: START_TIMER
    }
}

function restartTimer(){
    return {
        type: RESTART_TIMER
    }
}

function addSecond() {
    return {
        type: ADD_SECOND
    }
}

//4. Reducer
const TIMER_DURATION = 1500;

const initialState = {
    isPlaying: false,
    elapsedTime: 0,
    timerDuration: TIMER_DURATION
}

//state가없으면 디폴트로 initalState로 시작.
//액션을 보낼때마다 리덕스는 자동으로 리듀서를 실행
//리덕스는 자동으로 액션을 리듀서로 보냄(액션 -> 리듀서)
function reducer22(state = initialState, action){
    switch(action.type){
        case START_TIMER:
            return applyStartTimer(state);
        case RESTART_TIMER:
            return applyRestartTimer(state);
        case ADD_SECOND:
            return applyAddSecond(state);
        default:
            return state;
        
    }
    
}

//5. Reducer Functions

function applyStartTimer(state){
    return {
        ...state,
        isPlaying: true,
        elapsedTime: 0
    }
}

function applyRestartTimer(state){
    return {
        ...state,
        isPlaying: false
    }
}

function applyStopTimer(state){
    return {
        ...state,
        isPlaying: false,
        elapsedTime: 0
    }
}

function applyAddSecond(state) {
    const { elapsedTime } = state;
    //elapsedTime가 TIMER_DURATION(1500)보다 작으면 +1해줌(1초씩 증가)
    if (elapsedTime < TIMER_DURATION ) {
        
      return {
          ...state,
          elapsedTime: state.elapsedTime + 1
      };
      
    } else {
    //elapsedTime가 TIMER_DURATION(1500)보다 크면 타이머 정지   
      
      return {
          ...state,
          isPlaying: false
      };    
    }

}

//6. Export Actions Creators

const actionCreators = {
    startTimer,
    restartTimer,
    addSecond
}

//7. Export Reducer

export default reducer22;