import React from 'react';
import { View, Text, Pressable, StyleSheet ,TouchableOpacity } from 'react-native';
import Svg, { Defs, Rect, LinearGradient, Stop } from 'react-native-svg';
import { Colors } from '@src/theme';


const MyButton = (props) => {
  const {color , type  , text , onPress , variant } = props;
  let buttonStyle = styles.fillButton;
  return (
    <TouchableOpacity onPress={onPress} style={styles.defaultbutton}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );

  
};
//  <View
//       style={[
//         styles.button,
//         variant === 'outline' ? styles.outline : null,
//       ]}
//     >
//       <Pressable onPress={onPress} style={styles.pressable}>
//         {variant === 'gradient' ? (
//           <Svg height={60} width={289} style={StyleSheet.absoluteFillObject} preserveAspectRatio="xMidYMid meet">
//             <Defs>
//               <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
//                 <Stop offset="0" stopColor={FROM_COLOR} />
//                 <Stop offset="1" stopColor={TO_COLOR} />
//               </LinearGradient>
//             </Defs>
//             <Rect width="100%" height="100%" fill="url(#grad)" />
//           </Svg>
//         ) : null}
//         <Text style={styles.text}>{text}</Text>
//       </Pressable>
//     </View>

export default MyButton;
const styles = StyleSheet.create({
  defaultbutton :{
    backgroundColor: Colors.BOTTLE_GREEN,
    height: 40,
    width: 400,
    borderRadius: 999,
  },
  defaulttext :{

  },

  fillButton: {
    backgroundColor: <MyButton className="color">   </MyButton>,
    borderRadius: 999,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 289,
    height: 60,
  },
  button: {
    width: 289,
    height: 60,
    borderRadius: 999,
    overflow: 'hidden',
  },
  pressable: {
    width: '100%',
    height: '100%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outline: {
    borderRadius: 99,
    borderWidth: 2,
    borderColor: Colors.BOTTLE_GREEN,
  },
  text: {
    textTransform: 'uppercase',
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold', // fontWeight should be a string
    fontSize: 18,
  },
});