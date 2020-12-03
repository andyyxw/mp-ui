import React, { useState } from 'react'
import { View, Text, Input, Button, EventProps, Checkbox, Label, CheckboxGroup } from '@tarojs/components'
import { InputProps } from "@tarojs/components/types/Input"
import { CheckboxGroupProps } from '@tarojs/components/types/CheckboxGroup'
import List from '../layout/list'
import './index.scss'

export default () => {
  return (
    <List />
  )
}

// export default () => {
//   const [newTodoText, setNewTodoText] = useState('')
//   const [todoList, setTodoList] = useState<{
//     text: string
//     isComplete: boolean
//   }[]>([])

//   const handleInput: InputProps['onInput'] = (e) => {
//     setNewTodoText(e.detail.value)
//   }

//   const handleClick: EventProps['onClick'] = () => {
//     setTodoList(p => [...p, {
//       text: newTodoText,
//       isComplete: false
//     }])
//     setNewTodoText('')
//   }

//   const handleCheck: CheckboxGroupProps['onChange'] = (e) => {
//     console.log('ss', e.detail.value);
//     setTodoList(p => p.map(item => ({
//       ...item,
//       isComplete: e.detail.value.includes(item.text)
//     })))
//   }

//   return (
//     <View>
//       <View>
//         <CheckboxGroup onChange={handleCheck}>
//           {todoList.map(item =>
//             <View key={item.text}>
//               <Label className={item.isComplete ? 'complete' : ''}>
//                 <Checkbox value={item.text} />
//                 <Text>{item.text}</Text>
//               </Label>
//             </View>
//           )}
//         </CheckboxGroup>
//       </View>
//       <Input value={newTodoText} onInput={handleInput} />
//       <Button onClick={handleClick} >add todo</Button>
//     </View>
//    )
// }
