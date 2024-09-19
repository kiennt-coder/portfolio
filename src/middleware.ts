import acceptLanguage from 'accept-language'
import { NextResponse, NextRequest } from 'next/server'
import { fallbackLng, languages, cookieName } from '@lib/i18n/settings'

acceptLanguage.languages(languages)

export const config = {
  // matcher: '/:lng*'
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)']
}

export function middleware(req: NextRequest) {
  const { nextUrl, cookies, url, headers } = req;
  const { pathname, search } = nextUrl;

  if (pathname.indexOf('icon') > -1 || pathname.indexOf('chrome') > -1) return NextResponse.next()
  let lng: string | undefined | null
  if (cookies.has(cookieName)) lng = acceptLanguage.get(cookies.get(cookieName)?.value)
  if (!lng) lng = acceptLanguage.get(headers.get('Accept-Language'))
  if (!lng) lng = fallbackLng

  // Redirect if lng in path is not supported
  if (
    !languages.some(loc => pathname.startsWith(`/${loc}`)) &&
    !pathname.startsWith('/_next')
  ) {
    return NextResponse.redirect(new URL(`/${lng}${pathname}${search}`, url))
  }

  if (headers.has('referer')) {
    const refererUrl = new URL(headers.get('referer') || '')
    const lngInReferer = languages.find((l) => refererUrl.pathname.startsWith(`/${l}`))
    const response = NextResponse.next()

    if (lngInReferer) response.cookies.set(cookieName, lngInReferer)

    return response
  }

  return NextResponse.next()
}