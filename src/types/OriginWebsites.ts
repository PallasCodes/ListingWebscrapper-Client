import { Catalog } from './Catalog'

export enum OriginWebsites {
  AMAZON = 'amazon',
  MERCADO_LIBRE = 'mercadoLibre',
}

export const OriginWebsitesCat: Catalog[] = [
  { text: 'Amazon', value: 'amazon' },
  { text: 'Mercado Libre', value: 'mercadoLibre' },
]
