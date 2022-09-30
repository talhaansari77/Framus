import React from "react";
import ExpoFastImage from "expo-fast-image";

const FastImage = ({ source, style, uniqueKey }) => {
  return <ExpoFastImage cacheKey={uniqueKey} uri={source.uri} style={style} />;
};
// return <ExpoFastImage cacheKey={uniqueKey} uri={source.uri} style={style} />;

export default FastImage;