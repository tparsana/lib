import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { title, author, stars, description, review } = req.body;
    try {
      const book = await prisma.book.create({
        data: { title, author, stars: Number(stars), description, review },
      });
      res.status(200).json(book);
    } catch (error) {
      res.status(500).json({ error: 'Failed to add book' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
