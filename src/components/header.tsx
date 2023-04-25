import { View, Text } from 'react-native'
import React from 'react'
import tw from '../../tailwind'

type HeaderTitle = {
  title: string;
}

export function Header(props: HeaderTitle) {
  return (
    <View>
        <Text style = {tw`font-title text-xl w-full bg-primary-std text-center p-2 text-slate-50`}>{props.title}</Text>
    </View>
  )
}