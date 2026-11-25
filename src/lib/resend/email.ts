import { Resend } from 'resend';

// Check API key
const apiKey = process.env.RESEND_API_KEY;

if (!apiKey) {
  throw new Error('RESEND_API_KEY is not configured');
}

// Check email adress
const emailFrom = process.env.RESEND_FROM_EMAIL;

if (!emailFrom) {
  throw new Error('RESEND_FROM_EMAIL is not configured');
}

// Initialize Resend
const resend = new Resend(apiKey);

export async function sendPasswordResetEmail(email: string, resetUrl: string) {
  const { error } = await resend.emails.send({
    from: `Brewly <${emailFrom}>`,
    to: email,
    subject: 'Reset your Brewly password',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1>Reset your password</h1>
        <p>We received a request to reset your Brewly password.</p>
        <p>Click the button below to choose a new password.</p>

        <a
          href="${resetUrl}"
          style="display: inline-block; padding: 12px 24px; background-color: #8b5e3c; color: white; text-decoration: none; border-radius: 8px;"
        >
          Reset password
        </a>

        <p>If you did not request a password reset, you can ignore this email.</p>
      </div>
    `,
  });

  if (error) {
    throw new Error(`Failed to send password reset email: ${error.message}`);
  }
}
