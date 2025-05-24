import React from 'react'
import { Toaster, ToasterProps } from 'react-hot-toast'

const VISIBLE_TOASTS_AMOUNT = 4
const VIEWPORT_OFFSET = '32px'
const TOAST_LIFETIME = 4000
const GAP = 14

export type ToastProps = ToasterProps & {
  className?: string
}

// const Toast: React.FC<ToastProps> = ({
//   className = '',
//   invert = false,
//   // TODO FIX WITH APP CONFIG
//   // position = appConfig.mockline?.toast?.position ?? 'top-center',
//   hotkey = ['altKey', 'KeyT'],
//   expand = false,
//   closeButton = false,
//   offset = VIEWPORT_OFFSET,
//   theme = 'light',
//   richColors = false,
//   // duration = appConfig.mockline?.toast?.duration ?? TOAST_LIFETIME,
//   visibleToasts = VISIBLE_TOASTS_AMOUNT,
//   toastOptions = {
//     style: {
//       color: 'var(--color-text-primary)',
//       borderColor: 'var(--color-border-primary)',
//       backgroundColor: 'var(--color-bg-secondary)',
//     },
//   },
//   dir = 'auto',
//   gap = GAP,
//   style = {},
// }) => {
//   return (
//     <Toaster
//       // position={position}
//       invert={invert}
//       hotkey={hotkey}
//       expand={expand}
//       closeButton={closeButton}
//       className={className}
//       offset={offset}
//       theme={theme}
//       richColors={richColors}
//       // duration={duration}
//       visibleToasts={visibleToasts}
//       toastOptions={toastOptions}
//       dir={dir}
//       gap={gap}
//       style={style}
//     />
//   )
// }

// export default Toast
