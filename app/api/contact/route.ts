import { NextResponse } from 'next/server'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const name = typeof body.name === 'string' ? body.name.trim() : ''
    const email = typeof body.email === 'string' ? body.email.trim() : ''
    const message = typeof body.message === 'string' ? body.message.trim() : ''
    const whatsapp = typeof body.whatsapp === 'string' ? body.whatsapp.trim() : ''
    const service = typeof body.service === 'string' ? body.service.trim() : ''
    const honeypot = typeof body.website === 'string' ? body.website.trim() : ''

    if (honeypot) return NextResponse.json({ ok: true })
    if (name.length < 2 || name.length > 100 || !emailPattern.test(email) || email.length > 254 || whatsapp.length < 7 || whatsapp.length > 30 || !['AI Voice Calling Agent', 'AI Chat Agent', 'Custom Automation', 'Monthly AI Maintenance & Support', 'Not Sure Yet'].includes(service) || message.length < 10 || message.length > 4000) {
      return NextResponse.json({ error: 'Please check your details and message.' }, { status: 400 })
    }

    // Add transactional email delivery here when an email provider is connected.
    console.log('[v0] Contact inquiry received:', { name, email, messageLength: message.length })
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Unable to process inquiry.' }, { status: 400 })
  }
}
