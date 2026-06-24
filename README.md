# Vaxo Janiashvili — Portfolio

React Native Developer & Full-Stack Web Engineer-ის პერსონალური პორთფოლიო.
აგებულია **Next.js 14**, **TypeScript**, **Tailwind CSS**, **Framer Motion** და **Zustand**-ით.

- 🎨 Light / Dark თემა (ინახება localStorage-ში)
- 📱 სრულად რესფონსივი (mobile-first)
- 📧 საკონტაქტო ფორმა → ემაილი **Resend**-ით
- 🤖 ჩათბოტი (BotResponses)
- 🔍 სრული ტექნიკური SEO (JSON-LD, sitemap, robots, Open Graph)

---

## 1. ლოკალური გაშვება

```bash
npm install
npm run dev
```

საიტი გაიხსნება → http://localhost:3000

სხვა ბრძანებები:

```bash
npm run build   # production build
npm run start   # production-ის ლოკალურად გაშვება (build-ის შემდეგ)
npm run lint    # ESLint
```

---

## 2. ემაილის გამართვა (Resend)

საკონტაქტო ფორმა ემაილს აგზავნის [Resend](https://resend.com)-ით.

1. დარეგისტრირდი https://resend.com-ზე (უფასო) — **გამოიყენე `vaxojaniashvili186@gmail.com`**
2. აიღე API key → https://resend.com/api-keys → **Create API Key** (იწყება `re_`-ით)
3. პროექტის ფესვში შექმენი `.env.local` (ნიმუში: `.env.example`):

```env
RESEND_API_KEY=re_შენი_key
MY_EMAIL=vaxojaniashvili186@gmail.com
EMAIL_FROM=
```

4. გადატვირთე dev server (`Ctrl+C` → `npm run dev`) — env ცვლადები მხოლოდ გაშვებისას იტვირთება.

> **შენიშვნა:** სანამ Resend-ში საკუთარ დომენს არ დაადასტურებ, ემაილი მხოლოდ იმ მისამართზე იგზავნება, რომლითაც დარეგისტრირდი. დომენის დადასტურების შემდეგ შეავსე `EMAIL_FROM`, მაგ:
> `EMAIL_FROM=Portfolio <contact@vaxojaniashvili.ge>`

`.env.local` **არ აიტვირთება git-ში** (`.gitignore`-შია) — key უსაფრთხოა.

---

## 3. Deploy (Vercel)

1. ატვირთე კოდი GitHub-ზე.
2. https://vercel.com → **Import Project** → აირჩიე repo → **Deploy**.
3. **Settings → Environment Variables** დაამატე:

   | Name | Value |
   |---|---|
   | `RESEND_API_KEY` | `re_...` |
   | `MY_EMAIL` | `vaxojaniashvili186@gmail.com` |
   | `NEXT_PUBLIC_SITE_URL` | `https://შენი-პროექტი.vercel.app` |

4. **Redeploy** ცვლადების დამატების შემდეგ.

`NEXT_PUBLIC_SITE_URL` მართავს canonical-ს, sitemap-ს, JSON-LD-სა და Open Graph-ს
(იხ. `src/app/siteConfig.ts`) — კოდის შეცვლა საჭირო არ არის.

---

## 4. SEO — Google-ში პირველ ადგილზე ასასვლელად

### ✅ უკვე გაკეთებულია კოდში
- `Person` **JSON-LD** structured data (სახელი, ფოტო, პროფესია, ლოკაცია, სოც-ქსელები)
- `sitemap.xml` + `robots.txt` (ავტომატური)
- canonical URL, `index/follow`, `max-image-preview:large`
- Open Graph + Twitter card (ფოტოთი)
- keywords (ინგ. + ქართ.) + descriptive `alt` ტეგები

### 👉 რაც შენ უნდა გააკეთო (აუცილებელია)

1. **Google Search Console** — https://search.google.com/search-console
   - დაამატე საიტის URL → დაადასტურე ფლობა
   - **Sitemaps** → ჩასვი `sitemap.xml` → Submit
   - **URL Inspection** → მთავარი URL → **Request Indexing**

2. **Backlinks შენი სახელით** (ყველაზე ძლიერი ბერკეტი):
   - LinkedIn → Contact info → Website
   - GitHub profile → Website + bio
   - YouTube → About → ლინკი
   - Facebook / Instagram → bio
   - **ყველგან ერთი და იგივე ფოტო** გამოიყენე → Google Images-ში გამოჩნდება

3. **Consistency** — ყველგან ზუსტად „Vaxo Janiashvili".

### რეალისტური მოლოდინი
| საძიებო ფრაზა | შედეგი |
|---|---|
| `vaxo janiashvili` | ✅ #1 მიღწევადია (~1–3 კვირა ინდექსაციის შემდეგ) |
| `janiashvili` / `vaxo` | 🟡 შესაძლებელია, დრო და backlinks სჭირდება |
| `react native developer` (გლობალური) | ❌ არარეალისტური (გიგანტ საიტებთან კონკურენცია) |
| `react native developer georgia / tbilisi` | ✅ რეგიონულად მიღწევადია |

---

## 5. მომავალში: .ge დომენზე გადასვლა

1. იყიდე დომენი (მაგ. `vaxojaniashvili.ge`).
2. Vercel → **Settings → Domains** → დაამატე დომენი (მიჰყევი DNS ინსტრუქციას).
3. **Environment Variables** → `NEXT_PUBLIC_SITE_URL = https://vaxojaniashvili.ge`
4. **Redeploy.**
5. Google Search Console-ში დაამატე ახალი დომენი და თავიდან გააგზავნე sitemap.

sitemap, canonical, JSON-LD და OG ავტომატურად განახლდება. ✅

---

## სტრუქტურა

```
src/app/
├── layout.tsx           # metadata, SEO, JSON-LD
├── siteConfig.ts        # SITE_URL (env-ით იმართება)
├── sitemap.ts / robots.ts
├── page.tsx             # მთავარი (splash + სექციების შეკრება)
├── globals.css
├── pages/               # home / about / projects / contact / footer / success
├── store/               # useThemeStore (Zustand)
└── common/components/   # atoms / molecules / organisms (Header, Chatbot)
pages/api/sendEmail.ts   # Resend email endpoint
```
