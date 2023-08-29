import React, { useMemo } from 'react';
import { Text } from 'react-native';
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import {  GestureDetector } from "react-native-gesture-handler";

import { styles } from './sortable-block-item-style';



const SortableBlockItemView = ({
    item,
    index,
    blockWidth,
    blockHeight,
    xPosition,
    yPosition,
    panGesture,
    isScrolling
  }: ISortableBlockItemControllerProps) => {
   
  
    // reanimated style object for pointer gesture   
    const pointerAnimatedStyle = useAnimatedStyle(() => ({
      transform: [{
        translateX: xPosition?.value || 0,
      }, {
        translateY: yPosition?.value || 0
      }],
      zIndex: isScrolling.value ? 2 : 1
    }));

    const style = useMemo(() => styles({ blockHeight, blockWidth }), [])
  
    return <GestureDetector key={index} gesture={panGesture}>
      <Animated.View key={index} style={[style.blockItem, { backgroundColor: item.color }, pointerAnimatedStyle]}>
        <Text style={style.blockText}>{item.id}</Text>
      </Animated.View>
    </GestureDetector>
}

export default SortableBlockItemView