import React from 'react'
import {
    View,
    Text,
    SafeAreaView,
    Image,
    StatusBar,
    FlatList,
} from 'react-native'

import { COLORS, SIZES, assets, SHADOWS, FONTS } from '../constants'
import {
    CircleButton,
    RectButton,
    SubInfo,
    DetailsDesc,
    DetailsBid,
    FocusedStatusBar,
} from '../components'

const DetailsHeader = ({ data, navigation }) => (
    <View style={{ width: '100%', height: 373 }}>
        <Image
            source={data.image}
            resizeMode="cover"
            style={{ width: '100%', height: '100%' }}
        />
    </View>
)

const Details = ({ route, navigation }) => {
    const { data } = route.params

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatusBar
                barStyle="white-content"
                backgroundColor="transparent"
                translucent={true}
            />

            <FlatList
                data={data.bids}
                renderItem={({ item }) => <DetailsBid bid={item} />}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: SIZES.extraLarge * 3,
                }}
                ListHeaderComponent={() => (
                    <View
                        style={{
                            backgroundColor: COLORS.light,
                        }}
                    >
                        <DetailsHeader data={data} navigation={navigation} />
                        <SubInfo />
                        <View
                            style={{
                                padding: SIZES.font,
                                backgroundColor: COLORS.light,
                            }}
                        >
                            <DetailsDesc data={data} />

                            {data.bids.length > 0 && (
                                <Text
                                    style={{
                                        fontSize: SIZES.font,
                                        fontFamily: FONTS.semiBold,
                                        color: COLORS.fontLight,
                                    }}
                                >
                                    Current Bid
                                </Text>
                            )}
                        </View>
                    </View>
                )}
            />

            <View
                style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    zIndex: -1,
                }}
            >
                <View
                    style={{
                        height: '100%',
                        backgroundColor: COLORS.light,
                    }}
                />
            </View>
        </SafeAreaView>
    )
}

export default Details
