import { NextResponse, NextRequest } from 'next/server'

const DEFAULT_LANG = 'en'
const SUPPORTED_LANGS = new Set(['en', 'es'])

export function middleware (req: NextRequest) {
  const { nextUrl: url, headers } = req
  const { pathname } = url

  const langPrefix = pathname.split('/')[1]
  if (SUPPORTED_LANGS.has(langPrefix)) {
    return NextResponse.next()
  }

  const acceptLanguage = headers.get('accept-language')?.toLowerCase() || DEFAULT_LANG
  const detectedLang = acceptLanguage.includes('es') ? 'es' : DEFAULT_LANG

  url.pathname = `/${detectedLang}${pathname}`
  const response = NextResponse.redirect(url)
  response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
  response.headers.set('Vary', 'Accept-Language')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')
  return response
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|_next/data|_vercel|favicon.ico$|.*\\.(?:svg|webp|woff2|pdf)$).*)'
  ]
}