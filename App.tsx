import { TamaguiProvider, Theme, YStack, Text } from "tamagui";
import { config } from "./tamagui.config";

export default function App() {
  return (
    <TamaguiProvider config={config}>
      <Theme name="light">
        <YStack
          flexlex={1}
          allgnItemsignItems="center"
          justifyContentstifyContent="center"
          bg="$background"
        >
          <Text
            color="$color"
            fontSize="$6"
            fontWeight="bold"
          >
            Hello World
          </Text>
        </YStack>
      </Theme>
    </TamaguiProvider>
  );
}
