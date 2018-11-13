import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, StyleSheet } from "react-native";
//TouchableOpacity 클릭시 투명도가 높아짐.
import { FontAwesome } from "@expo/vector-icons";


function Button({ iconName, onPress }) {
    return (
      /* onPress={onPress}> 하면 버튼클릭후 손을뗄때 이벤트 발생 */
      /* onPress={onPressOut}> 하면 ??응?? 똑같이 손뗄때 이벤트 발생하네.. */
      <TouchableOpacity onPressOut={onPress}>
        <FontAwesome name={iconName} size={80} color="white" />
      </TouchableOpacity>
    );
}

Button.propTypes = {
    iconName: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
}

export default Button;