import { connect } from 'react-redux';
import Timer from './presenter';
import { bindActionCreators } from 'redux';

import { actionCreators as TomatoActions } from '../../reducer';

//스테이트에서 데이터를 가져옴
function mapStateToProps22(state) {
    const { isPlaying, elapsedTime, timerDuration } = state;
    return {
      isPlaying,
      elapsedTime,
      timerDuration
    };
}

//dispatch는 액션을 리듀서로 보내줌
function mapDispatchToProps22(dispatch) {
  //디스패치와 액션을 bindActionCreators를 이용해서 묶어줌
  return {
    startTimer22: bindActionCreators(TomatoActions.startTimer, dispatch),
    restartTimer22: bindActionCreators(TomatoActions.restartTimer, dispatch),
    stopTimer22: bindActionCreators(TomatoActions.stopTimer, dispatch)
  };
}

export default connect(mapStateToProps22,mapDispatchToProps22)(Timer);