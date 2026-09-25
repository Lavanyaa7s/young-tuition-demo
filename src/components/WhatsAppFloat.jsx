import { MessageCircle } from 'lucide-react'
import { centre } from '../data/centre'

export default function WhatsAppFloat() {
  const message = encodeURIComponent(
    'Hi Young Tuition Centre, I would like to enquire about your tuition classes.'
  )

  return (
    <a
      href={`https://wa.me/${centre.whatsapp}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:scale-110 hover:bg-green-600 animate-bounce [animation-duration:3s] [animation-iteration-count:3]"
    >
      <MessageCircle size={28} fill="white" />
    </a>
  )
}
