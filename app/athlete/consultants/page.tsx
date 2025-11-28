'use client'

import { useState } from "react"
import { LayoutDashboard, Users, Briefcase, MessageSquare, Bell, User, Search, Filter, Star, BadgeCheck, Video, Users as UsersIcon, Stethoscope, Camera } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, href: '/athlete/dashboard' },
    { id: 'coaches', label: 'Coaches', icon: Users, href: '/athlete/coaches' },
    { id: 'consultants', label: 'Consultants', icon: Briefcase, href: '/athlete/consultants' },
    { id: 'pose-checker', label: 'Pose Checker', icon: Camera, href: '/athlete/pose-checker' },
    { id: 'chats', label: 'Chats', icon: MessageSquare, href: '/athlete/chats' },
]

// Sample consultant data
const consultants = [
    {
        id: 1,
        name: "Dr. Lisa Martinez",
        verified: true,
        photo: "LM",
        specialties: ["Sports Nutrition", "Meal Planning"],
        rating: 4.9,
        reviews: 142,
        experience: "15 years experience",
        mode: "Online & In-person",
        bio: "Registered dietitian specializing in performance nutrition for endurance athletes. PhD in Sports Nutrition.",
        credentials: "RD, PhD"
    },
    {
        id: 2,
        name: "Michael Anderson",
        verified: true,
        photo: "MA",
        specialties: ["Sports Psychology", "Mental Training"],
        rating: 5.0,
        reviews: 98,
        experience: "10 years experience",
        mode: "Online",
        bio: "Licensed sports psychologist helping athletes build mental resilience and overcome performance anxiety.",
        credentials: "PhD, CMPC"
    },
    {
        id: 3,
        name: "Dr. Rachel Cooper",
        verified: true,
        photo: "RC",
        specialties: ["Physiotherapy", "Injury Rehab"],
        rating: 4.8,
        reviews: 167,
        experience: "12 years experience",
        mode: "In-person",
        bio: "Sports physiotherapist with extensive experience in injury prevention and rehabilitation for athletes.",
        credentials: "DPT, CSCS"
    },
    {
        id: 4,
        name: "James Wilson",
        verified: true,
        photo: "JW",
        specialties: ["Biomechanics", "Movement Analysis"],
        rating: 4.9,
        reviews: 76,
        experience: "8 years experience",
        mode: "Hybrid",
        bio: "Biomechanics specialist using motion analysis technology to optimize athletic performance and reduce injury risk.",
        credentials: "MS, CSCS"
    },
    {
        id: 5,
        name: "Dr. Sophia Lee",
        verified: true,
        photo: "SL",
        specialties: ["Sports Medicine", "Orthopedics"],
        rating: 5.0,
        reviews: 203,
        experience: "18 years experience",
        mode: "In-person",
        bio: "Board-certified sports medicine physician specializing in orthopedic injuries and surgical consultations.",
        credentials: "MD, CAQ"
    },
    {
        id: 6,
        name: "Brandon Taylor",
        verified: false,
        photo: "BT",
        specialties: ["Recovery", "Sleep Optimization"],
        rating: 4.7,
        reviews: 54,
        experience: "6 years experience",
        mode: "Online",
        bio: "Recovery specialist focusing on sleep optimization, stress management, and performance recovery protocols.",
        credentials: "MS, CSCS"
    },
]

export default function ConsultantsPage() {
    const [activeItem, setActiveItem] = useState('consultants')

    return (
        <div className="flex h-screen bg-background">
            {/* Sidebar - Blue */}
            <aside className="w-64 bg-accent flex flex-col">
                {/* Logo */}
                <div className="h-16 flex items-center justify-center border-b border-accent-foreground/10">
                    <h1 className="text-xl font-bold text-white">AthliyQ</h1>
                </div>

                {/* Navigation Items */}
                <nav className="flex-1 px-3 py-6">
                    <ul className="space-y-2">
                        {sidebarItems.map((item) => {
                            const Icon = item.icon
                            const isActive = activeItem === item.id

                            return (
                                <li key={item.id}>
                                    <Link
                                        href={item.href}
                                        onClick={() => setActiveItem(item.id)}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${isActive
                                            ? 'bg-white text-accent shadow-sm'
                                            : 'text-white/80 hover:bg-white/10 hover:text-white'
                                            }`}
                                    >
                                        <Icon className="size-5" />
                                        <span className="text-sm font-medium">{item.label}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col">
                {/* Top Navbar - White */}
                <header className="h-16 bg-white border-b border-border flex items-center justify-end px-6 gap-4">
                    {/* Notification Icon */}
                    <button className="relative p-2 rounded-lg hover:bg-muted transition-colors">
                        <Bell className="size-5 text-foreground" />
                        <span className="absolute top-1.5 right-1.5 size-2 bg-accent rounded-full" />
                    </button>

                    {/* Profile Icon */}
                    <button className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors">
                        <div className="size-8 rounded-full bg-accent/10 flex items-center justify-center">
                            <User className="size-5 text-accent" />
                        </div>
                    </button>
                </header>

                {/* Main Content */}
                <main className="flex-1 p-8 overflow-auto bg-background">
                    {/* A. Header Section */}
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold text-foreground mb-2">Consultants</h1>
                        <p className="text-foreground/70 mb-6">Connect with expert consultants for nutrition, recovery, psychology, and more.</p>

                        {/* Search Bar */}
                        <div className="relative max-w-2xl">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
                            <Input
                                type="text"
                                placeholder="Search consultants by name, specialty, or expertise…"
                                className="pl-12 h-12 text-base"
                            />
                        </div>
                    </div>

                    {/* B. Filter Bar */}
                    <div className="mb-8 flex items-center gap-3 flex-wrap">
                        <Select>
                            <SelectTrigger className="w-48 rounded-full">
                                <SelectValue placeholder="Specialty" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="nutrition">Sports Nutrition</SelectItem>
                                <SelectItem value="psychology">Sports Psychology</SelectItem>
                                <SelectItem value="physiotherapy">Physiotherapy</SelectItem>
                                <SelectItem value="biomechanics">Biomechanics</SelectItem>
                                <SelectItem value="medicine">Sports Medicine</SelectItem>
                                <SelectItem value="recovery">Recovery & Sleep</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select>
                            <SelectTrigger className="w-48 rounded-full">
                                <SelectValue placeholder="Experience Level" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="5-years">5+ years</SelectItem>
                                <SelectItem value="10-years">10+ years</SelectItem>
                                <SelectItem value="15-years">15+ years</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select>
                            <SelectTrigger className="w-44 rounded-full">
                                <SelectValue placeholder="Session Type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="online">Online</SelectItem>
                                <SelectItem value="in-person">In-person</SelectItem>
                                <SelectItem value="hybrid">Hybrid</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select>
                            <SelectTrigger className="w-40 rounded-full">
                                <SelectValue placeholder="Location" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="local">Local</SelectItem>
                                <SelectItem value="national">National</SelectItem>
                                <SelectItem value="international">International</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select>
                            <SelectTrigger className="w-40 rounded-full">
                                <SelectValue placeholder="Price Range" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="budget">$ Budget</SelectItem>
                                <SelectItem value="mid">$$ Mid-range</SelectItem>
                                <SelectItem value="premium">$$$ Premium</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select>
                            <SelectTrigger className="w-40 rounded-full">
                                <SelectValue placeholder="Availability" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="immediate">Immediate</SelectItem>
                                <SelectItem value="week">This Week</SelectItem>
                                <SelectItem value="month">This Month</SelectItem>
                            </SelectContent>
                        </Select>

                        <Button variant="outline" size="icon" className="rounded-full ml-auto">
                            <Filter className="size-4" />
                        </Button>
                    </div>

                    {/* C. Consultants Grid Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {consultants.map((consultant) => (
                            <div
                                key={consultant.id}
                                className="rounded-2xl border border-border bg-white p-6 hover:shadow-lg transition-shadow"
                            >
                                {/* Profile Photo */}
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="size-16 rounded-full bg-accent/10 flex items-center justify-center text-accent font-semibold text-lg shrink-0">
                                        {consultant.photo}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h3 className="font-semibold text-foreground truncate">{consultant.name}</h3>
                                            {consultant.verified && (
                                                <BadgeCheck className="size-4 text-accent shrink-0" />
                                            )}
                                        </div>
                                        {/* Credentials */}
                                        <p className="text-xs text-muted-foreground mb-2">{consultant.credentials}</p>
                                        {/* Specialty Tags */}
                                        <div className="flex flex-wrap gap-1.5">
                                            {consultant.specialties.map((specialty) => (
                                                <span
                                                    key={specialty}
                                                    className="px-2 py-0.5 text-xs font-medium bg-accent/10 text-accent rounded-full"
                                                >
                                                    {specialty}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Rating */}
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="flex items-center gap-1">
                                        <Star className="size-4 fill-yellow-400 text-yellow-400" />
                                        <span className="font-semibold text-sm">{consultant.rating}</span>
                                    </div>
                                    <span className="text-xs text-muted-foreground">({consultant.reviews} reviews)</span>
                                </div>

                                {/* Experience & Mode */}
                                <div className="space-y-2 mb-4">
                                    <p className="text-sm text-foreground/70 flex items-center gap-2">
                                        <Stethoscope className="size-4" />
                                        {consultant.experience}
                                    </p>
                                    <p className="text-sm text-foreground/70 flex items-center gap-2">
                                        <Video className="size-4" />
                                        {consultant.mode}
                                    </p>
                                </div>

                                {/* Bio */}
                                <p className="text-sm text-foreground/70 mb-6 line-clamp-2">
                                    {consultant.bio}
                                </p>

                                {/* Buttons */}
                                <div className="flex gap-2">
                                    <Button className="flex-1 bg-accent hover:bg-accent/90 text-white">
                                        View Profile
                                    </Button>
                                    <Button variant="outline" className="flex-1">
                                        Book Session
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    )
}
