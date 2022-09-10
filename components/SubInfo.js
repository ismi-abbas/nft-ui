import { View, Image, Text } from "react-native";

import { SIZES, FONTS, COLORS, SHADOWS, assets } from "../constants";

export const NFTTitle = ({ title, subTitle, titleSize, subTitleSize }) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: titleSize,
          color: COLORS.primary,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: subTitleSize,
          color: COLORS.primary,
        }}
      >
        by {subTitle}
      </Text>
    </View>
  );
};

export const EthPrice = () => {
  return (
    <View>
      <Text>Teset</Text>
    </View>
  );
};

export const ImageCmp = () => {
  return (
    <View>
      <Text>Test</Text>
    </View>
  );
};
