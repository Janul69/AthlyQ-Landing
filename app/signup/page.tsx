'use client'

import { useState } from "react"
import { ArrowRight, Users2, Target, Briefcase, CheckCircle2, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"

const actors = [
  {
    id: "athlete",
    name: "Athlete / Talent",
    roleLabel: "Competing or training",
    description:
      "You’re an individual athlete looking for structured coaching, accountability, and a clear performance plan.",
    bullets: [
      "Personal performance profile",
      "Sport, level & competition goals",
      "Schedule, constraints & preferences",
    ],
    icon: Target,
  },
  {
    id: "coach",
    name: "Coach",
    roleLabel: "Delivering coaching",
    description:
      "You coach athletes and need a system to manage clients, programs, and communication.",
    bullets: [
      "Coaching specialties & certifications",
      "Typical roster size & offerings",
      "Scheduling & communication preferences",
    ],
    icon: Users2,
  },
  {
    id: "consultant",
    name: "Consultant",
    roleLabel: "Advising programs",
    description:
      "You consult for athletes, teams, or organizations and need a workspace for projects, deliverables, and performance visibility.",
    bullets: [
      "Primary consulting focus & services",
      "Typical engagement structure",
      "Key stakeholders & reporting needs",
    ],
    icon: Briefcase,
  },
] as const

export default function SignupActorStep() {
  const [step, setStep] = useState(1)
  const [selectedId, setSelectedId] = useState<(typeof actors)[number]["id"]>("athlete")

  const selectedActor = actors.find((a) => a.id === selectedId)!

  return (
    <main className="bg-background">
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Step 1: Actor Selection */}
          {step === 1 && (
            <>
              <div className="mb-10 md:mb-14">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-foreground/60">
                  Step 1 of 4
                </p>
                <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                  Who is this account for?
                </h1>
                <p className="mt-4 max-w-2xl text-base text-foreground/70 md:text-lg">
                  Choose the role that best fits how you’ll use AthletyQ. We’ll ask a few common signup
                  questions next, then tailor Step 2 based on the actor you select here.
                </p>
              </div>

              <div className="mb-10 h-2 w-full overflow-hidden rounded-full bg-border">
                <div className="h-full w-1/3 rounded-full bg-accent" />
              </div>

              <div className="grid gap-8 lg:grid-cols-[minmax(0,3fr),minmax(0,2fr)]">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  {actors.map((actor) => {
                    const Icon = actor.icon
                    const isSelected = actor.id === selectedId

                    return (
                      <button
                        key={actor.id}
                        type="button"
                        onClick={() => setSelectedId(actor.id)}
                        className={`relative flex h-full flex-col rounded-3xl border p-6 text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background
                          ${isSelected
                            ? "border-accent shadow-2xl bg-background"
                            : "border-border bg-background hover:-translate-y-1 hover:shadow-xl"
                          }`}
                      >
                        {isSelected && (
                          <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
                            Selected
                          </span>
                        )}

                        <div className="mb-4 flex items-center gap-3">
                          <div className="flex size-9 items-center justify-center rounded-full bg-accent/10 text-accent">
                            <Icon className="size-4" />
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60">
                              {actor.roleLabel}
                            </p>
                            <p className="mt-0.5 text-lg font-semibold text-foreground">
                              {actor.name}
                            </p>
                          </div>
                        </div>

                        <p className="mb-4 text-sm text-foreground/75">{actor.description}</p>

                        <div className="mt-auto space-y-2">
                          {actor.bullets.map((item) => (
                            <div key={item} className="flex items-start gap-2">
                              <div className="mt-1 size-4 rounded-full bg-accent/10" />
                              <p className="text-sm text-foreground/80">{item}</p>
                            </div>
                          ))}
                        </div>
                      </button>
                    )
                  })}
                </div>

                <aside className="relative rounded-3xl border border-border bg-background p-6 md:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/60">
                    You&apos;re signing up as
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold text-foreground md:text-3xl">
                    {selectedActor.name}
                  </h2>
                  <p className="mt-2 text-sm text-foreground/75 md:text-base">
                    In the next step, we&apos;ll ask for common account details (name, email, password),
                    then tailor questions based on this role to keep things fast and relevant.
                  </p>

                  <div className="mt-6 rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground/80">
                    <p className="font-medium">In Step 2, we&apos;ll focus on:</p>
                    <ul className="mt-2 list-disc space-y-1 pl-5">
                      {selectedActor.bullets.slice(0, 2).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
                  >
                    Continue to Step 2 · Common details
                    <ArrowRight className="size-4" />
                  </button>

                  <p className="mt-3 text-center text-xs text-foreground/60">
                    You can always change your actor later from account settings.
                  </p>
                </aside>
              </div>
            </>
          )}

          {/* Step 2: Common Details */}
          {step === 2 && (
            <div className="mx-auto max-w-2xl">
              <div className="mb-10 md:mb-14 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-foreground/60">
                  Step 2 of 4
                </p>
                <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                  Create your account
                </h1>
                <p className="mt-4 text-base text-foreground/70 md:text-lg">
                  Enter your details to get started as a <span className="font-semibold text-foreground">{selectedActor.name}</span>.
                </p>
              </div>

              <div className="mb-10 h-2 w-full overflow-hidden rounded-full bg-border">
                <div className="h-full w-1/2 rounded-full bg-accent" />
              </div>

              <div className="rounded-3xl border border-border bg-background p-6 md:p-10 shadow-sm">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First name</Label>
                      <Input id="firstName" placeholder="Jane" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email address</Label>
                    <Input id="email" type="email" placeholder="jane@example.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" placeholder="••••••••" />
                    <p className="text-xs text-muted-foreground">
                      Must be at least 8 characters long.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input id="confirmPassword" type="password" placeholder="••••••••" />
                  </div>

                  <div className="pt-4 flex items-center justify-between gap-4">
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => setStep(1)}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Back
                    </Button>
                    <Button type="button" onClick={() => setStep(3)} className="bg-accent hover:bg-accent/90 text-white rounded-full px-8">
                      Verify Email
                      <ArrowRight className="ml-2 size-4" />
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Step 3: Email OTP Verification */}
          {step === 3 && (
            <div className="mx-auto max-w-md">
              <div className="mb-10 md:mb-14 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-foreground/60">
                  Step 3 of 4
                </p>
                <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                  Verify your email
                </h1>
                <p className="mt-4 text-base text-foreground/70 md:text-lg">
                  We've sent a 6-digit code to <span className="font-semibold text-foreground">your email</span>.
                </p>
              </div>

              <div className="mb-10 h-2 w-full overflow-hidden rounded-full bg-border">
                <div className="h-full w-3/4 rounded-full bg-accent" />
              </div>

              <div className="rounded-3xl border border-border bg-background p-6 md:p-10 shadow-sm">
                <form className="space-y-6">
                  <div className="space-y-4">
                    <Label htmlFor="otp" className="text-center block">
                      Enter verification code
                    </Label>
                    <div className="flex justify-center">
                      <InputOTP maxLength={6} id="otp">
                        <InputOTPGroup>
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                          <InputOTPSlot index={2} />
                          <InputOTPSlot index={3} />
                          <InputOTPSlot index={4} />
                          <InputOTPSlot index={5} />
                        </InputOTPGroup>
                      </InputOTP>
                    </div>
                    <p className="text-center text-sm text-muted-foreground">
                      Please enter the 6-digit code sent to your email.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border bg-muted/30 px-4 py-3 text-center">
                    <p className="text-sm text-foreground/75">
                      Didn't receive the code?{" "}
                      <button
                        type="button"
                        className="font-semibold text-accent hover:text-accent/80 transition-colors"
                      >
                        Resend code
                      </button>
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground">
                      Code expires in 10 minutes
                    </p>
                  </div>

                  <div className="pt-4 flex items-center justify-between gap-4">
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => setStep(2)}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Back
                    </Button>
                    <Button type="button" onClick={() => setStep(4)} className="bg-accent hover:bg-accent/90 text-white rounded-full px-8">
                      Verify & Continue
                      <ArrowRight className="ml-2 size-4" />
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Step 4: Role-Specific Details */}
          {step === 4 && (
            <div className="mx-auto max-w-2xl">
              <div className="mb-10 md:mb-14 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-foreground/60">
                  Step 4 of 4
                </p>
                <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                  Tell us about yourself
                </h1>
                <p className="mt-4 text-base text-foreground/70 md:text-lg">
                  Help us personalize your experience as a <span className="font-semibold text-foreground">{selectedActor.name}</span>.
                </p>
              </div>

              <div className="mb-10 h-2 w-full overflow-hidden rounded-full bg-border">
                <div className="h-full w-full rounded-full bg-accent" />
              </div>

              <div className="rounded-3xl border border-border bg-background p-6 md:p-10 shadow-sm">
                <form className="space-y-6">
                  {/* Athlete Form */}
                  {selectedId === "athlete" && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="sport">Primary Sport</Label>
                        <Input id="sport" placeholder="e.g., Running, Swimming, Cycling" />
                      </div>

                      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="level">Experience Level</Label>
                          <Select>
                            <SelectTrigger id="level" className="w-full">
                              <SelectValue placeholder="Select level" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="beginner">Beginner</SelectItem>
                              <SelectItem value="intermediate">Intermediate</SelectItem>
                              <SelectItem value="advanced">Advanced</SelectItem>
                              <SelectItem value="elite">Elite/Professional</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="trainingFrequency">Training Frequency</Label>
                          <Select>
                            <SelectTrigger id="trainingFrequency" className="w-full">
                              <SelectValue placeholder="Select frequency" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1-2">1-2 times/week</SelectItem>
                              <SelectItem value="3-4">3-4 times/week</SelectItem>
                              <SelectItem value="5-6">5-6 times/week</SelectItem>
                              <SelectItem value="daily">Daily</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="goals">Competition Goals</Label>
                        <Textarea
                          id="goals"
                          placeholder="What are your performance or competition goals? (e.g., Complete a marathon, improve 5K time)"
                          className="min-h-24"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="constraints">Schedule & Constraints</Label>
                        <Textarea
                          id="constraints"
                          placeholder="Any time constraints, injuries, or preferences we should know about?"
                          className="min-h-20"
                        />
                      </div>
                    </>
                  )}

                  {/* Coach Form */}
                  {selectedId === "coach" && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="specialties">Coaching Specialties</Label>
                        <Input id="specialties" placeholder="e.g., Strength Training, Endurance, Youth Development" />
                      </div>

                      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="certifications">Certifications</Label>
                          <Input id="certifications" placeholder="e.g., NASM, CSCS, USATF" />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="experience">Years of Experience</Label>
                          <Select>
                            <SelectTrigger id="experience" className="w-full">
                              <SelectValue placeholder="Select experience" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="0-2">0-2 years</SelectItem>
                              <SelectItem value="3-5">3-5 years</SelectItem>
                              <SelectItem value="6-10">6-10 years</SelectItem>
                              <SelectItem value="10+">10+ years</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="rosterSize">Typical Roster Size</Label>
                          <Select>
                            <SelectTrigger id="rosterSize" className="w-full">
                              <SelectValue placeholder="Select size" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1-5">1-5 athletes</SelectItem>
                              <SelectItem value="6-15">6-15 athletes</SelectItem>
                              <SelectItem value="16-30">16-30 athletes</SelectItem>
                              <SelectItem value="30+">30+ athletes</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="coachingFormat">Coaching Format</Label>
                          <Select>
                            <SelectTrigger id="coachingFormat" className="w-full">
                              <SelectValue placeholder="Select format" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="in-person">In-Person</SelectItem>
                              <SelectItem value="online">Online</SelectItem>
                              <SelectItem value="hybrid">Hybrid</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="offerings">Services & Offerings</Label>
                        <Textarea
                          id="offerings"
                          placeholder="Describe your coaching services and programs (e.g., 1-on-1 training, group sessions, nutrition planning)"
                          className="min-h-24"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="communication">Communication Preferences</Label>
                        <Textarea
                          id="communication"
                          placeholder="How do you prefer to communicate with athletes? (e.g., weekly check-ins, training app, video calls)"
                          className="min-h-20"
                        />
                      </div>
                    </>
                  )}

                  {/* Consultant Form */}
                  {selectedId === "consultant" && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="focus">Primary Consulting Focus</Label>
                        <Input id="focus" placeholder="e.g., Sports Performance, Nutrition, Mental Coaching" />
                      </div>

                      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="clientType">Typical Client Type</Label>
                          <Select>
                            <SelectTrigger id="clientType" className="w-full">
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="individual">Individual Athletes</SelectItem>
                              <SelectItem value="teams">Teams</SelectItem>
                              <SelectItem value="organizations">Organizations</SelectItem>
                              <SelectItem value="mixed">Mixed</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="engagementLength">Typical Engagement Length</Label>
                          <Select>
                            <SelectTrigger id="engagementLength" className="w-full">
                              <SelectValue placeholder="Select length" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="short">Short-term (1-3 months)</SelectItem>
                              <SelectItem value="medium">Medium-term (3-6 months)</SelectItem>
                              <SelectItem value="long">Long-term (6+ months)</SelectItem>
                              <SelectItem value="ongoing">Ongoing</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="services">Services & Deliverables</Label>
                        <Textarea
                          id="services"
                          placeholder="What services do you provide? (e.g., program design, performance analysis, workshops)"
                          className="min-h-24"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="stakeholders">Key Stakeholders</Label>
                        <Textarea
                          id="stakeholders"
                          placeholder="Who are your typical stakeholders? (e.g., athletes, coaches, management, sponsors)"
                          className="min-h-20"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="reporting">Reporting & Communication Needs</Label>
                        <Textarea
                          id="reporting"
                          placeholder="How do you typically report progress and communicate with stakeholders?"
                          className="min-h-20"
                        />
                      </div>
                    </>
                  )}

                  <div className="pt-4 flex items-center justify-between gap-4">
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => setStep(3)}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Back
                    </Button>
                    <Button type="button" onClick={() => setStep(5)} className="bg-accent hover:bg-accent/90 text-white rounded-full px-8">
                      Create Account
                      <ArrowRight className="ml-2 size-4" />
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Step 5: Success / Finalization */}
          {step === 5 && (
            <div className="mx-auto max-w-xl">
              <div className="text-center">
                {/* Success Icon */}
                <div className="mb-8 flex justify-center">
                  <div className="flex size-20 items-center justify-center rounded-full bg-accent/10">
                    <CheckCircle2 className="size-10 text-accent" />
                  </div>
                </div>

                {/* Success Message */}
                <div className="mb-10">
                  <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Your account is created
                  </h1>
                  <p className="mt-4 text-base text-foreground/70">
                    Welcome to AthletyQ! You're all set to get started.
                  </p>
                </div>

                {/* Account Info */}
                <div className="mb-8 space-y-3">
                  <div className="flex items-center justify-between rounded-xl border border-border bg-background px-5 py-4">
                    <span className="text-sm text-foreground/70">Account Type</span>
                    <span className="font-medium text-foreground">{selectedActor.name}</span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl border border-border bg-background px-5 py-4">
                    <span className="text-sm text-foreground/70">Status</span>
                    <span className="flex items-center gap-2 font-medium text-green-600 dark:text-green-400">
                      Active
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="flex flex-col gap-3">
                  <Button
                    className="w-full bg-accent hover:bg-accent/90 text-white rounded-xl px-6 py-6 text-base font-medium"
                  >
                    Go to Dashboard
                    <ArrowRight className="ml-2 size-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full rounded-xl px-6 py-3 text-base"
                  >
                    Complete Profile Later
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}


