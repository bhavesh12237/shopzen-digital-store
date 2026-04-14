import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/context/CartContext";
import type { BillingInfo } from "@/types";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  CreditCard,
  Globe,
  Lock,
  Package,
  Shield,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { type FormEvent, useState } from "react";
import { toast } from "sonner";

type Step = "billing" | "payment" | "confirmation";

const COUNTRIES = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Spain",
  "Italy",
  "Netherlands",
  "Japan",
  "South Korea",
  "Singapore",
  "India",
  "Brazil",
  "Mexico",
  "New Zealand",
  "Sweden",
  "Norway",
  "Denmark",
  "Switzerland",
] as const;

const TAX_RATE = 0.1;
const SHIPPING_COST = 5.99;
const FREE_SHIPPING_THRESHOLD = 50;

function formatCardNumber(value: string): string {
  return value
    .replace(/\D/g, "")
    .slice(0, 16)
    .replace(/(.{4})/g, "$1 ")
    .trim();
}

function formatExpiry(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  if (digits.length >= 3) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  return digits;
}

interface FieldError {
  fullName?: string;
  email?: string;
  address?: string;
  city?: string;
  postalCode?: string;
  country?: string;
  cardName?: string;
  cardNumber?: string;
  expiry?: string;
  cvv?: string;
}

export function Checkout() {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>("billing");
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<FieldError>({});
  const [orderId] = useState(() =>
    Math.floor(100000 + Math.random() * 900000).toString(),
  );

  const [billing, setBilling] = useState<BillingInfo>({
    fullName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "United States",
  });

  const [card, setCard] = useState({
    number: "",
    expiry: "",
    cvv: "",
    name: "",
  });

  const shipping = totalPrice >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  const tax = totalPrice * TAX_RATE;
  const grandTotal = totalPrice + shipping + tax;

  // Billing validation
  function validateBilling(): FieldError {
    const e: FieldError = {};
    if (!billing.fullName.trim()) e.fullName = "Full name is required";
    if (!billing.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(billing.email))
      e.email = "Please enter a valid email";
    if (!billing.address.trim()) e.address = "Address is required";
    if (!billing.city.trim()) e.city = "City is required";
    if (!billing.postalCode.trim()) e.postalCode = "Postal code is required";
    if (!billing.country) e.country = "Country is required";
    return e;
  }

  // Payment validation
  function validateCard(): FieldError {
    const e: FieldError = {};
    if (!card.name.trim()) e.cardName = "Cardholder name is required";
    const digits = card.number.replace(/\s/g, "");
    if (!digits || digits.length < 16)
      e.cardNumber = "Enter a valid 16-digit card number";
    if (!card.expiry || card.expiry.length < 5)
      e.expiry = "Enter a valid expiry (MM/YY)";
    else {
      const [mm, yy] = card.expiry.split("/");
      const month = Number.parseInt(mm, 10);
      const year = Number.parseInt(`20${yy}`, 10);
      const now = new Date();
      if (
        month < 1 ||
        month > 12 ||
        year < now.getFullYear() ||
        (year === now.getFullYear() && month < now.getMonth() + 1)
      ) {
        e.expiry = "Card has expired or date is invalid";
      }
    }
    if (!card.cvv || card.cvv.length < 3) e.cvv = "Enter a valid CVV";
    return e;
  }

  const handleBillingSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validateBilling();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStep("payment");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePaymentSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validateCard();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    try {
      // Simulate payment processing
      await new Promise((r) => setTimeout(r, 1800));
      clearCart();
      setStep("confirmation");
      toast.success("Order placed successfully! 🎉");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      toast.error("Payment failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (items.length === 0 && step !== "confirmation") {
    return (
      <div
        className="container mx-auto px-4 py-28 text-center"
        data-ocid="checkout.empty_state"
      >
        <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
          <Package className="w-9 h-9 text-muted-foreground opacity-50" />
        </div>
        <h2 className="font-display text-2xl font-bold text-foreground mb-3">
          Your cart is empty
        </h2>
        <p className="text-muted-foreground mb-8">
          Add some items before checking out.
        </p>
        <Link to="/shop">
          <Button
            type="button"
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            Browse Products
          </Button>
        </Link>
      </div>
    );
  }

  if (step === "confirmation") {
    return (
      <div
        className="container mx-auto px-4 py-28 text-center max-w-lg mx-auto"
        data-ocid="checkout.success_state"
      >
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="font-display text-3xl font-bold text-foreground mb-3">
          Order Confirmed!
        </h2>
        <p className="text-muted-foreground mb-2 max-w-md mx-auto leading-relaxed">
          Thank you for your purchase,{" "}
          <strong>{billing.fullName || "valued customer"}</strong>! A
          confirmation has been sent to{" "}
          <span className="text-foreground font-medium">
            {billing.email || "your email"}
          </span>
          .
        </p>
        <div className="bg-muted/50 rounded-xl p-4 my-6 text-sm text-muted-foreground border border-border">
          <p className="font-mono font-semibold text-foreground text-base">
            Order #{orderId}
          </p>
          <p className="mt-1">Estimated delivery: 3–5 business days</p>
        </div>
        <div className="flex justify-center gap-3 flex-wrap">
          <Button
            type="button"
            onClick={() => navigate({ to: "/orders" })}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            data-ocid="checkout.view_orders_button"
          >
            View My Orders
          </Button>
          <Link to="/shop" data-ocid="checkout.continue_shopping_button">
            <Button type="button" variant="outline">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div data-ocid="checkout.page">
      {/* Page Header */}
      <div className="bg-card border-b border-border py-8">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-muted-foreground mb-2">
            <Link to="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link
              to="/cart"
              className="hover:text-foreground transition-colors"
            >
              Cart
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Checkout</span>
          </nav>
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">
            Checkout
          </h1>
          {/* Step Progress */}
          <div className="flex items-center gap-0" data-ocid="checkout.steps">
            {(["Billing Info", "Payment"] as const).map((label, i) => {
              const isActive =
                (i === 0 && step === "billing") ||
                (i === 1 && step === "payment");
              const isDone = (i === 0 && step === "payment") || false;
              return (
                <span key={label} className="flex items-center gap-1.5">
                  {i > 0 && (
                    <ChevronRight className="w-4 h-4 text-muted-foreground mx-1" />
                  )}
                  <span
                    className={`flex items-center gap-1.5 text-sm font-medium ${
                      isActive
                        ? "text-primary"
                        : isDone
                          ? "text-green-600"
                          : "text-muted-foreground"
                    }`}
                  >
                    <span
                      className={`w-5 h-5 rounded-full text-xs flex items-center justify-center font-bold ${
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : isDone
                            ? "bg-green-600 text-white"
                            : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {isDone ? "✓" : i + 1}
                    </span>
                    {label}
                  </span>
                </span>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-background">
        <div className="container mx-auto px-4 py-10">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Left: Forms */}
            <div className="lg:col-span-3">
              {/* BILLING FORM */}
              {step === "billing" && (
                <form
                  onSubmit={handleBillingSubmit}
                  noValidate
                  className="space-y-6"
                  data-ocid="checkout.billing_form"
                >
                  <div>
                    <h2 className="font-display font-bold text-xl text-foreground mb-1">
                      Billing & Shipping Information
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Enter your delivery details below.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName" className="text-sm font-medium">
                        Full Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="fullName"
                        value={billing.fullName}
                        onChange={(e) => {
                          setBilling({ ...billing, fullName: e.target.value });
                          if (errors.fullName)
                            setErrors({ ...errors, fullName: undefined });
                        }}
                        placeholder="Jane Smith"
                        className={`mt-1 ${errors.fullName ? "border-destructive" : ""}`}
                        data-ocid="checkout.fullname_input"
                      />
                      {errors.fullName && (
                        <p
                          className="text-xs text-destructive mt-1 flex items-center gap-1"
                          data-ocid="checkout.fullname_field_error"
                        >
                          <AlertCircle className="w-3 h-3" /> {errors.fullName}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email Address{" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={billing.email}
                        onChange={(e) => {
                          setBilling({ ...billing, email: e.target.value });
                          if (errors.email)
                            setErrors({ ...errors, email: undefined });
                        }}
                        placeholder="jane@example.com"
                        className={`mt-1 ${errors.email ? "border-destructive" : ""}`}
                        data-ocid="checkout.email_input"
                      />
                      {errors.email && (
                        <p
                          className="text-xs text-destructive mt-1 flex items-center gap-1"
                          data-ocid="checkout.email_field_error"
                        >
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="address" className="text-sm font-medium">
                      Street Address <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="address"
                      value={billing.address}
                      onChange={(e) => {
                        setBilling({ ...billing, address: e.target.value });
                        if (errors.address)
                          setErrors({ ...errors, address: undefined });
                      }}
                      placeholder="123 Main St, Apt 4B"
                      className={`mt-1 ${errors.address ? "border-destructive" : ""}`}
                      data-ocid="checkout.address_input"
                    />
                    {errors.address && (
                      <p
                        className="text-xs text-destructive mt-1 flex items-center gap-1"
                        data-ocid="checkout.address_field_error"
                      >
                        <AlertCircle className="w-3 h-3" /> {errors.address}
                      </p>
                    )}
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city" className="text-sm font-medium">
                        City <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="city"
                        value={billing.city}
                        onChange={(e) => {
                          setBilling({ ...billing, city: e.target.value });
                          if (errors.city)
                            setErrors({ ...errors, city: undefined });
                        }}
                        placeholder="New York"
                        className={`mt-1 ${errors.city ? "border-destructive" : ""}`}
                        data-ocid="checkout.city_input"
                      />
                      {errors.city && (
                        <p
                          className="text-xs text-destructive mt-1 flex items-center gap-1"
                          data-ocid="checkout.city_field_error"
                        >
                          <AlertCircle className="w-3 h-3" /> {errors.city}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label
                        htmlFor="postalCode"
                        className="text-sm font-medium"
                      >
                        Postal Code <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="postalCode"
                        value={billing.postalCode}
                        onChange={(e) => {
                          setBilling({
                            ...billing,
                            postalCode: e.target.value,
                          });
                          if (errors.postalCode)
                            setErrors({ ...errors, postalCode: undefined });
                        }}
                        placeholder="10001"
                        className={`mt-1 ${errors.postalCode ? "border-destructive" : ""}`}
                        data-ocid="checkout.postal_input"
                      />
                      {errors.postalCode && (
                        <p
                          className="text-xs text-destructive mt-1 flex items-center gap-1"
                          data-ocid="checkout.postal_field_error"
                        >
                          <AlertCircle className="w-3 h-3" />{" "}
                          {errors.postalCode}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="country" className="text-sm font-medium">
                        Country <span className="text-destructive">*</span>
                      </Label>
                      <div className="relative mt-1">
                        <select
                          id="country"
                          value={billing.country}
                          onChange={(e) => {
                            setBilling({ ...billing, country: e.target.value });
                            if (errors.country)
                              setErrors({ ...errors, country: undefined });
                          }}
                          className={`w-full h-9 rounded-md border bg-background px-3 py-1.5 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 appearance-none cursor-pointer ${
                            errors.country
                              ? "border-destructive"
                              : "border-input"
                          }`}
                          data-ocid="checkout.country_select"
                        >
                          {COUNTRIES.map((c) => (
                            <option key={c} value={c}>
                              {c}
                            </option>
                          ))}
                        </select>
                        <Globe className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                      </div>
                      {errors.country && (
                        <p
                          className="text-xs text-destructive mt-1 flex items-center gap-1"
                          data-ocid="checkout.country_field_error"
                        >
                          <AlertCircle className="w-3 h-3" /> {errors.country}
                        </p>
                      )}
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold gap-2"
                    data-ocid="checkout.billing_submit_button"
                  >
                    Continue to Payment <ChevronRight className="w-4 h-4" />
                  </Button>
                </form>
              )}

              {/* PAYMENT FORM */}
              {step === "payment" && (
                <form
                  onSubmit={handlePaymentSubmit}
                  noValidate
                  className="space-y-6"
                  data-ocid="checkout.payment_form"
                >
                  <div>
                    <h2 className="font-display font-bold text-xl text-foreground flex items-center gap-2 mb-1">
                      <Lock className="w-5 h-5 text-green-600" />
                      Secure Payment
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Your payment information is encrypted and secure.
                    </p>
                  </div>

                  {/* SSL Security Banner */}
                  <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-xl">
                    <ShieldCheck className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-green-800">
                        SSL Secured Connection
                      </p>
                      <p className="text-xs text-green-700 mt-0.5">
                        Your data is protected with 256-bit SSL/TLS encryption.
                        We never store your card details.
                      </p>
                    </div>
                  </div>

                  {/* Accepted Cards */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs text-muted-foreground">
                      We accept:
                    </span>
                    {["Visa", "Mastercard", "Amex", "Discover"].map((name) => (
                      <Badge
                        key={name}
                        variant="outline"
                        className="text-xs font-mono"
                      >
                        {name}
                      </Badge>
                    ))}
                  </div>

                  {/* Card Form */}
                  <div className="bg-card border border-border rounded-xl p-5 space-y-4 shadow-card">
                    <div>
                      <Label htmlFor="cardName" className="text-sm font-medium">
                        Cardholder Name{" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="cardName"
                        value={card.name}
                        onChange={(e) => {
                          setCard({ ...card, name: e.target.value });
                          if (errors.cardName)
                            setErrors({ ...errors, cardName: undefined });
                        }}
                        placeholder="Jane Smith"
                        className={`mt-1 ${errors.cardName ? "border-destructive" : ""}`}
                        data-ocid="checkout.card_name_input"
                        autoComplete="cc-name"
                      />
                      {errors.cardName && (
                        <p
                          className="text-xs text-destructive mt-1 flex items-center gap-1"
                          data-ocid="checkout.card_name_field_error"
                        >
                          <AlertCircle className="w-3 h-3" /> {errors.cardName}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label
                        htmlFor="cardNumber"
                        className="text-sm font-medium"
                      >
                        Card Number <span className="text-destructive">*</span>
                      </Label>
                      <div className="relative mt-1">
                        <Input
                          id="cardNumber"
                          value={card.number}
                          onChange={(e) => {
                            setCard({
                              ...card,
                              number: formatCardNumber(e.target.value),
                            });
                            if (errors.cardNumber)
                              setErrors({ ...errors, cardNumber: undefined });
                          }}
                          placeholder="1234 5678 9012 3456"
                          maxLength={19}
                          className={`font-mono pr-10 ${errors.cardNumber ? "border-destructive" : ""}`}
                          data-ocid="checkout.card_number_input"
                          autoComplete="cc-number"
                          inputMode="numeric"
                        />
                        <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      </div>
                      {errors.cardNumber && (
                        <p
                          className="text-xs text-destructive mt-1 flex items-center gap-1"
                          data-ocid="checkout.card_number_field_error"
                        >
                          <AlertCircle className="w-3 h-3" />{" "}
                          {errors.cardNumber}
                        </p>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry" className="text-sm font-medium">
                          Expiry Date{" "}
                          <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="expiry"
                          value={card.expiry}
                          onChange={(e) => {
                            setCard({
                              ...card,
                              expiry: formatExpiry(e.target.value),
                            });
                            if (errors.expiry)
                              setErrors({ ...errors, expiry: undefined });
                          }}
                          placeholder="MM/YY"
                          maxLength={5}
                          className={`mt-1 font-mono ${errors.expiry ? "border-destructive" : ""}`}
                          data-ocid="checkout.expiry_input"
                          autoComplete="cc-exp"
                          inputMode="numeric"
                        />
                        {errors.expiry && (
                          <p
                            className="text-xs text-destructive mt-1 flex items-center gap-1"
                            data-ocid="checkout.expiry_field_error"
                          >
                            <AlertCircle className="w-3 h-3" /> {errors.expiry}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="cvv" className="text-sm font-medium">
                          CVV <span className="text-destructive">*</span>
                        </Label>
                        <div className="relative mt-1">
                          <Input
                            id="cvv"
                            value={card.cvv}
                            onChange={(e) => {
                              setCard({
                                ...card,
                                cvv: e.target.value
                                  .replace(/\D/g, "")
                                  .slice(0, 4),
                              });
                              if (errors.cvv)
                                setErrors({ ...errors, cvv: undefined });
                            }}
                            placeholder="•••"
                            maxLength={4}
                            type="password"
                            className={`font-mono ${errors.cvv ? "border-destructive" : ""}`}
                            data-ocid="checkout.cvv_input"
                            autoComplete="cc-csc"
                            inputMode="numeric"
                          />
                        </div>
                        {errors.cvv && (
                          <p
                            className="text-xs text-destructive mt-1 flex items-center gap-1"
                            data-ocid="checkout.cvv_field_error"
                          >
                            <AlertCircle className="w-3 h-3" /> {errors.cvv}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* SSL Badge Row */}
                  <div className="flex items-center gap-3 p-3 bg-muted/40 rounded-lg border border-border">
                    <Shield className="w-5 h-5 text-primary shrink-0" />
                    <div className="text-xs text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        Secured by SSL Certificate.
                      </span>{" "}
                      All transactions are encrypted end-to-end. Your financial
                      data is never stored on our servers.
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1"
                      onClick={() => {
                        setStep("billing");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      data-ocid="checkout.back_button"
                    >
                      ← Back
                    </Button>
                    <Button
                      type="submit"
                      size="lg"
                      className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold gap-2"
                      disabled={submitting}
                      data-ocid="checkout.pay_button"
                    >
                      {submitting ? (
                        <>
                          <span className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <Lock className="w-4 h-4" />
                          Pay ${grandTotal.toFixed(2)}
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>

            {/* Right: Order Summary */}
            <div className="lg:col-span-2">
              <Card
                className="p-6 h-fit sticky top-24 shadow-card"
                data-ocid="checkout.order_summary"
              >
                <h3 className="font-display font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                  <Package className="w-4 h-4 text-primary" />
                  Order Summary
                </h3>

                {/* Items list */}
                <div className="space-y-3 mb-4 max-h-56 overflow-y-auto pr-1">
                  {items.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex items-center gap-3"
                    >
                      <div className="w-10 h-10 rounded-md overflow-hidden bg-muted shrink-0 ring-1 ring-border">
                        <img
                          src={item.product.imageUrl}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-foreground line-clamp-1">
                          {item.product.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Qty: {item.quantity}
                        </p>
                      </div>
                      <span className="text-xs font-mono font-semibold text-foreground shrink-0">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                <Separator className="mb-4" />

                <div className="space-y-2.5 text-sm">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span className="font-mono">${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Tax (10%)</span>
                    <span className="font-mono">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Truck className="w-3.5 h-3.5" /> Shipping
                    </span>
                    {shipping === 0 ? (
                      <span className="text-green-600 font-medium">Free</span>
                    ) : (
                      <span className="font-mono">${shipping.toFixed(2)}</span>
                    )}
                  </div>
                  <Separator />
                  <div className="flex justify-between font-display font-bold text-foreground text-lg pt-0.5">
                    <span>Total</span>
                    <span className="font-mono">${grandTotal.toFixed(2)}</span>
                  </div>
                </div>

                {/* Trust Signals */}
                <div className="mt-5 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <ShieldCheck className="w-3.5 h-3.5 text-green-600 shrink-0" />
                    <span>SSL/TLS 256-bit encrypted payment</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Truck className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>Free shipping on orders over $50</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Shield className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>30-day hassle-free returns</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
