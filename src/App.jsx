import { useState } from "react";
const HEADER_IMG = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQ
const packages = [
{
id: 1, category: "Day Trip", tag: "Budget Pick", title: "Mikumi Flash Safari",
subtitle: "Dar es Salaam → Mikumi (Drive)", duration: "1 Day", nights: 0,
origin: "Dar es Salaam",
highlights: ["Hippo pools", "Elephant herds", "Lion pride territory", "Baobab landscapes"
itinerary: [
{ time: "05:00", label: "Depart Dar es Salaam by road (3.5 hrs)" },
{ time: "08:30", label: "Arrive Mikumi – morning game drive" },
{ time: "12:30", label: "Lunch at park lodge / picnic" },
{ time: "14:00", label: "Afternoon game drive" },
{ time: "16:00", label: "Depart back to Dar es Salaam" },
{ time: "19:30", label: "Arrive Dar es Salaam" },
],
transport: "Road", parks: ["Mikumi"],
note: "Best value day trip from Dar. No flights needed.",
budgetTier: "Budget", color: "#8B6914",
},
{
id: 2, category: "Day Trip", tag: "Island Escape", title: "Zanzibar → Mikumi Fly-In",
subtitle: "Zanzibar → Mikumi (Fly)", duration: "1 Day", nights: 0,
origin: "Zanzibar",
highlights: ["Scenic flight over Indian Ocean", "Big 5 territory", "Elephant & hippo sigh
itinerary: [
{ time: "06:00", label: "Fly Zanzibar → Mikumi airstrip (~55 min)" },
{ time: "07:00", label: "Morning game drive with bush breakfast" },
{ time: "12:00", label: "Midday rest & lunch at lodge" },
{ time: "14:00", label: "Afternoon game drive" },
{ time: "16:30", label: "Fly Mikumi → Zanzibar" },
{ time: "17:30", label: "Return to Zanzibar resort" },
],
transport: "Fly-In", parks: ["Mikumi"],
note: "Perfect beach-to-bush combo. Zanzibar's most accessible safari option.",
budgetTier: "Mid-Range", color: "#3A6B52",
},
{
id: 3, category: "Day Trip", tag: "World Wonder", title: "Ngorongoro Crater Day",
subtitle: "Arusha → Ngorongoro (Drive)", duration: "1 Day", nights: 0,
origin: "Arusha",
highlights: ["Black rhino", "Flamingo lake", "Densest Big 5 in Africa", "Maasai villages
},
{
},
{
itinerary: [
{ time: "06:00", label: "Depart Arusha (2.5 hrs drive)" },
{ time: "08:30", label: "Descend into crater floor" },
{ time: "09:00", label: "Full crater game drive" },
{ time: "13:00", label: "Picnic lunch on crater floor" },
{ time: "14:30", label: "Continue game drive (rhino search)" },
{ time: "16:30", label: "Ascend & drive back to Arusha" },
],
transport: "Road", parks: ["Ngorongoro"],
note: "Highest wildlife density per km² in Africa. Ideal for short stops in Arusha.",
budgetTier: "Budget", color: "#6B4A8A",
id: 4, category: "Weekend", tag: "Quick Escape", title: "Mikumi Weekend",
subtitle: "Dar es Salaam → Mikumi", duration: "2 Days / 1 Night", nights: 1,
origin: "Dar es Salaam",
highlights: ["Sunset game drive", "Night sounds of the bush", "Early sunrise drive", "Hip
itinerary: [
{ time: "Day 1 – 05:30", label: "Drive Dar → Mikumi (3.5 hrs)" },
{ time: "Day 1 – 09:00", label: "Morning game drive" },
{ time: "Day 1 – 13:00", label: "Lunch & check-in at lodge" },
{ time: "Day 1 – 16:00", label: "Sunset game drive" },
{ time: "Day 1 – 20:00", label: "Dinner & overnight" },
{ time: "Day 2 – 06:00", label: "Early sunrise game drive" },
{ time: "Day 2 – 10:00", label: "Breakfast & checkout" },
{ time: "Day 2 – 14:00", label: "Return to Dar es Salaam" },
],
transport: "Road", parks: ["Mikumi"],
note: "Closest national park to Dar. A perfect 2-day introduction to Tanzanian wildlife."
budgetTier: "Budget", color: "#8B6914",
id: 5, category: "Weekend", tag: "Crater Wonder", title: "Ngorongoro Overnight",
subtitle: "Arusha → Ngorongoro", duration: "2 Days / 1 Night", nights: 1,
origin: "Arusha",
highlights: ["Rim sunset views", "Full crater day", "Black rhino tracking", "UNESCO World
itinerary: [
{ time: "Day 1 – 07:00", label: "Drive Arusha → Ngorongoro rim (2.5 hrs)" },
{ time: "Day 1 – 10:00", label: "Check in at crater rim lodge" },
{ time: "Day 1 – 14:00", label: "Afternoon descent – game drive" },
{ time: "Day 1 – 18:00", label: "Ascend & sunset at rim" },
{ time: "Day 2 – 06:30", label: "Full day crater game drive" },
{ time: "Day 2 – 16:00", label: "Ascend & drive back to Arusha" },
],
transport: "Road", parks: ["Ngorongoro"],
note: "Staying on the rim gives stunning crater views and cooler temperatures.",
budgetTier: "Mid-Range", color: "#6B4A8A",
},
{
},
{
},
{
},
{
id: 6, category: "3D / 2N", tag: "Northern Classic", title: "Manyara & Ngorongoro",
subtitle: "Dar/Zanzibar → Arusha → Parks", duration: "3 Days / 2 Nights", nights: 2,
origin: "Dar es Salaam / Zanzibar",
highlights: ["Tree-climbing lions (Manyara)", "Flamingo flocks", "Ngorongoro Big 5", "Maa
itinerary: [
{ time: "Day 1", label: "Fly to Arusha → Drive to Lake Manyara NP → Afternoon game driv
{ time: "Day 2", label: "Morning game drive Manyara → Drive to Ngorongoro → Rim overnig
{ time: "Day 3", label: "Full crater game drive → Afternoon drive back to Arusha → Retu
],
transport: "Fly + Road", parks: ["Lake Manyara", "Ngorongoro"],
note: "Best intro to Tanzania's northern circuit. Two iconic parks, manageable cost.",
budgetTier: "Mid-Range", color: "#3A6B52",
id: 7, category: "3D / 2N", tag: "Zanzibar Gateway", title: "Zanzibar → Serengeti Express
subtitle: "Zanzibar → Fly-in Serengeti", duration: "3 Days / 2 Nights", nights: 2,
origin: "Zanzibar",
highlights: ["Wildebeest migration (seasonal)", "Big cats", "Fly-in bush camp", "Endless
itinerary: [
{ time: "Day 1", label: "Fly Zanzibar → Seronera airstrip → Afternoon game drive { time: "Day 2", label: "Full day Serengeti (AM + PM game drives) → Optional balloon at
{ time: "Day 3", label: "Morning game drive → Fly Seronera → Zanzibar" },
→ Over
],
transport: "Fly-In", parks: ["Serengeti"],
note: "Premium fly-in option. Maximum time in Serengeti, minimum travel. Best for beach +
budgetTier: "Luxury", color: "#8B6914",
id: 8, category: "3D / 2N", tag: "Southern Circuit", title: "Mikumi & Udzungwa",
subtitle: "Dar es Salaam → Mikumi → Udzungwa", duration: "3 Days / 2 Nights", nights: 2,
origin: "Dar es Salaam",
highlights: ["Primate trekking", "Waterfalls", "Hippo corridor", "Off-the-beaten-path"],
itinerary: [
{ time: "Day 1", label: "Drive Dar → Mikumi → Afternoon game drive → Overnight Mikumi"
{ time: "Day 2", label: "Morning game drive → Drive to Udzungwa Mountains → Afternoon h
{ time: "Day 3", label: "Forest walk / waterfall hike → Return to Dar es Salaam" },
],
transport: "Road", parks: ["Mikumi", "Udzungwa Mountains"],
note: "Unique combo of savanna and rainforest. Great value, no flights needed.",
budgetTier: "Budget", color: "#6B4A8A",
id: 9, category: "4D / 3N", tag: "Original Route", title: "Manyara → Serengeti Classic",
subtitle: "Dar es Salaam → Arusha → Ndutu", duration: "4 Days / 3 Nights", nights: origin: "Dar es Salaam",
3,
},
{
},
{
},
{
"Optio
highlights: ["Lake Manyara flamingos", "Ndutu wildebeest", "Seronera game drives", itinerary: [
{ time: "Day 1", label: "Fly Dar → Arusha → Drive to Lake Manyara NP → Overnight Manyar
{ time: "Day 2", label: "Drive to Serengeti Ndutu → Full afternoon game drive → Overnig
{ time: "Day 3", label: "AM + PM game drives Serengeti → Optional hot air balloon → Ove
{ time: "Day 4", label: "Early breakfast → Drive to Arusha → Connect flight Dar / Zanzi
],
transport: "Fly + Road", parks: ["Lake Manyara", "Serengeti"],
note: "Your original itinerary. Proven route with strong wildlife density.",
budgetTier: "Mid-Range", color: "#3A6B52",
id: 10, category: "4D / 3N", tag: "Crater Upgrade", title: "Serengeti & Ngorongoro",
subtitle: "Arusha / Zanzibar → Serengeti → Ngorongoro", duration: "4 Days / 3 Nights", ni
origin: "Arusha / Zanzibar",
highlights: ["Serengeti Big Cats", "Ngorongoro rhino", "Migration plains", "Two UNESCO si
itinerary: [
{ time: "Day 1", label: "Fly to Arusha → Drive to Serengeti → Afternoon game drive → Ov
{ time: "Day 2", label: "Full day Serengeti (AM + PM) → Overnight Seronera" },
{ time: "Day 3", label: "Morning drive → Exit to Ngorongoro → Afternoon rim walk { time: "Day 4", label: "Full crater descent → Late afternoon drive to Arusha → Return
→ Over
],
transport: "Fly + Road", parks: ["Serengeti", "Ngorongoro"],
note: "Most iconic combo in East Africa. Covers two of Tanzania's greatest wildlife desti
budgetTier: "Mid-Range", color: "#8B6914",
id: 11, category: "4D / 3N", tag: "Fly-In Luxury", title: "Zanzibar Fly-In Safari",
subtitle: "Zanzibar → Serengeti → Ngorongoro", duration: "4 Days / 3 Nights", nights: 3,
origin: "Zanzibar",
highlights: ["No road fatigue", "Bush & beach combo", "Fly between parks", "Premium camps
itinerary: [
{ time: "Day 1", label: "Fly Zanzibar → Seronera → Afternoon game drive → Bush camp ove
{ time: "Day 2", label: "Full Serengeti day → Dawn balloon optional → Overnight Seroner
{ time: "Day 3", label: "Fly Seronera → Ngorongoro airstrip → Full crater game drive →
{ time: "Day 4", label: "Morning crater walk → Fly Ngorongoro → Arusha → Zanzibar" },
],
transport: "Fly-In", parks: ["Serengeti", "Ngorongoro"],
note: "Zero road travel. Pure flying and wildlife. Ideal for high-end clients or short st
budgetTier: "Luxury", color: "#6B4A8A",
id: 12, category: "5D / 4N", tag: "Northern Circuit", title: "The Full Northern Loop",
subtitle: "Tarangire → Manyara → Serengeti → Ngorongoro", duration: "5 Days / 4 Nights",
origin: "Dar es Salaam / Zanzibar",
highlights: ["Elephant herds (Tarangire)", "Tree lions (Manyara)", "Migration (Serengeti)
itinerary: [
},
{
},
{
},
{
{ time: "Day 1", label: "Fly to Arusha → Drive to Tarangire NP → Afternoon game drive →
{ time: "Day 2", label: "Morning Tarangire → Drive to Lake Manyara → Afternoon game dri
{ time: "Day 3", label: "Drive to Serengeti → Afternoon game drive → Overnight Seronera
{ time: "Day 4", label: "Full day Serengeti (AM + PM) → Overnight" },
{ time: "Day 5", label: "Drive to Ngorongoro → Full crater descent → Evening fly back f
],
transport: "Fly + Road", parks: ["Tarangire", "Lake Manyara", "Serengeti", "Ngorongoro"],
note: "Tanzania's complete northern circuit. Covers 4 parks, every ecosystem, all Big 5."
budgetTier: "Mid-Range", color: "#3A6B52",
4,
id: 13, category: "5D / 4N", tag: "Southern Deep Dive", title: "Mikumi & Ruaha",
subtitle: "Dar es Salaam → Mikumi → Ruaha", duration: "5 Days / 4 Nights", nights: origin: "Dar es Salaam",
highlights: ["Huge elephant herds (Ruaha)", "Remote & uncrowded", "Great Ruaha River", "B
itinerary: [
{ time: "Day 1", label: "Drive Dar → Mikumi → Afternoon game drive → Overnight" },
{ time: "Day 2", label: "Full day Mikumi (AM + PM) → Overnight" },
{ time: "Day 3", label: "Drive / fly to Ruaha NP → Afternoon game drive → Overnight" },
{ time: "Day 4", label: "Full day Ruaha (AM + PM) + walking safari → Overnight" },
{ time: "Day 5", label: "Morning drive → Fly or drive back to Dar" },
],
transport: "Road (+ optional fly)", parks: ["Mikumi", "Ruaha"],
note: "Tanzania's hidden southern gems. Ruaha is one of Africa's largest and least-visite
budgetTier: "Mid-Range", color: "#8B6914",
id: 14, category: "7D / 6N", tag: "Ultimate Safari", title: "Best of Tanzania",
subtitle: "Mikumi + Serengeti + Ngorongoro + Manyara", duration: "7 Days / 6 Nights", nig
origin: "Dar es Salaam / Zanzibar",
highlights: ["All 4 top parks", "Great Migration", "Ngorongoro Crater", "Southern & North
itinerary: [
{ time: "Day 1", label: "Drive Dar → Mikumi → Afternoon game drive → Overnight" },
{ time: "Day 2", label: "Full day Mikumi → Fly Mikumi → Arusha → Overnight Arusha" },
{ time: "Day 3", label: "Drive to Lake Manyara → Afternoon game drive → Overnight" },
{ time: "Day 4", label: "Drive to Serengeti → Afternoon game drive → Overnight Seronera
{ time: "Day 5", label: "Full day Serengeti (AM + PM + optional balloon) → Overnight" }
{ time: "Day 6", label: "Drive to Ngorongoro → Rim sunset → Overnight rim lodge" },
{ time: "Day 7", label: "Full crater descent → Drive to Arusha → Fly back" },
],
transport: "Road + 1 Domestic Flight", parks: ["Mikumi", "Lake Manyara", "Serengeti", "Ng
note: "Tanzania's definitive safari experience. Combines southern & northern circuits sea
budgetTier: "Luxury", color: "#3A6B52",
id: 15, category: "7D / 6N", tag: "Beach & Bush", title: "Zanzibar + Grand Safari",
subtitle: "Zanzibar → Northern Circuit → Back", duration: "7 Days / 6 Nights", nights: 6,
origin: "Zanzibar",
highlights: ["3 nights Zanzibar beach", "Fly to Arusha", "Northern circuit 4 parks", "Fly
itinerary: [
{ time: "Days 1–2", label: "Zanzibar relaxation & spice tour" },
{ time: "Day 3", label: "Fly Zanzibar → Arusha → Drive to Tarangire → Overnight" { time: "Day 4", label: "Tarangire full day → Drive to Manyara → Overnight" },
{ time: "Day 5", label: "Drive to Serengeti → Afternoon game drive → Overnight" },
{ time: "Day 6", label: "Full Serengeti day → Drive to Ngorongoro → Overnight rim" },
{ time: "Day 7", label: "Full crater game drive → Fly Arusha → Zanzibar" },
},
],
transport: "Fly (Zan–Arusha–Zan) + Road", parks: ["Tarangire", "Lake Manyara", "Serengeti
note: "Perfect holiday package. Splits beach relaxation and wildlife adventure seamlessly
budgetTier: "Luxury", color: "#6B4A8A",
},
];
const categories = ["All", "Day Trip", "Weekend", "3D / 2N", "4D / 3N", "5D / 4N", "7D const budgets = ["All Budgets", "Budget", "Mid-Range", "Luxury"];
const origins = ["All Origins", "Dar es Salaam", "Zanzibar", "Arusha"];
/ 6N"]
const budgetColors = { Budget: "#3A6B52", "Mid-Range": "#8B6914", Luxury: "#6B4A8A" };
const transportIcons = {
Road: " ", "Fly + Road": " ", "Fly-In": " ",
"Road (+ optional fly)": " ", "Fly (Zan–Arusha–Zan) + Road": " ",
"Road + 1 Domestic Flight": " ",
};
export default function SafariPackages() {
const [activeCategory, setActiveCategory] = useState("All");
const [activeBudget, setActiveBudget] = useState("All Budgets");
const [activeOrigin, setActiveOrigin] = useState("All Origins");
const [expanded, setExpanded] = useState(null);
const filtered = packages.filter((p) => {
const catMatch = activeCategory === "All" || p.category === activeCategory;
const budgetMatch = activeBudget === "All Budgets" || p.budgetTier === activeBudget;
const originMatch =
activeOrigin === "All Origins" ||
p.origin.includes(activeOrigin) ||
(activeOrigin === "Zanzibar" && p.origin.includes("Zanzibar")) ||
(activeOrigin === "Dar es Salaam" && p.origin.includes("Dar"));
return catMatch && budgetMatch && originMatch;
});
return (
<div style={{ minHeight: "100vh", background: "#FAF8F3", fontFamily: "'Georgia', 'Times N
{/* ── HEADER IMAGE ── */}
<div style={{ position: "relative", width: "100%", height: "420px", overflow: "hidden"
<img
src={HEADER_IMG}
alt="Serengeti hot air balloon"
style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center
/>
{/* Dark gradient overlay */}
<div style={{
position: "absolute", inset: 0,
background: "linear-gradient(to bottom, rgba(10,8,5,0.15) 0%, rgba(10,8,5,0.45) 60%
}} />
{/* NYUMBAI Logo centred on image */}
<div style={{
position: "absolute", inset: 0,
display: "flex", flexDirection: "column",
alignItems: "center", justifyContent: "center",
paddingBottom: "40px",
}}>
<h1 style={{
fontFamily: "'Cormorant Garamond', 'Garamond', 'Georgia', serif",
fontSize: "clamp(44px, 8vw, 88px)",
fontWeight: "300",
letterSpacing: "0.22em",
color: "#FFFFFF",
margin: 0,
textTransform: "uppercase",
textShadow: "0 2px 24px rgba(0,0,0,0.45)",
lineHeight: 1,
}}>
Nyumbai
</h1>
<div style={{
width: "60px", height: "1px",
background: "rgba(255,255,255,0.6)",
margin: "14px 0 10px",
}} />
<p style={{
fontFamily: "'Georgia', serif",
fontSize: "12px",
letterSpacing: "0.35em",
color: "rgba(255,255,255,0.85)",
textTransform: "uppercase",
margin: 0,
textShadow: "0 1px 8px rgba(0,0,0,0.4)",
}}>
Safari Packages
</p>
</div>
</div>
{/* ── INTRO STRIP ── */}
<div style={{
textAlign: "center",
padding: "12px 20px 28px",
borderBottom: "1px solid #E8E0D0",
}}>
<p style={{
color: "#7A6A50",
fontSize: "14px",
maxWidth: "520px",
margin: "0 auto",
lineHeight: 1.7,
fontFamily: "'Georgia', serif",
fontStyle: "italic",
}}>
{packages.length} curated journeys — from day trips to week-long expeditions,
budget road drives to luxury fly-ins across Tanzania's greatest wild places.
</p>
<div style={{ display: "flex", justifyContent: "center", gap: "28px", marginTop: "16p
{["Budget-Friendly", "Fly-In Luxury", "Beach & Bush", "Full Northern Circuit"].map(
<span key={t} style={{ fontSize: "10px", letterSpacing: "0.18em", color: "#8B6914
✦ {t}
</span>
))}
</div>
</div>
{/* ── FILTERS ── */}
<div style={{ padding: "22px 20px 0", maxWidth: "1100px", margin: "0 auto", display: "f
<div style={{ display: "flex", gap: "7px", flexWrap: "wrap", alignItems: "center" }}>
<span style={{ fontSize: "10px", color: "#B0A080", letterSpacing: "0.18em", textTra
{categories.map((c) => (
<button key={c} onClick={() => setActiveCategory(c)} style={{
padding: "5px 13px", borderRadius: "20px",
border: activeCategory === c ? "1px solid #8B6914" : "1px solid #DDD5C0",
background: activeCategory === c ? "#8B691412" : "transparent",
color: activeCategory === c ? "#8B6914" : "#9A8A6A",
fontSize: "12px", cursor: "pointer", fontFamily: "Arial",
}}>
{c}
</button>
))}
</div>
<div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
<div style={{ display: "flex", gap: "7px", flexWrap: "wrap", alignItems: "center" }
<span style={{ fontSize: "10px", color: "#B0A080", letterSpacing: "0.18em", textT
{budgets.map((b) => (
<button key={b} onClick={() => setActiveBudget(b)} style={{
padding: "5px 13px", borderRadius: "20px",
border: activeBudget === b ? `1px solid ${budgetColors[b] || "#8B6914"}` : "1
background: activeBudget === b ? `${budgetColors[b]}12` : "transparent",
color: activeBudget === b ? (budgetColors[b] || "#8B6914") : "#9A8A6A",
fontSize: "12px", cursor: "pointer", fontFamily: "Arial",
}}>
{b}
</button>
))}
</div>
<div style={{ display: "flex", gap: "7px", flexWrap: "wrap", alignItems: "center" }
<span style={{ fontSize: "10px", color: "#B0A080", letterSpacing: "0.18em", textT
{origins.map((o) => (
<button key={o} onClick={() => setActiveOrigin(o)} style={{
padding: "5px 13px", borderRadius: "20px",
border: activeOrigin === o ? "1px solid #3A6B52" : "1px solid #DDD5C0",
background: activeOrigin === o ? "#3A6B5212" : "transparent",
color: activeOrigin === o ? "#3A6B52" : "#9A8A6A",
fontSize: "12px", cursor: "pointer", fontFamily: "Arial",
}}>
{o}
</button>
))}
</div>
</div>
<p style={{ fontSize: "11px", color: "#C0B090", fontFamily: "Arial", margin: "2px 0 4
Showing {filtered.length} of {packages.length} packages
</p>
</div>
{/* ── CARDS GRID ── */}
<div style={{
maxWidth: "1100px", margin: "20px auto 0", padding: "0 20px 60px",
display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "
}}>
{filtered.map((pkg) => {
const isOpen = expanded === pkg.id;
return (
<div key={pkg.id} style={{
background: "#FFFFFF",
border: isOpen ? `1px solid ${pkg.color}50` : "1px solid #E8E0D0",
borderRadius: "10px", overflow: "hidden",
boxShadow: isOpen ? `0 4px 20px ${pkg.color}15` : "0 1px 4px rgba(0,0,0,0.05)",
transition: "all 0.25s",
}}>
{/* Card top accent line */}
<div style={{ height: "3px", background: pkg.color, opacity: isOpen ? 1 : 0.35,
<div style={{ padding: "18px 18px 14px", cursor: "pointer" }} onClick={() => se
<div style={{ display: "flex", justifyContent: "space-between", alignItems: "
<div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
<span style={{
fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase",
color: pkg.color, background: `${pkg.color}12`,
padding: "3px 8px", borderRadius: "3px", fontFamily: "Arial",
}}>{pkg.category}</span>
<span style={{
fontSize: "9px", letterSpacing: "0.1em", textTransform: "uppercase",
color: "#A09070", background: "#F5F0E8",
padding: "3px 8px", borderRadius: "3px", fontFamily: "Arial",
}}>{pkg.tag}</span>
</div>
<span style={{
fontSize: "20px", color: isOpen ? pkg.color : "#C0B090",
display: "inline-block",
transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
transition: "all 0.25s", lineHeight: 1,
}}>+</span>
</div>
<h2 style={{ fontSize: "17px", fontWeight: "normal", color: "#1A1510", {pkg.title}
margin
</h2>
<p style={{ fontSize: "11px", color: "#9A8A6A", margin: "0 0 12px", fontFamil
<div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
{[
{ label: "Duration", val: pkg.duration, col: "#1A1510" },
{ label: "Transport", val: `${transportIcons[pkg.transport] || " "} ${pk
{ label: "Tier", val: pkg.budgetTier, col: budgetColors[pkg.budgetTier] }
].map(({ label, val, col }) => (
<div key={label}>
<span style={{ fontSize: "9px", color: "#C0B090", textTransform: "upper
<p style={{ fontSize: "12px", color: col, margin: "2px 0 0", fontFamily
</div>
))}
</div>
<div style={{ display: "flex", gap: "5px", marginTop: "10px", flexWrap: "wrap
{pkg.parks.map((park) => (
<span key={park} style={{
fontSize: "9px", color: "#A09070",
border: "1px solid #E0D8C8", padding: "2px 8px",
borderRadius: "20px", fontFamily: "Arial",
}}>{park}</span>
))}
</div>
</div>
{isOpen && (
<div style={{ padding: "0 18px 18px", borderTop: "1px solid #F0EAD8" }}>
<div style={{ paddingTop: "14px", marginBottom: "14px" }}>
<p style={{ fontSize: "9px", letterSpacing: "0.18em", textTransform: "upp
<div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
{pkg.highlights.map((h) => (
<span key={h} style={{
fontSize: "11px", color: "#6A5A3A",
background: "#F8F4EC", padding: "4px 10px",
borderRadius: "3px", fontFamily: "Arial",
}}>✦ {h}</span>
))}
</div>
</div>
}}>
<div style={{ marginBottom: "14px" }}>
<p style={{ fontSize: "9px", letterSpacing: "0.18em", textTransform: "upp
<div style={{ display: "flex", flexDirection: "column", gap: "8px" {pkg.itinerary.map((item, i) => (
<div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex
<div style={{ width: "5px", height: "5px", borderRadius: "50%", bac
<div>
<span style={{ fontSize: "10px", color: pkg.color, fontFamily: "A
<p style={{ fontSize: "12px", color: "#4A3A2A", margin: "1px 0 0"
</div>
</div>
))}
</div>
</div>
<div style={{
background: `${pkg.color}08`, border: `1px solid ${pkg.color}22`,
borderRadius: "6px", padding: "10px 12px",
}}>
<p style={{ fontSize: "12px", color: "#6A5A3A", margin: 0, fontFamily: "A
{pkg.note}
</p>
</div>
</div>
)}
</div>
);
})}
</div>
{filtered.length === 0 && (
<div style={{ textAlign: "center", padding: "60px 20px", color: "#C0B090", fontFamily
No packages match your filters. Try adjusting the criteria.
</div>
)}
<div style={{ textAlign: "center", padding: "20px 20px 40px", color: "#C0B090", fontSiz
All prices are indicative. Rates vary by season, lodge choice, and group size.
</div>
</div>
);
}