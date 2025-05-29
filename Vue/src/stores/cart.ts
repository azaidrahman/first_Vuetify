import { defineStore } from 'pinia';
import { useProductStore } from './product'

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [],
    })

    getters: {
        cartTotal: (state) => {
            const productStore = useProductStore()
            return state.items.reduce((total,item) => {
                const product = productStore.products.fin(
                    (p) => p.id === item.productId
                )
                return total + (product?.price || 0) * item.quantity
            }, 0)
            
        },
    },

    actions: {
        addToCart(productId) {
            const productStore = useProductStore()
            const product = productStore.products.find((p) => p.id === productId)

            if(!product || product.stock === 0) {
                throw new Error('Product not available')
            }

            const existingItem = this.items.find(
                (item) => item.productId === productId
            )

            if(existingItem) {
                existingItem.quantity += 1
            }else{
                this.items.push({productId,quantity: 1})
            }
        }
    }
})
