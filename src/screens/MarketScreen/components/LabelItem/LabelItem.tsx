import React from 'react';
import { View } from 'react-native';
import { useStyleLabelItem } from './LabelItemStyles';
import { LabelItemProps } from './types';
import { Text } from '@rneui/themed';
import { Button } from '@rneui/base';

const LabelItem = ({ title, isSelected, onPress }: LabelItemProps) => {
  const { styles } = useStyleLabelItem();

  return (
    <Button
      onPress={() => onPress(title)}
      title={title}
      titleStyle={
        isSelected ? styles.btnLabelIsSelected : styles.btnLabeNonSelected
      }
      buttonStyle={isSelected ? styles.container : styles.containerNonSelected}
    />
  );
};

export default LabelItem;
