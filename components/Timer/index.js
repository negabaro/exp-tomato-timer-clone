import { connect } from 'react-redux';
import Timer from './presenter';


//스테이트에서 데이터를 가져옴
function mapStateToProps22(state) {
    const { isPlaying, elapsedTime, timerDuration } = state;
    return {
      isPlaying,
      elapsedTime,
      timerDuration
    };
}

export default connect(mapStateToProps22)(Timer);