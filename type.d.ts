//here we can declare all of the other types

import type { ImageSourcePropType } from "react-native"; // basically we are telling that we are working with images

declare global {
  interface TabIconProps {
    focused: boolean;
    icon: ImageSourcePropType;
  }
}

export { };

