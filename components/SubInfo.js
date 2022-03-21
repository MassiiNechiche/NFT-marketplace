import React from 'react'
import { View, Image, Text } from 'react-native'

import { SIZES, FONTS, COLORS, SHADOWS, assets } from '../constants'

export const NFTTitle = ({ title, subTitle, titleSize, subTitleSize }) => {
    return (
        <View>
            <Text
                style={{
                    fontFamily: FONTS.semiBold,
                    fontSize: titleSize,
                    color: COLORS.fontLight,
                }}
            >
                {title}
            </Text>
            <Text
                style={{
                    fontFamily: FONTS.regular,
                    fontSize: subTitleSize,
                    color: COLORS.fontLight,
                }}
            >
                by {subTitle}
            </Text>
        </View>
    )
}

export const EthPrice = ({ price }) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text
                style={{
                    fontFamily: FONTS.medium,
                    fontSize: SIZES.font,
                    color: COLORS.fontLight,
                }}
            >
                {price} ETH
            </Text>
        </View>
    )
}

const ImageCmp = ({ imgUrl, index }) => {
    return (
        <Image
            source={imgUrl}
            resizeMode="contain"
            style={{
                width: 48,
                height: 48,
                marginLeft: index === 0 ? 0 : -SIZES.font,
            }}
        />
    )
}

export const People = () => {
    return (
        <View style={{ flexDirection: 'row' }}>
            {[assets.person02, assets.person03, assets.person04].map(
                (imgUrl, index) => (
                    <ImageCmp
                        imgUrl={imgUrl}
                        index={index}
                        key={`People-${index}`}
                    />
                )
            )}
        </View>
    )
}

export const SubInfo = () => {
    return (
        <View
            style={{
                width: '100%',
                paddingHorizontal: SIZES.font,
                marginTop: -SIZES.extraLarge,
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}
        >
            <People />
        </View>
    )
}
