"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { Mail, MapPin, CheckCircle, ExternalLink, Send, CalendarCheck } from "lucide-react";
import { professorData } from "@/data/professor-data";

// Validation Schema for Contact Form
const contactSchema = zod.object({
  name: zod.string().min(2, "Name must be at least 2 characters"),
  email: zod.string().email("Invalid email address"),
  subject: zod.string().min(4, "Subject must be at least 4 characters"),
  message: zod.string().min(10, "Message must be at least 10 characters")
});

type ContactFormInputs = zod.infer<typeof contactSchema>;

export default function Contact() {
  const p = professorData;
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  // Form handling
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = (data: ContactFormInputs) => {
    console.log("Form data:", data);
    setFormSubmitted(true);
    reset();
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingDate || !bookingTime) return;
    setBookingSubmitted(true);
    setTimeout(() => {
      setBookingSubmitted(false);
      setBookingDate("");
      setBookingTime("");
    }, 5000);
  };

  const officeDays = ["Monday", "Wednesday", "Friday"];
  const timeSlots = ["02:00 PM", "03:00 PM", "04:00 PM"];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-primary-emerald font-heading">
          Academic Coordinates
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-custom-fg tracking-tight">
          Connect & Consult
        </h1>
        <p className="text-sm text-custom-muted leading-relaxed">
          Book office consultation appointments, reach out for research collaborations, or drop administrative queries.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Grid Column: Contact Info & Appointment Booking */}
        <div className="lg:col-span-5 space-y-8">
          {/* Office Coordinates */}
          <div className="glass p-8 rounded-3xl border border-custom-border space-y-6">
            <h3 className="font-heading text-base font-bold text-custom-fg border-b border-custom-border/50 pb-4">
              Office Details
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-emerald shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-semibold text-custom-fg block">Location Address</span>
                  <span className="text-custom-muted leading-relaxed">{p.personal.office}</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary-emerald shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-semibold text-custom-fg block">Email Coordinate</span>
                  <a href={`mailto:${p.personal.email}`} className="text-primary-emerald hover:underline font-mono">
                    {p.personal.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4 pt-2 text-[11px] font-mono text-custom-muted border-t border-custom-border/50">
              <a href={p.personal.googleScholar} target="_blank" rel="noopener noreferrer" className="hover:text-primary-emerald flex items-center space-x-1">
                <span>Google Scholar</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <span>|</span>
              <a href={p.personal.scopus} target="_blank" rel="noopener noreferrer" className="hover:text-primary-emerald flex items-center space-x-1">
                <span>Scopus Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Interactive Native Appointment Scheduler */}
          <div className="glass p-8 rounded-3xl border border-custom-border relative overflow-hidden">
            <h3 className="font-heading text-base font-bold text-custom-fg mb-4">
              Office Consultation Scheduler
            </h3>
            <p className="text-xs text-custom-muted leading-relaxed mb-6">
              Select your preferred day and available time slot to schedule a 15-minute consultation.
            </p>

            {bookingSubmitted ? (
              <div className="bg-primary-emerald/10 border border-primary-emerald/20 rounded-2xl p-6 text-center space-y-3">
                <CheckCircle className="w-10 h-10 text-primary-emerald mx-auto" />
                <h4 className="font-heading text-sm font-bold text-custom-fg">Consultation Request Sent</h4>
                <p className="text-[11px] text-custom-muted">
                  Your appointment has been logged. Dr. Das&apos;s office manager will confirm via email details.
                </p>
              </div>
            ) : (
              <form onSubmit={handleBooking} className="space-y-4">
                {/* Day selector */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-custom-muted uppercase block">Consultation Day:</label>
                  <div className="grid grid-cols-3 gap-2">
                    {officeDays.map((day) => (
                      <button
                        type="button"
                        key={day}
                        onClick={() => setBookingDate(day)}
                        className={`py-2 rounded-xl text-[10px] font-semibold uppercase border transition-all ${
                          bookingDate === day
                            ? "bg-primary-emerald text-white border-primary-emerald shadow-md"
                            : "glass border-custom-border text-custom-muted hover:text-custom-fg"
                        }`}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time selector */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-custom-muted uppercase block">Time Session Slot:</label>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        type="button"
                        key={time}
                        onClick={() => setBookingTime(time)}
                        className={`py-2 rounded-xl text-[10px] font-semibold uppercase border transition-all ${
                          bookingTime === time
                            ? "bg-primary-emerald text-white border-primary-emerald shadow-md"
                            : "glass border-custom-border text-custom-muted hover:text-custom-fg"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={!bookingDate || !bookingTime}
                  className="w-full mt-4 py-3 rounded-full text-xs font-semibold bg-gradient-to-r from-primary-emerald to-primary-emerald/80 text-white flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed hover:from-primary-emerald hover:to-primary-emerald/90 transition-all shadow-md"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Request Booking Slot</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Right Grid Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="glass p-8 sm:p-10 rounded-3xl border border-custom-border">
            <h3 className="font-heading text-lg font-bold text-custom-fg mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs text-custom-muted mb-6">
              Fill out the details below. We strive to respond to all academic inquiries within 48 business hours.
            </p>

            {formSubmitted ? (
              <div className="bg-primary-emerald/10 border border-primary-emerald/20 rounded-2xl p-8 text-center space-y-3">
                <CheckCircle className="w-12 h-12 text-primary-emerald mx-auto" />
                <h4 className="font-heading text-base font-bold text-custom-fg">Message Received!</h4>
                <p className="text-xs text-custom-muted max-w-md mx-auto">
                  Thank you for reaching out. Your transmission has been compiled and forwarded to Dr. Das&apos;s academic inbox.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-custom-muted uppercase block">Full Name:</label>
                    <input
                      type="text"
                      {...register("name")}
                      placeholder="e.g. Prof. Alice Smith"
                      className="w-full bg-custom-bg border border-custom-border text-xs rounded-xl px-4 py-3 text-custom-fg focus:outline-none focus:border-primary-emerald transition-colors"
                    />
                    {errors.name && (
                      <span className="text-[10px] text-red-500 font-mono block mt-0.5">{errors.name.message}</span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-custom-muted uppercase block">Email Address:</label>
                    <input
                      type="email"
                      {...register("email")}
                      placeholder="e.g. alice@university.edu"
                      className="w-full bg-custom-bg border border-custom-border text-xs rounded-xl px-4 py-3 text-custom-fg focus:outline-none focus:border-primary-emerald transition-colors"
                    />
                    {errors.email && (
                      <span className="text-[10px] text-red-500 font-mono block mt-0.5">{errors.email.message}</span>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-custom-muted uppercase block">Message Subject:</label>
                  <input
                    type="text"
                    {...register("subject")}
                    placeholder="e.g. Research Collaboration Proposal"
                    className="w-full bg-custom-bg border border-custom-border text-xs rounded-xl px-4 py-3 text-custom-fg focus:outline-none focus:border-primary-emerald transition-colors"
                  />
                  {errors.subject && (
                    <span className="text-[10px] text-red-500 font-mono block mt-0.5">{errors.subject.message}</span>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-custom-muted uppercase block">Message Body Details:</label>
                  <textarea
                    rows={6}
                    {...register("message")}
                    placeholder="Describe your inquiry or proposal in detail..."
                    className="w-full bg-custom-bg border border-custom-border text-xs rounded-xl px-4 py-3 text-custom-fg focus:outline-none focus:border-primary-emerald transition-colors resize-none"
                  />
                  {errors.message && (
                    <span className="text-[10px] text-red-500 font-mono block mt-0.5">{errors.message.message}</span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-full text-xs font-semibold bg-gradient-to-r from-primary-emerald to-primary-emerald/80 text-white flex items-center justify-center space-x-2 shadow-lg shadow-primary-emerald/15 hover:from-primary-emerald hover:to-primary-emerald/90 transition-all disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? "Transmitting..." : "Transmit Message"}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
