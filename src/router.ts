// Generouted, changes to this file will be overridden
/* eslint-disable */

import { components, hooks, utils } from '@generouted/react-router/client'

export type Path =
  | `/`
  | `/favourites`
  | `/listing/*`
  | `/listing/:id/gallery`
  | `/listing/:id/gallery/:idx`
  | `/listing/:id/others`
  | `/search`
  | `/search/filter`

export type Params = {
  '/listing/*': { '*': string }
  '/listing/:id/gallery': { id: string }
  '/listing/:id/gallery/:idx': { id: string; idx: string }
  '/listing/:id/others': { id: string }
}

export type ModalPath = never

export const { Link, Navigate } = components<Path, Params>()
export const { useModals, useNavigate, useParams } = hooks<Path, Params, ModalPath>()
export const { redirect } = utils<Path, Params>()
