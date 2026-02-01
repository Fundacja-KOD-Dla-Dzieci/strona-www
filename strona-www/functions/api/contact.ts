// Cloudflare Pages Function dla formularza kontaktowego
// Działa z Cloudflare Pages Functions (serverless)

export async function onRequestPost(context: {
  request: Request;
  env: {
    RESEND_API_KEY?: string;
    CONTACT_EMAIL?: string;
  };
}): Promise<Response> {
  const { request, env } = context;

  try {
    // Pobierz dane z formularza
    const formData = await request.formData();
    
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    // Walidacja
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: 'Wszystkie pola są wymagane' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Nieprawidłowy adres email' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const contactEmail = env.CONTACT_EMAIL || 'kontakt@fundacjakod.pl';
    const subjectLabels: Record<string, string> = {
      'volunteer': 'Wolontariat',
      'donation': 'Darowizna',
      'partnership': 'Współpraca',
      'other': 'Inne',
    };
    const subjectLabel = subjectLabels[subject] || subject;

    // Resend API
    const resendApiKey = env.RESEND_API_KEY;
    
    if (!resendApiKey) {
      return new Response(
        JSON.stringify({
          error: 'Brak konfiguracji email service. Skonfiguruj RESEND_API_KEY w Cloudflare Pages.',
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Wysyłka emaila przez Resend
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Fundacja Kod dla Dzieci <onboarding@resend.dev>',
        to: [contactEmail],
        replyTo: email,
        subject: `[Formularz kontaktowy] ${subjectLabel} - ${name}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="UTF-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #F58320 0%, #8CC63F 50%, #00A7E1 100%); padding: 20px; color: white; border-radius: 8px 8px 0 0; }
              .content { background: #f8f9fa; padding: 20px; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #2E7DB2; }
              .message-box { background: white; padding: 15px; border-left: 4px solid #00A7E1; margin: 15px 0; }
              .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2 style="margin: 0;">Nowa wiadomość z formularza kontaktowego</h2>
              </div>
              <div class="content">
                <div class="field">
                  <span class="label">Od:</span> ${name} (${email})
                </div>
                <div class="field">
                  <span class="label">Temat:</span> ${subjectLabel}
                </div>
                <div class="message-box">
                  <div class="label">Wiadomość:</div>
                  <div>${message.replace(/\n/g, '<br>')}</div>
                </div>
                <div class="footer">
                  <p>Wiadomość wysłana z formularza kontaktowego na stronie <a href="https://fundacjakod.pl">fundacjakod.pl</a></p>
                  <p>Możesz odpowiedzieć bezpośrednio na ten email - odpowiedź trafi do: ${email}</p>
                </div>
              </div>
            </div>
          </body>
          </html>
        `,
        text: `Nowa wiadomość z formularza kontaktowego

Od: ${name} (${email})
Temat: ${subjectLabel}

Wiadomość:
${message}

---
Wysłano z formularza kontaktowego na stronie fundacjakod.pl
Możesz odpowiedzieć bezpośrednio na ten email.`,
      }),
    });

    if (!resendResponse.ok) {
      const errorData = await resendResponse.json().catch(() => ({ message: await resendResponse.text() }));
      console.error('Resend API error:', errorData);
      throw new Error(`Błąd wysyłki emaila: ${errorData.message || 'Unknown error'}`);
    }

    const result = await resendResponse.json();
    console.log('Email sent successfully:', result);

    // Odpowiedź sukcesu
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Wiadomość została wysłana. Dziękujemy!',
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  } catch (error) {
    console.error('Form submission error:', error);
    return new Response(
      JSON.stringify({
        error: 'Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.',
        details: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
