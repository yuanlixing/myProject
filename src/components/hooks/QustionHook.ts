import { ref, watch } from '@vue/composition-api'
function useMousePosition() {
    const x = ref(0)
    const y = ref(0)
    watch(x, () => {
        console.log('Hooks Setup 外部检测', x.value)
    })

    return {
        x, y
    }
}
export {
    useMousePosition
}