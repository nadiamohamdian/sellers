import React from 'react';
import Card from '../ui/Card';
import Input from '../ui/Input';
import Button from '../ui/Button';
import SupportLinks from './SupportLinks';

export default function LoginForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className="order-1 lg:order-2 flex items-center justify-center">
      <div className="w-full max-w-md">
        <Card className="rounded-2xl bg-surface-soft shadow-card p-6">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Header */}
            <div className="text-center lg:text-right">
              <h1 className="text-[20px] font-bold text-text-muted mb-3 font-yekan">
                ورود یا ثبت نام
              </h1>
              <p className="text-text-muted text-[18px] leading-[31px] tracking-wide mb-8 font-yekan">
                سلام! برای فروش در استاویتا آماده‌اید؟ شماره موبایل یا ایمیل خود را وارد کنید:
              </p>
            </div>

            {/* Form Fields */}
            <div className="space-y-6">
              <div>
                <label 
                  htmlFor="identity" 
                  className="block text-[20px] text-text-muted mb-3 text-center lg:text-right font-yekan"
                >
                  شماره موبایل یا ایمیل
                </label>
                <Input
                  id="identity"
                  name="identity"
                  type="text"
                  placeholder="09123456789"
                  dir="ltr"
                  className="h-12 rounded-lg border border-text-muted/40 shadow-sm"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                fullWidth
                className="rounded-lg h-12 shadow-glow font-yekan text-[14px] font-bold"
              >
                تایید
              </Button>
            </div>
          </form>

          {/* Support Links */}
          <div className="mt-6">
            <SupportLinks />
          </div>
        </Card>
      </div>
    </div>
  );
}