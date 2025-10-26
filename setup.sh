#!/usr/bin/env bash
set -euo pipefail

echo "Creating Vybout Business Next.js app structure..."

# Create app route-group folders (quote parentheses)
mkdir -p "app/(auth)/login" "app/(auth)/register" "app/(auth)/forgot-password"
mkdir -p "app/(dashboard)/listings" "app/(dashboard)/events" "app/(dashboard)/jobs"
mkdir -p "app/(dashboard)/payments" "app/(dashboard)/campaigns" "app/(dashboard)/analytics" "app/(dashboard)/settings"
mkdir -p app/feed app/posts app/notifications app/webhooks

# Components, lib, hooks, context, types, services
mkdir -p components/ui components/layout components/feed components/posts components/jobs components/wallet
mkdir -p lib/yupSchemas hooks context types services public/images public/icons prisma

# Root app files
cat > app/layout.tsx <<'TSX'
import "./globals.css";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
TSX

cat > app/page.tsx <<'TSX'
export default function HomePage() {
  return <main className="p-8"><h1 className="text-2xl font-bold">Vybout Business — Welcome</h1></main>;
}
TSX

cat > app/globals.css <<'CSS'
@tailwind base;
@tailwind components;
@tailwind utilities;

html,body,#root { height: 100%; }
body { margin: 0; font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; }
CSS

# Auth pages
cat > "app/(auth)/login/page.tsx" <<'TSX'
export default function LoginPage() {
  return <div className="p-8">Login page (placeholder)</div>;
}
TSX

cat > "app/(auth)/register/page.tsx" <<'TSX'
export default function RegisterPage() {
  return <div className="p-8">Register page (placeholder)</div>;
}
TSX

cat > "app/(auth)/forgot-password/page.tsx" <<'TSX'
export default function ForgotPasswordPage() {
  return <div className="p-8">Forgot password (placeholder)</div>;
}
TSX

# Dashboard shell + overview
cat > "app/(dashboard)/layout.tsx" <<'TSX'
import React from 'react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-gray-50 p-4">Sidebar (placeholder)</aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
TSX

cat > "app/(dashboard)/page.tsx" <<'TSX'
export default function DashboardIndex() {
  return <div>Business Dashboard — metrics overview (placeholder)</div>;
}
TSX

# Listings CRUD placeholders
cat > "app/(dashboard)/listings/page.tsx" <<'TSX'
export default function ListingsPage() { return <div>Listings — all places</div>; }
TSX
cat > "app/(dashboard)/listings/create.page.tsx" <<'TSX'
export default function CreateListingPage() { return <div>Create listing form</div>; }
TSX

# Events placeholders
cat > "app/(dashboard)/events/page.tsx" <<'TSX'
export default function EventsPage() { return <div>Events list</div>; }
TSX

# Jobs placeholders
cat > "app/(dashboard)/jobs/page.tsx" <<'TSX'
export default function JobsPage() { return <div>Jobs/Creator gigs</div>; }
TSX

# Payments placeholders
cat > "app/(dashboard)/payments/page.tsx" <<'TSX'
export default function PaymentsPage() { return <div>Wallet & Payments</div>; }
TSX

# Feed & posts (public)
cat > app/feed/page.tsx <<'TSX'
export default function FeedPage() { return <div>Short-form feed (placeholder)</div>; }
TSX

cat > app/posts/page.tsx <<'TSX'
export default function PostsPage() { return <div>Community posts (business view)</div>; }
TSX

# Notifications + webhooks
cat > app/notifications/page.tsx <<'TSX'
export default function NotificationsPage() { return <div>Notifications (placeholder)</div>; }
TSX

cat > app/webhooks/payment.ts <<'TSX'
export async function POST(req: Request) {
  return new Response('ok');
}
TSX

# Components (basic)
cat > components/ui/Button.tsx <<'TSX'
export const Button = ({ children, ...props }: any) => (
  <button {...props} className={`px-3 py-2 rounded bg-vybout text-white ${props.className ?? ''}`}>{children}</button>
);
TSX

cat > components/layout/Sidebar.tsx <<'TSX'
export default function Sidebar(){ return <aside>Sidebar</aside>; }
TSX

cat > components/feed/FeedCard.tsx <<'TSX'
export default function FeedCard(){ return <div className="card">Feed card</div>; }
TSX

# lib files
cat > lib/apiClient.ts <<'TS'
import axios from 'axios';
const api = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL });
export default api;
TS

cat > lib/payments.ts <<'TS'
export const topUp = async () => { /* implement paystack/flutterwave */ };
TS

# yup schemas placeholders
cat > lib/yupSchemas/listingSchema.ts <<'TS'
import * as yup from 'yup';
export const listingSchema = yup.object({ name: yup.string().required() });
TS

# hooks
cat > hooks/useAuth.ts <<'TS'
export function useAuth(){ return { user: null }; }
TS

cat > hooks/useFeed.ts <<'TS'
export function useFeed(){ return { data: [], loading: false }; }
TS

# context
cat > context/AuthProvider.tsx <<'TSX'
'use client';
import React from 'react';
export function AuthProvider({ children }: { children: React.ReactNode }) { return <>{children}</>; }
TSX

# types
cat > types/index.ts <<'TS'
export type ID = string;
TS

# services
cat > services/feedService.ts <<'TS'
import api from '../lib/apiClient';
export const fetchFeed = () => api.get('/feed');
TS

# README
cat > README.md <<'MD'
# Vybout Business (Outsy)
Scaffold generated from PRD — business admin + public feed. Fill in modules: Feed, Posts, Jobs, Wallet, AI, Web3.
MD

echo "Structure created. Open files to fill in details."
