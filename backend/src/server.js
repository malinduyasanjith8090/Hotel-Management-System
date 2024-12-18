import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import foodRouter from './routers/food.router.js';
import userRouter from './routers/user.router.js';
import orderRouter from './routers/order.router.js';
import uploadRouter from './routers/upload.router.js';
import eventsRoute from './routers/eventsRoute.js';
import eventPlannerRoute from './routers/eventPlannerRoute.js';
import istockRouter from './routers/InventorySockRoute.js'
import iorderRouter from './routers/InventoryOrderRoute.js'
import fincome from './routers/FinanceIncomeState.js';
import fpettycash from './routers/FinancePettyCash.js'
import SupRouter from './routers/supply.js'
import SupManRouter from './routers/manager.js'
import customerRouter from './routers/customers.js'
import roomRouter from './routers/rooms.js'


import { dbconnect } from './config/database.config.js';
dbconnect();

const app = express();
app.use(express.json());

app.use(
    cors({
        credentials: true,
        origin: ['http://localhost:3000'],
    })
);

app.use('/api/foods', foodRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);
app.use('/api/upload', uploadRouter);

// event management
app.use('/events', eventsRoute);
app.use('/eventplanners', eventPlannerRoute);

// inventory management
app.use('/api/inventory/stocks', istockRouter);
app.use('/api/inventory/orders', iorderRouter);

// finance management
app.use("/finance/income", fincome);
app.use("/finance/pettycash", fpettycash);

// Supply Manegement
app.use("/api/supply", SupRouter);
app.use("/api/managers", SupManRouter);

// Customer Management
app.use("/customer", customerRouter);
app.use("/room", roomRouter);

// employee
import EmployeeRouter from './routers/Employees.js';
app.use('/employee', EmployeeRouter);

// leave
import LeaveRouter from './routers/Leaves.js';
app.use('/leave', LeaveRouter);

// Bar
import itemRoutes from './routers/itemRoutes.js'
import userRoutes from './routers/userRoutes.js'
import billsRoutes from './routers/billsRoutes.js'

app.use("/api/items", itemRoutes);
app.use("/api/users", userRoutes);
app.use("/api/bills", billsRoutes);




const PORT = 5000;
app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});