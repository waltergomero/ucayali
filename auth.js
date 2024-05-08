import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import {fetchUserByEmail} from '@/server-actions/user-actions'
import bcryptjs from 'bcryptjs';
import { z } from 'zod';


export const BASE_PATH = "/api/auth";

const authOptions = {
  providers: [
    Credentials({
        name: "Credentials",
        credentials: {
          email: { label: "Email:", type: "email", placeholder: "jane.doe@email.com" },
          password: { label: "Password:", type: "password" },
        },
        async authorize(credentials) {
          const parsedCredentials = z
            .object({ email: z.string().email(), password: z.string().min(6) })
            .safeParse(credentials);

            if (parsedCredentials.success) {
                const { email, password } = parsedCredentials.data;
      
                const user = await fetchUserByEmail(email); 
                if (!user) return null;
      
                const passwordsMatch = await bcryptjs.compare(password, user.password);

                if (passwordsMatch) 
                 return user? { id: user._id, first_name: user.first_name, last_name: user.last_name, 
                   email: user.email, isAdmin: user.isAdmin, isActive: user.isActive }
                : null;
              }
                console.log('Invalid credentials');
              return null;
        },
      }),
],
basePath: BASE_PATH,
secret: process.env.NEXTAUTH_SECRET,
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
