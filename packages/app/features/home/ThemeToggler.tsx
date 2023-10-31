import { Button, XStack } from '@my/ui'
import { useThemeSetting } from '@tamagui/next-theme'

const ThemeBtn = ({
  theme,
  themeSetting,
  children,
}: {
  theme: string
  themeSetting: ReturnType<typeof useThemeSetting>
  children: string
}) => {
  const active = themeSetting.current === theme
  return (
    <Button onPress={() => themeSetting.set(theme)}>
      <Button.Text textDecorationLine={active ? 'underline' : 'none'}>{children}</Button.Text>
    </Button>
  )
}

export const ThemeToggler = () => {
  const themeSetting = useThemeSetting()

  return (
    <XStack justifyContent="center" gap="$4">
      {(['system', 'light', 'dark', 'dimmed'] as const).map((theme) => (
        <ThemeBtn key={theme} theme={theme} themeSetting={themeSetting}>
          {theme.charAt(0).toUpperCase() + theme.slice(1)}
        </ThemeBtn>
      ))}
    </XStack>
  )
}
