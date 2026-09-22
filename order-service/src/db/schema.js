import { timestamp, integer, pgTable, varchar } from 'drizzle-orm/pg-core'

export const orders = pgTable("orders", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    userId: varchar().notNull(),
    totalAmount: integer().notNull(),
    status: varchar().notNull(),
    createdAt: timestamp().defaultNow().notNull()
})

export const orderItems = pgTable("order_items", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    order_id: integer().references(() => orders.id),
    product_name: varchar().notNull(),
    qty: integer()
})