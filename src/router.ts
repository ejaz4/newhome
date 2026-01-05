// Generouted, changes to this file will be overridden
/* eslint-disable */

import { components, hooks, utils } from '@generouted/react-router/client'

export type Path =
  | `/`
  | `/bongus`
  | `/favourites`
  | `/listing/*`
  | `/listing/:id/others`
  | `/search`
  | `/search/filter`

export type Params = {
  '/listing/*': { '*': string }
  '/listing/:id/others': { id: string }
}

export type ModalPath = never

export const { Link, Navigate } = components<Path, Params>()
export const { useModals, useNavigate, useParams } = hooks<Path, Params, ModalPath>()
export const { redirect } = utils<Path, Params>()
