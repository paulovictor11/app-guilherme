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

    const doesUserExists = await prisma.user.findFirst({
        where: {
            user: req.body.user,
        },
    });
    if (!doesUserExists) {
        return res
            .status(404)
            .json({ message: "Registro não encontrado no banco." });
    }

    if (doesUserExists.password != req.body.password) {
        return res.status(400).json({ message: "Senha incorreta." });
    }

    return res.status(200).json({});
}
