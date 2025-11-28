'use client'

import { useState } from "react"
import { LayoutDashboard, Users, MessageSquare, Calendar, Bell, User, Video, Clock, DollarSign, TrendingUp, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, href: '/coach/dashboard' },
    { id: 'clients', label: 'Clients', icon: Users, href: '/coach/clients' },
    { id: 'chats', label: 'Chats', icon: MessageSquare, href: '/coach/chats' },
    { id: 'booked-sessions', label: 'Booked Sessions', icon: Calendar, href: '/coach/booked-sessions' },
]

// Sample data
const upcomingSessions = [
    {
        id: 1,
        athlete: "Sarah Johnson",
        sport: "Running",
        time: "Today, 2:00 PM",
        duration: "60 min",
        type: "Online",
        status: "confirmed"
    },
    {
        id: 2,
        athlete: "Michael Chen",
        sport: "Swimming",
        time: "Today, 4:30 PM",
        duration: "45 min",
        type: "In-person",
        status: "confirmed"
    },
    {
        id: 3,
        athlete: "Emma Rodriguez",
        sport: "Cycling",
        time: "Tomorrow, 10:00 AM",
        duration: "90 min",
        type: "Online",
        status: "pending"
    },
]

const newMessages = [
    {
        id: 1,
        from: "Alex Thompson",
        message: "Thanks for the last session! When can we schedule the next one?",
        time: "5 min ago",
        unread: true
    },
    {
        id: 2,
        from: "Jennifer Walsh",
        message: "I have a question about the training plan you sent...",
        time: "23 min ago",
        unread: true
    },
    {
        id: 3,
        from: "David Kim",
        message: "Great progress on my sprint times! 🎉",
        time: "1 hour ago",
        unread: false
    },
]

const athleteActivity = [
    {
        id: 1,
        athlete: "Sarah Johnson",
        action: "Completed workout: 10K Run",
        time: "2 hours ago",
        icon: CheckCircle,
        color: "text-green-600"
    },
    {
        id: 2,
        athlete: "Michael Chen",
        action: "Logged nutrition: Post-workout meal",
        time: "3 hours ago",
        icon: CheckCircle,
        color: "text-green-600"
    },
    {
        id: 3,
        athlete: "Emma Rodriguez",
        action: "Missed scheduled workout",
        time: "5 hours ago",
        icon: AlertCircle,
        color: "text-orange-600"
    },
    {
        id: 4,
        athlete: "Alex Thompson",
        action: "Achieved new personal best!",
        time: "1 day ago",
        icon: CheckCircle,
        color: "text-green-600"
    },
]

export default function CoachDashboard() {
    const [activeItem, setActiveItem] = useState('dashboard')

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
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold text-foreground mb-2">Dashboard</h1>
                        <p className="text-foreground/70">Welcome back! Here's what's happening with your coaching today.</p>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                        <div className="bg-white rounded-2xl border border-border p-6">
                            <div className="flex items-center justify-between mb-2">
                                <p className="text-sm text-foreground/60">Total Clients</p>
                                <Users className="size-5 text-accent" />
                            </div>
                            <p className="text-3xl font-bold text-foreground">24</p>
                            <p className="text-xs text-green-600 mt-1">+3 this month</p>
                        </div>

                        <div className="bg-white rounded-2xl border border-border p-6">
                            <div className="flex items-center justify-between mb-2">
                                <p className="text-sm text-foreground/60">Sessions This Week</p>
                                <Calendar className="size-5 text-accent" />
                            </div>
                            <p className="text-3xl font-bold text-foreground">18</p>
                            <p className="text-xs text-foreground/60 mt-1">3 today</p>
                        </div>

                        <div className="bg-white rounded-2xl border border-border p-6">
                            <div className="flex items-center justify-between mb-2">
                                <p className="text-sm text-foreground/60">This Month</p>
                                <DollarSign className="size-5 text-accent" />
                            </div>
                            <p className="text-3xl font-bold text-foreground">$3,240</p>
                            <p className="text-xs text-green-600 mt-1">+12% vs last month</p>
                        </div>

                        <div className="bg-white rounded-2xl border border-border p-6">
                            <div className="flex items-center justify-between mb-2">
                                <p className="text-sm text-foreground/60">Client Satisfaction</p>
                                <TrendingUp className="size-5 text-accent" />
                            </div>
                            <p className="text-3xl font-bold text-foreground">4.9</p>
                            <p className="text-xs text-foreground/60 mt-1">Based on 156 reviews</p>
                        </div>
                    </div>

                    {/* Main Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Left Column - Upcoming Sessions & Messages */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Upcoming Sessions */}
                            <div className="bg-white rounded-2xl border border-border p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-xl font-bold text-foreground">Upcoming Sessions</h2>
                                    <Button variant="ghost" size="sm" className="text-accent">View All</Button>
                                </div>
                                <div className="space-y-4">
                                    {upcomingSessions.map((session) => (
                                        <div key={session.id} className="flex items-center gap-4 p-4 rounded-xl border border-border hover:shadow-md transition-shadow">
                                            <div className="size-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                                                <Video className="size-6 text-accent" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-semibold text-foreground">{session.athlete}</h3>
                                                <div className="flex items-center gap-2 text-sm text-foreground/60">
                                                    <span>{session.sport}</span>
                                                    <span>•</span>
                                                    <span>{session.type}</span>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-sm font-medium text-foreground">{session.time}</p>
                                                <p className="text-xs text-foreground/60">{session.duration}</p>
                                            </div>
                                            <Button size="sm" className="bg-accent hover:bg-accent/90 text-white">
                                                Join
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Earnings Summary */}
                            <div className="bg-white rounded-2xl border border-border p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-xl font-bold text-foreground">Earnings Summary</h2>
                                    <Button variant="ghost" size="sm" className="text-accent">Details</Button>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-4 rounded-xl bg-accent/5">
                                        <div>
                                            <p className="text-sm text-foreground/60">Total Earnings (This Month)</p>
                                            <p className="text-2xl font-bold text-foreground mt-1">$3,240</p>
                                        </div>
                                        <TrendingUp className="size-8 text-green-600" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-4 rounded-xl border border-border">
                                            <p className="text-sm text-foreground/60 mb-1">Pending</p>
                                            <p className="text-xl font-bold text-foreground">$840</p>
                                        </div>
                                        <div className="p-4 rounded-xl border border-border">
                                            <p className="text-sm text-foreground/60 mb-1">Available</p>
                                            <p className="text-xl font-bold text-foreground">$2,400</p>
                                        </div>
                                    </div>
                                    <Button className="w-full bg-accent hover:bg-accent/90 text-white">
                                        Request Payout
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Messages & Activity */}
                        <div className="space-y-6">
                            {/* New Messages */}
                            <div className="bg-white rounded-2xl border border-border p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-xl font-bold text-foreground">New Messages</h2>
                                    <span className="px-2 py-1 text-xs font-semibold bg-accent text-white rounded-full">2</span>
                                </div>
                                <div className="space-y-3">
                                    {newMessages.map((msg) => (
                                        <div key={msg.id} className={`p-3 rounded-xl cursor-pointer transition-colors ${msg.unread ? 'bg-accent/5 hover:bg-accent/10' : 'hover:bg-muted'}`}>
                                            <div className="flex items-start justify-between mb-1">
                                                <p className={`font-semibold text-sm ${msg.unread ? 'text-foreground' : 'text-foreground/70'}`}>
                                                    {msg.from}
                                                </p>
                                                <span className="text-xs text-foreground/60">{msg.time}</span>
                                            </div>
                                            <p className="text-sm text-foreground/70 line-clamp-2">{msg.message}</p>
                                        </div>
                                    ))}
                                </div>
                                <Button variant="outline" className="w-full mt-4">
                                    View All Messages
                                </Button>
                            </div>

                            {/* Athlete Activity */}
                            <div className="bg-white rounded-2xl border border-border p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-xl font-bold text-foreground">Athlete Activity</h2>
                                </div>
                                <div className="space-y-4">
                                    {athleteActivity.map((activity) => {
                                        const ActivityIcon = activity.icon
                                        return (
                                            <div key={activity.id} className="flex items-start gap-3">
                                                <ActivityIcon className={`size-5 mt-0.5 shrink-0 ${activity.color}`} />
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm font-medium text-foreground">{activity.athlete}</p>
                                                    <p className="text-sm text-foreground/70">{activity.action}</p>
                                                    <p className="text-xs text-foreground/50 mt-1">{activity.time}</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
