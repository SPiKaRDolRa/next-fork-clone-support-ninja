# 🛠️ SupportNinja Get Started Form (Next.js 15 + Tailwind + Zustand + React Hook Form + Zod)

## 📌 Overview
นี่คือโปรเจค **Multi-step Form** สำหรับหน้า `Get Started` ของ SupportNinja โดยใช้ **Next.js 15** พร้อม **Tailwind CSS** ในการจัดการ UI และใช้ **Zustand** สำหรับการจัดการ state ข้าม component นอกจากนี้ยังใช้ **React Hook Form** ร่วมกับ **Zod** ในการตรวจสอบความถูกต้องของข้อมูลแบบ real-time

---

## 🚀 Tech Stack
- **Frontend:** Next.js 15 (App Router)
- **UI Styling:** Tailwind CSS
- **State Management:** Zustand
- **Form Handling:** React Hook Form
- **Validation:** Zod
- **Routing:** Next.js App Router

---

## 📥 Installation
```bash
# 1️⃣ Clone Repository
git clone https://github.com/your-repo/supportninja-get-started.git

# 2️⃣ เข้าไปที่โฟลเดอร์โปรเจค
cd supportninja-get-started

# 3️⃣ ติดตั้ง Dependencies
npm install

# 4️⃣ เริ่มรัน Development Server
npm run dev
```

---

## 🎨 UI Components
```bash
# ✅ Step Progress Bar (StepProgress.tsx)
แสดง ขั้นตอนของฟอร์ม
Highlight Step ปัจจุบัน ด้วย text-green-900
แถบ Progress bar เพิ่มตาม step
# ✅ Step 1: เลือกประเภทการสนับสนุน (StepOne.tsx)
ผู้ใช้สามารถเลือก Service ที่ต้องการ
ใช้ Zustand ในการ บันทึกค่า ที่เลือกไว้
# ✅ Step 2: กรอกข้อมูลส่วนตัว (StepTwo.tsx)
ใช้ React Hook Form จัดการ Input
ตรวจสอบความถูกต้องของ Email และ Phone Number ด้วย Zod
# ✅ Step 3: ข้อมูลเพิ่มเติม (StepThree.tsx)
มี Dropdown ให้เลือก จำนวนคนที่ต้องการ
มี Textarea ให้ใส่ Business Goals
```

---

## ⚙️ State Management (Zustand)
- ใช้ Zustand จัดการ step, selectedOptions, และ formData
- ฟอร์มทั้งหมดอัปเดตค่าผ่าน Zustand ทำให้ ข้อมูลไม่หายเมื่อเปลี่ยน Step

---

## 📝 Form Validation (React Hook Form + Zod)
✅ Validation Rules
- First Name / Last Name: ต้องไม่ว่าง (.min(1))
- Email: ต้องเป็นอีเมลที่ถูกต้อง (.email())
- Phone Number: ต้องเป็น XXX-XXX-XXXX (.regex())
```bash
// ใช้ Zod สำหรับ Validation
const formSchema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().regex(/^\d{3}-\d{3}-\d{4}$/, "Invalid phone number"),
});
```

- ไฟล์ที่มี zod แต่ติดจะอยู่ใน /get-started/temp-zod.tsx
- ไฟล์ที่ zod ใช้ นั่นคือ store ก็อยู่ใน /store/useFormStore.ts