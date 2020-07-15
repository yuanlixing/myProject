<template>
    <div></div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useMousePosition } from '@/components/hooks/QustionHook'
export default defineComponent({
  name: 'Question',
  setup () {
    const { x, y } = useMousePosition()
    console.log('🐻', x)

    const increment = () => {
      x.value += 2
    }

    return {
      x,
      increment
    }
  }
})
</script>
