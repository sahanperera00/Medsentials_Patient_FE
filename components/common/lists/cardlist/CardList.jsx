import {View, Text, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
import { useRouter } from 'expo-router';
import styles from './cardlist.style';
import tw from 'twrnc';
import SingleCard from '../../item-cards/SingleCard'
import { purchaseRequests } from '../../../../assets/dummy/data';
import SearchBar from '../../search-bar/SearchBar';

const CardList = ()=>{
    const router = useRouter();

    //navigation push
    const handleNavigate = (id)=>{
        router.push(`/ex-card/${id}`);
    }

    return (
        <ScrollView stickyHeaderHiddenOnScroll={[4]}>
            <View>
                {/* SEARCH BAR IMPLEMENTATION */}
                <SearchBar/>
            </View>
                
            {/* FILTER BAR */}
            <View>

            </View>
                {/* CARD LIST */}
            <ScrollView
                style={styles.scrollView}
                showsVerticalScrollIndicator={false}
            >
                <View>
                    <Text style={tw`text-lg my-5 mx-5 font-bold`}>Your Cards</Text>
                </View>
                {purchaseRequests.map((data,index)=>{
                    return(
                        <View
                            key={index}
                            style={tw`bg-white w-95/100 rounded-md shadow-md my-1 mx-auto`}
                        >
                            <SingleCard data={data} handleNavigate={handleNavigate}/>
                        </View>
                    )
                })}
            </ScrollView>
        </ScrollView>
    )
}

export default CardList;