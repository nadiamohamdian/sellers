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
import OwnerInfoPage from "./pages/OwnerInfoPage";
import StoreInfoPage from "./pages/StoreInfoPage";
import AddressesPage from "./pages/AddressesPage";
import FinancePage from "./pages/FinancePage";
import DocumentsPage from "./pages/DocumentsPage";
import ContractsPage from "./pages/ContractsPage"; // NEW
import { ROUTES } from "./routes/routes";

const isAuthed = () => !!localStorage.getItem("token");           // بعد از OTP ست می‌کنیم
const isOnboarded = () => localStorage.getItem("onboarded") === "1"; // بعد از ثبت‌نام ست می‌کنیم

function RequireAuth({ children }: { children: JSX.Element }) {
    return isAuthed() ? children : <Navigate to="/login" replace />;
}

export default function App() {
    return (
        <Routes>
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

            {/* Dashboard */}
            <Route
                path={ROUTES.dashboard}
                element={
                    <RequireAuth>
                        {isOnboarded() ? <Dashboard /> : <Navigate to="/signup" replace />}
                    </RequireAuth>
                }
            />

            {/* Owner Info */}
            <Route
                path={ROUTES.ownerInfo}
                element={
                    <RequireAuth>
                        {isOnboarded() ? <OwnerInfoPage /> : <Navigate to="/signup" replace />}
                    </RequireAuth>
                }
            />

            {/* Store Info */}
            <Route
                path={ROUTES.storeInfo}
                element={
                    <RequireAuth>
                        {isOnboarded() ? <StoreInfoPage /> : <Navigate to="/signup" replace />}
                    </RequireAuth>
                }
            />

            {/* Addresses */}
            <Route
                path={ROUTES.addresses}
                element={
                    <RequireAuth>
                        {isOnboarded() ? <AddressesPage /> : <Navigate to="/signup" replace />}
                    </RequireAuth>
                }
            />

            {/* Finance */}
            <Route
                path={ROUTES.finance}
                element={
                    <RequireAuth>
                        {isOnboarded() ? <FinancePage /> : <Navigate to="/signup" replace />}
                    </RequireAuth>
                }
            />

            {/* Documents */}
            <Route
                path={ROUTES.documents}
                element={
                    <RequireAuth>
                        {isOnboarded() ? <DocumentsPage /> : <Navigate to="/signup" replace />}
                    </RequireAuth>
                }
            />

            {/* Contracts */}
            <Route
                path={ROUTES.contracts}
                element={
                    <RequireAuth>
                        {isOnboarded() ? <ContractsPage /> : <Navigate to="/signup" replace />}
                    </RequireAuth>
                }
            />

            {/* Root redirect to Dashboard */}
            <Route
                path="/"
                element={
                    <RequireAuth>
                        {isOnboarded() ? <Navigate to={ROUTES.dashboard} replace /> : <Navigate to="/signup" replace />}
                    </RequireAuth>
                }
            />

            <Route path="/signup" element={<SignupPage />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
    );
}