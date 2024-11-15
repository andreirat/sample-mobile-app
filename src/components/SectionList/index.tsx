import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import { SectionListProps } from './types';
import stylesheet from './styles';

const SectionList = ({ tabs, selectedTab, onTabSelect }: SectionListProps) => {
  const { styles } = useStyles(stylesheet);

  const renderItem = ({ item }: { item: string }) => (
    <TouchableOpacity onPress={() => onTabSelect(item)} style={styles.tabContainer}>
      <View style={[styles.tab, selectedTab === item && styles.selectedTab]}>
        <Text style={[styles.tabText, selectedTab === item && styles.selectedTabText]}>{item}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={tabs}
      renderItem={renderItem}
      keyExtractor={item => item}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default SectionList;
