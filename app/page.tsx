import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dubai & Muscat · 2026",
  description: "A shared itinerary for three friends travelling through Dubai and Muscat.",
};

type Day = {
  date: string;
  title: string;
  tag: string;
  text: string;
  note: string;
  links?: { label: string; href: string }[];
};

const days: Day[] = [
  { date: "TUE · OCT 20", title: "Cleveland → Chicago → Dubai", tag: "Travel", text: "Clement, Jim and Kayla fly American Airlines from Cleveland CLE at 12:51 PM, arriving Chicago ORD at 1:35 PM. Continue on Emirates EK236 from ORD at 8:35 PM to Dubai.", note: "7-hour connection at ORD · Emirates flight is overnight", links: [{ label: "Manage American trip", href: "https://www.aa.com/reservation/view/find-your-trip" }, { label: "Manage Emirates trip", href: "https://www.emirates.com/us/english/manage-booking/" }] },
  { date: "WED · OCT 21", title: "Arrive in Dubai", tag: "Arrival", text: "Land at DXB Terminal 3 at 7:15 PM. Clear immigration, collect bags and settle in.", note: "Keep the evening easy" },
  { date: "THU · OCT 22", title: "Dubai Mall & The Lounge", tag: "Dubai", text: "Spend the afternoon exploring Dubai Mall beneath the Burj Khalifa, then head up to The Lounge for drinks and skyline views from Levels 152–154.", note: "Booking reminder: reserve The Lounge in late September", links: [{ label: "Explore Dubai Mall", href: "https://thedubaimall.com/" }, { label: "The Lounge tickets", href: "https://ticket.atthetop.ae/tickets/book-tickets/" }] },
  { date: "FRI · OCT 23", title: "Road trip to Muscat", tag: "Road trip", text: "Leave Dubai around 7:00 AM and drive via the Hatta–Al Wajajah border. Check in at The St. Regis Al Mouj Muscat.", note: "Allow 5–6 hours with the border", links: [{ label: "St. Regis", href: "https://www.almouj.com/en/hotels/" }, { label: "Driving route", href: "https://www.google.com/maps/dir/Dubai,+United+Arab+Emirates/The+St.+Regis+Al+Mouj+Muscat+Resort,+Muscat,+Oman/" }] },
  { date: "SAT · OCT 24", title: "A full day in Muscat", tag: "Muscat", text: "Explore Muscat, then return to The St. Regis for the beach, pool or a relaxed evening at Al Mouj.", note: "Stay a second night if everyone loves it", links: [{ label: "Hotel details", href: "https://www.almouj.com/en/hotels/" }, { label: "Explore Muscat", href: "https://experienceoman.om/" }] },
  { date: "SUN · OCT 25", title: "Flexible Muscat morning", tag: "Flexible", text: "Option A: enjoy breakfast and more Muscat, then drive back to Dubai. Option B: already back in Dubai after an evening return.", note: "Decision stays open" },
  { date: "MON · OCT 26", title: "Dubai day", tag: "Open", text: "A full Dubai day ready for the activities, meals and neighborhood the group chooses next.", note: "Nothing locked in yet" },
  { date: "TUE · OCT 27", title: "Abu Dhabi day trip", tag: "Abu Dhabi", text: "Leave Dubai early and begin at Sheikh Zayed Grand Mosque. Continue to Lebanese Terrace inside Emirates Palace Mandarin Oriental for lunch, spend the afternoon at Yas Marina Circuit, then have dinner at W Abu Dhabi–Yas Island before returning to Dubai.", note: "Suggested order: 9:30 AM mosque · 12:30 PM lunch · circuit afternoon · W dinner", links: [{ label: "Mosque access pass", href: "https://szgmc.gov.ae/en/individual-booking" }, { label: "Lebanese Terrace", href: "https://www.mandarinoriental.com/en/abu-dhabi/emirates-palace/dine/lebanese-terrace" }, { label: "Circuit tours", href: "https://www.yasmarinacircuit.com/en/tours" }, { label: "Dinner at W", href: "https://www.marriott.com/en-us/hotels/auhwh-w-abu-dhabi-yas-island/dining/" }] },
  { date: "WED · OCT 28", title: "Outlet shopping & CÉ LA VI", tag: "Dubai", text: "Spend the morning shopping at Dubai Outlet Mall. Return to the hotel with time to relax and get ready, then have dinner at CÉ LA VI with skyline views over Downtown and the Burj Khalifa.", note: "Morning outlet trip · dinner time and reservation to be confirmed", links: [{ label: "Dubai Outlet Mall", href: "https://dubaioutletmall.com/" }, { label: "CÉ LA VI reservations", href: "https://dxb.celavi.com/restaurant" }] },
  { date: "THU · OCT 29", title: "Final day & SUSHISAMBA", tag: "Dinner", text: "Enjoy one final day in Dubai, then have dinner at SUSHISAMBA on the 51st floor of The Palm Tower, with panoramic views across Palm Jumeirah and the skyline.", note: "Dinner time and reservation to be confirmed · leave time to pack", links: [{ label: "SUSHISAMBA reservations", href: "https://www.sushisamba.com/locations/dubai" }] },
  { date: "FRI · OCT 30", title: "Dubai → Chicago → Cleveland", tag: "Travel", text: "Clement, Jim and Kayla fly Emirates EK235 from Dubai at 9:45 AM, arriving Chicago ORD at 3:45 PM. Continue on American Airlines from ORD at 5:39 PM, arriving Cleveland CLE at 8:16 PM.", note: "1 hr 54 min at ORD · immigration, bags and terminal transfer required", links: [{ label: "Manage Emirates trip", href: "https://www.emirates.com/us/english/manage-booking/" }, { label: "Manage American trip", href: "https://www.aa.com/reservation/view/find-your-trip" }] },
];

export default function Home() {
  return (
    <main>
      <header className="hero">
        <nav><span className="mark">D/M</span><span className="year">OCTOBER 2026</span></nav>
        <div className="hero-copy">
          <p className="eyebrow">THREE FRIENDS · TWO COUNTRIES · TEN DAYS</p>
          <h1>Dubai <i>&amp;</i><br />Muscat</h1>
          <p className="lede">A living itinerary for Clement, Jim and Kayla.</p>
        </div>
        <div className="route" aria-label="Trip route">
          <span>CLEVELAND</span><b>→</b><span>DUBAI</span><b>→</b><span>MUSCAT</span>
        </div>
      </header>

      <section className="trip-bar">
        <div><small>TRAVELLERS</small><strong>Clement · Jim · Kayla</strong></div>
        <div><small>DATES</small><strong>Oct 20–30</strong></div>
        <div><small>MUSCAT STAY</small><strong>The St. Regis Al Mouj</strong></div>
      </section>

      <section className="content">
        <div className="intro">
          <p className="eyebrow dark">THE PLAN SO FAR</p>
          <h2>One day at a time.</h2>
          <p>This is the working version. Confirmed travel sits alongside open days, so we can add plans without rushing the decisions.</p>
        </div>

        <div className="timeline">
          {days.map((day, index) => (
            <article className={day.tag === "Muscat" || day.tag === "Road trip" ? "featured" : ""} key={day.date}>
              <div className="number">{String(index + 1).padStart(2, "0")}</div>
              <div className="day-copy">
                <div className="date-row"><span>{day.date}</span><em>{day.tag}</em></div>
                <h3>{day.title}</h3>
                <p>{day.text}</p>
                <small>{day.note}</small>
                {day.links && (
                  <div className="card-links">
                    {day.links.map((link) => (
                      <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>{link.label}<b aria-hidden="true">↗</b></a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        <section className="todo" aria-labelledby="todo-title">
          <div className="todo-head">
            <p className="eyebrow dark">BEFORE YOU GO</p>
            <h2 id="todo-title">Things to do.</h2>
            <p>Visa applications, seats and reservations to finish before departure.</p>
          </div>
          <div className="todo-grid">
            <div className="todo-card">
              <span className="person">JIM</span>
              <label><input type="checkbox" /> Apply for UAE visa</label>
              <label><input type="checkbox" /> Apply for Oman visa</label>
              <div className="todo-links"><a href="https://www.emirates.com/us/english/before-you-fly/visa-passport-information/uae-visa-information/" target="_blank" rel="noreferrer">UAE visa ↗</a><a href="https://evisa.rop.gov.om/en/visa-eligibility" target="_blank" rel="noreferrer">Oman visa ↗</a></div>
            </div>
            <div className="todo-card">
              <span className="person">KAYLA</span>
              <label><input type="checkbox" /> Apply for UAE visa</label>
              <label><input type="checkbox" /> Apply for Oman visa</label>
              <div className="todo-links"><a href="https://www.emirates.com/us/english/before-you-fly/visa-passport-information/uae-visa-information/" target="_blank" rel="noreferrer">UAE visa ↗</a><a href="https://evisa.rop.gov.om/en/visa-eligibility" target="_blank" rel="noreferrer">Oman visa ↗</a></div>
            </div>
            <div className="todo-card">
              <span className="person">CLEMENT</span>
              <label><input type="checkbox" /> Apply for Oman visa</label>
              <div className="todo-links"><a href="https://evisa.rop.gov.om/en/visa-eligibility" target="_blank" rel="noreferrer">Oman visa ↗</a></div>
            </div>
            <div className="todo-card group-card">
              <span className="person">EVERYONE</span>
              <label><input type="checkbox" /> Confirm seats on both American Airlines flights</label>
              <label><input type="checkbox" /> Confirm seats for EK236 and EK235</label>
              <label><input type="checkbox" /> Book The Lounge at Burj Khalifa</label>
              <label><input type="checkbox" /> Book Lebanese Terrace</label>
              <label><input type="checkbox" /> Book Yas Marina Circuit</label>
              <label><input type="checkbox" /> Choose and book dinner at W Abu Dhabi</label>
              <label><input type="checkbox" /> Book CÉ LA VI</label>
              <label><input type="checkbox" /> Book SUSHISAMBA</label>
              <div className="todo-links"><a href="https://www.emirates.com/us/english/manage-booking/" target="_blank" rel="noreferrer">Manage Emirates booking ↗</a></div>
            </div>
          </div>
          <p className="visa-note">Confirm visa requirements against each traveller’s passport before applying; entry rules can change.</p>
        </section>

        <aside>
          <span>ROAD-TRIP CHECK</span>
          <p>Confirm that the car can cross into Oman and that the group has the rental-company NOC, Oman-valid insurance, passports and entry documents.</p>
        </aside>
      </section>

      <footer><span>DUBAI · MUSCAT · 2026</span><span>Built as the adventure unfolds.</span></footer>
    </main>
  );
}
