"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Copy, Check } from "lucide-react";
import confetti from "canvas-confetti";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [copiedType, setCopiedType] = useState<"email" | "phone1" | "phone2" | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const copyToClipboard = (text: string, type: "email" | "phone1" | "phone2") => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Build mailto link — opens the recruiter's email client with everything pre-filled
    const subject = encodeURIComponent(
      formData.subject || `Message de ${formData.name} via Portfolio`
    );
    const body = encodeURIComponent(
      `Nom : ${formData.name}\nEmail : ${formData.email}\n\n${formData.message}`
    );
    const mailtoLink = `mailto:aroletasse7@gmail.com?subject=${subject}&body=${body}`;

    // Short delay for UX feel, then open mail client
    setTimeout(() => {
      window.location.href = mailtoLink;

      setIsSubmitting(false);
      setSubmitStatus("success");

      // Trigger canvas-confetti celebration
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });

      // Reset Form
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Clear success notification after 6s
      setTimeout(() => setSubmitStatus("idle"), 6000);
    }, 800);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "aroletasse7@gmail.com",
      action: () => copyToClipboard("aroletasse7@gmail.com", "email"),
      isCopied: copiedType === "email",
      link: "mailto:aroletasse7@gmail.com",
    },
    {
      icon: Phone,
      label: "Téléphone (Orange)",
      value: "+237 691 215 400",
      action: () => copyToClipboard("+237 691 215 400", "phone1"),
      isCopied: copiedType === "phone1",
      link: "tel:+237691215400",
    },
    {
      icon: Phone,
      label: "Téléphone (MTN)",
      value: "+237 620 719 992",
      action: () => copyToClipboard("+237 620 719 992", "phone2"),
      isCopied: copiedType === "phone2",
      link: "tel:+237620719992",
    },
    {
      icon: MapPin,
      label: "Localisation",
      value: "Yaoundé, Cameroun",
      link: "https://maps.google.com/?q=Yaounde,Cameroon",
    },
  ];

  const socialLinks = [
    {
      icon: (props: { className?: string }) => (
        <svg viewBox="0 0 24 24" className={props.className} fill="currentColor">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      ),
      href: "https://github.com/TASSEAROLE",
      label: "GitHub"
    },
    {
      icon: (props: { className?: string }) => (
        <svg viewBox="0 0 24 24" className={props.className} fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      href: "https://linkedin.com/in/arole-tasse",
      label: "LinkedIn"
    },
    {
      icon: (props: { className?: string }) => (
        <svg viewBox="0 0 24 24" className={props.className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      ),
      href: "https://wa.me/237691215400",
      label: "WhatsApp"
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden px-4 border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-xs font-mono tracking-widest text-accent-cyan uppercase">
            Contact
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white">
            Travaillons Ensemble
          </p>
          <div className="h-1 w-12 bg-gradient-to-r from-accent-purple to-accent-cyan mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Methods Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4 text-center lg:text-left">
              <h3 className="text-2xl font-bold text-white tracking-tight">Coordonnées</h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                N'hésitez pas à me contacter par email, téléphone ou via le formulaire. Je réponds généralement sous 24 heures.
              </p>
            </div>

            {/* Methods Cards */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <div
                    key={index}
                    className="glass-card rounded-2xl p-4 border border-white/5 flex items-center justify-between gap-4 group hover:border-white/10 transition duration-300"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="p-3 rounded-xl bg-white/5 text-slate-400 group-hover:text-accent-cyan group-hover:bg-accent-cyan/10 transition duration-300 shrink-0">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">{method.label}</p>
                        <a
                          href={method.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm sm:text-base font-bold text-white hover:text-accent-cyan transition truncate block mt-0.5"
                        >
                          {method.value}
                        </a>
                      </div>
                    </div>

                    {method.action && (
                      <button
                        onClick={method.action}
                        className="p-2 rounded-lg border border-white/5 text-slate-400 hover:text-white hover:bg-white/5 transition duration-150 shrink-0"
                        title="Copier dans le presse-papiers"
                      >
                        {method.isCopied ? (
                          <Check className="h-4 w-4 text-emerald-400 animate-pulse" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Social Circle Links */}
            <div className="space-y-4 pt-2">
              <p className="text-xs font-mono text-slate-500 uppercase tracking-wider text-center lg:text-left">Réseaux & Plateformes :</p>
              <div className="flex items-center justify-center lg:justify-start gap-4">
                {socialLinks.map((social, idx) => {
                  const IconComp = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3.5 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-accent-purple/20 border border-white/5 hover:border-accent-purple/40 hover:scale-110 active:scale-95 transition-all duration-300 shadow-lg"
                      aria-label={social.label}
                    >
                      <IconComp className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Contact Form Element */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 border border-white/5 shadow-2xl relative">
            
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Nom Complet <span className="text-accent-purple">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-accent-purple/50 focus:ring-1 focus:ring-accent-purple/50 transition-all font-sans text-sm"
                    placeholder="Ex: Jerry Arole"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Adresse Email <span className="text-accent-purple">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-accent-purple/50 focus:ring-1 focus:ring-accent-purple/50 transition-all font-sans text-sm"
                    placeholder="Ex: jerry.arole@gmail.com"
                  />
                </div>

              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-accent-purple/50 focus:ring-1 focus:ring-accent-purple/50 transition-all font-sans text-sm"
                  placeholder="Ex: Proposition de collaboration / Stage"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Votre Message <span className="text-accent-purple">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-accent-purple/50 focus:ring-1 focus:ring-accent-purple/50 transition-all font-sans text-sm resize-none"
                  placeholder="Écrivez votre message ici..."
                />
              </div>

              {/* Submit Trigger */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-accent-purple to-accent-blue py-4 rounded-2xl font-bold text-white shadow-[0_4px_20px_rgba(139,92,246,0.3)] hover:brightness-110 active:scale-98 transition disabled:opacity-50 disabled:pointer-events-none"
              >
                {isSubmitting ? (
                  <>Envoi en cours...</>
                ) : (
                  <>
                    Envoyer le message <Send className="h-4 w-4" />
                  </>
                )}
              </button>

              {/* Success Notification Alert */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 rounded-2xl text-center text-sm font-semibold"
                >
                  ✓ Votre application mail s'est ouverte avec le message pré-rempli. Envoyez-le pour finaliser ! 🚀
                </motion.div>
              )}

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
