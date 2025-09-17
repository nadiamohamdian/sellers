// src/App.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import OtpPage from "./pages/OtpPage";
import SignupPage from "./pages/SignupPage";
import EmailVerificationPage from "./pages/EmailVerificationPage";
import ContractPage from "./pages/ContractPage";
import BankAccountPage from "./pages/BankAccountPage";
import SendDocumentsPage from "./pages/SendDocumentsPage";
import SellerPanel from "./pages/SellerPanel";
import Dashboard from "./pages/Dashboard";
import NewDashboard from "./pages/NewDashboard";
import DashboardPage from "./pages/DashboardPage";
import { ROUTES } from "./routes/routes";

const isAuthed = () => !!localStorage.getItem("token");           // بعد از OTP ست می‌کنیم
const isOnboarded = () => localStorage.getItem("onboarded") === "1"; // بعد از ثبت‌نام ست می‌کنیم

function RequireAuth({ children }: { children: JSX.Element }) {
    return isAuthed() ? children : <Navigate to="/login" replace />;
}

export default function App() {
    return (
        <Routes>
            {/* پیش‌فرض: لاگین */}
            <Route path="/" element={<Navigate to="/login" replace />} />

            <Route path="/login" element={<LoginPage />} />
            <Route path="/otp" element={<OtpPage />} />

            {/* پس از لاگین به /signup هدایت می‌شویم */}
            <Route
                path="/signup"
                element={
                    <RequireAuth>
                        <SignupPage />
                    </RequireAuth>
                }
            />
            <Route
                path="/signup/email"
                element={
                    <RequireAuth>
                        <EmailVerificationPage />
                    </RequireAuth>
                }
            />
            <Route
                path="/contract"
                element={
                    <RequireAuth>
                        <ContractPage />
                    </RequireAuth>
                }
            />
            <Route
                path="/bank-account"
                element={
                    <RequireAuth>
                        <BankAccountPage />
                    </RequireAuth>
                }
            />
            {/* Send Documents Page */}
            <Route
                path={ROUTES.sendDocuments}
                element={
                    <RequireAuth>
                        {isOnboarded() ? <SendDocumentsPage /> : <Navigate to="/signup" replace />}
                    </RequireAuth>
                }
            />

            {/* Seller Panel */}
            <Route
                path={ROUTES.sellerPanel}
                element={
                    <RequireAuth>
                        {isOnboarded() ? <SellerPanel /> : <Navigate to="/signup" replace />}
                    </RequireAuth>
                }
            />

            {/* Dashboard - redirect to Seller Panel */}
            <Route
                path={ROUTES.dashboard}
                element={
                    <RequireAuth>
                        {isOnboarded() ? <Navigate to={ROUTES.sellerPanel} replace /> : <Navigate to="/signup" replace />}
                    </RequireAuth>
                }
            />

            <Route path="/signup" element={<SignupPage />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
    );
}