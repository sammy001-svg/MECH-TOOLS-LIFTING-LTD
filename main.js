import "./style.css";

const app = document.querySelector("#app");

// App Shell (Navigation & Footer)
const appShell = `
  <header class="header">
    <nav class="nav container">
      <div class="logo">
        <span class="logo-accent">BENEDIC</span>TECH TOOL LIFTING
      </div>
      <ul class="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about-us">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#contact-page">Contact</a></li>
        <li><a href="#" id="open-quote-modal" class="btn btn-primary">Get a Quote</a></li>
      </ul>
      <button class="hamburger" id="hamburger-btn" aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  </header>
  <div id="content"></div>
  <footer class="footer">
    <div class="container footer-grid">
      <div class="footer-brand">
        <div class="logo">
          <span class="logo-accent">BENEDIC</span>TECH TOOL LIFTING
        </div>
        <p class="footer-tagline">Precision Lifting. Proven Reliability. Over a decade of industrial excellence in heavy lifting, recovery, and transport solutions.</p>
        <div class="social-links">
          <a href="https://www.facebook.com/share/1CmeQE36Gh/" target="_blank" rel="noopener noreferrer" class="social-icon">FB</a>
          <a href="https://www.instagram.com/benedict_logistics_tech?igsh=MTVsbHQzaHR5a2JmNA==" target="_blank" rel="noopener noreferrer" class="social-icon">IG</a>
          <a href="#" class="social-icon">LI</a>
          <a href="https://vm.tiktok.com/ZS984AfXnSbPT-w0Pk2/" target="_blank" rel="noopener noreferrer" class="social-icon">TT</a>
        </div>
      </div>
      
      <div class="footer-links">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about-us">About Us</a></li>
          <li><a href="#services">Our Services</a></li>
          <li><a href="#gallery">Project Gallery</a></li>
          <li><a href="#contact">Get a Quote</a></li>
        </ul>
      </div>

      <div class="footer-services">
        <h4>Our Services</h4>
        <ul>
          <li><a href="#services">Heavy Lifting</a></li>
          <li><a href="#services">Crane Services</a></li>
          <li><a href="#services">Vehicle Recovery</a></li>
          <li><a href="#services">Machinery Transport</a></li>
          <li><a href="#services">Hydraulic Sales</a></li>
        </ul>
      </div>

      <div class="footer-contact">
        <h4>Contact Us</h4>
        <ul class="contact-list">
          <li>
            <span class="contact-icon">📍</span>
            <span>Nairobi, Kenya</span>
          </li>
          <li>
            <span class="contact-icon">📞</span>
            <span>0722 928 404 / 0733 460 296 / 0700 777 793</span>
          </li>
          <li>
            <span class="contact-icon">📧</span>
            <span>njongealvin@gmail.com</span>
          </li>
          <li>
            <span class="contact-icon">🕒</span>
            <span>24/7 Emergency Support</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container bottom-content">
        <p>&copy; 2026 BENEDICTECH TOOL LIFTING. All rights reserved.</p>
        <div class="bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
  <a href="#" id="floating-quote-btn" class="floating-btn">
    <span class="tooltip">Get a Quote</span>
    📞
  </a>
  <div id="modal" class="modal">
    <div class="modal-content">
      <span class="close-modal">&times;</span>
      <div id="modal-body"></div>
    </div>
  </div>
  <div id="quote-modal" class="quote-modal">
    <div class="quote-modal-overlay"></div>
    <div class="quote-modal-content">
      <button class="quote-modal-close">&times;</button>
      <div class="quote-modal-header">
        <h2>Request a <span class="text-accent">Free Quote</span></h2>
        <p>Fill out the form below and we'll get back to you within 24 hours.</p>
      </div>
      <form class="contact-form" id="quote-modal-form">
        <div class="form-row">
          <div class="form-group">
            <input type="text" placeholder="Full Name" required>
          </div>
          <div class="form-group">
            <input type="tel" placeholder="Phone Number">
          </div>
        </div>
        <div class="form-group">
          <input type="email" placeholder="Email Address" required>
        </div>
        <div class="form-group">
          <select required>
            <option value="" disabled selected>Select Service</option>
            <option>Heavy Lifting</option>
            <option>Crane Services</option>
            <option>Vehicle Recovery</option>
            <option>Equipment Transport</option>
            <option>Forklift Services</option>
            <option>Hydraulic Sales</option>
            <option>Other</option>
          </select>
        </div>
        <div class="form-group">
          <textarea placeholder="Describe your project..." rows="4" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary w-full">Send Request</button>
      </form>
      <div class="quote-modal-success" id="quote-modal-success" style="display:none;">
        <h3>✅ Request Received!</h3>
        <p>Our team will contact you within 24 hours.</p>
        <button class="btn btn-outline" id="quote-modal-reset" style="margin-top:1rem;">Send Another</button>
      </div>
    </div>
  </div>
`;

// Views
const HomeView = `
    <section class="hero-carousel">
      <div class="carousel-container">
        <div class="carousel-slide active" style="background-image: url('/images/WhatsApp%20Image%202026-03-01%20at%206.23.38%20PM.jpeg')">
          <div class="hero-overlay"></div>
          <div class="container hero-content">
            <h1>Strength. Speed. <br><span class="text-accent">Reliability.</span></h1>
            <p>Expert heavy lifting and crane services with a decade of industrial excellence in Nairobi, Kenya.</p>
            <div class="hero-btns">
              <a href="#services" class="btn btn-primary">Our Services</a>
              <a href="#contact" class="btn btn-outline">Contact Us</a>
            </div>
          </div>
        </div>
        <div class="carousel-slide" style="background-image: url('/images/WhatsApp%20Image%202026-03-01%20at%206.23.36%20PM.jpeg')">
          <div class="hero-overlay"></div>
          <div class="container hero-content">
            <h2 class="h1-style"><span class="text-white">24/7 Roadside</span> <br><span class="text-accent">Recovery.</span></h2>
            <p>Fast and reliable vehicle recovery for light and heavy-duty commercial fleets.</p>
            <div class="hero-btns">
              <a href="#services" class="btn btn-primary">Recovery Services</a>
              <a href="#contact" class="btn btn-outline">Emergency Call</a>
            </div>
          </div>
        </div>
        <div class="carousel-slide" style="background-image: url('/images/WhatsApp%20Image%202026-03-01%20at%206.23.38%20PM%20(2).jpeg')">
          <div class="hero-overlay"></div>
          <div class="container hero-content">
            <h2 class="h1-style"><span class="text-white">Precision</span> <br><span class="text-accent">Logistics.</span></h2>
            <p>Secure machinery and equipment transport with guaranteed safe delivery.</p>
            <div class="hero-btns">
              <a href="#services" class="btn btn-primary">Transport Solutions</a>
              <a href="#contact" class="btn btn-outline">Get Quote</a>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-dots"></div>
      <div class="carousel-progress animating"></div>
    </section>

    <section id="about-intro" class="about">
      <div class="container about-grid">
        <div class="about-content reveal">
          <span class="badge">A Decade of Excellence</span>
          <h2>BENEDICTECH TOOL LIFTING <br><span class="text-accent">Specialists.</span></h2>
          <p>Founded on the principles of safety and precision, BENEDICTECH TOOL LIFTING has grown into a premier heavy lifting and recovery partner over the last ten years. We specialize in navigating the most complex lifting challenges with a focus on minimal downtime and maximum safety.</p>
          
          <ul class="about-features">
            <li><span class="feat-icon">✅</span> <strong>Safety-First Culture:</strong> Zero-accident record across all sectors.</li>
            <li><span class="feat-icon">⚡</span> <strong>Rapid Response:</strong> 24/7 emergency recovery and support.</li>
            <li><span class="feat-icon">🏗️</span> <strong>Certified Expertise:</strong> Specialized LOLER and ISO certified operations.</li>
          </ul>

          <div class="about-stats-mini">
            <div class="stat-item">
              <span class="stat-num counter" data-target="10">0</span><span class="stat-num">+</span>
              <span class="stat-label">Years Experience</span>
            </div>
            <div class="stat-item">
              <span class="stat-num counter" data-target="100">0</span><span class="stat-num">%</span>
              <span class="stat-label">Safety Record</span>
            </div>
            <div class="stat-item">
              <span class="stat-num counter" data-target="24">0</span><span class="stat-num">/7</span>
              <span class="stat-label">Response</span>
            </div>
          </div>
          <a href="#about-us" class="btn btn-text">Read Our Full Story →</a>
        </div>
        <div class="about-image-frame reveal">
          <div class="experience-badge">
            <span class="eb-num">10+</span>
            <span class="eb-text">Years of Quality</span>
          </div>
          <img src="/images/WhatsApp%20Image%202026-03-01%20at%206.23.36%20PM%20(3).jpeg" alt="Industrial Specialists">
        </div>
      </div>
    </section>

    <section id="industries" class="industries">
      <div class="container">
        <div class="section-header reveal">
          <h2 class="section-title">Industries We <span class="text-accent">Serve</span></h2>
          <p>Tailored lifting and transport solutions for diverse industrial sectors.</p>
        </div>
        <div class="industries-grid">
          <div class="industry-item reveal">
            <div class="ind-icon">🏗️</div>
            <h4>Construction</h4>
            <p>Structural steel and site lifting.</p>
          </div>
          <div class="industry-item reveal">
            <div class="ind-icon">🏭</div>
            <h4>Industrial</h4>
            <p>Plant and machinery moves.</p>
          </div>
          <div class="industry-item reveal">
            <div class="ind-icon">📦</div>
            <h4>Logistics</h4>
            <p>Container and warehouse ops.</p>
          </div>
          <div class="industry-item reveal">
            <div class="ind-icon">🛡️</div>
            <h4>Commercial</h4>
            <p>Fleet recovery and transport.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="services" class="services container">
      <div class="section-header reveal">
        <h2 class="section-title">Our Services</h2>
        <p>Comprehensive solutions for construction, transport, and industrial sectors.</p>
      </div>
      <div class="services-grid">
        <div class="service-card reveal" data-service="heavy-lifting">
          <div class="service-img" style="background-image: url('/images/WhatsApp%20Image%202026-03-01%20at%206.23.38%20PM.jpeg')" role="img" aria-label="Heavy Lifting & Crane Services specializing in industrial recovery"></div>
          <div class="service-info">
            <h3>Heavy Lifting & Crane Services</h3>
            <p>Professional solutions for construction, industrial installations, and structural lifting.</p>
            <a href="#services" class="btn-text">View Details →</a>
          </div>
        </div>
        <div class="service-card reveal" data-service="recovery">
          <div class="service-img" style="background-image: url('/images/WhatsApp%20Image%202026-03-01%20at%206.23.38%20PM%20(1).jpeg')" role="img" aria-label="24/7 Vehicle Recovery & Breakdown assistance in Kenya"></div>
          <div class="service-info">
            <h3>Vehicle Recovery & Breakdown</h3>
            <p>Fast 24/7 roadside assistance for light and heavy-duty vehicles, and commercial fleets.</p>
            <a href="#services" class="btn-text">View Details →</a>
          </div>
        </div>
        <div class="service-card reveal" data-service="transport">
          <div class="service-img" style="background-image: url('/images/WhatsApp%20Image%202026-03-01%20at%206.23.38%20PM%20(2).jpeg')" role="img" aria-label="Machinery & Heavy Equipment Transport logistics"></div>
          <div class="service-info">
            <h3>Machinery & Equipment Transport</h3>
            <p>Secure transport for generators, containers, and heavy machinery with guaranteed delivery.</p>
            <a href="#services" class="btn-text">View Details →</a>
          </div>
        </div>
        <div class="service-card reveal" data-service="forklift">
          <div class="service-img" style="background-image: url('/images/WhatsApp%20Image%202026-03-01%20at%206.23.41%20PM%20(3).jpeg')" role="img" aria-label="Industrial Forklift Services for warehouse material handling"></div>
          <div class="service-info">
            <h3>Forklift Services</h3>
            <p>Reliable forklift solutions for warehouse operations and industrial material handling.</p>
            <a href="#services" class="btn-text">View Details →</a>
          </div>
        </div>
        <div class="service-card reveal" data-service="hydraulics">
          <div class="service-img" style="background-image: url('/images/WhatsApp%20Image%202026-03-01%20at%206.23.42%20PM.jpeg')" role="img" aria-label="Hydraulic Pumps & Quality Industrial Accessories sales"></div>
          <div class="service-info">
            <h3>Hydraulic Pumps & Accessories</h3>
            <p>Supplying quality hydraulic pumps and lifting accessories designed for durability.</p>
            <a href="#services" class="btn-text">View Details →</a>
          </div>
        </div>
      </div>
    </section>

    <section class="partners-marquee">
      <div class="container">
        <div class="marquee-track">
           <div class="marquee-item">BENEDICTECH PARTNER</div>
           <div class="marquee-item">INDUSTRIAL LEADER</div>
           <div class="marquee-item">SAFETY CERTIFIED</div>
           <div class="marquee-item">24/7 RESPONSE</div>
           <div class="marquee-item">BENEDICTECH PARTNER</div>
           <div class="marquee-item">INDUSTRIAL LEADER</div>
           <div class="marquee-item">SAFETY CERTIFIED</div>
           <div class="marquee-item">24/7 RESPONSE</div>
        </div>
      </div>
    </section>

    <section id="gallery" class="gallery container">
      <div class="section-header reveal">
        <h2 class="section-title">Project <span class="text-accent">Gallery</span></h2>
        <p>A showcase of our recent lifting, recovery, and transport projects.</p>
      </div>
      <div class="gallery-filters reveal">
        <button class="filter-btn active" data-filter="all">All Projects</button>
        <button class="filter-btn" data-filter="lifting">Lifting</button>
        <button class="filter-btn" data-filter="recovery">Recovery</button>
        <button class="filter-btn" data-filter="transport">Transport</button>
      </div>
      <div class="gallery-grid reveal">
        <div class="gallery-item" data-category="lifting">
          <img src="/images/WhatsApp%20Image%202026-03-01%20at%206.23.34%20PM.jpeg" alt="Precision structural lifting operation at an industrial plant">
          <div class="gallery-overlay">
            <h4>Structural Lifting</h4>
            <p>Industrial Plant Operations</p>
          </div>
        </div>
        <div class="gallery-item" data-category="recovery">
          <img src="/images/WhatsApp%20Image%202026-03-01%20at%206.23.38%20PM%20(1).jpeg" alt="Emergency nighttime vehicle recovery for a commercial fleet">
          <div class="gallery-overlay">
            <h4>Fleet Recovery</h4>
            <p>Nighttime Emergency Salvage</p>
          </div>
        </div>
        <div class="gallery-item" data-category="transport">
          <img src="/images/WhatsApp%20Image%202026-03-01%20at%206.23.39%20PM.jpeg" alt="Secure machinery transport with precision generator logistics">
          <div class="gallery-overlay">
            <h4>Static Plant Move</h4>
            <p>Precision Generator Logistics</p>
          </div>
        </div>
        <div class="gallery-item" data-category="recovery">
          <img src="/images/WhatsApp%20Image%202026-03-01%20at%206.23.36%20PM.jpeg" alt="24/7 roadside vehicle recovery and support service">
          <div class="gallery-overlay">
            <h4>Vehicle Recovery</h4>
            <p>24/7 Roadside support</p>
          </div>
        </div>
        <div class="gallery-item" data-category="transport">
          <img src="/images/WhatsApp%20Image%202026-03-01%20at%206.23.38%20PM.jpeg" alt="Heavy equipment transport for industrial logistics">
          <div class="gallery-overlay">
            <h4>Machinery Transport</h4>
            <p>Industrial logistics</p>
          </div>
        </div>
        <div class="gallery-item" data-category="lifting">
          <img src="/images/WhatsApp%20Image%202026-03-01%20at%206.23.35%20PM.jpeg" alt="Strategic equipment placement using precision lifting techniques">
          <div class="gallery-overlay">
            <h4>Precision Lifting</h4>
            <p>Equipment placement</p>
          </div>
        </div>
        <div class="gallery-item" data-category="recovery">
          <img src="/images/WhatsApp%20Image%202026-03-01%20at%206.23.37%20PM.jpeg" alt="Specialized heavy-duty recovery for breakdown services">
          <div class="gallery-overlay">
            <h4>Breakdown Service</h4>
            <p>Heavy duty recovery</p>
          </div>
        </div>
        <div class="gallery-item" data-category="transport">
          <img src="/images/WhatsApp%20Image%202026-03-01%20at%206.23.39%20PM.jpeg" alt="Transport Project">
          <div class="gallery-overlay">
            <h4>Logistics Solutions</h4>
            <p>Secure machinery delivery</p>
          </div>
        </div>
      </div>
    </section>

    <section id="fleet" class="fleet">
      <div class="container">
        <div class="section-header reveal">
          <h2 class="section-title">Our <span class="text-accent">Fleet</span></h2>
          <p>Equipped with state-of-the-art machinery to handle projects of any scale.</p>
        </div>
        <div class="fleet-grid">
          <div class="fleet-item reveal">
             <div class="fleet-icon">🏗️</div>
             <h4>Mobile Cranes</h4>
             <p>High-capacity cranes for complex industrial lifting.</p>
          </div>
          <div class="fleet-item reveal">
             <div class="fleet-icon">🚛</div>
             <h4>Recovery Trucks</h4>
             <p>Heavy-duty recovery units for trucks and commercial fleets.</p>
          </div>
          <div class="fleet-item reveal">
             <div class="fleet-icon">📦</div>
             <h4>Flatbed Trailers</h4>
             <p>Specialized transport for abnormal loads and generators.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="contact container">
      <div class="contact-card reveal">
        <div class="contact-info">
          <h2>Ready to <span class="text-accent">Lift?</span></h2>
          <p>Get a precise quote for your project within 24 hours.</p>
          <div class="contact-details">
            <div class="detail-item">
              <strong>Availability</strong>
              <span>24/7 Roadside & Recovery</span>
            </div>
            <div class="detail-item">
              <strong>Commitment</strong>
              <span>Safety, Precision, Satisfaction</span>
            </div>
          </div>
        </div>
        <div id="contact-form-container">
          <form class="contact-form" id="quote-form">
            <div class="form-group">
              <input type="text" placeholder="Full Name" required id="name">
            </div>
            <div class="form-group">
              <input type="email" placeholder="Email Address" required id="email">
            </div>
            <div class="form-group">
              <select required id="service">
                <option value="" disabled selected>Select Service</option>
                <option>Heavy Lifting</option>
                <option>Vehicle Recovery</option>
                <option>Equipment Transport</option>
                <option>Other</option>
              </select>
            </div>
            <div class="form-group">
              <textarea placeholder="Message" rows="4" required id="message"></textarea>
            </div>
            <button type="submit" class="btn btn-primary w-full">Request Quote</button>
          </form>
          <div class="success-message" id="form-success">
            <h3>Request Received!</h3>
            <p>Our team will contact you within 24 hours. For emergencies, please call our 24/7 line.</p>
            <button class="btn btn-outline" id="reset-form" style="margin-top: 1rem;">Send Another</button>
          </div>
        </div>
      </div>
    </section>
`;

const AboutView = `
    <section class="about-page-hero">
      <div class="container">
        <h1 class="reveal">About <span class="text-accent">BENEDICTECH TOOL LIFTING</span></h1>
        <p class="reveal">A Decade of Strength, Speed, and Unwavering Reliability.</p>
      </div>
    </section>

    <section class="about-story container reveal">
      <div class="about-grid">
        <div class="about-text">
          <span class="badge">Our Journey</span>
          <h2>Ten Years of <span class="text-accent">Proven Expertise.</span></h2>
          <p>BENEDICTECH TOOL LIFTING is a professional heavy lifting, transport, and recovery company with over a decade of industry experience. For ten years, we have delivered safe, efficient, and reliable solutions across construction, industrial, transport, and commercial sectors.</p>
          <p>What started as a specialized lifting firm has evolved into a 24/7 industrial logistics powerhouse. We are proud of our heritage and the reputation we've built for handling "the impossible" lifts with surgical precision.</p>
        </div>
        <div class="about-img-frame">
          <img src="/images/WhatsApp%20Image%202026-03-01%20at%206.23.38%20PM.jpeg" alt="BENEDICTECH specialists performing a complex industrial lift with surgical precision">
        </div>
      </div>
    </section>

    <section class="mission-vision container reveal">
      <div class="mv-grid">
        <div class="mv-card">
          <div class="mv-icon">🏗️</div>
          <h3>Our Mission</h3>
          <p>To provide high-quality lifting and recovery services that prioritize safety, precision, and customer satisfaction, ensuring our clients achieve their project goals with zero incidents and maximum efficiency.</p>
        </div>
        <div class="mv-card">
          <div class="mv-icon">👁️</div>
          <h3>Our Vision</h3>
          <p>To be the most trusted and sought-after industrial logistics and lifting solution provider in the region, recognized for our speed, reliability, and technical innovation.</p>
        </div>
      </div>
    </section>

    <section class="core-values reveal">
      <div class="container">
        <div class="section-header">
           <h2 class="section-title">Our Core <span class="text-accent">Values</span></h2>
        </div>
        <div class="values-grid">
          <div class="value-item">
            <h4>Safety First</h4>
            <p>Our commitment to safety is absolute. We operate with a zero-accident culture, ensuring every lift is meticulously planned and executed.</p>
          </div>
          <div class="value-item">
            <h4>Precision</h4>
            <p>In heavy lifting, precision is everything. Our skilled operators bring surgical accuracy to structural lifting and equipment placement.</p>
          </div>
          <div class="value-item">
            <h4>Integrity</h4>
            <p>We build lasting partnerships based on transparency, reliability, and ethical industrial practices.</p>
          </div>
          <div class="value-item">
            <h4>Speed</h4>
            <p>We understand the cost of downtime. Our 24/7 readiness ensures rapid response for recovery and critical project support.</p>
          </div>
        </div>
      </div>
    </section>
`;

const ServicesView = `
    <section class="services-page-hero">
      <div class="container">
        <h1 class="reveal">Our <span class="text-accent">Services</span></h1>
        <p class="reveal">Professional Industrial Solutions Tailored for Excellence.</p>
      </div>
    </section>

    <!-- 1. Heavy Lifting Operations -->
    <section class="service-feature reveal">
      <div class="container sf-grid">
        <div class="sf-content">
          <span class="badge">Lifting Excellence</span>
          <h2>Heavy Lifting <span class="text-accent">Operations</span></h2>
          <p>We specialize in complex heavy lifting operations across construction and industrial sectors. Our team utilizes advanced rigging techniques and high-capacity equipment to handle structural components with absolute precision.</p>
          <ul class="sf-highlights">
            <li>Surgical Precision Lifting</li>
            <li>Advanced Rigging Systems</li>
            <li>Industrial Plant Installations</li>
            <li>Site-Specific Risk Assessment</li>
          </ul>
        </div>
        <div class="sf-image-frame">
          <img src="/images/WhatsApp%20Image%202026-03-01%20at%206.23.34%20PM.jpeg" alt="Precision heavy lifting operation utilizing advanced rigging on a construction site">
        </div>
      </div>
    </section>

    <!-- 2. Crane Services -->
    <section class="service-feature sf-alt reveal">
      <div class="container sf-grid">
        <div class="sf-image-frame">
          <img src="/images/crane_installation.png" alt="Industrial crane installation and factory equipment fitting service in Nairobi">
        </div>
        <div class="sf-content">
          <span class="badge">Professional Rigging</span>
          <h2>Crane Services & <span class="text-accent">Installations</span></h2>
          <p>Expert crane services including mobile crane hire, site surveys, and specialized installations. We handle everything from factory crane fittings to large-scale construction crane setup.</p>
          <ul class="sf-highlights">
            <li>Factory Crane Installations</li>
            <li>Mobile Crane Hire</li>
            <li>Truck-Mounted Crane Fittings</li>
            <li>Certified Rigging Personnel</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 3. Motor Vehicle Recovery -->
    <section class="service-feature reveal">
      <div class="container sf-grid">
        <div class="sf-content">
          <span class="badge">Rapid Response</span>
          <h2>Motor Vehicle <span class="text-accent">Recovery</span></h2>
          <p>Reliable recovery services for light and heavy-duty vehicles. Our fleet is equipped to handle complex recoveries from road accidents and mechanical failures safely.</p>
          <ul class="sf-highlights">
            <li>Heavy-Duty Truck Recovery</li>
            <li>Off-Road Vehicle Salvage</li>
            <li>Commercial Fleet Towing</li>
            <li>Secure Impound Transport</li>
          </ul>
        </div>
        <div class="sf-image-frame">
          <img src="/images/truck_recovery_service.png" alt="Professional heavy-duty truck recovery and 24/7 roadside salvage operation">
        </div>
      </div>
    </section>

    <!-- 4. Breakdown Assistance -->
    <section class="service-feature sf-alt reveal">
      <div class="container sf-grid">
        <div class="sf-image-frame">
          <img src="/images/night_recovery.png" alt="Rapid 24/7 nighttime breakdown assistance for a commercial fleet in Kenya">
        </div>
        <div class="sf-content">
          <span class="badge">24/7 Support</span>
          <h2>Breakdown <span class="text-accent">Assistance</span></h2>
          <p>Roadside assistance for commercial fleets and private vehicles. Rapid response times minimize downtime and get your operations moving again quickly.</p>
          <ul class="sf-highlights">
            <li>24/7 Roadside Support</li>
            <li>On-Site Minor Repairs</li>
            <li>Fleet Maintenance Support</li>
            <li>Emergency Roadside Lighting</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 5. Forklift Services -->
    <section class="service-feature reveal">
      <div class="container sf-grid">
        <div class="sf-content">
          <span class="badge">Industrial Logistics</span>
          <h2>Forklift <span class="text-accent">Services</span></h2>
          <p>Professional forklift operations for warehouse logistics and industrial loading. Our certified operators ensure safe and efficient palletized movements and material handling.</p>
          <ul class="sf-highlights">
            <li>Certified Forklift Operators</li>
            <li>Warehouse Loading/Unloading</li>
            <li>Container Stuffing & Stripping</li>
            <li>Heavy Industrial Material Handling</li>
          </ul>
        </div>
        <div class="sf-image-frame">
          <img src="/images/forklift_warehouse.png" alt="Certified forklift operator handling industrial materials and warehouse logistics">
        </div>
      </div>
    </section>

    <!-- 6. Container Transport -->
    <section class="service-feature sf-alt reveal">
      <div class="container sf-grid">
        <div class="sf-image-frame">
          <img src="/images/WhatsApp%20Image%202026-03-01%20at%206.23.38%20PM%20(2).jpeg" alt="Secure sea container transport and industrial plant logistics infrastructure">
        </div>
        <div class="sf-content">
          <span class="badge">Logistics Excellence</span>
          <h2>Container <span class="text-accent">Transport</span></h2>
          <p>Secure and efficient transport of sea containers and specialized industrial units. We offer end-to-end logistical support for container movements across the region.</p>
          <ul class="sf-highlights">
            <li>Standard & Abnormal Load Transport</li>
            <li>Secure Container Logistics</li>
            <li>Generator & Static Plant Movment</li>
            <li>Real-Time Tracking Support</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 7. Hydraulic Sales -->
    <section class="service-feature reveal">
      <div class="container sf-grid">
        <div class="sf-content">
          <span class="badge">Equipment Sales</span>
          <h2>Hydraulic Pumps & <span class="text-accent">Lifting Sales</span></h2>
          <p>Authorized dealers of high-quality hydraulic pumps, lifting tackle, and industrial accessories. We provide certified equipment designed for demanding lifting projects.</p>
          <ul class="sf-highlights">
            <li>Hydraulic Pump Sales</li>
            <li>Certified Lifting Accessories</li>
            <li>Safety Inspection Services</li>
            <li>Lifting Tackle & Slings</li>
          </ul>
        </div>
        <div class="sf-image-frame">
          <img src="/images/hydraulics.png" alt="High-quality certified hydraulic pumps and lifting accessories available for industrial sale">
        </div>
      </div>
    </section>

    <section class="safety-showcase reveal">
      <div class="container">
        <div class="section-header">
           <span class="badge">Safety Standards</span>
           <h2>Certified for <span class="text-accent">Total Reliability</span></h2>
        </div>
        <div class="safety-grid-full">
           <div class="safety-item">
             <h3>ISO 9001</h3>
             <p>Quality management systems verified for industrial excellence.</p>
           </div>
           <div class="safety-item">
             <h3>LOLER Certified</h3>
             <p>Compliant with Lifting Operations and Lifting Equipment Regulations.</p>
           </div>
           <div class="safety-item">
             <h3>Fully Insured</h3>
             <p>Comprehensive public liability and professional indemnity cover.</p>
           </div>
        </div>
      </div>
    </section>

    <section class="service-cta reveal">
      <div class="container">
        <div class="cta-box">
          <h2>Need a Specialized <span class="text-accent">Solution?</span></h2>
          <p>Our engineers are ready to discuss your specific project requirements.</p>
          <a href="#contact" class="btn btn-primary">Request a Custom Quote</a>
        </div>
      </div>
    </section>
`;

const ContactView = `
    <section class="contact-page-hero">
      <div class="container">
        <h1 class="reveal">Get In <span class="text-accent">Touch</span></h1>
        <p class="reveal">We're available 24/7 for emergency support. Reach out for a quote or any inquiries.</p>
      </div>
    </section>

    <section class="contact-info-cards container reveal">
      <div class="info-cards-grid">
        <div class="info-card">
          <div class="info-card-icon">📞</div>
          <h4>Call Us</h4>
          <p>0722 928 404</p>
          <p>0733 460 296</p>
          <p>0700 777 793</p>
          <span class="info-card-label">24/7 Emergency Line</span>
        </div>
        <div class="info-card">
          <div class="info-card-icon">📧</div>
          <h4>Email Us</h4>
          <p>njongealvin@gmail.com</p>
          <span class="info-card-label">Response within 24hrs</span>
        </div>
        <div class="info-card">
          <div class="info-card-icon">📍</div>
          <h4>Visit Us</h4>
          <p>Nairobi, Kenya</p>
          <span class="info-card-label">Kenya</span>
        </div>
        <div class="info-card">
          <div class="info-card-icon">🕒</div>
          <h4>Working Hours</h4>
          <p>Mon - Sat: 7AM - 6PM</p>
          <span class="info-card-label">Emergency: 24/7</span>
        </div>
      </div>
    </section>

    <section class="contact-main container reveal">
      <div class="contact-main-grid">
        <div class="contact-main-info">
          <span class="badge">Let's Work Together</span>
          <h2>Request a <span class="text-accent">Free Quote</span></h2>
          <p>Whether you need heavy lifting, vehicle recovery, or machinery transport, our team is ready to provide a tailored solution for your project. Fill out the form and we'll get back to you within 24 hours.</p>
          <div class="contact-trust">
            <div class="trust-item">
              <span class="trust-icon">✅</span>
              <div>
                <strong>Free Estimates</strong>
                <p>No obligation quotes for all services.</p>
              </div>
            </div>
            <div class="trust-item">
              <span class="trust-icon">⚡</span>
              <div>
                <strong>Fast Response</strong>
                <p>We respond to all inquiries within 24 hours.</p>
              </div>
            </div>
            <div class="trust-item">
              <span class="trust-icon">🛡️</span>
              <div>
                <strong>Fully Insured</strong>
                <p>Comprehensive coverage on every project.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="contact-form-card">
          <form class="contact-form" id="quote-form">
            <div class="form-row">
              <div class="form-group">
                <input type="text" placeholder="Full Name" required id="name">
              </div>
              <div class="form-group">
                <input type="tel" placeholder="Phone Number" id="phone">
              </div>
            </div>
            <div class="form-group">
              <input type="email" placeholder="Email Address" required id="email">
            </div>
            <div class="form-group">
              <select required id="service">
                <option value="" disabled selected>Select Service</option>
                <option>Heavy Lifting</option>
                <option>Crane Services</option>
                <option>Vehicle Recovery</option>
                <option>Equipment Transport</option>
                <option>Forklift Services</option>
                <option>Hydraulic Sales</option>
                <option>Other</option>
              </select>
            </div>
            <div class="form-group">
              <textarea placeholder="Describe your project requirements..." rows="5" required id="message"></textarea>
            </div>
            <button type="submit" class="btn btn-primary w-full">Send Request</button>
          </form>
          <div class="success-message" id="form-success">
            <h3>Request Received!</h3>
            <p>Our team will contact you within 24 hours. For emergencies, call our 24/7 line.</p>
            <button class="btn btn-outline" id="reset-form" style="margin-top: 1rem;">Send Another</button>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-faq container reveal">
      <div class="section-header">
        <h2 class="section-title">Frequently Asked <span class="text-accent">Questions</span></h2>
      </div>
      <div class="faq-grid">
        <div class="faq-item">
          <h4>What areas do you cover?</h4>
          <p>We operate across Nairobi and the greater Kenya region. For long-distance projects, please contact us for a custom quote.</p>
        </div>
        <div class="faq-item">
          <h4>Do you offer emergency services?</h4>
          <p>Yes! Our recovery and breakdown services are available 24/7. Call our emergency line anytime for immediate assistance.</p>
        </div>
        <div class="faq-item">
          <h4>How quickly can I get a quote?</h4>
          <p>We typically respond to all quote requests within 24 hours. For urgent projects, call us directly for an immediate estimate.</p>
        </div>
        <div class="faq-item">
          <h4>Are your services insured?</h4>
          <p>Absolutely. All our operations are covered by comprehensive public liability and professional indemnity insurance.</p>
        </div>
      </div>
    </section>
`;

// Helper: Init Logic based on View
function initCounters() {
  const counters = document.querySelectorAll('.counter');
  const speed = 200;

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const inc = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target;
      }
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        updateCount();
        observer.unobserve(counter);
      }
    }, { threshold: 0.5 });

    observer.observe(counter);
  });
}

function initCarousel() {
  const carousel = document.querySelector('.hero-carousel');
  const slides = document.querySelectorAll('.carousel-slide');
  const dotsContainer = document.querySelector('.carousel-dots');
  const progress = document.querySelector('.carousel-progress');
  let currentSlide = 0;
  let carouselInterval;
  let isPaused = false;

  if (!slides.length) return;

  // Clear existing dots in case of route re-entry
  dotsContainer.innerHTML = '';

  // Create dots
  slides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll('.dot');

  function updateSlides() {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === currentSlide);
      if (dots[i]) dots[i].classList.toggle('active', i === currentSlide);
    });

    // Reset progress bar animation
    if (progress) {
      progress.classList.remove('animating');
      void progress.offsetWidth; // Trigger reflow
      if (!isPaused) progress.classList.add('animating');
    }
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlides();
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlides();
  }

  function goToSlide(n) {
    currentSlide = n;
    updateSlides();
    resetInterval();
  }

  function resetInterval() {
    clearInterval(carouselInterval);
    if (!isPaused) {
      carouselInterval = setInterval(nextSlide, 5000);
    }
  }


  // Pause on hover
  if (carousel) {
    carousel.addEventListener('mouseenter', () => {
      isPaused = true;
      clearInterval(carouselInterval);
      if (progress) progress.classList.remove('animating');
    });

    carousel.addEventListener('mouseleave', () => {
      isPaused = false;
      resetInterval();
      if (progress) progress.classList.add('animating');
    });
  }

  resetInterval();
}

function initAnimations() {
  const observerOptions = { threshold: 0.1 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function initModals() {
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  const closeBtn = document.querySelector('.close-modal');

  const serviceDetails = {
    'heavy-lifting': `
      <h2>Heavy Lifting Operations</h2>
      <p>Professional lifting solutions for construction, industrial installations, and structural lifting. Certified crane truck fitting and mobile lifting solutions.</p>
    `,
    'recovery': `
      <h2>Motor Vehicle Recovery</h2>
      <p>Fast 24/7 recovery for light and heavy-duty vehicles. Commercial fleet recovery and secure long-distance transportation.</p>
    `,
    'transport': `
      <h2>Machinery & Equipment Transport</h2>
      <p>Logistical solutions for abnormal loads, generators, and heavy industrial machinery with guaranteed timing.</p>
    `,
    'forklift': `
      <h2>Forklift Services</h2>
      <p>Expert forklift operations for warehouse logistics and industrial material handling.</p>
    `,
    'hydraulics': `
      <h2>Hydraulic Pumps & Accessories</h2>
      <p>Supply of high-durability hydraulic pumps and certified lifting accessories for heavy project usage.</p>
    `
  };

  document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', () => {
      const service = card.dataset.service;
      if (serviceDetails[service]) {
        modalBody.innerHTML = serviceDetails[service];
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (closeBtn) {
    closeBtn.onclick = () => {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    };
  }

  window.onclick = (e) => {
    if (e.target == modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  };
}

function initGallery() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      galleryItems.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

function initForm() {
  const form = document.getElementById('quote-form');
  const successMsg = document.getElementById('form-success');
  const resetBtn = document.getElementById('reset-form');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      form.style.display = 'none';
      successMsg.style.display = 'block';
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      form.style.display = 'grid';
      successMsg.style.display = 'none';
      form.reset();
    });
  }
}

// Router Initializer
function router() {
  const appElement = document.getElementById('app');
  if (appElement.innerHTML !== appShell) {
    appElement.innerHTML = appShell;
    initQuoteModal();
    initMobileNav();
  }
  
  const content = document.getElementById('content');
  const hash = window.location.hash || '#home';

  window.scrollTo(0, 0);

  if (hash === '#home' || hash.startsWith('#gallery') || hash.startsWith('#industries')) {
    content.innerHTML = HomeView;
    initCarousel();
    initCounters();
    initGallery();
    initModals();
    initForm();
    
    if (hash !== '#home' && hash.startsWith('#')) {
      setTimeout(() => {
        const target = document.querySelector(hash);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  } else if (hash === '#about-us' || hash === '#about') {
    content.innerHTML = AboutView;
  } else if (hash === '#services' || hash === '#services-page') {
    content.innerHTML = ServicesView;
  } else if (hash === '#contact-page' || hash === '#contact') {
    content.innerHTML = ContactView;
    initForm();
  } else {
    content.innerHTML = HomeView;
  }

  initAnimations();
}
function initMobileNav() {
  // Mobile menu is now always displayed directly in the header via CSS.
  // Toggle logic is no longer required.
}

function initQuoteModal() {
  const modal = document.getElementById('quote-modal');
  const openBtn = document.getElementById('open-quote-modal');
  const floatingBtn = document.getElementById('floating-quote-btn');
  const closeBtn = document.querySelector('.quote-modal-close');
  const overlay = document.querySelector('.quote-modal-overlay');
  const form = document.getElementById('quote-modal-form');
  const successMsg = document.getElementById('quote-modal-success');
  const resetBtn = document.getElementById('quote-modal-reset');

  function openModal(e) {
    e.preventDefault();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  if (openBtn) openBtn.addEventListener('click', openModal);
  if (floatingBtn) floatingBtn.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (overlay) overlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      form.style.display = 'none';
      successMsg.style.display = 'block';
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      form.style.display = 'grid';
      successMsg.style.display = 'none';
      form.reset();
    });
  }
}

window.addEventListener('hashchange', router);
router();
