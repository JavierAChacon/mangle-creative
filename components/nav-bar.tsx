"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

const navItems = [
  { label: "Servicios", href: "#servicios" },
  { label: "Portafolio", href: "#portafolio" },
  { label: "Filosofía", href: "#filosofia" },
];

export function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-1/2 top-4 z-50 w-[92%] max-w-7xl -translate-x-1/2 md:top-6">
      <div className="rounded-full border border-white/20 bg-white/70 px-4 py-3 shadow-2xl backdrop-blur-xl md:px-8 md:py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="#inicio" className="flex items-center gap-3 cursor-pointer" >
            <Image
              src="/mangle-creative-logo.jpg"
              alt="Logo de Mangle"
              width={45}
              height={45}
              className="h-9 w-auto rounded-full md:h-10"
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-muted transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button
              asChild
              className="rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-white shadow-lg hover:bg-primary-strong"
            >
              <Link href="https://wa.me/584247233675">
                <MessageCircle className="mr-2 h-4 w-4" />
                Agenda ahora
              </Link>
            </Button>
          </div>

          <div className="lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  size="icon"
                  className="h-11 w-11 rounded-full bg-primary text-white hover:bg-primary-strong"
                  aria-label="Abrir menú"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-[88%] max-w-sm border-l border-surface-high bg-surface px-6 py-6"
              >
                <SheetHeader className="mb-6">
                  <SheetTitle className="text-left font-heading text-lg font-black text-foreground">
                    Navegación
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-3">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <a
                        href={item.href}
                        className="rounded-2xl px-4 py-3 font-heading text-sm font-bold uppercase tracking-[0.15em] text-muted transition-colors hover:bg-surface-soft hover:text-primary"
                      >
                        {item.label}
                      </a>
                    </SheetClose>
                  ))}

                  <div className="mt-3">
                    <Button
                      asChild
                      className="w-full rounded-2xl bg-primary py-6 text-sm font-bold text-white hover:bg-primary-strong"
                    >
                      <Link href="https://wa.me/584247233675">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Agenda por WhatsApp
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
