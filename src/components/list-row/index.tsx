import React, { useMemo } from 'react'
import { Image, Switch, Text, View } from '@tarojs/components'
import { CommonEvent, ITouchEvent, CommonEventFunction } from '@tarojs/components/types/common'
import classNames from 'classnames'

interface ListRowProps {
  title?: string
  note?: string
  thumb?: string
  extraText?: string
  switchColor?: string
  disabled?: boolean
  isSwitch?: boolean
  bordered?: boolean
  checked?: boolean
  arrow?: 'up' | 'down' | 'right'
  className?: string
  onClick?: CommonEventFunction
  onSwitchChange?: CommonEventFunction
}

export default function ListRow ({
  title = '',
  note = '',
  thumb = '',
  extraText = '',
  arrow,
  disabled = false,
  isSwitch = false,
  checked = false,
  switchColor = '#6190E8',
  bordered = true,
  className,
  onClick,
  onSwitchChange
}: ListRowProps) {
  const propsTitle = String(title)
  const propsExtraText = String(extraText)

  const rootClass = useMemo(() => classNames(className, 'ui-list-row', {
    'ui-list-row--thumb': thumb,
    'ui-list-row--disabled': disabled,
    'ui-list-row--no-border': !bordered
  }), [bordered, className, disabled, thumb])

  const handleClick = (event: ITouchEvent): void => {
    if (typeof onClick === 'function' && !disabled) {
      onClick(event)
    }
  }

  const handleSwitchClick = (e: CommonEvent): void => {
    e.stopPropagation()
  }

  const handleSwitchChange = (event: CommonEvent): void => {
    if (typeof onSwitchChange === 'function' && !disabled) {
      onSwitchChange(event)
    }
  }

  return (
    <View className={rootClass} onClick={handleClick}>
      {thumb && (
        <View className='ui-list-row-thumb item-thumb'>
          <Image
            className='item-thumb__info'
            mode='scaleToFill'
            src={thumb}
          />
        </View>
      )}
      <View className='ui-list-row-content item-content'>
        <View className='item-content__info'>
          <View className='item-content__info-title'>{propsTitle}</View>
          {note && <View className='item-content__info-note'>{note}</View>}
        </View>
      </View>
      <View className='ui-list-row-extra item-extra'>
        {propsExtraText && <View className='item-extra__info'>{propsExtraText}</View>}
        {isSwitch && !propsExtraText && (
          <View className='item-extra__switch' onClick={handleSwitchClick}>
            <Switch
              color={switchColor}
              disabled={disabled}
              checked={checked}
              onChange={handleSwitchChange}
            />
          </View>
        )}
        {arrow && (
          <View className='item-extra__icon'>
            <Text
              className={`at-icon item-extra__icon-arrow at-icon-chevron-${arrow}`}
            />
          </View>
        )}
      </View>
    </View>
  )
}
