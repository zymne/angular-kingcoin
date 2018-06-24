
import { Country } from './Country'

export class Item {
    id: number
    title: string
    price: number    
    country: Country
    category: string
    images: string[]
    issueYear: number
    published: boolean
}