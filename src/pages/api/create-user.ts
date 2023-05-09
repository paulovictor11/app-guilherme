import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== "POST") {
        return res
            .status(405)
            .json({ message: "Apenas o método do tipo POST é aceito" });
    }

    await prisma.user.create({
        data: req.body,
    });

    return res.status(201).json({});
}
