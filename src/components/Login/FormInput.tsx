function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.4 0-8 2.2-8 5v1h16v-1c0-2.8-3.6-5-8-5Z" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M12 2a4 4 0 0 0-4 4v3H7a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-1V6a4 4 0 0 0-4-4Zm-2 4a2 2 0 1 1 4 0v3h-4V6Zm2 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
    </svg>
  );
}

export default function FormInput({
  icon,
  type = "text",
  placeholder,
  value,
  onChange,
  name,
}: {
  icon: "user" | "lock";
  type?: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  name: string;
}) {
  return (
    <div className="relative">
      <input
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border-2 border-[#e5252d] bg-white/95 px-4 py-3 pr-12 text-[15px] text-neutral-800 placeholder:text-neutral-500 outline-none transition-shadow focus:ring-2 focus:ring-[#e5252d]/40"
      />
      <span className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#e5252d] text-[#e5252d]">
        {icon === "user" ? <UserIcon /> : <LockIcon />}
      </span>
    </div>
  );
}
