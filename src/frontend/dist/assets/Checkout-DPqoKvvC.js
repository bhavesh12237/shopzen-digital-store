import { c as createLucideIcon, b as useCart, f as useNavigate, r as reactExports, j as jsxRuntimeExports, L as Link, a as Button, B as Badge, e as Separator } from "./index-BRYfgQVq.js";
import { C as Card } from "./card-BCHlLd86.js";
import { I as Input } from "./input-w0nEm-gF.js";
import { L as Label } from "./label-_gCrcbqN.js";
import { u as ue } from "./index-CWZsAHg-.js";
import { P as Package } from "./package-VryNh9VT.js";
import { C as CircleCheck } from "./circle-check-B6a68GN7.js";
import { C as ChevronRight } from "./chevron-right-B-gRzlxT.js";
import { L as Lock } from "./lock-dsri3E0O.js";
import { S as ShieldCheck, C as CreditCard } from "./shield-check-oU7_tOKf.js";
import { S as Shield } from "./shield-COtMEKDw.js";
import { T as Truck } from "./truck-DSozPBBi.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
];
const CircleAlert = createLucideIcon("circle-alert", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
];
const Globe = createLucideIcon("globe", __iconNode);
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
  "Switzerland"
];
const TAX_RATE = 0.1;
const SHIPPING_COST = 5.99;
const FREE_SHIPPING_THRESHOLD = 50;
function formatCardNumber(value) {
  return value.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();
}
function formatExpiry(value) {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  if (digits.length >= 3) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  return digits;
}
function Checkout() {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = reactExports.useState("billing");
  const [submitting, setSubmitting] = reactExports.useState(false);
  const [errors, setErrors] = reactExports.useState({});
  const [orderId] = reactExports.useState(
    () => Math.floor(1e5 + Math.random() * 9e5).toString()
  );
  const [billing, setBilling] = reactExports.useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "United States"
  });
  const [card, setCard] = reactExports.useState({
    number: "",
    expiry: "",
    cvv: "",
    name: ""
  });
  const shipping = totalPrice >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  const tax = totalPrice * TAX_RATE;
  const grandTotal = totalPrice + shipping + tax;
  function validateBilling() {
    const e = {};
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
  function validateCard() {
    const e = {};
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
      const now = /* @__PURE__ */ new Date();
      if (month < 1 || month > 12 || year < now.getFullYear() || year === now.getFullYear() && month < now.getMonth() + 1) {
        e.expiry = "Card has expired or date is invalid";
      }
    }
    if (!card.cvv || card.cvv.length < 3) e.cvv = "Enter a valid CVV";
    return e;
  }
  const handleBillingSubmit = (e) => {
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
  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    const errs = validateCard();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 1800));
      clearCart();
      setStep("confirmation");
      ue.success("Order placed successfully! 🎉");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      ue.error("Payment failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };
  if (items.length === 0 && step !== "confirmation") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "container mx-auto px-4 py-28 text-center",
        "data-ocid": "checkout.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-9 h-9 text-muted-foreground opacity-50" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-3", children: "Your cart is empty" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-8", children: "Add some items before checking out." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "button",
              size: "lg",
              className: "bg-accent hover:bg-accent/90 text-accent-foreground",
              children: "Browse Products"
            }
          ) })
        ]
      }
    );
  }
  if (step === "confirmation") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "container mx-auto px-4 py-28 text-center max-w-lg mx-auto",
        "data-ocid": "checkout.success_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-10 h-10 text-green-600" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-foreground mb-3", children: "Order Confirmed!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground mb-2 max-w-md mx-auto leading-relaxed", children: [
            "Thank you for your purchase,",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: billing.fullName || "valued customer" }),
            "! A confirmation has been sent to",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: billing.email || "your email" }),
            "."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/50 rounded-xl p-4 my-6 text-sm text-muted-foreground border border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono font-semibold text-foreground text-base", children: [
              "Order #",
              orderId
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1", children: "Estimated delivery: 3–5 business days" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center gap-3 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "button",
                onClick: () => navigate({ to: "/orders" }),
                className: "bg-primary hover:bg-primary/90 text-primary-foreground",
                "data-ocid": "checkout.view_orders_button",
                children: "View My Orders"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", "data-ocid": "checkout.continue_shopping_button", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", children: "Continue Shopping" }) })
          ] })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "checkout.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-b border-border py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "text-sm text-muted-foreground mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-foreground transition-colors", children: "Home" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2", children: "/" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/cart",
            className: "hover:text-foreground transition-colors",
            children: "Cart"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2", children: "/" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Checkout" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-bold text-foreground mb-4", children: "Checkout" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-0", "data-ocid": "checkout.steps", children: ["Billing Info", "Payment"].map((label, i) => {
        const isActive = i === 0 && step === "billing" || i === 1 && step === "payment";
        const isDone = i === 0 && step === "payment" || false;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
          i > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4 text-muted-foreground mx-1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: `flex items-center gap-1.5 text-sm font-medium ${isActive ? "text-primary" : isDone ? "text-green-600" : "text-muted-foreground"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `w-5 h-5 rounded-full text-xs flex items-center justify-center font-bold ${isActive ? "bg-primary text-primary-foreground" : isDone ? "bg-green-600 text-white" : "bg-muted text-muted-foreground"}`,
                    children: isDone ? "✓" : i + 1
                  }
                ),
                label
              ]
            }
          )
        ] }, label);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-5 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-3", children: [
        step === "billing" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "form",
          {
            onSubmit: handleBillingSubmit,
            noValidate: true,
            className: "space-y-6",
            "data-ocid": "checkout.billing_form",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-xl text-foreground mb-1", children: "Billing & Shipping Information" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Enter your delivery details below." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "fullName", className: "text-sm font-medium", children: [
                    "Full Name ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "fullName",
                      value: billing.fullName,
                      onChange: (e) => {
                        setBilling({ ...billing, fullName: e.target.value });
                        if (errors.fullName)
                          setErrors({ ...errors, fullName: void 0 });
                      },
                      placeholder: "Jane Smith",
                      className: `mt-1 ${errors.fullName ? "border-destructive" : ""}`,
                      "data-ocid": "checkout.fullname_input"
                    }
                  ),
                  errors.fullName && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "text-xs text-destructive mt-1 flex items-center gap-1",
                      "data-ocid": "checkout.fullname_field_error",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-3 h-3" }),
                        " ",
                        errors.fullName
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "email", className: "text-sm font-medium", children: [
                    "Email Address",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "email",
                      type: "email",
                      value: billing.email,
                      onChange: (e) => {
                        setBilling({ ...billing, email: e.target.value });
                        if (errors.email)
                          setErrors({ ...errors, email: void 0 });
                      },
                      placeholder: "jane@example.com",
                      className: `mt-1 ${errors.email ? "border-destructive" : ""}`,
                      "data-ocid": "checkout.email_input"
                    }
                  ),
                  errors.email && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "text-xs text-destructive mt-1 flex items-center gap-1",
                      "data-ocid": "checkout.email_field_error",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-3 h-3" }),
                        " ",
                        errors.email
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "address", className: "text-sm font-medium", children: [
                  "Street Address ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "address",
                    value: billing.address,
                    onChange: (e) => {
                      setBilling({ ...billing, address: e.target.value });
                      if (errors.address)
                        setErrors({ ...errors, address: void 0 });
                    },
                    placeholder: "123 Main St, Apt 4B",
                    className: `mt-1 ${errors.address ? "border-destructive" : ""}`,
                    "data-ocid": "checkout.address_input"
                  }
                ),
                errors.address && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    className: "text-xs text-destructive mt-1 flex items-center gap-1",
                    "data-ocid": "checkout.address_field_error",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-3 h-3" }),
                      " ",
                      errors.address
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-3 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "city", className: "text-sm font-medium", children: [
                    "City ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "city",
                      value: billing.city,
                      onChange: (e) => {
                        setBilling({ ...billing, city: e.target.value });
                        if (errors.city)
                          setErrors({ ...errors, city: void 0 });
                      },
                      placeholder: "New York",
                      className: `mt-1 ${errors.city ? "border-destructive" : ""}`,
                      "data-ocid": "checkout.city_input"
                    }
                  ),
                  errors.city && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "text-xs text-destructive mt-1 flex items-center gap-1",
                      "data-ocid": "checkout.city_field_error",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-3 h-3" }),
                        " ",
                        errors.city
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Label,
                    {
                      htmlFor: "postalCode",
                      className: "text-sm font-medium",
                      children: [
                        "Postal Code ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "postalCode",
                      value: billing.postalCode,
                      onChange: (e) => {
                        setBilling({
                          ...billing,
                          postalCode: e.target.value
                        });
                        if (errors.postalCode)
                          setErrors({ ...errors, postalCode: void 0 });
                      },
                      placeholder: "10001",
                      className: `mt-1 ${errors.postalCode ? "border-destructive" : ""}`,
                      "data-ocid": "checkout.postal_input"
                    }
                  ),
                  errors.postalCode && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "text-xs text-destructive mt-1 flex items-center gap-1",
                      "data-ocid": "checkout.postal_field_error",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-3 h-3" }),
                        " ",
                        errors.postalCode
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "country", className: "text-sm font-medium", children: [
                    "Country ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "select",
                      {
                        id: "country",
                        value: billing.country,
                        onChange: (e) => {
                          setBilling({ ...billing, country: e.target.value });
                          if (errors.country)
                            setErrors({ ...errors, country: void 0 });
                        },
                        className: `w-full h-9 rounded-md border bg-background px-3 py-1.5 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 appearance-none cursor-pointer ${errors.country ? "border-destructive" : "border-input"}`,
                        "data-ocid": "checkout.country_select",
                        children: COUNTRIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: c, children: c }, c))
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" })
                  ] }),
                  errors.country && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "text-xs text-destructive mt-1 flex items-center gap-1",
                      "data-ocid": "checkout.country_field_error",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-3 h-3" }),
                        " ",
                        errors.country
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  type: "submit",
                  size: "lg",
                  className: "w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold gap-2",
                  "data-ocid": "checkout.billing_submit_button",
                  children: [
                    "Continue to Payment ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
                  ]
                }
              )
            ]
          }
        ),
        step === "payment" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "form",
          {
            onSubmit: handlePaymentSubmit,
            noValidate: true,
            className: "space-y-6",
            "data-ocid": "checkout.payment_form",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-xl text-foreground flex items-center gap-2 mb-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-5 h-5 text-green-600" }),
                  "Secure Payment"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Your payment information is encrypted and secure." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-5 h-5 text-green-600 shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-green-800", children: "SSL Secured Connection" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-green-700 mt-0.5", children: "Your data is protected with 256-bit SSL/TLS encryption. We never store your card details." })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "We accept:" }),
                ["Visa", "Mastercard", "Amex", "Discover"].map((name) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    variant: "outline",
                    className: "text-xs font-mono",
                    children: name
                  },
                  name
                ))
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-5 space-y-4 shadow-card", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "cardName", className: "text-sm font-medium", children: [
                    "Cardholder Name",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "cardName",
                      value: card.name,
                      onChange: (e) => {
                        setCard({ ...card, name: e.target.value });
                        if (errors.cardName)
                          setErrors({ ...errors, cardName: void 0 });
                      },
                      placeholder: "Jane Smith",
                      className: `mt-1 ${errors.cardName ? "border-destructive" : ""}`,
                      "data-ocid": "checkout.card_name_input",
                      autoComplete: "cc-name"
                    }
                  ),
                  errors.cardName && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "text-xs text-destructive mt-1 flex items-center gap-1",
                      "data-ocid": "checkout.card_name_field_error",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-3 h-3" }),
                        " ",
                        errors.cardName
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Label,
                    {
                      htmlFor: "cardNumber",
                      className: "text-sm font-medium",
                      children: [
                        "Card Number ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "cardNumber",
                        value: card.number,
                        onChange: (e) => {
                          setCard({
                            ...card,
                            number: formatCardNumber(e.target.value)
                          });
                          if (errors.cardNumber)
                            setErrors({ ...errors, cardNumber: void 0 });
                        },
                        placeholder: "1234 5678 9012 3456",
                        maxLength: 19,
                        className: `font-mono pr-10 ${errors.cardNumber ? "border-destructive" : ""}`,
                        "data-ocid": "checkout.card_number_input",
                        autoComplete: "cc-number",
                        inputMode: "numeric"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" })
                  ] }),
                  errors.cardNumber && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "text-xs text-destructive mt-1 flex items-center gap-1",
                      "data-ocid": "checkout.card_number_field_error",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-3 h-3" }),
                        " ",
                        errors.cardNumber
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "expiry", className: "text-sm font-medium", children: [
                      "Expiry Date",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "expiry",
                        value: card.expiry,
                        onChange: (e) => {
                          setCard({
                            ...card,
                            expiry: formatExpiry(e.target.value)
                          });
                          if (errors.expiry)
                            setErrors({ ...errors, expiry: void 0 });
                        },
                        placeholder: "MM/YY",
                        maxLength: 5,
                        className: `mt-1 font-mono ${errors.expiry ? "border-destructive" : ""}`,
                        "data-ocid": "checkout.expiry_input",
                        autoComplete: "cc-exp",
                        inputMode: "numeric"
                      }
                    ),
                    errors.expiry && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "p",
                      {
                        className: "text-xs text-destructive mt-1 flex items-center gap-1",
                        "data-ocid": "checkout.expiry_field_error",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-3 h-3" }),
                          " ",
                          errors.expiry
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "cvv", className: "text-sm font-medium", children: [
                      "CVV ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "cvv",
                        value: card.cvv,
                        onChange: (e) => {
                          setCard({
                            ...card,
                            cvv: e.target.value.replace(/\D/g, "").slice(0, 4)
                          });
                          if (errors.cvv)
                            setErrors({ ...errors, cvv: void 0 });
                        },
                        placeholder: "•••",
                        maxLength: 4,
                        type: "password",
                        className: `font-mono ${errors.cvv ? "border-destructive" : ""}`,
                        "data-ocid": "checkout.cvv_input",
                        autoComplete: "cc-csc",
                        inputMode: "numeric"
                      }
                    ) }),
                    errors.cvv && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "p",
                      {
                        className: "text-xs text-destructive mt-1 flex items-center gap-1",
                        "data-ocid": "checkout.cvv_field_error",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-3 h-3" }),
                          " ",
                          errors.cvv
                        ]
                      }
                    )
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-3 bg-muted/40 rounded-lg border border-border", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-5 h-5 text-primary shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "Secured by SSL Certificate." }),
                  " ",
                  "All transactions are encrypted end-to-end. Your financial data is never stored on our servers."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "button",
                    variant: "outline",
                    className: "flex-1",
                    onClick: () => {
                      setStep("billing");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    },
                    "data-ocid": "checkout.back_button",
                    children: "← Back"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "submit",
                    size: "lg",
                    className: "flex-1 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold gap-2",
                    disabled: submitting,
                    "data-ocid": "checkout.pay_button",
                    children: submitting ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" }),
                      "Processing..."
                    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-4 h-4" }),
                      "Pay $",
                      grandTotal.toFixed(2)
                    ] })
                  }
                )
              ] })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          className: "p-6 h-fit sticky top-24 shadow-card",
          "data-ocid": "checkout.order_summary",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display font-bold text-lg text-foreground mb-4 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-4 h-4 text-primary" }),
              "Order Summary"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 mb-4 max-h-56 overflow-y-auto pr-1", children: items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center gap-3",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-md overflow-hidden bg-muted shrink-0 ring-1 ring-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: item.product.imageUrl,
                      alt: item.product.name,
                      className: "w-full h-full object-cover"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-foreground line-clamp-1", children: item.product.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                      "Qty: ",
                      item.quantity
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-mono font-semibold text-foreground shrink-0", children: [
                    "$",
                    (item.product.price * item.quantity).toFixed(2)
                  ] })
                ]
              },
              item.product.id
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "mb-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2.5 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Subtotal" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono", children: [
                  "$",
                  totalPrice.toFixed(2)
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Tax (10%)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono", children: [
                  "$",
                  tax.toFixed(2)
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "w-3.5 h-3.5" }),
                  " Shipping"
                ] }),
                shipping === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600 font-medium", children: "Free" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono", children: [
                  "$",
                  shipping.toFixed(2)
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-display font-bold text-foreground text-lg pt-0.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono", children: [
                  "$",
                  grandTotal.toFixed(2)
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-3.5 h-3.5 text-green-600 shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "SSL/TLS 256-bit encrypted payment" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "w-3.5 h-3.5 text-primary shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Free shipping on orders over $50" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-3.5 h-3.5 text-primary shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "30-day hassle-free returns" })
              ] })
            ] })
          ]
        }
      ) })
    ] }) }) })
  ] });
}
export {
  Checkout
};
