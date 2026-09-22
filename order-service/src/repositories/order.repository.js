import { eq, inArray } from 'drizzle-orm'
import { db } from '../db/index.js'
import { orders, orderItems } from '../db/schema.js'

// b. Implement the following endpoints: 
// POST /orders (create order, read userId from JWT), 
// GET /orders (return only the authenticated user's orders),
// GET /orders/:id (return 403 if order does not belong to the requesting user), 
// PATCH /orders/:id (update status, owner or admin only).

// export const createOrder = async (orderData, orderItemsData) => {
//     console.log('order service create order repo reached')
//     const [ order ] = await db.insert(orders).values(orderData).returning()   
//     const orderItem = await db.insert(orderItems).values(
//         orderItemsData.map(ele => ({
//             order_id: order.id,
//             product_name: ele.product_name,
//             qty: ele.qty
//         }))
//     ).returning()
//     // const orderItem = await db.insert(orderItems).values({order_id: order.id, ...orderItemsData}) 

//     console.log('order service create order repo', order)
//     console.log('order service create order repo', orderItem)

//     return {
//         order,
//         orderItem
//     }
// }

export const createOrder = async (orderData, orderItemsData) => {
    return await db.transaction(async (tx) => {

        // Insert order and return the entire row
        const [order] = await tx.insert(orders).values(orderData).returning();

        // Insert all items and return every inserted row
        const insertedItems = await tx.insert(orderItems).values(
            orderItemsData.map((ele) => ({
                order_id: order.id,
                product_name: ele.product_name,
                qty: ele.qty
            }))
        ).returning();

        // Return both
        return {
            order,
            items: insertedItems
        };
    });
};

export const getOrder = async (userId) => {
    const order = await db.select().from(orders).where(eq(orders.userId, userId))
    // const orderItem = await db.select().from(orderItems).where(eq(orderItems.order_id, orders.id))
    const orderItem = await db.select().from(orderItems).where(inArray(orderItems.order_id, order.map(order => order.id)))

    return {
        order,
        orderItem
    }
}

export const updateOrderStatus = async (orderId, newStatus) => {
    console.log('order service update order repo reached')
    const order = await db.update(orders).set({ status: newStatus }).where(eq(orders.id, orderId)).returning()

    console.log(order)

    return order
}