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

  const langHeader = headers.get('accept-language')?.toLowerCase() || DEFAULT_LANG
  const detectedLang = langHeader.includes('es') ? 'es' : DEFAULT_LANG

  url.pathname = `/${detectedLang}${pathname}`
  const response = NextResponse.redirect(url)
  response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
  return response
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|_next/data|_vercel|favicon.ico$|.*\\.(?:svg|webp|woff2|pdf)$).*)'
  ]
}