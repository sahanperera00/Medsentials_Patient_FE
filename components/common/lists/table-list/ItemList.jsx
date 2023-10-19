import React from 'react';
import { View, FlatList, Text, Platform } from 'react-native';
import tw from 'twrnc';
import { formatter } from '../../../../utils/formatter';

const ItemList = ({ items , total}) => {
  console.log("Items in ItemList:", items);
  return (
    <View style={tw` ml-5`}>
      <View style={flexDirection='row'}>
        <Text style={tw`text-xl`}>Item Requisition</Text>
        <Text style={tw`text-sm mb-10 text-gray-500`}>Estimated Total: {formatter(total ? total : 2000)}</Text>
      </View>
      <View style={[tw` mr-8 rounded-lg overflow-hidden bg-gray-200`,Platform.OS === 'android' && {elevation: 1}]}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#e8ded9', padding: 10 }}>
          <Text style={tw`text-base font-semibold`}>Item Name</Text>
          <Text style={tw`text-base font-semibold`}>Quantity</Text>
          <Text style={tw`text-base font-semibold`}>Price</Text>
        </View>
        <FlatList
          data={items}
          renderItem={({ item }) => {
            return (
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 0, borderBottomColor: '#AAAAA', padding: 14, alignItems: 'left'}}>
                <Text style={tw`text-base`}>{item?.name}</Text>
                <Text style={tw`text-base ml-15`}>{item?.quantity}</Text>
                <Text style={tw`text-base`}>{formatter(item?.price)}</Text>
              </View>
            )
          }}
        />
      </View>
      <View style={tw`mt-5 `}>
            <Text style={tw`text-red-500 font-bold text-base`}>Disclaimer</Text>
            <Text style={tw`text-gray-500 text-align:center text-sm text-justify pr-10`}>These values do not act as final values agreed by the suppliers for they are values derived from the contracts.
                These values could change according to post contract negotiations.
            </Text>
        </View>
    </View>
  )
}

export default ItemList;
