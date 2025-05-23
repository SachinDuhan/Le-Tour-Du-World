import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/TouristVerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendTouristVerificationEmail(
    email: string,
    username: string,
    verifyCode: string
): Promise<ApiResponse> {
    try {
        await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: email,
            subject: 'Le Tour Du World | Verification code',
            react: VerificationEmail({ username, otp: verifyCode }),
          });
        return {success: true, message: "Verification email sent successfully"}
    } catch (emailError) {
        console.error("Error sending verification email", emailError);
        return {success: false, message: "Failed to send verification email"}
    }
}