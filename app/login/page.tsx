'use client'

import { useState } from "react"
import { ArrowRight, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <main className="bg-background min-h-screen flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-md">
                {/* Logo/Brand */}
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-foreground">AthletyQ</h1>
                    <p className="mt-2 text-sm text-foreground/70">Welcome back</p>
                </div>

                {/* Login Form */}
                <div className="rounded-3xl border border-border bg-background p-8 shadow-sm">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-foreground">Log in</h2>
                        <p className="mt-2 text-sm text-foreground/70">
                            Enter your credentials to access your account
                        </p>
                    </div>

                    <form className="space-y-5">
                        {/* Email Field */}
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                autoComplete="email"
                            />
                        </div>

                        {/* Password Field */}
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password">Password</Label>
                                <Link
                                    href="/forgot-password"
                                    className="text-xs text-accent hover:text-accent/80 transition-colors font-medium"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                            <div className="relative">
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    autoComplete="current-password"
                                    className="pr-10"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    {showPassword ? (
                                        <EyeOff className="size-4" />
                                    ) : (
                                        <Eye className="size-4" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Remember Me */}
                        <div className="flex items-center">
                            <input
                                id="remember"
                                type="checkbox"
                                className="size-4 rounded border-border text-accent focus:ring-accent focus:ring-2 focus:ring-offset-2"
                            />
                            <label htmlFor="remember" className="ml-2 text-sm text-foreground/70">
                                Remember me for 30 days
                            </label>
                        </div>

                        {/* Login Button */}
                        <Button
                            type="submit"
                            className="w-full bg-accent hover:bg-accent/90 text-white rounded-xl py-6 text-base font-medium"
                        >
                            Log in
                            <ArrowRight className="ml-2 size-5" />
                        </Button>
                    </form>

                    {/* Divider */}
                    <div className="my-6 flex items-center gap-4">
                        <div className="h-px flex-1 bg-border" />
                        <span className="text-xs text-muted-foreground">OR</span>
                        <div className="h-px flex-1 bg-border" />
                    </div>

                    {/* Sign Up Link */}
                    <div className="text-center">
                        <p className="text-sm text-foreground/70">
                            Don't have an account?{" "}
                            <Link
                                href="/signup"
                                className="font-medium text-accent hover:text-accent/80 transition-colors"
                            >
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Footer Links */}
                <div className="mt-8 text-center">
                    <p className="text-xs text-muted-foreground">
                        By logging in, you agree to our{" "}
                        <Link href="/terms" className="underline hover:text-foreground transition-colors">
                            Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="underline hover:text-foreground transition-colors">
                            Privacy Policy
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    )
}
