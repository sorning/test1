---
name: cozy-american-villa
description: Generate three coherent Flux.2 image prompts (exterior, living room, bedroom) of the SAME cozy American villa, with consistent architectural style, season, time of day, and palette across all three views. Style and season are randomized each call unless the user passes them as arguments. Use whenever the user wants prompts for a cozy American home, villa exterior + interior scene set, or asks to invoke /cozy-american-villa.
---

# Cozy American Villa Prompt Generator

When invoked, output three Flux.2 image prompts describing the same villa from three angles:

1. **Exterior** — the villa seen from the front yard, driveway, or street
2. **Living Room** — the main interior gathering space
3. **Bedroom** — the primary bedroom

All three prompts must depict the *same property* — they share architectural style, season, time of day, color palette, and overall mood, as if photographed by the same realtor on the same afternoon.

## Arguments

Up to two optional arguments, in any order, space-separated:

- **style** — one of: `craftsman`, `modern-farmhouse`, `cape-cod`, `colonial`, `tudor`, `mountain-cabin`, `hamptons`
- **season** — one of: `spring`, `summer`, `autumn`, `winter`, `christmas`

If either is omitted, pick it at random. Examples:

- `/cozy-american-villa` → fully random
- `/cozy-american-villa craftsman` → Craftsman, random season
- `/cozy-american-villa winter mountain-cabin` → mountain cabin in winter

If an unknown token is passed, ignore it silently and randomize that slot.

## Style reference

Anchor every prompt in the signature details of the selected style.

### craftsman — Craftsman / Bungalow
Low-pitched gabled roof with wide overhanging eaves, exposed rafter tails and decorative brackets, deep covered front porch with tapered square columns on stone piers, mix of cedar shingles and earth-toned siding, multi-pane wood windows, river-rock chimney. **Interior:** exposed wood beams, built-in bookcases and bench seating, Mission-style oak furniture, hammered copper details, stained glass accents, warm amber lighting.

### modern-farmhouse — Modern Farmhouse
Crisp white board-and-batten or shiplap siding, matte black standing-seam metal roof, black-framed picture windows, simple tall gabled silhouette, covered porch with black metal lanterns, gravel driveway. **Interior:** white shiplap walls, black iron hardware, reclaimed wood ceiling beams, neutral linen upholstery, woven jute rugs, soft natural daylight, sliding barn door.

### cape-cod — Cape Cod
Symmetrical one-and-a-half story with steep pitched roof, white clapboard or weathered grey cedar shingle siding, black or navy shutters flanking multi-pane windows, central brick chimney, dormers, white picket fence, hydrangea borders. **Interior:** white wainscoting, navy-and-white palette, subtle nautical accents, painted wide-plank wood floors, ticking-stripe textiles, breezy linen curtains.

### colonial — New England Colonial
Two-story symmetrical facade, red brick or white clapboard, black shutters, central pedimented entry with sidelights and fanlight, twin brick chimneys, manicured boxwood hedges, brick walkway. **Interior:** oriental rugs, mahogany furniture, full wainscoting and crown molding, brass candlestick lamps, oil portraits, fireplace with carved white mantel.

### tudor — Tudor Cottage
Steeply pitched cross-gable roof, decorative dark half-timbering on cream stucco, tall narrow casement windows with leaded diamond panes, prominent stone chimney, arched plank front door with iron strap hinges, ivy creeping up the walls. **Interior:** heavy dark timber ceiling beams, plaster walls, massive stone fireplace, leather wingback chairs, tapestries, the glow of candles and firelight.

### mountain-cabin — Mountain Cabin / Log Home
Hand-hewn log walls or heavy timber framing, massive stacked-stone chimney, deep covered porch with peeled-log railings, dark green metal roof, floor-to-ceiling windows facing wilderness, antler hooks at the mudroom door. **Interior:** exposed log walls and beams, antler chandelier, plaid wool throws, oxblood leather sofas, oversized stone fireplace, Pendleton-style rugs, snowshoes on the wall.

### hamptons — Hamptons Shingle Style
Weathered grey cedar shingle siding, crisp white trim and slender columns, multiple gables and dormers, wraparound covered porch, manicured lawn with boxwoods and a crushed-shell path, grey shingle roof. **Interior:** white shiplap, coastal blue accents, slipcovered linen sofas, sisal rugs, brass library lamps, oversized French doors, sheer linen curtains.

## Seasonal / time-of-day cues

Match all three prompts to ONE season and ONE coherent time of day. The interior shots must show the season through windows or seasonal detail (foliage outside, snow on the sill, holiday decor, etc.).

- **spring** — soft late-morning light, dogwood or cherry blossoms, fresh pastel garden, dewy lawn
- **summer** — golden hour late afternoon, lush deep-green lawn, lemonade on the porch, lavender or hydrangea blooming
- **autumn** — warm low 4 PM light, red and amber foliage, pumpkins on the steps, woodsmoke in the air
- **winter** — soft blue dusk or cold pale morning, fresh untouched snow, bare birches, smoke from the chimney
- **christmas** — winter evening, fresh wreaths on every window, warm white string lights along the eaves, a decorated tree glowing through the living room window, candles in the windows

## Output format

Output exactly this structure, nothing before or after:

```
**Style:** <Style Name> · **Season:** <season + time of day> · **Palette:** <2–4 word palette>

### 1. Exterior
<one flowing paragraph, ~80–120 words>

### 2. Living Room
<one flowing paragraph, ~80–120 words>

### 3. Bedroom
<one flowing paragraph, ~80–120 words>
```

Each paragraph must:
- Be written as a cinematic photographic description in flowing natural English (Flux.2 prefers prose over comma-separated tags — do NOT use keyword lists, weights, or Midjourney-style flags like `--ar`)
- Name or strongly imply the chosen architectural style through specific materials
- Reflect the shared season, time of day, and palette
- Include a camera position and lens feel (e.g., "shot from the front lawn with a 35mm lens at eye level", "wide interior view from the doorway", "low three-quarter angle from the bed's foot")
- Describe the dominant light source plus any practical lights (lamps, fireplace, candles, string lights)
- End with a small, specific "cozy anchor" detail (a worn paperback face-down on the armrest, a steaming mug on the coffee table, sheepskin slippers by the bed, a sleeping tabby curled on the cushion, etc.) — pick a different one for each of the three prompts

## Randomization guidance

When a slot is randomized:
- Sample style and season independently and uniformly from the lists above
- Avoid repeating the exact same style+season combo from the immediately previous call in this session
- Vary the small details every call: chimney smoke or not, presence of a pet, throw blanket pattern, books vs flowers vs candles on surfaces, weather (clear / light overcast / light fog / light snow flurry where appropriate)
- Keep "cozy" as the throughline — even in summer, lean toward warm and inviting rather than bright and resort-like
