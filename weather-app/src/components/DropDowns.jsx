import { useState, useRef, useEffect } from "react";
import { Check, ChevronDown } from "lucide-react";
import gear from "../assets/images/icon-units.svg";
import { useContext } from "react";
import { WeatherContext } from "@/context/WeatherContext";
/**
 * Two shadcn-style dropdowns for the Frontend Mentor weather app:
 * 1. UnitsDropdown  – "Switch to Imperial" units menu with checkable groups
 * 2. DayDropdown    – simple single-select day list
 *
 * Built with your existing token convention (--neutral-*, --orange-500,
 * --blue-500/700) wired into Tailwind's arbitrary value syntax, e.g.
 * bg-(--neutral-800) text-(--neutral-0). Swap these for your real
 * @theme tokens in your Tailwind v4 setup.
 *
 * Uses shadcn's DropdownMenu primitives conceptually (Radix under the
 * hood) — if you paste this into your project, install it first:
 *   npx shadcn@latest add dropdown-menu
 * Then swap the local <Menu>/<MenuItem> below for the real
 * DropdownMenu / DropdownMenuContent / DropdownMenuCheckboxItem
 * exports from "@/components/ui/dropdown-menu" — the markup and
 * classNames map over 1:1, only the import changes.
 */

// ---- tiny local primitives standing in for shadcn's dropdown-menu ----
// (kept dependency-free so this preview renders standalone; the JSX
// shape mirrors shadcn's real DropdownMenu API almost exactly)

function useOutsideClose(ref, onClose) {
  useEffect(() => {
    function handler(e) {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [ref, onClose]);
}

function DropdownShell({
  trigger,
  open,
  setOpen,
  children,
  align = "start",
  width = "w-56",
}) {
  const ref = useRef(null);
  useOutsideClose(ref, () => setOpen(false));

  return (
    <div className="relative inline-block" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 rounded-lg bg-(--neutral-800) px-4 py-2.5
                   text-sm font-medium text-(--neutral-0) hover:bg-(--neutral-700)
                   transition-colors focus:outline-none focus-visible:ring-2
                   focus-visible:ring-(--blue-500)"
      >
        <img src={gear} alt="gear-icon" />
        {trigger}
        <ChevronDown
          size={16}
          className={`text-(--neutral-200) transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          role="menu"
          className={`absolute z-50 mt-2 ${width} max-w-[calc(100vw-2rem)]
                      overflow-hidden rounded-xl bg-(--neutral-800) p-2 shadow-xl
                      ring-1 ring-(--neutral-700)
                      ${align === "end" ? "right-0" : "left-0"}`}
        >
          {children}
        </div>
      )}
    </div>
  );
}

function MenuLabel({ children }) {
  return (
    <p className="px-2 pb-1 pt-2 text-xs font-medium text-(--neutral-300)">
      {children}
    </p>
  );
}

function MenuSeparator() {
  return <div className="my-1 h-px bg-(--neutral-700)" />;
}

function CheckboxItem({ checked, onSelect, children }) {
  return (
    <button
      type="button"
      role="menuitemradio"
      aria-checked={checked}
      onClick={onSelect}
      className={`flex w-full items-center justify-between rounded-md px-2 py-2
                  text-sm transition-colors
                  ${
                    checked
                      ? "bg-(--neutral-700) text-(--neutral-0) font-medium"
                      : "text-(--neutral-200) hover:bg-(--neutral-700)/60"
                  }`}
    >
      {children}
      {checked && (
        <Check size={16} className="text-(--orange-500)" strokeWidth={3} />
      )}
    </button>
  );
}

function PlainItem({ onSelect, children }) {
  return (
    <button
      type="button"
      role="menuitem"
      onClick={onSelect}
      className="w-full rounded-md px-2 py-2 text-left text-sm font-medium
                 text-(--neutral-0) hover:bg-(--neutral-700) transition-colors"
    >
      {children}
    </button>
  );
}

// ---------------------------- Units dropdown ----------------------------

const UNIT_GROUPS = [
  {
    label: "Temperature",
    key: "temperature",
    options: [
      { value: "celsius", label: "Celsius (°C)" },
      { value: "fahrenheit", label: "Fahrenheit (°F)" },
    ],
  },
  {
    label: "Wind Speed",
    key: "windSpeed",
    options: [
      { value: "kmh", label: "km/h" },
      { value: "mph", label: "mph" },
    ],
  },
  {
    label: "Precipitation",
    key: "precipitation",
    options: [
      { value: "mm", label: "Millimeters (mm)" },
      { value: "inch", label: "Inches (in)" },
    ],
  },
];

export const UnitsDropdown = () => {
  const [open, setOpen] = useState(false);
  const { units, setUnits } = useContext(WeatherContext);

  const isImperial =
    units.temperature === "fahrenheit" &&
    units.windSpeed === "mph" &&
    units.precipitation === "inch";

  function switchSystem() {
    setUnits(
      isImperial
        ? {
            temperature: "celsius",
            windSpeed: "kmh",
            precipitation: "mm",
          }
        : {
            temperature: "fahrenheit",
            windSpeed: "mph",
            precipitation: "inch",
          },
    );
  }

  return (
    <DropdownShell trigger="Units" open={open} setOpen={setOpen} align="end">
      <PlainItem onSelect={switchSystem}>
        Switch to {isImperial ? "Metric" : "Imperial"}
      </PlainItem>

      {UNIT_GROUPS.map((group) => (
        <div key={group.key}>
          <MenuSeparator />
          <MenuLabel>{group.label}</MenuLabel>

          {group.options.map((opt) => (
            <CheckboxItem
              key={opt.value}
              checked={units[group.key] === opt.value}
              onSelect={() =>
                setUnits((prev) => ({
                  ...prev,
                  [group.key]: opt.value,
                }))
              }
            >
              {opt.label}
            </CheckboxItem>
          ))}
        </div>
      ))}
    </DropdownShell>
  );
};

// ----------------------------- Day dropdown ------------------------------

export const DayDropdown = ({ daily, selectedDay, setSelectedDay }) => {
  const [open, setOpen] = useState(false);

  const days =
    daily?.time?.map((date) => ({
      value: date,
      label: new Date(date).toLocaleDateString("en-US", {
        weekday: "long",
      }),
    })) ?? [];

  const selectedLabel =
    days.find((d) => d.value === selectedDay)?.label ?? "Select Day";

  return (
    <DropdownShell
      trigger={selectedLabel}
      open={open}
      setOpen={setOpen}
      width="w-40"
    >
      {days.map((d) => (
        <button
          key={d.value}
          type="button"
          role="menuitemradio"
          aria-checked={d.value === selectedDay}
          onClick={() => {
            setSelectedDay(d.value);
            setOpen(false);
          }}
          className={`w-full rounded-md px-2 py-2 text-left text-sm transition-colors
    ${
      d.value === selectedDay
        ? "bg-(--neutral-700) text-(--neutral-0) font-medium"
        : "text-(--neutral-200) hover:bg-(--neutral-700)/60"
    }`}
        >
          {d.label}
        </button>
      ))}
    </DropdownShell>
  );
};
