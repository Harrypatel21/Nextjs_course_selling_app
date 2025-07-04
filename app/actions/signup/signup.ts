"use server"

import client from '../../db'; // Importing the Prisma client instance

export default async function signup(username: string, password: string) {

    const user = await client.user.create({
        data: {
            username,
            password
        }
    })
    if (!user) {
        return { message: "User not created", status: 500 };
    }
    return user;
}


