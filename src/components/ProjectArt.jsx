
import { useEffect, useId, useRef } from "react";

import {
  useInView,
  useReducedMotionConfig,
} from "framer-motion";


// ---------------------------------------------------------------------------
// GOTRIP - TRAVEL BOOKING DASHBOARD
// ---------------------------------------------------------------------------

function TravelArt({ animate, uid }) {
  const routeGradient = `${uid}-route`;

  return (
    <>
      <defs>
        <linearGradient id={routeGradient} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#2dd4bf" />
        </linearGradient>
      </defs>

      {/* Background map */}

      <rect
        x="25" y="28"
        width="590" height="344"
        rx="18"
        fill="currentColor"
        fillOpacity=".025"
        stroke="currentColor"
        strokeOpacity=".15"
      />

      {/* Header */}

      <circle cx="51" cy="53" r="5" fill="#60a5fa" />

      <text
        x="66" y="57"
        fontSize="10"
        fontWeight="bold"
        letterSpacing="1.5"
        fill="currentColor"
        fontFamily="monospace"
      >
        GOTRIP
      </text>

      <text
        x="568" y="57"
        textAnchor="end"
        fontSize="9"
        fill="currentColor"
        opacity=".55"
        fontFamily="monospace"
      >
        TRAVEL PLANNER
      </text>

      <path
        d="M25 75 H615"
        stroke="currentColor"
        strokeOpacity=".15"
      />

      {/* Map grid and roads */}

      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        opacity=".13"
      >
        <path d="M45 105 L370 320" />
        <path d="M30 205 L380 105" />
        <path d="M65 345 L370 125" />
        <path d="M165 75 L100 360" />
        <path d="M300 75 L200 360" />
        <path d="M380 75 L300 360" />
        <path d="M35 145 L380 145" />
        <path d="M35 245 L380 245" />
        <path d="M35 320 L380 320" />
      </g>

      {/* Map area highlights */}

      <path
        d="M48 112 C112 88 175 119 215 100
           C260 80 318 112 367 92
           L367 347 L48 347 Z"
        fill="#60a5fa"
        fillOpacity=".035"
      />

      {/* Animated route */}

      <path
        d="M65 294 C112 269 119 189 196 207
           S270 258 315 178 S356 128 372 130"
        fill="none"
        stroke={ "url(#" + routeGradient + ")" }
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeDasharray="8 8"
      >
        {animate && (
          <animate
            attributeName="stroke-dashoffset"
            values="0;-64"
            dur="3s"
            repeatCount="indefinite"
          />
        )}
      </path>

      {/* Route points */}

      {[
        { x: 65, y: 294 },
        { x: 196, y: 207 },
        { x: 315, y: 178 },
        { x: 372, y: 130 },
      ].map((point, i) => (
        <g key={i}>
          <circle
            cx={point.x}
            cy={point.y}
            r="12"
            fill="#60a5fa"
            fillOpacity=".12"
          />
          <circle
            cx={point.x}
            cy={point.y}
            r="4.5"
            fill="#60a5fa"
          />
        </g>
      ))}

      {/* Travelling location indicator */}

      {animate && (
        <circle r="5" fill="#2dd4bf">
          <animateMotion
            path="M65 294 C112 269 119 189 196 207 S270 258 315 178 S356 128 372 130"
            dur="6s"
            repeatCount="indefinite"
          />
        </circle>
      )}

      {/* Booking panel */}

      <rect
        x="397" y="94"
        width="197" height="237"
        rx="13"
        fill="#171d2b"
        fillOpacity=".96"
        stroke="#60a5fa"
        strokeOpacity=".35"
      />

      <text
        x="414" y="119"
        fontSize="9"
        fill="#60a5fa"
        fontFamily="monospace"
        letterSpacing="1"
      >
        BOOKING DETAILS
      </text>

      <path
        d="M413 133 H577"
        stroke="currentColor"
        opacity=".15"
      />

      {/* Destination icon */}

      <circle
        cx="430" cy="162"
        r="14"
        fill="#60a5fa"
        fillOpacity=".16"
      />

      <path
        d="M430 155 C422 155 422 165 430 172 C438 165 438 155 430 155 Z"
        fill="#60a5fa"
      />

      <circle cx="430" cy="162" r="2.5" fill="#171d2b" />

      <text
        x="453" y="161"
        fontSize="11"
        fontWeight="bold"
        fill="#f1f5f9"
      >
        Your Journey
      </text>

      <text
        x="453" y="174"
        fontSize="8"
        fill="#94a3b8"
      >
        Travel itinerary
      </text>

      {/* Booking status */}

      <rect
        x="414" y="192"
        width="162" height="28"
        rx="7"
        fill="#2dd4bf"
        fillOpacity=".10"
      />

      <circle cx="428" cy="206" r="4" fill="#2dd4bf" />

      <text
        x="440" y="209"
        fontSize="9"
        fill="#2dd4bf"
        fontWeight="bold"
      >
        Booking Management
      </text>

      {/* Details */}

      {["Tour listings", "JWT Authentication", "MySQL Integration"].map(
        (item, i) => (
          <g key={item}>
            <circle
              cx="421"
              cy={245 + i * 22}
              r="3"
              fill="#60a5fa"
              opacity=".8"
            />
            <text
              x="432"
              y={248 + i * 22}
              fontSize="8.5"
              fill="#cbd5e1"
            >
              {item}
            </text>
          </g>
        )
      )}

      {/* Bottom label */}

      <rect
        x="60" y="344"
        width="300"
        height="19"
        rx="9"
        fill="#60a5fa"
        fillOpacity=".10"
      />

      <text
        x="210" y="357"
        fontSize="8"
        textAnchor="middle"
        fill="#60a5fa"
        fontFamily="monospace"
        letterSpacing="1"
      >
        TRAVEL • EXPLORE • BOOK
      </text>

    </>
  );
}


// ---------------------------------------------------------------------------
// CLICKSTORE - E-COMMERCE STORE DASHBOARD
// ---------------------------------------------------------------------------

function EcommerceArt({ animate }) {
  const products = [
    { x: 187, label: "Product 01", color: "#2dd4bf", shape: "diamond" },
    { x: 322, label: "Product 02", color: "#60a5fa", shape: "box" },
    { x: 457, label: "Product 03", color: "#a78bfa", shape: "circle" },
  ];

  return (
    <>
      {/* Browser frame */}

      <rect
        x="26" y="28"
        width="588" height="344"
        rx="17"
        fill="currentColor"
        fillOpacity=".025"
        stroke="currentColor"
        strokeOpacity=".18"
      />

      {/* Browser top bar */}

      <circle cx="49" cy="51" r="4" fill="#fb7185" />
      <circle cx="63" cy="51" r="4" fill="#fbbf24" />
      <circle cx="77" cy="51" r="4" fill="#2dd4bf" />

      <text
        x="320" y="55"
        textAnchor="middle"
        fontSize="9"
        fill="currentColor"
        opacity=".6"
        fontFamily="monospace"
      >
        CLICKSTORE • PRODUCT MANAGEMENT
      </text>

      <path
        d="M26 70 H614"
        stroke="currentColor"
        opacity=".15"
      />

      {/* Sidebar */}

      <rect
        x="27" y="71"
        width="119" height="300"
        fill="#2dd4bf"
        fillOpacity=".035"
      />

      <text
        x="44" y="98"
        fontSize="11"
        fill="#2dd4bf"
        fontWeight="bold"
      >
        CLICKSTORE
      </text>

      {[
        "Dashboard",
        "Products",
        "Categories",
        "Inventory",
        "Orders",
      ].map((item, i) => (
        <g key={item}>
          <rect
            x="38"
            y={115 + i * 34}
            width="96"
            height="25"
            rx="5"
            fill={i === 1 ? "#2dd4bf" : "transparent"}
            fillOpacity={i === 1 ? ".14" : "0"}
          />

          <circle
            cx="49"
            cy={127 + i * 34}
            r="3"
            fill={i === 1 ? "#2dd4bf" : "#64748b"}
          />

          <text
            x="59"
            y={130 + i * 34}
            fontSize="8"
            fill={i === 1 ? "#2dd4bf" : "#94a3b8"}
          >
            {item}
          </text>
        </g>
      ))}

      {/* Main content heading */}

      <text
        x="165" y="101"
        fontSize="15"
        fill="currentColor"
        fontWeight="bold"
      >
        Store Overview
      </text>

      <text
        x="165" y="116"
        fontSize="8"
        fill="currentColor"
        opacity=".48"
      >
        Products and inventory
      </text>

      {/* Search bar */}

      <rect
        x="450" y="83"
        width="143" height="25"
        rx="6"
        fill="currentColor"
        fillOpacity=".06"
        stroke="currentColor"
        strokeOpacity=".16"
      />

      <circle
        cx="465" cy="95"
        r="4"
        fill="none"
        stroke="currentColor"
        opacity=".5"
      />

      <text
        x="475" y="98"
        fontSize="8"
        fill="currentColor"
        opacity=".5"
      >
        Search products
      </text>

      {/* Shopping cart indicator */}

      <g transform="translate(577 119)">
        <circle r="10" fill="#2dd4bf" fillOpacity=".14" />
        <path
          d="M-5 -5 H-3 L0 3 H6 L8 -2 H-2"
          fill="none"
          stroke="#2dd4bf"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        {animate && (
          <circle cx="7" cy="-8" r="4" fill="#2dd4bf">
            <animate
              attributeName="r"
              values="3;5;3"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
        )}
      </g>

      {/* Product cards */}

      {products.map((product, i) => (
        <g key={product.label}>

          <rect
            x={product.x}
            y="138"
            width="119"
            height="171"
            rx="10"
            fill="currentColor"
            fillOpacity=".035"
            stroke="currentColor"
            strokeOpacity=".18"
          />

          {/* Product image area */}

          <rect
            x={product.x + 8}
            y="146"
            width="103"
            height="91"
            rx="7"
            fill={product.color}
            fillOpacity=".10"
          />

          {product.shape === "diamond" && (
            <path
              d={`M${product.x + 59} 163 L${product.x + 82} 190 L${product.x + 59} 218 L${product.x + 36} 190 Z`}
              fill={product.color}
              fillOpacity=".65"
            />
          )}

          {product.shape === "box" && (
            <g
              stroke={product.color}
              strokeWidth="2"
              strokeLinejoin="round"
              fill={product.color}
              fillOpacity=".20"
            >
              <path d={`M${product.x + 36} 177 L${product.x + 59} 166 L${product.x + 82} 177 L${product.x + 59} 190 Z`} />
              <path d={`M${product.x + 36} 177 V205 L${product.x + 59} 218 V190 Z`} />
              <path d={`M${product.x + 59} 190 L${product.x + 82} 177 V205 L${product.x + 59} 218 Z`} />
            </g>
          )}

          {product.shape === "circle" && (
            <g>
              <circle
                cx={product.x + 59}
                cy="191"
                r="24"
                fill={product.color}
                fillOpacity=".55"
              />
              <circle
                cx={product.x + 59}
                cy="191"
                r="12"
                fill={product.color}
                fillOpacity=".28"
              />
            </g>
          )}

          {/* Product information */}

          <text
            x={product.x + 10}
            y="255"
            fontSize="9"
            fill="currentColor"
            fontWeight="bold"
          >
            {product.label}
          </text>

          <path
            d={`M${product.x + 10} 269 H${product.x + 69}`}
            stroke="currentColor"
            opacity=".35"
            strokeWidth="2"
            strokeLinecap="round"
          />

          <path
            d={`M${product.x + 10} 279 H${product.x + 51}`}
            stroke="currentColor"
            opacity=".20"
            strokeWidth="2"
            strokeLinecap="round"
          />

          <text
            x={product.x + 10}
            y="297"
            fontSize="9"
            fill={product.color}
            fontWeight="bold"
          >
            View Product
          </text>

        </g>
      ))}

      {/* Inventory footer */}

      <rect
        x="165" y="324"
        width="427" height="30"
        rx="7"
        fill="#2dd4bf"
        fillOpacity=".08"
        stroke="#2dd4bf"
        strokeOpacity=".18"
      />

      <circle
        cx="181" cy="339"
        r="4"
        fill="#2dd4bf"
      />

      <text
        x="193" y="342"
        fontSize="9"
        fill="#2dd4bf"
      >
        Inventory & Order Management
      </text>

      <text
        x="573" y="342"
        textAnchor="end"
        fontSize="8"
        fill="currentColor"
        opacity=".5"
      >
        FULL STACK
      </text>

    </>
  );
}


// ---------------------------------------------------------------------------
// REVITALIZE - WASTE MANAGEMENT DASHBOARD
// ---------------------------------------------------------------------------

function EnvironmentArt({ animate, uid }) {
  const chartGradient = `${uid}-chart`;

  return (
    <>
      <defs>
        <linearGradient id={chartGradient} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2dd4bf" stopOpacity=".35" />
          <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Main dashboard frame */}

      <rect
        x="26" y="28"
        width="588" height="344"
        rx="17"
        fill="currentColor"
        fillOpacity=".025"
        stroke="currentColor"
        strokeOpacity=".18"
      />

      {/* Header */}

      <text
        x="49" y="57"
        fontSize="12"
        fontWeight="bold"
        fill="#2dd4bf"
        letterSpacing="1"
      >
        REVITALIZE
      </text>

      <text
        x="588" y="57"
        textAnchor="end"
        fontSize="9"
        fill="currentColor"
        opacity=".5"
        fontFamily="monospace"
      >
        WASTE MANAGEMENT
      </text>

      <path
        d="M27 75 H613"
        stroke="currentColor"
        strokeOpacity=".15"
      />

      {/* Metric cards */}

      {[
        { x: 46, title: "COLLECTION", value: "01", color: "#2dd4bf" },
        { x: 244, title: "CATEGORIES", value: "02", color: "#60a5fa" },
        { x: 442, title: "SUSTAINABILITY", value: "03", color: "#a3e635" },
      ].map((item) => (
        <g key={item.title}>
          <rect
            x={item.x}
            y="91"
            width="179"
            height="62"
            rx="9"
            fill="currentColor"
            fillOpacity=".035"
            stroke="currentColor"
            strokeOpacity=".16"
          />

          <circle
            cx={item.x + 17}
            cy="111"
            r="4"
            fill={item.color}
          />

          <text
            x={item.x + 29}
            y="114"
            fontSize="8"
            fill="currentColor"
            opacity=".55"
            letterSpacing=".7"
          >
            {item.title}
          </text>

          <text
            x={item.x + 17}
            y="139"
            fontSize="17"
            fill={item.color}
            fontWeight="bold"
          >
            {item.value}
          </text>

          <path
            d={`M${item.x + 125} 137 l8 -10 l8 5 l12 -15`}
            fill="none"
            stroke={item.color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      ))}

      {/* Analytics chart card */}

      <rect
        x="46" y="169"
        width="335" height="174"
        rx="10"
        fill="currentColor"
        fillOpacity=".025"
        stroke="currentColor"
        strokeOpacity=".18"
      />

      <text
        x="62" y="192"
        fontSize="10"
        fill="currentColor"
        fontWeight="bold"
      >
        Collection Activity
      </text>

      <text
        x="362" y="192"
        textAnchor="end"
        fontSize="8"
        fill="#2dd4bf"
      >
        ANALYTICS
      </text>

      {/* Chart grid */}

      <g
        stroke="currentColor"
        strokeOpacity=".12"
        strokeDasharray="3 4"
      >
        <path d="M65 220 H365" />
        <path d="M65 255 H365" />
        <path d="M65 290 H365" />
        <path d="M65 320 H365" />
      </g>

      {/* Chart area */}

      <path
        d="M65 306 L104 285 L143 292 L182 257 L221 267 L260 229 L299 243 L338 213 L365 225 V320 H65 Z"
        fill={`url(#${chartGradient})`}
      >
        {animate && (
          <animate
            attributeName="opacity"
            values=".45;.85;.45"
            dur="3.5s"
            repeatCount="indefinite"
          />
        )}
      </path>

      {/* Chart line */}

      <path
        d="M65 306 L104 285 L143 292 L182 257 L221 267 L260 229 L299 243 L338 213 L365 225"
        fill="none"
        stroke="#2dd4bf"
        strokeWidth="2.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {animate && (
          <animate
            attributeName="stroke-dasharray"
            values="0 500;500 0"
            dur="3s"
            repeatCount="indefinite"
          />
        )}
      </path>

      {/* Recycling side panel */}

      <rect
        x="400" y="169"
        width="194" height="174"
        rx="10"
        fill="currentColor"
        fillOpacity=".035"
        stroke="currentColor"
        strokeOpacity=".18"
      />

      <text
        x="418" y="192"
        fontSize="10"
        fontWeight="bold"
        fill="currentColor"
      >
        Recycling
      </text>

      {/* Recycling symbol */}

      <g transform="translate(497 250)">
        <g
          fill="none"
          stroke="#2dd4bf"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M-5 -35 L16 -35 L25 -17" />
          <path d="M25 -17 L12 -18 M25 -17 L29 -30" />

          <path d="M27 -6 L17 13 L-4 13" />
          <path d="M-4 13 L3 2 M-4 13 L8 22" />

          <path d="M-17 5 L-27 -13 L-16 -33" />
          <path d="M-16 -33 L-16 -20 M-16 -33 L-29 -28" />
        </g>

        <circle
          r="15"
          fill="#2dd4bf"
          fillOpacity=".12"
        />

        {animate && (
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 0 0;360 0 0"
            dur="18s"
            repeatCount="indefinite"
          />
        )}
      </g>

      {/* Bottom description */}

      <text
        x="497" y="306"
        textAnchor="middle"
        fontSize="8"
        fill="#2dd4bf"
        letterSpacing="1"
      >
        RECYCLE • REUSE
      </text>

      <text
        x="497" y="320"
        textAnchor="middle"
        fontSize="8"
        fill="currentColor"
        opacity=".55"
      >
        SUSTAINABLE FUTURE
      </text>

    </>
  );
}


// ---------------------------------------------------------------------------
// PROJECT ART MAP
// ---------------------------------------------------------------------------

const ARTS = {
  travel: TravelArt,
  ecommerce: EcommerceArt,
  environment: EnvironmentArt,
};

const TONES = {
  travel: {
    text: "text-blue",
    glow: "bg-blue",
  },

  ecommerce: {
    text: "text-accent",
    glow: "bg-accent",
  },

  environment: {
    text: "text-amber",
    glow: "bg-amber",
  },
};


// ---------------------------------------------------------------------------
// MAIN PROJECT ART COMPONENT
// ---------------------------------------------------------------------------

export default function ProjectArt({ art }) {
  const Art = ARTS[art] ?? TravelArt;

  const tone = TONES[art] ?? TONES.travel;

  const reduceMotion = useReducedMotionConfig();

  const panelRef = useRef(null);
  const svgRef = useRef(null);

  const rawId = useId();
  const uid = rawId.replace(/[^a-zA-Z0-9_-]/g, "");

  const inView = useInView(panelRef, {
    margin: "120px 0px",
  });


  // Pause SVG animations when outside viewport.

  useEffect(() => {
    const svg = svgRef.current;

    if (!svg?.pauseAnimations) return;

    if (inView && !reduceMotion) {
      svg.unpauseAnimations();
    } else {
      svg.pauseAnimations();
    }

  }, [inView, reduceMotion]);


  return (
    <div
      ref={panelRef}
      aria-hidden="true"
      className="relative aspect-16/10 overflow-hidden rounded-[0.65rem] border border-line bg-linear-to-br from-surface via-surface to-surface-2 dark:from-surface-2 dark:via-surface dark:to-bg"
    >

      {/* Background grid */}

      <div
        className="bg-grid mask-radial absolute inset-0 opacity-50 dark:opacity-60"
        style={{ backgroundSize: "28px 28px" }}
      />


      {/* Project-specific glow */}

      <div
        className={`absolute left-1/2 top-1/2 h-2/3 w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-3xl transition-opacity duration-500 group-hover:opacity-40 dark:opacity-20 dark:group-hover:opacity-35 ${tone.glow}`}
      />


      {/* Animated responsive illustration */}

      <svg
        ref={svgRef}
        viewBox="0 0 640 400"
        preserveAspectRatio="xMidYMid meet"
        className={`absolute inset-0 size-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025] ${tone.text}`}
      >

        <Art
          animate={!reduceMotion && inView}
          uid={uid}
        />

      </svg>

    </div>
  );
}
