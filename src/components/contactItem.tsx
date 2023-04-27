import { View, Text } from 'react-native'
import React from 'react'
import { Phone } from 'phosphor-react-native'
import tw from '../../tailwind'

type ContactItemProps = {
  name: string;
  phone: string;
}

export function ContactItem(props: ContactItemProps) {
  return (
    <View style={tw`flex flex-col w-full p-2 justify-center`}>
         <Text style = {tw` font-title text-lg w-full bg-primary-std text-slate-50 text-center rounded-t `}>  {props.name}</Text>
         <Text style = {tw` font-display text-xs w-full bg-primary-600 rounded-b  text-center text-slate-50 `}> <Phone color="#F8FAFC" weight="fill" size={8}/> {props.phone}</Text>
    </View>
  )
}