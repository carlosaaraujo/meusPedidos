import { Request, Response } from "express";
import { io } from "../../..";

import { Order } from "../../models/Order";

export async function createOrder(req: Request, res: Response) {
  try {
    const { table, products } = req.body;

    const order = await Order.create({ table, products });
    const oderDetails = await order.populate("products.product");

    io.emit("orders@new", oderDetails);
    res.status(201).json(order);
  } catch (error) {
    console.error(error);

    res.sendStatus(500);
  }
}
