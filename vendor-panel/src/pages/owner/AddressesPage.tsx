import { Plus, MapPin, Phone, MoreVertical, Edit, Trash2 } from "lucide-react";
import { useState } from "react";

function AddressCard({ 
    location, 
    city, 
    phones, 
    showMenu = false, 
    onToggleMenu 
}: { 
    location: string; 
    city: string; 
    phones: string[]; 
    showMenu?: boolean; 
    onToggleMenu?: () => void; 
}) {
    return (
        <div className="relative rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
            {/* Map thumbnail placeholder */}
            <div className="mb-3 h-20 w-full rounded-lg bg-zinc-100 flex items-center justify-center">
                <MapPin className="size-6 text-zinc-400" />
            </div>
            
            {/* Location details */}
            <div className="space-y-2">
                <div className="text-sm font-medium text-zinc-800">{location}</div>
                <div className="text-xs text-zinc-500">{city}</div>
                
                {/* Phone numbers */}
                <div className="space-y-1">
                    {phones.map((phone, index) => (
                        <div key={index} className="flex items-center gap-2 text-xs text-zinc-600">
                            <Phone className="size-3" />
                            <span>{phone}</span>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Options menu */}
            <div className="absolute top-3 left-3">
                <button 
                    onClick={onToggleMenu}
                    className="p-1 hover:bg-zinc-100 rounded"
                >
                    <MoreVertical className="size-4 text-zinc-500" />
                </button>
                
                {showMenu && (
                    <div className="absolute top-8 left-0 bg-white border border-zinc-200 rounded-lg shadow-lg py-1 z-10 min-w-[120px]">
                        <button className="flex items-center gap-2 w-full px-3 py-2 text-xs text-zinc-700 hover:bg-zinc-50">
                            <Edit className="size-3" />
                            ویرایش آدرس
                        </button>
                        <button className="flex items-center gap-2 w-full px-3 py-2 text-xs text-red-600 hover:bg-red-50">
                            <Trash2 className="size-3" />
                            حذف آدرس
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default function AddressesPage() {
    const [showMenu, setShowMenu] = useState<number | null>(null);
    
    const addresses = [
        {
            location: "تهران، تهران، میدان آزادی، خیابان یکم، پلاک واحد",
            city: "تهران",
            phones: ["۱۲۳۴۵۶۷۷۸۹", "۰۹۱۲۱۲۳۴۵۶۷"]
        },
        {
            location: "تهران، تهران، میدان آزادی، خیابان یکم، پلاک واحد",
            city: "تهران",
            phones: ["۱۲۳۴۵۶۷۷۸۹", "۰۹۱۲۱۲۳۴۵۶۷"]
        }
    ];

    return (
        <div className="rounded-2xl border border-zinc-200 bg-white p-4 lg:p-6 shadow-sm">
            {/* Header */}
            <div className="relative mb-4">
                <div className="absolute inset-x-0 top-0 border-t border-zinc-200" />
                <div className="mx-auto w-fit -mt-3 rounded bg-white px-3 text-[12px] font-bold text-blue-600">
                    آدرس های شما
                </div>
            </div>

            <p className="mb-6 text-center text-[12px] text-zinc-500">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
            </p>

            {/* Add new address button */}
            <div className="mb-6">
                <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-white font-bold text-sm shadow-lg hover:bg-blue-700 transition-colors">
                    <Plus className="size-4" />
                    ثبت آدرس جدید
                </button>
            </div>

            {/* Address cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {addresses.map((address, index) => (
                    <AddressCard
                        key={index}
                        location={address.location}
                        city={address.city}
                        phones={address.phones}
                        showMenu={showMenu === index}
                        onToggleMenu={() => setShowMenu(showMenu === index ? null : index)}
                    />
                ))}
            </div>
        </div>
    );
}
