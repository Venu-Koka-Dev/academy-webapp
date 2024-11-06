"use server";  
import { Resend } from 'resend';
import AirbnbReviewEmail from "@/components/EmailTemplate";

// For send email using Contact form  
export const send = async (formData: FormData) => {   
    console.log(formData.get("email"));
    console.log(formData.get("topic"));
    console.log(formData.get("subject"));
    console.log(formData.get("message"));

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        const { data } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'simmy.karanam1111@gmail.com',
            subject: formData.get("subject") as string,
            react: AirbnbReviewEmail({ academyLogo: "/logo-dark.svg", authorName: "nidhi212", authorImage: "https://images.pexels.com/photos/29233081/pexels-photo-29233081/free-photo-of-young-woman-writing-in-cozy-home-office.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", reviewText: "Just saying Hi!!"}),
        });   
        console.log("Sent email");                        
    } catch (error) {     
        console.log(error);   
    }
}

// Server action  - to be written in Client Component
//   const send = async (formData: FormData) => {
//     "use server";    
//     //console.log(formData.get("email"));
//     const resend = new Resend(process.env.RESEND_API_KEY);
//     try {
//         const { data } = await resend.emails.send({
//             from: 'onboarding@resend.dev',
//             to: 'venu.kokaz@gmail.com',
//             subject: formData.get("subject") as string,
//             react: GithubAccessTokenEmail({ username: "venu212" }),
//         });   
//         console.log("Sent email");                        
//     } catch (error) {     
//         console.log(error);   
//     }
//   }