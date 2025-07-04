
# Dinesh Kumar Verma - Personal Portfolio Website

This is the personal portfolio website of **Dinesh Kumar Verma**, a full-stack developer with expertise in React, Node.js, PHP, Laravel, MongoDB, MySQL, and more. This website showcases skills, experience, projects, and contact information in a clean, responsive format.

## 🚀 Tech Stack

- **Frontend:** React, React Router
- **Styling:** Custom CSS
- **Routing:** React Router DOM v6
- **CI/CD:** GitHub Actions

## 📁 Project Structure

\`\`\`
src/
│
├── components/
│   └── Layout.jsx         # Page layout with header/footer
│
├── pages/
│   ├── Home.jsx           # Home page
│   ├── Experience.jsx     # Work experience
│   ├── Projects.jsx       # Project portfolio
│   └── Contact.jsx        # Contact information
│
├── assets/
│   └── css/
│       └── Layout.css     # Layout and page styling
│
├── App.jsx                # Main App component
└── main.jsx               # React root rendering
\`\`\`

## 🌐 Live Demo

> Coming soon – will be deployed using GitHub Pages with GitHub Actions!

## ⚙️ Setup & Installation

1. **Clone the repository:**
   \`\`\`bash
   git clone https://github.com/dular88/portfolio.git
   cd portfolio
   \`\`\`

2. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

3. **Run locally:**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Build for production:**
   \`\`\`bash
   npm run build
   \`\`\`

## 🚀 Deployment (GitHub Pages with GitHub Actions)

### \`.github/workflows/deploy.yml\`

\`\`\`yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install Dependencies
        run: npm install

      - name: Build Project
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
\`\`\`

> If using **Vite**, make sure to add the following in your \`vite.config.js\`:
\`\`\`js
export default defineConfig({
  base: '/portfolio/', // set to your GitHub repo name if deploying under user.github.io/repo
});
\`\`\`

## 📞 Contact

- 📧 Email: [dular88@gmail.com](mailto:dular88@gmail.com)
- 📱 Phone: +91-7509016504
- 🌐 GitHub: [github.com/dular88](https://github.com/dular88)
- 🔗 LinkedIn: [Dinesh Kumar Verma](https://linkedin.com/in/dinesh-kumar-verma-30b1a619)
- 📺 YouTube: [@codingdunia](https://youtube.com/@codingdunia)

---

> Made with ❤️ by **Dinesh Kumar Verma**
