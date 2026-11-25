import { createContext, useContext } from 'react'
import type { Img } from '../assets/images'

export type ViewerPhoto = { image: Img; alt: string }

export type ViewerRequest = {
  photos: ViewerPhoto[]
  index?: number
  type?: string
  title?: string
  meta?: string
  label?: string
  trigger: HTMLElement | null
}

type ViewerContextValue = { open: (request: ViewerRequest) => void }

export const ViewerContext = createContext<ViewerContextValue>({ open: () => {} })

export const useViewer = () => useContext(ViewerContext)
