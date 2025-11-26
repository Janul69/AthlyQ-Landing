'use client'

import { ArrowRight, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function ForgotPasswordPage() {
    return (
        <main className="bg-background min-h-screen flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-md">
                {/* Logo/Brand */}
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-foreground">AthletyQ</h1>
                    <p className="mt-2 text-sm text-foreground/70">Reset your password</p>
                </div>

                {/* Forgot Password Form */}
                <div className="rounded-3xl border border-border bg-background p-8 shadow-sm">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-foreground">Forgot password?</h2>
                        <p className="mt-2 text-sm text-foreground/70">
                            No worries, we'll send you reset instructions.
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

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            className="w-full bg-accent hover:bg-accent/90 text-white rounded-xl py-6 text-base font-medium"
                        >
                            Send reset link
                            <ArrowRight className="ml-2 size-5" />
                        </Button>
                    </form>

                    {/* Back to Login */}
                    <div className="mt-6 text-center">
                        <Link
                            href="/login"
                            className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors font-medium"
                        >
                            <ArrowLeft className="size-4" />
                            Back to log in
                        </Link>
                    </div>
                </div>

                {/* Footer Note */}
                <div className="mt-8 text-center">
                    <p className="text-xs text-muted-foreground">
                        Don't have an account?{" "}
                        <Link href="/signup" className="underline hover:text-foreground transition-colors">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    )
}
