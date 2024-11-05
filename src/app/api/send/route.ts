import GithubAccessTokenEmail from "@/components/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from 'resend';

// http:localhost:3000/api/send  GET  
export async function GET() {
    const resend = new Resend(process.env.RESEND_API_KEY);    

    try {
        const { data } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'simmy.karanam1111@gmail.com',
            subject: 'Hello World',
            react: GithubAccessTokenEmail({ username: "venu212" }),
        });    

        return NextResponse.json({ data });
    } catch (error) {
        return NextResponse.json({ error });
    }
}

// http:localhost:3000/api/send  POST  
// export async function POST() {

// }