import { View, Text } from 'react-native'
import React from 'react'
import tw from '../../tailwind'

type ContactItemProps = {
  name: string;
  phone: string;
}

export function ContactItem(props: ContactItemProps) {
  return (
    <View style={tw`flex flex-col  w-full p-2 justify-center`}>
         <Text style = {tw` font-title text-lg  text-center text-slate-800 `}>  {props.name}</Text>
         <Text style = {tw` font-title text-sm  text-center text-slate-800 `}>  {props.phone}</Text>
    </View>
  )
}