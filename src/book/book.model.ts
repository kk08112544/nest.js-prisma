import { Prisma } from "@prisma/client";

export class Book implements Prisma.BookCreateInput{
    title: string;
    description?: string;
}