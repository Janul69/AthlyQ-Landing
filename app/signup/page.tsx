'use client'

import { useState } from "react"
import { ArrowRight, Users2, Target, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

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
                  Step 1 of 3
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
                  Step 2 of 3
                </p>
                <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                  Create your account
                </h1>
                <p className="mt-4 text-base text-foreground/70 md:text-lg">
                  Enter your details to get started as a <span className="font-semibold text-foreground">{selectedActor.name}</span>.
                </p>
              </div>

              <div className="mb-10 h-2 w-full overflow-hidden rounded-full bg-border">
                <div className="h-full w-2/3 rounded-full bg-accent" />
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
                    <Button type="button" className="bg-accent hover:bg-accent/90 text-white rounded-full px-8">
                      Continue to Step 3
                      <ArrowRight className="ml-2 size-4" />
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}


