import { X } from 'lucide-react'
import Image from 'next/image'

interface FoodModalProps {
  food: {
    name: string;
    description: string;
    price: string;
    image: string;
    marketingContent: string;
  } | null;
  onClose: () => void;
}

export default function FoodModal({ food, onClose }: FoodModalProps) {
  if (!food) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-lg w-full overflow-hidden shadow-xl">
        <div className="relative">
          <Image src={food.image} alt={food.name} width={600} height={400} className="w-full h-48 object-cover" />
          <button 
            onClick={onClose}
            className="absolute top-2 right-2 bg-white rounded-full p-1"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">{food.name}</h2>
          <p className="text-gray-600 mb-4">{food.marketingContent}</p>
          <p className="text-xl font-bold">{food.price}</p>
        </div>
      </div>
    </div>
  )
}

