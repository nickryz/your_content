import { gsap } from 'gsap'
import { onBeforeUnmount, onMounted } from 'vue'

export type GSAPContext = ReturnType<typeof gsap.context> | null

export function useGSAPContext(initFn: () => any) {
  let ctx: GSAPContext = null

  const context = {
    get value(): GSAPContext {
      return ctx
    }
  }

  onMounted((): void => {
    ctx = gsap.context(initFn)
  })

  onBeforeUnmount(() => {
    ctx?.revert()
    ctx = null
  })

  return { context }
}
