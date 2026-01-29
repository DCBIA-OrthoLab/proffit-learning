/* Load data.xml and build a simple viewer (sections/pages + images).
   Works as static site (S3). */

const MODULES = [
  // LEVEL I - Growth and Development
  // Unit A - Concepts of Physical Growth and Development
  {name: "The Study of Physical Growth", id: "studyphysgrowth", level: 1, unit: "A",description:"Timing and variability in growth, as revealed by measurement techniques and experimental studies."},
  {name: "The Nature of Craniofacial Growth", id: "naturecfgrowth", level: 1, unit: "A",description:"Overview of embryologic development of the head and face; sites and types of growth in the cranial vault, cranial base, maxilla and mandible."},
  {name: "Theories of Craniofacial Growth", id: "theoriescfgrowth", level: 1, unit: "A",description:"Growth theories (Sicher, Scott and Moss) in the context of growth sites, centers, types, mechanism and determinant."},
  
  // Unit B - Early Stages of Development
  {name: "Growth and Development During the Preschool Years", id: "preschoolgrowth", level: 1, unit: "B",description:"Physical growth and physiologic development from infancy through the primary dentition."},
  {name: "Primary Tooth Eruption and Exfoliation", id: "primarytootheruption", level: 1, unit: "B",description:"The timing of eruption of primary teeth and the pattern of resorption as permanent teeth replace them."},
  {name: "The Development of Occlusion in the Primary and Transitional Dentition", id: "primaryocclusaldev", level: 1, unit: "B",description:"Primary molar relationships and the transition in permanent molar relationships as the primary molars are lost, and the importance and fate of spaces in the primary dentition."},
  
  // Unit C - Eruption of the Permanent Teeth and Late Stages of Development
  {name: "Eruption of Permanent Teeth", id: "eruptionpermteeth", level: 1, unit: "C",description:"The timing and sequence of eruption of the permanent teeth, and the changes in arch dimensions as this occurs."},
  {name: "Process of Tooth Eruption", id: "processtootheruption", level: 1, unit: "C",description:"The process of tooth eruption, and the control of eruption prior to emergence of a tooth and after it enters the oral cavity, using the results of recent human studies."},
  {name: "Physical Growth at Adolescence", id: "physgrowthadolescence", level: 1, unit: "C",description:"The hormonal control of adolescent growth, the way sexual development relates to growth of the face and jaws, and the methods of determining growth status."},
  {name: "Patterns of Facial Growth", id: "patternsfacialgrowth", level: 1, unit: "C",description:"The concept of growth pattern, jaw rotations as viewed with implant superimpositions and the differences in growth for children with Class II /III and short / long face growth."},
  {name: "Maturational Changes", id: "maturationalchanges", level: 1, unit: "C",description:"The decline of growth to slow adult levels at different times for different planes of space, the relationship of late incisor crowding to mandibular growth, and decreasing pulp chambers and tooth wear with aging."},
  
  // Unit D - Psychosocial Growth and Development
  {name: "Psychosocial Development", id: "psychosocialdev", level: 1, unit: "D",description:"A discussion of stages in psychosocial development from the perspective of classical and operant conditioning and observational learning, stages of emotional and cognitive development, and their use in communicating with child patients and parents."},

  // LEVEL II - Growth and Development
  // Unit A - The Nature of Orthodontic Problems
  {name: "Malocclusion: Definition and Prevalence", id: "malocclusion", level: 2, unit: "A",description:"Data from the NHANES-III study are used to evaluate types of malocclusion in the United States and the differences in modern American population groups."},
  {name: "Known Causes of Malocclusion", id: "malocclusioncauses", level: 2, unit: "A",description:"Types of malocclusion with known causes: fetal molding and birth injuries, syndromes, trauma, disturbances of dental development, genetic influences."},
  {name: "Equilibrium Theory and the Etiology of Malocclusion", id: "equilibrium", level: 2, unit: "A",description:"A review of the way in which environmental influences affect jaw relationships and dental occlusion."},
  
  // Unit B - Diagnostic Procedures
  {name: "Facial Form Analysis", id: "facialform", level: 2, unit: "B",description:"Evaluating jaw relationships and tooth-lip relationships during clinical examination of a child."},
  {name: "Cephalometric Tracing Techniques", id: "cephanalysis", level: 2, unit: "B",description:"How to locate cephalometric landmarks and use them in constructing an accurate cephalometric tracing."},
  {name: "Cephalometric Superimposition", id: "cephsuper", level: 2, unit: "B",description:"How to use cranial base, maxillary and mandibular superimpositions to evaluate changes due to growth and/or treatment."},
  {name: "Space Analysis and Its Interpretation", id: "spaceanalysis", level: 2, unit: "B",description:"The assumptions that underlie space analysis, the method of using it, and its interpretation in the light of expected changes in dental relationships."},
  {name: "Ackerman-Proffit Classification", id: "ackermanproffit", level: 2, unit: "B",description:"A systematic approach to detecting significant deviations from normal jaw and dental relationships, based on the five characteristics of malocclusion."},

  // LEVEL III - Biomechanics and Preclinical Orthodontics
  // Unit A
  {name: "Essentials of Orthodontic Diagnosis", id: "essentialsdx", level: 3, unit: "A",description:"Using systematic description to develop a problem list for individual patients."},
  {name: "Concepts of Orthodontic Treatment Planning", id: "conceptstxplan", level: 3, unit: "A",description:"The triage approach to determining the complexity of treatment for orthodontic problems."},
  {name: "Biologic Response to Orthodontic Force", id: "biologyorthotx", level: 3, unit: "A",description:"The nature and sequence of events when light vs. heavy pressure is applied to a tooth to induceremodeling of alveolar bone and tooth movement."},
  {name: "Mechanical Principles in Controlling Orthodontic Force", id: "controlorthoforce", level: 3, unit: "A",description:"Effects of archwire material, size and beam length; design considerations in contemporary removable and fixed appliances."},
  {name: "Orthodontic Anchorage and Controlled Tooth Movement", id: "anchorage", level: 3, unit: "A",description:"Orthodontic anchorage considerations in producing different types of tooth movement."},
  
  // Unit B
  {name: "Space Management in Preadolescent Children", id: "spacemgt", level: 3, unit: "B",description:"Interpreting results of mixed dentition space analysis in planning space maintenance, space regaining, space management for mild / moderate crowding, and serial extraction."},
  {name: "Crossbites & Vertical Problems in Children", id: "transversevertical", level: 3, unit: "B",description:"Skeletal vs. dental considerations in treatment of anterior crossbite, posterior crossbite, deep bite and open bite."},
  {name: "Concepts of Adjunctive Orthodontic Treatment", id: "adjunctconcepts", level: 3, unit: "B",description:"Diagnosis, treatment planning and biomechanical considerations in adjunctive treatment of adults with perio / restorative / other treatment needs."},
  {name: "Adjunctive Orthodontic Treatment Procedures", id: "adjunctprocedures", level: 3, unit: "B",description:"Molar uprighting, posterior crossbite correction, forced eruption and incisor alignment in adjunctive treatment."},

  // LEVEL IV - Advanced Orthodontics
  // Unit A - Orthodontic Treatment Concepts
  {name: "Why Do We Do Orthodontics?", id: "whyortho", level: 4, unit: "A",description:"Effects of malocclusion on health, function and psychosocial well-being are reasons for orthodontic treatment."},
  {name: "To Extract or Not To Extract, Part 1: Class I Crowding/Protrusion", id: "extract1", level: 4, unit: "A",description:"For crowding and protrusion of incisors, esthetics and stability determine the decision to expand the dental arches vs. reducing tooth mass or number."},
  
  // Unit B - Complex Treatment
  {name: "To Extract or Not To Extract, Part 2: Camouflage?", id: "extract2", level: 4, unit: "B",description:"Camouflage (reducing or increasing incisor prominence) vs. surgery in treatment of Class II and Class III problems."},
  {name: "Special Considerations In Orthodontics for Adults", id: "adultortho", level: 4, unit: "B",description:"Adults differ from children and adolescents in motivation for orthodontic treatment, periodontal considerations, patient management and use of adjunctive procedures."},
  {name: "Complex Adjunctive Treatment", id: "complexadjuncttx", level: 4, unit: "B",description:"A discussion of interactions among specialists in sequencing and carrying out complex treatment for adults with multiple types of dental problems."},
  {name: "Orthodontic Retention", id: "retention", level: 4, unit: "B",description:"The reasons for retention: PDL reorganization, gingival fiber effects, and equilibrium changes due to growth."},
  
  // Unit C - Treatment Timing in Complex Problems
  {name: "Indications for Orthognathic Surgery", id: "indicationssurgery", level: 4, unit: "C",description:"Orthognathic surgical procedures and the indications for their use in terms of the severity of jaw discrepancies and the limitations of orthodontic camouflage."},
  {name: "Orthodontic Management of Patients with Cleft Lip and Palate", id: "clefttx", level: 4, unit: "C",description:"The sequence of care and types of treatment at appropriate ages for cleft lip / palate patients."},
  {name: "The Best Time For Orthodontic Treatment", id: "txtiming", level: 4, unit: "C",description:"Considerations in treatment timing and current knowledge about the preferred time for treatment of Class I, II and III problems."},
  
  // Unit D - Professional Interactions
  {name: "Interaction with Orthodontists", id: "orthointeract", level: 4, unit: "D",description:"A discussion of what you, the family dentist, should expect from the orthodontist and what he or she should expect from you in referral interactions and coordination of orthodontics with other dental treatment."},
  {name: "Meet Your New Young Patient", id: "youngpatient", level: 4, unit: "D",description:"Video of an interview with mother and potential patient daughter, to discuss orthodontic aspects of her treatment plan."},
  {name: "Accelerated Tooth Movement?", id: "acceltoothmovement", level: 4, unit: "D",description:"An overview of possible ways to manipulate the biology of tooth movement and reduce treatment time."}
];

function textContentSafe(node){
  return node ? (node.textContent || "").trim() : "";
}

function resolveImagePath(path, moduleId){
  // XML paths look like: acceltoothmovement/images/xxx.jpg
  // In your ZIP, images are in ./images/xxx.jpg
  if(!path) return "";
  const file = path.split("/").pop();
  return `Modules/${moduleId}/images/${file}`;
}

function extractRichText(pageTextEl){
  // Keep basic formatting from the XML fragments (p, ul, ol, li, etc.)
  if(!pageTextEl) return "";
  // Build HTML from children by serializing
  const parts = [];
  for(const child of pageTextEl.childNodes){
    if(child.nodeType === Node.ELEMENT_NODE){
      parts.push(child.outerHTML);
    }else if(child.nodeType === Node.TEXT_NODE){
      const t = child.textContent.trim();
      if(t) parts.push(`<p>${t}</p>`);
    }
  }
  return parts.join("\n");
}

function buildModel(xml, moduleId){
  const pres = xml.querySelector("presentation");
  const title = textContentSafe(pres.querySelector(":scope > title"));
  const subtitle = textContentSafe(pres.querySelector(":scope > subtitle"));

  const sections = [];
  const sectionEls = pres.querySelectorAll("sections > section");
  sectionEls.forEach((secEl, sIdx) => {
    const secTitle = textContentSafe(secEl.querySelector(":scope > title")) || `Section ${sIdx+1}`;
    const pages = [];
    secEl.querySelectorAll(":scope > pages > page").forEach((pageEl, pIdx) => {
      const pageTitle = textContentSafe(pageEl.querySelector(":scope > title")) || `Page ${pIdx+1}`;
      const pageType = pageEl.getAttribute("pageType") || "content";
      const pageTextEl = pageEl.querySelector(":scope > pageText");
      const bodyHtml = extractRichText(pageTextEl);

      const resources = [];
      pageEl.querySelectorAll(":scope > resources > resource").forEach((resEl) => {
        const type = resEl.getAttribute("resourceType") || "";
        if(type !== "image") return;
        const loc = resEl.getAttribute("resourceLocation") || "";
        const thumb = resEl.getAttribute("thumbnailLocation") || "";
        const label = textContentSafe(resEl.querySelector(":scope > label"));
        // caption can contain <p> etc.
        const capEl = resEl.querySelector(":scope > caption");
        const caption = capEl ? capEl.innerHTML.trim() : "";
        resources.push({
          type,
          src: resolveImagePath(loc, moduleId),
          thumb: resolveImagePath(thumb, moduleId) || resolveImagePath(loc, moduleId),
          label,
          caption
        });
      });

      // Parse test choices if it's a test page
      let testData = null;
      if(pageType === "test"){
        const choicesEl = pageEl.querySelector(":scope > choices");
        if(choicesEl){
          const correctChoiceIdx = parseInt(choicesEl.getAttribute("correctChoice") || "1") - 1;
          const choices = [];
          choicesEl.querySelectorAll(":scope > choice").forEach((choiceEl, cIdx) => {
            choices.push({
              text: textContentSafe(choiceEl),
              isCorrect: cIdx === correctChoiceIdx
            });
          });
          
          const correctResponseEl = pageEl.querySelector(":scope > correctResponse");
          const incorrectResponseEl = pageEl.querySelector(":scope > incorrectResponse");
          
          testData = {
            choices,
            correctResponse: correctResponseEl ? correctResponseEl.innerHTML.trim() : "",
            incorrectResponse: incorrectResponseEl ? incorrectResponseEl.innerHTML.trim() : ""
          };
        }
      }

      // A page is a test if pageType attribute is "test"
      const isActualTest = pageType === "test";

      pages.push({
        id: `${sIdx}-${pIdx}`,
        sectionIndex: sIdx,
        pageIndex: pIdx,
        title: pageTitle,
        bodyHtml,
        resources,
        pageType: isActualTest ? "test" : "content",
        testData
      });
    });

    sections.push({
      title: secTitle,
      index: sIdx,
      pages
    });
  });

  return { title, subtitle, sections };
}

function flattenPages(model){
  const all = [];
  model.sections.forEach(sec => sec.pages.forEach(p => all.push(p)));
  return all;
}

function areAllPagesInSectionViewed(sectionIndex){
  // Check if all non-test pages in the ENTIRE MODULE have been viewed
  // (not just in this section, since tests might be in different sections)
  const nonTestPages = PAGES.filter(p => p.pageType !== "test");
  
  // If there are no non-test pages, test pages should NOT be locked
  if(nonTestPages.length === 0) return false;
  
  // If there are non-test pages, check if all have been viewed
  return nonTestPages.every(p => VIEWED_PAGES.has(p.id));
}

function renderTOC(model){
  const toc = document.getElementById("moduleTocDesktop");
  if(!toc) {
    console.warn("TOC element not found");
    return;
  }
  
  toc.innerHTML = "";

  model.sections.forEach((sec) => {
    const wrapper = document.createElement("div");
    wrapper.className = "section";
    const btn = document.createElement("button");
    btn.type = "button";
    btn.innerHTML = `<span>${sec.title}</span><span class="section-count">${sec.pages.length} page(s)</span>`;
    btn.addEventListener("click", () => wrapper.classList.toggle("open"));
    wrapper.appendChild(btn);

    const pagesDiv = document.createElement("div");
    pagesDiv.className = "pages";

    sec.pages.forEach((p) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "page-link";
      b.dataset.pageId = p.id;
      
      // Add lock icon for test pages that require viewing all other pages first
      let lockIcon = "";
      if(p.pageType === "test"){
        lockIcon = ' <span class="lock-icon">🔒</span>';
      }
      
      b.innerHTML = `<span class="idx">${String(p.pageIndex+1).padStart(2,"0")}</span><span class="ttl">${p.title}</span>${lockIcon}`;
      
      // Apply styles based on saved progress
      // Only mark non-test pages as "viewed" with green indicator
      if(VIEWED_PAGES.has(p.id) && p.pageType !== "test"){
        b.classList.add("viewed");
      }
      
      if(TEST_RESULTS.has(p.id)){
        const result = TEST_RESULTS.get(p.id);
        if(result === "correct"){
          b.classList.add("test-correct");
          // Remove lock icon if test is answered
          const lockIcon = b.querySelector(".lock-icon");
          if(lockIcon) lockIcon.remove();
        } else if(result === "incorrect"){
          b.classList.add("test-incorrect");
        }
      }
      
      // Disable test pages until all other pages in section are viewed
      if(p.pageType === "test"){
        const isLocked = !areAllPagesInSectionViewed(p.sectionIndex);
        
        b.classList.add("test-page");
        if(isLocked){
          b.disabled = true;
          b.classList.add("disabled-test");
          // Prevent clicks on locked test pages
          b.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            alert("You must review all pages before accessing the test.");
          });
        } else {
          // Normal click for unlocked test pages
          b.addEventListener("click", () => selectPage(p.id, {scroll:true}));
          // Remove lock icon if test is now unlocked
          const lockEl = b.querySelector(".lock-icon");
          if(lockEl) lockEl.remove();
        }
      } else {
        // Normal click for non-test pages
        b.addEventListener("click", () => selectPage(p.id, {scroll:true}));
      }
      
      pagesDiv.appendChild(b);
    });

    wrapper.appendChild(pagesDiv);
    toc.appendChild(wrapper);
  });

  // Don't open first section by default - let user click to open
}

function setActiveLink(pageId){
  document.querySelectorAll(".page-link").forEach(el => {
    el.classList.toggle("active", el.dataset.pageId === pageId);
  });
  
  // Mark as viewed
  VIEWED_PAGES.add(pageId);
  
  // Update the page link to show it's been viewed (but NOT for test pages)
  const currentLink = document.querySelector(`[data-page-id="${pageId}"]`);
  const currentPage = PAGE_BY_ID.get(pageId);
  if(currentLink && currentPage && currentPage.pageType !== "test"){
    currentLink.classList.add("viewed");
  }
  
  // Find and open the section that contains this page
  const page = PAGE_BY_ID.get(pageId);
  if(page){
    const sectionIndex = page.sectionIndex;
    const sections = document.querySelectorAll(".section");
    if(sections[sectionIndex]){
      sections[sectionIndex].classList.add("open");
    }
    
    // Check if all pages in this section are now viewed, and enable test pages if so
    if(areAllPagesInSectionViewed(sectionIndex)){
      console.log(`All non-test pages viewed! Unlocking all tests...`);
      
      // Find all test pages in the ENTIRE module
      const testPageIds = [];
      PAGES.forEach(p => {
        if(p.pageType === "test"){
          testPageIds.push(p.id);
        }
      });
      
      console.log(`Found ${testPageIds.length} test pages to unlock: ${testPageIds.join(", ")}`);
      
      // Now update each one
      testPageIds.forEach(testPageId => {
        const link = document.querySelector(`[data-page-id="${testPageId}"]`);
        if(link){
          console.log(`Found link for test page ${testPageId}, updating it...`);
          link.disabled = false;
          link.classList.remove("disabled-test");
          
          // Remove the lock icon
          const lockIcon = link.querySelector(".lock-icon");
          if(lockIcon){
            console.log(`Removing lock icon from ${testPageId}`);
            lockIcon.remove();
          }
          
          // Replace the click handler - remove old one and add new one
          const newLink = link.cloneNode(true);
          newLink.addEventListener("click", () => {
            console.log(`Clicking unlocked test page ${testPageId}`);
            selectPage(testPageId, {scroll:true});
          });
          link.parentNode.replaceChild(newLink, link);
          console.log(`Replaced click handler for ${testPageId}`);
        } else {
          console.log(`Could not find link for test page ${testPageId}`);
        }
      });
    } else {
      console.log(`Not all pages viewed yet`);
    }
  }
}

function updateTestPageLink(pageId, result){
  // Update the page link in the sidebar to show test result (correct=green, incorrect=red)
  const link = document.querySelector(`[data-page-id="${pageId}"]`);
  if(link){
    if(result === "correct"){
      link.classList.remove("test-incorrect");
      link.classList.add("test-correct");
    } else if(result === "incorrect"){
      link.classList.remove("test-correct");
      link.classList.add("test-incorrect");
    }
  }
  
  // Save progress after test answer
  saveModuleProgress();
}

function renderPage(pageData){
  document.getElementById("pageTitle").textContent = pageData.title;
  
  const pageBody = document.getElementById("pageBody");
  
  // Check if this is a test page
  if(pageData.pageType === "test" && pageData.testData){
    // Check if this test has already been answered
    const previousResult = TEST_RESULTS.get(pageData.id);
    
    if(previousResult){
      // Test already answered, show the result again
      pageBody.innerHTML = `
        <div class="test-question">
          ${pageData.bodyHtml}
          <div class="test-choices">
            ${pageData.testData.choices.map((choice, idx) => `
              <button class="test-choice" data-choice-idx="${idx}" disabled ${choice.isCorrect ? 'data-correct="true"' : ''}>
                ${choice.text}
              </button>
            `).join('')}
          </div>
          <div class="test-feedback" id="testFeedback"></div>
        </div>
      `;
      
      // Show the previous result
      const feedbackDiv = document.getElementById("testFeedback");
      if(previousResult === "correct"){
        feedbackDiv.innerHTML = `
          <div class="feedback correct">
            <strong>✓ Correct!</strong>
            <div>${pageData.testData.correctResponse}</div>
          </div>
        `;
        const correctBtn = pageBody.querySelector('[data-correct="true"]');
        if(correctBtn) correctBtn.classList.add("correct");
      } else {
        feedbackDiv.innerHTML = `
          <div class="feedback incorrect">
            <strong>✗ Incorrect</strong>
            <div>${pageData.testData.incorrectResponse}</div>
          </div>
        `;
      }
      
      // Disable all buttons
      pageBody.querySelectorAll(".test-choice").forEach(b => {
        b.disabled = true;
      });
    } else {
      // Test not yet answered, show interactive buttons
      pageBody.innerHTML = `
        <div class="test-question">
          ${pageData.bodyHtml}
          <div class="test-choices">
            ${pageData.testData.choices.map((choice, idx) => `
              <button class="test-choice" data-choice-idx="${idx}">
                ${choice.text}
              </button>
            `).join('')}
          </div>
          <div class="test-feedback" id="testFeedback"></div>
        </div>
      `;
      
      // Add event listeners to choices
      pageBody.querySelectorAll(".test-choice").forEach((btn, idx) => {
        btn.addEventListener("click", () => {
          const choice = pageData.testData.choices[idx];
          const feedbackDiv = document.getElementById("testFeedback");
          
          if(choice.isCorrect){
            feedbackDiv.innerHTML = `
              <div class="feedback correct">
                <strong>✓ Correct!</strong>
                <div>${pageData.testData.correctResponse}</div>
              </div>
            `;
            btn.classList.add("correct");
            // Save result as correct
            TEST_RESULTS.set(pageData.id, "correct");
            // Update the page link in sidebar to show green
            updateTestPageLink(pageData.id, "correct");
          } else {
            feedbackDiv.innerHTML = `
              <div class="feedback incorrect">
                <strong>✗ Incorrect</strong>
                <div>${pageData.testData.incorrectResponse}</div>
              </div>
              <div class="feedback correct-answer">
                <strong>La bonne réponse était :</strong>
                <div>${pageData.testData.choices.find(c => c.isCorrect).text}</div>
              </div>
            `;
            btn.classList.add("incorrect");
            // Mark correct answer button
            const correctBtn = pageBody.querySelector('[data-correct="true"]');
            if(correctBtn) correctBtn.classList.add("correct");
            // Save result as incorrect
            TEST_RESULTS.set(pageData.id, "incorrect");
            // Update the page link in sidebar to show red
            updateTestPageLink(pageData.id, "incorrect");
          }
          
          // Disable all choices after answering
          pageBody.querySelectorAll(".test-choice").forEach(b => {
            b.disabled = true;
          });
        });
      });
    }
  } else {
    // Regular content page
    pageBody.innerHTML = pageData.bodyHtml || "<p>(Aucun texte)</p>";
  }

  const media = document.getElementById("pageMedia");
  media.innerHTML = "";

  pageData.resources.forEach((r, idx) => {
    const card = document.createElement("div");
    card.className = "thumb";
    card.innerHTML = `
      <img src="${r.thumb}" alt="${(r.label || ("Image " + (idx+1))).replaceAll('"','&quot;')}" loading="lazy">
      <div class="label">${(r.label || ("Image " + (idx+1)))}</div>
    `;
    card.addEventListener("click", () => openModal(r.src, r.caption || r.label || ""));
    media.appendChild(card);
  });

  if(pageData.resources.length === 0){
    media.innerHTML = "";
  }

  // Add navigation buttons at the end
  let pageNavigation = document.getElementById("pageNavigation");
  if(!pageNavigation){
    // Create it if it doesn't exist
    const page = document.getElementById("page");
    pageNavigation = document.createElement("div");
    pageNavigation.id = "pageNavigation";
    page.appendChild(pageNavigation);
  }
  
  pageNavigation.innerHTML = `
    <div class="page-navigation">
      <button id="prevBtn" class="nav-btn nav-prev">← Previous</button>
      <span id="pageProgress" class="page-progress">Page 1/1</span>
      <button id="nextBtn" class="nav-btn nav-next">Next →</button>
    </div>
  `;
  
  document.getElementById("prevBtn").addEventListener("click", prevPage);
  document.getElementById("nextBtn").addEventListener("click", nextPage);
  
  updateNavigationButtons();
  updatePageProgress();
}

function renderHomeModule(moduleInfo){
  const page = document.getElementById("page");
  page.innerHTML = `
    <div class="page-title">${moduleInfo.name}</div>
    <div class="page-body" style="padding: 20px;">
      <p>Module chargé. Utilisez le sommaire à gauche pour naviguer.</p>
    </div>
  `;
}

async function getModuleStats(moduleId){
  // Get stats from saved progress
  const saved = localStorage.getItem(`module_${moduleId}`);
  
  // Get total non-test pages and test page IDs from XML
  // Only count pages with actual test choices as "tests"
  let totalNonTestPages = 0;
  const testPageIds = new Set();
  try {
    const res = await fetch(`Modules/${moduleId}/data.xml`, {cache:"no-store"});
    if(res.ok){
      const xmlText = await res.text();
      const xml = new DOMParser().parseFromString(xmlText, "application/xml");
      
      // Count pages based on whether they have choices
      let sectionIndex = 0;
      xml.querySelectorAll("sections > section").forEach(secEl => {
        let pageIndex = 0;
        secEl.querySelectorAll(":scope > pages > page").forEach(pageEl => {
          const pageId = `${sectionIndex}-${pageIndex}`;
          const pageType = pageEl.getAttribute("pageType") || "content";
          
          // Only treat as test if it's marked as test AND has choices
          if(pageType === "test"){
            const choicesEl = pageEl.querySelector(":scope > choices");
            if(choicesEl){
              testPageIds.add(pageId);
            } else {
              // No choices = treat as regular content
              totalNonTestPages++;
            }
          } else {
            totalNonTestPages++;
          }
          pageIndex++;
        });
        sectionIndex++;
      });
    }
  } catch(e) {
    console.error("Error loading module stats:", e);
  }
  
  if(!saved) return { 
    viewedCount: 0, 
    totalNonTestPages,
    correctTests: 0, 
    totalTests: 0, 
    score: 0 
  };
  
  const progress = JSON.parse(saved);
  
  // Count only non-test pages in viewed pages
  const viewedNonTestPages = progress.viewedPages.filter(pageId => {
    // Only count if it's NOT a test page (doesn't have choices)
    return !testPageIds.has(pageId);
  }).length;
  
  const testResults = Object.entries(progress.testResults || {});
  const correctTests = testResults.filter(([_, result]) => result === "correct").length;
  const totalTests = testResults.length;
  
  const score = totalTests > 0 ? Math.round((correctTests / totalTests) * 100) : 0;
  
  return {
    viewedCount: viewedNonTestPages,
    totalNonTestPages,
    correctTests,
    totalTests,
    score
  };
}

async function renderHomePage(){
  const sidebar = document.getElementById("sidebar");
  const layout = document.querySelector(".layout");
  const content = document.getElementById("content");
  const page = document.getElementById("page");
  const toc = document.getElementById("toc");

  // Show sidebar on home page for level navigation (if it exists)
  if(sidebar) sidebar.style.display = "block";
  layout.classList.add("home-view");
  
  // Make content adjust to sidebar
  if(content) content.style.maxWidth = "100%";
  
  // Change menu titles to "Modules" on home page
  const sidebarTitle = document.querySelector(".sidebar-title");
  if(sidebarTitle) sidebarTitle.textContent = "Modules";
  
  const levelsMenuToggle = document.getElementById("levelsMenuToggle");
  if(levelsMenuToggle) levelsMenuToggle.textContent = "Modules";

// Group modules by Level and Unit
const grouped = {};
MODULES.forEach(mod => {
  if (!grouped[mod.level]) grouped[mod.level] = {};
  if (!grouped[mod.level][mod.unit]) grouped[mod.level][mod.unit] = [];
  grouped[mod.level][mod.unit].push(mod);
});


  // Build HTML structure by Level and Unit
  let levelsHtml = "";
  for(let level = 1; level <= 4; level++){
    if(!grouped[level]) continue;
    
    const levelUnits = grouped[level];
    const unitKeys = Object.keys(levelUnits).sort();
    
    let unitsHtml = "";
    unitKeys.forEach(unit => {
      const mods = levelUnits[unit];
      let moduleCardsHtml = mods.map(mod => `
        <button class="module-card" data-module-id="${mod.id}" data-module-name="${mod.name.toLowerCase()}">
          <div class="module-card-inner">
            <div class="module-name">${mod.name}</div>
            <div class="module-description">${mod.description}</div>
            <div class="module-stats-placeholder">Loading...</div>
          </div>
        </button>
      `).join('');
      
      unitsHtml += `
        <div class="unit-group">
          <div class="unit-header">Unit ${unit}</div>
          <div class="unit-modules">
            ${moduleCardsHtml}
          </div>
        </div>
      `;
    });
    
    levelsHtml += `
      <div class="level-section">
        <div class="level-header">Level ${level}</div>
        <div class="level-units">
          ${unitsHtml}
        </div>
      </div>
    `;
  }

  // Render home page with hierarchical structure
  page.innerHTML = `
    <div class="modules-hierarchy" id="modulesHierarchy">
      ${levelsHtml}
    </div>
  `;
  
  // Add home-page class to remove constraining styles
  page.classList.add("home-page");

  // Add click handlers to module cards
  document.querySelectorAll(".module-card").forEach(btn => {
    btn.addEventListener("click", () => {
      const moduleId = btn.dataset.moduleId;
      loadModule(moduleId);
    });
  });
  
  // Setup search functionality using the topbar search
  const search = document.getElementById("search");
  search.value = ""; // Clear search
  
  // Remove old search handler if exists
  if(window._homeSearchHandler){
    search.removeEventListener("input", window._homeSearchHandler);
  }
  
  // Add new search handler for home page
  window._homeSearchHandler = (e) => {
    const query = e.target.value.toLowerCase().trim();
    const cards = document.querySelectorAll(".module-card");
    const levelSections = document.querySelectorAll(".level-section");
    const unitGroups = document.querySelectorAll(".unit-group");
    
    // Hide/show cards based on search
    cards.forEach(card => {
      const moduleName = card.dataset.moduleName;
      if(query === "" || moduleName.includes(query)){
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
    
    // Show/hide unit groups if they have visible cards
    unitGroups.forEach(unit => {
      const visibleCards = Array.from(unit.querySelectorAll(".module-card"))
        .filter(card => card.style.display !== "none");
      unit.style.display = visibleCards.length > 0 ? "" : "none";
    });
    
    // Show/hide level sections if they have visible units
    levelSections.forEach(level => {
      const visibleUnits = Array.from(level.querySelectorAll(".unit-group"))
        .filter(unit => unit.style.display !== "none");
      level.style.display = visibleUnits.length > 0 ? "" : "none";
    });
  };
  
  search.addEventListener("input", window._homeSearchHandler);
  
  // Load stats for each module asynchronously
  for(const mod of MODULES){
    const stats = await getModuleStats(mod.id);
    const card = document.querySelector(`[data-module-id="${mod.id}"]`);
    if(card){
      const hasProgress = stats.viewedCount > 0 || stats.totalTests > 0;
      
      if(hasProgress){
        card.classList.add("in-progress");
      }
      
      let statsHtml = "";
      // Always show pages count, tests if they exist
      statsHtml = `
        <div class="module-stats">
          ${stats.totalNonTestPages > 0 ? `<span class="stat-item">📖 ${stats.viewedCount}/${stats.totalNonTestPages} pages</span>` : ""}
          ${stats.totalTests > 0 ? `
            <span class="stat-item ${stats.correctTests === stats.totalTests ? 'completed' : 'in-progress'}">
              ✓ ${stats.correctTests}/${stats.totalTests} tests
            </span>
          ` : ""}
        </div>
      `;
      
      const placeholder = card.querySelector(".module-stats-placeholder");
      if(placeholder){
        placeholder.outerHTML = statsHtml || "";
      }
    }
  }
}

let MODEL = null;
let PAGES = [];
let PAGE_BY_ID = new Map();
let CURRENT_PAGE_ID = null;
let CURRENT_MODULE = null;
let CURRENT_PAGE_INDEX = -1;
let CURRENT_LEVEL = 'all'; // Track currently selected level
let VIEWED_PAGES = new Set();
let TEST_RESULTS = new Map(); // Track test results: pageId -> "correct" or "incorrect"
let MODAL_ZOOM = 100; // Track modal zoom level
let MODAL_PAN_X = 0; // Track pan position
let MODAL_PAN_Y = 0;
let HOME_SCROLL_POSITION = 0; // Track home page scroll position

// Initialize modal controls
function initializeModalControls(){
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");
  const zoomLevel = document.getElementById("zoomLevel");
  const zoomInBtn = document.getElementById("zoomInBtn");
  const zoomOutBtn = document.getElementById("zoomOutBtn");
  const resetBtn = document.getElementById("resetBtn");
  const closeBtn = document.getElementById("modalClose");
  
  // Close modal only with the close button, not by clicking outside
  
  // Zoom in
  if(zoomInBtn){
    zoomInBtn.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      MODAL_ZOOM = Math.min(MODAL_ZOOM + 20, 300);
      const baseWidth = parseFloat(modalImg.dataset.baseWidth);
      const baseHeight = parseFloat(modalImg.dataset.baseHeight);
      const newWidth = baseWidth * (MODAL_ZOOM / 100);
      const newHeight = baseHeight * (MODAL_ZOOM / 100);
      modalImg.style.width = newWidth + "px";
      modalImg.style.height = newHeight + "px";
      zoomLevel.textContent = MODAL_ZOOM + "%";
    };
  }
  
  // Zoom out
  if(zoomOutBtn){
    zoomOutBtn.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      MODAL_ZOOM = Math.max(MODAL_ZOOM - 20, 50);
      const baseWidth = parseFloat(modalImg.dataset.baseWidth);
      const baseHeight = parseFloat(modalImg.dataset.baseHeight);
      const newWidth = baseWidth * (MODAL_ZOOM / 100);
      const newHeight = baseHeight * (MODAL_ZOOM / 100);
      modalImg.style.width = newWidth + "px";
      modalImg.style.height = newHeight + "px";
      zoomLevel.textContent = MODAL_ZOOM + "%";
    };
  }
  
  // Reset zoom
  if(resetBtn){
    resetBtn.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      MODAL_ZOOM = 100;
      MODAL_PAN_X = 0;
      MODAL_PAN_Y = 0;
      const baseWidth = parseFloat(modalImg.dataset.baseWidth);
      const baseHeight = parseFloat(modalImg.dataset.baseHeight);
      const container = document.querySelector(".modal-image-container");
      container.scrollLeft = 0;
      container.scrollTop = 0;
      modalImg.style.width = baseWidth + "px";
      modalImg.style.height = baseHeight + "px";
      modalImg.style.transform = `none`;
      zoomLevel.textContent = "100%";
    };
  }
  
  // Close button - must work reliably
  if(closeBtn){
    closeBtn.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeModal();
      return false;
    };
  }
  
  // Prevent modal closing when clicking on controls area
  const controls = document.querySelector(".modal-controls");
  if(controls){
    controls.onclick = (e) => {
      e.stopPropagation();
    };
  }
  
  // Panning
  let isDragging = false;
  let startX, startY;
  modalImg.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    modalImg.style.cursor = 'grabbing';
  });
  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const scale = MODAL_ZOOM / 100;
    const deltaX = e.clientX - startX;
    const deltaY = e.clientY - startY;
    MODAL_PAN_X += deltaX;
    MODAL_PAN_Y += deltaY;
    startX = e.clientX;
    startY = e.clientY;
    const container = document.querySelector(".modal-image-container");
    container.scrollLeft -= deltaX;
    container.scrollTop -= deltaY;
  });
  document.addEventListener('mouseup', () => {
    isDragging = false;
    modalImg.style.cursor = 'grab';
  });
  modalImg.addEventListener('dragstart', (e) => e.preventDefault());

  // Handle image container resize
  const container = document.querySelector(".modal-image-container");
  let isResizing = false;
  let resizeStartY = 0;
  let resizeStartX = 0;
  let resizeStartHeight = 0;
  let resizeStartWidth = 0;

  container.addEventListener('mousedown', (e) => {
    // Check if mouse is in the bottom-right corner (resize handle area)
    const rect = container.getBoundingClientRect();
    const distFromRight = rect.right - e.clientX;
    const distFromBottom = rect.bottom - e.clientY;
    
    // Enable resize if in the bottom-right 20px corner
    if(distFromRight < 20 && distFromBottom < 20){
      isResizing = true;
      resizeStartY = e.clientY;
      resizeStartX = e.clientX;
      resizeStartHeight = container.offsetHeight;
      resizeStartWidth = container.offsetWidth;
      document.body.style.cursor = 'se-resize';
      e.preventDefault();
    }
  });

  document.addEventListener('mousemove', (e) => {
    if (!isResizing) return;
    const deltaY = e.clientY - resizeStartY;
    const deltaX = e.clientX - resizeStartX;
    const newHeight = Math.max(200, Math.min(resizeStartHeight + deltaY, window.innerHeight * 0.8));
    const newWidth = Math.max(300, Math.min(resizeStartWidth + deltaX, window.innerWidth * 0.9));
    container.style.height = newHeight + 'px';
    container.style.width = newWidth + 'px';
    
    // Adjust modal width to fit the image container
    const modal = document.getElementById("imgModal");
    const modalPadding = 24; // padding on each side
    const newModalWidth = newWidth + modalPadding;
    modal.style.width = newModalWidth + 'px';
  });

  document.addEventListener('mouseup', () => {
    isResizing = false;
    document.body.style.cursor = 'auto';
  });
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", initializeModalControls);
document.addEventListener("DOMContentLoaded", initializeSidebarToggle);
document.addEventListener("DOMContentLoaded", initializeLevelsMenu);
document.addEventListener("DOMContentLoaded", initializeModuleTocMenu);

function initializeSidebarToggle() {
  const sidebarToggle = document.getElementById("sidebarToggle");
  const sidebar = document.querySelector(".sidebar");
  const layout = document.querySelector(".layout");
  const content = document.querySelector(".content");

  if (!sidebarToggle || !sidebar) return;

  // Toggle sidebar on button click
  sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    layout.classList.toggle("sidebar-open");
  });

  // Close sidebar when clicking on content (on mobile)
  if (content) {
    content.addEventListener("click", () => {
      if (window.innerWidth <= 900) {
        sidebar.classList.remove("open");
        layout.classList.remove("sidebar-open");
      }
    });
  }

  // Close sidebar when window is resized back to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      sidebar.classList.remove("open");
      layout.classList.remove("sidebar-open");
    }
  });
}

function initializeLevelsMenu() {
  const levelsMenuToggle = document.getElementById("levelsMenuToggle");
  const levelsMenu = document.getElementById("levelsMenu");
  const mobileLevelItems = document.querySelectorAll(".level-item");
  const searchLevels = document.getElementById("searchLevels");

  if (!levelsMenuToggle || !levelsMenu) return;

  // Toggle levels menu on button click
  levelsMenuToggle.addEventListener("click", () => {
    levelsMenu.classList.toggle("open");
    levelsMenuToggle.classList.toggle("open");
  });

  // Search functionality for levels menu - filters modules on the page
  if (searchLevels) {
    searchLevels.addEventListener("input", function() {
      const searchTerm = this.value.toLowerCase().trim();
      const cards = document.querySelectorAll(".module-card");
      const levelSections = document.querySelectorAll(".level-section");
      const unitGroups = document.querySelectorAll(".unit-group");
      
      // Hide/show cards based on search
      cards.forEach(card => {
        const moduleName = card.dataset.moduleName;
        if (searchTerm === "" || moduleName.includes(searchTerm)) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      });
      
      // Show/hide unit groups if they have visible cards
      unitGroups.forEach(unit => {
        const visibleCards = Array.from(unit.querySelectorAll(".module-card"))
          .filter(card => card.style.display !== "none");
        unit.style.display = visibleCards.length > 0 ? "" : "none";
      });
      
      // Show/hide level sections if they have visible units
      levelSections.forEach(level => {
        const visibleUnits = Array.from(level.querySelectorAll(".unit-group"))
          .filter(unit => unit.style.display !== "none");
        level.style.display = visibleUnits.length > 0 ? "" : "none";
      });
    });
  }

  // Level items click handlers
  mobileLevelItems.forEach(item => {
    item.addEventListener("click", function() {
      // Remove active from all level items
      mobileLevelItems.forEach(cat => cat.classList.remove("active"));
      // Add active to clicked item
      this.classList.add("active");

      const level = this.dataset.level;
      CURRENT_LEVEL = level;

      // Also update the sidebar if visible
      const sidebarLevelItems = document.querySelectorAll(".sidebar .toc-item[data-level]");
      sidebarLevelItems.forEach(item => item.classList.remove("active"));
      const activeSidebarItem = document.querySelector(`.sidebar .toc-item[data-level="${level}"]`);
      if (activeSidebarItem) {
        activeSidebarItem.classList.add("active");
      }

      // Close the menu after selection
      levelsMenu.classList.remove("open");
      levelsMenuToggle.classList.remove("open");

      // If on home page, filter modules by level
      if (!CURRENT_MODULE) {
        filterMobileModulesByLevel(level);
        // Scroll to top to show the selected level title
        window.scrollTo(0, 0);
      }
    });
  });

  // Close menu when clicking on content (on mobile)
  const content = document.querySelector(".content");
  if (content) {
    content.addEventListener("click", () => {
      if (window.innerWidth <= 900) {
        levelsMenu.classList.remove("open");
        levelsMenuToggle.classList.remove("open");
      }
    });
  }

  // Close menu when window is resized back to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      levelsMenu.classList.remove("open");
      levelsMenuToggle.classList.remove("open");
    }
  });
}

function initializeModuleTocMenu() {
  const moduleTocToggle = document.getElementById("moduleTocToggle");
  const moduleTocMenu = document.getElementById("moduleTocMenu");
  const moduleTocMenuContent = document.getElementById("moduleTocMenuContent");

  if (!moduleTocToggle || !moduleTocMenu) return;

  // Toggle module TOC menu on button click
  moduleTocToggle.addEventListener("click", () => {
    moduleTocMenu.classList.toggle("open");
    moduleTocToggle.classList.toggle("open");
  });

  // Close menu when clicking on content (on mobile)
  const content = document.querySelector(".content");
  if (content) {
    content.addEventListener("click", () => {
      if (window.innerWidth <= 900) {
        moduleTocMenu.classList.remove("open");
        moduleTocToggle.classList.remove("open");
      }
    });
  }

  // Close menu when window is resized back to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      moduleTocMenu.classList.remove("open");
      moduleTocToggle.classList.remove("open");
    }
  });
}

function populateModuleTocMenu() {
  const moduleTocMenuContent = document.getElementById("moduleTocMenuContent");
  if (!moduleTocMenuContent || !MODEL) return;

  // Clear previous content
  moduleTocMenuContent.innerHTML = "";

  // Generate TOC sections from MODEL
  MODEL.sections.forEach((section, sectionIdx) => {
    // Create section title
    const sectionDiv = document.createElement("div");
    sectionDiv.className = "toc-section";

    const sectionTitle = document.createElement("div");
    sectionTitle.className = "toc-section-title";
    sectionTitle.textContent = section.title;
    sectionDiv.appendChild(sectionTitle);

    // Add pages in this section
    section.pages.forEach((page) => {
      const pageLink = document.createElement("div");
      pageLink.className = "toc-page-item";
      pageLink.dataset.pageId = page.id;
      pageLink.textContent = page.title;

      // Check if page is viewed or is test page
      if (VIEWED_PAGES.has(page.id) && page.pageType !== "test") {
        pageLink.classList.add("viewed");
      }
      if (page.id === CURRENT_PAGE_ID) {
        pageLink.classList.add("active");
      }

      pageLink.addEventListener("click", () => {
        selectPage(page.id);
        // Close menu after selection
        const moduleTocMenu = document.getElementById("moduleTocMenu");
        moduleTocMenu.classList.remove("open");
        const moduleTocToggle = document.getElementById("moduleTocToggle");
        moduleTocToggle.classList.remove("open");
      });

      sectionDiv.appendChild(pageLink);
    });

    moduleTocMenuContent.appendChild(sectionDiv);
  });
}

function filterMobileModulesByLevel(level) {
  const levelSections = document.querySelectorAll(".level-section");
  const moduleCards = document.querySelectorAll(".module-card");

  if (level === "all") {
    // Show all levels
    levelSections.forEach(section => (section.style.display = "block"));
    moduleCards.forEach(card => (card.style.display = "block"));
  } else {
    // Show only selected level
    levelSections.forEach((section, index) => {
      const levelNumber = index + 1;
      if (levelNumber.toString() === level) {
        section.style.display = "block";
      } else {
        section.style.display = "none";
      }
    });
  }
}

function updateBreadcrumbs() {
  const breadcrumbs = document.getElementById("breadcrumbs");
  if (!breadcrumbs) return;

  // Hide breadcrumbs on home page
  if (!CURRENT_MODULE) {
    breadcrumbs.classList.add("hidden");
    return;
  }

  breadcrumbs.classList.remove("hidden");
  
  let html = '<span class="breadcrumb-item" onclick="goHome()">Modules</span>';
  html += '<span class="breadcrumb-separator">›</span>';

  // Get the module info from MODULES array
  const moduleInfo = MODULES.find(m => m.id === CURRENT_MODULE);
  if (moduleInfo) {
    // Add level
    if (moduleInfo.level) {
      const levelName = {1: "I", 2: "II", 3: "III", 4: "IV"}[moduleInfo.level] || moduleInfo.level;
      html += `<span class="breadcrumb-item">Level ${levelName}</span>`;
      html += '<span class="breadcrumb-separator">›</span>';
    }

    // Add module name
    html += `<span class="breadcrumb-item current">${moduleInfo.name}</span>`;
  }

  breadcrumbs.innerHTML = html;
}

function goHome() {
  CURRENT_MODULE = null;
  CURRENT_PAGE_ID = null;
  showHomePage();
}

function getPageIndex(pageId){
  return PAGES.findIndex(p => p.id === pageId);
}

function selectPage(pageId, opts={scroll:false}){
  const page = PAGE_BY_ID.get(pageId);
  if(!page) return;
  
  // If it's a test page, check if all other pages in the section have been viewed
  if(page.pageType === "test"){
    if(!areAllPagesInSectionViewed(page.sectionIndex)){
      alert("You must review all pages before accessing the test.");
      return;
    }
  }
  
  CURRENT_PAGE_ID = pageId;
  CURRENT_PAGE_INDEX = getPageIndex(pageId);
  setActiveLink(pageId);
  renderPage(page);
  updateNavigationButtons();
  updatePageProgress();
  updateBreadcrumbs();
  populateModuleTocMenu();
  
  // Save progress after each page change
  saveModuleProgress();
  
  if(opts.scroll){
    document.querySelector(".content").scrollTo({top:0, behavior:"smooth"});
    window.scrollTo({top:0, behavior:"smooth"});
  }
  // update URL hash
  history.replaceState(null, "", "#" + CURRENT_MODULE + "/" + encodeURIComponent(pageId));
}

function nextPage(){
  if(CURRENT_PAGE_INDEX < PAGES.length - 1){
    const nextPageId = PAGES[CURRENT_PAGE_INDEX + 1].id;
    selectPage(nextPageId, {scroll:true});
  } else {
    // Last page - go back to home
    backToHome();
  }
}

function prevPage(){
  if(CURRENT_PAGE_INDEX > 0){
    const prevPageId = PAGES[CURRENT_PAGE_INDEX - 1].id;
    selectPage(prevPageId, {scroll:true});
  }
}

function updateNavigationButtons(){
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");
  
  if(nextBtn){
    // Keep next button active even on last page, just change text
    if(CURRENT_PAGE_INDEX >= PAGES.length - 1){
      nextBtn.textContent = "Home →";
    } else {
      nextBtn.textContent = "Next →";
    }
    nextBtn.disabled = false;
  }
  if(prevBtn){
    prevBtn.disabled = CURRENT_PAGE_INDEX <= 0;
  }
}

function updatePageProgress(){
  const progressEl = document.getElementById("pageProgress");
  if(progressEl){
    const totalPages = PAGES.length;
    const currentPageNum = CURRENT_PAGE_INDEX + 1;
    progressEl.textContent = `Page ${currentPageNum}/${totalPages}`;
  }
}

function openModal(src, captionHtml){
  const modal = document.getElementById("imgModal");
  const img = document.getElementById("modalImg");
  const cap = document.getElementById("modalCaption");
  const container = document.querySelector(".modal-image-container");

  // Reset zoom BEFORE changing image
  MODAL_ZOOM = 100;
  MODAL_PAN_X = 0;
  MODAL_PAN_Y = 0;
  document.getElementById("zoomLevel").textContent = "100%";
  
  // Clear image first
  img.src = "";
  
  // Load image and set proper dimensions
  const tempImg = new Image();
  tempImg.onload = function() {
    // Container is 530px height, calculate width to fit it
    const containerHeight = 530;
    const containerWidth = container.clientWidth - 16; // subtract padding
    
    // Calculate dimensions to fit within container while maintaining aspect ratio
    const imgAspect = tempImg.width / tempImg.height;
    let displayWidth, displayHeight;
    
    if (imgAspect > (containerWidth / containerHeight)) {
      // Image is wider, fit to width
      displayWidth = containerWidth;
      displayHeight = containerWidth / imgAspect;
    } else {
      // Image is taller, fit to height
      displayHeight = containerHeight;
      displayWidth = containerHeight * imgAspect;
    }
    
    // Store base dimensions for zoom calculations
    img.dataset.baseWidth = displayWidth;
    img.dataset.baseHeight = displayHeight;
    img.dataset.originalWidth = tempImg.width;
    img.dataset.originalHeight = tempImg.height;
    
    img.style.width = displayWidth + "px";
    img.style.height = displayHeight + "px";
    img.style.transform = `none`;
    
    // Center the scroll when image is loaded
    setTimeout(() => {
      const container = document.querySelector(".modal-image-container");
      container.scrollLeft = (img.offsetWidth - container.clientWidth) / 2;
      container.scrollTop = (img.offsetHeight - container.clientHeight) / 2;
    }, 0);
  };
  
  // Set new image
  img.src = src;
  tempImg.src = src;
  
  cap.innerHTML = captionHtml || "";
  
  // Open modal
  modal.showModal();
}

function closeModal(){
  const modal = document.getElementById("imgModal");
  if(modal && modal.open) {
    // Reset modal and container sizes
    modal.style.width = '';
    const container = document.querySelector(".modal-image-container");
    if(container) {
      container.style.width = '';
      container.style.height = '';
    }
    modal.close();
  }
}

function applySearch(q){
  q = (q || "").trim().toLowerCase();
  const toc = document.getElementById("moduleTocDesktop");
  if(!q){
    // reset all
    toc.querySelectorAll(".page-link").forEach(b => b.style.display = "");
    toc.querySelectorAll(".section").forEach(s => s.style.display = "");
    return;
  }

  const matches = new Set();
  PAGES.forEach(p => {
    const hay = (p.title + " " + (p.bodyHtml || "").replace(/<[^>]*>/g," ")).toLowerCase();
    if(hay.includes(q)) matches.add(p.id);
  });

  toc.querySelectorAll(".section").forEach(secEl => {
    let anyVisible = false;
    secEl.querySelectorAll(".page-link").forEach(b => {
      const show = matches.has(b.dataset.pageId);
      b.style.display = show ? "" : "none";
      if(show) anyVisible = true;
    });
    secEl.style.display = anyVisible ? "" : "none";
    if(anyVisible) secEl.classList.add("open");
  });
}

function backToHome(){
  CURRENT_MODULE = null;
  MODEL = null;
  PAGES = [];
  PAGE_BY_ID.clear();
  CURRENT_PAGE_ID = null;

  // Safely update elements that may or may not exist
  const sidebar = document.getElementById("sidebar");
  if(sidebar) sidebar.style.display = "";
  
  const toc = document.getElementById("moduleTocDesktop");
  if(toc) {
    toc.innerHTML = "";
    toc.style.display = "none";
  }

  // Clear mobile TOC menu
  const moduleTocMenuContent = document.getElementById("moduleTocMenuContent");
  if(moduleTocMenuContent) {
    moduleTocMenuContent.innerHTML = "";
  }

  // Show level navigation again
  const levelNav = document.querySelector(".toc");
  if(levelNav) levelNav.style.display = "block";
  
  // Show levels menu button on home page
  const levelsMenu = document.getElementById("levelsMenu");
  if(levelsMenu) levelsMenu.style.display = "";
  
  // Hide module TOC menu on mobile
  const moduleTocMenu = document.getElementById("moduleTocMenu");
  if(moduleTocMenu) moduleTocMenu.style.display = "none";

  const search = document.getElementById("search");
  if(search) search.value = "";

  const presTitle = document.getElementById("presTitle");
  if(presTitle) presTitle.textContent = "Proffit Learning";
  
  const presSubtitle = document.getElementById("presSubtitle");
  if(presSubtitle) presSubtitle.textContent = "";
  
  const counts = document.getElementById("counts");
  if(counts) counts.textContent = "";

  // Save progress before going back
  saveModuleProgress();
  
  renderHomePage();
  
  // Restore the level filter after rendering
  setTimeout(() => {
    initLevelNavigation();
  }, 50);
  
  history.replaceState(null, "", "#");
  
  // Restore scroll position after render
  setTimeout(() => {
    window.scrollTo(0, HOME_SCROLL_POSITION);
  }, 0);
}

function saveModuleProgress(){
  // Save current module's progress to localStorage
  if(!CURRENT_MODULE) return;
  
  const progress = {
    viewedPages: Array.from(VIEWED_PAGES),
    testResults: Object.fromEntries(TEST_RESULTS)
  };
  
  localStorage.setItem(`module_${CURRENT_MODULE}`, JSON.stringify(progress));
}

function loadModuleProgress(moduleId){
  // Load module progress from localStorage
  const saved = localStorage.getItem(`module_${moduleId}`);
  if(saved){
    const progress = JSON.parse(saved);
    VIEWED_PAGES = new Set(progress.viewedPages);
    TEST_RESULTS = new Map(Object.entries(progress.testResults));
  } else {
    VIEWED_PAGES.clear();
    TEST_RESULTS.clear();
  }
}

async function loadModule(moduleId){
  const moduleInfo = MODULES.find(m => m.id === moduleId);
  if(!moduleInfo) return;

  // Save home scroll position before leaving
  HOME_SCROLL_POSITION = window.scrollY || document.documentElement.scrollTop || 0;

  try {
    const res = await fetch(`Modules/${moduleId}/data.xml`, {cache:"no-store"});
    if(!res.ok) throw new Error("Impossible de charger le module");
    const xmlText = await res.text();
    const xml = new DOMParser().parseFromString(xmlText, "application/xml");

    // error check
    const parserErr = xml.querySelector("parsererror");
    if(parserErr) throw new Error("XML invalide: " + parserErr.textContent);

    CURRENT_MODULE = moduleId;
    MODEL = buildModel(xml, moduleId);
    PAGES = flattenPages(MODEL);
    PAGE_BY_ID = new Map(PAGES.map(p => [p.id, p]));
    
    // Load saved progress for this module
    loadModuleProgress(moduleId);

    // Close the levels menu on mobile when loading a module and hide the button
    const levelsMenu = document.getElementById("levelsMenu");
    if(levelsMenu) {
      levelsMenu.classList.remove("open");
      levelsMenu.style.display = "none";
      const levelsMenuToggle = document.getElementById("levelsMenuToggle");
      if(levelsMenuToggle) levelsMenuToggle.classList.remove("open");
    }
    
    // Show module TOC menu on mobile
    const moduleTocMenu = document.getElementById("moduleTocMenu");
    if(moduleTocMenu) moduleTocMenu.style.display = "block";

    // Show sidebar and reset layout
    const sidebar = document.getElementById("sidebar");
    if(sidebar) sidebar.style.display = "";
    const layout = document.querySelector(".layout");
    if(layout) layout.classList.remove("home-view");
    const content = document.getElementById("content");
    if(content) content.style.maxWidth = "";
    window.scrollTo(0, 0); // Reset scroll for new module
    
    // Update breadcrumbs
    updateBreadcrumbs();

    // Safely update presentation elements
    const presTitle = document.getElementById("presTitle");
    if(presTitle) {
      presTitle.innerHTML = `<button id="backBtn" class="back-btn">← Home</button>`;
    }
    
    const presSubtitle = document.getElementById("presSubtitle");
    if(presSubtitle) {
      presSubtitle.textContent = MODEL.subtitle || "";
    }
    
    const counts = document.getElementById("counts");
    if(counts) {
      counts.textContent = `${MODEL.sections.length} section(s) • ${PAGES.length} page(s)`;
    }

    // Add back button event listener if it exists
    const backBtn = document.getElementById("backBtn");
    if(backBtn) {
      backBtn.addEventListener("click", backToHome);
    }

    // Hide level navigation and show module TOC
    const levelNav = document.querySelector(".toc");
    if(levelNav) levelNav.style.display = "none";
    const moduleToc = document.getElementById("moduleTocDesktop");
    if(moduleToc) moduleToc.style.display = "block";

    renderTOC(MODEL);

    // Populate mobile TOC menu
    populateModuleTocMenu();

    // Clear the page div and show empty state
    const page = document.getElementById("page");
    page.innerHTML = "";
    const pageTitle = document.createElement("div");
    pageTitle.id = "pageTitle";
    pageTitle.className = "page-title";
    pageTitle.textContent = "";
    
    const pageBody = document.createElement("div");
    pageBody.id = "pageBody";
    pageBody.className = "page-body";
    pageBody.innerHTML = `<div style="display:flex; align-items:center; justify-content:center; height:400px; color:var(--muted); font-size:16px;">Select a section from the summary</div>`;
    
    const pageMedia = document.createElement("div");
    pageMedia.id = "pageMedia";
    pageMedia.className = "page-media";
    
    page.appendChild(pageTitle);
    page.appendChild(pageBody);
    page.appendChild(pageMedia);

    // modal handlers
    document.getElementById("modalClose").addEventListener("click", closeModal);
    window.addEventListener("keydown", (e) => { if(e.key === "Escape") closeModal(); });

    // search - remove old listener and add new one
    const search = document.getElementById("search");
    search.removeEventListener("input", window._searchHandler);
    window._searchHandler = (e) => applySearch(search.value);
    search.addEventListener("input", window._searchHandler);

    // Load from hash if present
    const hash = decodeURIComponent((location.hash || "").replace(/^#[^/]*\/?/,""));
    if(hash && PAGE_BY_ID.has(hash)){
      selectPage(hash);
    }
  } catch(err) {
    console.error(err);
    const pageTitleEl = document.getElementById("pageTitle");
    const pageBodyEl = document.getElementById("pageBody");
    
    if(pageTitleEl) {
      pageTitleEl.textContent = "Erreur de chargement";
    }
    if(pageBodyEl) {
      pageBodyEl.innerHTML = `<p style="color:#ffb3b3">${err.message}</p>`;
    }
    backToHome();
  }
}

async function main(){
  // modal handlers - setup once
  document.getElementById("modalClose").addEventListener("click", closeModal);
  window.addEventListener("keydown", (e) => { if(e.key === "Escape") closeModal(); });

  // Check URL hash for module
  const hash = (location.hash || "").replace(/^#/,"");
  const [moduleId, pageId] = hash.split("/");

  if(moduleId && MODULES.some(m => m.id === moduleId)){
    await loadModule(moduleId);
    if(pageId && PAGE_BY_ID.has(pageId)){
      selectPage(decodeURIComponent(pageId));
    }
  } else {
    renderHomePage();
    document.getElementById("presTitle").textContent = "Proffit Learning";
    document.getElementById("presSubtitle").textContent = "";
  }
}

main().catch(err => {
  console.error(err);
  const pageTitleEl = document.getElementById("pageTitle");
  const pageBodyEl = document.getElementById("pageBody");
  
  if(pageTitleEl) {
    pageTitleEl.textContent = "Erreur";
  }
  if(pageBodyEl) {
    pageBodyEl.innerHTML = `<p style="color:#ffb3b3">${err.message}</p>`;
  }
});

// Level navigation functionality
function initLevelNavigation() {
  const levelItems = document.querySelectorAll('.toc-item[data-level]');
  const levelCountsEl = document.getElementById('levelCounts');

  // If no level items exist (sidebar removed), just return
  if (levelItems.length === 0) return;

  // Add click handlers for level navigation
  levelItems.forEach(item => {
    item.addEventListener('click', function() {
      // Remove active class from all items
      levelItems.forEach(lvl => lvl.classList.remove('active'));
      // Add active class to clicked item
      this.classList.add('active');
      
      CURRENT_LEVEL = this.dataset.level;
      filterModulesByLevel(CURRENT_LEVEL);
      updateLevelCounts();
    });
  });

  // Restore previous level selection
  restoreLevelSelection();

  function filterModulesByLevel(level) {
    const levelSections = document.querySelectorAll('.level-section');
    const moduleCards = document.querySelectorAll('.module-card');
    
    if (level === 'all') {
      // Show all levels
      levelSections.forEach(section => section.style.display = 'block');
      moduleCards.forEach(card => card.style.display = 'block');
    } else {
      // Show only selected level
      levelSections.forEach((section, index) => {
        const levelNumber = index + 1;
        if (levelNumber.toString() === level) {
          section.style.display = 'block';
        } else {
          section.style.display = 'none';
        }
      });
    }
  }

  function updateLevelCounts() {
    const visibleSections = document.querySelectorAll('.level-section:not([style*="display: none"])');
    const totalModules = MODULES.filter(mod => 
      CURRENT_LEVEL === 'all' || mod.level.toString() === CURRENT_LEVEL
    ).length;
    
    if (levelCountsEl) {
      levelCountsEl.textContent = `${visibleSections.length} level(s), ${totalModules} modules`;
    }
  }

  function restoreLevelSelection() {
    // Find and activate the current level tab
    const targetLevelItem = document.querySelector(`[data-level="${CURRENT_LEVEL}"]`);
    if (targetLevelItem) {
      // Remove active from all
      levelItems.forEach(item => item.classList.remove('active'));
      // Add active to current level
      targetLevelItem.classList.add('active');
      // Apply the filter
      filterModulesByLevel(CURRENT_LEVEL);
    }
    updateLevelCounts();
  }

  // Initialize counts
  updateLevelCounts();
}

// Initialize level navigation when on home page
document.addEventListener('DOMContentLoaded', function() {
  // Initialize the home page directly
  renderHomePage();
});

// Also initialize when home page is rendered programmatically
const originalRenderHomePage = renderHomePage;
renderHomePage = function() {
  originalRenderHomePage();
  setTimeout(() => initLevelNavigation(), 100);
};
