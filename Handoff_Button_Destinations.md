# TagMyCredit concept 4: where every button and link goes

*For the developers porting `concept-4-gulf-merged.html` to the live Next.js site. The **Today** column is how the concept page behaves. **Production needs** lists what the client still has to decide; nothing in that column is a decision already made.*

## Main calls to action
| Button | Location | Today (concept) | Production needs |
|---|---|---|---|
| **Get TMC-ID** | Header | Jumps to the sign-up form (`#join`) | Same jump, or the real registration page |
| **Get your TMC-ID** | Hero | Jumps to `#join` | Same as above |
| **See how it works** | Hero | Jumps to "How it works" (`#how`) | Keep |
| **Get your TMC-ID** (submit) | Sign-up form | Doesn't submit; shows "Concept only: the form isn't connected." | **Decide:** backend endpoint, success screen, error states, confirmation email |
| **Get your TMC-ID** | Final CTA | Jumps to `#join` | Same as the header button |
| **Schedule a Demo** | Final CTA | **Inert by request:** a button with no link and a not-allowed cursor; it no longer jumps to the sign-up form | **Decide:** booking tool (e.g. Calendly), a demo-request form, or remove it |

## Header quick links
How it works → `#how` · Check a buyer → `#check` · Opportunity → `#opportunity` · FAQ → `#faq`. All work as they should; keep them.

## Footer links that are placeholders
| Link | Today | Production needs |
|---|---|---|
| Features | `#how` | OK, or a features page |
| Pricing | `#faq` | **Decide:** pricing page, or keep pointing to the FAQ "What does it cost?" |
| Score Engine | `#vault` | OK |
| Supply Chain | `#chain` | OK |
| Contact | `#join` (the sign-up form) | **Decide:** a contact page or email address. It currently leads to sign-up, which is the same problem "Schedule a Demo" had |
| Help Center | `#faq` | OK, or a help site |
| API, About, Careers, Partners, Documentation, API Reference, Blog | `#top` (go nowhere) | **Decide:** real pages, or hide them until they exist |
| Privacy, Terms, GDPR, Security, Privacy Policy, Terms & Conditions | `#top` (go nowhere) | **Required before launch:** real legal pages, especially as the form collects work emails |

## Interactive controls (work in the concept, keep as built)
- **Check a buyer:** 5 example buyers that you click or switch with the arrow keys.
- **Supply-chain map:**
  - Simulate and Reset buttons.
  - The "N defaults detected" button with its company chips.
  - Every company box works like this: hover or focus previews it, click or tap pins it, click again to release.
- **The opportunity:** 3 tabs that switch on click or with the arrow keys.
- **Trust Vault:** Score / Aging / Alerts tabs.
- **TMC-ID anatomy:** 6 segment buttons.
- **Hero background:** a pause/play button, top-right of the hero, hidden for reduced motion and on phones.

## Not part of production
The blue "Explain this page" overlay (`explain.js` / `explain.css`) is a review tool for these concepts. Don't port it.
