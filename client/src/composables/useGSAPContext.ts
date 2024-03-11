import { gsap } from 'gsap'
import { onBeforeUnmount, onMounted } from 'vue'

export type GSAPContext = gsap.Context | null

export function useGSAPContext(initFn: (self: gsap.Context) => any) {
  let ctx: GSAPContext = null

  const context = {
    get value(): GSAPContext {
      return ctx
    }
  }

  onMounted((): void => {
    ctx = gsap.context((self: gsap.Context) => {
      initFn(self)
    })
  })

  onBeforeUnmount(() => {
    ctx?.revert()
    ctx = null
  })

  return { context }
}
