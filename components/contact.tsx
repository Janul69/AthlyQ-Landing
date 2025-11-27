"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { useState } from "react"

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })
    const [errors, setErrors] = useState<Record<string, string>>({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitSuccess, setSubmitSuccess] = useState(false)

    const validateForm = () => {
        const newErrors: Record<string, string> = {}

        if (!formData.name.trim()) {
            newErrors.name = "Name is required"
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required"
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address"
        }

        if (!formData.subject.trim()) {
            newErrors.subject = "Subject is required"
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!validateForm()) {
            return
        }

        setIsSubmitting(true)

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false)
            setSubmitSuccess(true)
            setFormData({ name: "", email: "", subject: "", message: "" })

            // Reset success message after 5 seconds
            setTimeout(() => setSubmitSuccess(false), 5000)
        }, 1500)
    }

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }))
        }
    }

    return (
        <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
            {/* Gradient Background */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `linear-gradient(to bottom, #ccdbf8, transparent)`,
                }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-block mb-4">
                        <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">
                            ✓ Get in Touch
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Contact <span className="text-[#0f60fa]">Us</span>
                    </h2>
                    <p className="text-lg text-foreground/70 leading-relaxed">
                        Have a question or want to work together? We'd love to hear from you.
                        Send us a message and we'll respond as soon as possible.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                    {/* Contact Information */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl border border-border p-6 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                                <Mail className="text-accent" size={24} />
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                            <p className="text-foreground/70 mb-2">
                                We're here to help and answer any questions
                            </p>
                            <a
                                href="mailto:contact@athliyq.com"
                                className="text-accent hover:underline font-medium"
                            >
                                contact@athliyq.com
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl border border-border p-8 md:p-10 shadow-sm">
                            {submitSuccess && (
                                <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg">
                                    <p className="font-semibold">Message sent successfully! ✓</p>
                                    <p className="text-sm mt-1">
                                        We'll get back to you as soon as possible.
                                    </p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="name" className="text-sm font-semibold">
                                            Full Name *
                                        </Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            type="text"
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={`h-11 ${errors.name ? "border-red-500" : ""
                                                }`}
                                        />
                                        {errors.name && (
                                            <p className="text-sm text-red-500">{errors.name}</p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-sm font-semibold">
                                            Email Address *
                                        </Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="john@example.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`h-11 ${errors.email ? "border-red-500" : ""
                                                }`}
                                        />
                                        {errors.email && (
                                            <p className="text-sm text-red-500">{errors.email}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="subject" className="text-sm font-semibold">
                                        Subject *
                                    </Label>
                                    <Input
                                        id="subject"
                                        name="subject"
                                        type="text"
                                        placeholder="How can we help you?"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className={`h-11 ${errors.subject ? "border-red-500" : ""
                                            }`}
                                    />
                                    {errors.subject && (
                                        <p className="text-sm text-red-500">{errors.subject}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message" className="text-sm font-semibold">
                                        Message *
                                    </Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        placeholder="Tell us more about your inquiry..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={6}
                                        className={errors.message ? "border-red-500" : ""}
                                    />
                                    {errors.message && (
                                        <p className="text-sm text-red-500">{errors.message}</p>
                                    )}
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full md:w-auto rounded-full bg-accent hover:bg-accent/90 text-white px-8 h-12 text-base font-semibold inline-flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="animate-spin">⏳</span>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send size={18} />
                                        </>
                                    )}
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
