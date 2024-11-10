import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { email } = body
  if (!email) {
    return NextResponse.json({ message: 'email not valid' }, { status: 400 })
  }
  return NextResponse.json({ message: 'created user' })
}