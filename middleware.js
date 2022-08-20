import { NextResponse } from 'next/server'

export function middleware(request) {
    if (request.nextUrl.pathname.startsWith('/legal/privacy')) {
        return NextResponse.redirect(new URL('/', request.url))
    }

    if (request.nextUrl.pathname.startsWith('/dashboard')) {
        if (request.isAuthenticated()) {
            return NextResponse.redirect(new URL('/terms', request.url))
        } else {
            return NextResponse.redirect(new URL('/login', request.url))
        }
    }
}