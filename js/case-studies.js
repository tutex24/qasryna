// ============================================================================
// CASE STUDIES (optional) — full project pages, keyed by project name.
// ============================================================================
// A project listed in js/projects.js works fine with no entry here — it just
// shows its plain `description` text. Add an entry here (keyed by the exact
// same `name`) to give it a full page instead, like Kumo or Surge below.
//
// Each entry is just HTML, written directly, inside backticks (`` ` ``).
// Whatever you write here is what shows up on the page — nothing transforms
// it. Want a different layout for a project? Write different HTML. Want a
// brand new look? Add a class to css/style.css and use it below, same as
// you'd style anything in index.html.
//
// A few ready-made classes are already styled for you in css/style.css —
// copy/paste whichever pieces you need:
//
//   <p class="case-text">Some paragraph text.</p>
//     A centered paragraph.
//
//   <p class="case-text case-text--note">A smaller aside, e.g. a disclaimer.</p>
//     Same, but smaller and muted.
//
//   <h2 class="case-heading">Section Title</h2>
//     A section label, e.g. "Concept Board".
//
//   <div class="case-image"><img src="..." alt="..." /></div>
//     One centered image, full width. Add class="case-image case-image--sm"
//     (max 420px) or "case-image--md" (max 640px) for a smaller image, like
//     a logo or an icon row.
//
//   <figure class="case-image-group">
//     <div class="case-image-group-row">
//       <img src="..." alt="..." />
//       <img src="..." alt="..." />
//     </div>
//     <figcaption>Optional caption</figcaption>
//   </figure>
//     One or more images side by side, with an optional caption underneath.
//
//   <div class="case-gallery">
//     <img src="..." alt="..." />
//     <img src="..." alt="..." />
//   </div>
//     A stack of full-width photos.
//
//   <div class="case-video"><video src="..." controls playsinline></video></div>
//     One centered video with playback controls — for Motion projects.
//
//   <div class="case-embed"><iframe src="https://www.youtube.com/embed/VIDEO_ID" allowfullscreen></iframe></div>
//     One centered YouTube embed (use the /embed/ URL form, not the normal
//     watch URL) — for a video that lives on YouTube instead of as a file.
//
//   <div class="case-masonry">
//     <video src="..." autoplay muted loop playsinline></video>
//     <img src="..." alt="..." />
//     ...
//   </div>
//     A masonry mosaic — mix <img>/<video> freely, any order, any count.
//     Each tile keeps its own native aspect ratio (no cropping), so it's
//     safe for a mix of square/wide/tall clips without losing content.
//
//   <div class="case-trio">
//     <div class="case-trio-item">
//       <h2 class="case-heading">Label</h2>
//       <div class="case-image"><img src="..." alt="..." /></div>
//     </div>
//     ... (2-3 items)
//   </div>
//     A row of 2-3 heading+image pairs side by side, e.g. showing a few
//     flavor/color variants at once instead of stacked full-width.
//
// TO REMOVE a case study (and fall back to the plain description), delete
// its whole entry below.
// ============================================================================

var caseStudies = {
  Kumo: `
    <p class="case-text">
KUMO, Japanese for “cloud”, is a natural soap brand concept focused on sustainability, simplicity and plant-based ingredients. Designed for a packaging course, the brand uses hemp paper, organic linework and minimal forms to reflect the brand’s handmade, biodegradable and zero-waste values.    </p>

    <div class="case-image case-image--sm">
      <img src="assets/images/projects/graphic-design/kumo/Logo.png" alt="Kumo logotype" />
    </div>

    <p class="case-text">
      KUMO is an organic, 100% natural and 100% biodegradable company. Made with only pure, raw materials, we take pride in our cruelty free, handmade and vegan products. We believe in creating more than just fun, functional and gorgeous products for the body. We believe in making a difference in the world with the choices we make as a brand.
    </p>

    <div class="case-image case-image--md">
      <img src="assets/images/projects/graphic-design/kumo/Untitled-3-01.png" alt="100% eco friendly, 100% natural, vegan, cruelty free, handmade" />
    </div>

    <p class="case-text">
      At KUMO, we cooperate with local growers to supply us with outstanding and pure materials to add into our products. We choose ingredients of the highest quality and those which ensures the traceability and the nominal origin of our products. We believe in making effective products from fresh organic fruits and vegetables and the finest essential oils.
    </p>

    <h2 class="case-heading">Inspiration and Ideas</h2>
    <figure class="case-image-group">
      <div class="case-image-group-row">
        <img src="assets/images/projects/graphic-design/kumo/Ref/IDEAS-01.png" alt="Packaging inspiration moodboard — box" />
        <img src="assets/images/projects/graphic-design/kumo/Ref/IDEAS-02.png" alt="Packaging inspiration moodboard — bottle" />
        <img src="assets/images/projects/graphic-design/kumo/Ref/IDEAS-03.png" alt="Packaging inspiration moodboard — bag" />
      </div>
    </figure>

    <h2 class="case-heading">Dielines</h2>

    <figure class="case-image-group">
      <div class="case-image-group-row">
        <img src="assets/images/projects/graphic-design/kumo/Dieline/Box Dieline-01.png" alt="Outer Soap Box dieline" />
      </div>
      <figcaption>Outer Soap Box</figcaption>
    </figure>

    <figure class="case-image-group">
      <div class="case-image-group-row">
        <img src="assets/images/projects/graphic-design/kumo/Dieline/Box Dieline-02.png" alt="Inner Soap Box Drawer dieline" />
      </div>
      <figcaption>Inner Soap Box Drawer</figcaption>
    </figure>

    <figure class="case-image-group">
      <div class="case-image-group-row">
        <img src="assets/images/projects/graphic-design/kumo/Dieline/soapGREENTEA Dieline-01.png" alt="Green Tea Soap Wrapper dieline" />
        <img src="assets/images/projects/graphic-design/kumo/Dieline/soapGREENTEA Dieline-02.png" alt="Green Tea Soap Wrapper dieline texture" />
      </div>
      <figcaption>Green Tea Soap Wrapper</figcaption>
    </figure>

    <figure class="case-image-group">
      <div class="case-image-group-row">
        <img src="assets/images/projects/graphic-design/kumo/Dieline/soapTANSY Dieline-01.png" alt="Blue Tansy Soap Wrapper dieline" />
        <img src="assets/images/projects/graphic-design/kumo/Dieline/soapTANSY Dieline-02.png" alt="Blue Tansy Soap Wrapper dieline texture" />
      </div>
      <figcaption>Blue Tansy Soap Wrapper</figcaption>
    </figure>

    <figure class="case-image-group">
      <div class="case-image-group-row">
        <img src="assets/images/projects/graphic-design/kumo/Dieline/Bag Dieline-01.png" alt="Healing Salts Bag dieline" />
        <img src="assets/images/projects/graphic-design/kumo/Dieline/Bag Dieline-02.png" alt="Healing Salts Bag dieline texture" />
      </div>
      <figcaption>Healing Salts Bag Outside and Inside</figcaption>
    </figure>

    <figure class="case-image-group">
      <div class="case-image-group-row">
        <img src="assets/images/projects/graphic-design/kumo/Dieline/Bottle Dieline-01.png" alt="Bubble Bath Bottle dieline" />
        <img src="assets/images/projects/graphic-design/kumo/Dieline/Bottle Dieline-02.png" alt="Bubble Bath Bottle dieline texture" />
      </div>
      <figcaption>Bubble Bath Bottle Outside and Inside</figcaption>
    </figure>

    <h2 class="case-heading">Final Design</h2>
    <div class="case-gallery">
      <img src="assets/images/projects/graphic-design/kumo/Kumo_Box.jpg" alt="Kumo final packaging photography — box" />
      <img src="assets/images/projects/graphic-design/kumo/Kumo_OpenedBox.jpg" alt="Kumo final packaging photography — opened box" />
      <img src="assets/images/projects/graphic-design/kumo/Kumo_BarSoap.jpg" alt="Kumo final packaging photography — bar soap" />
      <img src="assets/images/projects/graphic-design/kumo/Kumo_bag.jpg" alt="Kumo final packaging photography — healing salts bag" />
      <img src="assets/images/projects/graphic-design/kumo/Kumo_bottle2.jpg" alt="Kumo final packaging photography — bottle" />
      <img src="assets/images/projects/graphic-design/kumo/Kumo_bottle.jpg" alt="Kumo final packaging photography — bottle" />
    </div>
  `,

  Surge: `
    <p class="case-text">
      SURGE, created in a packaging design course, is an energy drink sub branded for the Gatorade company, that focuses on having a clean list of ingredients while providing the same benefits of other energy drinks. After thorough research of competing brands and some consumer profiling, an early design was made, followed by a refined design and a final design. In accordance to the given stimulus image, the name SURGE was formed to symbolize a "surge of power or energy." The concept board also shows the use of bold colors and abstract works. Sticking to the ideas on the concept board, organic lines and vivid colors were used in the final design to symbolize energy waves, in relation to its name, and to enhance the aesthetic appeal of the packaging to the targeted consumers. The polished look and feel of the packaging also symbolizes the idea of a fully clean energy drink.
    </p>

    <p class="case-text case-text--note">
      *not affiliated, associated, authorized, endorsed by, or in any way officially connected with the Gatorade Company, or any of its subsidiaries or affiliates.
    </p>

    <h2 class="case-heading">Concept Board</h2>
    <div class="case-image">
      <img src="assets/images/projects/graphic-design/surge/CONCEPT-01.png" alt="Surge concept board — bold, colorful, abstract" />
    </div>
    
    <h2 class="case-heading">Final Design</h2>
    <div class="case-image">
      <img src="assets/images/projects/graphic-design/surge/THREEPOWER-01-Current View.png" alt="Surge — Blueberry Lemon, Grape Lime, and Blood Orange cans" />
    </div>

    

    <h2 class="case-heading">Flat Design</h2>

    <figure class="case-image-group">
      <div class="case-image-group-row">
        <img src="assets/images/projects/graphic-design/surge/BLGRAPELIME-m-Current View.png" alt="Surge Grape Lime can — flat design, front/side/back" />
      </div>
    </figure>

    <figure class="case-image-group">
      <div class="case-image-group-row">
        <img src="assets/images/projects/graphic-design/surge/BLUELEMON-Current View.png" alt="Surge Blueberry Lemon can — flat design, front/side/back" />
      </div>
    </figure>

    <figure class="case-image-group">
      <div class="case-image-group-row">
        <img src="assets/images/projects/graphic-design/surge/BLOODORANGE-Current View.png" alt="Surge Blood Orange can — flat design, front/side/back" />
      </div>
    </figure>

    <div class="case-gallery">
      <img src="assets/images/projects/graphic-design/surge/TABLETOP-01-Current View.png" alt="Surge cans tabletop photography" />
      <img src="assets/images/projects/graphic-design/surge/BASKETBALL-01-Current View.png" alt="Surge cans on a basketball court" />
      <img src="assets/images/projects/graphic-design/surge/SKATEBOARD-01-Current View.png" alt="Surge cans with a skateboard" />
    </div>
  `,

  "Orbit Gum": `
    <p class="case-text">
      An Orbit Gum x Seymour Chwast packaging, created in a packaging design course. Inspired by Chwast's colorful creativity, illustrative fluidity and vivid playfulness, nine sketches were made and three were chosen to finalize. Colors, flavors and patterns were made to be the focal point of these designs in order to create a more cohesive yet expressive brand.
    </p>

    <p class="case-text case-text--note">
      *not affiliated, associated, authorized, endorsed by, or in any way officially connected to the Wrigley Company, or any of its subsidiaries or affiliates.
    </p>

    <div class="case-image case-image--sm">
      <img src="assets/images/projects/graphic-design/orbit-gum/logo-01.jpg" alt="Orbit Gum — Seymour Chwast Edition logo" />
    </div>

    <h2 class="case-heading">Inspiration/Mood Board</h2>
    <div class="case-image">
      <img src="assets/images/projects/graphic-design/orbit-gum/moodboards/Seymour Chwast2.jpg" alt="Seymour Chwast and work samples inspiration moodboard" />
    </div>

    <h2 class="case-heading">Preliminary Ideation Sketches</h2>
    <div class="case-image">
      <img src="assets/images/projects/graphic-design/orbit-gum/Sketches-01.jpg" alt="Orbit Gum preliminary ideation sketches" />
    </div>

    <h2 class="case-heading">Three Final Designs</h2>
    <div class="case-image">
      <img src="assets/images/projects/graphic-design/orbit-gum/dielines/VECTORS-05.jpg" alt="Orbit Gum three final designs — front and back" />
    </div>

    <h2 class="case-heading">Dielines</h2>
    <div class="case-image">
      <img src="assets/images/projects/graphic-design/orbit-gum/dielines/DIELINES-01.jpg" alt="Orbit Gum dielines — Orange, Banana, and Blueberry Gum" />
    </div>

    <div class="case-image">
      <img src="assets/images/projects/graphic-design/orbit-gum/mockups/blueyelloworange.png" alt="Orbit Gum boxes — photography grid" />
    </div>

    <div class="case-trio">
      <div class="case-trio-item">
        <h2 class="case-heading">Blueberry</h2>
        <div class="case-image">
          <img src="assets/images/projects/graphic-design/orbit-gum/mockups/blueberry1.png" alt="Orbit Gum — Blueberry box" />
        </div>
      </div>

      <div class="case-trio-item">
        <h2 class="case-heading">Orange</h2>
        <div class="case-image">
          <img src="assets/images/projects/graphic-design/orbit-gum/mockups/ORANGE1.png" alt="Orbit Gum — Orange box" />
        </div>
      </div>

      <div class="case-trio-item">
        <h2 class="case-heading">Banana</h2>
        <div class="case-image">
          <img src="assets/images/projects/graphic-design/orbit-gum/mockups/lemonade1.png" alt="Orbit Gum — Banana box" />
        </div>
      </div>
    </div>

    <h2 class="case-heading">Advertisement</h2>
    <div class="case-image">
      <img src="assets/images/projects/graphic-design/orbit-gum/mockups/ORBIT AD.png" alt="Orbit Gum billboard advertisement — Blow the best bubbles" />
    </div>
  `,

  "Qatar Airways": `
    <p class="case-text">
      For a visual identity and narrative course, the goal was to reinvent the visual identity of any major company. Qatar Airways was selected. Therefore, their logo was contemporized and simplified, to create a more steady and versatile branding, while maintaining the originality of their identity. Through careful treatment, the introduction of the rebrand is presented in a brand identity guideline manual that echoes the new look.
    </p>

    <p class="case-text case-text--note">
      *not affiliated, associated, authorized, endorsed by, or in any way officially connected to the Qatar Airways Company or any of its subsidiaries or affiliates.
    </p>

    <div class="case-image case-image--md">
      <img src="assets/images/projects/graphic-design/qatar-airways/LOGO/LOGO.png" alt="Qatar Airways rebrand logotype" />
    </div>

    <p class="case-text">
      Since Qatar holds the largest collection of Islamic Art in the world, the Square Kufic concept was taken as a major inspiration in the reinvention of the company's identity. The graphic of the logo spells out 'Qatar' in arabic text. Like all square kufic art, the design is minimal and modern making it a versatile icon that can be seen and used in all sizes. As understood, the square kufic style is not too concerned with legibility but rather the pattern and the underlying message, and can only be limited by one's creativity. It is meant to be clever, creative and innovative, much like the airline itself.
    </p>

    <p class="case-text">
      The typeface used is <strong>Gill Sans</strong>, a sans serif typeface chosen for its classic simplicity and legibility. Gill Sans semibold is used for the word 'Qatar' and Gill Sans Regular for the word 'Airways.' A considerable difference in size is applied to establish a sense of hierarchy, especially when logo is to be applied in black and white.
    </p>

    <p class="case-text">
      Without taking too much away from their current branding, the colors chosen are similar to their previous logo which are <strong>Qatar Red</strong> and <strong>Slate Grey</strong>. The Qatar Red is used in honor of the Qatari flag, while the Slate Grey gives a light and airy feel that is appropriate for an airline and is used to further establish a sense of hierarchy in the logo when it is to be applied in color.
    </p>

    <h2 class="case-heading">Stationery</h2>
    <div class="case-image">
      <img src="assets/images/projects/graphic-design/qatar-airways/CARD-BOTH.png" alt="Qatar Airways business cards" />
    </div>

    <figure class="case-image-group">
      <div class="case-image-group-row">
        <img src="assets/images/projects/graphic-design/qatar-airways/CARD-Z.png" alt="Qatar Airways business card close-up" />
        <img src="assets/images/projects/graphic-design/qatar-airways/LETTERHEAD-Z.png" alt="Qatar Airways letterhead pattern close-up" />
      </div>
    </figure>

    <div class="case-image">
      <img src="assets/images/projects/graphic-design/qatar-airways/LETTERHEAD-G.png" alt="Qatar Airways letterhead" />
    </div>

    <div class="case-image">
      <img src="assets/images/projects/graphic-design/qatar-airways/envelope.png" alt="Qatar Airways envelopes" />
    </div>

    <figure class="case-image-group">
      <div class="case-image-group-row">
        <img src="assets/images/projects/graphic-design/qatar-airways/ENVELOPE-G.png" alt="Qatar Airways envelope close-up" />
        <img src="assets/images/projects/graphic-design/qatar-airways/TICKET-Z.png" alt="Qatar Airways boarding pass close-up" />
      </div>
    </figure>

    <div class="case-image">
      <img src="assets/images/projects/graphic-design/qatar-airways/TICKET-G.png" alt="Qatar Airways boarding pass" />
    </div>

    <div class="case-image">
      <img src="assets/images/projects/graphic-design/qatar-airways/WEB-R.png" alt="Qatar Airways website mockup" />
    </div>

    <h2 class="case-heading">Visual Identity</h2>
    <div class="case-image">
      <img src="assets/images/projects/graphic-design/qatar-airways/COVER.png" alt="Qatar Airways brand identity guideline cover" />
    </div>

    <div class="case-image">
      <img src="assets/images/projects/graphic-design/qatar-airways/SPREAD-01-\`.png" alt="Qatar Airways guideline spread — The Brand" />
    </div>

    <figure class="case-image-group">
      <div class="case-image-group-row">
        <img src="assets/images/projects/graphic-design/qatar-airways/SPREAD-04.png" alt="Qatar Airways guideline spread — About Us" />
        <img src="assets/images/projects/graphic-design/qatar-airways/SPREAD-03.png" alt="Qatar Airways guideline spread — Secondary Graphic" />
      </div>
    </figure>

    <div class="case-image">
      <img src="assets/images/projects/graphic-design/qatar-airways/SPREAD-02.png" alt="Qatar Airways guideline spread — Imagery" />
    </div>
  `,

  "Qatar Airways x MIA": `
    <p class="case-text">
      A continuation of the reinvention of the Qatar Airways' logo, an event was created and one of the major inspirations of the rebrand of the company, the Museum of Islamic Art in Doha, Qatar. A media presentation was created and designed along with posters, standees, and name badges to be used as advertising and marketing for the launching and during the event. The collaterals designed were inspired by the clean, minimal and geometrical look the new Qatar Airways logo offers.
    </p>

    <h2 class="case-heading">Posters</h2>
    <div class="case-image">
      <img src="assets/images/projects/graphic-design/qatar-airways-x-mia/ori.png" alt="Islamic Arts Festival 2019 poster" />
    </div>

    <figure class="case-image-group">
      <div class="case-image-group-row">
        <img src="assets/images/projects/graphic-design/qatar-airways-x-mia/blue.png" alt="Islamic Arts Festival 2019 poster — blue" />
        <img src="assets/images/projects/graphic-design/qatar-airways-x-mia/green.png" alt="Islamic Arts Festival 2019 poster — green" />
      </div>
    </figure>

    <h2 class="case-heading">Name Badges</h2>
    <figure class="case-image-group">
      <div class="case-image-group-row">
        <img src="assets/images/projects/graphic-design/qatar-airways-x-mia/ID blue.png" alt="Islamic Arts Festival staff name badge — blue" />
        <img src="assets/images/projects/graphic-design/qatar-airways-x-mia/ID green.png" alt="Islamic Arts Festival staff name badge — green" />
      </div>
    </figure>

    <div class="case-image">
      <img src="assets/images/projects/graphic-design/qatar-airways-x-mia/ID ori.png" alt="Islamic Arts Festival staff name badge" />
    </div>

    <h2 class="case-heading">Standees</h2>
    <div class="case-image">
      <img src="assets/images/projects/graphic-design/qatar-airways-x-mia/ORI-CROPPED.png" alt="Islamic Arts Festival 2019 standee" />
    </div>

    <figure class="case-image-group">
      <div class="case-image-group-row">
        <img src="assets/images/projects/graphic-design/qatar-airways-x-mia/2.png" alt="Islamic Arts Festival 2019 standee — blue" />
        <img src="assets/images/projects/graphic-design/qatar-airways-x-mia/1.png" alt="Islamic Arts Festival 2019 standee — green" />
      </div>
    </figure>

    <h2 class="case-heading">Facebook Banner</h2>
    <div class="case-image">
      <img src="assets/images/projects/graphic-design/qatar-airways-x-mia/iMac Pro.png" alt="Islamic Arts Festival 2019 Facebook banner mockup" />
    </div>
  `,

  Kreasi: `
    <p class="case-text">
      KREASI or 'Creations,' is an art magazine made to feature up-and-coming Malaysian artists and creators. It features full-length interviews with five different creators, each differing from one another in terms of skill and experience, accompanied by expressive photography, illustrations and art pieces. The purpose of KREASI is to bring light to the art scene of our vibrant country, Malaysia, and to inspire all artists to continue creating with good passion and vigor.
    </p>

    <p class="case-text case-text--note">
      *cover art by Khiddir Baharudin is @kidebaharudin on instagram.
    </p>

    <div class="case-image case-image--md">
      <img src="assets/images/projects/graphic-design/kreasi/001.jpg" alt="Kreasi — a Malaysian art magazine, cover" />
    </div>

    <div class="case-image">
      <img src="assets/images/projects/graphic-design/kreasi/5.jpg" alt="Kreasi magazine spread — cover art and title page" />
    </div>

    <div class="case-image">
      <img src="assets/images/projects/graphic-design/kreasi/6.jpg" alt="Kreasi magazine — cover art detail" />
    </div>

    <div class="case-image">
      <img src="assets/images/projects/graphic-design/kreasi/7.jpg" alt="Kreasi magazine — interview spread with Nizar Sulaiman" />
    </div>

    <div class="case-image">
      <img src="assets/images/projects/graphic-design/kreasi/9.jpg" alt="Kreasi magazine — interview spread illustration detail" />
    </div>
  `,

  "Yogurt Square": `
    <p class="case-text">
      Yogurt Square is a small and friendly neighborhood business located in Lincoln Square, Chicago. For a business so fun, healthy and colorful, their current logo seemed non-professional and lacked memorability. Therefore, the Yogurt Square logo was chosen to redesign and to modernize for a visual identity and narrative course.
    </p>

    <p class="case-text">
      Since their target consumers are mostly the youth, a variety of colors and a pictorial element were incorporated to create a more illustrious and attractive design. The colors symbolize the numerous flavors and toppings they offer and a geometric typeface was chosen in accordance to the 'square' in their name. A secondary logo was also created using just one color, for their convenience, whenever necessary. The secondary color chosen was a bright green to highlight the healthy elements frozen yogurt offers. The pictorial element could also be used as a defining element whenever necessary.
    </p>

    <p class="case-text">
      The process for this redesign included brand research and some initial sketches which were narrowed to three different logo ideas. Two refined designs were chosen and eventually one final design, which can be seen below.
    </p>

    <p class="case-text case-text--note">
      *not affiliated, associated, authorized, endorsed by, or in any way officially connected to the Yogurt Square or any of its subsidiaries or affiliates.
    </p>

    <div class="case-image">
      <img src="assets/images/projects/graphic-design/yogurt-square/CUP-01.png" alt="Yogurt Square frozen yogurt cup" />
    </div>

    <div class="case-image">
      <img src="assets/images/projects/graphic-design/yogurt-square/cup-02.png" alt="Yogurt Square frozen yogurt cups — front and bottom" />
    </div>

    <div class="case-image">
      <img src="assets/images/projects/graphic-design/yogurt-square/LETTERHEAD-01.png" alt="Yogurt Square letterhead" />
    </div>

    <div class="case-image">
      <img src="assets/images/projects/graphic-design/yogurt-square/LETTERHEAD-03.png" alt="Yogurt Square letterhead detail" />
    </div>

    <div class="case-image">
      <img src="assets/images/projects/graphic-design/yogurt-square/CARD-01.png" alt="Yogurt Square business cards" />
    </div>

    <div class="case-image">
      <img src="assets/images/projects/graphic-design/yogurt-square/WEB.gif" alt="Yogurt Square website mockup" />
    </div>
  `,

  "Geisel After Dark": `
    <p class="case-text">
      Incorporating three different display style typefaces with artwork to create a captivating, imaginative and legible event poster for a Typography course.
    </p>

    <div class="case-image case-image--md">
      <img src="assets/images/projects/graphic-design/geisel-after-dark/Geisel MOCKUP1.jpg" alt="Geisel After Dark event poster mockup" />
    </div>

    <div class="case-image">
      <img src="assets/images/projects/graphic-design/geisel-after-dark/v3-2.jpg" alt="Geisel After Dark poster — title and event details" />
    </div>

    <div class="case-image">
      <img src="assets/images/projects/graphic-design/geisel-after-dark/v5.jpg" alt="Geisel After Dark poster — moon and library illustration detail" />
    </div>
  `,

  Meatloaf: `
    <p class="case-text">
A traditional hand-drawn animation exploring fragility, resilience and the inevitable nothingness. Created on paper and pencil with a light-box and camera. Clipped together on Premiere Pro. </p>

    <div class="case-video">
      <video src="assets/images/projects/motion/Traditional/qk_final.mp4" controls playsinline></video>
    </div>
  `,
  "Life vs Death": `
    <p class="case-text">
A short pixel animation conceptualising the contrast of Life vs Death.<br>Made with Adobe Illustrator & After Effects.    </p>
</p>


    <div class="case-video">
      <video src="assets/images/projects/motion/lifevsdeath/life_vs_death.mp4" controls playsinline></video>
    </div>
  `,

  "Digital 2D": `
    <p class="case-text">
A collection of digital animations created as personal creative explorations. Made with procreate.    </p>

    <div class="case-gallery">
      <img src="assets/images/projects/motion/Digital-2d/TwitchIntro.GIF" alt="Animated title card — a glowing door marked ON AIR" />
      <img src="assets/images/projects/motion/Digital-2d/IMG_0837.GIF" alt="Animated illustration — a robotic arm pointing, activating a glowing ring" />
    </div>

    <figure class="case-image-group" style="margin-top: 24px">
      <div class="case-image-group-row">
        <img src="assets/images/projects/motion/Digital-2d/IMG_0839.GIF" alt="Animated character illustration — a cat-eared, blue-haired character sitting in a chair" />
        <img src="assets/images/projects/motion/Digital-2d/Comp-1.gif" alt="Animated illustration — a glowing face silhouette emerging from darkness" />
      </div>
    </figure>
  `,

  "Respond.io Yearly Recaps": `
    <p class="case-text">
Yearly recap videos created for Respond.io, featured as the highlight video on the company’s YouTube channel and shared by the Sales team with prospective and existing clients to showcase key features in a clear and engaging way. Each video was fully storyboarded, illustrated and animated by Qasryna. Created using Figma, Adobe Illustrator and Adobe After Effects.</p>

    <h2 class="case-heading">Pitch Video 2026</h2>
    <div class="case-embed">
      <iframe src="https://www.youtube.com/embed/-5C9R07eToc?rel=0&modestbranding=1&iv_load_policy=3" title="Pitch Video 2026" allowfullscreen></iframe>
    </div>

    <h2 class="case-heading">Retargeting Ad 2025</h2>
    <div class="case-video">
      <video src="assets/images/projects/motion/Company Yearly Recaps/Retargeting_Ad_2025/Animation _ Retargeting Ad Final Version-web.mp4" controls playsinline></video>
    </div>

    <h2 class="case-heading">Pocket Demo 2024</h2>
    <div class="case-video">
      <video src="assets/images/projects/motion/Company Yearly Recaps/Pocket_demo_2024/Animation _ Pocket Demo Final-web.mp4" controls playsinline></video>
    </div>

    
  `,

  "Auguries of Innocence": `
    <p class="case-text">
A short motion visualisation of William Blake’s Auguries of Innocence poem. <br>Made with Adobe Illustrator & After Effects.</p>

    <div class="case-video">
      <video src="assets/images/projects/motion/Auguries of innocence/Auguries of Innocence.mp4" controls playsinline></video>
    </div>
  `,

  "Respond.io Platform GIFs": `
    <p class="case-text">
      A selection of short GIFs and Lottie animations created for Respond.io’s feature releases. These animations were integrated into the platform as feature announcements. Created using Figma, After Effects and Lottie. </p>

    <p class="case-text case-text--note">
*Featured here is a small selection from a much larger collection produced over time.    </p>

    <div class="case-masonry">
      <video src="assets/images/projects/motion/respondio-platform-gifs/AI to Human.mp4" width="1200" height="674" autoplay muted loop playsinline></video>
      <video src="assets/images/projects/motion/respondio-platform-gifs/Connect Channels 03.mp4" width="400" height="400" autoplay muted loop playsinline></video>
      <video src="assets/images/projects/motion/respondio-platform-gifs/http.mp4" width="1200" height="674" autoplay muted loop playsinline></video>
      <video src="assets/images/projects/motion/respondio-platform-gifs/Paid Call Features.mp4" width="2000" height="1000" autoplay muted loop playsinline></video>
      <video src="assets/images/projects/motion/respondio-platform-gifs/WA Carousel Template.mp4" width="1200" height="674" autoplay muted loop playsinline></video>
      <video src="assets/images/projects/motion/respondio-platform-gifs/Track Customer Source.mp4" width="1920" height="1080" autoplay muted loop playsinline></video>
      <img src="assets/images/projects/motion/respondio-platform-gifs/AI Agent Ads + Assignment.gif" width="960" height="539" alt="AI Agent Ads and Assignment feature animation" />
    </div>
  `,
};
