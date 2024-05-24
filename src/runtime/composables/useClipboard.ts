type useClipboardParams = {
  /**
   * The text to copy to the clipboard
   */
  toCopy: string
  /**
   * A callback function that will be called after the text is copied to the clipboard
   */
  callback?: () => void
}

export function useClipboard(params: useClipboardParams): void {
  navigator.clipboard.writeText(params.toCopy).then(() => {
    if (params.callback) {
      params.callback()
    }
  })
}
