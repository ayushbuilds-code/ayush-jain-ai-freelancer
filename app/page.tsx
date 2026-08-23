'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  ArrowUpRight,
  Bot,
  Check,
  ChevronDown,
  ChevronRight,
  Clock3,
  Code2,
  Crosshair,
  Globe2,
  Mail,
  Menu,
  MessageCircle,
  PhoneCall,
  Send,
  Sparkles,
  Workflow,
  X,
  Zap,
} from 'lucide-react'
import { portfolioConfig as content } from '@/lib/portfolio-config'

const iconMap = [PhoneCall, MessageCircle, Workflow]

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-3" aria-label="Ayush Dungarwal home">
      <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground shadow-[0_0_24px_var(--glow)]">A</span>
      <span className="font-semibold tracking-tight">Ayush<span className="text-primary">.</span></span>
    </a>
  )
}

function WorkflowVisual() {
  return (
    <div className="workflow-shell relative mx-auto h-[490px] w-full max-w-[510px] overflow-hidden rounded-[28px] border border-white/10 bg-card/70 p-5 shadow-2xl shadow-primary/10 backdrop-blur-xl sm:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_45%,rgba(82,114,255,.16),transparent_42%)]" />
      <div className="relative flex items-center justify-between border-b border-white/10 pb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
        <span className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-emerald-400" /> Workflow live</span>
        <span>AI / 001</span>
      </div>
      <div className="relative flex h-[390px] flex-col items-center justify-center gap-3">
        {content.hero.workflowSteps.map((step, index) => (
          <div key={step} className="flex w-full max-w-[275px] flex-col items-center">
            <div className={`workflow-node flex w-full items-center gap-3 rounded-xl border px-4 py-3 ${index === 1 ? 'border-primary/50 bg-primary/10 shadow-[0_0_30px_var(--glow)]' : 'border-white/10 bg-white/[0.04]'}`}>
              <span className={`flex size-8 items-center justify-center rounded-lg ${index === 1 ? 'bg-primary text-primary-foreground' : 'bg-white/10 text-primary'}`}>
                {index === 0 ? <Crosshair size={15} /> : index === 1 ? <Bot size={15} /> : index === 2 ? <Sparkles size={15} /> : index === 3 ? <Zap size={15} /> : <Check size={15} />}
              </span>
              <span className="text-sm font-medium">{step}</span>
              {index === 1 && <span className="ml-auto text-[10px] uppercase tracking-wider text-primary">Active</span>}
            </div>
            {index < content.hero.workflowSteps.length - 1 && <div className="workflow-line h-5 w-px bg-primary/40" />}
          </div>
        ))}
      </div>
      <div className="absolute left-4 top-24 hidden -translate-x-1/4 rounded-lg border border-white/10 bg-background/80 px-3 py-2 text-xs shadow-xl sm:block"><span className="mr-2 inline-block size-1.5 rounded-full bg-primary" />AI Lead Qualification</div>
      <div className="absolute right-3 top-40 hidden translate-x-1/4 rounded-lg border border-white/10 bg-background/80 px-3 py-2 text-xs shadow-xl sm:block"><span className="mr-2 inline-block size-1.5 rounded-full bg-emerald-400" />Voice Agent</div>
      <div className="absolute bottom-28 left-2 hidden -translate-x-1/4 rounded-lg border border-white/10 bg-background/80 px-3 py-2 text-xs shadow-xl sm:block"><span className="mr-2 inline-block size-1.5 rounded-full bg-orange-400" />Workflow Automated</div>
      <div className="absolute bottom-20 right-1 hidden translate-x-1/4 rounded-lg border border-white/10 bg-background/80 px-3 py-2 text-xs shadow-xl sm:block"><span className="mr-2 inline-block size-1.5 rounded-full bg-violet-400" />24/7 Engagement</div>
    </div>
  )
}

function ServiceModal({ service, onClose }: { service: (typeof content.services)[number]; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-md" role="dialog" aria-modal="true" aria-label={service.title} onClick={onClose}>
      <div className="relative w-full max-w-lg rounded-2xl border border-white/10 bg-card p-7 shadow-2xl" onClick={(event) => event.stopPropagation()}>
        <button onClick={onClose} className="absolute right-4 top-4 rounded-lg p-2 text-muted-foreground transition hover:bg-white/10 hover:text-foreground" aria-label="Close dialog"><X size={18} /></button>
        <span className="font-mono text-sm text-primary">SERVICE {service.number}</span>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight">{service.title}</h3>
        <p className="mt-3 leading-7 text-muted-foreground">{service.description}</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {service.useCases.map((useCase) => <div key={useCase} className="flex items-center gap-2 text-sm text-foreground/80"><Check size={15} className="text-primary" />{useCase}</div>)}
        </div>
        <a href="#contact" onClick={onClose} className="mt-7 flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110">Discuss this solution <ArrowUpRight size={16} /></a>
      </div>
    </div>
  )
}

function ProjectModal({ project, onClose }: { project: (typeof content.projects)[number]; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-md" role="dialog" aria-modal="true" aria-label={project.title} onClick={onClose}>
      <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-card shadow-2xl" onClick={(event) => event.stopPropagation()}>
        <div className="relative h-52 sm:h-64"><Image src={project.image} alt="" fill className="object-cover opacity-80" sizes="(max-width: 768px) 100vw, 672px" /><div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" /><button onClick={onClose} className="absolute right-4 top-4 rounded-lg bg-background/70 p-2 text-muted-foreground transition hover:text-foreground" aria-label="Close dialog"><X size={18} /></button></div>
        <div className="p-7"><span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{project.category}</span><h3 className="mt-4 text-2xl font-semibold tracking-tight">{project.title}</h3><p className="mt-3 leading-7 text-muted-foreground">{project.description}</p><a href="#contact" onClick={onClose} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">Discuss a similar project <ArrowUpRight size={16} /></a></div>
      </div>
    </div>
  )
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeService, setActiveService] = useState<(typeof content.services)[number] | null>(null)
  const [activeProject, setActiveProject] = useState<(typeof content.projects)[number] | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const navItems = ['Home', 'Services', 'Pricing', 'Work', 'About', 'Process', 'Contact']
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFormState('loading')
    const form = event.currentTarget
    const values = Object.fromEntries(new FormData(form).entries())
    try {
      const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(values) })
      if (!response.ok) throw new Error('Request failed')
      setFormState('success')
      form.reset()
    } catch { setFormState('error') }
  }

  return (
    <main id="home" className="overflow-hidden">
      <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-background/75 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10"><Logo /><nav className="hidden items-center gap-7 lg:flex">{navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-muted-foreground transition hover:text-foreground">{item}</a>)}</nav><div className="hidden lg:block"><a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition hover:brightness-110">Start a Project <ArrowUpRight size={15} /></a></div><button onClick={() => setMenuOpen(!menuOpen)} className="rounded-lg p-2 text-muted-foreground lg:hidden" aria-label="Toggle menu" aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button></div>
        {menuOpen && <nav className="border-t border-white/[0.06] bg-background px-5 py-4 lg:hidden">{navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="block py-3 text-sm text-muted-foreground">{item}</a>)}<a href="#contact" onClick={() => setMenuOpen(false)} className="mt-2 flex items-center justify-center rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground">Start a Project</a></nav>}
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-20 sm:px-8 sm:pt-28 lg:grid-cols-[1fr_0.9fr] lg:gap-20 lg:px-10 lg:pb-28 lg:pt-32"><div className="animate-rise"><div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.07] px-3 py-1.5 text-[10px] font-semibold tracking-[0.16em] text-primary sm:text-xs"><span className="size-1.5 animate-pulse rounded-full bg-primary" />{content.hero.badge}</div><h1 className="max-w-3xl text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-7xl lg:text-[5.5rem]">Build Less <span className="text-primary">Manually.</span><br />Automate More <span className="hero-underline">Intelligently.</span></h1><p className="mt-7 max-w-xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">{content.hero.subheading}</p><div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground transition hover:brightness-110">{content.hero.cta1} <ArrowUpRight size={17} /></a><a href="#work" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 px-5 py-3.5 text-sm font-semibold transition hover:border-primary/50 hover:bg-primary/5">{content.hero.cta2} <ChevronRight size={17} /></a></div><p className="mt-5 text-xs text-muted-foreground">{content.hero.trust}</p></div><div className="animate-rise [animation-delay:120ms]"><WorkflowVisual /></div></section>

      <section className="border-y border-white/[0.07] bg-white/[0.02]" aria-label="Capabilities"><div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-7 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10"><p className="max-w-xs text-sm leading-6 text-muted-foreground">{content.trustBar.text}</p><div className="flex flex-wrap gap-2">{content.trustBar.capabilities.map((capability) => <span key={capability} className="rounded-md border border-white/10 px-3 py-2 text-xs text-foreground/75">{capability}</span>)}</div><span className="flex shrink-0 items-center gap-2 text-xs text-muted-foreground"><Globe2 size={15} className="text-primary" /> Working internationally</span></div></section>

      <section id="services" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-24 sm:px-8 lg:px-10 lg:py-32"><div className="max-w-2xl"><span className="eyebrow">What I build</span><h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">AI Solutions Built Around Your Business</h2><p className="mt-5 leading-7 text-muted-foreground">Choose a focused AI solution or combine multiple systems into one intelligent workflow.</p></div><div className="mt-14 grid gap-4 lg:grid-cols-3">{content.services.map((service, index) => { const Icon = iconMap[index]; return <article key={service.id} className={`group relative rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/[0.04] sm:p-8 ${index === 1 ? 'border-primary/30 bg-primary/[0.035]' : 'border-white/10 bg-card/50'}`}><div className="flex items-center justify-between"><span className="font-mono text-xs text-primary">SERVICE {service.number}</span><Icon size={22} className="text-primary" /></div><h3 className="mt-12 text-2xl font-semibold tracking-tight">{service.title}</h3><p className="mt-4 min-h-24 text-sm leading-6 text-muted-foreground">{service.description}</p><ul className="mt-7 space-y-3 border-t border-white/10 pt-6">{service.useCases.slice(0, 5).map((item) => <li key={item} className="flex items-center gap-2 text-sm text-foreground/75"><Check size={14} className="text-primary" />{item}</li>)}</ul><button onClick={() => setActiveService(service)} className="mt-8 flex items-center gap-2 text-sm font-semibold text-primary transition group-hover:gap-3">{service.cta} <ArrowUpRight size={16} /></button></article> })}</div></section>

      <section id="pricing" className="border-y border-white/[0.07] bg-white/[0.015] scroll-mt-20"><div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32"><div className="max-w-2xl"><span className="eyebrow">Investment</span><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Simple Pricing. Practical AI.</h2><p className="mt-5 leading-7 text-muted-foreground">Start with what your business needs. Every solution can be customized around your workflow.</p></div><div className="mt-14 grid gap-4 lg:grid-cols-3">{content.pricing.map((plan, index) => <article key={plan.title} className={`rounded-2xl border p-6 sm:p-8 ${index === 1 ? 'border-primary/40 bg-primary/[0.04]' : 'border-white/10 bg-card/50'}`}><span className="font-mono text-xs text-primary">PLAN 0{index + 1}</span><h3 className="mt-8 text-xl font-semibold">{plan.title}</h3><p className="mt-4 text-2xl font-semibold tracking-tight">{plan.price}</p><ul className="mt-7 space-y-3 border-t border-white/10 pt-6">{plan.items.map((item) => <li key={item} className="flex items-center gap-2 text-sm text-foreground/75"><Check size={14} className="text-primary" />{item}</li>)}</ul><a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">Get a Quote <ArrowUpRight size={15} /></a></article>)}</div><p className="mt-8 text-xs text-muted-foreground">Final pricing depends on requirements, integrations, usage, and complexity.</p></div></section>

      <section id="work" className="border-y border-white/[0.07] bg-white/[0.015] scroll-mt-20"><div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32"><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><span className="eyebrow">Selected work</span><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Systems that do the work.</h2></div><p className="max-w-sm text-sm leading-6 text-muted-foreground">A selection of practical AI systems and automation workflows built around real business needs.</p></div><div className="mt-14 grid gap-5 sm:grid-cols-2">{content.projects.map((project) => <button key={project.id} onClick={() => setActiveProject(project)} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card text-left transition hover:-translate-y-1 hover:border-primary/40"><div className="relative aspect-[1.55] overflow-hidden"><Image src={project.image} alt="" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0" /><div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" /><span className="absolute left-5 top-5 rounded-full border border-white/20 bg-background/60 px-3 py-1 text-[11px] text-white backdrop-blur">{project.category}</span></div><div className="p-6"><h3 className="text-lg font-semibold">{project.title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{project.description}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">View project <ArrowUpRight size={15} /></span></div></button>)}</div></div></section>

      <section id="about" className="mx-auto grid max-w-7xl scroll-mt-20 gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-10 lg:py-32"><div><span className="eyebrow">About</span><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Practical AI.<br /><span className="text-primary">Thoughtfully built.</span></h2></div><div className="max-w-2xl"><p className="text-xl leading-9 text-foreground/90">I&apos;m Ayush, an independent AI freelancer and automation specialist helping businesses worldwide replace repetitive manual work with intelligent systems.</p><p className="mt-6 leading-7 text-muted-foreground">From voice agents and customer-facing chat to connected business workflows, I build focused solutions that are useful, maintainable, and designed around the way your team already works.</p><div className="mt-10 grid gap-4 sm:grid-cols-3"><div className="border-l border-primary pl-4"><Code2 className="mb-3 text-primary" size={20} /><span className="text-sm font-medium">Builder mindset</span></div><div className="border-l border-primary pl-4"><Crosshair className="mb-3 text-primary" size={20} /><span className="text-sm font-medium">Business focused</span></div><div className="border-l border-primary pl-4"><Globe2 className="mb-3 text-primary" size={20} /><span className="text-sm font-medium">Global collaboration</span></div></div></div></section>

      <section id="process" className="border-y border-white/[0.07] bg-white/[0.015] scroll-mt-20"><div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32"><div className="max-w-2xl"><span className="eyebrow">How it works</span><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">A clear path from idea to impact.</h2></div><div className="mt-14 grid gap-0 md:grid-cols-5">{content.process.map((item, index) => <div key={item.step} className="relative border-l border-white/10 py-5 pl-6 md:border-l-0 md:border-t md:py-6 md:pl-0 md:pr-6"><div className="absolute left-[-4px] top-5 size-2 rounded-full bg-primary md:left-0 md:top-[-4px]" /><span className="font-mono text-xs text-primary">{item.step}</span><h3 className="mt-4 text-base font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>{index < content.process.length - 1 && <ChevronRight className="absolute -right-3 top-[-13px] hidden bg-background text-primary md:block" size={24} />}</div>)}</div></div></section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-10 lg:py-32"><div><span className="eyebrow">Questions</span><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Before we start.</h2></div><div className="divide-y divide-white/10">{content.faq.map((item, index) => <div key={item.question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="flex w-full items-center justify-between gap-5 py-5 text-left text-sm font-medium" aria-expanded={openFaq === index}><span>{item.question}</span><ChevronDown size={17} className={`shrink-0 text-primary transition ${openFaq === index ? 'rotate-180' : ''}`} /></button>{openFaq === index && <p className="pb-5 pr-8 text-sm leading-6 text-muted-foreground">{item.answer}</p>}</div>)}</div></section>

      <section id="contact" className="scroll-mt-20 border-t border-white/[0.07] bg-primary/[0.04]"><div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24 lg:px-10 lg:py-32"><div><span className="eyebrow">Let&apos;s talk</span><h2 className="mt-4 text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">{content.contact.heading}</h2><p className="mt-5 max-w-md leading-7 text-muted-foreground">{content.contact.subheading}</p><div className="mt-10 flex flex-col gap-3 sm:flex-row lg:flex-col"><a href={content.personal.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground transition hover:brightness-110"><MessageCircle size={17} /> {content.contact.primaryCta}</a><a href={`mailto:${content.personal.email}`} className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 px-5 py-3.5 text-sm font-semibold transition hover:border-primary/50"><Mail size={17} /> {content.contact.secondaryCta}</a></div><p className="mt-6 flex items-center gap-2 text-xs text-muted-foreground"><Clock3 size={14} className="text-primary" /> Typically replies within 24 hours</p></div><form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-card/70 p-6 shadow-2xl sm:p-8"><input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" /><div className="grid gap-5 sm:grid-cols-2"><label className="grid gap-2 text-sm font-medium">Name<input name="name" required className="rounded-lg border border-white/10 bg-background/70 px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary" placeholder="Your name" /></label><label className="grid gap-2 text-sm font-medium">Email<input name="email" type="email" required className="rounded-lg border border-white/10 bg-background/70 px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary" placeholder="you@company.com" /></label></div><div className="mt-5 grid gap-5 sm:grid-cols-2"><label className="grid gap-2 text-sm font-medium">WhatsApp number<input name="whatsapp" required className="rounded-lg border border-white/10 bg-background/70 px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary" placeholder="+91 ..." /></label><label className="grid gap-2 text-sm font-medium">Company / Business<input name="company" className="rounded-lg border border-white/10 bg-background/70 px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary" placeholder="Your company" /></label></div><div className="mt-5 grid gap-5 sm:grid-cols-2"><label className="grid gap-2 text-sm font-medium">Country<input name="country" className="rounded-lg border border-white/10 bg-background/70 px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary" placeholder="Where are you based?" /></label><label className="grid gap-2 text-sm font-medium">Service interested in<select name="service" className="rounded-lg border border-white/10 bg-background/70 px-4 py-3 text-sm outline-none focus:border-primary"><option>AI Voice Calling Agent</option><option>AI Chat Agent</option><option>Custom Automation</option><option>Not Sure Yet</option></select></label></div><label className="mt-5 grid gap-2 text-sm font-medium">What can I help you automate?<textarea name="message" required rows={5} className="resize-none rounded-lg border border-white/10 bg-background/70 px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary" placeholder="Tell me a little about your workflow or idea..." /></label><button disabled={formState === 'loading'} className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground transition hover:brightness-110 disabled:opacity-60">{formState === 'loading' ? 'Sending...' : <><Send size={16} /> Send inquiry</>}</button>{formState === 'success' && <p className="mt-4 text-center text-sm text-emerald-400">{content.contact.successMessage}</p>}{formState === 'error' && <p className="mt-4 text-center text-sm text-red-400">Something went wrong. Please try WhatsApp or email instead.</p>}</form></div></section>

      <footer className="border-t border-white/[0.07]"><div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10"><Logo /><p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Ayush Dungarwal. Independent AI freelancer.</p><a href="#home" className="text-xs text-muted-foreground hover:text-primary">Back to top ↑</a></div></footer>
      <a href={content.personal.whatsapp} target="_blank" rel="noreferrer" className="fixed bottom-5 right-5 z-30 flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition hover:scale-105" aria-label="Chat on WhatsApp"><MessageCircle size={22} /></a>
      {activeService && <ServiceModal service={activeService} onClose={() => setActiveService(null)} />}
      {activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}
    </main>
  )
}
