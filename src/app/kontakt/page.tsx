"use client";

import { useState, type FormEvent } from "react";
import { Mail, MapPin, Send, CheckCircle } from "lucide-react";
import heroBg from "../../../public/images/hero_bg.png";

export default function KontaktPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    // Simulate submission delay
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setSubmitted(true);
  }

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative h-[280px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${heroBg.src}')` }} />
        <div className="absolute inset-0 bg-midnight/40" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-[4.5rem] pb-6 w-full text-center">
          <div className="hero-backdrop px-8 py-5">
            <h1 className="font-display text-2xl lg:text-3xl tracking-tight text-white mb-3">
              Kontaktieren Sie uns
            </h1>
            <p className="hero-text-shadow text-sm text-black leading-relaxed max-w-2xl mx-auto">
              Wir freuen uns auf Ihre Anfrage und stellen Ihnen gerne unsere
              Lösungen vor, um Verwaltungsaufgaben in Ihrer Arztpraxis zu
              automatisieren.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-snow to-transparent" />
      </section>

      {/* ─── Form + Contact Info ─── */}
      <section className="py-16 bg-snow">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="rounded-2xl bg-white border border-violet/10 p-12 text-center">
                  <div className="mx-auto w-16 h-16 rounded-full bg-violet/10 flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-violet" />
                  </div>
                  <h3 className="font-display text-3xl text-midnight mb-4">
                    Vielen Dank!
                  </h3>
                  <p className="text-midnight/50 max-w-md mx-auto">
                    Ihre Nachricht wurde erfolgreich gesendet. Wir melden
                    uns in Kürze bei Ihnen.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl bg-white border border-violet/5 p-8 lg:p-10 shadow-sm"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="nachname"
                        className="block text-sm font-medium text-midnight/70 mb-2"
                      >
                        Nachname <span className="text-violet">*</span>
                      </label>
                      <input
                        id="nachname"
                        name="nachname"
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-midnight/10 bg-snow focus:outline-none focus:ring-2 focus:ring-violet/30 focus:border-violet/40 transition-all text-midnight"
                        placeholder="Mustermann"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="vorname"
                        className="block text-sm font-medium text-midnight/70 mb-2"
                      >
                        Vorname <span className="text-violet">*</span>
                      </label>
                      <input
                        id="vorname"
                        name="vorname"
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-midnight/10 bg-snow focus:outline-none focus:ring-2 focus:ring-violet/30 focus:border-violet/40 transition-all text-midnight"
                        placeholder="Max"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="titel"
                        className="block text-sm font-medium text-midnight/70 mb-2"
                      >
                        Titel
                      </label>
                      <input
                        id="titel"
                        name="titel"
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-midnight/10 bg-snow focus:outline-none focus:ring-2 focus:ring-violet/30 focus:border-violet/40 transition-all text-midnight"
                        placeholder="Dr. med."
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-midnight/70 mb-2"
                      >
                        E-Mail <span className="text-violet">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-midnight/10 bg-snow focus:outline-none focus:ring-2 focus:ring-violet/30 focus:border-violet/40 transition-all text-midnight"
                        placeholder="max@example.de"
                      />
                    </div>
                  </div>

                  <div className="mb-8">
                    <label
                      htmlFor="nachricht"
                      className="block text-sm font-medium text-midnight/70 mb-2"
                    >
                      Nachricht <span className="text-violet">*</span>
                    </label>
                    <textarea
                      id="nachricht"
                      name="nachricht"
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-midnight/10 bg-snow focus:outline-none focus:ring-2 focus:ring-violet/30 focus:border-violet/40 transition-all text-midnight resize-none"
                      placeholder="Wie können wir Ihnen helfen?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="group inline-flex items-center gap-2 bg-violet hover:bg-iris disabled:bg-violet/50 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_32px_rgba(46,125,142,0.4)] hover:-translate-y-0.5 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
                  >
                    {sending ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Wird gesendet...
                      </>
                    ) : (
                      <>
                        Absenden
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-8">
              <div className="rounded-2xl bg-white border border-violet/5 p-8 shadow-sm">
                <h3 className="font-semibold text-midnight mb-6">
                  Kontaktdaten
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-violet shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-midnight">Adresse</p>
                      <p className="text-sm text-midnight/50 mt-1">
                        Medidyne Systems GmbH
                        <br />
                        Nürtingen Str. 52
                        <br />
                        72074 Tübingen
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-violet shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-midnight">E-Mail</p>
                      <a
                        href="mailto:kontakt@medidyne-systems.de"
                        className="text-sm text-violet hover:text-iris transition-colors mt-1 block"
                      >
                        kontakt@medidyne-systems.de
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-violet to-iris p-8 text-white">
                <h3 className="font-semibold mb-3">Kostenlose Demo</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Erleben Sie unsere Lösungen live in einer persönlichen
                  Demo-Session. Schreiben Sie uns einfach — wir melden uns
                  innerhalb von 24 Stunden.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
