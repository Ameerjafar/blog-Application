import { PrismaClient } from '@prisma/client';
import express from 'express';
const app = express();
const prisma = new PrismaClient();
app.get('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const data = prisma.users.findFirst({
        where: {
            id
        }
    })
    console.log(data.Post);
})
app.put('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const data = prisma.post.findFirst({
        where: {
            userId: id
        }
    });
})
app.listen(3000);
