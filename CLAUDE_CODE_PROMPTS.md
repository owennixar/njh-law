# CLAUDE CODE PROMPT GUIDE — How to Generate Copy

This file contains the exact prompts you should use in Claude Code at each stage. Copy-paste and adapt as needed.

---

## STEP 1: Project Setup

Run these in your terminal first:

```bash
npx create-next-app@latest njh-law --typescript --tailwind --app --src-dir
cd njh-law
npm install framer-motion
```

Then copy `CLAUDE.md` into the project root and `docs/` folder into the project. Claude Code reads CLAUDE.md automatically on every prompt.

---

## STEP 2: Generate Copy Per Page

### Pattern: Always give Claude Code CONTEXT + CONSTRAINTS + FORMAT

Bad prompt (will produce generic copy):
> "Write the homepage copy for a law firm website"

Good prompt:
> "Read docs/COPY_SYSTEM.md, docs/KEYWORD_MAP.md, and docs/CONTENT_BRIEF.md. Then write the homepage copy following the exact section structure in CONTENT_BRIEF.md. The primary keyword is 'Dallas business law firm.' The firm is Nixon Jach Hubbard — 5 attorneys in Dallas specializing in construction law, commercial real estate, business litigation, and corporate transactions. Named partners Mike Nixon, Tony Jach, and Curtis Hubbard have a combined 80+ years of experience. Mike Nixon has been named a Texas Super Lawyer for Construction Litigation every year since 2010 and is Chambers USA-ranked. Write every section in order. Follow all readability, SEO, GEO, and expertise rules from COPY_SYSTEM.md exactly."

---

## STEP 3: Construction Law Page (Most Important for SEO)

Prompt:
> "Read all docs in the docs/ folder. Write the full copy for the Construction Law practice area page at /practice-areas/construction-law. Follow the Practice Area Page Template in CONTENT_BRIEF.md section by section. Primary keyword: 'Dallas construction attorney.' The firm represents general contractors, subcontractors, suppliers, sureties, developers, owners, and design professionals. Key experience areas: contract negotiation, mechanic's lien claims (Chapter 53 Texas Property Code), construction defect claims, delay/acceleration/impact claims, bond claims (Miller Act for federal, Chapter 53 for private), insurance coverage disputes, and dispute resolution (mediation, arbitration, litigation). The attorneys are experienced in Texas state courts, federal courts (Northern District of Texas), and AAA arbitration. Include all 7 FAQ questions from KEYWORD_MAP.md. Every answer must cite the specific Texas statute or legal mechanism. Include at least 3 extractable definition/process blocks optimized for GEO. Write at the 8-10 grade readability level while maintaining expertise signals."

---

## STEP 4: Review + Refine Prompts

After Claude Code generates a page, use these follow-up prompts:

### Readability Check
> "Analyze the copy you just wrote for readability. Flag any sentence over 25 words. Flag any paragraph over 5 lines. Flag any use of banned words from COPY_SYSTEM.md. Flag any sentence in passive voice. Rewrite flagged items."

### SEO Check
> "Check the copy against KEYWORD_MAP.md. Verify: (1) primary keyword appears in H1, first 100 words, and at least one H2, (2) secondary keywords appear naturally in body copy, (3) 'Dallas' or 'Texas' or 'DFW' appears at least 3 times, (4) there are at least 3 internal links to other pages on the site. Fix any gaps."

### GEO Check
> "Check the copy for GEO optimization. Verify: (1) there is at least one 40-60 word extractable definition block per major section, (2) the FAQ section has at least 5 questions phrased in natural language, (3) every FAQ answer starts with a direct answer before adding context, (4) specific numbers, statutes, and timeframes are included in at least 80% of answers. Fix any gaps."

### Expertise Check
> "Review the copy for expertise signals. Verify: (1) at least 3 specific Texas statutes or code sections are referenced, (2) industry-specific terminology is used naturally (not in a glossary), (3) at least 2 scenario-based descriptions are included ('When a contractor faces...'), (4) the copy acknowledges trade-offs or complexity at least once (not everything is 'we always win'). Flag and fix any sections that read as generic law firm copy."

---

## STEP 5: Meta Content Generation

After page copy is finalized, generate meta content:

> "For the Construction Law page, generate: (1) a page title following the pattern from COPY_SYSTEM.md, max 60 characters, (2) a meta description between 150-160 characters including the primary keyword and Dallas, (3) Open Graph title and description, (4) 5 alt text descriptions for images that would appear on this page (construction site, courtroom, contract signing, Dallas skyline, attorney meeting), each under 125 characters and including relevant keywords naturally."

---

## STEP 6: Schema Markup Generation

> "Generate the JSON-LD structured data for the Construction Law page. Include: (1) LegalService schema for the firm with address, phone, geo coordinates, practice areas, (2) Service schema for Construction Law specifically, (3) FAQPage schema for the FAQ section with all questions and answers, (4) BreadcrumbList schema showing Home > Practice Areas > Construction Law. Output as a single script tag I can place in the page head."

---

## STEP 7: Blog Post Generation

> "Read all docs in docs/. Write a blog post titled 'How to File a Mechanic's Lien in Texas: A Step-by-Step Guide.' Author: Michael S. Nixon. Primary keyword: 'mechanic's lien Texas.' Follow the Blog Post Template in CONTENT_BRIEF.md. This should be a comprehensive, authoritative guide that covers: (1) who can file a mechanic's lien in Texas, (2) the notice requirements under Chapter 53, (3) step-by-step filing process with specific deadlines, (4) common mistakes that invalidate liens, (5) when and how to enforce the lien. Include 3 FAQ questions at the end. Write at grade 8-10 readability while maintaining legal precision. This post should be good enough that if someone asks ChatGPT 'how to file a mechanic's lien in Texas,' the AI would cite this page as a source."

---

## STEP 8: Component Integration

Once all copy is written and reviewed, integrate into Next.js components:

> "Create the page component for /practice-areas/construction-law using the finalized copy. Use the section structure from CONTENT_BRIEF.md. Each section should be a separate React component in src/components/practice-areas/. Follow the design rules from CLAUDE.md — asymmetric layouts, serif headings, generous whitespace. Add Framer Motion scroll-triggered animations (20-30px translateY, 0.4s ease) to each section. Include the JSON-LD structured data in the page head. Include proper Next.js metadata export with title, description, and OpenGraph tags."

---

## TIPS FOR BEST RESULTS

1. **Always reference the docs files** — Start every major prompt with "Read docs/COPY_SYSTEM.md and docs/KEYWORD_MAP.md." Claude Code will actually read them and follow the rules.

2. **One page at a time** — Don't ask Claude Code to write all pages in one prompt. Do one page, review it, refine it, then move to the next.

3. **Use the review prompts** — The readability, SEO, GEO, and expertise check prompts catch 90% of issues. Run all four on every page.

4. **Be specific about what you know** — The more real facts you feed (attorney names, years of experience, specific case types, recognitions), the more expert the output sounds. Generic inputs produce generic outputs.

5. **Don't accept the first draft** — The system is designed for iteration. First draft → readability check → SEO check → GEO check → expertise check → final version. This loop is what produces copy that scores high on all four dimensions.

6. **Test your GEO** — After the site is live, go to ChatGPT and Perplexity and search for "Dallas construction attorney" and "how to file a mechanic's lien in Texas." See if NJH shows up. If not, refine the extractable blocks and FAQ answers.
