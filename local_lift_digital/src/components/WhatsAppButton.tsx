const message =
  "Hi Thembani! I visited the Local Lift Digital website and would like to claim my free 5-minute visibility audit.";

const whatsappUrl = `https://wa.me/27694483699?text=${encodeURIComponent(message)}`;

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Local Lift Digital on WhatsApp"
      className="group fixed bottom-64 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-[#1ebe5d] sm:bottom-48 sm:right-6 md:bottom-20"
    >
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs font-medium text-white sm:group-hover:block sm:group-focus-visible:block">
        Chat with Thembani
      </span>
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7 fill-current"
        aria-hidden="true"
      >
        <path
          d="M20.5 11.7a8.4 8.4 0 0 1-12.4 7.4L4 20.2l1.2-4A8.4 8.4 0 1 1 20.5 11.7Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path d="M9 8.5c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4-.1.6l-.5.6c.6 1.1 1.5 1.9 2.6 2.5l.6-.6c.2-.2.4-.2.6-.1l1.6.7c.3.1.4.3.3.6-.2.8-.7 1.4-1.4 1.6-1.1.3-3.1-.5-4.8-2.1-1.5-1.4-2.4-3.2-2.4-4.3 0-.4.2-.8.4-1.1Z" />
      </svg>
    </a>
  );
}
