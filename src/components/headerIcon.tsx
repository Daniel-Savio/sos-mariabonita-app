import { View, Text } from 'react-native'
import React, { ReactElement, ReactNode } from 'react'
import tw from '../../tailwind'
import { IconProps, CaretLeft } from 'phosphor-react-native';

type HeaderProps = {
  title: string;
}

export function Header(props: HeaderProps) {
  return (
    <View style={tw`flex flex-row bg-primary-std w-full p-2 justify-around`}>
         <Text style={tw`flex-none w-5`}><CaretLeft color="#FCF2E2" weight="fill" size={24}/></Text>
         <Text style = {tw` font-title text-xl  text-center text-slate-50 `}>  {props.title}</Text>
    </View>
  )
}