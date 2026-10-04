"use client";

// ===========================================================================
// PWA INSTALL BANNER + SERVICE WORKER REGISTRATION
//
// Do kaam karta hai:
//   1. Service worker register karta hai (offline support + install eligibility)
//   2. Page ke sabse upar ek banner dikhata hai: "Install App"
//
// Android/Chrome: browser `beforeinstallprompt` event deta hai — use rok ke
// apna sundar banner dikhate hain, aur user ke click par native install
// dialog khola jaata hai.
//
// iPhone/iPad: Apple install prompt support nahi karta. Wahan hum banner par
// click hone par step-by-step instructions dikhate hain (Share -> Add to
// Home Screen) — yahi iOS par ekmaatra tareeka hai.
//
// Banner dubara dikhne ke rules:
//   - App pehle se installed hai  -> kabhi nahi
//   - User ne close kiya          -> 14 din baad
//   - User ne install kar liya    -> kabhi nahi
// ===========================================================================

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X, Download, Share, SquarePlus } from "lucide-react";
import { COMPANY } from "@/lib/constants";

/** Chrome ka non-standard event — TypeScript ke DOM types me nahi hai. */
interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const DISMISS_KEY = "agv-install-dismissed-at";
const DISMISS_DAYS = 14;

export default function InstallApp() {
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);
  const [visible, setVisible] = useState(false);
  // isIOS ko ref me rakhte hain, state me nahi — ye sirf click handler me
  // chahiye, render ko isse badalna nahi padta (aur effect ke andar seedha
  // setState karna cascading renders trigger karta hai).
  const isIOS = useRef(false);
  const [showIOSHelp, setShowIOSHelp] = useState(false);

  // ---- Service worker registration ----
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;
    // Page load ke baad register karte hain taaki pehle render par asar na ho.
    // Dev build me ?dev=1 bhejte hain taaki service worker caching skip kare
    // (warna code change karne par browser purana version dikhata rehta hai).
    const swUrl =
      process.env.NODE_ENV === "development" ? "/sw.js?dev=1" : "/sw.js";
    const register = () => {
      navigator.serviceWorker.register(swUrl).catch(() => {
        // Registration fail ho to website normal chalti rahegi — sirf
        // offline support aur install prompt nahi milega.
      });
    };
    if (document.readyState === "complete") register();
    else {
      window.addEventListener("load", register);
      return () => window.removeEventListener("load", register);
    }
  }, []);

  // ---- Install prompt handling ----
  useEffect(() => {
    // Pehle se app ke andar chal rahe hain? To banner ka koi matlab nahi.
    const standalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      // iOS Safari ka apna flag
      (window.navigator as Navigator & { standalone?: boolean }).standalone === true;
    if (standalone) return;

    // User ne haal hi me band kiya tha?
    try {
      const at = Number(localStorage.getItem(DISMISS_KEY));
      if (at && Date.now() - at < DISMISS_DAYS * 24 * 60 * 60 * 1000) return;
    } catch {
      // private mode me localStorage throw kar sakta hai — ignore.
    }

    const ios = /iphone|ipad|ipod/i.test(navigator.userAgent);
    const isSafari =
      /safari/i.test(navigator.userAgent) && !/crios|fxios|edgios/i.test(navigator.userAgent);

    if (ios && isSafari) {
      isIOS.current = true;
      // iOS par koi event nahi aata — thoda ruk ke khud dikhate hain.
      const t = setTimeout(() => setVisible(true), 2500);
      return () => clearTimeout(t);
    }

    const onPrompt = (e: Event) => {
      e.preventDefault(); // browser ka default mini-infobar roko
      setDeferred(e as BeforeInstallPromptEvent);
      setVisible(true);
    };
    const onInstalled = () => {
      setVisible(false);
      setDeferred(null);
    };

    window.addEventListener("beforeinstallprompt", onPrompt);
    window.addEventListener("appinstalled", onInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", onPrompt);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  const dismiss = useCallback(() => {
    setVisible(false);
    setShowIOSHelp(false);
    try {
      localStorage.setItem(DISMISS_KEY, String(Date.now()));
    } catch {
      // ignore
    }
  }, []);

  const install = useCallback(async () => {
    if (isIOS.current) {
      setShowIOSHelp(true);
      return;
    }
    if (!deferred) return;
    await deferred.prompt();
    const { outcome } = await deferred.userChoice;
    setDeferred(null);
    if (outcome === "accepted") setVisible(false);
    else dismiss();
  }, [deferred, dismiss]);

  if (!visible) return null;

  return (
    <>
      {/* ---- Top banner ---- */}
      <div className="animate-fade-up relative z-60 w-full bg-linear-to-r from-green-800 via-green-700 to-green-800 text-white">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:gap-4 sm:px-6 lg:px-8">
          <Image
            src="/icons/icon-192.png"
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 shrink-0 rounded-lg ring-1 ring-white/20"
          />

          {/* Chhoti screen par chhota text — warna truncate ho ke "Install the
              Agro Gre..." jaisa adhoora dikhta hai. */}
          <div className="min-w-0 flex-1">
            <p className="truncate font-display text-sm font-bold sm:text-base">
              <span className="sm:hidden">Install our app</span>
              <span className="hidden sm:inline">
                Install the {COMPANY.shortName} app
              </span>
            </p>
            <p className="truncate text-xs text-green-100/80 sm:text-sm">
              <span className="sm:hidden">Add to your home screen</span>
              <span className="hidden sm:inline">
                Add it to your home screen — opens instantly, works offline.
              </span>
            </p>
          </div>

          <button
            type="button"
            onClick={install}
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-amber-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:px-5"
          >
            <Download className="h-4 w-4" />
            Install
          </button>

          <button
            type="button"
            onClick={dismiss}
            aria-label="Dismiss install banner"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-green-100 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* ---- iOS instructions (Apple install prompt support nahi karta) ---- */}
      {showIOSHelp && (
        <div
          className="fixed inset-0 z-100 flex items-end justify-center bg-black/60 p-4 backdrop-blur-sm sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="ios-install-title"
          onClick={dismiss}
        >
          <div
            className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl dark:bg-[#1a241e]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start gap-3">
              <Image
                src="/icons/icon-192.png"
                alt=""
                width={44}
                height={44}
                className="h-11 w-11 rounded-xl"
              />
              <div className="flex-1">
                <h2
                  id="ios-install-title"
                  className="font-display text-lg font-bold text-slate-900 dark:text-white"
                >
                  Add to Home Screen
                </h2>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  Two quick steps in Safari:
                </p>
              </div>
            </div>

            <ol className="mt-5 space-y-4">
              <li className="flex items-center gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-700 text-xs font-bold text-white">
                  1
                </span>
                <span className="flex flex-1 items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                  Tap the <Share className="h-4 w-4 text-green-700 dark:text-green-400" />
                  <strong className="font-semibold">Share</strong> button below
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-700 text-xs font-bold text-white">
                  2
                </span>
                <span className="flex flex-1 items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                  Choose{" "}
                  <SquarePlus className="h-4 w-4 text-green-700 dark:text-green-400" />
                  <strong className="font-semibold">Add to Home Screen</strong>
                </span>
              </li>
            </ol>

            <button
              type="button"
              onClick={dismiss}
              className="mt-7 w-full rounded-full bg-green-700 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-800"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
}
