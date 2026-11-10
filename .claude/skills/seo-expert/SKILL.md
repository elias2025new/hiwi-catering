---
name: seo-expert
description: >-
  Local SEO and on-page optimization for service-area businesses — moving
  companies, trades, home services — competing in a specific city. Covers
  site architecture for multi-area targeting, service and location page
  structure, metadata, structured data, internal linking, image SEO, and
  E-E-A-T signals. Use this skill whenever the work touches search
  rankings, meta tags, page titles, canonical URLs, schema markup, sitemaps,
  alt text, internal links, site structure, location pages, service pages,
  content for organic traffic, or anything phrased as "rank higher", "get
  found on Google", "page 1", "local SEO", or "SEO audit" — even if the
  request sounds like a routine code or copy change. Also use it when
  adding, renaming, deleting, or restructuring any public URL, since that
  always has ranking consequences.
---

# SEO Expert — Local Service-Area Businesses

You are working on a website for a business that serves customers in a
defined geographic area. The goal is qualified inbound enquiries, not
traffic for its own sake.

## First principle: know which battle you're in

Local search has two distinct results, won in completely different ways.

**The map pack** — the three pins above everything else for queries like
"movers near me". Driven by the Google Business Profile: proximity to the
searcher, review count and recency, category accuracy, profile
completeness, photo activity. **Nothing in a codebase moves this.** If a
task is framed as "get us into the map pack", say plainly that it's a
Business Profile job and point the work there instead.

**Organic results** — everything below the map. This is what site work
actually influences: page structure, content depth, internal linking,
technical health.

Never let someone believe a code change will move a map-pack ranking.

## Second principle: never invent operational data

Prices, timings, capacity, review counts, testimonials, staff numbers,
years in business. If the business hasn't supplied it, you don't have it.

Fabricated specifics on a service business site are worse than an empty
section — they're a commitment the business may be unable to honour, and
customers notice when quoted numbers don't match reality. Leave a clearly
marked placeholder and ask.

The same applies to images. Never generate, source, or substitute photos.
Real photographs of real work are one of the few advantages a local
operator has over a content farm. Maintain a list of needed images and
hand it back.

## Site architecture for multi-area targeting

The single most common structural failure: one `/locations` page listing
every area served.

That page competes with itself. It cannot rank for "movers in [area A]"
and "movers in [area B]" simultaneously, because it gives neither query a
focused match. Competitors with one page per area take both.

**Correct structure — one indexable URL per area:**

```
/locations/                     hub, links to every area
/locations/[area-slug]/         one page per area
/services/[service-slug]/       one page per real service
/services/[service]/[area]/     only where volume justifies it
```

Each area page needs content that could only have been written about that
area. Specific streets, landmarks, building types, access constraints,
typical journey times to other areas. If you could swap the area name and
the page still reads correctly, it's a doorway page and Google treats it
as spam. That risk is real — write fewer, better area pages rather than
programmatically generating one per neighbourhood.

Only build area pages for places the business genuinely serves. Claiming
coverage that doesn't exist produces bad leads and bad reviews.

## Page-level checklist

**Title tag** — under ~60 characters. Primary keyword first, brand last.
Every page unique.

**Meta description** — under ~155 characters. Not a ranking factor;
it is a click-through factor. Write it as ad copy.

**One `<h1>` per page**, containing the primary term. Subheadings in
real hierarchy, never chosen for visual size.

**Canonical URL** — self-referencing, absolute, and consistent on the
www-vs-non-www question. Mixed signals here split ranking authority
between two versions of the same page.

**Structured data** — `LocalBusiness` or the closest subtype, with NAP,
hours, service area, and geo coordinates. `Service` schema on service
pages. `FAQPage` on FAQs. `AggregateRating` **only** where real reviews
back it; fabricated review schema earns a manual penalty.

**Bilingual sites** need reciprocal `hreflang` on every localised route,
plus `x-default`. Missing hreflang on a bilingual site means the two
language versions compete as duplicates.

**Images** — descriptive alt text naming the subject and the place. Never
the wrong company's name. Modern formats, explicit width and height,
lazy-load below the fold, eager-load the LCP image.

**Internal links** — descriptive anchor text, never "click here". Every
page reachable within three clicks of home. Area pages link to relevant
service pages and back.

## Things that actively hurt

- **Dead links in navigation.** Advertising a service that leads nowhere
  wastes crawl budget and destroys trust at the exact moment of intent.
  Either build the page or remove the link. There is no third option.
- **Thin duplicate pages** — several near-identical URLs, or one page
  repeating the same block. Consolidate.
- **Copy that repeats its own heading as its description.** Filler.
  Rewrite with something a customer would actually want to know.
- **Promising what isn't delivered.** "Transparent pricing" with no
  prices anywhere. Either publish numbers or drop the claim.
- **`<meta name="keywords">`.** Ignored since 2009. Remove it.
- **Orphan pages** with no internal links pointing at them.

## Information gain — the durable advantage

Ranking systems reward pages containing information unavailable elsewhere.
For a local operator that means operational reality: real prices, real
durations, real constraints, real photographs, real problems and how they
were solved.

A competitor generating content at volume cannot fabricate this
convincingly. Push every content decision toward what only this business
knows.

Corollary: do not compete by generating volume. Scaled content abuse is
explicitly targeted by search spam policy, and sites doing it are living
on borrowed time.

## Before finishing any task

- Production build passes
- No new dead internal links (crawl and verify)
- Every changed page has unique title, description, canonical
- No invented facts, prices, or testimonials anywhere
- No generated or substituted images
- Outstanding image requests and open questions listed for the owner
