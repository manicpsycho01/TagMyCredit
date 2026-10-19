## Recommendation

**Use Gulf as the visual foundation, Ledger for explaining the transaction, and Signal for exploring network risk.** Don’t import every interaction: the cascade teaches something; the Without/With toggle makes comparison harder.

Reviewed all four pages, their annotation JSON, and `explain.js`/`explain.css`. No files changed. This is a source-based review: browser policy blocked local-page rendering, and live-site retrieval failed.

## Component picks and final order

| Order / section | Source | Recommendation and reason |
|---|---|---|
| Navigation | Gulf | Keep its branding; restore usable mobile navigation and real destinations. |
| 1. Hero | **Gulf + Ledger** | Gulf headline, subline and teal backdrop; Ledger credit-line document as the primary visual. |
| 2. How it works | **Ledger** | Fields → OTP → score examples explain the actions better than Gulf’s text-only strip. |
| 3. Who it’s for | Gulf | Strong supplier-first hierarchy; buyers receive a clear secondary benefit. |
| 4. Check a buyer | Gulf | Keep the interactive score, exposure, payment and alert demonstration. |
| 5. Privacy | Gulf | Move immediately after the demo to answer the obvious data-sharing objection. |
| 6. The Gap | Gulf + Original content | Three visible story frames; preserve every original subtopic. |
| 7. Invisible Market | Gulf + Original content | Clear tracked/untracked comparison and visible explanatory list. |
| 8. Tag / Score / Protect | Gulf + Original content | Keep Fatima’s full story and flow; the hero preview must not replace this section. |
| 9. Supply-chain intelligence | **Signal + Gulf** | Signal graph for relationships; enhanced Gulf list as an equivalent mobile/accessibility view. |
| 10. Market / Precedent / Moat | Gulf | Compact regional band; retain every figure and claim with provenance/context. |
| 11. Paradigm Shift | Gulf / Original | Simultaneous comparison; Original-style stacked pairs on mobile. Reject Signal’s toggle. |
| 12. Trust Vault | **Signal** | Working Score/Aging/Alerts tabs and persistent buyer table outperform Gulf’s decorative tabs. |
| 13. Platform | Gulf + Original content | Numbered services, all six categories, and the 28-service claim. |
| 14. Your Identity | Gulf | Retain the full interactive ID anatomy as a distinct section before registration. |
| 15. Signup | Gulf | Keep all fields and benefits; connect to the actual approved conversion flow. |
| 16. FAQ | Gulf + verified Original answers | Native disclosures; concept answers are drafts, not recovered originals. |
| 17. Final CTA; footer | Gulf + Original inventory | Preserve both actions and every footer group. |

**Hero:** combine the ideas, not two full cards. Ledger’s document explains what the supplier does; Gulf’s ID card primarily explains registration. Add a compact company-ID reference to the document, with clearly identified ownership; retain full ID anatomy below.

**Map ranking:** Signal best explains dependencies; Gulf best retains readable node detail; Ledger is compact but drops amounts/delays; Original’s supplied “map” is essentially tier rows. Signal needs correction before reuse: its cascade applies preset outcomes by tier, not a calculated propagation model.

## Adaptation notes

- **Shared tokens:** map borrowed components to Gulf’s `ground/surface/ink/line`, deep teal and saffron. Keep risk colors separate from brand accents. Create accessible text, status and focus tokens for both themes.
- **Typography:** Schibsted Grotesk headings, Figtree body, monospace only for IDs/financial values; tabular numerals. Replace Ledger’s dense uppercase microcopy with readable labels.
- **Ledger hero/steps:** use Gulf borders, radii and surfaces; keep the verification stamp restrained. Stack examples vertically on phones. Label them illustrations, not editable fields. Do not extend “3-minute registration” into a guaranteed complete-workflow duration.
- **Signal map:** replace black/orange styling; retain tap, keyboard inspection and reset. Offer all relationships and values in the alternative list. Reduced motion should show the completed scenario immediately, with a concise textual explanation.
- **Signal Vault:** retain tab semantics and keyboard support; identify the scored buyer and mark added aging/alert data as illustrative.
- **Arabic/RTL throughout:** use logical spacing/borders, reviewed Arabic copy and appropriate line-height. Isolate IDs/currencies as LTR; mirror directional arrows where meaningful, not score scales. Arabic slogans alone do not constitute localization.

## Gulf issues requiring attention

- **Content fidelity:** Gulf Concrete moves from Tier 3 in [Original, ≈222](C:/Users/DivyanshChhablani/Downloads/TagMyCredit-Concepts/original.html:222) to Tier 2 in [Gulf, ≈752](C:/Users/DivyanshChhablani/Downloads/TagMyCredit-Concepts/concept-3-gulf.html:752). Preserved totals conceal changed meaning. Original also contains placeholder panels and empty FAQ answers: a live-content inventory is essential.
- **PoC credibility:** [≈728–846](C:/Users/DivyanshChhablani/Downloads/TagMyCredit-Concepts/concept-3-gulf.html:728) combines “real,” “Live,” named-company delays and unqualified traction figures. Preserve required numbers, but prominently distinguish examples, targets and evidenced results. Clarify whose permissions permit named relationship views.
- **Copy guarantees:** [≈501–520](C:/Users/DivyanshChhablani/Downloads/TagMyCredit-Concepts/concept-3-gulf.html:501) juxtaposes tax/registration fragments with “cannot be reversed,” and claims OTP means nobody can invent debt. Neither guarantee follows from the illustrated mechanism.
- **ID confusion:** [≈712](C:/Users/DivyanshChhablani/Downloads/TagMyCredit-Concepts/concept-3-gulf.html:712) labels `TCL-AE-0847291` “TMC-ID.” Distinguish company and credit-line identifiers; put definitions in customer-facing copy.
- **Accessibility/mobile:** [≈93](C:/Users/DivyanshChhablani/Downloads/TagMyCredit-Concepts/concept-3-gulf.html:93) hides navigation without replacement. Declared colors yield approximately **3.33:1** for FAIR badges and **1.71:1** for the dark-theme comparison heading ([≈323](C:/Users/DivyanshChhablani/Downloads/TagMyCredit-Concepts/concept-3-gulf.html:323)).
- **False affordances:** [≈846](C:/Users/DivyanshChhablani/Downloads/TagMyCredit-Concepts/concept-3-gulf.html:846) has decorative tabs; [≈958 onward](C:/Users/DivyanshChhablani/Downloads/TagMyCredit-Concepts/concept-3-gulf.html:958) reveals disconnected signup only after submission. Demo/Login/legal destinations also need correction.

## Effort and top risks

**9–12 developer-days:** 2 for inventory/tokens, 3–4 for component porting, 2–3 for interactions, 2–3 for responsive/accessibility QA. Assumes existing backend integration; excludes scoring/OTP development and full Arabic translation.

1. **Content loss:** incomplete originals and inaccurate preservation notes.
2. **Credibility:** sample financial data and targets appearing operational.
3. **Implementation complexity:** keeping graph/list states, themes, keyboard access and mobile behavior equivalent.