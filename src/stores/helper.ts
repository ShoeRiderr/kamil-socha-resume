import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useHelperStore = defineStore('helper', () => {
  const copyResult = ref(true)

  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(
      () => {
        /* clipboard successfully set */
        copyResult.value = true
      },
      () => {
        /* clipboard write failed */
        copyResult.value = false
      }
    )

    return copyResult.value
  }

  return { copyResult, copyToClipboard }
})
