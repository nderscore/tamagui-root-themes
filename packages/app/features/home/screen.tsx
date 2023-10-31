import { Button, H1, Paragraph, Separator, XStack, YStack } from '@my/ui'
import React from 'react'
import { ThemeToggler } from './ThemeToggler'

export function HomeScreen() {
  return (
    <YStack f={1} jc="center" ai="center" p="$4" space>
      <YStack gap="$4" maw={600}>
        <H1 ta="center">Multiple Root Themes</H1>

        <ThemeToggler />

        <Separator />

        <YStack gap="$2">
          <Paragraph>
            This is a demonstration of the issues present when trying to use multiple root themes.
          </Paragraph>
          <Paragraph>Use the buttons above to switch between themes.</Paragraph>
        </YStack>

        <Separator />

        <XStack gap="$4" jc="center">
          <Button onPress={() => document.body.classList.add('t_dimmed')}>
            Hack Dimmed Theme into Body
          </Button>
          <Button onPress={() => document.body.classList.remove('t_dimmed')}>Unhack</Button>
        </XStack>
      </YStack>
    </YStack>
  )
}
