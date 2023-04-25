import { View, Text } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn';

export function Background({children}) {
    const tailwind = useTailwind();
    
    return (
    <View style = {tailwind("h-full flex items-center bg-primary-100")}>
      {children}
    </View>
  )
}