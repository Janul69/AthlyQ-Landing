'use client'

import { useState } from "react"
import { LayoutDashboard, Users, Briefcase, MessageSquare, Bell, User, Search, Filter, Star, MapPin, BadgeCheck, Video, Users as UsersIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, href: '/athlete/dashboard' },
    { id: 'coaches', label: 'Coaches', icon: Users, href: '/athlete/coaches' },
    { id: 'consultants', label: 'Consultants', icon: Briefcase, href: '/athlete/consultants' },
    { id: 'chats', label: 'Chats', icon: MessageSquare, href: '/athlete/chats' },
]

// Sample coach data
const coaches = [
    {
        id: 1,
        name: "Sarah Johnson",
        verified: true,
        photo: "SJ",
        sports: ["Running", "Triathlon"],
        rating: 4.9,
        reviews: 127,
        experience: "12 years experience",
        mode: "Online & In-person",
        bio: "Olympic-level coach specializing in endurance sports. Helped 50+ athletes achieve their PR goals.",
    },
    {
        id: 2,
        name: "Marcus Chen",
        verified: true,
        photo: "MC",
        sports: ["Swimming", "Fitness"],
        rating: 4.8,
        reviews: 94,
        experience: "8 years experience",
        mode: "Online",
        bio: "Former competitive swimmer with focus on technique and performance optimization for all levels.",
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        verified: true,
        photo: "ER",
        sports: ["Cycling", "Running"],
        rating: 5.0,
        reviews: 156,
        experience: "15 years experience",
        mode: "In-person",
        bio: "Professional cycling coach. Specializes in power training and race preparation for competitive cyclists.",
    },
    {
        id: 4,
        name: "David Kim",
        verified: false,
        photo: "DK",
        sports: ["Strength Training"],
        rating: 4.7,
        reviews: 63,
        experience: "5 years experience",
        mode: "Hybrid",
        bio: "Certified strength coach focusing on functional fitness and injury prevention.",
    },
    {
        id: 5,
        name: "Jennifer Walsh",
        verified: true,
        photo: "JW",
        sports: ["Yoga", "Flexibility"],
        rating: 4.9,
        reviews: 201,
        experience: "10 years experience",
        mode: "Online",
        bio: "Yoga instructor and mobility specialist. Helps athletes improve flexibility and recover faster.",
    },
    {
        id: 6,
        name: "Alex Thompson",
        verified: true,
        photo: "AT",
        sports: ["CrossFit", "HIIT"],
        rating: 4.8,
        reviews: 88,
        experience: "7 years experience",
        mode: "In-person",
        bio: "High-intensity training expert. Former CrossFit Games competitor with proven coaching track record.",
    },
]

export default function AthleteDashboard() {
    const [activeItem, setActiveItem] = useState('coaches')

    return (
        <div className="flex h-screen bg-background">
            {/* Sidebar - Blue */}
            <aside className="w-64 bg-accent flex flex-col">
                {/* Logo */}
                <div className="h-16 flex items-center justify-center border-b border-accent-foreground/10">
                    <h1 className="text-xl font-bold text-white">AthletyQ</h1>
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
                        <h1 className="text-4xl font-bold text-foreground mb-2">Coaches</h1>
                        <p className="text-foreground/70 mb-6">Find the best coaches to guide your performance.</p>

                        {/* Search Bar */}
                        <div className="relative max-w-2xl">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
                            <Input
                                type="text"
                                placeholder="Search coaches by name, sport, or speciality…"
                                className="pl-12 h-12 text-base"
                            />
                        </div>
                    </div>

                    {/* B. Filter Bar */}
                    <div className="mb-8 flex items-center gap-3 flex-wrap">
                        <Select>
                            <SelectTrigger className="w-40 rounded-full">
                                <SelectValue placeholder="Sport" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="running">Running</SelectItem>
                                <SelectItem value="swimming">Swimming</SelectItem>
                                <SelectItem value="cycling">Cycling</SelectItem>
                                <SelectItem value="triathlon">Triathlon</SelectItem>
                                <SelectItem value="strength">Strength Training</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select>
                            <SelectTrigger className="w-48 rounded-full">
                                <SelectValue placeholder="Experience Level" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="beginner">Beginner Friendly</SelectItem>
                                <SelectItem value="intermediate">Intermediate</SelectItem>
                                <SelectItem value="advanced">Advanced</SelectItem>
                                <SelectItem value="elite">Elite/Pro</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select>
                            <SelectTrigger className="w-44 rounded-full">
                                <SelectValue placeholder="Coaching Type" />
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

                    {/* C. Coaches Grid Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {coaches.map((coach) => (
                            <div
                                key={coach.id}
                                className="rounded-2xl border border-border bg-white p-6 hover:shadow-lg transition-shadow"
                            >
                                {/* Profile Photo */}
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="size-16 rounded-full bg-accent/10 flex items-center justify-center text-accent font-semibold text-lg shrink-0">
                                        {coach.photo}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h3 className="font-semibold text-foreground truncate">{coach.name}</h3>
                                            {coach.verified && (
                                                <BadgeCheck className="size-4 text-accent shrink-0" />
                                            )}
                                        </div>
                                        {/* Sport Tags */}
                                        <div className="flex flex-wrap gap-1.5">
                                            {coach.sports.map((sport) => (
                                                <span
                                                    key={sport}
                                                    className="px-2 py-0.5 text-xs font-medium bg-accent/10 text-accent rounded-full"
                                                >
                                                    {sport}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Rating */}
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="flex items-center gap-1">
                                        <Star className="size-4 fill-yellow-400 text-yellow-400" />
                                        <span className="font-semibold text-sm">{coach.rating}</span>
                                    </div>
                                    <span className="text-xs text-muted-foreground">({coach.reviews} reviews)</span>
                                </div>

                                {/* Experience & Mode */}
                                <div className="space-y-2 mb-4">
                                    <p className="text-sm text-foreground/70 flex items-center gap-2">
                                        <UsersIcon className="size-4" />
                                        {coach.experience}
                                    </p>
                                    <p className="text-sm text-foreground/70 flex items-center gap-2">
                                        <Video className="size-4" />
                                        {coach.mode}
                                    </p>
                                </div>

                                {/* Bio */}
                                <p className="text-sm text-foreground/70 mb-6 line-clamp-2">
                                    {coach.bio}
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
