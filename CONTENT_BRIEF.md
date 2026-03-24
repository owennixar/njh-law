# CONTENT BRIEF — Page-by-Page Structure

This file defines the section order, heading structure, and content requirements for every page. Claude Code should follow this structure exactly when generating page components and copy.

---

## Homepage (`/`)

### Section 1: Hero
- **H1**: Headline that positions the firm for its core audience (construction + real estate companies). Must include "Dallas" and communicate industry focus without being generic.
- **Subhead**: 1-2 sentences expanding on who they serve and what makes them different.
- **CTA**: "Schedule a Consultation" button
- **Visual**: Full-bleed image of Dallas skyline or construction project. Dark gradient overlay on the left side.

### Section 2: Recognition Bar
- Logos: Best Lawyers, Chambers USA, Texas Super Lawyers
- Brief text: "Attorneys recognized by [names] for over [X] consecutive years"
- This establishes credibility immediately below the fold

### Section 3: What We Do (Practice Area Overview)
- Brief intro paragraph (2-3 sentences): Who the firm serves and what industries
- 4 practice area cards in an asymmetric grid (not a row of 4 equal boxes)
- Each card: Practice area name + 2-sentence summary + "Explore [Area]" link
- Internal links to each `/practice-areas/[slug]` page

### Section 4: Why NJH (Differentiators)
- **H2**: Something like "Built for the businesses that build Dallas" (not "Why Choose Us")
- 3 differentiator blocks:
  1. Decades of focused experience (specific years, not vague)
  2. Both sides of the table (they represent GCs, subs, suppliers, AND owners — rare perspective)
  3. Business-minded approach (not just legal theory — they understand project economics)
- Each block: short headline + 2-3 sentence explanation with specific proof points

### Section 5: Attorney Preview
- Headline introducing the team
- 3 featured attorney cards (the named partners) with photos, names, titles, and direct links to bios
- Link to full team page

### Section 6: CTA Band
- Strong headline with value proposition
- Supporting line setting expectations ("Direct access to experienced partners")
- "Discuss Your Project" button
- Phone number visible

### Section 7: Footer
- Firm name, full address, phone, fax
- Navigation links to all main pages
- Copyright (CURRENT YEAR, not 2015)
- Required disclaimer: "This website is designed for general information only. The information presented should not be construed as formal legal advice or the formation of a lawyer/client relationship."

---

## About / Firm Overview (`/about`)

### Section 1: Hero
- **H1**: Firm positioning statement
- Brief intro paragraph about the firm's history and philosophy

### Section 2: Our Story
- **H2**: Origin and evolution of the firm
- How the practice was founded, what drove the partners to specialize
- Specific details: year founded, how many attorneys, what types of clients
- Emphasis on specialization (this is NOT a general practice firm)

### Section 3: Our Approach
- **H2**: How NJH works differently
- Explain the firm's methodology: proactive contract review, business-minded risk assessment, efficient dispute resolution
- Include the "both sides of the table" differentiator in more depth

### Section 4: By the Numbers
- Key stats in a visually prominent layout:
  - Years in practice (combined experience)
  - Number of attorneys
  - Practice area focus areas
  - States where they've handled matters
  - Consecutive years of Super Lawyers recognition

### Section 5: CTA Band

---

## Attorney Listing (`/attorneys`)

### Layout
- Page intro: 1-2 sentences about the team
- Grid of attorney cards (photos + name + title + practice focus + direct contact)
- Each card links to individual bio page

---

## Individual Attorney Bio (`/attorneys/[slug]`)

### Section 1: Bio Header
- Large professional headshot (offset, not centered)
- Name (H1), title, direct phone, email
- Recognition badges (Super Lawyers, Best Lawyers, Chambers)

### Section 2: Overview
- **H2**: 2-3 paragraph narrative about this attorney's practice
- Written in third person
- Must include: types of clients they serve, types of matters they handle, specific outcomes or recognitions
- Use scenario-based language: "Mike has guided contractors through multi-million-dollar lien disputes..." not "Mike handles construction litigation"

### Section 3: Practice Areas
- List of practice areas this attorney focuses on, each linking to the practice area page

### Section 4: Credentials
- **Bar Admissions** with specific courts
- **Education** with degrees and institutions
- **Professional Memberships** with sections/committees
- **Honors & Awards** with specific years

### Section 5: CTA
- "Speak with [First Name] directly" + phone number + email

---

## Practice Area Page Template (`/practice-areas/[slug]`)

**This is the most important page type for SEO + GEO. Follow this structure exactly.**

### Section 1: Hero
- **H1**: `[Practice Area] Attorneys in Dallas, Texas` (or natural variation)
- 2-3 sentence intro that includes: what this practice area covers, who it's for, and why it matters. Must contain an extractable definition block in the first 100 words.

### Section 2: What We Handle
- **H2**: Phrased as a question or action statement (e.g., "Construction disputes we resolve" not "Services")
- List of specific claim types / matter types (use H3 for each, with 2-3 sentence descriptions)
- Each item must name the specific legal mechanism or process involved
- Include at least one Texas-specific statute or code reference per item

### Section 3: Our Approach
- **H2**: How the firm handles matters in this area
- Describe the process: initial assessment → strategy development → execution → resolution
- Emphasize business-minded thinking — "we understand project timelines" or "we factor in the cost of business disruption"
- Include at least one scenario: "When a general contractor faces a $1.5M delay claim..."

### Section 4: Industries / Client Types We Serve
- **H2**: Specific to this practice area
- For construction: GCs, subs, suppliers, developers, owners, sureties, design professionals
- For real estate: developers, investors, landlords, tenants, operators
- For litigation: corporations, partnerships, shareholders, executives
- For corporate: startups, established businesses, joint ventures, franchise operators

### Section 5: FAQ Section
- **H2**: "Frequently asked questions about [practice area]"
- Minimum 5 questions (see KEYWORD_MAP.md for required questions)
- Each answer: 2-4 sentences. Direct answer first, then context.
- Must include FAQPage schema markup
- Every answer should be self-contained (extractable for AI)

### Section 6: Related Practice Areas
- **H2**: "Related legal services"
- Links to 2-3 related practice area pages with brief descriptions
- This creates internal linking for SEO authority flow

### Section 7: CTA Band
- Practice-area-specific CTA (not generic)
- "Discuss your [construction project / real estate transaction / business dispute]"

---

## Blog Post Template (`/insights/[slug]`)

### Structure
- **H1**: Question-format or how-to format preferred (matches search queries)
- **Author byline**: Attorney name + credentials + date published
- **Intro paragraph**: Direct answer to the query in the first 100 words (for GEO extraction)
- **Body**: H2 sections breaking the topic into logical parts
- **Key takeaway callout**: Boxed summary of the most important points
- **FAQ section**: 2-3 related questions with brief answers
- **CTA**: "Questions about [topic]? Schedule a consultation."
- **Author bio block**: Photo + name + brief background + link to full bio page
- **Related posts**: 2-3 links to other relevant articles

### Blog Copy Rules
- Write as the expert, not as a salesperson
- Every legal claim must cite the specific statute or case law
- Include practical next-steps the reader can take
- Always include a "when to call an attorney" section — this is the natural CTA moment
- Last updated date must be visible

---

## Contact Page (`/contact`)

### Section 1: Header
- **H1**: "Let's discuss your situation"
- Brief paragraph: what to expect when they reach out (response time, who they'll talk to)

### Section 2: Contact Form
- Fields: First name, Last name, Company name, Phone, Email, Practice area (dropdown: Construction Law, Commercial Real Estate, Business Litigation, Corporate Transactions, Other), Message
- Submit button: "Send Your Inquiry"
- Supporting text: "We respond within one business day. All inquiries are confidential."

### Section 3: Direct Contact Info
- Office address with embedded Google Map
- Main phone + fax
- Individual attorney emails with direct lines
- Office hours

### Section 4: Location Context
- Brief mention of the office location (International Plaza III, Dallas Parkway corridor)
- Parking / access notes
- "Serving businesses throughout the DFW metroplex and across Texas"
