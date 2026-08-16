import React, { useState, useMemo, useEffect } from 'react';

export interface ServiceDetail {
  title: string;
  category: string;
  subCategory?: string;
  description: string;
  explanation: string;
  deliverables: string[];
  process: string[];
  documents: string[];
  timeline: string;
  fees: string;
}

export const LEGAL_SERVICES_DATA: ServiceDetail[] = [
  // ==================================================
  // TRADEMARK SERVICES (11 ITEMS)
  // ==================================================
  {
    title: 'Trademark Search',
    category: 'INTELLECTUAL PROPERTY',
    subCategory: 'Trademark',
    description: 'Comprehensive availability search across all 45 classes of the Trademark Registry to evaluate registration feasibility and prevent opposition risk.',
    explanation: 'A trademark search is the foundation of any brand protection strategy. It involves checking database registries to verify if your proposed brand name, logo, or slogan conflicts with already registered or pending marks. A thorough phonetic and visual similarity search minimizes the risk of registry objections and costly opposition proceedings later.',
    deliverables: [
      'Comprehensive Search Report matching phonetics, spellings, and prefixes.',
      'Risk Classification Analysis (Low, Medium, High feasibility).',
      'Class Classification Guidance (selecting the right classes from classes 1-45).',
      'Legal opinion on absolute and relative grounds for refusal.'
    ],
    process: [
      'Keyword and brand name analysis.',
      'Registry database query across relevant classes.',
      'Phonetic and visual similarity screening.',
      'Final legal opinion and strategy formulation.'
    ],
    documents: [
      'Proposed brand name, logo, or slogan.',
      'Description of goods or services provided under the brand.',
      'Date of first commercial use (if already in use).'
    ],
    timeline: '24 to 48 Hours',
    fees: '₹1,500 + GST'
  },
  {
    title: 'Trademark Filing & Drafting',
    category: 'INTELLECTUAL PROPERTY',
    subCategory: 'Trademark',
    description: 'Drafting and filing Form TM-A with precise class classification, specifications, and user affidavits to secure early priority dates.',
    explanation: 'Trademark filing establishes your legal priority over a brand identifier. It involves drafting a formal application (Form TM-A) detailing the mark, the applicant, the goods/services class, and submitting it to the Intellectual Property Office of India. Securing an early filing date prevents competitors from registering similar marks.',
    deliverables: [
      'Drafted Form TM-A for review.',
      'Formal class descriptions matching international Nice classification.',
      'User Affidavit drafting (for establishing prior commercial usage).',
      'Official Trademark Application Receipt containing the Application Number.'
    ],
    process: [
      'Class selection and description formulation.',
      'Drafting the trademark application form.',
      'Executing the user affidavit (if applicable).',
      'Submission to the Trademark Registry portal and generating receipt.'
    ],
    documents: [
      'Logo in JPEG/PNG format (if registering a device mark).',
      'Power of Attorney (signed by the applicant).',
      'Incorporation certificate or MSME registration (for company filings).',
      'Proof of commercial usage (invoices, domain receipts, website screenshot).'
    ],
    timeline: '1 to 2 Business Days',
    fees: '₹4,500 (Govt. Fee for Startup/Individual) + Professional Fees'
  },
  {
    title: 'Trademark Objection',
    category: 'INTELLECTUAL PROPERTY',
    subCategory: 'Trademark',
    description: 'Drafting formal legal responses to examination reports and objections raised by the Trademark Registry under Sections 9 and 11.',
    explanation: 'Once a trademark is filed, the examiner audits it for compliance. If the examiner finds similar marks or generic terms, they issue an Examination Report with objections under Section 9 (absolute grounds like lack of distinctiveness) or Section 11 (relative grounds like similarity to existing marks). A precise, legally backed response is required within 30 days to keep the application active.',
    deliverables: [
      'Detailed legal analysis of the Examination Report.',
      'Drafted Reply to Trademark Objection citing relevant case laws and precedents.',
      'Compilation of user proof and brand popularity documents.',
      'Filing of response on the online government portal.'
    ],
    process: [
      'Analyzing the examiner\'s objections.',
      'Sourcing supporting case laws and registry precedents.',
      'Drafting the legal reply counter-arguing the similarity or descriptiveness.',
      'Filing the reply and updating the case docket.'
    ],
    documents: [
      'Copy of the Examination Report.',
      'Trademark application number.',
      'Affidavit of usage and historical invoices showing sales/brand traction.'
    ],
    timeline: '3 to 5 Business Days',
    fees: '₹3,500 + GST per response'
  },
  {
    title: 'Trademark Hearing',
    category: 'INTELLECTUAL PROPERTY',
    subCategory: 'Trademark',
    description: 'Strategic representation by licensed attorneys in show-cause hearing sessions before the Trademark Registry to overcome outstanding objections.',
    explanation: 'If the written reply to a trademark objection does not satisfy the examiner, they list the application for a show-cause hearing. A licensed trademark attorney must appear before the Registrar to present oral arguments, showcase evidence of brand distinctiveness, and argue why the mark should be accepted and advertised in the Journal.',
    deliverables: [
      'Case file preparation and compilation of oral arguments.',
      'Physical or virtual representation before the Trademark Registrar.',
      'Submission of additional evidence and written arguments.',
      'Post-hearing status report and follow-up.'
    ],
    process: [
      'Reviewing the case history and outstanding objections.',
      'Drafting detailed written submissions for the hearing.',
      'Appearing before the designated officer on the scheduled date.',
      'Presenting legal arguments and filing supporting proof.'
    ],
    documents: [
      'Hearing notice issued by the registry.',
      'Power of attorney.',
      'Physical prints of user evidence, brochures, invoices, and brand promotion.'
    ],
    timeline: 'Scheduled by the Registry (typically 3-6 months from response)',
    fees: '₹5,000 + GST per appearance'
  },
  {
    title: 'Trademark Opposition',
    category: 'INTELLECTUAL PROPERTY',
    subCategory: 'Trademark',
    description: 'Filing Notices of Opposition (Form TM-O) against third-party filings or defending your trademark against oppositions filed by competitors.',
    explanation: 'After acceptance, a trademark is advertised in the weekly Trademark Journal for a 4-month public opposition period. During this time, any third party can file a Notice of Opposition (Form TM-O) claiming the mark is too similar to theirs. We represent clients in both initiating oppositions to protect their brand and defending their marks against hostile oppositions.',
    deliverables: [
      'Drafting Notice of Opposition (TM-O) or Counter-Statement.',
      'Legal analysis of the opponent\'s grounds.',
      'Filing evidence in support of opposition/defense.',
      'Representation in opposition hearings.'
    ],
    process: [
      'Reviewing the advertised mark or opposition notice.',
      'Drafting the formal notice or counter-reply within statutory timelines.',
      'Filing proof of brand usage and notoriety.',
      'Attending final hearings before the tribunal.'
    ],
    documents: [
      'Journal advertisement copy or Opposition Notice.',
      'Detailed registration certificates of conflicting marks.',
      'Extensive proof of prior commercial use.'
    ],
    timeline: 'Ongoing (Subject to statutory reply periods)',
    fees: '₹7,500 + GST (Drafting and Filing)'
  },
  {
    title: 'Trademark Renewal',
    category: 'INTELLECTUAL PROPERTY',
    subCategory: 'Trademark',
    description: 'Managing timely renewals (Form TM-R) before the 10-year expiry window to maintain continuous ownership of your brand.',
    explanation: 'Trademarks in India are valid for 10 years from the date of application. To maintain continuous legal protection, a renewal application (Form TM-R) must be filed within 6 months prior to expiry. If missed, the mark can be renewed with a late fee within 6 months post-expiry, failing which it is removed from the register.',
    deliverables: [
      'Filing of Form TM-R for renewal.',
      'Tracking status until registry updates the validity date.',
      'Renewal certificate copy.',
      'Entry of updated dates into the corporate IP database.'
    ],
    process: [
      'Verifying the original registration details.',
      'Drafting the renewal petition.',
      'Paying the statutory renewal fee.',
      'Securing the updated registration status.'
    ],
    documents: [
      'Copy of original registration certificate.',
      'Power of attorney.',
      'Applicant identity proof.'
    ],
    timeline: '2 to 3 Business Days',
    fees: '₹9,000 (Govt. Fee) + Professional Fees'
  },
  {
    title: 'International Trademark (Madrid Protocol)',
    category: 'INTELLECTUAL PROPERTY',
    subCategory: 'Trademark',
    description: 'Filing international applications through the WIPO Madrid Protocol system to protect your brand across up to 130 member countries.',
    explanation: 'For brands expanding globally, the Madrid Protocol offers a streamlined way to secure trademark protection in over 120 member countries through a single international application filed through the Indian IP Office. This avoids having to hire separate local agents in every target country for the initial filing phase.',
    deliverables: [
      'Filing of WIPO International Application through the Indian IPO.',
      'Selection of target member countries.',
      'Advised pricing and fee calculation for individual contracting parties.',
      'Coordination with WIPO during formal examination.'
    ],
    process: [
      'Confirming base application/registration in India.',
      'Determining target countries and calculating country fees.',
      'Drafting and submitting the international application.',
      'Monitoring international registry updates.'
    ],
    documents: [
      'Details of the base Indian trademark application/registration.',
      'List of target countries.',
      'Company incorporation details.'
    ],
    timeline: '10 to 14 Days (Initial filing and transmission to WIPO)',
    fees: 'Varies by country (WIPO CHF Fees) + Professional Filing Fee'
  },
  {
    title: 'Trademark Watch & Monitoring',
    category: 'INTELLECTUAL PROPERTY',
    subCategory: 'Trademark',
    description: 'Continuous monitoring of the weekly Trademark Journal using automated alerts to identify and oppose deceptively similar marks.',
    explanation: 'Registering your trademark is only half the battle. You must actively defend it. Every week, the government publishes newly accepted trademarks. Our watch service screens these journals for deceptively similar or phonetic matches to your brand, giving you the opportunity to file oppositions before they get registered.',
    deliverables: [
      'Weekly screening reports of matching marks in the Journal.',
      'Legal advisory on potential infringement threat levels.',
      'Strategic recommendations on whether to oppose.'
    ],
    process: [
      'Setting up search alerts for client brand names and phonetics.',
      'Analyzing weekly Trademark Journal publications.',
      'Compiling warning briefs for client review.',
      'Preparing opposition letters where required.'
    ],
    documents: [
      'List of client active trademarks and categories.',
      'Contact details for sending weekly alert reports.'
    ],
    timeline: 'Recurring Monthly/Annual subscription',
    fees: '₹12,000 + GST / Year per brand'
  },
  {
    title: 'Trademark Litigation',
    category: 'INTELLECTUAL PROPERTY',
    subCategory: 'Trademark',
    description: 'Trademark Litigation support from our Trademark team, handled end-to-end as part of our Intellectual Property practice.',
    explanation: 'When a competitor uses an identical or deceptively similar brand name, logo, or packaging, it dilutes your brand equity. Trademark litigation involves filing civil suits in specialized Commercial Courts. We seek urgent ad-interim injunctions (stay orders) to halt the competitor\'s operations, search-and-seizure of fake goods, and commercial damages.',
    deliverables: [
      'Drafting Plaint, Injunction Applications, and supporting evidence.',
      'Obtaining urgent court-appointed local commissioners for raids.',
      'Court appearances and presenting arguments before Commercial judges.',
      'Securing ad-interim and final injunction orders.'
    ],
    process: [
      'Conducting pre-litigation investigation and test purchases.',
      'Issuing Cease & Desist notices.',
      'Filing the commercial lawsuit in the appropriate jurisdiction.',
      'Executing court search orders and seizing counterfeit stocks.'
    ],
    documents: [
      'Trademark registration certificate.',
      'Proof of infringer\'s activity (invoices, product samples, brochures).',
      'Financial charts showing brand revenue loss.'
    ],
    timeline: 'Varies (Urgent injunctions can be secured in 7-10 days)',
    fees: 'Case-specific hourly or milestone billing'
  },
  {
    title: 'Trademark Infringement Suits',
    category: 'INTELLECTUAL PROPERTY',
    subCategory: 'IP Litigation',
    description: 'Trademark Infringement Suits support from our IP Litigation team, handled end-to-end as part of our Intellectual Property practice.',
    explanation: 'If a third party violates your registered trademark rights, you can file a statutory trademark infringement suit. Unregistered marks rely on passing-off, whereas registered marks allow statutory infringement claims, making it easier to prove liability and secure immediate restraining orders and financial penalties.',
    deliverables: [
      'Infringement notice drafting.',
      'Lawsuit drafting and filing before commercial court chambers.',
      'Coordinating police/local commissioner raids on counterfeit units.',
      'Seeking damages and accounts of profits.'
    ],
    process: [
      'Verifying registration status and valid renewal dates.',
      'Gathering evidence of consumer confusion.',
      'Filing suit and moving application for ex-parte ad-interim relief.',
      'Presenting evidence at trial.'
    ],
    documents: [
      'Certified copy of the trademark registration entry.',
      'Comparative chart of original vs. infringing marks.',
      'Purchase receipts showing counterfeit transactions.'
    ],
    timeline: 'Urgent injunction phase: 7 to 15 Days',
    fees: 'Case-specific milestone billing'
  },
  {
    title: 'Trademark/Patent Renewals',
    category: 'INTELLECTUAL PROPERTY',
    subCategory: 'Trademark',
    description: 'Consolidated maintenance and fee payments for corporate intellectual property portfolios to prevent lapses in brand or patent protection.',
    explanation: 'Large businesses manage dozens of trademarks, patents, and designs across multiple countries. Keeping track of varying expiry dates, maintenance fees, and local representation requirements is highly complex. We provide centralized renewal management, ensuring you never lose a proprietary asset due to a missed deadline.',
    deliverables: [
      'Centralized tracking dashboard for all client IP assets.',
      'Automated renewal alerts starting 6 months before expiry.',
      'Filing and renewal compliance processing in multiple jurisdictions.',
      'Updated registry certificates.'
    ],
    process: [
      'Auditing the client\'s IP database.',
      'Setting up automated reminders and calendar alerts.',
      'Drafting renewal requests and coordinating fee payments.',
      'Updating registration databases post-registry approval.'
    ],
    documents: [
      'IP registration certificates.',
      'Corporate authorization documents.'
    ],
    timeline: 'Ongoing portfolio tracking',
    fees: 'Volume-based annual retainer'
  },

  // ==================================================
  // PATENT SERVICES (16 ITEMS)
  // ==================================================
  {
    title: 'Patentability Search',
    category: 'INTELLECTUAL PROPERTY',
    subCategory: 'Patent',
    description: 'Comprehensive novelty and inventive-step screening across global databases (WIPO, USPTO, EPO, IPO) and non-patent literature to verify patent feasibility.',
    explanation: 'A patentability search (or novelty search) determines if an invention is eligible for a patent. It involves searching global patent databases and technical journals to find "prior art"—any public information that describes a similar technology. This ensures the invention meets the statutory requirements of novelty, non-obviousness, and industrial applicability before spending resources on drafting.',
    deliverables: [
      'Detailed Patentability Search Report mapping prior art references.',
      'Inventive step and non-obviousness analysis.',
      'Filing feasibility rating (High, Moderate, Low risk).',
      'Claim mapping suggestions to bypass detected prior art.'
    ],
    process: [
      'Technical brainstorming and identifying invention keywords.',
      'Formulating search strings for database queries (Boolean/Classification).',
      'Screening patent and academic journal databases.',
      'Legal drafting of search report and strategizing specifications.'
    ],
    documents: [
      'Detailed description of the invention (Invention Disclosure Form).',
      'Diagrams, flowcharts, or system architectures (if applicable).',
      'Key technical features that differentiate it from existing solutions.'
    ],
    timeline: '3 to 5 Business Days',
    fees: '₹4,500 + GST'
  },
  {
    title: 'Patent Drafting & Specification',
    category: 'INTELLECTUAL PROPERTY',
    subCategory: 'Patent',
    description: 'Drafting high-precision provisional and complete specifications (Form 2) defining structural, functional, and legal claim scopes.',
    explanation: 'Patent drafting is the most critical step in patent protection. A patent document is both a technical description and a legal document. We draft provisional specifications (to secure an early priority date) or complete specifications (describing the complete working of the invention and containing the legal claims defining the boundary of exclusive rights).',
    deliverables: [
      'Drafted patent specification (Title, Field, Background, Summary, Description).',
      'Legally structured Claims sheet defining patent boundaries (for complete specs).',
      'Technical drawings and CAD configurations formatted to registry standards.',
      'Abstract and Summary definitions.'
    ],
    process: [
      'Technical review sessions with inventors/engineers.',
      'Drafting the detailed technical description of the system or process.',
      'Formulating independent and dependent legal claims.',
      'Refining patent drawings and system schematics.'
    ],
    documents: [
      'Finalized invention disclosure sheet.',
      'Annotated schematics or block diagrams.',
      'Inventor information and ownership transfer details.'
    ],
    timeline: '7 to 10 Business Days',
    fees: '₹12,000 + GST (Professional Drafting Fees)'
  },
  {
    title: 'Patent Filing & Submission',
    category: 'INTELLECTUAL PROPERTY',
    subCategory: 'Patent',
    description: 'Filing formal patent applications (Form 1, 2, 3, 5, 18) with the Patent Office to establish priority and secure patent pending status.',
    explanation: 'Patent filing involves submitting the drafted specification along with statutory declaration forms to the Patent Office. This sets your priority date and grants the legal designation of "Patent Pending." We manage the filing of national phase applications, divisional filings, and patents of addition.',
    deliverables: [
      'Filing of Form 1 (Application for Grant) and Form 2 (Specifications).',
      'Form 3 (Statement of Foreign Applications) and Form 5 (Declaration of Inventorship).',
      'Official Patent Application Receipt and allocation of Application Number.',
      'E-Filing verification checklist.'
    ],
    process: [
      'Assembling all signed statutory forms and powers of attorney.',
      'Uploading specifications, claims, and drawings to the IPO portal.',
      'Paying official filing fees based on entity status (Individual/Startup vs Large).',
      'Generating receipt and recording patent docket information.'
    ],
    documents: [
      'Signed Form 1, Form 3, and Form 5 declarations.',
      'Proof of Right (if filed by assignee/company).',
      'MSME or Startup certificate (for government fee concessions).'
    ],
    timeline: '1 to 2 Business Days',
    fees: '₹1,600 (Govt. Fee for Startup/Individual) + Professional Fees'
  },
  {
    title: 'Patent Examination & FER Response',
    category: 'INTELLECTUAL PROPERTY',
    subCategory: 'Patent',
    description: 'Analyzing First Examination Reports (FER) and drafting comprehensive technical arguments to overcome objections on novelty or inventiveness.',
    explanation: 'After filing, a request for examination (Form 18) is submitted. The patent examiner reviews the application and issues a First Examination Report (FER). The FER lists objections regarding patentability, prior art, or formatting. We draft technical and legal responses to counter these objections and amend claims if necessary to secure acceptance.',
    deliverables: [
      'Detailed legal and technical analysis of the examiner\'s objections.',
      'Drafted Written Response to First Examination Report (FER).',
      'Amended Claims sheet (to narrow scope and bypass objections).',
      'Portal filing confirmation.'
    ],
    process: [
      'Evaluating cited patent/non-patent prior art documents.',
      'Formulating technical arguments showing non-obviousness.',
      'Drafting legal response citing precedent cases.',
      'Filing response within the strict statutory timeline.'
    ],
    documents: [
      'Copy of the First Examination Report (FER).',
      'Original patent application specifications.',
      'Inventor comments on cited prior art similarities.'
    ],
    timeline: '5 to 7 Business Days',
    fees: '₹8,500 + GST per reply'
  },
  {
    title: 'Patent Hearing & Representation',
    category: 'INTELLECTUAL PROPERTY',
    subCategory: 'Patent',
    description: 'Strategic representation by registered patent agents in show-cause hearing sessions before the Controller to defend claim validity.',
    explanation: 'If the written FER response is not sufficient to satisfy the examiner, the Controller appoints a formal hearing. A registered patent agent or attorney must attend this hearing to present oral arguments, explain the technical features of the invention, and argue why the application should be granted.',
    deliverables: [
      'Detailed Hearing Submissions docket.',
      'Oral presentation and arguments before the patent examiner/controller.',
      'Written Submissions compiled post-hearing.',
      'Hearing results advisory report.'
    ],
    process: [
      'Reviewing the controller\'s hearing notice and outstanding objections.',
      'Drafting detailed technical representations.',
      'Appearing physically or virtually before the Patent Office tribunal.',
      'Filing formal written submissions within 15 days post-hearing.'
    ],
    documents: [
      'Hearing notice issued by the patent controller.',
      'Power of attorney (Form 26).',
      'Technical models, prototypes, or operational flow charts.'
    ],
    timeline: 'Scheduled by Patent Office (typically 2-4 months from notice)',
    fees: '₹8,000 + GST per hearing'
  },
  {
    title: 'Patent Opposition (Pre/Post-Grant)',
    category: 'INTELLECTUAL PROPERTY',
    subCategory: 'Patent',
    description: 'Filing pre-grant representations or post-grant oppositions to challenge third-party filings, or defending client patent grants.',
    explanation: 'Patent applications are published 18 months post-filing. Under Indian law, any person can file a Pre-Grant Opposition to challenge patentability before the patent is granted. Post-grant opposition can be filed by an interested party within 1 year of grant notification. We represent both challengers and patent holders in these adversarial proceedings.',
    deliverables: [
      'Drafted Notice of Opposition or Counter-Statement.',
      'Written evidence compilation and expert affidavits.',
      'Representation before the Opposition Board and Controller.',
      'Tribunal order copies and advisory.'
    ],
    process: [
      'Analyzing published specifications or opposition claims.',
      'Drafting formal legal objections citing section-specific grounds.',
      'Gathering expert opinions or scientific evidence.',
      'Appearing before opposition hearings.'
    ],
    documents: [
      'Published patent specification copy.',
      'Scientific journals or prior art proving lack of novelty.',
      'Expert technical reports.'
    ],
    timeline: 'Ongoing (docketed via registry timelines)',
    fees: '₹15,000 + GST (Initial filing/defense)'
  },
  {
    title: 'Patent Renewal & Annuities',
    category: 'INTELLECTUAL PROPERTY',
    subCategory: 'Patent',
    description: 'Managing patent annuity payments from the 3rd year onwards to keep the patent active for its statutory 20-year term.',
    explanation: 'To keep a granted patent active in India, annuity fees must be paid to the government annually. Fees start from the 3rd year from the filing date and increase progressively. If payments are missed, the patent lapses, throwing the technology into the public domain. We track and pay these annuities globally.',
    deliverables: [
      'Tracking of patent maintenance deadlines.',
      'Processing Form 15 for annuity submissions.',
      'Statutory government receipt copy.',
      'Consolidated renewal certificate logs.'
    ],
    process: [
      'Verifying patent grant dates and history.',
      'Preparing the statutory annuity forms.',
      'Depositing government fees on the IPO portal.',
      'Securing registry validity confirmation.'
    ],
    documents: [
      'Copy of Patent Grant Certificate.',
      'Power of attorney.',
      'Entity confirmation certificate (for startup fee tiers).'
    ],
    timeline: '2 to 3 Business Days',
    fees: 'Varies by patent year (Govt scale) + Professional fee'
  },
  {
    title: 'International Patent (PCT Application)',
    category: 'INTELLECTUAL PROPERTY',
    subCategory: 'Patent',
    description: 'Filing Patent Cooperation Treaty (PCT) international applications to reserve patent rights across 155+ member countries.',
    explanation: 'Protecting an invention globally is highly complex. The Patent Cooperation Treaty (PCT) provides a unified international application route. By filing a PCT application, you reserve the right to seek patents in up to 155 countries for 30/31 months from your initial priority date, allowing time to evaluate market viability before paying local country fees.',
    deliverables: [
      'Drafting and filing of WIPO PCT Request form.',
      'Submission to International Bureau (IB) or Receiving Office (RO/IN).',
      'International Search Report (ISR) analysis.',
      'Strategic advising on national phase entry points.'
    ],
    process: [
      'Establishing base Indian patent priority details.',
      'Drafting PCT compliant specifications and claims.',
      'Filing with the designated receiving office.',
      'Reviewing international examination comments.'
    ],
    documents: [
      'Base patent specification and drawings.',
      'Inventor details.',
      'Declaration of inventorship.'
    ],
    timeline: '10 to 15 Days (For PCT submission and transmission to WIPO)',
    fees: 'Govt & WIPO International fees (approx ₹35,000+) + Professional Fee'
  },
  {
    title: 'Patent Watch & Monitoring',
    category: 'INTELLECTUAL PROPERTY',
    subCategory: 'Patent',
    description: 'Continuous monitoring of published patent journals and competitor portfolios to detect conflicting technologies early.',
    explanation: 'Keep track of competitor innovations and identify potential patent infringements early. Our patent watch service monitors publications from patent registries in India and internationally, alerting you if a competitor files a patent that overlaps with your proprietary technology or design.',
    deliverables: [
      'Monthly search alerts matching selected technology keywords/classes.',
      'Competitor portfolio monitoring briefs.',
      'Detailed prior art alerts.',
      'Strategic recommendations on potential oppositions.'
    ],
    process: [
      'Setting up search alerts using patent classification codes (IPC/CPC).',
      'Reviewing weekly Patent Office Journal updates.',
      'Filtering relevant technical publications.',
      'Issuing alerts to client teams.'
    ],
    documents: [
      'Client product specifications or active patents.',
      'List of key competitors to monitor.'
    ],
    timeline: 'Monthly/Annual subscription',
    fees: '₹24,000 + GST / Year per domain'
  },
  {
    title: 'Patent Litigation',
    category: 'INTELLECTUAL PROPERTY',
    subCategory: 'Patent',
    description: 'Patent Litigation support from our Patent team, handled end-to-end as part of our Intellectual Property practice.',
    explanation: 'If a competitor is manufacturing, selling, or importing products that copy your patented invention, you can initiate patent litigation. This involves filing civil lawsuits in High Courts with jurisdiction. We seek permanent/temporary injunctions, search-and-seizure of manufacturing units, damages, and accounts of profits.',
    deliverables: [
      'Drafted of commercial patent suit plaint and applications.',
      'Obtaining expert technical affidavits to prove claim infringement.',
      'Court representation during injunction and trial hearings.',
      'Executing court search orders at infringing factories.'
    ],
    process: [
      'Conducting technical claim comparison (mapping client patent claims to infringing product features).',
      'Acquiring infringing product samples and test reports.',
      'Filing the commercial lawsuit in High Court Chambers.',
      'Attending trials and presenting expert witnesses.'
    ],
    documents: [
      'Patent grant certificate and original specification sheet.',
      'Claim chart mapping infringement points.',
      'Infringer product samples, manuals, or brochures.'
    ],
    timeline: 'Urgent injunction phase: 15 to 30 Days',
    fees: 'Case-specific hourly or milestone billing'
  },
  {
    title: 'Patent Infringement & Injunctions',
    category: 'INTELLECTUAL PROPERTY',
    subCategory: 'IP Litigation',
    description: 'Patent Infringement & Injunctions support from our IP Litigation team, handled end-to-end as part of our Intellectual Property practice.',
    explanation: 'Patent infringement suits protect your statutory exclusivity. By presenting a claim chart showing how every element of your independent claim is present in the competitor\'s product (doctrine of equivalents or literal infringement), you can block sales channels, secure factory closures, and enforce financial remedies and injunction stay orders.',
    deliverables: [
      'Cease & Desist legal notice drafting.',
      'Drafting and filing commercial patent infringement plaints.',
      'Moving urgent applications for ad-interim relief and asset attachments.',
      'Coordinating enforcement officers.'
    ],
    process: [
      'Technical analysis of the infringing item.',
      'Drafting claim-by-claim infringement comparative tables.',
      'Filing suit in commercial divisions.',
      'Managing evidence and expert trials.'
    ],
    documents: [
      'Certified copy of Patent Registry entry.',
      'Independent technical test reports.',
      'Proof of commercial loss or scale of infringement.'
    ],
    timeline: 'Urgent injunction phase: 15 to 30 Days',
    fees: 'Case-specific milestone billing'
  },
  {
    title: 'Freedom to Operate (FTO) Search',
    category: 'INTELLECTUAL PROPERTY',
    subCategory: 'Patent',
    description: 'Clearance searches to ensure your proposed product or process does not infringe active patents in target markets.',
    explanation: 'Before launching a new technology product or manufacturing process, it is critical to confirm you will not get sued for patent infringement. A Freedom to Operate (FTO) search identifies active patents in your target market that might overlap with your product, allowing you to design-around or secure licenses before launching.',
    deliverables: [
      'Comprehensive Freedom to Operate (FTO) Search Report.',
      'Risk categorization of active patents in target markets.',
      'Design-around suggestions to mitigate litigation threats.',
      'Formal legal clearance opinion signed by patent counsel.'
    ],
    process: [
      'Analyzing product features and system architectures.',
      'Formulating search strings covering product components.',
      'Screening active patents (filtering out lapsed/expired patents).',
      'Drafting clearance opinions.'
    ],
    documents: [
      'Detailed product specifications, blueprints, or source flows.',
      'Target markets list (e.g., India, US, EU).',
      'Functional descriptions.'
    ],
    timeline: '7 to 10 Business Days',
    fees: '₹8,500 + GST'
  },
  {
    title: 'Patent Commercialization & Licensing',
    category: 'INTELLECTUAL PROPERTY',
    subCategory: 'Patent',
    description: 'Drafting patent license agreements, transfer deeds, and technology transfer contracts to monetize patented assets.',
    explanation: 'Patents are valuable intangible business assets. You can monetize them by licensing them to third-party manufacturers in exchange for upfront fees and royalties, or selling them outright. We structure and draft patent licensing agreements, assignment deeds, and technology transfer contracts.',
    deliverables: [
      'Drafted Patent Licensing Agreement or Assignment Deed.',
      'Royalty structure and auditing terms formulation.',
      'Submissions to the Patent Office for registration of assignments.',
      'Negotiation briefs.'
    ],
    process: [
      'Determining valuation limits and royalty targets.',
      'Drafting the terms of usage (exclusive vs. non-exclusive, territorial limits).',
      'Assisting in client negotiations.',
      'Registering the assignment at the Patent Registry.'
    ],
    documents: [
      'Copy of granted patent details.',
      'Commercial terms sheet.',
      'Identity and corporate credentials of licensing parties.'
    ],
    timeline: '5 to 7 Business Days',
    fees: '₹10,000 + GST'
  },
  {
    title: 'Patent Prosecution',
    category: 'INTELLECTUAL PROPERTY',
    subCategory: 'Patent',
    description: 'End-to-end management of administrative patent application steps, from filing, publishing, examining, to final grant.',
    explanation: 'Patent prosecution refers to the administrative process of negotiating with the patent office to secure a patent grant. It includes drafting responses to objections, filing divisional applications, managing timelines, submitting proof of address changes, and handling all administrative compliance steps.',
    deliverables: [
      'Centralized docketing and deadline monitoring reports.',
      'Filing of divisional applications or patents of addition.',
      'Drafting formal responses to registry requirements.',
      'Updating registration databases.'
    ],
    process: [
      'Reviewing registry alerts and communications.',
      'Drafting procedural replies.',
      'Filing corrections or updates on the IPO portal.',
      'Tracking progress until final grant certificate issuance.'
    ],
    documents: [
      'Patent application docket history.',
      'Formal instructions for changes or amendments.'
    ],
    timeline: 'Ongoing prosecution tracking',
    fees: 'Retainer or transaction-based billing'
  },
  {
    title: 'Design Patent Filing',
    category: 'INTELLECTUAL PROPERTY',
    subCategory: 'Patent',
    description: 'Protecting the unique visual ornamental shape, pattern, configuration, or look of manufactured physical products.',
    explanation: 'Design patents protect the aesthetic design, shape, configuration, or ornament of a product rather than its technical functionality. This is vital for consumer products, automotive parts, furniture, and gadgets where visual look drives consumer choices.',
    deliverables: [
      'Comprehensive Design Search Report to check novelty.',
      'Prepared design sheets containing top, bottom, front, side, and isometric views.',
      'Filing of Form 1 under the Designs Act.',
      'Design registration certificate.'
    ],
    process: [
      'Taking high-definition photographs or drawing vectors of the product.',
      'Formulating the novelty statement and selecting design classes.',
      'Submitting application to the Kolkata Patent Office (Central Design Registry).',
      'Responding to registry examination reports.'
    ],
    documents: [
      'High-quality product images or CAD blueprints (JPEG/PNG format).',
      'Name, address, and nationality of applicant.',
      'Brief note on novel features of the shape/pattern.'
    ],
    timeline: '3 to 5 Days (Initial filing phase)',
    fees: '₹4,000 + GST'
  },
  {
    title: 'Patent Portfolio Management',
    category: 'INTELLECTUAL PROPERTY',
    subCategory: 'Patent',
    description: 'Auditing and managing corporate patent families, tracking international filings, and aligning patent assets with business goals.',
    explanation: 'Managing corporate patent portfolios requires careful tracking of priority claims, PCT entries, local country examinations, and renewals. We act as your outsourced IP department, managing your entire patent database, advising on under-utilized patents, and keeping your filings aligned with product roadmaps.',
    deliverables: [
      'Portfolio audit report analyzing active patents and pending filings.',
      'Competitor mapping and IP threat evaluations.',
      'Budget forecasts for global patent annuities.',
      'Centralized asset tracking dashboard.'
    ],
    process: [
      'Auditing corporate R&D records.',
      'Categorizing patents by technology family.',
      'Conducting periodic status reviews.',
      'Managing global IP counsel teams.'
    ],
    documents: [
      'Access to client patent databases or copies of grant certificates.',
      'Corporate product roadmaps.'
    ],
    timeline: 'Ongoing corporate tracking retainer',
    fees: 'Case-specific monthly retainer'
  },

  // ==================================================
  // COPYRIGHT SERVICES (8 ITEMS)
  // ==================================================
  {
    title: 'Copyright Search',
    category: 'INTELLECTUAL PROPERTY',
    subCategory: 'Copyright',
    description: 'Pre-filing search across the Copyright Registry databases to check for existing registrations and ownership history of creative works.',
    explanation: 'A copyright search is performed to determine if a similar creative, artistic, literary, or digital work has already been registered or claimed in the national database. This is a key pre-filing safety step that helps prevent registration objections, ownership disputes, and eventual copyright infringement claims from competitors.',
    deliverables: [
      'Detailed Copyright Search Report.',
      'Similarity rating database logs.',
      'Guidance on the category of work classification.',
      'Risk assessment for prospective publication.'
    ],
    process: [
      'Analyzing the client\'s creative work characteristics.',
      'Querying national copyright databases by title, description, and author.',
      'Evaluating matching entries and registration statuses.',
      'Providing recommendations on registration feasibility.'
    ],
    documents: [
      'Title and brief description of the creative work.',
      'Category details (e.g. software, artistic, sound recording).',
      'Name of the author and owner.'
    ],
    timeline: '2 to 3 Business Days',
    fees: '₹1,500 + GST'
  },
  {
    title: 'Copyright Registration',
    category: 'INTELLECTUAL PROPERTY',
    subCategory: 'Copyright',
    description: 'Filing formal applications (Form XIV) along with deposit copies to secure statutory ownership of literary, artistic, and digital works.',
    explanation: 'Copyright registration gives you official statutory ownership over your creative creations. It involves drafting and filing Form XIV with the Copyright Office, submitting deposit copies of your work (such as source code files for software or high-res images for artwork), and managing the mandatory 30-day public objection period.',
    deliverables: [
      'Drafted Form XIV application submission receipt.',
      'Official Diary Number containing submission timestamp.',
      'Objection-free certificate coordination.',
      'Official Copyright Registration Certificate.'
    ],
    process: [
      'Preparing deposit copies of the work to regulatory formats.',
      'Drafting the copyright application forms and statement of particulars.',
      'Filing online and generating the diary number.',
      'Tracking the 30-day search period and registry review.'
    ],
    documents: [
      'Soft copy of the work (code repository, art PNG, book PDF).',
      'No Objection Certificate (NOC) from developers/designers/publishers.',
      'Signed Power of Attorney (Form 26).'
    ],
    timeline: '6 to 9 Months (Statutory wait times)',
    fees: '₹3,500 + GST'
  },
  {
    title: 'Copyright Objection',
    category: 'INTELLECTUAL PROPERTY',
    subCategory: 'Copyright',
    description: 'Drafting formal responses to registry objections or discrepancies raised by examiners regarding ownership or formatting.',
    explanation: 'During the registration audit, the copyright examiner might raise discrepancies or objections (e.g., matching works, unclear author details, or missing NOC files). We draft legally sound responses to these discrepancy letters within the 30-day limit to keep the case active.',
    deliverables: [
      'Analysis of discrepancy letter requirements.',
      'Drafted written response with supporting evidence.',
      'Affidavit of original authorship drafting (if required).',
      'Portal submission of the reply.'
    ],
    process: [
      'Reviewing the examiner\'s discrepancies checklist.',
      'Sourcing missing ownership records or proof.',
      'Drafting the legal response clarifying authorship.',
      'Filing response on the e-filing portal.'
    ],
    documents: [
      'Copy of Discrepancy Letter/Objection Notice.',
      'Copyright Diary Number.',
      'Revised deposit copies or signed NOC papers.'
    ],
    timeline: '3 to 5 Business Days',
    fees: '₹3,000 + GST per reply'
  },
  {
    title: 'Copyright Hearing',
    category: 'INTELLECTUAL PROPERTY',
    subCategory: 'Copyright',
    description: 'Professional representation before the Registrar of Copyrights during formal hearings to resolve registry queries.',
    explanation: 'If a discrepancy reply is rejected or if a third party files an objection against your copyright application, the Copyright Office schedules a show-cause hearing. A copyright attorney must represent you to explain the originality of the work and secure the Registrar\'s approval.',
    deliverables: [
      'Case preparation and arguments outline.',
      'Legal representation before the Copyright Board/Registrar.',
      'Post-hearing submissions drafting.',
      'Status briefing report.'
    ],
    process: [
      'Reviewing hearing guidelines and objections.',
      'Drafting oral arguments showing creative originality.',
      'Representing the client virtually or physically in hearings.',
      'Filing final post-hearing written submissions.'
    ],
    documents: [
      'Hearing notice.',
      'Power of attorney.',
      'Original manuscript/artwork and proof of creation timeline.'
    ],
    timeline: 'Scheduled by Copyright Office (typically 3-5 months from notice)',
    fees: '₹6,000 + GST per appearance'
  },
  {
    title: 'Copyright Licensing',
    category: 'INTELLECTUAL PROPERTY',
    subCategory: 'Copyright',
    description: 'Drafting and negotiating copyright assignment deeds, commercial licensing contracts, and royalty agreements.',
    explanation: 'Monetize your creative content safely. We draft and negotiate copyright license agreements, software usage permissions, and assignment deeds. This ensures that terms of usage, payment royalties, termination clauses, and ownership transfers are legally locked.',
    deliverables: [
      'Drafted Copyright Licensing Agreement or Assignment Deed.',
      'Royalty allocation structures and payment auditing clauses.',
      'Warranties and indemnities definitions.',
      'Execution logs.'
    ],
    process: [
      'Reviewing commercial negotiation terms.',
      'Drafting clauses detailing territory, exclusivity, and duration.',
      'Conducting review meetings with client teams.',
      'Structuring final execution papers.'
    ],
    documents: [
      'Copyright registration details (if registered).',
      'Commercial terms sheet.',
      'Licensee and Licensor credentials.'
    ],
    timeline: '3 to 5 Business Days',
    fees: '₹6,000 + GST'
  },
  {
    title: 'Copyright Litigation',
    category: 'INTELLECTUAL PROPERTY',
    subCategory: 'Copyright',
    description: 'Copyright Litigation support from our Copyright team, handled end-to-end as part of our Intellectual Property practice.',
    explanation: 'If a competitor copies your software code, design templates, or proprietary manuals, you can file a copyright infringement suit in Commercial Courts. We seek ad-interim injunctions to force the removal of infringing content, seize hard drives/servers, and pursue statutory damages.',
    deliverables: [
      'Drafting and filing of civil copyright suit plaints.',
      'Applications for temporary injunction stay orders.',
      'Coordinating local court commissioners for data collection.',
      'Representation in court trials.'
    ],
    process: [
      'Documenting exact code/visual copying comparisons.',
      'Issuing immediate cease-and-desist notices.',
      'Filing suit in commercial benches.',
      'Arguing for stay orders and asset recovery.'
    ],
    documents: [
      'Copyright registration certificate or proof of authorship.',
      'Comparative reports showing side-by-side similarities.',
      'Screenshots of the infringing work.'
    ],
    timeline: 'Injunction phase: 7 to 15 Days',
    fees: 'Case-specific milestone billing'
  },
  {
    title: 'Copyright Enforcement & Piracy',
    category: 'INTELLECTUAL PROPERTY',
    subCategory: 'IP Litigation',
    description: 'Copyright Enforcement & Piracy support from our IP Litigation team, handled end-to-end as part of our Intellectual Property practice.',
    explanation: 'Stop digital piracy instantly. We manage online copyright enforcement by issuing DMCA takedowns to search engines, hosting providers, and social media platforms to remove stolen assets, and coordinate with police cells to raid physical operations selling fake copies.',
    deliverables: [
      'DMCA Takedown notices sent to Google/Hosts.',
      'Cease and Desist notices sent to pirates.',
      'Coordinating police complaints for copyright offenses.',
      'Digital monitoring alerts.'
    ],
    process: [
      'Tracking down online links hosting pirated content.',
      'Filing formal hosting takedowns and search index removals.',
      'Filing criminal complaints under Section 63 of Copyright Act.',
      'Assisting police in raids on copyright pirates.'
    ],
    documents: [
      'Proof of copyright ownership.',
      'URLs or physical location of the pirated copies.',
      'Purchase records of illegal copies.'
    ],
    timeline: 'Digital takedowns: 48 to 72 Hours',
    fees: 'Retainer or volume-based pricing'
  },

  // ==================================================
  // DESIGN SERVICES (12 ITEMS)
  // ==================================================
  {
    title: 'Design Search',
    category: 'INTELLECTUAL PROPERTY',
    subCategory: 'Design',
    description: 'Novelty search across global registers (WIPO Hague, IPO Kolkata) to verify the uniqueness of product shapes, configurations, or patterns.',
    explanation: 'A design search is a pre-filing assessment to check if the aesthetic shape, configuration, pattern, or visual look of your product has already been registered. This ensures your industrial design is novel and has not been previously published anywhere, minimizing design rejection or conflict risks.',
    deliverables: [
      'Detailed Design Novelty Search Report.',
      'Class screening log under Locarno classification system.',
      'Registration safety rating (High, Medium, Low risk).',
      'Visual similarity maps.'
    ],
    process: [
      'Analyzing product photographs, CAD render files, or drawings.',
      'Searching databases by classification code and visual attributes.',
      'Analyzing matching designs in target jurisdictions.',
      'Filing recommendations strategy.'
    ],
    documents: [
      'Product images or 3D renders from multiple angles.',
      'Classification area of the product.',
      'Brief details on novel visual elements.'
    ],
    timeline: '2 to 3 Business Days',
    fees: '₹2,000 + GST'
  },
  {
    title: 'Design Application Filing & Drafting',
    category: 'INTELLECTUAL PROPERTY',
    subCategory: 'Design',
    description: 'Filing Form 1 along with precise multi-view representation sheets (isometric, front, side, top, bottom) to protect product aesthetics.',
    explanation: 'Secure exclusive design rights by filing Form 1 under the Designs Act. We draft the novelty statement, select the correct Locarno class, and prepare the mandatory multi-view representation sheets detailing the product look from every angle (top, bottom, front, back, sides, and perspective).',
    deliverables: [
      'Drafted Form 1 application.',
      'Formatted design representation sheets.',
      'Filing confirmation containing Application Number.',
      'Locarno class assignment logs.'
    ],
    process: [
      'Creating technical visual grids (seven view standard).',
      'Drafting the novelty statement and priority disclaimer.',
      'Filing online via Kolkata Design Patent portal.',
      'Recording case data in client database.'
    ],
    documents: [
      'High-res photographs or CAD line drawings (JPEG format).',
      'Signed Form 26 Power of Attorney.',
      'Applicant nationality and address details.'
    ],
    timeline: '3 to 5 Business Days',
    fees: '₹1,000 (Govt. Fee for Startup/Individual) + Professional Fees'
  },
  {
    title: 'Design Objection & Office Action Reply',
    category: 'INTELLECTUAL PROPERTY',
    subCategory: 'Design',
    description: 'Analyzing examination reports and drafting replies to overcome objections regarding visual representation, novelty, or classification.',
    explanation: 'The Controller General of Patents, Designs and Trademarks reviews your design application. If they detect issues like blurred drawings, incorrect classes, or lack of novelty, they issue an Office Action objection report. We draft formal replies correcting these issues and submitting updated drawings.',
    deliverables: [
      'Analysis of Office Action objection reasons.',
      'Drafted Written Response to Design Objection Report.',
      'Revised representation drawings sheet (if requested).',
      'Portal submission verification.'
    ],
    process: [
      'Reviewing examiner objections.',
      'Re-aligning visual angles or representations to specifications.',
      'Drafting replies counter-arguing any prior art matching.',
      'Submitting corrections online.'
    ],
    documents: [
      'Office Action/Objection Notice.',
      'Original application files.',
      'Updated product drawings (if required).'
    ],
    timeline: '4 to 6 Business Days',
    fees: '₹3,500 + GST per response'
  },
  {
    title: 'Design Hearing & Representation',
    category: 'INTELLECTUAL PROPERTY',
    subCategory: 'Design',
    description: 'Representation by licensed design agents before the Controller to defend the novelty and registerability of your designs.',
    explanation: 'If the office action response does not satisfy the Controller, they list the application for a show-cause hearing. A design patent attorney must represent the applicant to showcase the physical design, clarify novelty aspects, and argue for registration approval.',
    deliverables: [
      'Hearing written submission logs.',
      'Legal representation before the Controller of Designs.',
      'Post-hearing documentation amendments.',
      'Advisory updates.'
    ],
    process: [
      'Preparing case brief and arguments.',
      'Representing the client during scheduled hearings.',
      'Providing technical explanations to registry officials.',
      'Submitting post-hearing files.'
    ],
    documents: [
      'Hearing notice.',
      'Power of attorney.',
      'Sample products or prototypes.'
    ],
    timeline: 'Scheduled by Registry (typically 2-4 months from notice)',
    fees: '₹6,000 + GST per hearing'
  },
  {
    title: 'Design Opposition & Cancellation',
    category: 'INTELLECTUAL PROPERTY',
    subCategory: 'Design',
    description: 'Filing cancellation petitions under Section 19 against conflicting design registrations, or defending your registered designs.',
    explanation: 'Under Section 19 of the Designs Act, any person can file a petition for cancellation of a registered design at the Patent Office, claiming it was previously published, lack novelty, or is ineligible. We represent clients in both filing cancellation actions against competitors and defending their designs.',
    deliverables: [
      'Drafted Petition for Cancellation or Written Statement.',
      'Evidence compilation and case files.',
      'Attending hearings before the tribunal.',
      'Order copy updates.'
    ],
    process: [
      'Sourcing prior publications or prior sales evidence.',
      'Drafting the cancellation petition citing statutory grounds.',
      'Exchanging evidence briefs.',
      'Arguing the case before design controllers.'
    ],
    documents: [
      'Conflicting design registration certificate copy.',
      'Proof of prior publication (catalogs, web archives, brochures).',
      'Signed power of attorney.'
    ],
    timeline: 'Ongoing case schedules',
    fees: '₹12,000 + GST (Filing/Defense)'
  },
  {
    title: 'Design Renewal & Extension',
    category: 'INTELLECTUAL PROPERTY',
    subCategory: 'Design',
    description: 'Filing Form 3 applications to extend design registration validity from the initial 10-year term to the maximum 15-year term.',
    explanation: 'Design registrations are initially valid for 10 years from the date of registration. Before this period expires, the owner must file an application (Form 3) along with the extension fee to extend the design protection for an additional 5 years, providing a total of 15 years of exclusive protection.',
    deliverables: [
      'Filing of Form 3 for extension.',
      'Status update tracking.',
      'Official fee receipt.',
      'Extension approval records.'
    ],
    process: [
      'Reviewing design registration dates.',
      'Preparing Form 3 and calculating fees.',
      'Depositing extension fees online.',
      'Securing registry validity date update.'
    ],
    documents: [
      'Original Design Registration Certificate copy.',
      'Applicant identity details.',
      'Signed authorization.'
    ],
    timeline: '2 to 3 Business Days',
    fees: '₹2,000 (Govt. Fee) + Professional Fees'
  },
  {
    title: 'International Design Registration (Hague System)',
    category: 'INTELLECTUAL PROPERTY',
    subCategory: 'Design',
    description: 'Filing design applications under the WIPO Hague System to secure design protection in up to 90+ countries via one application.',
    explanation: 'The Hague System for the International Registration of Industrial Designs offers a streamlined method to register designs in up to 90+ countries through a single international application filed with WIPO, avoiding the cost of filing separate applications in multiple languages.',
    deliverables: [
      'Filing WIPO Hague System international application.',
      'Target countries list and fee assessments.',
      'International design drawings formatting.',
      'Coordination with WIPO.'
    ],
    process: [
      'Checking country eligibility.',
      'Formatting design drawings to WIPO international rules.',
      'Drafting and filing the Hague application.',
      'Handling WIPO formalities comments.'
    ],
    documents: [
      'Product images/renderings to WIPO formatting.',
      'Applicant country link proof.',
      'List of target member countries.'
    ],
    timeline: '7 to 10 Business Days',
    fees: 'Varies by countries (WIPO CHF Fees) + Professional Filing Fee'
  },
  {
    title: 'Design Watch & Monitoring',
    category: 'INTELLECTUAL PROPERTY',
    subCategory: 'Design',
    description: 'Continuous monitoring of published Design Journals to identify and challenge deceptively matching competitor designs.',
    explanation: 'Protect your unique product looks. Our watch service monitors weekly design publications from the Patent Office Kolkata design wing, alert you if competitors attempt to register product configurations or packages that match your designs, allowing you to oppose them early.',
    deliverables: [
      'Weekly/Monthly Design Journal screening alerts.',
      'Visual match evaluation reports.',
      'Action recommendations briefs.'
    ],
    process: [
      'Registering visual descriptors and Locarno classes.',
      'Monitoring the weekly published Design Journal.',
      'Extracting and comparing potential matches.',
      'Notifying client design and legal teams.'
    ],
    documents: [
      'Client active design registration certificates.',
      'Design product categories.'
    ],
    timeline: 'Annual subscription tracking',
    fees: '₹12,000 + GST / Year per design family'
  },
  {
    title: 'Design Litigation',
    category: 'INTELLECTUAL PROPERTY',
    subCategory: 'Design',
    description: 'Design Litigation support from our Design team, handled end-to-end as part of our Intellectual Property practice.',
    explanation: 'If a competitor copies your registered design on a product they sell, it constitutes design piracy under Section 22. We file commercial lawsuits to halt sales, seize mold tools used to manufacture the copied shape, recover damages, and enforce legal boundaries.',
    deliverables: [
      'Drafting of Design Piracy Plaint and injunction requests.',
      'Coordinating local court commissioners to seize copycat mold tools.',
      'Court trial representation.',
      'Securing ad-interim injunctions.'
    ],
    process: [
      'Investigating copycat products in retail/e-commerce markets.',
      'Preparing claim charts showing matching visual elements.',
      'Filing commercial suits in competent courts.',
      'Executing court raids.'
    ],
    documents: [
      'Certified copy of Design Registration.',
      'Purchased samples of pirated products.',
      'Sales records showing financial dilution.'
    ],
    timeline: 'Urgent injunction phase: 7 to 15 Days',
    fees: 'Case-specific hourly/milestone billing'
  },
  {
    title: 'Design Infringement Action',
    category: 'INTELLECTUAL PROPERTY',
    subCategory: 'IP Litigation',
    description: 'Design Infringement Action support from our IP Litigation team, handled end-to-end as part of our Intellectual Property practice.',
    explanation: 'Enforce visual product rights by filing design infringement suits against copycat units. This stops distributors, retailers, or online sellers from importing or selling products that replicate your registered configuration or aesthetic looks.',
    deliverables: [
      'Cease & Desist legal notice drafting.',
      'Drafting and filing design infringement plaints.',
      'Court-appointed search and seizure raid filings.',
      'Statutory penalty requests.'
    ],
    process: [
      'Documenting product design identity comparisons.',
      'Serving cease-and-desist warnings.',
      'Filing suit in commercial divisions.',
      'Executing judicial seizure of copy products.'
    ],
    documents: [
      'Design registration entry records.',
      'Visual match comparisons sheet.',
      'Sales and marketing records of the copycat.'
    ],
    timeline: 'Urgent injunction phase: 7 to 15 Days',
    fees: 'Case-specific milestone billing'
  },
  {
    title: 'Design Commercialization & Licensing',
    category: 'INTELLECTUAL PROPERTY',
    subCategory: 'Design',
    description: 'Drafting design assignment deeds and licensing agreements to monetize aesthetic product layouts.',
    explanation: 'Monetize product design assets. We draft design assignment deeds, visual layout licensing agreements, and technology transfers, ensuring royalty structures, use limitations, and manufacturing rights are defined.',
    deliverables: [
      'Drafted Design License Agreement or Assignment Deed.',
      'Royalty split structure templates.',
      'IPO design assignment recording filings.',
      'Negotiation guides.'
    ],
    process: [
      'Detailing transaction parameters and licensing targets.',
      'Drafting the agreement clauses.',
      'Managing party review meetings.',
      'Filing assignment updates at Kolkata IPO.'
    ],
    documents: [
      'Design registration certificates.',
      'Commercial terms sheet.',
      'Identity papers of licensing parties.'
    ],
    timeline: '3 to 5 Business Days',
    fees: '₹6,000 + GST'
  },
  {
    title: 'Design Portfolio Management',
    category: 'INTELLECTUAL PROPERTY',
    subCategory: 'Design',
    description: 'Consolidated tracking of corporate industrial designs, managing validity, renewals, and international priority filings.',
    explanation: 'For manufacturing enterprises with extensive product lineups, we offer centralized design portfolio tracking, managing renewals, Locarno classifications, international Hague filings, and visual monitoring alerts.',
    deliverables: [
      'Centralized design registry dashboard.',
      'Automated renewal trackers.',
      'Hague system filings coordination.',
      'Periodic portfolio audit reports.'
    ],
    process: [
      'Auditing design assets.',
      'Setting up automated reminders.',
      'Managing filing deadlines and extensions.',
      'Coordinating global patent counsels.'
    ],
    documents: [
      'Design grant certificates.',
      'Corporate product catalogues.'
    ],
    timeline: 'Ongoing corporate tracking retainer',
    fees: 'Volume-based annual retainer'
  },

  // ==================================================
  // DOMAIN SERVICES (4 ITEMS)
  // ==================================================
  {
    title: 'Domain Name & UDRP Disputes',
    category: 'INTELLECTUAL PROPERTY',
    subCategory: 'IP Litigation',
    description: 'Dispute resolution support under the Uniform Domain-Name Dispute-Resolution Policy (UDRP) to recover hijacked or cyber-squatted domain names.',
    explanation: 'The Uniform Domain-Name Dispute-Resolution Policy (UDRP) is a WIPO-administered arbitration framework to resolve trademark-related domain conflicts. We help trademark owners recover domain names registered in bad faith (cyber-squatting) that match or are confusingly similar to their registered marks, securing domain transfers quickly.',
    deliverables: [
      'Pre-complaint merit evaluation and risk check.',
      'Drafted UDRP complaint matching WIPO requirements.',
      'Trademark usage evidence dossier compilation.',
      'Filing complaints with arbitration centers (WIPO, ADNDRC).'
    ],
    process: [
      'Conducting brand trademark checks against the squatter\'s registration date.',
      'Gathering proof of bad-faith activity (websites, listings, phishing).',
      'Drafting legal submissions matching the three UDRP conditions.',
      'Filing complaint and managing registrar locks.'
    ],
    documents: [
      'Trademark registration certificates.',
      'Domain registration WHOIS data logs.',
      'Screenshots of the bad-faith site, parking page, or offers to sell.',
      'Historical records of corporate brand usage.'
    ],
    timeline: '45 to 60 Days (UDRP standard arbitration timeline)',
    fees: '₹25,000 + WIPO Govt Arbitration Fees'
  },
  {
    title: 'Domain Name & UDRP Disputes (Litigation)',
    category: 'LITIGATION',
    subCategory: 'IP Litigation & Enforcement',
    description: 'Legal enforcement actions, sending cease and desists, and managing formal domain arbitration proceedings under WIPO or NIXI (INDRP).',
    explanation: 'When a domain squatter targets your corporate brand identity, we combine pre-arbitration warnings, cease-and-desist notices, registrar notifications, and direct arbitration management to enforce your proprietary rights and secure domain transfers without going through lengthy courtroom trials.',
    deliverables: [
      'Custom Cease & Desist legal warning notices.',
      'Dispute docket filed with registry entities.',
      'Coordinating domain locks with registrars.',
      'Execution transfer code monitoring.'
    ],
    process: [
      'Issuing formal warnings to the registrant and domain privacy proxies.',
      'Submitting the case petition to WIPO or NIXI.',
      'Liaising with designated registrars (GoDaddy, Namecheap) to lock domain assets.',
      'Executing the domain transfer post-verdict.'
    ],
    documents: [
      'Trademark proof.',
      'Host and registrar WHOIS registry data.',
      'Proof of warning deliveries.',
      'Arbitration board notifications.'
    ],
    timeline: '30 to 45 Days',
    fees: '₹20,000 + GST'
  },
  {
    title: 'INDRP Domain Disputes (.IN Registry)',
    category: 'INTELLECTUAL PROPERTY',
    subCategory: 'IP Litigation',
    description: 'Recovering hijacked .in or .co.in domain names through the .IN Domain Name Dispute Resolution Policy (INDRP) managed by NIXI.',
    explanation: 'Disputes concerning India-specific domains (.IN or .CO.IN) are governed by the .IN Domain Name Dispute Resolution Policy (INDRP) managed by the National Internet Exchange of India (NIXI). We represent trademark owners in filing complaints before NIXI-appointed arbitrators to recover hijacked domains registered in bad faith.',
    deliverables: [
      'Drafted INDRP Complaint petition.',
      'Compiled evidence annexures.',
      'Representations before NIXI arbitrators.',
      'Coordinating with registry for domain transfer.'
    ],
    process: [
      'Verifying Indian trademark validity.',
      'Filing complaint with NIXI registry portal.',
      'Replying to arbitrator queries or counter-arguments.',
      'Executing domain transfer post-award.'
    ],
    documents: [
      'Indian Trademark Registration Certificate.',
      'WHOIS database reports.',
      'Proof of user confusion or bad-faith intent.'
    ],
    timeline: '60 to 75 Days',
    fees: '₹20,000 + NIXI filing fees'
  },
  {
    title: 'Cybersquatting Litigation',
    category: 'LITIGATION',
    subCategory: 'IP Litigation & Enforcement',
    description: 'Civil lawsuits filed in Commercial Courts against bad-faith registrants targeting corporate brands, seeking injunctions and damages.',
    explanation: 'For cases where squatters use your domain variations for phishing, corporate email spoofing, or active fraud, we file civil lawsuits in Commercial High Courts. We seek urgent John Doe injunction orders (stay orders) directing registrar companies to block the domain and reveal the fraudster\'s real identity.',
    deliverables: [
      'Filed civil commercial plaint.',
      'Applications for urgent ad-interim injunction restraining orders.',
      'Court notices served to Registrars (GoDaddy, Namecheap, PublicDomainRegistry).',
      'Permanent transfer decree filings.'
    ],
    process: [
      'Investigating phishing pages and gathering hosting IPs.',
      'Drafting the lawsuit under the Civil Procedure Code.',
      'Arguing for urgent ex-parte stay orders before High Court judges.',
      'Serving court decrees to registrars to freeze and transfer domains.'
    ],
    documents: [
      'Trademark Certificates.',
      'Detailed screenshots of the phishing site or email headers.',
      'Domain purchase and WHOIS history logs.'
    ],
    timeline: 'Urgent injunction orders: 7 to 14 Days',
    fees: 'Case-specific commercial litigation billing'
  },

  // ==================================================
  // STARTUP SERVICES (3 ITEMS)
  // ==================================================
  {
    title: 'Startup IP Protection',
    category: 'INTELLECTUAL PROPERTY',
    subCategory: 'IP Advisory',
    description: 'Startup IP Protection support from our IP Advisory team, handled end-to-end as part of our Intellectual Property practice.',
    explanation: 'Intellectual Property is the most valuable asset for any high-growth startup. We help early-stage and venture-backed founders build a defensive IP moat, including trademarking brand names, filing provisional patent applications, and securing software copyright registrations to prepare for investor due diligence.',
    deliverables: [
      'Comprehensive Startup IP Audit report.',
      'Prioritized filings roadmap (Trademarks vs. Patents).',
      'Founder and Contractor IP Assignment Deeds.',
      'Investor-ready IP registry certificates dossier.'
    ],
    process: [
      'Auditing the startup\'s software architecture and source code components.',
      'Conducting clearance searches on the core brand name.',
      'Preparing provisional specifications for patent-pending tags.',
      'Drafting employee/vendor confidentiality and work-for-hire deeds.'
    ],
    documents: [
      'Source code directories structure summary.',
      'Core brand name options.',
      'Freelancer contracts and NDAs.',
      'Cap table summaries.'
    ],
    timeline: '5 to 7 Business Days',
    fees: '₹9,500 + GST'
  },
  {
    title: 'Startup & Business Advisory',
    category: 'CORPORATE LEGAL',
    subCategory: 'Commercial / Contract Drafting',
    description: 'Startup & Business Advisory support from our Commercial / Contract Drafting team, handled end-to-end as part of our Corporate Legal practice.',
    explanation: 'Starting and scaling a business requires sound compliance and commercial contracting. We advise startups on co-founder agreements, equity vesting schedules, shareholder agreements (SHA), seed-funding term sheets, and general commercial compliance to avoid future partnership deadlock disputes.',
    deliverables: [
      'Custom Co-Founder Agreement with vesting and exit schedules.',
      'Employee Stock Option Plan (ESOP) structure advice.',
      'Shareholder Agreement (SHA) terms draft.',
      'Investor Term Sheet review notes.'
    ],
    process: [
      'Hosting joint partner workshops to align equity allocations.',
      'Drafting reverse vesting covenants.',
      'Constructing dispute mediation and deadlock routes.',
      'Reviewing and redlining venture capital terms sheets.'
    ],
    documents: [
      'Incorporation Certificate.',
      'Proposed cap table splits.',
      'Individual founder roles descriptions.',
      'Proposed investor terms sheet (if funding).'
    ],
    timeline: '7 to 10 Business Days',
    fees: '₹12,000 + GST'
  },
  {
    title: 'Startup India Registration',
    category: 'CORPORATE LEGAL',
    subCategory: 'Company Formation',
    description: 'Startup India Registration support from our Company Formation team, handled end-to-end as part of our Corporate Legal practice.',
    explanation: 'The Startup India Initiative by DPIIT offers massive tax exemptions, patent rebate incentives, and relaxed public procurement norms. We manage the entire application process, including drafting the innovation statement and submitting the write-up on your business model to secure DPIIT recognition.',
    deliverables: [
      'DPIIT Recognition Certificate.',
      'Innovation statement write-up draft.',
      'Form 10G Income Tax Section 80-IAC rebate filing sheets.',
      'Startup India portal dashboard setup.'
    ],
    process: [
      'Drafting the 100-word DPIIT-required innovation summary.',
      'Submitting company profile details to the central portal.',
      'Answering clarification notices issued by DPIIT reviewers.',
      'Filing application for 3-year income tax holiday schemes.'
    ],
    documents: [
      'Certificate of Incorporation.',
      'Memorandum of Association (MoA).',
      'Write-up detailing product innovation or job creation potential.',
      'Product screenshots, brochure, or website link.'
    ],
    timeline: '10 to 14 Days',
    fees: '₹6,000 + GST'
  },

  // ==================================================
  // CONTRACT SERVICES (21 ITEMS)
  // ==================================================
  {
    title: 'Corporate Legal',
    category: 'CORPORATE LEGAL',
    description: 'Build your business on a strong legal foundation.',
    explanation: 'Corporate Legal services establish a compliant structure for starting and operating companies. We cover company formations, licensing requirements, standard agreements, corporate counsel retainers, and regulatory disclosures to keep operations 100% compliant with corporate registry rules.',
    deliverables: [
      'Customized entity selection advisory report.',
      'Corporate registry registration filings verification.',
      'Basic bylaws drafts.',
      'Board resolutions templates.'
    ],
    process: [
      'Reviewing proposed business model and ownership plans.',
      'Advised statutory registration structures.',
      'Drafting bylaws, resolutions, and operational sheets.',
      'Executing registration setup.'
    ],
    documents: [
      'Founder identity proof files.',
      'Proposed capital structure details.',
      'Address proof of business site.'
    ],
    timeline: '3 to 5 Business Days',
    fees: '₹5,000 + GST'
  },
  {
    title: 'Commercial / Contract Drafting',
    category: 'CORPORATE LEGAL',
    subCategory: 'Commercial / Contract Drafting',
    description: 'Commercial contract drafting, corporate advisory, legal due diligence, and regulatory compliance.',
    explanation: 'Robust commercial contracts prevent future business disputes. We draft, review, and negotiate custom commercial contracts, partnership deeds, distributor agreements, and joint-venture contracts designed to secure corporate interests and limit financial liability.',
    deliverables: [
      'Custom drafted agreement template (MS Word format).',
      'Detailed risk allocation notes.',
      'Negotiation markups list.',
      'Standard signing instructions checklist.'
    ],
    process: [
      'Evaluating business transactions parameters.',
      'Drafting custom agreement clauses covering indemnities and terminations.',
      'Refining terms post-client feedback.',
      'Outlining final execution requirements.'
    ],
    documents: [
      'Commercial terms sheet.',
      'Partner identity records.',
      'Specific terms milestones lists.'
    ],
    timeline: '4 to 6 Business Days',
    fees: '₹6,500 + GST'
  },
  {
    title: 'NDA Drafting',
    category: 'CORPORATE LEGAL',
    subCategory: 'Commercial / Contract Drafting',
    description: 'NDA Drafting support from our Commercial / Contract Drafting team, handled end-to-end as part of our Corporate Legal practice.',
    explanation: 'Non-Disclosure Agreements (NDAs) protect your proprietary concepts, software source codes, client databases, and corporate plans. We draft custom unilateral or mutual NDAs detailing confidentiality parameters, exceptions, remedies, and dispute forums.',
    deliverables: [
      'Custom Mutual or Unilateral Non-Disclosure Agreement.',
      'Exceptions and remedies guidelines.',
      'Drafted employee confidentiality clause.',
      'Execution briefs.'
    ],
    process: [
      'Defining what constitutes confidential information.',
      'Drafting terms covering data return and leak remedies.',
      'Reviewing duration requirements.',
      'Finalizing template for signing.'
    ],
    documents: [
      'Recipient identity details.',
      'Description of data to be shared.',
      'Applicable state stamp duty jurisdiction.'
    ],
    timeline: '1 to 2 Business Days',
    fees: '₹2,500 + GST'
  },
  {
    title: 'Founders Agreement',
    category: 'CORPORATE LEGAL',
    subCategory: 'Commercial / Contract Drafting',
    description: 'Founders Agreement support from our Commercial / Contract Drafting team, handled end-to-end as part of our Corporate Legal practice.',
    explanation: 'Founders Agreements set mutual rules for business partners. We draft agreements defining equity splits, reverse vesting milestones, roles and responsibilities, IP transfer covenants, and dead-lock resolution mechanisms to avoid future partnership splits.',
    deliverables: [
      'Customized Co-Founder Agreement.',
      'Equity vesting schedules layout.',
      'IP Transfer deeds.',
      'Deadlock resolution guide.'
    ],
    process: [
      'Joint partner consulting calls to align roles.',
      'Drafting clauses detailing exit limits and share buybacks.',
      'Reviewing and refining terms.',
      'Finalizing agreement dockets.'
    ],
    documents: [
      'Cap table splits.',
      'Individual partner identity files.',
      'Company incorporation registry records (if incorporated).'
    ],
    timeline: '5 to 7 Business Days',
    fees: '₹9,500 + GST'
  },
  {
    title: 'Vendor Agreement',
    category: 'CORPORATE LEGAL',
    subCategory: 'Commercial / Contract Drafting',
    description: 'Vendor Agreement support from our Commercial / Contract Drafting team, handled end-to-end as part of our Corporate Legal practice.',
    explanation: 'Vendor Agreements secure supply chains. We draft agreements defining supplier deliverables, service levels (SLA), payment timelines, liability limits, and termination terms, ensuring vendors deliver on time under clear quality standards.',
    deliverables: [
      'Custom Vendor Supply/Service Agreement.',
      'SLA definitions sheet.',
      'Termination checklist.',
      'Payment timelines schedule.'
    ],
    process: [
      'Evaluating supply metrics.',
      'Drafting custom delivery and rejection clauses.',
      'Defining liability limits.',
      'Assembling final template.'
    ],
    documents: [
      'Vendor quotes or catalogs.',
      'SLA targets checklist.',
      'Invoicing schedules details.'
    ],
    timeline: '3 to 5 Business Days',
    fees: '₹4,500 + GST'
  },
  {
    title: 'Master Service Agreement (MSA)',
    category: 'CORPORATE LEGAL',
    subCategory: 'Commercial / Contract Drafting',
    description: 'Master Service Agreement (MSA) support from our Commercial / Contract Drafting team, handled end-to-end as part of our Corporate Legal practice.',
    explanation: 'Master Service Agreements (MSAs) set the baseline relationship terms for ongoing B2B services, allowing fast client onboardings via simple Statement of Work (SOW) additions without renegotiating core liability terms.',
    deliverables: [
      'Standard Master Service Agreement.',
      'SOW (Statement of Work) template.',
      'Change order request forms.',
      'IP ownership definition clauses.'
    ],
    process: [
      'Analyzing ongoing service workflows.',
      'Drafting clauses covering liability limits, indemnities, and payment rules.',
      'Creating SOW and amendment templates.',
      'Executing draft dockets.'
    ],
    documents: [
      'Service specifications list.',
      'Standard invoicing parameters.',
      'Client company credentials.'
    ],
    timeline: '5 to 7 Business Days',
    fees: '₹8,500 + GST'
  },
  {
    title: 'SaaS Agreement',
    category: 'CORPORATE LEGAL',
    subCategory: 'Commercial / Contract Drafting',
    description: 'SaaS Agreement support from our Commercial / Contract Drafting team, handled end-to-end as part of our Corporate Legal practice.',
    explanation: 'SaaS Agreements protect software subscription models. We draft agreements covering data hosting limits, SLA updates, subscription cancellations, user license limitations, and DPDP/GDPR compliant data collection.',
    deliverables: [
      'Custom SaaS Terms of Service.',
      'Data Processing Addendum (DPA).',
      'Uptime SLA guarantee sheet.',
      'Refund and Cancellation policy.'
    ],
    process: [
      'Reviewing software configurations and cloud hosting providers.',
      'Drafting user access and account termination terms.',
      'Detailing data protection obligations.',
      'Filing final terms for website deployment.'
    ],
    documents: [
      'Software flow and system specs.',
      'DPA parameters checklist.',
      'Pricing model metrics.'
    ],
    timeline: '5 to 7 Business Days',
    fees: '₹9,500 + GST'
  },
  {
    title: 'Employment Contract',
    category: 'CORPORATE LEGAL',
    subCategory: 'Commercial / Contract Drafting',
    description: 'Employment Contract support from our Commercial / Contract Drafting team, handled end-to-end as part of our Corporate Legal practice.',
    explanation: 'Employment Agreements secure human resources. We draft agreements defining employee duties, salaries, notice periods, intellectual property ownership transfers, non-solicitation, and non-compete limits.',
    deliverables: [
      'Executive Employment Agreement.',
      'Standard employee onboarding offer letters.',
      'IP Assignment agreement.',
      'Non-disclosure and non-compete deeds.'
    ],
    process: [
      'Evaluating candidate positions and role scopes.',
      'Drafting salary structures and notice guidelines.',
      'Integrating employee IP assignment clauses.',
      'Finalizing agreement drafts.'
    ],
    documents: [
      'Proposed CTC breakup details.',
      'Role description.',
      'Probation terms.'
    ],
    timeline: '2 to 3 Business Days',
    fees: '₹3,500 + GST'
  },
  {
    title: 'Licensing Agreement',
    category: 'CORPORATE LEGAL',
    subCategory: 'Commercial / Contract Drafting',
    description: 'Licensing Agreement support from our Commercial / Contract Drafting team, handled end-to-end as part of our Corporate Legal practice.',
    explanation: 'Licensing Agreements monetize proprietary assets. We draft agreements covering territory limits, exclusivity clauses, royalty payment schedules, audit rights, and termination parameters for trademarks, patents, or software.',
    deliverables: [
      'Custom License Agreement.',
      'Royalty metrics guidelines.',
      'Audit rights definitions.',
      'Intellectual property schedules sheet.'
    ],
    process: [
      'Evaluating visual/technical assets to be licensed.',
      'Drafting territory and exclusivity parameters.',
      'Structuring auditing and royalty clauses.',
      'Assembling final contract.'
    ],
    documents: [
      'IP registry certifications.',
      'Royalty payment schedules.',
      'Licensor/Licensee data.'
    ],
    timeline: '4 to 6 Business Days',
    fees: '₹8,500 + GST'
  },
  {
    title: 'Terms & Conditions / Privacy Policy',
    category: 'CORPORATE LEGAL',
    subCategory: 'Commercial / Contract Drafting',
    description: 'Terms & Conditions / Privacy Policy support from our Commercial / Contract Drafting team, handled end-to-end as part of our Corporate Legal practice.',
    explanation: 'Protect websites and mobile applications from legal liabilities. We draft custom, DPDP-compliant Terms of Service and Privacy Policies covering user data collection, cookie usage, payment handling, and dispute resolution.',
    deliverables: [
      'Website Terms of Service.',
      'GDPR & DPDP Compliant Privacy Policy.',
      'Cookie Policy sheet.',
      'Disclaimer statement.'
    ],
    process: [
      'Auditing website functionalities and data inputs.',
      'Drafting user account and copyright protection terms.',
      'Structuring data storage and opt-out notifications.',
      'Formatting docs for web deployment.'
    ],
    documents: [
      'Website domain name.',
      'List of third-party analytics/trackers.',
      'Payment gateway details.'
    ],
    timeline: '3 to 4 Business Days',
    fees: '₹4,500 + GST'
  },
  {
    title: 'Contract Drafting & Documentation',
    category: 'CORPORATE LEGAL',
    subCategory: 'Commercial / Contract Drafting',
    description: 'Contract Drafting & Documentation support from our Commercial / Contract Drafting team, handled end-to-end as part of our Corporate Legal practice.',
    explanation: 'We draft legally robust contracts covering partnership deeds, lease agreements, joint-venture contracts, power of attorney, and affidavits, ensuring all documentation matches local state stamp duty requirements.',
    deliverables: [
      'Drafted agreement copy.',
      'Annexures compilation.',
      'State stamp duty guidance opinion.',
      'Execution logs.'
    ],
    process: [
      'Understanding transactional parameters.',
      'Drafting clauses detailing responsibilities, defaults, and remedies.',
      'Refining drafts post client review.',
      'Supplying final documents.'
    ],
    documents: [
      'Commercial transaction outline.',
      'Identity details.',
      'Stamp duty state details.'
    ],
    timeline: '3 to 5 Business Days',
    fees: '₹5,000 + GST'
  },
  {
    title: 'Contract Review & Negotiation',
    category: 'CORPORATE LEGAL',
    subCategory: 'Commercial / Contract Drafting',
    description: 'Contract Review & Negotiation support from our Commercial / Contract Drafting team, handled end-to-end as part of our Corporate Legal practice.',
    explanation: 'Avoid hidden liabilities when signing third-party contracts. We review, redline, and mark up incoming agreements, suggesting protective revisions to balance risk and negotiating directly with opposing legal teams.',
    deliverables: [
      'Redlined contract markup (Track Changes MS Word).',
      'Legal advisory report detailing risks.',
      'Negotiation points list.',
      'Revised final copy.'
    ],
    process: [
      'Reviewing the proposed third-party contract.',
      'Identifying high-risk clauses (indemnities, uncapped liabilities, termination).',
      'Adding protective redlines and comment markups.',
      'Assisting in partner meetings.'
    ],
    documents: [
      'Third-party contract copy (editable file).',
      'Key objectives sheet.'
    ],
    timeline: '3 to 5 Business Days',
    fees: '₹5,500 + GST'
  },
  {
    title: 'Commercial Agreements',
    category: 'CORPORATE LEGAL',
    subCategory: 'Commercial / Contract Drafting',
    description: 'Commercial Agreements support from our Commercial / Contract Drafting team, handled end-to-end as part of our Corporate Legal practice.',
    explanation: 'We draft and negotiate commercial agreements covering agency retainers, affiliate programs, marketing partnerships, manufacturing allocations, and reseller systems, aligning agreements with business operations.',
    deliverables: [
      'Custom Commercial Agreement draft.',
      'Operational workflow guidelines.',
      'Conflict resolution maps.',
      'Stamp duty guidelines.'
    ],
    process: [
      'Evaluating partnership workflows.',
      'Drafting customized commercial responsibility clauses.',
      'Detailing default remedies.',
      'Assembling signing files.'
    ],
    documents: [
      'Partnership objectives briefs.',
      'Identity credentials.',
      'Pricing/Fee splits parameters.'
    ],
    timeline: '4 to 6 Business Days',
    fees: '₹6,000 + GST'
  },
  {
    title: 'Corporate Advisory',
    category: 'CORPORATE LEGAL',
    subCategory: 'Commercial / Contract Drafting',
    description: 'Corporate Advisory support from our Commercial / Contract Drafting team, handled end-to-end as part of our Corporate Legal practice.',
    explanation: 'Legal guidance on corporate issues. We advise on director liabilities, shareholder disputes, company restructuring, capital increases, and FDI filings, keeping operations compliant with Companies Act guidelines.',
    deliverables: [
      'Formal Legal Advisory Opinion letter.',
      'Actionable compliance roadmaps.',
      'FDI/Restructuring strategy boards.',
      'Board resolution drafts.'
    ],
    process: [
      'Analyzing corporate queries.',
      'Reviewing Companies Act provisions and RBI guidelines (if FDI).',
      'Drafting legal recommendations.',
      'Advising executive teams.'
    ],
    documents: [
      'Company incorporation dockets.',
      'Specific issue description.',
      'Cap table history.'
    ],
    timeline: '5 to 7 Business Days',
    fees: '₹8,500 + GST'
  },
  {
    title: 'Corporate Governance & Secretarial Advisory',
    category: 'CORPORATE LEGAL',
    subCategory: 'Commercial / Contract Drafting',
    description: 'Corporate Governance & Secretarial Advisory support from our Commercial / Contract Drafting team, handled end-to-end as part of our Corporate Legal practice.',
    explanation: 'Manage corporate compliance filings. We assist with filing annual ROC returns, drafting minutes of board and general meetings, maintaining statutory registers, and processing director updates.',
    deliverables: [
      'Annual ROC filing confirmation sheets.',
      'Board meeting minutes templates.',
      'Statutory register updates records.',
      'Compliance calendar schedules.'
    ],
    process: [
      'Auditing corporate secretarial registers.',
      'Drafting meeting minutes and resolutions.',
      'Preparing annual MCA ROC return forms.',
      'Filing forms on government portals.'
    ],
    documents: [
      'Audited balance sheets and profit & loss statements.',
      'Board meeting attendance logs.',
      'Previous ROC filings receipts.'
    ],
    timeline: '7 to 10 Business Days',
    fees: '₹7,500 + GST'
  },
  {
    title: 'Legal Due Diligence',
    category: 'CORPORATE LEGAL',
    subCategory: 'Commercial / Contract Drafting',
    description: 'Legal Due Diligence support from our Commercial / Contract Drafting team, handled end-to-end as part of our Corporate Legal practice.',
    explanation: 'Audit legal histories before mergers, acquisitions, or funding rounds. We conduct comprehensive legal due diligence audits reviewing corporate compliance, IP validity, active litigation threats, and employee contracts to calculate investment risks.',
    deliverables: [
      'Comprehensive Legal Due Diligence (LDD) Report.',
      'Discovered risk classification registers (Red, Amber, Green).',
      'IP validity check sheets.',
      'Employee contract liability audit.'
    ],
    process: [
      'Auditing the target company\'s complete legal records.',
      'Verifying corporate registries and IP ownership.',
      'Analyzing active litigation court databases.',
      'Compiling the final LDD risk report.'
    ],
    documents: [
      'Target company corporate dockets and IP filings.',
      'Employee contracts and vendor agreements list.',
      'Financial ledgers and litigation records.'
    ],
    timeline: '10 to 14 Days',
    fees: '₹25,000 + GST'
  },
  {
    title: 'Regulatory & Compliance Advisory',
    category: 'CORPORATE LEGAL',
    subCategory: 'Commercial / Contract Drafting',
    description: 'Regulatory & Compliance Advisory support from our Commercial / Contract Drafting team, handled end-to-end as part of our Corporate Legal practice.',
    explanation: 'Navigate complex industry regulations (FSSAI, RBI, SEBI, TRAI, MeitY). We help startups secure necessary operating licenses, set up compliance systems, and update policies to prevent administrative penalties.',
    deliverables: [
      'Regulatory audit checklist.',
      'Drafted compliance manuals.',
      'License registration files.',
      'Advisory memos.'
    ],
    process: [
      'Analyzing sector-specific regulations.',
      'Auditing client operations against regulatory metrics.',
      'Preparing applications for necessary licenses.',
      'Submitting updates to regulatory departments.'
    ],
    documents: [
      'Business model summary.',
      'Site plan pictures.',
      'Director profile credentials.'
    ],
    timeline: '7 to 10 Business Days',
    fees: '₹9,500 + GST'
  },
  {
    title: 'Legal Opinions & Advisory',
    category: 'CORPORATE LEGAL',
    subCategory: 'Commercial / Contract Drafting',
    description: 'Legal Opinions & Advisory support from our Commercial / Contract Drafting team, handled end-to-end as part of our Corporate Legal practice.',
    explanation: 'Secure formal, written legal opinions from licensed corporate attorneys on complex statutory interpretations, contract liabilities, tax exposures, or partnership positions to guide business decisions and mitigate risk.',
    deliverables: [
      'Formal Signed Legal Opinion Letter.',
      'Precedent case analysis docket.',
      'Risk assessment guidelines.',
      'Actionable corporate strategy memos.'
    ],
    process: [
      'Analyzing the legal query and fact sheet provided by the client.',
      'Researching relevant statutes, judicial precedents, and regulatory notifications.',
      'Drafting the legal opinion applying the law to the client facts.',
      'Reviewing and signing off by senior counsel.'
    ],
    documents: [
      'Detailed factual statement of the query.',
      'Copies of related agreements or correspondence.',
      'Prior corporate filings or regulatory notices.'
    ],
    timeline: '3 to 5 Business Days',
    fees: '₹8,500 + GST'
  },
  {
    title: 'Transaction Support & Risk Assessment',
    category: 'CORPORATE LEGAL',
    subCategory: 'Commercial / Contract Drafting',
    description: 'Transaction Support & Risk Assessment support from our Commercial / Contract Drafting team, handled end-to-end as part of our Corporate Legal practice.',
    explanation: 'Assess legal risks in commercial acquisitions, joint ventures, asset purchases, or investments. We analyze term sheets, deal structures, and liabilities to protect your interests during transactions.',
    deliverables: [
      'Transaction Risk Matrix Report.',
      'Deal Structure Redline markup.',
      'Liability allocation checklist.',
      'Indemnification parameters guidelines.'
    ],
    process: [
      'Reviewing proposed transaction terms and valuation cards.',
      'Identifying potential liabilities (tax, debt, employee, IP gaps).',
      'Suggesting protective adjustments to deal structures (e.g. escrow setups).',
      'Assisting in transaction talks.'
    ],
    documents: [
      'Proposed Deal Term Sheet or MoU.',
      'Financial ledgers summary.',
      'Target asset registry sheets.'
    ],
    timeline: '5 to 7 Business Days',
    fees: '₹12,000 + GST'
  },

  // ==================================================
  // LITIGATION SERVICES (25 ITEMS SEARCH MATCHING LITIGATION)
  // ==================================================
  {
    title: 'Commercial Litigation',
    category: 'LITIGATION',
    subCategory: 'Commercial Litigation',
    description: 'Representation in general commercial and contractual disputes.',
    explanation: 'We represent clients in contract breach lawsuits, corporate shareholding conflicts, partition suits, and commercial recoveries. We seek ad-interim reliefs, file recovery plaints, and argue cases before commercial divisions of competent courts.',
    deliverables: [
      'Drafted Plaint or Injunction petition.',
      'Written Submissions compiled.',
      'Court appearance logs.',
      'Ex-parte stay or recovery orders copies.'
    ],
    process: [
      'Reviewing commercial breaches.',
      'Issuing statutory pre-litigation notice.',
      'Filing the lawsuit in the Commercial Court.',
      'Attending hearings and presenting oral arguments.'
    ],
    documents: [
      'Original agreement or invoices.',
      'Breach proof correspondence.',
      'Financial loss calculations.'
    ],
    timeline: 'Urgent injunction phase: 7 to 15 Days',
    fees: 'Case-specific milestone billing'
  },
  {
    title: 'IP Litigation',
    category: 'INTELLECTUAL PROPERTY',
    subCategory: 'IP Litigation',
    description: 'Enforcement and defense of trademark, patent, design, and copyright rights.',
    explanation: 'Protect your market share from illegal copies. We represent clients in high-stakes intellectual property disputes in commercial divisions of High Courts and District Courts, handling patent disputes, trademark infringements, copyright piracies, and trade secret thefts.',
    deliverables: [
      'Lawsuit drafting, plaints, and defense responses.',
      'Court appearances by senior IP litigators.',
      'Securing ad-interim restraining orders.',
      'Settlement negotiation drafts.'
    ],
    process: [
      'Pre-litigation risk analysis.',
      'Filing lawsuits and seeking temporary restraining orders.',
      'Managing discovery and cross-examination phases.',
      'Executing court injunctions.'
    ],
    documents: [
      'Active IP registration certificates.',
      'Evidence of competitor violations.',
      'Market damage indicators.'
    ],
    timeline: 'Case-dependent timelines',
    fees: 'Milestone or hourly billing'
  },
  {
    title: 'Trademark Infringement Suits',
    category: 'LITIGATION',
    subCategory: 'IP Litigation & Enforcement',
    description: 'Trademark Infringement Suits support from our IP Litigation & Enforcement team, handled end-to-end as part of our Litigation practice.',
    explanation: 'If a competitor dilutes or copies your registered trademark, we represent you in filing trademark infringement suits in Commercial divisions of High Courts, obtaining ex-parte search warrants and seizing fake stocks.',
    deliverables: [
      'Filed infringement plaint copy.',
      'Ex-parte ad-interim stay petition.',
      'Raids local commissioner execution reports.',
      'Damages briefs.'
    ],
    process: [
      'Filing commercial trademark suit registry forms.',
      'Arguing for stay orders.',
      'Seizing counterfeit stores.',
      'Presenting evidence.'
    ],
    documents: [
      'Trademark certificate.',
      'Infringing items receipts.',
      'Comparison map.'
    ],
    timeline: '7 to 15 Days',
    fees: 'Case-specific billing'
  },
  {
    title: 'Patent Infringement & Injunctions',
    category: 'LITIGATION',
    subCategory: 'IP Litigation & Enforcement',
    description: 'Patent Infringement & Injunctions support from our IP Litigation & Enforcement team, handled end-to-end as part of our Litigation practice.',
    explanation: 'Defend patent exclusivity. We file patent infringement suits in High Courts with jurisdiction, seeking temporary or permanent injunctions to halt competitor sales channels, importations, or manufacture of infringing technologies.',
    deliverables: [
      'High Court commercial plaint.',
      'Claim chart mapping details.',
      'Technical expert affidavits.',
      'Injunction stay orders.'
    ],
    process: [
      'Comparing patented claims against copy product functionalities.',
      'Drafting the plaint and moving urgent applications for stay orders.',
      'Securing ex-parte injunction decrees.',
      'Managing trials.'
    ],
    documents: [
      'Original Patent specification and grant certificates.',
      'Infringing device samples.',
      'Independent lab tests.'
    ],
    timeline: '15 to 30 Days',
    fees: 'Milestone billing'
  },
  {
    title: 'Copyright Enforcement & Piracy',
    category: 'LITIGATION',
    subCategory: 'IP Litigation & Enforcement',
    description: 'Copyright Enforcement & Piracy support from our IP Litigation & Enforcement team, handled end-to-end as part of our Litigation practice.',
    explanation: 'Protect creative intellectual works. We handle civil infringement actions in commercial courts, digital piracy blockages, and copyright registry actions to halt the unauthorized reproduction of software code, media, or writings.',
    deliverables: [
      'Filed civil plaints.',
      'DMCA or ISP domain block requests.',
      'Raid warrants files.',
      'Injunction orders.'
    ],
    process: [
      'Issuing warning letters.',
      'Filing lawsuits and moving for immediate digital stay orders.',
      'Serving domain block directions to hosting platforms.',
      'Seizing server files.'
    ],
    documents: [
      'Copyright registration cert.',
      'Copied elements lists.',
      'Infringement links.'
    ],
    timeline: '7 to 15 Days',
    fees: 'Case-specific billing'
  },
  {
    title: 'Design Infringement Action',
    category: 'LITIGATION',
    subCategory: 'IP Litigation & Enforcement',
    description: 'Design Infringement Action support from our IP Litigation & Enforcement team, handled end-to-end as part of our Litigation practice.',
    explanation: 'Protect visual product aesthetics. We file civil design piracy lawsuits under Section 22 of the Designs Act in Commercial Courts, seizing copycat mold tools and seeking permanent restraining orders against counterfeit sellers.',
    deliverables: [
      'Filing design piracy plaints.',
      'Applications for mold tools seizures.',
      'Local commissioner inspection reports.',
      'Injunction certificates.'
    ],
    process: [
      'Verifying design registration status.',
      'Drafting the lawsuit and moving applications.',
      'Conducting factory inspections with officers.',
      'Enforcing final stay orders.'
    ],
    documents: [
      'Design registration details.',
      'Visual match comparisons.',
      'Counterfeit transaction invoices.'
    ],
    timeline: '7 to 15 Days',
    fees: 'Milestone billing'
  },
  {
    title: 'Anti-Counterfeiting Action',
    category: 'LITIGATION',
    subCategory: 'IP Litigation & Enforcement',
    description: 'Anti-Counterfeiting Action support from our IP Litigation & Enforcement team, handled end-to-end as part of our Litigation practice.',
    explanation: 'Counterfeiting dilutes brand equity and threatens consumer safety. We initiate swift enforcement actions against manufacturers and distributors of knock-off products. This includes obtaining ex-parte search and seizure orders, coordinating with local police, and organizing market-wide raids to seize fake merchandise.',
    deliverables: [
      'Investigation report mapping fake outlets.',
      'Filed civil suit plaint.',
      'Local commissioner appointment request.',
      'Raid inventory sheet.',
      'Permanent injunction order.'
    ],
    process: [
      'Conducting test purchases and identifying factories.',
      'Filing the civil suit and securing ex-parte search orders.',
      'Conducting raids with local officers.',
      'Securing court-ordered destruction of seized fakes.'
    ],
    documents: [
      'Trademark registration entry copy.',
      'Test purchase invoice.',
      'Product comparisons report.',
      'Local investigator reports.'
    ],
    timeline: '10 to 15 Days',
    fees: '₹25,000 + Raid Execution Costs'
  },
  {
    title: 'Passing Off & Unfair Competition',
    category: 'LITIGATION',
    subCategory: 'IP Litigation & Enforcement',
    description: 'Passing Off & Unfair Competition support from our IP Litigation & Enforcement team, handled end-to-end as part of our Litigation practice.',
    explanation: 'Even if a brand name is unregistered, prior usage establishes passing-off rights. We represent businesses in passing-off lawsuits to stop competitors from deceptively mimicking their brand names, product packaging layouts (trade dress), or logos to confuse the public and leverage their reputation.',
    deliverables: [
      'Passed-off plaint.',
      'Interlocutory stay applications.',
      'Consumer confusion survey summaries.',
      'Cease-and-desist warnings.'
    ],
    process: [
      'Establishing client prior usage timeline.',
      'Gathering evidence of consumer confusion.',
      'Filing the lawsuit and moving for stay orders on competitor operations.',
      'Representing client in trial.'
    ],
    documents: [
      'Historical sales bills and invoices.',
      'Marketing spend proofs.',
      'Side-by-side packaging comparisons.',
      'User declarations.'
    ],
    timeline: '15 to 30 Days',
    fees: '₹30,000 + GST'
  },
  {
    title: 'Domain Name & UDRP Disputes',
    category: 'LITIGATION',
    subCategory: 'IP Litigation & Enforcement',
    description: 'Domain Name & UDRP Disputes support from our IP Litigation & Enforcement team, handled end-to-end as part of our Litigation practice.',
    explanation: 'Retrieve hijacked domain names safely. We represent brand owners in filing complaints under the Uniform Domain-Name Dispute-Resolution Policy (UDRP) or the INDRP before designated arbitration panels (WIPO or NIXI).',
    deliverables: [
      'Drafted UDRP/INDRP complaint filings.',
      'Domain registration lock requests.',
      'Panel communications logs.',
      'Domain transfer codes.'
    ],
    process: [
      'Formulating complaint points covering identical marks and bad faith.',
      'Filing dockets online and submitting to registries.',
      'Liaising with registrars to freeze domains.',
      'Resolving domain transitions.'
    ],
    documents: [
      'Trademark certificate.',
      'WHOIS data prints.',
      'Screenshots of unauthorized use.'
    ],
    timeline: '45 to 60 Days',
    fees: '₹25,000 + Panel Fees'
  },
  {
    title: 'Customs & Border Enforcement',
    category: 'LITIGATION',
    subCategory: 'IP Litigation & Enforcement',
    description: 'Customs & Border Enforcement support from our IP Litigation & Enforcement team, handled end-to-end as part of our Litigation practice.',
    explanation: 'Stop duplicate imports. We upload your granted trademarks and patents into the central customs registration index, enabling customs inspectors to intercept and seize counterfeit shipments at air and sea checkpoints.',
    deliverables: [
      'Customs recordation certifications.',
      'Importers whitelist catalogs.',
      'Border alerts filings.',
      'Seizure notifications.'
    ],
    process: [
      'Preparing custom portal registries details.',
      'Listing authorized suppliers.',
      'Assisting border inspections.',
      'Managing destroy hearings.'
    ],
    documents: [
      'Trademark/Patent certifications.',
      'Whitelist vendor list.',
      'Genuine product specifications.'
    ],
    timeline: '15 to 20 Days',
    fees: '₹12,000 + GST'
  },
  {
    title: 'Civil / Criminal Litigation',
    category: 'LITIGATION',
    subCategory: 'Civil / Criminal Litigation',
    description: 'Representation across civil suits and criminal proceedings.',
    explanation: 'We represent clients in complex civil actions (money recoveries, contract breaches) and criminal dockets (commercial frauds, forgery, IT Act violations) before District and High Courts.',
    deliverables: [
      'Case evaluation notes.',
      'Drafted pleading petitions.',
      'Bail request applications.',
      'Written evidence filings.'
    ],
    process: [
      'Documenting transactional violations.',
      'Drafting and filing suits before registry divisions.',
      'Presenting stay or bail arguments before court benches.',
      'Conducting trials.'
    ],
    documents: [
      'Bounced cheques or contracts.',
      'FIR or Police complaint copies.',
      'Notice communication logs.'
    ],
    timeline: 'Case-dependent',
    fees: 'Milestone billing'
  },
  {
    title: 'Civil Matters',
    category: 'LITIGATION',
    subCategory: 'Civil / Criminal Litigation',
    description: 'Civil Matters support from our Civil / Criminal Litigation team, handled end-to-end as part of our Litigation practice.',
    explanation: 'We advise and represent clients in civil suits including specific performances, money recoveries, declaration actions, and permanent injunction petitions in District Courts.',
    deliverables: [
      'Drafted civil plaints.',
      'Interim injunction petitions.',
      'List of witness statements.',
      'Execution decrees.'
    ],
    process: [
      'Drafting legal notices.',
      'Filing suit plaints.',
      'Arguing stay motions.',
      'Conducting trials.'
    ],
    documents: [
      'Commercial agreements.',
      'Invoices and bank ledgers.',
      'Notice receipts.'
    ],
    timeline: 'Case-dependent',
    fees: 'Milestone billing'
  },
  {
    title: 'Criminal Matters',
    category: 'LITIGATION',
    subCategory: 'Civil / Criminal Litigation',
    description: 'Criminal Matters support from our Civil / Criminal Litigation team, handled end-to-end as part of our Litigation practice.',
    explanation: 'Defense and prosecution support for business-related criminal cases like cybercrimes, data thefts, criminal breach of trust, and regulatory offenses under the IPC and IT Act.',
    deliverables: [
      'Bail/Anticipatory bail applications.',
      'Criminal complaints.',
      'Quashing petitions.',
      'Defense arguments brief.'
    ],
    process: [
      'Analyzing police allegations.',
      'Filing anticipatory bail filings.',
      'Arguing quashing petitions before High Court judges.',
      'Managing trials.'
    ],
    documents: [
      'FIR details.',
      'Police status reports.',
      'Exculpatory proofs.'
    ],
    timeline: 'Case-dependent',
    fees: 'Milestone billing'
  },
  {
    title: 'Cheque Bounce Cases',
    category: 'LITIGATION',
    subCategory: 'Banking & Finance',
    description: 'Cheque Bounce Cases support from our Banking & Finance team, handled end-to-end as part of our Litigation practice.',
    explanation: 'Recover unpaid corporate dues by filing criminal complaints under Sec 138 of Negotiable Instruments Act. We handle the process from legal demand notices to trial prosecutions.',
    deliverables: [
      'Demand notice under Section 138.',
      'Filed Magistrate Court complaint.',
      'Evidence affidavit.',
      'Court decree sheets.'
    ],
    process: [
      'Sending demand notices within 30 days of cheque return.',
      'Filing Magistrate court complaints after 15 days.',
      'Managing evidence.',
      'Securing recovery awards.'
    ],
    documents: [
      'Original bounced cheque.',
      'Bank return memo copy.',
      'Transaction invoices.'
    ],
    timeline: '30 to 45 Days (Initial filing phase)',
    fees: '₹5,000 + GST'
  },
  {
    title: 'SARFAESI Proceedings',
    category: 'LITIGATION',
    subCategory: 'Banking & Finance',
    description: 'SARFAESI Proceedings support from our Banking & Finance team, handled end-to-end as part of our Litigation practice.',
    explanation: 'Defend properties and assets from bank recovery seizures. We draft replies to 13(2)/13(4) notices and file Sec 17 appeals in Debt Recovery Tribunals (DRT) to secure stay orders.',
    deliverables: [
      'Notice responses.',
      'Section 17 DRT appeals.',
      'Stay applications.',
      'DRT representation logs.'
    ],
    process: [
      'Auditing banker possession notices.',
      'Drafting appeals.',
      'Arguing stay requests in DRT hearings.',
      'Handling compromises.'
    ],
    documents: [
      'Loan account details.',
      'Possession notices copy.',
      'Property title deeds.'
    ],
    timeline: '45 to 60 Days',
    fees: '₹25,000 + DRT Fees'
  },
  {
    title: 'Arbitration & Execution',
    category: 'LITIGATION',
    subCategory: 'Banking & Finance',
    description: 'Arbitration & Execution support from our Banking & Finance team, handled end-to-end as part of our Litigation practice.',
    explanation: 'Resolve corporate disputes out of court. We manage arbitration claims, represent clients in panels, and file execution petitions in Commercial Courts to enforce awards.',
    deliverables: [
      'Sec 11 arbitrator requests.',
      'Sec 9 stay petitions.',
      'Arbitration claim files.',
      'Execution court filings.'
    ],
    process: [
      'Serving arbitration notice details.',
      'Drafting claims statement.',
      'Attending hearings.',
      'Enforcing awards in court.'
    ],
    documents: [
      'Contract with arbitration clause.',
      'Ledgers and statement of dispute.',
      'Arbitral award sheets.'
    ],
    timeline: '6 to 12 Months',
    fees: 'Milestone billing'
  },
  {
    title: 'Lok Adalat',
    category: 'LITIGATION',
    subCategory: 'Banking & Finance',
    description: 'Lok Adalat support from our Banking & Finance team, handled end-to-end as part of our Litigation practice.',
    explanation: 'Amicable out-of-court settlements. We refer cases to Lok Adalats organized by legal authorities to compromise bank disputes or recovery matters quickly.',
    deliverables: [
      'Referral applications.',
      'Compromise settlement deeds.',
      'Lok Adalat non-appealable award.'
    ],
    process: [
      'Filing joint referral requests.',
      'Attending Lok Adalat conciliation hearings.',
      'Drafting compromise settlement clauses.',
      'Obtaining awards.'
    ],
    documents: [
      'Case status files.',
      'Compromise terms list.',
      'Authorization sheets.'
    ],
    timeline: '15 to 30 Days',
    fees: '₹8,000 + GST'
  },
  {
    title: 'DRT Proceedings',
    category: 'LITIGATION',
    subCategory: 'Banking & Finance',
    description: 'DRT Proceedings support from our Banking & Finance team, handled end-to-end as part of our Litigation practice.',
    explanation: 'Defend corporate borrowers and investors before Debt Recovery Tribunals (DRT) against recovery actions or attachment notices filed by financial institutions.',
    deliverables: [
      'Written Statement drafts.',
      'Sec 17 appeals.',
      'DRT representations.',
      'Stay decrees.'
    ],
    process: [
      'Reviewing lender claims.',
      'Drafting counter objections sheets.',
      'Arguing stay files.',
      'Attending hearings.'
    ],
    documents: [
      'Lender statements.',
      'Mortgage registry details.',
      'Valuation reports.'
    ],
    timeline: 'Varies',
    fees: 'Milestone billing'
  },
  {
    title: 'Property Litigation',
    category: 'LITIGATION',
    subCategory: 'Property Litigation',
    description: 'Title verification and dispute resolution for real estate.',
    explanation: 'Real estate dispute resolution. We handle property partition lawsuits, specific performance of builder agreements, declaration of titles, and tenant eviction disputes.',
    deliverables: [
      'Property plaints/replies.',
      'Stay applications.',
      'Title flow maps.',
      'Execution requests.'
    ],
    process: [
      'Title investigations.',
      'Filing property lawsuits.',
      'Moving stay files.',
      'Trial representations.'
    ],
    documents: [
      'Sale deeds.',
      'Tax receipts.',
      'Mutation papers.'
    ],
    timeline: 'Varies',
    fees: 'Milestone billing'
  },
  {
    title: 'Title Search Report (TSR)',
    category: 'LITIGATION',
    subCategory: 'Property Litigation',
    description: 'Title Search Report (TSR) support from our Property Litigation team, handled end-to-end as part of our Litigation practice.',
    explanation: 'Verify property ownership history. We conduct 30-year registrar searches to confirm clean legal titles, check for mortgages, and prepare reports for bank approvals.',
    deliverables: [
      '30-Year Title Search Report.',
      'Encumbrance Certificate analysis.',
      'Legal opinion on title chain.'
    ],
    process: [
      'Querying registrar office records.',
      'Checking mutation data logs.',
      'Verifying court case registries.',
      'Drafting the TSR.'
    ],
    documents: [
      'Sale deed copy.',
      'Mother deed.',
      'Land map prints.'
    ],
    timeline: '5 to 7 Business Days',
    fees: '₹7,500 + GST'
  },
  {
    title: 'Domestic Disputes',
    category: 'LITIGATION',
    subCategory: 'Matrimonial',
    description: 'Domestic Disputes support from our Matrimonial team, handled end-to-end as part of our Litigation practice.',
    explanation: 'Family law support. We handle mutual consent divorces, maintenance applications, child custody resolutions, and domestic complaints with care and confidentiality.',
    deliverables: [
      'Divorce petitions.',
      'Maintenance applications.',
      'Custody agreements.',
      'Mediation briefing sheets.'
    ],
    process: [
      'Drafting petitions.',
      'Attending legal mediation sessions.',
      'Arguing maintenance terms.',
      'Attending final trial sessions.'
    ],
    documents: [
      'Marriage certificates.',
      'Financial statements.',
      'Settle parameters agreements.'
    ],
    timeline: '6 to 12 Months',
    fees: 'Matrimonial milestone billing'
  },
  {
    title: 'Trademark Litigation',
    category: 'INTELLECTUAL PROPERTY',
    subCategory: 'Trademark',
    description: 'Trademark Litigation support from our Trademark team, handled end-to-end as part of our Intellectual Property practice.',
    explanation: 'When a competitor dilutes or copies your brand name, logo, or trade dress, we file Passing-Off and Infringement civil actions in Commercial Courts, seeking injunction stay orders and counterfeit product seizures.',
    deliverables: [
      'Filed plaints.',
      'Injunction petition drafts.',
      'Local commissioner requests.',
      'Seizure sheets.'
    ],
    process: [
      'Pre-litigation test buys.',
      'Serving warning notifications.',
      'Filing suit dockets.',
      'Executing court raids.'
    ],
    documents: [
      'Trademark certificate.',
      'Copy product samples.',
      'Loss statements.'
    ],
    timeline: '7 to 15 Days',
    fees: 'Milestone billing'
  },
  {
    title: 'Patent Litigation',
    category: 'INTELLECTUAL PROPERTY',
    subCategory: 'Patent',
    description: 'Patent Litigation support from our Patent team, handled end-to-end as part of our Intellectual Property practice.',
    explanation: 'Stop illegal manufacturing. We file patent infringement actions in High Courts to restrain the unauthorized sale or production of patented technologies, seeking damages and deliveries.',
    deliverables: [
      'High Court plaints.',
      'Claim chart comparisons.',
      'Technical expert papers.',
      'Injunction orders.'
    ],
    process: [
      'Analyzing patent claim boundaries.',
      'Filing lawsuit and stay applications.',
      'Presenting expert evidence.',
      'Attending trials.'
    ],
    documents: [
      'Granted Patent specifications.',
      'Infringing device samples.',
      'Test reports.'
    ],
    timeline: '15 to 30 Days',
    fees: 'Milestone billing'
  },
  {
    title: 'Design Litigation',
    category: 'INTELLECTUAL PROPERTY',
    subCategory: 'Design',
    description: 'Design Litigation support from our Design team, handled end-to-end as part of our Intellectual Property practice.',
    explanation: 'Protect product shapes. We file design piracy lawsuits under Section 22 of the Designs Act in Commercial Courts, confiscating copycat manufacturing molds and obtaining stay orders.',
    deliverables: [
      'Design piracy plaint.',
      'Seizure petitions.',
      'Local commissioner logs.',
      'Injunction stays.'
    ],
    process: [
      'Checking design validity.',
      'Filing suit and moving applications.',
      'Conducting warehouse searches.',
      'Attending trial.'
    ],
    documents: [
      'Design registration certificates.',
      'Copy product pictures.',
      'Sales details.'
    ],
    timeline: '7 to 15 Days',
    fees: 'Milestone billing'
  },
  {
    title: 'IP Prosecution',
    category: 'INTELLECTUAL PROPERTY',
    subCategory: 'IP Prosecution',
    description: 'End-to-end prosecution of trademarks, patents, copyrights, and designs before their respective administrative registries.',
    explanation: 'We handle the complete administrative lifecycle of your intellectual property applications. From initial application submissions, monitoring registry status, replying to procedural notifications, filing amendments, to final registration certificates.',
    deliverables: [
      'Centralized IP tracking and status monitoring reports.',
      'Drafted procedural replies.',
      'Filing amendments or office requests.',
      'Granted registry credentials.'
    ],
    process: [
      'Regular registry database auditing.',
      'Submitting updates and address corrections.',
      'Resolving examiner administrative requests.',
      'Obtaining final certificates.'
    ],
    documents: [
      'IP Application documents and registry dockets.',
      'Change requests parameters.'
    ],
    timeline: 'Ongoing administrative lifecycle management',
    fees: 'Retainer-based structure'
  }
];

const POPULAR_KEYWORDS = [
  'Trademark',
  'Patent',
  'Copyright',
  'Design',
  'Litigation',
  'Startup',
  'Contract',
  'Domain'
];

interface LegalSectionProps {
  onOpenStrategyModal?: (note?: string) => void;
  isHomepage?: boolean;
  onRedirectToLegal?: (query?: string, showResults?: boolean) => void;
  initialQuery?: string;
  initialShowResults?: boolean;
  backgroundColor?: string;
}

export const LegalSection: React.FC<LegalSectionProps> = ({ 
  onOpenStrategyModal,
  isHomepage = false,
  onRedirectToLegal,
  initialQuery = '',
  initialShowResults = false,
  backgroundColor
}) => {
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [showSearchResults, setShowSearchResults] = useState(initialShowResults);
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms' | 'zero-lockin' | 'post-pay' | 'ip'>('privacy');
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 8;

  // Synchronize state when props update
  useEffect(() => {
    setSearchQuery(initialQuery);
    setShowSearchResults(initialShowResults);
    setCurrentPage(1);
  }, [initialQuery, initialShowResults]);

  // Filter services by search term
  const filteredServices = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q || q === 'all') return LEGAL_SERVICES_DATA;
    return LEGAL_SERVICES_DATA.filter(service => 
      service.title.toLowerCase().includes(q) || 
      service.description.toLowerCase().includes(q) || 
      (service.subCategory && service.subCategory.toLowerCase().includes(q)) ||
      service.category.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const totalPages = Math.ceil(filteredServices.length / ITEMS_PER_PAGE);

  const paginatedServices = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredServices.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredServices, currentPage]);

  const handleKeywordClick = (keyword: string) => {
    if (isHomepage) {
      onRedirectToLegal?.(keyword, true);
    } else {
      setSearchQuery(keyword);
      setShowSearchResults(true);
      setCurrentPage(1);
    }
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setShowSearchResults(false);
    setCurrentPage(1);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isHomepage) {
      onRedirectToLegal?.(searchQuery, true);
    } else {
      setShowSearchResults(true);
      setCurrentPage(1);
    }
  };

  const openExploreModal = (service: ServiceDetail) => {
    const slug = service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    window.open(`${window.location.origin}/legal/${encodeURIComponent(slug)}`, '_blank');
  };

  const closeExploreModal = () => {
    setSelectedService(null);
  };


  return (
    <section id="legal" style={{ padding: '5rem 0', backgroundColor: backgroundColor || 'var(--bg-main)', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        
        {/* ==================================================
            LEGAL SERVICES DIRECTORY / MAIN HOMEPAGE VIEW
            ================================================== */}
        {!showSearchResults ? (
          <div>
            {/* SEARCH BAR (TOP BAR LAYOUT MATCHING SCREENSHOT) */}
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <span style={{
                background: '#FFEBE7',
                color: '#FF4E27',
                padding: '0.35rem 1.25rem',
                borderRadius: '999px',
                fontSize: '0.75rem',
                fontWeight: 800,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                display: 'inline-block',
                marginBottom: '1rem'
              }}>
                LEGAL PRACTICE AREAS
              </span>
              <h2 style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: '3rem',
                fontWeight: 900,
                color: '#0F172A',
                marginBottom: '0.75rem',
                letterSpacing: '-0.02em'
              }}>
                LEGAL SERVICES
              </h2>
              <p style={{ color: '#64748B', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto 2rem auto', lineHeight: 1.5 }}>
                Comprehensive business legal assistance spanning Intellectual Property, Corporate Compliance, and Commercial Litigation.
              </p>

              <div style={{ maxWidth: '780px', margin: '0 auto 1.5rem auto' }}>
                <form onSubmit={handleSearchSubmit} style={{
                  display: 'flex',
                  background: '#FFFFFF',
                  borderRadius: '99px',
                  padding: '0.35rem 0.35rem 0.35rem 1.5rem',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)',
                  border: '1px solid #E2E8F0',
                  alignItems: 'center',
                  position: 'relative'
                }}>
                  <span style={{
                    color: '#94A3B8',
                    fontSize: '1.2rem',
                    marginRight: '0.75rem',
                    display: 'flex',
                    alignItems: 'center'
                  }}>🔍</span>
                  <input
                    type="text"
                    placeholder="Search legal services (e.g. Trademark, Patent, Copyright, Design, Contract...)"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{
                      flex: 1,
                      padding: '0.6rem 0',
                      border: 'none',
                      outline: 'none',
                      fontSize: '0.95rem',
                      fontFamily: 'Inter, sans-serif',
                      background: 'transparent',
                      color: '#1E293B'
                    }}
                  />
                  {searchQuery && (
                    <button 
                      type="button"
                      onClick={handleClearSearch}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#94A3B8',
                        cursor: 'pointer',
                        fontSize: '1.1rem',
                        padding: '0 0.75rem',
                        marginRight: '0.5rem'
                      }}
                    >
                      ✕
                    </button>
                  )}
                  <button
                    type="submit"
                    style={{
                      padding: '0.75rem 2rem',
                      borderRadius: '99px',
                      backgroundColor: '#FF4E27',
                      color: '#FFFFFF',
                      border: 'none',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      letterSpacing: '0.05em',
                      transition: 'background-color 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E0431F'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FF4E27'}
                  >
                    Search
                  </button>
                </form>
              </div>

              {/* POPULAR KEYWORDS */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem 0.6rem',
                flexWrap: 'wrap',
                fontSize: '0.825rem'
              }}>
                <span style={{ color: '#64748B', fontWeight: 600 }}>Popular:</span>
                {POPULAR_KEYWORDS.map(keyword => (
                  <button
                    key={keyword}
                    onClick={() => handleKeywordClick(keyword)}
                    style={{
                      padding: '0.25rem 0.85rem',
                      borderRadius: '999px',
                      background: '#FFFFFF',
                      color: '#334155',
                      border: '1px solid #E2E8F0',
                      fontWeight: 500,
                      cursor: 'pointer',
                      transition: 'var(--transition)'
                    }}
                  >
                    {keyword}
                  </button>
                ))}
              </div>
            </div>

            {/* INTELLECTUAL PROPERTY BLOCK (ONLY PRIMARY HOMEPAGE LEGAL FIELD) */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3rem',
              alignItems: 'center',
              marginBottom: '3rem'
            }}>
              <div>
                <img 
                  src="/lady_justice_scales.jpg" 
                  alt="Intellectual Property lady justice scales"
                  width="600"
                  height="400"
                  loading="lazy"
                  decoding="async"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '24px',
                    objectFit: 'cover',
                    boxShadow: 'var(--shadow-md)',
                    aspectRatio: '3/2'
                  }}
                />
              </div>
              <div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  backgroundColor: '#EFF6FF',
                  marginBottom: '1rem'
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .3 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                    <path d="M9 18h6M10 22h4" />
                  </svg>
                </div>
                <h3 style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: '2rem',
                  fontWeight: 800,
                  color: '#0F172A',
                  marginBottom: '0.85rem'
                }}>
                  Intellectual Property
                </h3>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Our Intellectual Property practice covers trademarks, patents, designs, copyright, geographical indications and strategic IP advisory — from first search to enforcement.
                </p>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.5rem 1.5rem',
                  marginBottom: '2rem'
                }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem', color: '#334155' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: '#2563EB', fontWeight: 'bold' }}>•</span> Trademark
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: '#2563EB', fontWeight: 'bold' }}>•</span> Design
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: '#2563EB', fontWeight: 'bold' }}>•</span> Geographical Indication
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: '#2563EB', fontWeight: 'bold' }}>•</span> IP Portfolio Management
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: '#2563EB', fontWeight: 'bold' }}>•</span> IP Litigation
                    </span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem', color: '#334155' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: '#2563EB', fontWeight: 'bold' }}>•</span> Patent
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: '#2563EB', fontWeight: 'bold' }}>•</span> Copyright
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: '#2563EB', fontWeight: 'bold' }}>•</span> IP Advisory
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: '#2563EB', fontWeight: 'bold' }}>•</span> IP Prosecution
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => handleKeywordClick('Intellectual Property')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#2563EB',
                    fontWeight: 700,
                    fontSize: '0.925rem',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    padding: 0
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#1D4ED8'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#2563EB'}
                >
                  Explore Intellectual Property →
                </button>
              </div>
            </div>

            {/* EXPLORE ALL CTA BUTTON */}
            <div style={{ textAlign: 'center', marginTop: '2rem', marginBottom: '1.5rem' }}>
              <button 
                onClick={() => {
                  if (isHomepage) {
                    onRedirectToLegal?.('', true);
                  } else {
                    setSearchQuery('');
                    setShowSearchResults(true);
                  }
                }}
                style={{
                  padding: '1rem 2.5rem',
                  borderRadius: '99px',
                  fontSize: '1rem',
                  fontWeight: 800,
                  background: '#FF4E27',
                  color: '#FFFFFF',
                  border: 'none',
                  boxShadow: '0 8px 25px rgba(255, 78, 39, 0.25)',
                  cursor: 'pointer',
                  transition: 'transform 0.2s, background-color 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.02)';
                  e.currentTarget.style.backgroundColor = '#E0431F';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.backgroundColor = '#FF4E27';
                }}
              >
                View All Legal Services (Corporate, Litigation, and more) →
              </button>
            </div>

            {/* QUICK IP STATUS CHECK & PUBLIC SEARCH SECTION */}
            <div style={{ marginTop: '3.5rem', marginBottom: '5rem' }}>
              <style>{`
                .ip-portals-grid {
                  display: grid;
                  grid-template-columns: repeat(3, 1fr);
                  gap: 2rem;
                  max-width: 1280px;
                  margin: 0 auto;
                  align-items: stretch;
                }
                .ip-tool-item {
                  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .ip-tool-item:hover {
                  transform: translateY(-4px);
                  border-color: #3B82F6 !important;
                  box-shadow: 0 10px 25px rgba(59, 130, 246, 0.08);
                  background-color: #FFFFFF !important;
                }
                @media (max-width: 1024px) {
                  .ip-portals-grid {
                    grid-template-columns: repeat(2, 1fr);
                  }
                }
                @media (max-width: 768px) {
                  .ip-portals-grid {
                    grid-template-columns: 1fr;
                  }
                }
              `}</style>

              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: '2.5rem',
                  fontWeight: 900,
                  color: '#0F172A',
                  marginBottom: '0.75rem',
                  letterSpacing: '-0.02em'
                }}>
                  Quick IP Status Check & Public Search
                </h2>
                <p style={{ color: '#64748B', fontSize: '0.95rem', maxWidth: '750px', margin: '0 auto', lineHeight: 1.6 }}>
                  Use the official links below to query trademark statuses, search patents, verify Nice class databases, or lookup legal cause lists directly from the relevant Indian government registries and judicial portals.
                </p>
                <div style={{ width: '80px', height: '2px', backgroundColor: '#3B82F6', margin: '1.25rem auto 0 auto', opacity: 0.3 }}></div>
              </div>

              {/* THREE COLUMN GRID */}
              <div className="ip-portals-grid">
                
                {/* COLUMN 1: TRADEMARK UTILITIES */}
                <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '24px', padding: '2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid #F1F5F9', paddingBottom: '0.75rem', margin: '0 0 0.5rem 0' }}>
                    <span style={{ color: '#3B82F6', fontWeight: 900 }}>™</span> Trademark Utilities
                  </h3>
                  
                  {/* Item 1 */}
                  <a href="https://tmrsearch.ipindia.gov.in/estatus" target="_blank" rel="noopener noreferrer" className="ip-tool-item" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.25rem', backgroundColor: '#F8FAFC', borderRadius: '16px', border: '1px solid #F1F5F9' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', borderRadius: '50%', backgroundColor: '#EFF6FF', flexShrink: 0 }}>
                      <span style={{ fontSize: '1.1rem' }}>🔍</span>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0F172A' }}>Trademark Status Check →</div>
                      <div style={{ fontSize: '0.75rem', color: '#64748B', marginTop: '0.15rem', lineHeight: 1.4 }}>Check the real-time application status of your pending trademark in India.</div>
                    </div>
                  </a>

                  {/* Item 2 */}
                  <a href="https://tmrsearch.ipindia.gov.in/tmrpublicsearch" target="_blank" rel="noopener noreferrer" className="ip-tool-item" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.25rem', backgroundColor: '#F8FAFC', borderRadius: '16px', border: '1px solid #F1F5F9' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', borderRadius: '50%', backgroundColor: '#EFF6FF', flexShrink: 0 }}>
                      <span style={{ fontSize: '1.1rem' }}>🔎</span>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0F172A' }}>Trademark Public Search →</div>
                      <div style={{ fontSize: '0.75rem', color: '#64748B', marginTop: '0.15rem', lineHeight: 1.4 }}>Run a comprehensive clearance search before filing your new brand name or logo.</div>
                    </div>
                  </a>

                  {/* Item 3 */}
                  <a href="https://euipo.europa.eu/ec2/" target="_blank" rel="noopener noreferrer" className="ip-tool-item" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.25rem', backgroundColor: '#F8FAFC', borderRadius: '16px', border: '1px solid #F1F5F9' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', borderRadius: '50%', backgroundColor: '#EFF6FF', flexShrink: 0 }}>
                      <span style={{ fontSize: '1.1rem' }}>📚</span>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0F172A' }}>Trademark Class Finder →</div>
                      <div style={{ fontSize: '0.75rem', color: '#64748B', marginTop: '0.15rem', lineHeight: 1.4 }}>Search Nice classification database to identify appropriate categories for your products.</div>
                    </div>
                  </a>
                </div>

                {/* COLUMN 2: PATENT & DESIGN PORTALS */}
                <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '24px', padding: '2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid #F1F5F9', paddingBottom: '0.75rem', margin: '0 0 0.5rem 0' }}>
                    <span style={{ color: '#F59E0B' }}>💡</span> Patent & Design Portals
                  </h3>

                  {/* Item 1 */}
                  <a href="https://iprsearch.ipindia.gov.in/PublicSearch/PublicationSearch/ApplicationStatus" target="_blank" rel="noopener noreferrer" className="ip-tool-item" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.25rem', backgroundColor: '#F8FAFC', borderRadius: '16px', border: '1px solid #F1F5F9' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', borderRadius: '50%', backgroundColor: '#FFFBEB', flexShrink: 0 }}>
                      <span style={{ fontSize: '1.1rem' }}>⚙️</span>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0F172A' }}>Patent Status Check →</div>
                      <div style={{ fontSize: '0.75rem', color: '#64748B', marginTop: '0.15rem', lineHeight: 1.4 }}>Track examination status, publications, or patent grants on the official IP India portal.</div>
                    </div>
                  </a>

                  {/* Item 2 */}
                  <a href="https://search.ipindia.gov.in/DesignApplicationStatus" target="_blank" rel="noopener noreferrer" className="ip-tool-item" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.25rem', backgroundColor: '#F8FAFC', borderRadius: '16px', border: '1px solid #F1F5F9' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', borderRadius: '50%', backgroundColor: '#FFFBEB', flexShrink: 0 }}>
                      <span style={{ fontSize: '1.1rem' }}>📐</span>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0F172A' }}>Design Status Check →</div>
                      <div style={{ fontSize: '0.75rem', color: '#64748B', marginTop: '0.15rem', lineHeight: 1.4 }}>Track real-time application status of your industrial design registration in India.</div>
                    </div>
                  </a>

                  {/* Item 3 */}
                  <a href="https://www.wipo.int/en/web/classification-locarno" target="_blank" rel="noopener noreferrer" className="ip-tool-item" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.25rem', backgroundColor: '#F8FAFC', borderRadius: '16px', border: '1px solid #F1F5F9' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', borderRadius: '50%', backgroundColor: '#FFFBEB', flexShrink: 0 }}>
                      <span style={{ fontSize: '1.1rem' }}>🎨</span>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0F172A' }}>Design Class Finder <span style={{ whiteSpace: 'nowrap' }}>(Locarno) →</span></div>
                      <div style={{ fontSize: '0.75rem', color: '#64748B', marginTop: '0.15rem', lineHeight: 1.4 }}>Search WIPO Locarno classification to identify appropriate design categories for your product.</div>
                    </div>
                  </a>

                  {/* Item 4 */}
                  <a href="https://ipindia.gov.in/" target="_blank" rel="noopener noreferrer" className="ip-tool-item" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.25rem', backgroundColor: '#F8FAFC', borderRadius: '16px', border: '1px solid #F1F5F9' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', borderRadius: '50%', backgroundColor: '#FFFBEB', flexShrink: 0 }}>
                      <span style={{ fontSize: '1.1rem' }}>🏛️</span>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0F172A' }}>IP India Official <span style={{ whiteSpace: 'nowrap' }}>Website →</span></div>
                      <div style={{ fontSize: '0.75rem', color: '#64748B', marginTop: '0.15rem', lineHeight: 1.4 }}>Official site of the Controller General of Patents, Designs and Trade Marks (CGPDTM).</div>
                    </div>
                  </a>
                </div>

                {/* COLUMN 3: SUPREME COURT OF INDIA */}
                <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '24px', padding: '2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid #F1F5F9', paddingBottom: '0.75rem', margin: '0 0 0.5rem 0' }}>
                    <span style={{ color: '#EF4444' }}>⚖️</span> Hon'ble Supreme Court of India & Links
                  </h3>

                  {/* Item 1 */}
                  <a href="https://www.sci.gov.in/" target="_blank" rel="noopener noreferrer" className="ip-tool-item" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.25rem', backgroundColor: '#F8FAFC', borderRadius: '16px', border: '1px solid #F1F5F9' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', borderRadius: '50%', backgroundColor: '#FEE2E2', flexShrink: 0 }}>
                      <span style={{ fontSize: '1.1rem' }}>🏛️</span>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0F172A' }}>Hon'ble Supreme Court of <span style={{ whiteSpace: 'nowrap' }}>India →</span></div>
                      <div style={{ fontSize: '0.75rem', color: '#64748B', marginTop: '0.15rem', lineHeight: 1.4 }}>Access judgments, daily orders, cause lists, and case statuses of the highest court of India.</div>
                    </div>
                  </a>

                  {/* Dashed Box: Firm Affiliations */}
                  <div style={{ border: '1px dashed #CBD5E1', backgroundColor: '#F8FAFC', borderRadius: '16px', padding: '1.25rem' }}>
                    <div style={{ fontSize: '0.725rem', fontWeight: 800, color: '#64748B', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                      Firm Affiliations
                    </div>
                    <p style={{ fontSize: '0.8rem', color: '#475569', lineHeight: 1.5, margin: 0, fontWeight: 500 }}>
                      We actively represent academic institutions and startups under SIPP guidelines across CGPDTM offices in New Delhi, Mumbai, Chennai, and Kolkata.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        ) : (
          /* ==================================================
              SEARCH RESULTS LIST VIEW (EXACTLY MATCHING THE SECOND SCREENSHOT)
              ================================================== */
          <div>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span style={{
                background: '#FFEBE7',
                color: '#FF4E27',
                padding: '0.35rem 1.25rem',
                borderRadius: '999px',
                fontSize: '0.75rem',
                fontWeight: 800,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                display: 'inline-block',
                marginBottom: '1rem'
              }}>
                LEGAL PRACTICE AREAS
              </span>
              <h2 style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: '3rem',
                fontWeight: 900,
                color: '#0F172A',
                marginBottom: '0.75rem',
                letterSpacing: '-0.02em'
              }}>
                LEGAL SERVICES
              </h2>
              <p style={{ color: '#64748B', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.5 }}>
                Comprehensive business legal assistance spanning Intellectual Property, Corporate Compliance, and Commercial Litigation.
              </p>
            </div>

            {/* SEARCH DIRECTORY BAR */}
            <div style={{ maxWidth: '780px', margin: '0 auto 2.5rem auto' }}>
              <form onSubmit={handleSearchSubmit} style={{
                display: 'flex',
                background: '#FFFFFF',
                borderRadius: '99px',
                padding: '0.35rem 0.35rem 0.35rem 1.5rem',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)',
                border: '1px solid #E2E8F0',
                alignItems: 'center',
                position: 'relative'
              }}>
                <span style={{
                  color: '#94A3B8',
                  fontSize: '1.2rem',
                  marginRight: '0.75rem',
                  display: 'flex',
                  alignItems: 'center'
                }}>🔍</span>
                <input
                  type="text"
                  placeholder="Search legal services (e.g. Trademark, Patent, Copyright, Design, Contract...)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    flex: 1,
                    padding: '0.6rem 0',
                    border: 'none',
                    outline: 'none',
                    fontSize: '0.95rem',
                    fontFamily: 'Inter, sans-serif',
                    background: 'transparent',
                    color: '#1E293B'
                  }}
                />
                {searchQuery && (
                  <button 
                    type="button"
                    onClick={handleClearSearch}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#94A3B8',
                      cursor: 'pointer',
                      fontSize: '1.1rem',
                      padding: '0 0.75rem',
                      marginRight: '0.5rem'
                    }}
                  >
                    ✕
                  </button>
                )}
                <button
                  type="submit"
                  style={{
                    padding: '0.75rem 2rem',
                    borderRadius: '99px',
                    backgroundColor: '#FF4E27',
                    color: '#FFFFFF',
                    border: 'none',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    letterSpacing: '0.05em',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E0431F'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FF4E27'}
                >
                  Search
                </button>
              </form>

              {/* POPULAR TAGS IN RESULTS PAGE */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem 0.6rem',
                flexWrap: 'wrap',
                fontSize: '0.825rem',
                marginTop: '1rem'
              }}>
                <span style={{ color: '#64748B', fontWeight: 600 }}>Popular:</span>
                {POPULAR_KEYWORDS.map(keyword => (
                  <button
                    key={keyword}
                    onClick={() => handleKeywordClick(keyword)}
                    style={{
                      padding: '0.25rem 0.85rem',
                      borderRadius: '999px',
                      background: searchQuery.toLowerCase() === keyword.toLowerCase() ? '#FFEBE7' : '#FFFFFF',
                      color: searchQuery.toLowerCase() === keyword.toLowerCase() ? '#FF4E27' : '#334155',
                      border: '1px solid #E2E8F0',
                      fontWeight: 500,
                      cursor: 'pointer',
                      transition: 'var(--transition)'
                    }}
                  >
                    {keyword}
                  </button>
                ))}
              </div>
            </div>

            {/* RESULTS METADATA & BACK BUTTON */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid #E2E8F0',
              paddingBottom: '0.75rem',
              marginBottom: '1.5rem'
            }}>
              <span style={{
                fontSize: '0.75rem',
                fontWeight: 800,
                color: '#64748B',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                FOUND {filteredServices.length} {filteredServices.length === 1 ? 'RESULT' : 'RESULTS'}
              </span>
              <button 
                onClick={handleClearSearch}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#FF4E27',
                  fontSize: '0.775rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem'
                }}
              >
                ✕ Back to Overview
              </button>
            </div>

            {/* RESULTS CARD LIST (EXACT IP RANI LAYOUT STYLE) */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              marginBottom: '4rem'
            }}>
              {paginatedServices.length > 0 ? (
                paginatedServices.map((service, index) => (
                  <div 
                    key={index}
                    style={{
                      background: '#F8FAFC',
                      border: '1px solid #E2E8F0',
                      borderRadius: '16px',
                      padding: '1.5rem 1.75rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '1.5rem',
                      transition: 'var(--transition)',
                      cursor: 'pointer'
                    }}
                    onClick={() => openExploreModal(service)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 78, 39, 0.4)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      const btn = e.currentTarget.querySelector('.explore-link');
                      if (btn) (btn as HTMLElement).style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#E2E8F0';
                      e.currentTarget.style.transform = 'none';
                      const btn = e.currentTarget.querySelector('.explore-link');
                      if (btn) (btn as HTMLElement).style.transform = 'none';
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', flexWrap: 'wrap', marginBottom: '0.4rem' }}>
                        <span style={{
                          fontSize: '0.675rem',
                          fontWeight: 800,
                          color: '#FF4E27',
                          background: '#FFEBE7',
                          padding: '0.2rem 0.6rem',
                          borderRadius: '4px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em'
                        }}>
                          {service.category}
                        </span>
                        {service.subCategory && (
                          <>
                            <span style={{ color: '#94A3B8', fontSize: '0.75rem' }}>•</span>
                            <span style={{
                              fontSize: '0.75rem',
                              fontWeight: 600,
                              color: '#64748B'
                            }}>
                              {service.subCategory}
                            </span>
                          </>
                        )}
                      </div>
                      
                      <h4 style={{
                        fontFamily: 'Outfit, sans-serif',
                        fontSize: '1.25rem',
                        fontWeight: 800,
                        color: '#0F172A',
                        margin: '0.25rem 0 0.5rem 0'
                      }}>
                        {service.title}
                      </h4>
                      
                      <p style={{
                        color: '#475569',
                        fontSize: '0.875rem',
                        lineHeight: 1.5,
                        margin: 0,
                        maxWidth: '850px'
                      }}>
                        {service.description}
                      </p>
                    </div>

                    <div 
                      className="explore-link"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        color: '#FF4E27',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        whiteSpace: 'nowrap',
                        transition: 'var(--transition)'
                      }}
                    >
                      Explore ➔
                    </div>
                  </div>
                ))
              ) : (
                <div style={{
                  background: '#F8FAFC',
                  borderRadius: '16px',
                  padding: '3rem',
                  border: '1px solid #E2E8F0',
                  textAlign: 'center',
                  color: '#64748B'
                }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>🔍</div>
                  <h4 style={{ fontWeight: 700, color: '#0F172A', marginBottom: '0.25rem' }}>No Practice Areas Found</h4>
                  <p style={{ fontSize: '0.875rem' }}>Try adjusting your search terms.</p>
                </div>
              )}
            </div>

            {/* PAGINATION CONTROLS */}
            {totalPages > 1 && (
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '0.5rem',
                margin: '2rem 0 3.5rem 0',
                flexWrap: 'wrap'
              }}>
                {/* Previous Page */}
                <button
                  disabled={currentPage === 1}
                  onClick={() => {
                    setCurrentPage(prev => Math.max(1, prev - 1));
                    window.scrollTo({ top: (document.getElementById('legal')?.offsetTop || 0) - 80, behavior: 'smooth' });
                  }}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid #E2E8F0',
                    background: currentPage === 1 ? '#F1F5F9' : '#FFFFFF',
                    color: currentPage === 1 ? '#94A3B8' : '#334155',
                    cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    transition: 'var(--transition)'
                  }}
                >
                  ← Prev
                </button>

                {/* Page Numbers */}
                {(() => {
                  const pages = [];
                  const maxVisible = 5;
                  let start = Math.max(1, currentPage - 2);
                  let end = Math.min(totalPages, currentPage + 2);

                  if (currentPage <= 3) {
                    end = Math.min(totalPages, maxVisible);
                  }
                  if (currentPage > totalPages - 3) {
                    start = Math.max(1, totalPages - maxVisible + 1);
                  }

                  if (start > 1) {
                    pages.push(1);
                    if (start > 2) pages.push('...');
                  }

                  for (let i = start; i <= end; i++) {
                    pages.push(i);
                  }

                  if (end < totalPages) {
                    if (end < totalPages - 1) pages.push('...');
                    pages.push(totalPages);
                  }

                  return pages.map((page, idx) => {
                    if (page === '...') {
                      return (
                        <span key={`dots-${idx}`} style={{ color: '#94A3B8', padding: '0 0.25rem' }}>
                          ...
                        </span>
                      );
                    }

                    const isCurrent = currentPage === page;
                    return (
                      <button
                        key={`page-${page}`}
                        onClick={() => {
                          setCurrentPage(page as number);
                          window.scrollTo({ top: (document.getElementById('legal')?.offsetTop || 0) - 80, behavior: 'smooth' });
                        }}
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '50%',
                          border: isCurrent ? 'none' : '1px solid #E2E8F0',
                          background: isCurrent ? '#FF4E27' : '#FFFFFF',
                          color: isCurrent ? '#FFFFFF' : '#334155',
                          cursor: isCurrent ? 'default' : 'pointer',
                          fontWeight: 700,
                          fontSize: '0.875rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.2s ease',
                          boxShadow: isCurrent ? '0 4px 10px rgba(255, 78, 39, 0.2)' : 'none'
                        }}
                      >
                        {page}
                      </button>
                    );
                  });
                })()}

                {/* Next Page */}
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => {
                    setCurrentPage(prev => Math.min(totalPages, prev + 1));
                    window.scrollTo({ top: (document.getElementById('legal')?.offsetTop || 0) - 80, behavior: 'smooth' });
                  }}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid #E2E8F0',
                    background: currentPage === totalPages ? '#F1F5F9' : '#FFFFFF',
                    color: currentPage === totalPages ? '#94A3B8' : '#334155',
                    cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    transition: 'var(--transition)'
                  }}
                >
                  Next →
                </button>
              </div>
            )}

            {/* VIEW ALL LEGAL SERVICES RETREAT ACTION */}
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <button
                onClick={() => onOpenStrategyModal?.('All Legal Services Consultation Request')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#FF4E27',
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  cursor: 'pointer',
                  transition: 'var(--transition)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.gap = '0.75rem'; }}
                onMouseLeave={(e) => { e.currentTarget.style.gap = '0.4rem'; }}
              >
                View All Legal Services →
              </button>
            </div>

          </div>
        )}

        {/* ==================================================
            LEGAL CLIENT GUARANTEES & TRANSPARENCY SECTION
            ================================================== */}
        <div className="section-header" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 2.5rem auto' }}>
          <div className="section-tag" style={{ fontSize: '0.75rem', padding: '0.25rem 0.85rem', marginBottom: '0.6rem' }}>LEGAL, COMPLIANCE & TRANSPARENCY</div>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2.4rem', fontWeight: 900, marginBottom: '0.85rem', color: 'var(--secondary)' }}>
            100% Legal Transparency & Client Guarantees
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
            Our ironclad commitments: zero lock-in contracts, post-pay flexibility, full IP copyright ownership, and enterprise data privacy protection.
          </p>
        </div>

        {/* LEGAL TABS NAVIGATION */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', marginBottom: '2.25rem', flexWrap: 'wrap' }}>
          {['privacy', 'terms', 'zero-lockin', 'post-pay', 'ip'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              style={{
                padding: '0.55rem 1.25rem',
                borderRadius: '999px',
                fontSize: '0.8rem',
                fontWeight: 700,
                color: activeTab === tab ? '#FFFFFF' : 'var(--secondary)',
                backgroundColor: activeTab === tab ? 'var(--primary)' : 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {tab === 'privacy' && '🔒 Privacy Policy (DPDP & GDPR)'}
              {tab === 'terms' && '📜 Terms of Service & SLA'}
              {tab === 'zero-lockin' && '🔓 Zero Lock-In Contract Terms'}
              {tab === 'post-pay' && '💳 Post-Pay Milestone Policy'}
              {tab === 'ip' && '✒️ 100% IP & Copyright Transfer'}
            </button>
          ))}
        </div>

        {/* TAB CONTENT CARDS */}
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '20px', padding: '2.25rem 2rem', boxShadow: '0 8px 25px rgba(11,19,42,0.03)', maxWidth: '900px', margin: '0 auto 2.75rem auto' }}>
          {activeTab === 'privacy' && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.85rem' }}>
                <div style={{ fontSize: '1.75rem' }}>🔒</div>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 900, color: 'var(--secondary)', fontFamily: 'Outfit, sans-serif' }}>Privacy Policy & Data Protection Compliance</h3>
              </div>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '0.9rem', marginBottom: '1.15rem' }}>
                Digital Digix strictly adheres to international data privacy standards including India's Digital Personal Data Protection (DPDP) Act 2023 and the General Data Protection Regulation (GDPR).
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', color: 'var(--text-muted)', fontSize: '0.85rem', paddingLeft: 0, listStyle: 'none' }}>
                <li>✓ <strong>Encrypted Data Transfer</strong>: All customer lead data and CRM connections use 256-bit SSL encryption.</li>
                <li>✓ <strong>Zero Data Selling</strong>: We never sell, rent, or share your campaign data or customer leads with third parties.</li>
                <li>✓ <strong>Explicit Consent</strong>: All lead forms incorporate explicit opt-in checkboxes for WhatsApp and email communication.</li>
                <li>✓ <strong>Right to Erasure</strong>: Clients can request complete deletion of stored campaign records at any time.</li>
              </ul>
            </div>
          )}

          {activeTab === 'terms' && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.85rem' }}>
                <div style={{ fontSize: '1.75rem' }}>📜</div>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 900, color: 'var(--secondary)', fontFamily: 'Outfit, sans-serif' }}>Terms of Service & Service Level Agreement (SLA)</h3>
              </div>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '0.9rem', marginBottom: '1.15rem' }}>
                Our SLA guarantees clear execution timelines, transparent milestone reporting, and dedicated account manager response times.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', color: 'var(--text-muted)', fontSize: '0.85rem', paddingLeft: 0, listStyle: 'none' }}>
                <li>✓ <strong>2-Hour Response Time</strong>: Dedicated account managers respond within 2 business hours via WhatsApp/Email.</li>
                <li>✓ <strong>Weekly KPI Reporting</strong>: Weekly performance updates covering ad spend, cost-per-lead, and verified ROAS.</li>
                <li>✓ <strong>Ad Spend Control</strong>: Direct access and 100% ownership of your Meta & Google Ads billing accounts.</li>
              </ul>
            </div>
          )}

          {activeTab === 'zero-lockin' && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.85rem' }}>
                <div style={{ fontSize: '1.75rem' }}>🔓</div>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 900, color: 'var(--secondary)', fontFamily: 'Outfit, sans-serif' }}>Zero Lock-In Contract Terms</h3>
              </div>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '0.9rem', marginBottom: '1.15rem' }}>
                Unlike traditional agencies that tie businesses into 6 to 12-month lock-in contracts, Digital Digix operates on a 100% month-to-month performance basis.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', color: 'var(--text-muted)', fontSize: '0.85rem', paddingLeft: 0, listStyle: 'none' }}>
                <li>✓ <strong>Cancel Anytime</strong>: Give 14 days notice at any point with zero exit penalties or cancellation fees.</li>
                <li>✓ <strong>Earned Trust</strong>: We earn your business every single month through measurable leads and revenue growth.</li>
              </ul>
            </div>
          )}

          {activeTab === 'post-pay' && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.85rem' }}>
                <div style={{ fontSize: '1.75rem' }}>💳</div>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 900, color: 'var(--secondary)', fontFamily: 'Outfit, sans-serif' }}>Post-Pay Milestone Flexibility</h3>
              </div>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '0.9rem', marginBottom: '1.15rem' }}>
                We offer flexible post-pay milestone payment terms for verified clients. Payments are released after campaign deliverables and verification checkpoints are completed.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', color: 'var(--text-muted)', fontSize: '0.85rem', paddingLeft: 0, listStyle: 'none' }}>
                <li>✓ <strong>Milestone Verification</strong>: Pay after design approval, website staging review, or monthly ad setup completion.</li>
                <li>✓ <strong>GST Tax Invoicing</strong>: 100% compliant tax invoices provided for full business expense deduction.</li>
              </ul>
            </div>
          )}

          {activeTab === 'ip' && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.85rem' }}>
                <div style={{ fontSize: '1.75rem' }}>✒️</div>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 900, color: 'var(--secondary)', fontFamily: 'Outfit, sans-serif' }}>100% IP & Commercial Copyright Transfer</h3>
              </div>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '0.9rem', marginBottom: '1.15rem' }}>
                You retain full legal ownership of all assets created by Digital Digix during your engagement.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', color: 'var(--text-muted)', fontSize: '0.85rem', paddingLeft: 0, listStyle: 'none' }}>
                <li>✓ <strong>Source Code & Vector Files</strong>: Full delivery of editable Adobe Illustrator, Photoshop, Next.js, and Figma files.</li>
                <li>✓ <strong>Ad Creatives & Video Reels</strong>: Full commercial digital advertising rights transferred upon project completion.</li>
              </ul>
            </div>
          )}
        </div>

        {/* BOTTOM CONSULTATION BANNER */}
        <div style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', borderRadius: '24px', padding: '2.75rem 2.5rem', color: '#FFF', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem', boxShadow: 'var(--shadow-lg)', border: '1px solid rgba(255,255,255,0.1)', flexWrap: 'wrap', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ maxWidth: '620px' }}>
            <span className="section-tag" style={{ background: 'rgba(255,78,39,0.2)', color: '#FF4E27', border: 'none', marginBottom: '0.5rem', fontSize: '0.725rem', padding: '0.25rem 0.85rem' }}>
              TRANSPARENT AGENCY CONTRACTS
            </span>
            <h3 style={{ fontSize: '1.85rem', fontWeight: 900, color: '#FFF', marginBottom: '0.4rem', fontFamily: 'Outfit, sans-serif' }}>
              Have Questions About Our Legal Terms & SLAs?
            </h3>
            <p style={{ fontSize: '0.925rem', color: '#94A3B8', lineHeight: 1.5 }}>
              Talk directly with our founders about custom SLAs, NDAs, and post-pay milestone agreements.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <a
              href="mailto:contact.digitaldigix@gmail.com?subject=Legal%20Terms%20and%20SLA%20Consultation"
              className="btn btn-primary"
              style={{ padding: '0.8rem 1.6rem', fontSize: '0.875rem' }}
            >
              Contact Legal Desk 📧
            </a>
            <button
              className="btn btn-secondary"
              style={{ color: '#FFF', borderColor: 'rgba(255,255,255,0.3)', padding: '0.8rem 1.6rem', fontSize: '0.875rem' }}
              onClick={() => {
                if (onOpenStrategyModal) onOpenStrategyModal('Legal Terms & SLA Consultation');
              }}
            >
              Request Sample NDA / SLA ➔
            </button>
          </div>
        </div>

      </div>

      {/* ==================================================
          INTERACTIVE LEGAL EXPLORER MODAL (POPUP ON EXPLORE CLICK)
          ================================================== */}
      {selectedService && (
        <div 
          className="modal-overlay" 
          onClick={closeExploreModal}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(15, 23, 42, 0.6)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '1.5rem'
          }}
        >
          <div 
            style={{
              background: 'var(--bg-card)',
              border: '1.5px solid var(--border-color)',
              borderRadius: '24px',
              width: '100%',
              maxWidth: '850px',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: 'var(--shadow-lg)',
              animation: 'animate-fade-slide 0.3s ease-out'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div style={{ 
              position: 'sticky', 
              top: 0, 
              zIndex: 10, 
              backgroundColor: 'var(--bg-card)', 
              borderBottom: '1px solid var(--border-color)', 
              padding: '1.25rem 2rem', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'between' 
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{
                    fontSize: '0.675rem',
                    fontWeight: 900,
                    color: 'var(--primary)',
                    background: '#FFF1EE',
                    padding: '0.15rem 0.5rem',
                    borderRadius: '4px',
                    textTransform: 'uppercase'
                  }}>
                    {selectedService.category}
                  </span>
                  {selectedService.subCategory && (
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                      • {selectedService.subCategory}
                    </span>
                  )}
                </div>
                <h3 style={{ 
                  fontSize: '1.6rem', 
                  fontWeight: 900, 
                  color: 'var(--secondary)',
                  fontFamily: 'Outfit, sans-serif',
                  margin: '0.35rem 0 0 0'
                }}>
                  {selectedService.title}
                </h3>
              </div>
              <button 
                onClick={closeExploreModal} 
                style={{ 
                  width: '36px', 
                  height: '36px', 
                  borderRadius: '50%', 
                  backgroundColor: 'var(--bg-main)', 
                  border: '1px solid var(--border-color)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontSize: '1.1rem', 
                  fontWeight: 800, 
                  color: 'var(--secondary)',
                  cursor: 'pointer',
                  marginLeft: 'auto'
                }}
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '2rem' }}>
              
              {/* Detailed Description */}
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--secondary)', fontFamily: 'Outfit, sans-serif', marginBottom: '0.6rem' }}>
                  Overview & Scope of Service
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: 1.6, margin: 0 }}>
                  {selectedService.explanation}
                </p>
              </div>

              {/* Grid: Deliverables & Process */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '1.75rem',
                marginBottom: '2rem'
              }}>
                {/* Key Deliverables */}
                <div style={{
                  background: 'var(--bg-main)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '16px',
                  padding: '1.5rem'
                }}>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--secondary)', fontFamily: 'Outfit, sans-serif', marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    📦 Key Deliverables
                  </h4>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', paddingLeft: '1rem', margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    {selectedService.deliverables.map((item, idx) => (
                      <li key={idx} style={{ paddingLeft: '0.15rem' }}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Our Process */}
                <div style={{
                  background: 'var(--bg-main)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '16px',
                  padding: '1.5rem'
                }}>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--secondary)', fontFamily: 'Outfit, sans-serif', marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    ⚙️ Execution Process
                  </h4>
                  <ol style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', paddingLeft: '1.15rem', margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    {selectedService.process.map((step, idx) => (
                      <li key={idx} style={{ paddingLeft: '0.15rem' }}>{step}</li>
                    ))}
                  </ol>
                </div>
              </div>

              {/* Required Documents */}
              <div style={{
                background: 'var(--bg-main)',
                border: '1px solid var(--border-color)',
                borderRadius: '16px',
                padding: '1.5rem',
                marginBottom: '2rem'
              }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--secondary)', fontFamily: 'Outfit, sans-serif', marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  📄 Required Documents
                </h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', paddingLeft: '1rem', margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  {selectedService.documents.map((doc, idx) => (
                    <li key={idx} style={{ paddingLeft: '0.15rem' }}>{doc}</li>
                  ))}
                </ul>
              </div>

              {/* Action Area */}
              <div style={{
                textAlign: 'center',
                borderTop: '1px solid var(--border-color)',
                paddingTop: '1.75rem',
                display: 'flex',
                justifyContent: 'center'
              }}>
                <button
                  onClick={closeExploreModal}
                  className="btn btn-secondary"
                  style={{
                    padding: '0.85rem 2rem',
                    borderRadius: '12px',
                    fontSize: '0.925rem',
                    fontWeight: 700
                  }}
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};
