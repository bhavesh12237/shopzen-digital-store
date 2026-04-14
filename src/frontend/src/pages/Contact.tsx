import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle,
  Facebook,
  Lock,
  Mail,
  MapPin,
  Phone,
  Printer,
  Send,
  Twitter,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const CONTACT_ITEMS = [
  {
    icon: Phone,
    label: "Phone",
    value: "+1-800-SHOPZEN",
    href: "tel:+18007467936",
    sub: null,
  },
  {
    icon: Printer,
    label: "Fax",
    value: "+1-800-FAX-SHOP",
    href: "tel:+18003297467",
    sub: null,
  },
  {
    icon: Mail,
    label: "Email",
    value: "support@shopzen.com",
    href: "mailto:support@shopzen.com",
    sub: null,
  },
  {
    icon: Twitter,
    label: "Twitter",
    value: "@ShopZen",
    href: "https://twitter.com/ShopZen",
    sub: "Follow us for deals & updates",
  },
  {
    icon: Facebook,
    label: "Facebook",
    value: "facebook.com/ShopZen",
    href: "https://facebook.com/ShopZen",
    sub: "Like our page",
  },
];

function validateForm(form: ContactForm): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = "Name is required.";
  if (!form.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!form.subject.trim()) errors.subject = "Subject is required.";
  if (!form.message.trim()) {
    errors.message = "Message is required.";
  } else if (form.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }
  return errors;
}

export function Contact() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleBlur = (field: keyof ContactForm) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const fieldErrors = validateForm(form);
    setErrors((prev) => ({ ...prev, [field]: fieldErrors[field] }));
  };

  const handleChange = (field: keyof ContactForm, value: string) => {
    const updated = { ...form, [field]: value };
    setForm(updated);
    if (touched[field]) {
      const fieldErrors = validateForm(updated);
      setErrors((prev) => ({ ...prev, [field]: fieldErrors[field] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = {
      name: true,
      email: true,
      subject: true,
      message: true,
    };
    setTouched(allTouched);
    const fieldErrors = validateForm(form);
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) return;

    setSubmitting(true);
    try {
      // Backend call would go here: await actor.submitContactMessage(...)
      await new Promise((r) => setTimeout(r, 1000));
      setSubmitted(true);
      toast.success("Message sent! We'll reply within 24 hours.");
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div data-ocid="contact.page">
      {/* Hero */}
      <section
        className="relative bg-primary overflow-hidden py-20"
        data-ocid="contact.hero_section"
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-primary-foreground blur-3xl" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/15 border border-primary-foreground/20 mb-5">
              <Mail className="w-3.5 h-3.5 text-primary-foreground/80" />
              <span className="text-xs font-semibold text-primary-foreground/80 uppercase tracking-widest">
                We're Here to Help
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground mb-4">
              Get In Touch
            </h1>
            <p className="text-primary-foreground/75 text-lg max-w-xl mx-auto">
              Have a question, concern, or just want to say hello? Our team is
              ready to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Left — Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45 }}
              className="lg:col-span-2 space-y-6"
            >
              <div>
                <h2 className="font-display font-bold text-2xl text-foreground mb-2">
                  Contact Details
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Reach us Mon–Fri, 9am–6pm PST. We aim to respond within 24
                  hours.
                </p>
              </div>

              <div className="space-y-3" data-ocid="contact.info_list">
                {CONTACT_ITEMS.map(
                  ({ icon: Icon, label, value, href, sub }, i) => (
                    <motion.a
                      key={label}
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + i * 0.07 }}
                      className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-card transition-smooth group"
                      data-ocid={`contact.info.${label.toLowerCase()}_item`}
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-200">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold mb-0.5">
                          {label}
                        </p>
                        <p className="font-semibold text-foreground text-sm truncate">
                          {value}
                        </p>
                        {sub && (
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {sub}
                          </p>
                        )}
                      </div>
                    </motion.a>
                  ),
                )}
              </div>

              {/* SSL Badge */}
              <div
                className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl"
                data-ocid="contact.ssl_badge"
              >
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Lock className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    SSL Secured
                  </p>
                  <p className="text-xs text-muted-foreground">
                    All communications are encrypted & secure.
                  </p>
                </div>
              </div>

              {/* Map Placeholder */}
              <div
                className="relative rounded-xl border border-border overflow-hidden bg-muted/40 h-44 flex flex-col items-center justify-center gap-2"
                data-ocid="contact.map_placeholder"
              >
                <div className="absolute inset-0 opacity-20">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 1px 1px, oklch(var(--border)) 1px, transparent 0)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                </div>
                <MapPin className="w-8 h-8 text-primary relative z-10" />
                <div className="text-center relative z-10">
                  <p className="text-sm font-semibold text-foreground">
                    123 Commerce Street
                  </p>
                  <p className="text-xs text-muted-foreground">
                    San Francisco, CA 94105
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right — Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <div
                  className="h-full flex flex-col items-center justify-center text-center py-16 bg-card border border-border rounded-2xl"
                  data-ocid="contact.success_state"
                >
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-3">
                    Message Sent!
                  </h2>
                  <p className="text-muted-foreground max-w-xs mb-8 leading-relaxed">
                    Thank you for reaching out. We'll get back to you at{" "}
                    <span className="font-medium text-foreground">
                      {form.email || "your email"}
                    </span>{" "}
                    within 24 hours.
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                      });
                      setErrors({});
                      setTouched({});
                    }}
                    data-ocid="contact.send_another_button"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h2 className="font-display font-bold text-2xl text-foreground mb-1">
                    Send Us a Message
                  </h2>
                  <p className="text-muted-foreground text-sm mb-7">
                    Fill in the form below and we'll respond promptly.
                  </p>

                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-5"
                    data-ocid="contact.form"
                  >
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <Label htmlFor="name">
                          Full Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="name"
                          value={form.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          onBlur={() => handleBlur("name")}
                          placeholder="Jane Smith"
                          className={
                            touched.name && errors.name
                              ? "border-destructive focus-visible:ring-destructive"
                              : ""
                          }
                          data-ocid="contact.name_input"
                        />
                        {touched.name && errors.name && (
                          <p
                            className="text-xs text-destructive"
                            data-ocid="contact.name.field_error"
                          >
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="email">
                          Email Address{" "}
                          <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={form.email}
                          onChange={(e) =>
                            handleChange("email", e.target.value)
                          }
                          onBlur={() => handleBlur("email")}
                          placeholder="jane@example.com"
                          className={
                            touched.email && errors.email
                              ? "border-destructive focus-visible:ring-destructive"
                              : ""
                          }
                          data-ocid="contact.email_input"
                        />
                        {touched.email && errors.email && (
                          <p
                            className="text-xs text-destructive"
                            data-ocid="contact.email.field_error"
                          >
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="subject">
                        Subject <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="subject"
                        value={form.subject}
                        onChange={(e) =>
                          handleChange("subject", e.target.value)
                        }
                        onBlur={() => handleBlur("subject")}
                        placeholder="How can we help you today?"
                        className={
                          touched.subject && errors.subject
                            ? "border-destructive focus-visible:ring-destructive"
                            : ""
                        }
                        data-ocid="contact.subject_input"
                      />
                      {touched.subject && errors.subject && (
                        <p
                          className="text-xs text-destructive"
                          data-ocid="contact.subject.field_error"
                        >
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="message">
                        Message <span className="text-destructive">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        value={form.message}
                        onChange={(e) =>
                          handleChange("message", e.target.value)
                        }
                        onBlur={() => handleBlur("message")}
                        placeholder="Describe your question or concern in detail..."
                        rows={6}
                        className={`resize-none ${touched.message && errors.message ? "border-destructive focus-visible:ring-destructive" : ""}`}
                        data-ocid="contact.message_textarea"
                      />
                      {touched.message && errors.message && (
                        <p
                          className="text-xs text-destructive"
                          data-ocid="contact.message.field_error"
                        >
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground gap-2 font-semibold"
                      disabled={submitting}
                      data-ocid="contact.submit_button"
                    >
                      {submitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Social Follow Section */}
      <section
        className="bg-muted/30 border-t border-border py-14"
        data-ocid="contact.social_section"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-bold text-foreground mb-2">
            Follow Us Online
          </h2>
          <p className="text-muted-foreground mb-8">
            Stay connected for the latest deals, new arrivals, and customer
            stories.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://twitter.com/ShopZen"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-card transition-smooth group"
              data-ocid="contact.social.twitter_link"
            >
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                <Twitter className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground text-sm">
                  Twitter / X
                </p>
                <p className="text-xs text-muted-foreground">@ShopZen</p>
              </div>
            </a>
            <a
              href="https://facebook.com/ShopZen"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-card transition-smooth group"
              data-ocid="contact.social.facebook_link"
            >
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                <Facebook className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground text-sm">
                  Facebook
                </p>
                <p className="text-xs text-muted-foreground">
                  facebook.com/ShopZen
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
