'use client'

import { useState } from "react"
import { LayoutDashboard, Users, Briefcase, MessageSquare, Bell, User, Search, Phone, Video, Star, MoreVertical, Paperclip, Smile, Send, Mic, Monitor, X, Camera, MicOff, CameraOff } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, href: '/athlete/dashboard' },
    { id: 'coaches', label: 'Coaches', icon: Users, href: '/athlete/coaches' },
    { id: 'consultants', label: 'Consultants', icon: Briefcase, href: '/athlete/consultants' },
    { id: 'chats', label: 'Chats', icon: MessageSquare, href: '/athlete/chats' },
]

// Sample conversations data
const conversations = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Coach",
        lastMessage: "Great progress! Let's schedule your next session.",
        timestamp: "2m ago",
        unread: 2,
        online: true,
        photo: "SJ",
    },
    {
        id: 2,
        name: "Marcus Chen",
        role: "Coach",
        lastMessage: "I've updated your training plan. Check it out!",
        timestamp: "1h ago",
        unread: 0,
        online: true,
        photo: "MC",
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        role: "Consultant",
        lastMessage: "Your nutrition plan is ready for review.",
        timestamp: "3h ago",
        unread: 1,
        online: false,
        photo: "ER",
    },
    {
        id: 4,
        name: "David Kim",
        role: "Coach",
        lastMessage: "See you at 5 PM for the session!",
        timestamp: "Yesterday",
        unread: 0,
        online: false,
        photo: "DK",
    },
]

// Sample messages data
const messages = [
    {
        id: 1,
        sender: "coach",
        text: "Hi! How are you feeling today?",
        time: "10:30 AM",
        day: "Today",
    },
    {
        id: 2,
        sender: "athlete",
        text: "Feeling great! Ready for today's workout.",
        time: "10:32 AM",
        day: "Today",
    },
    {
        id: 3,
        sender: "coach",
        text: "Excellent! Let's focus on endurance today. I've prepared a new plan for you.",
        time: "10:33 AM",
        day: "Today",
    },
    {
        id: 4,
        sender: "athlete",
        text: "Sounds good! What's the target distance?",
        time: "10:35 AM",
        day: "Today",
    },
    {
        id: 5,
        sender: "coach",
        text: "We'll aim for 10K at zone 2 pace. Take it easy and focus on form.",
        time: "10:36 AM",
        day: "Today",
    },
    {
        id: 6,
        sender: "coach",
        text: "Great progress! Let's schedule your next session.",
        time: "10:45 AM",
        day: "Today",
    },
]

export default function AthleteChats() {
    const [activeItem, setActiveItem] = useState('chats')
    const [activeTab, setActiveTab] = useState('chats')
    const [selectedChat, setSelectedChat] = useState(conversations[0])
    const [showVideoCall, setShowVideoCall] = useState(false)
    const [videoEnabled, setVideoEnabled] = useState(true)
    const [audioEnabled, setAudioEnabled] = useState(true)

    return (
        <div className="flex h-screen bg-background">
            {/* Sidebar - Blue */}
            <aside className="w-64 bg-accent flex flex-col">
                <div className="h-16 flex items-center justify-center border-b border-accent-foreground/10">
                    <h1 className="text-xl font-bold text-white">AthletyQ</h1>
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
                {/* Top Navbar - White */}
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

                {/* Chat Interface */}
                <div className="flex-1 flex overflow-hidden">
                    {/* PANEL 2 - Conversation List */}
                    <aside className="w-80 bg-white border-r border-border flex flex-col">
                        {/* Search Bar */}
                        <div className="p-4 border-b border-border">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                                <Input
                                    type="text"
                                    placeholder="Search conversations…"
                                    className="pl-9 rounded-full"
                                />
                            </div>
                        </div>

                        {/* Tabs */}
                        <div className="flex border-b border-border px-4">
                            <button
                                onClick={() => setActiveTab('chats')}
                                className={`flex-1 py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === 'chats'
                                        ? 'border-accent text-accent'
                                        : 'border-transparent text-foreground/60 hover:text-foreground'
                                    }`}
                            >
                                Chats
                            </button>
                            <button
                                onClick={() => setActiveTab('calls')}
                                className={`flex-1 py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === 'calls'
                                        ? 'border-accent text-accent'
                                        : 'border-transparent text-foreground/60 hover:text-foreground'
                                    }`}
                            >
                                Calls
                            </button>
                            <button
                                onClick={() => setActiveTab('archived')}
                                className={`flex-1 py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === 'archived'
                                        ? 'border-accent text-accent'
                                        : 'border-transparent text-foreground/60 hover:text-foreground'
                                    }`}
                            >
                                Archived
                            </button>
                        </div>

                        {/* Conversation List */}
                        <div className="flex-1 overflow-y-auto">
                            {conversations.map((conv) => (
                                <button
                                    key={conv.id}
                                    onClick={() => setSelectedChat(conv)}
                                    className={`w-full p-4 flex items-start gap-3 hover:bg-muted/50 transition-colors border-b border-border ${selectedChat.id === conv.id ? 'bg-muted/50' : ''
                                        }`}
                                >
                                    <div className="relative shrink-0">
                                        <div className="size-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-semibold">
                                            {conv.photo}
                                        </div>
                                        {conv.online && (
                                            <span className="absolute bottom-0 right-0 size-3 bg-green-500 rounded-full border-2 border-white" />
                                        )}
                                    </div>

                                    <div className="flex-1 min-w-0 text-left">
                                        <div className="flex items-center justify-between mb-1">
                                            <h4 className="font-semibold text-foreground text-sm truncate">
                                                {conv.name}
                                            </h4>
                                            <span className="text-xs text-muted-foreground shrink-0 ml-2">
                                                {conv.timestamp}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <p className="text-sm text-foreground/70 truncate">
                                                {conv.lastMessage}
                                            </p>
                                            {conv.unread > 0 && (
                                                <span className="size-5 rounded-full bg-accent text-white text-xs flex items-center justify-center shrink-0 ml-2">
                                                    {conv.unread}
                                                </span>
                                            )}
                                        </div>
                                        <span className="inline-block mt-1 px-2 py-0.5 text-xs bg-accent/10 text-accent rounded-full">
                                            {conv.role}
                                        </span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </aside>

                    {/* PANEL 3 - Chat Panel */}
                    <div className="flex-1 flex flex-col bg-background">
                        {/* Chat Header */}
                        <div className="h-16 bg-white border-b border-border flex items-center justify-between px-6">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="size-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-semibold">
                                        {selectedChat.photo}
                                    </div>
                                    {selectedChat.online && (
                                        <span className="absolute bottom-0 right-0 size-2.5 bg-green-500 rounded-full border-2 border-white" />
                                    )}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground">{selectedChat.name}</h3>
                                    <p className="text-xs text-foreground/60">
                                        {selectedChat.online ? 'Online' : 'Last seen 2h ago'}
                                    </p>
                                </div>
                                <span className="px-2 py-1 text-xs bg-accent/10 text-accent rounded-full">
                                    Strength Coach
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <Button variant="ghost" size="icon" className="rounded-full">
                                    <Phone className="size-4" />
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="rounded-full"
                                    onClick={() => setShowVideoCall(true)}
                                >
                                    <Video className="size-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="rounded-full">
                                    <Star className="size-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="rounded-full">
                                    <MoreVertical className="size-4" />
                                </Button>
                            </div>
                        </div>

                        {/* Chat Messages Area */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-4">
                            {/* Day Separator */}
                            <div className="flex items-center gap-3">
                                <div className="h-px flex-1 bg-border" />
                                <span className="text-xs text-muted-foreground">Today</span>
                                <div className="h-px flex-1 bg-border" />
                            </div>

                            {/* Messages */}
                            {messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={`flex ${message.sender === 'athlete' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`max-w-md ${message.sender === 'athlete' ? 'order-2' : ''}`}>
                                        <div
                                            className={`rounded-2xl px-4 py-2 ${message.sender === 'athlete'
                                                    ? 'bg-accent text-white rounded-br-sm'
                                                    : 'bg-white border border-border rounded-bl-sm'
                                                }`}
                                        >
                                            <p className="text-sm">{message.text}</p>
                                        </div>
                                        <span className={`text-xs text-muted-foreground mt-1 block ${message.sender === 'athlete' ? 'text-right' : 'text-left'
                                            }`}>
                                            {message.time}
                                        </span>
                                    </div>
                                </div>
                            ))}

                            {/* Typing Indicator */}
                            <div className="flex justify-start">
                                <div className="bg-white border border-border rounded-2xl rounded-bl-sm px-4 py-3">
                                    <div className="flex gap-1">
                                        <span className="size-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                        <span className="size-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                        <span className="size-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Message Input Bar */}
                        <div className="p-4 bg-white border-t border-border">
                            <div className="flex items-center gap-2">
                                <Button variant="ghost" size="icon" className="shrink-0">
                                    <Paperclip className="size-5" />
                                </Button>
                                <Button variant="ghost" size="icon" className="shrink-0">
                                    <Smile className="size-5" />
                                </Button>
                                <Input
                                    type="text"
                                    placeholder="Type a message..."
                                    className="flex-1 rounded-full"
                                />
                                <Button className="bg-accent hover:bg-accent/90 text-white rounded-full px-6">
                                    <Send className="size-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Video Call Modal */}
            {showVideoCall && (
                <div className="fixed inset-0 bg-black z-50 flex flex-col">
                    {/* Back Button */}
                    <button
                        onClick={() => setShowVideoCall(false)}
                        className="absolute top-4 left-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
                    >
                        <X className="size-6" />
                    </button>

                    {/* Main Video Area */}
                    <div className="flex-1 relative flex items-center justify-center">
                        <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                            <div className="text-center">
                                <div className="size-32 mx-auto rounded-full bg-accent/20 flex items-center justify-center text-accent mb-4">
                                    <span className="text-4xl font-bold">SJ</span>
                                </div>
                                <p className="text-white text-xl font-semibold">Sarah Johnson</p>
                                <p className="text-white/70 text-sm mt-1">Connecting...</p>
                            </div>
                        </div>

                        {/* Small Self-View Window */}
                        <div className="absolute top-4 right-4 w-48 h-36 bg-gray-800 rounded-xl overflow-hidden shadow-2xl border-2 border-white/20">
                            <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                                <div className="size-16 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                                    <User className="size-8" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Video Call Controls */}
                    <div className="p-8 flex items-center justify-center gap-4">
                        <Button
                            variant={audioEnabled ? "outline" : "destructive"}
                            size="icon"
                            className="size-14 rounded-full bg-white/10 border-white/20 hover:bg-white/20"
                            onClick={() => setAudioEnabled(!audioEnabled)}
                        >
                            {audioEnabled ? (
                                <Mic className="size-6 text-white" />
                            ) : (
                                <MicOff className="size-6 text-white" />
                            )}
                        </Button>

                        <Button
                            variant={videoEnabled ? "outline" : "destructive"}
                            size="icon"
                            className="size-14 rounded-full bg-white/10 border-white/20 hover:bg-white/20"
                            onClick={() => setVideoEnabled(!videoEnabled)}
                        >
                            {videoEnabled ? (
                                <Camera className="size-6 text-white" />
                            ) : (
                                <CameraOff className="size-6 text-white" />
                            )}
                        </Button>

                        <Button
                            variant="outline"
                            size="icon"
                            className="size-14 rounded-full bg-white/10 border-white/20 hover:bg-white/20"
                        >
                            <Monitor className="size-6 text-white" />
                        </Button>

                        <Button
                            variant="destructive"
                            size="icon"
                            className="size-14 rounded-full"
                            onClick={() => setShowVideoCall(false)}
                        >
                            <Phone className="size-6 rotate-[135deg]" />
                        </Button>
                    </div>
                </div>
            )}
        </div>
    )
}
