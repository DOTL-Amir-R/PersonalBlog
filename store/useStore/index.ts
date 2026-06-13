import { create } from 'zustand'

interface CartItem {
	id: string
	price: number
	name: string
	quantity: number
	category: string
	image: string
	offPrice: number
}

interface CartState {
	items: CartItem[]
	isOpen: boolean

	addItem: (item:Omit<CartItem, 'quantity'>) => void
	removeItem?: (id:string) => void
	updateQuantity?: (id:string, quantity: number) => void
	clearCart?: () => void
	toggleCart?: () => void
	getTotalItems?: () => number
	getTotalPrice?: () => number
}


export const useStore = create<CartState>((set , get) => ({
	items: [],
	isOpen: false,

	addItem: (item) => {
    const { items } = get()
    const existingItem = items.find((i) => i.id === item.id)

    if (existingItem) {
      set({
        items: items.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        ),
      })
    } else {
      set({ items: [...items, { ...item, quantity: 1 }] })
    }
  }
}))