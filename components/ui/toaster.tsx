"use client"

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, status, ...props }) {
        const toastClass = `bg-opacity-90 ${
          status === 'success' ? 'bg-green-500' :
          status === 'warning' ? 'bg-yellow-500' :
          status === 'error' ? 'bg-red-500' : 'transparent'}`;
        
        return (
          <Toast key={id} className={toastClass} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
