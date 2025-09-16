import React from "react";

const steps = [
    { id: "edu", label: "آموزش" },
    { id: "docs", label: "ارسال مدارک" },
    { id: "iban", label: "ثبت شماره حساب" },
    { id: "contract", label: "ارسال قرارداد" },
    { id: "email", label: "تایید ایمیل" },
    { id: "profile", label: "پروفایل" },
];

export default function SignupStepper({active="profile"}:{active?:string}) {
    return (
        <div className="bg-white/60 rounded-2xl border border-white p-5">
            <div className="grid grid-cols-6 gap-6">
                {steps.map((s, i)=>(
                    <div key={s.id} className="flex flex-col items-center">
                        <div className={[
                            "w-14 h-14 rounded-xl grid place-items-center",
                            s.id===active ? "bg-[#0560FD]" : "bg-[#ECF0FF]"
                        ].join(" ")}>
                            {/* مربع/آیکون ساده */}
                            <div className={[
                                "w-4 h-4",
                                s.id===active ? "bg-white" : "bg-[#606060]"
                            ].join(" ")} />
                        </div>
                        {/* خط و نقطه زیر هر آیکون شبیه فیگما */}
                        <div className="mt-2 h-[2px] w-24 bg-[#cfd8ff] relative">
              <span className={[
                  "absolute -bottom-[6px] right-1 w-2 h-2 rounded-full",
                  s.id===active ? "bg-[#0560FD] shadow-[0_0_6px_#0091D0]" : "bg-[#606060]"
              ].join(" ")} />
                        </div>
                        <div className="mt-2 text-sm text-[#606060] font-medium">{s.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
