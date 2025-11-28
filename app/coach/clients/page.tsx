'use client'

import { useState } from "react"
import { LayoutDashboard, Users, MessageSquare, Calendar, Bell, User, Search, Filter, Star, TrendingUp, Clock, CheckCircle, X, Phone, Mail, MapPin, Activity } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, href: '/coach/dashboard' },
    { id: 'clients', label: 'Clients', icon: Users, href: '/coach/clients' },
    { id: 'chats', label: 'Chats', icon: MessageSquare, href: '/coach/chats' },
    { id: 'booked-sessions', label: 'Booked Sessions', icon: Calendar, href: '/coach/booked-sessions' },
]

// Sample active clients data
const activeClients = [
    {
        id: 1,
        name: "Sarah Johnson",
        photo: "SJ",
        sport: "Running",
        level: "Intermediate",
        joinedDate: "Jan 2025",
        totalSessions: 24,
        upcomingSessions: 2,
        lastSession: "2 days ago",
        progress: 85,
        email: "sarah.j@example.com",
        phone: "+1 (555) 123-4567",
        location: "San Francisco, CA",
        goals: "Complete marathon under 4 hours",
        notes: "Excellent progress on endurance. Working on pacing strategy.",
        recentSessions: [
            { date: "Nov 24, 2025", type: "Interval Training", duration: "60 min", rating: 5 },
            { date: "Nov 21, 2025", type: "Long Run", duration: "90 min", rating: 5 },
            { date: "Nov 18, 2025", type: "Tempo Run", duration: "45 min", rating: 4 },
        ]
    },
    {
        id: 2,
        name: "Michael Chen",
        photo: "MC",
        sport: "Swimming",
        level: "Advanced",
        joinedDate: "Dec 2024",
        totalSessions: 48,
        upcomingSessions: 1,
        lastSession: "Yesterday",
        progress: 92,
        email: "m.chen@example.com",
        phone: "+1 (555) 234-5678",
        location: "Los Angeles, CA",
        goals: "Improve 100m freestyle time by 2 seconds",
        notes: "Strong technique. Focus on starts and turns needed.",
        recentSessions: [
            { date: "Nov 26, 2025", type: "Technique Drill", duration: "60 min", rating: 5 },
            { date: "Nov 23, 2025", type: "Sprint Training", duration: "45 min", rating: 5 },
            { date: "Nov 20, 2025", type: "Endurance", duration: "75 min", rating: 4 },
        ]
    },
    {
        id: 3,
        name: "Emma Rodriguez",
        photo: "ER",
        sport: "Cycling",
        level: "Beginner",
        joinedDate: "Feb 2025",
        totalSessions: 12,
        upcomingSessions: 3,
        lastSession: "5 days ago",
        progress: 68,
        email: "emma.r@example.com",
        phone: "+1 (555) 345-6789",
        location: "Austin, TX",
        goals: "Complete first century ride",
        notes: "Building base fitness. Great attitude and consistency.",
        recentSessions: [
            { date: "Nov 22, 2025", type: "Base Building", duration: "60 min", rating: 4 },
            { date: "Nov 19, 2025", type: "Hill Repeats", duration: "45 min", rating: 5 },
            { date: "Nov 15, 2025", type: "Recovery Ride", duration: "30 min", rating: 4 },
        ]
    },
]

// Sample pending requests data
const pendingRequests = [
    {
        id: 1,
        name: "Alex Thompson",
        photo: "AT",
        sport: "CrossFit",
        level: "Intermediate",
        message: "Looking for a coach to help me prepare for local competitions. I train 5 days a week.",
        requestedDate: "2 hours ago"
    },
    {
        id: 2,
        name: "Jennifer Walsh",
        photo: "JW",
        sport: "Yoga",
        level: "Beginner",
        message: "New to yoga and want to improve flexibility for my marathon training.",
        requestedDate: "1 day ago"
    },
]

export default function CoachClientsPage() {
    const [activeItem, setActiveItem] = useState('clients')
    const [activeTab, setActiveTab] = useState('active') // 'active' or 'pending'
    const [selectedClient, setSelectedClient] = useState<number | null>(null)
    const [searchQuery, setSearchQuery] = useState('')

    const filteredClients = activeClients.filter(client =>
        client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        client.sport.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <div className="flex h-screen bg-background">
            {/* Sidebar - Blue */}
            <aside className="w-64 bg-accent flex flex-col">
                <div className="h-16 flex items-center justify-center border-b border-accent-foreground/10">
                    <h1 className="text-xl font-bold text-white">AthliyQ</h1>
                </div>

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
                {/* Top Navbar */}
                <header className="h-16 bg-white border-b border-border flex items-center justify-end px-6 gap-4">
                    <button className="relative p-2 rounded-lg hover:bg-muted transition-colors">
                        <Bell className="size-5 text-foreground" />
                        <span className="absolute top-1.5 right-1.5 size-2 bg-accent rounded-full" />
                    </button>

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
                        <h1 className="text-4xl font-bold text-foreground mb-2">My Clients</h1>
                        <p className="text-foreground/70">Manage your athletes and view their progress.</p>
                    </div>

                    {/* Tabs */}
                    <div className="flex gap-4 mb-6 border-b border-border">
                        <button
                            onClick={() => setActiveTab('active')}
                            className={`px-4 py-3 font-semibold transition-colors relative ${activeTab === 'active'
                                ? 'text-accent'
                                : 'text-foreground/60 hover:text-foreground'
                                }`}
                        >
                            Active Clients ({activeClients.length})
                            {activeTab === 'active' && (
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
                            )}
                        </button>
                        <button
                            onClick={() => setActiveTab('pending')}
                            className={`px-4 py-3 font-semibold transition-colors relative ${activeTab === 'pending'
                                ? 'text-accent'
                                : 'text-foreground/60 hover:text-foreground'
                                }`}
                        >
                            Pending Requests ({pendingRequests.length})
                            {activeTab === 'pending' && (
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
                            )}
                        </button>
                    </div>

                    {/* Active Clients Tab */}
                    {activeTab === 'active' && (
                        <div>
                            {/* Search Bar */}
                            <div className="mb-6">
                                <div className="relative max-w-md">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
                                    <Input
                                        type="text"
                                        placeholder="Search clients by name or sport..."
                                        className="pl-12 h-12 text-base"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* Clients Grid */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                                {filteredClients.map((client) => (
                                    <div
                                        key={client.id}
                                        className="bg-white rounded-2xl border border-border p-6 hover:shadow-lg transition-shadow cursor-pointer"
                                        onClick={() => setSelectedClient(client.id)}
                                    >
                                        {/* Client Header */}
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className="size-14 rounded-full bg-accent/10 flex items-center justify-center text-accent font-semibold text-lg shrink-0">
                                                {client.photo}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-semibold text-foreground text-lg">{client.name}</h3>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <span className="px-2 py-0.5 text-xs font-medium bg-accent/10 text-accent rounded-full">
                                                        {client.sport}
                                                    </span>
                                                    <span className="text-xs text-foreground/60">{client.level}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Stats */}
                                        <div className="grid grid-cols-2 gap-3 mb-4">
                                            <div className="p-3 rounded-lg bg-muted/50">
                                                <p className="text-xs text-foreground/60 mb-1">Total Sessions</p>
                                                <p className="text-lg font-bold text-foreground">{client.totalSessions}</p>
                                            </div>
                                            <div className="p-3 rounded-lg bg-muted/50">
                                                <p className="text-xs text-foreground/60 mb-1">Upcoming</p>
                                                <p className="text-lg font-bold text-foreground">{client.upcomingSessions}</p>
                                            </div>
                                        </div>

                                        {/* Progress Bar */}
                                        <div className="mb-4">
                                            <div className="flex items-center justify-between text-sm mb-2">
                                                <span className="text-foreground/60">Progress</span>
                                                <span className="font-semibold text-accent">{client.progress}%</span>
                                            </div>
                                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-accent transition-all"
                                                    style={{ width: `${client.progress}%` }}
                                                />
                                            </div>
                                        </div>

                                        {/* Footer */}
                                        <div className="flex items-center justify-between text-sm text-foreground/60">
                                            <span className="flex items-center gap-1">
                                                <Clock className="size-4" />
                                                {client.lastSession}
                                            </span>
                                            <span>Joined {client.joinedDate}</span>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex gap-2 mt-4">
                                            <Button size="sm" className="flex-1 bg-accent hover:bg-accent/90 text-white">
                                                View Details
                                            </Button>
                                            <Button size="sm" variant="outline" className="flex-1">
                                                Message
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Pending Requests Tab */}
                    {activeTab === 'pending' && (
                        <div className="max-w-3xl">
                            <div className="space-y-4">
                                {pendingRequests.map((request) => (
                                    <div key={request.id} className="bg-white rounded-2xl border border-border p-6">
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className="size-14 rounded-full bg-accent/10 flex items-center justify-center text-accent font-semibold text-lg shrink-0">
                                                {request.photo}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-foreground text-lg">{request.name}</h3>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <span className="px-2 py-0.5 text-xs font-medium bg-accent/10 text-accent rounded-full">
                                                        {request.sport}
                                                    </span>
                                                    <span className="text-xs text-foreground/60">{request.level}</span>
                                                    <span className="text-xs text-foreground/60">• {request.requestedDate}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="text-foreground/70 mb-6 pl-[72px]">{request.message}</p>

                                        <div className="flex gap-3 pl-[72px]">
                                            <Button className="bg-accent hover:bg-accent/90 text-white">
                                                <CheckCircle className="size-4 mr-2" />
                                                Accept
                                            </Button>
                                            <Button variant="outline">
                                                <X className="size-4 mr-2" />
                                                Decline
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Client Detail Modal (simplified - would be a full modal/page) */}
                    {selectedClient && (
                        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedClient(null)}>
                            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto p-8" onClick={(e) => e.stopPropagation()}>
                                {(() => {
                                    const client = activeClients.find(c => c.id === selectedClient)!
                                    return (
                                        <>
                                            {/* Header */}
                                            <div className="flex items-start justify-between mb-6">
                                                <div className="flex items-center gap-4">
                                                    <div className="size-20 rounded-full bg-accent/10 flex items-center justify-center text-accent font-semibold text-2xl">
                                                        {client.photo}
                                                    </div>
                                                    <div>
                                                        <h2 className="text-3xl font-bold text-foreground">{client.name}</h2>
                                                        <div className="flex items-center gap-2 mt-2">
                                                            <span className="px-3 py-1 text-sm font-medium bg-accent/10 text-accent rounded-full">
                                                                {client.sport}
                                                            </span>
                                                            <span className="text-sm text-foreground/60">{client.level}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button onClick={() => setSelectedClient(null)} className="p-2 hover:bg-muted rounded-lg">
                                                    <X className="size-6" />
                                                </button>
                                            </div>

                                            {/* Contact Info */}
                                            <div className="grid grid-cols-3 gap-4 mb-6">
                                                <div className="flex items-center gap-2 text-sm">
                                                    <Mail className="size-4 text-accent" />
                                                    <span className="text-foreground/70">{client.email}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-sm">
                                                    <Phone className="size-4 text-accent" />
                                                    <span className="text-foreground/70">{client.phone}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-sm">
                                                    <MapPin className="size-4 text-accent" />
                                                    <span className="text-foreground/70">{client.location}</span>
                                                </div>
                                            </div>

                                            {/* Goals */}
                                            <div className="mb-6">
                                                <h3 className="font-semibold text-foreground mb-2">Goals</h3>
                                                <p className="text-foreground/70">{client.goals}</p>
                                            </div>

                                            {/* Notes */}
                                            <div className="mb-6">
                                                <h3 className="font-semibold text-foreground mb-2">Coaching Notes</h3>
                                                <div className="p-4 bg-muted/50 rounded-lg">
                                                    <p className="text-foreground/70">{client.notes}</p>
                                                </div>
                                            </div>

                                            {/* Progress Tracking */}
                                            <div className="mb-6">
                                                <h3 className="font-semibold text-foreground mb-4">Progress Tracking</h3>
                                                <div className="grid grid-cols-3 gap-4">
                                                    <div className="p-4 rounded-xl border border-border">
                                                        <p className="text-sm text-foreground/60 mb-1">Total Sessions</p>
                                                        <p className="text-2xl font-bold text-foreground">{client.totalSessions}</p>
                                                    </div>
                                                    <div className="p-4 rounded-xl border border-border">
                                                        <p className="text-sm text-foreground/60 mb-1">Overall Progress</p>
                                                        <p className="text-2xl font-bold text-accent">{client.progress}%</p>
                                                    </div>
                                                    <div className="p-4 rounded-xl border border-border">
                                                        <p className="text-sm text-foreground/60 mb-1">Member Since</p>
                                                        <p className="text-2xl font-bold text-foreground">{client.joinedDate}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Recent Sessions */}
                                            <div>
                                                <h3 className="font-semibold text-foreground mb-4">Recent Sessions</h3>
                                                <div className="space-y-3">
                                                    {client.recentSessions.map((session, idx) => (
                                                        <div key={idx} className="flex items-center justify-between p-4 rounded-xl border border-border">
                                                            <div>
                                                                <p className="font-medium text-foreground">{session.type}</p>
                                                                <p className="text-sm text-foreground/60">{session.date}</p>
                                                            </div>
                                                            <div className="flex items-center gap-4">
                                                                <span className="text-sm text-foreground/60">{session.duration}</span>
                                                                <div className="flex items-center gap-1">
                                                                    {[...Array(5)].map((_, i) => (
                                                                        <Star
                                                                            key={i}
                                                                            className={`size-4 ${i < session.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                                                                                }`}
                                                                        />
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </>
                                    )
                                })()}
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </div>
    )
}
