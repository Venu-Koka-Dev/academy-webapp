"use server";  
import { Resend } from 'resend';
import AirbnbReviewEmail from "@/components/EmailTemplate";
import { z } from "zod";

// For send email using Contact form  
export const send = async (prevState: { success:boolean; error: boolean }, formData: FormData) => {   
    // Server side validation - using Zod
    console.log(formData.get("email"));
    console.log(formData.get("topic"));
    console.log(formData.get("subject"));
    console.log(formData.get("message"));

    // Convert FormData entries to an object
    const fData = Object.fromEntries(formData.entries()); //{ email: "venu@gmail.com", topic: "Training & Admissions", subject: "A main", message: "Hello " }

    // Define schema structure for validation  
    const ContactFormSchema = z.object({
        email: z.string().email(),
        topic: z.enum(["Trainings & Admissions", "Doubts & Queries"]),
        subject: z.string().min(25, "Minimum 25 characters are required").max(100, "Maximum 100 charaters are allowed"),
        message: z.string().min(50).max(500),
    });

    // Validate if form data received is according to the Zod schema validator
    const result = ContactFormSchema.safeParse(fData);  
    // { success: true, error: "Appropriate error message from Zod or Custom message"}
    
    // If validation fails
    if (!result.success) {
        // Handle validation errors
        return {
          success: false,
          errors: result.error.format(),
        };
    }
    
    // If validation succeeds, access the parsed data
    // const validData = result.fData;
    
    // Continue with your logic, e.g., saving to the database
    //return { success: true, data: validData, };

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        const { data } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'simmy.karanam1111@gmail.com',
            subject: fData.topic as string,
            react: AirbnbReviewEmail({ academyLogo: "/logo-dark.svg", authorName: fData.email as string, authorImage: "https://images.pexels.com/photos/29233081/pexels-photo-29233081/free-photo-of-young-woman-writing-in-cozy-home-office.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", reviewText: fData.subject as string, messageText: fData.message as string }),
        });   
        console.log("Sent email");                        
    } catch (error) {     
        console.log(error);   
    }

    return { success: true, data: "Email sent!!" };
}

