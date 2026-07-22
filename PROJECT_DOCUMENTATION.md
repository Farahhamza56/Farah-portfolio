# PROJECT DOCUMENTATION

## 1. Project Information

### Project Name

Personal Portfolio Website

---

### Project Description

a modern, responsive personal portfolio website developed to showcase my technical skills, education, projects, certifications, and contact information.

The project was initially generated using AI-assisted development (v0) and then manually customized, tested, and deployed.

---

### Objective

The objective of this project is to build a professional online portfolio that can be shared with recruiters, companies, and clients.

The website highlights my technical background and software projects while demonstrating my ability to use AI-assisted development tools effectively.

---

### Target Audience

- Recruiters
- HR Teams
- Software Companies
- Internship Providers
- Clients

---

### Why I Chose This Project

I selected a personal portfolio because it represents my professional profile and demonstrates my technical skills.

This project also allowed me to explore AI-assisted software development by combining AI-generated code with manual customization and deployment.

---

# 2. Features

The portfolio contains the following sections:

- Home
- About Me
- Skills
- Experience
- Projects
- Education
- Certificates
- Contact Information

Additional features include:

- Responsive Design
- Smooth Navigation
- Professional UI
- GitHub Integration
- LinkedIn Integration
- Public CV Viewer
- External Project Links
- Certificate Links

---

# 3. Technologies Used

Tool	      Why did I use it
v0	          Generate the portfolio UI
ChatGPT	      Requirement analysis, prompt engineering, debugging, documentation
VS Code	      Code editing
Git	          Version Control
GitHub	      Repository Hosting
Vercel	      Deployment
Google Drive  CV Hosting
Next.js	      Frontend Framework
React	      UI Development
Tailwind CSS  Styling
TypeScript	  Type Safety
shadcn/ui     UI Components


---

# 4. AI Tools Used

## ChatGPT

Used for:

- Planning the project
- Prompt engineering
- Debugging
- Explaining errors
- Improving the generated code
- Deployment guidance
- Preparing documentation

prompts used : 
1) "هبعتلك technical task عليا عايزاك تنظمهولي ك steps امشي عليها واحدة واحدة عشان انفذه "
   result :✅ Step 1
جهزي المحتوى (CV + Projects + صور)

↓

✅ Step 2
اعملي الموقع على v0

↓

✅ Step 3
نزليه على GitHub

↓

✅ Step 4
اعملي Deploy على Vercel

↓

✅ Step 5
اعملي PROJECT_DOCUMENTATION.md

↓

✅ Step 6
اعملي README.md

↓

✅ Step 7
راجعي المشروع وسلميه

2)"عايزة prompt واضح ابعته ل v0 مع ال cv بتاعي بحيث يعملي portfolio واضح ومنظم باستخدام المعلومات واللينكات اللي في ال cv عايزة الالوان علي ازرق وعايزة ال navigation بين ال pages يكون سهل وال portfolio يكون واضح ومنظموالصفحات متنظمة والالوان تكون مريحة للعين" 
 result : I have attached my CV.

Your task is to build a premium, modern, fully responsive personal portfolio website using ONLY the information, links, projects, certificates, skills, education, and experience found in my attached CV.

IMPORTANT:
- Do not omit any information from the CV.
- Extract all GitHub, LinkedIn, Email, Portfolio, and other links directly from the CV and use them in the appropriate buttons.
- Organize all information professionally instead of simply copying the CV.
- If some information belongs in a better section, reorganize it while preserving the original content.

Design Requirements:
- Modern, clean and minimal UI.
- Professional look suitable for recruiters and software companies.
- Smooth animations and transitions.
- Excellent spacing and typography.
- Fully responsive on desktop, tablet, and mobile.
- Fast and accessible.
- Use a comfortable blue color palette with white backgrounds and soft blue accents.
- Avoid bright or saturated colors.
- The overall design should feel elegant, modern, and easy on the eyes.

Navigation:
- Sticky navigation bar.
- Smooth scrolling between sections.
- Highlight the active section while scrolling.
- Mobile-friendly navigation menu.
- Navigation should be simple, intuitive, and easy to use.

Create the following sections:

1. Hero
- Full name
- Professional title
- Short professional introduction extracted from the CV
- Professional photo (use a placeholder if none is attached)
- Buttons:
  - Download CV
  - GitHub
  - LinkedIn
  - Contact Me

2. About Me
- Professional summary from the CV
- Personal strengths

3. Technical Skills
Group the skills into categories such as:
- Programming Languages
- Frontend
- Backend
- Mobile Development
- AI & Machine Learning
- Databases
- Tools
- Other Technologies

Display each skill with attractive badges or cards.

4. Experience
Display all experiences from the CV in a clean timeline.

5. Projects
Create a beautiful card for every project found in the CV.
Each project card should include:
- Project Name
- Description
- Technologies Used
- Features
- GitHub Repository (if available)
- Live Demo (if available)

6. Education

7. Certificates

Display certificates professionally in cards or a timeline.

8. Contact

Include:
- Email
- LinkedIn
- GitHub
- Any other contact information available in the CV.

Footer:
Simple, modern footer with social icons and copyright.

Technical Requirements:
- Use Next.js (App Router)
- TypeScript
- Tailwind CSS
- Reusable components
- Clean folder structure
- Production-ready code
- Responsive design
- SEO-friendly
- Good accessibility
- Modern icons (Lucide or Heroicons)

Do not generate placeholder text if the information already exists in the attached CV.

The final result should look like a premium software engineer portfolio that could impress recruiters at top tech companies.

3)" اكتبلي prompt فيه التعديلات دي : عايزة كل اللينكات ادوس عليها تفتح فعلا عشان مش بيفتح جيت هاب ولينكد ان بتوعي وعايزة لما ادوس download cv ال cv يتحمل فعلا وهبعتله صورة ليا يزودها بالنسبة للبروجكتس عايزاه ياخد اللينكات من ال cv بالتالي لما ادوس علي اي project فيهم يفتح علي اللينك ونفس الكلام بالنسبة للشهادات ياخد اللينكات من ال cv ولما ادوس علي "اي شهادة تفتح وانا هبعتله اللينكات كلها للتسهيل

result : Please update the portfolio with the following improvements.

## General
- Keep the current design, layout, colors, and animations.
- Do not remove any existing sections.
- Only improve the functionality and content.

## Profile Photo
- I have attached a high-quality personal photo.
- Replace the current profile image with the attached one.
- Crop it professionally and keep it responsive.

## Social Links
Use the links I provide below instead of any existing links.

Requirements:
- GitHub button must open my GitHub profile.
- LinkedIn button must open my LinkedIn profile.
- Email button should open the default mail application using mailto:.
- All external links should open in a new tab.

## Download CV
- Replace the current Download CV button.
- When users click "Download CV", it should download the attached CV file directly.
- Do not redirect to another page.

## Projects Section
I will provide the GitHub/project links below.

Requirements:
- Match every project with its correct GitHub or live demo link.
- Every project card should be fully clickable.
- Clicking a project should open its corresponding repository or live demo in a new tab.
- Keep the project cards attractive with hover animations.

## Certificates Section
I will also provide certificate links.

Requirements:
- Every certificate card should open its corresponding certificate URL.
- Open certificates in a new tab.
- Keep the certificates displayed in a clean professional grid.

## Navigation
- Verify that every navigation item scrolls correctly to its section.
- Smooth scrolling should work on desktop and mobile.
- Highlight the active navigation item while scrolling.

## Responsiveness
- Ensure everything works correctly on desktop, tablet, and mobile devices.

## Accessibility
- All buttons and links must be functional.
- Add proper hover effects.
- Make sure there are no broken links.

After updating, verify that:
✓ GitHub opens correctly.
✓ LinkedIn opens correctly.
✓ Download CV downloads the attached CV.
✓ Every project opens its correct GitHub/demo link.
✓ Every certificate opens its correct certificate link.
✓ All links open in a new tab except the Download CV button.  

و زودت علي ال prompt الجزء ده : cv:(that i want to attach to be downloaded on clickind "Download CV button ") :
profile photo :    وبعت الصورة         
github link : https://github.com/Farahhamza56  
linkedin link :www.linkedin.com/in/farah-hamza  
 projects :                                                   
    
    Movie Discovery App :GitHub - nhahub/NHA-277 · GitHub  

    Regression from Scratch :https://colab.research.google.com/drive/1asLdfXweL6pLtQU3BnH23scsWYppTHqx?usp=sharing          

     Data Mining Study: https://colab.research.google.com/drive/1IpfUvEuoyWpSzoOcm6aG0Ln8r81KfW4x                                                                                 
     
     Machine Learning Pipeline:https://colab.research.google.com/drive/
     1hHYXfxymb5h9Tg3qPBw-uC-nZtNy4pYO 

    Online Clinic System — Systems Analysis & Design :https://jjpcy574662h.jp.larksuite.com/docx/LjODdctO9ob7aGxR9wCjv4QVpYf?from=from_copylink    

    Certificates:

    Cloud Foundations : https://drive.google.com/file/d/1y5azMGx-JEnTR9I_bQmQQ9aq6uq7UBLm/view?usp=sharing      

     Android Mobile App Development :     
    https://drive.google.com/drive/folders/1GUUjh28uWu4XLZd0H9EOPtM42KJnLTyE?usp=sharing   

    Object-Oriented Programming :https://drive.google.com/file/d/1N3FrmmMaEIjU2NMYAQdiUKmKBGYniGqY/view?usp=sharing            

     Java, HTML & CSS Basics :https://drive.google.com/file/d/1SgyeEz9p4lvu6dJnmcNe9q4gVo9T3y-R/view?usp=sharing                                
     
## Responsiveness & Cross-Platform Compatibility

Make the portfolio fully responsive and optimized for all screen sizes.

Requirements:

- The website must work perfectly on desktop, laptop, tablet, and mobile devices.

- Ensure compatibility with all major browsers (Chrome, Edge, Firefox, Safari).

- The layout should automatically adapt to different screen sizes without breaking.

- Text, images, buttons, cards, and navigation should remain properly aligned on every device.

- The mobile menu should function correctly.

- All buttons, links, and animations should work consistently across devices.

- Optimize performance so the website loads quickly on both desktop and mobile.                                                   
 Before finishing, thoroughly test the portfolio and make sure:

✓ It works perfectly on desktop, laptop, tablet, and mobile.

✓ It is fully responsive.

✓ There are no layout issues or overflow problems.

✓ All buttons and links work correctly.

✓ Navigation works smoothly.

✓ The portfolio is production-ready and can be deployed without additional fixes.        
and please remove this sentence at the top of first page   "Open to internships & bootcamps"             and Instead of using only a mailto link, implement a real contact form using EmailJS.

Requirements:

- Integrate EmailJS.

- When the user submits the form, the email should be sent directly to my Gmail inbox.

- Show loading, success, and error messages.

- Keep the implementation secure and production-ready.

- Add comments explaining where I should place my EmailJS Service ID, Template ID, and Public Key.


4)" اكتبلي prompt يشيل الجزء ده خالص وحتة الايميل متبقاش بتودي علي حاجة يكون box مكتوب فيه الايميل وخلاص هو وbox رقم التليفون كمان وكمان عايزة ال portfolio يكون more coloreful"

"اخر تعديل خلي box ال email , phone يكونوا static boxes مش بيودوا علي حاجة وحتة ال downlad cv دي لسة بايظة ف يخليها show cv بس وهبعتله اللينك يفتح علي ال cv علي طول"

result :Please make the following updates to my portfolio.  Display the following as beautiful cards: - Email Address - Phone Number   and don’t make them navigate to another page Requirements: - Email and Phone should be static text only. - Do NOT make the Email or Phone clickable. - Do NOT use mailto or tel links. - GitHub and LinkedIn should remain clickable and open in a new tab. - Use modern icons for each card. - Keep the cards clean, elegant, and consistent with the portfolio design. ## 2. ViewCV Button Remove the current "Download CV" functionality completely. The current button shows an "Unauthorized" error. Replace it with a new button named: **View CV** I will provide a public CV link. Requirements: - Clicking the button should simply open the provided CV link in a new browser tab. - Do NOT download the file. - Do NOT use protected URLs. - Do NOT use authentication. - The button should always work after deployment. 

بعد كدة كان في مشكلة في View CV button و دي كانت اخر خطوة وlimits v0 خلصت 
دخلت بنفسي علي code editor دورت علي الجزء اللي كانت عامل مشكلة لينك الcv مكانش متوصل صح وبعدين عدلت ال code manually وعملت refresh والwebsite  اشتغل تمام 


5) " دلوقتي محتاجة اعمل README.md , PROJECT_DOCUMENTATION.md فيهم كل حاجة مطلوبة في ال pdf ال technical task اعملي ال structure والبداية وانا هكمل عليه بكل ال prompts اللي بعتهالك "
 result :  الخطوة 1: افتحي ملف README.md

في VS Code هتلاقي غالبًا ملف اسمه:

README.md

لو موجود افتحيه.

لو مش موجود:

كليك يمين على اسم المشروع
New File
سميه:
README.md
الخطوة 2: امسحي أي محتوى موجود

وحطي المحتوى ده:

# Personal Portfolio Website

A modern and responsive personal portfolio built with Next.js and React to showcase my projects, skills, education, certificates, and professional profile.

## Live Demo

https://farah-portfolio-delta.vercel.app/

## GitHub Repository

https://github.com/Farahhamza56/Farah-portfolio

## Features

- Responsive design
- Modern UI
- About section
- Skills section
- Experience section
- Projects section
- Education section
- Certificates section
- Contact information
- External links for GitHub, LinkedIn and CV

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui

## Run Locally

```bash
npm install
npm run dev
```

Then open:

```
http://localhost:3000
```

## Deployment

This project is deployed using Vercel.

## Author

Farah Hamza
الخطوة 3

اعملي Save.

الخطوة 4

ارجعي للترمينال واكتبي:

git add .

بعدها

git commit -m "Add README"

بعدها

git push
الخطوة 5

ادخلي GitHub.

هتلاقي الـ README ظهر تحت الملفات مباشرة.



بعد كده

هنعمل

PROJECT_DOCUMENTATION.md
وده غالبًا أهم ملف في التاسك، لأنه هيشرح:

فكرة المشروع.
الأدوات المستخدمة.
إزاي بنيتيه.
إزاي تشغليه.
وإيه التحديات اللي واجهتك


اعملي ملف جديد اسمه:

PROJECT_DOCUMENTATION.md

وحطي فيه المحتوى ده:
وكتبلي المحتوي بتاع الفايل ده كله اللي بالانجلش اي حاجة تانية متوضحة بالتفصيل انا بنفسي اللي كتبتها زيادة 

بعد ما تعملي الملف

اعملي:

git add .
git commit -m "Add project documentation"
git push



للتوضيح :
 وانا بعمل deploy حصلت مشكلة ربط بين github و vercel سألت chatgpt وحليتها

---

## v0

Used to:

- Generate the initial portfolio layout
- Create reusable UI components
- Generate the first version of the project

The generated project was then manually customized to match my personal information and project requirements.

كل ال prompts اللي كتبتها ل V0 وضحتها فوق 

---

# 5. Project Architecture

```
Farah-portfolio
│
├── app
│   ├── layout.tsx
│   └── page.tsx
│
├── components
│   ├── navbar.tsx
│   ├── hero.tsx
│   ├── about.tsx
│   ├── skills.tsx
│   ├── projects.tsx
│   ├── experience.tsx
│   ├── education.tsx
│   ├── certificates.tsx
│   └── contact.tsx
│
├── lib
│
├── public
│
├── README.md
├── PROJECT_DOCUMENTATION.md
└── package.json
```

---

# 6. Development Process

## Step 1

Read and analyzed the assignment requirements.

---

## Step 2

Selected a Personal Portfolio as the project idea.

---

## Step 3

Prepared a detailed prompt using my CV.

---

## Step 4

Generated the initial website using v0.

---

## Step 5

Customized the generated code.

The following modifications were made:

- Updated personal information.
- Added my profile image.
- Added GitHub.
- Added LinkedIn.
- Added project links.
- Added certificate links.
- Added CV link.
- Updated colors.
- Improved responsiveness.
- Simplified the contact section.

---

## Step 6

Tested the website locally using:

```bash
npm install
npm run dev
```

---

## Step 7

Initialized Git.

Connected the project to GitHub.

Uploaded the repository.

---

## Step 8

Deployed the website using Vercel.

---

## Step 9

Verified that all external links work correctly.

---

# 7. Challenges & Solutions

## Challenge 1

The "View CV" button pointed to a placeholder Google Drive URL.

### Solution

Replaced the placeholder with my public Google Drive CV link.

---

## Challenge 2

GitHub repository was not visible in Vercel.

### Solution

Installed the Vercel GitHub integration and imported the repository.

---

# 8. AI Prompt Documentation

## Prompt 1

### Tool

ChatGPT

### Goal

Generate a detailed prompt for v0.

### Result

Created a complete prompt describing the required portfolio.

---

## Prompt 3

### Tool

v0

### Goal

Generate the initial portfolio website.

### Result

Generated a complete Next.js project.

---

## Prompt 4

### Tool

ChatGPT

### Goal

Improve the portfolio design.

### Result

Suggested UI improvements, colors, navigation, and responsive layout.

---

## Prompt 5

### Tool

ChatGPT

### Goal

Fix the CV button.

### Result

Located the placeholder Google Drive URL and replaced it with the correct public link.

---

## Prompt 6

### Tool

ChatGPT

### Goal

Prepare project documentation.

### Result

Generated README.md and PROJECT_DOCUMENTATION.md.

---

# 9. How to Run the Project

Clone the repository:

```bash
git clone https://github.com/Farahhamza56/Farah-portfolio.git
```

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

# 10. Deployment

GitHub Repository

https://github.com/Farahhamza56/Farah-portfolio

---

Live Website

https://farah-portfolio-delta.vercel.app/

---

Deployment Steps

1. Push source code to GitHub.
2. Import the repository into Vercel.
3. Deploy the project.
4. Verify all website functionality.

---

# 11. Future Improvements

Possible future enhancements include:

- Contact form with backend support
- Dark mode
- Visitor analytics
- Blog section
- Project filtering
- Search functionality
- Multi-language support

---

# 12. Author

Farah Hamza

Computer & Data Science Student

Alexandria University

GitHub

https://github.com/Farahhamza56

Portfolio

https://farah-portfolio-delta.vercel.app/