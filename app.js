// Medical Report Dashboard JavaScript

// Data structure for detailed information
const detailedData = {
  hormones: {
    progesterone: {
      name: "Progesterone",
      value: "48 nmol/L",
      reference: ">21 nmol/L for ovulation",
      status: "Excellent",
      interpretation: "Strong ovulation - excellent reproductive health",
      definition: "Progesterone is a hormone produced after ovulation that prepares the uterus for pregnancy. It's often called the 'pregnancy hormone' because it helps maintain a pregnancy once conception occurs.",
      details: [
        "Produced primarily by the corpus luteum in the ovaries",
        "Essential for preparing the uterine lining for implantation",
        "Helps maintain early pregnancy",
        "Also produced by the placenta during pregnancy"
      ],
      whatThisMeans: "Your progesterone level of 48 nmol/L is excellent and indicates strong ovulation occurred. This is a very positive sign for reproductive health and fertility. The high level shows your ovaries are functioning well and producing adequate hormones to support potential pregnancy.",
      normalRange: "Levels above 21 nmol/L confirm ovulation has occurred. Your level is more than double this threshold, indicating robust ovarian function."
    },
    fsh: {
      name: "FSH (Follicle Stimulating Hormone)",
      value: "6.6 IU/L",
      reference: "2-9 IU/L (follicular phase)",
      status: "Normal",
      interpretation: "Good ovarian reserve and function",
      definition: "FSH is a hormone produced by the pituitary gland that stimulates the growth and development of eggs in the ovaries. It's a key indicator of ovarian reserve and fertility potential.",
      details: [
        "Produced by the anterior pituitary gland",
        "Stimulates follicle development in the ovaries",
        "Levels vary throughout the menstrual cycle",
        "Higher levels may indicate declining ovarian reserve"
      ],
      whatThisMeans: "Your FSH level of 6.6 IU/L is well within the normal range and suggests good ovarian reserve. This means your ovaries likely contain a healthy number of eggs and are responding normally to hormonal signals.",
      normalRange: "Normal levels during the follicular phase are 2-9 IU/L. Your level is comfortably in the middle of this range."
    },
    lh: {
      name: "LH (Luteinizing Hormone)",
      value: "5.8 IU/L",
      reference: "2-13 U/L (follicular phase)",
      status: "Normal",
      interpretation: "Healthy pituitary and reproductive function",
      definition: "LH is produced by the pituitary gland and triggers ovulation - the release of a mature egg from the ovary. It works closely with FSH to regulate the menstrual cycle.",
      details: [
        "Triggers ovulation when it surges mid-cycle",
        "Works with FSH to regulate reproductive cycles",
        "Essential for corpus luteum formation",
        "Levels fluctuate throughout the menstrual cycle"
      ],
      whatThisMeans: "Your LH level of 5.8 IU/L indicates healthy pituitary function and normal reproductive hormone regulation. This level supports regular ovulation and menstrual cycles.",
      normalRange: "Normal follicular phase levels are 2-13 U/L. Your level is well within this healthy range."
    },
    estradiol: {
      name: "Estradiol",
      value: "120 pmol/L",
      reference: "0-1461 pmol/L",
      status: "Normal",
      interpretation: "Appropriate levels for menstrual cycle phase",
      definition: "Estradiol is the main form of estrogen produced by the ovaries. It regulates the menstrual cycle, maintains bone health, and affects many other body systems.",
      details: [
        "Most potent form of estrogen",
        "Regulates menstrual cycle and ovulation",
        "Important for bone health and cardiovascular function",
        "Levels vary significantly throughout the cycle"
      ],
      whatThisMeans: "Your estradiol level of 120 pmol/L is appropriate and indicates healthy ovarian hormone production. This level supports normal menstrual function and overall reproductive health.",
      normalRange: "Levels can range from 0-1461 pmol/L depending on cycle phase. Your level is within normal parameters."
    },
    prolactin: {
      name: "Prolactin",
      value: "181 mIU/L",
      reference: "74-399 mIU/L",
      status: "Normal",
      interpretation: "Normal pituitary function",
      definition: "Prolactin is a hormone produced by the pituitary gland, primarily known for stimulating milk production in breastfeeding women. It also plays roles in reproductive function and metabolism.",
      details: [
        "Primarily involved in milk production and breastfeeding",
        "Also affects reproductive hormones and ovulation",
        "Can be elevated by stress, certain medications, or tumors",
        "Normal levels indicate healthy pituitary function"
      ],
      whatThisMeans: "Your prolactin level of 181 mIU/L is normal and indicates healthy pituitary gland function. This level won't interfere with ovulation or reproductive health.",
      normalRange: "Normal levels for non-pregnant women are 74-399 mIU/L. Your level is comfortably within this range."
    },
    shbg: {
      name: "SHBG (Sex Hormone Binding Globulin)",
      value: "55 nmol/L",
      reference: "32.4-128 nmol/L",
      status: "Normal",
      interpretation: "Good protein binding capacity",
      definition: "SHBG is a protein that binds to and transports sex hormones (testosterone, estrogen) in the blood. It helps regulate hormone activity by controlling how much hormone is available to tissues.",
      details: [
        "Binds and transports sex hormones in blood",
        "Regulates hormone availability to tissues",
        "Levels affected by hormones, diet, and lifestyle",
        "Important for hormone balance and metabolism"
      ],
      whatThisMeans: "Your SHBG level of 55 nmol/L is normal and indicates good hormone transport and regulation. This level helps maintain appropriate balance of active hormones in your system.",
      normalRange: "Normal levels are 32.4-128 nmol/L. Your level is in the lower-middle portion of this range."
    },
    testosterone: {
      name: "Testosterone",
      value: "<1.39 nmol/L",
      reference: "0-2.29 nmol/L",
      status: "Normal",
      interpretation: "Appropriate levels for women",
      definition: "While often thought of as a 'male' hormone, testosterone is also important for women. It contributes to muscle strength, bone density, libido, and overall energy levels.",
      details: [
        "Important for muscle and bone health in women",
        "Contributes to energy levels and mood",
        "Affects libido and sexual function",
        "Produced by ovaries and adrenal glands"
      ],
      whatThisMeans: "Your testosterone level is appropriately low for women, which is normal and healthy. This level supports proper female hormone balance without causing masculinizing effects.",
      normalRange: "Normal levels for women are 0-2.29 nmol/L. Your level is within the expected range for females."
    },
    tsh: {
      name: "TSH (Thyroid Stimulating Hormone)",
      value: "1.96 mIU/L",
      reference: "0.27-4.2 mIU/L",
      status: "Optimal",
      interpretation: "Excellent thyroid function",
      definition: "TSH is produced by the pituitary gland to stimulate the thyroid gland. It's the best initial test for thyroid function. Lower levels within the normal range often indicate optimal thyroid health.",
      details: [
        "Controls thyroid hormone production",
        "Key indicator of thyroid function",
        "Lower levels (within normal) often indicate better function",
        "Affects metabolism, energy, and many body systems"
      ],
      whatThisMeans: "Your TSH level of 1.96 mIU/L is optimal! This level indicates your thyroid is functioning excellently. Many experts consider levels between 1-2.5 mIU/L to be ideal for optimal health and fertility.",
      normalRange: "While the reference range is 0.27-4.2 mIU/L, levels between 1-2.5 mIU/L are often considered optimal for health and fertility."
    }
  },
  nutrients: {
    ferritin: {
      name: "Ferritin",
      value: "7 μg/L",
      reference: "15-98 μg/L",
      status: "Critical",
      interpretation: "Severe iron deficiency requiring immediate treatment",
      definition: "Ferritin is a protein that stores iron in your body. It's the best indicator of your body's iron stores. Low ferritin indicates iron deficiency, even before anemia develops.",
      details: [
        "Primary storage form of iron in the body",
        "Best test for detecting iron deficiency",
        "Low levels indicate depleted iron stores",
        "Can affect energy, hair, nails, and cognitive function"
      ],
      whatThisMeans: "Your ferritin level of 7 μg/L is critically low and indicates severe iron deficiency. This explains symptoms like fatigue, shortness of breath, and cold hands/feet. Immediate treatment is essential to prevent complications.",
      symptoms: [
        "Extreme fatigue and weakness",
        "Shortness of breath during normal activities",
        "Cold hands and feet",
        "Hair loss or thinning",
        "Heart palpitations",
        "Restless leg syndrome",
        "Difficulty concentrating",
        "Brittle or spoon-shaped nails"
      ],
      urgentAction: "This level requires immediate medical attention. Iron deficiency this severe can affect heart function and quality of life. You should contact your healthcare provider within 1 week as requested.",
      normalRange: "Normal levels are 15-98 μg/L. Optimal levels for women are typically 30-40 μg/L or higher."
    },
    b12: {
      name: "Vitamin B12",
      value: "118 ng/L",
      reference: "110-940 ng/L",
      status: "Borderline",
      interpretation: "Low end of normal - may benefit from monitoring",
      definition: "Vitamin B12 is essential for nerve function, red blood cell formation, and DNA synthesis. It's primarily found in animal products, so deficiency can occur with certain diets or absorption problems.",
      details: [
        "Essential for nerve function and brain health",
        "Required for red blood cell formation",
        "Important for DNA synthesis and cell division",
        "Found primarily in animal products"
      ],
      whatThisMeans: "Your B12 level of 118 ng/L is technically normal but at the very low end. Some experts recommend levels above 200 ng/L for optimal health. While not immediately concerning, this should be monitored.",
      symptoms: [
        "Fatigue and weakness",
        "Numbness or tingling in hands/feet",
        "Memory problems or confusion",
        "Depression or mood changes",
        "Pale skin",
        "Shortness of breath"
      ],
      monitoring: "Watch for neurological symptoms like numbness, tingling, or memory issues. If these develop, contact your healthcare provider for further evaluation.",
      normalRange: "While 110-940 ng/L is the reference range, many experts prefer levels above 200 ng/L for optimal health."
    },
    folate: {
      name: "Folate (Folic Acid)",
      value: "6.7 μg/L",
      reference: "4-27 μg/L",
      status: "Normal",
      interpretation: "Adequate folate levels",
      definition: "Folate is a B vitamin essential for DNA synthesis, cell division, and red blood cell formation. It's particularly important for women of reproductive age to prevent birth defects.",
      details: [
        "Essential for DNA synthesis and cell division",
        "Critical for preventing neural tube defects in pregnancy",
        "Important for red blood cell formation",
        "Found in leafy greens, legumes, and fortified foods"
      ],
      whatThisMeans: "Your folate level of 6.7 μg/L is normal and adequate for your current needs. This level supports healthy cell function and would be sufficient if you were to become pregnant.",
      normalRange: "Normal levels are 4-27 μg/L. Your level is comfortably within this range and indicates adequate folate status."
    }
  }
};

// DOM elements
const modal = document.getElementById('detailModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const modalClose = document.querySelector('.modal-close');
const glossaryToggle = document.querySelector('.glossary-toggle');
const glossaryContent = document.getElementById('glossaryContent');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    addCardClickHandlers();
});

// Initialize all event listeners
function initializeEventListeners() {
    // Modal close events
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Escape key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });
    
    // Glossary toggle
    glossaryToggle.addEventListener('click', toggleGlossary);
}

// Add click handlers to all cards
function addCardClickHandlers() {
    // Hormone cards
    const hormoneCards = document.querySelectorAll('.hormone-card');
    hormoneCards.forEach(card => {
        const expandBtn = card.querySelector('.expand-btn');
        expandBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            const hormone = card.getAttribute('data-hormone');
            showHormoneDetails(hormone);
        });
    });
    
    // Nutrition cards
    const nutritionCards = document.querySelectorAll('.nutrition-card');
    nutritionCards.forEach(card => {
        const expandBtn = card.querySelector('.expand-btn');
        expandBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            const nutrient = card.getAttribute('data-nutrient');
            showNutrientDetails(nutrient);
        });
    });
}

// Show hormone details in modal
function showHormoneDetails(hormoneKey) {
    const hormone = detailedData.hormones[hormoneKey];
    if (!hormone) return;
    
    modalTitle.textContent = hormone.name;
    
    modalBody.innerHTML = `
        <div class="modal-definition">
            <h4>What is ${hormone.name}?</h4>
            <p>${hormone.definition}</p>
        </div>
        
        <div class="modal-details">
            <div class="detail-item">
                <span class="detail-label">Your Result:</span>
                <span class="detail-value">${hormone.value}</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">Reference Range:</span>
                <span class="detail-value">${hormone.reference}</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">Status:</span>
                <span class="detail-value status--success">${hormone.status}</span>
            </div>
        </div>
        
        <div style="margin: var(--space-16) 0;">
            <h4>What This Means for You:</h4>
            <p>${hormone.whatThisMeans}</p>
        </div>
        
        <div style="margin: var(--space-16) 0;">
            <h4>Understanding the Range:</h4>
            <p>${hormone.normalRange}</p>
        </div>
        
        <div style="margin: var(--space-16) 0;">
            <h4>Key Functions:</h4>
            <ul style="margin-left: var(--space-20);">
                ${hormone.details.map(detail => `<li>${detail}</li>`).join('')}
            </ul>
        </div>
    `;
    
    openModal();
}

// Show nutrient details in modal
function showNutrientDetails(nutrientKey) {
    const nutrient = detailedData.nutrients[nutrientKey];
    if (!nutrient) return;
    
    modalTitle.textContent = nutrient.name;
    
    let symptomsSection = '';
    if (nutrient.symptoms) {
        symptomsSection = `
            <div class="symptoms-list">
                <h4>Possible Symptoms:</h4>
                <ul>
                    ${nutrient.symptoms.map(symptom => `<li>${symptom}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    
    let urgentSection = '';
    if (nutrient.urgentAction) {
        urgentSection = `
            <div style="background: rgba(var(--color-error-rgb), 0.1); padding: var(--space-16); border-radius: var(--radius-base); margin: var(--space-16) 0; border-left: 4px solid var(--color-error);">
                <h4 style="color: var(--color-error); margin-bottom: var(--space-8);">⚠️ Urgent Action Needed:</h4>
                <p>${nutrient.urgentAction}</p>
            </div>
        `;
    }
    
    let monitoringSection = '';
    if (nutrient.monitoring) {
        monitoringSection = `
            <div style="background: var(--color-bg-2); padding: var(--space-16); border-radius: var(--radius-base); margin: var(--space-16) 0; border-left: 4px solid var(--color-warning);">
                <h4 style="color: var(--color-warning); margin-bottom: var(--space-8);">📊 Monitoring Recommendation:</h4>
                <p>${nutrient.monitoring}</p>
            </div>
        `;
    }
    
    modalBody.innerHTML = `
        <div class="modal-definition">
            <h4>What is ${nutrient.name}?</h4>
            <p>${nutrient.definition}</p>
        </div>
        
        <div class="modal-details">
            <div class="detail-item">
                <span class="detail-label">Your Result:</span>
                <span class="detail-value ${nutrient.status === 'Critical' ? 'critical-value' : ''}">${nutrient.value}</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">Reference Range:</span>
                <span class="detail-value">${nutrient.reference}</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">Status:</span>
                <span class="detail-value ${getStatusClass(nutrient.status)}">${nutrient.status}</span>
            </div>
        </div>
        
        ${urgentSection}
        
        <div style="margin: var(--space-16) 0;">
            <h4>What This Means for You:</h4>
            <p>${nutrient.whatThisMeans}</p>
        </div>
        
        <div style="margin: var(--space-16) 0;">
            <h4>Understanding the Range:</h4>
            <p>${nutrient.normalRange}</p>
        </div>
        
        <div style="margin: var(--space-16) 0;">
            <h4>Key Functions:</h4>
            <ul style="margin-left: var(--space-20);">
                ${nutrient.details.map(detail => `<li>${detail}</li>`).join('')}
            </ul>
        </div>
        
        ${symptomsSection}
        ${monitoringSection}
    `;
    
    openModal();
}

// Get appropriate CSS class for status
function getStatusClass(status) {
    switch(status.toLowerCase()) {
        case 'critical':
            return 'status--error';
        case 'borderline':
            return 'status--warning';
        case 'normal':
        case 'excellent':
        case 'optimal':
            return 'status--success';
        default:
            return 'status--info';
    }
}

// Open modal
function openModal() {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    // Focus management for accessibility
    modalClose.focus();
}

// Close modal
function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
}

// Toggle glossary visibility
function toggleGlossary() {
    glossaryContent.classList.toggle('hidden');
    
    // Update button text based on visibility
    if (glossaryContent.classList.contains('hidden')) {
        glossaryToggle.textContent = 'Show Glossary';
    } else {
        glossaryToggle.textContent = 'Hide Glossary';
    }
}

// Add smooth scrolling for internal links
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Add animation delays for cards on load
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.hormone-card, .nutrition-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// Progress bar animation
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-fill');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.style.width;
                progressBar.style.width = '0%';
                
                setTimeout(() => {
                    progressBar.style.transition = 'width 1s ease-out';
                    progressBar.style.width = width;
                }, 200);
                
                observer.unobserve(progressBar);
            }
        });
    });
    
    progressBars.forEach(bar => observer.observe(bar));
}

// Initialize progress bar animation
document.addEventListener('DOMContentLoaded', animateProgressBars);

// Add click-to-copy functionality for sharing
function addCopyFunctionality() {
    const copyButton = document.createElement('button');
    copyButton.textContent = '📋 Copy Report Summary';
    copyButton.className = 'btn btn--outline';
    copyButton.style.marginLeft = 'var(--space-16)';
    
    copyButton.addEventListener('click', function() {
        const summary = generateReportSummary();
        navigator.clipboard.writeText(summary).then(() => {
            copyButton.textContent = '✓ Copied!';
            setTimeout(() => {
                copyButton.textContent = '📋 Copy Report Summary';
            }, 2000);
        });
    });
    
    const printSection = document.querySelector('.print-section');
    printSection.appendChild(copyButton);
}

// Generate a text summary of the report
function generateReportSummary() {
    return `
PERSONAL HEALTH REPORT SUMMARY
28-Year-Old Female - Test Results

HORMONE PROFILE:
✓ Progesterone: 48 nmol/L (Excellent - Strong ovulation)
✓ FSH: 6.6 IU/L (Normal - Good ovarian reserve)  
✓ LH: 5.8 IU/L (Normal - Healthy pituitary function)
✓ Estradiol: 120 pmol/L (Normal - Appropriate levels)
✓ TSH: 1.96 mIU/L (Optimal - Excellent thyroid function)
✓ Prolactin: 181 mIU/L (Normal - Healthy range)
✓ SHBG: 55 nmol/L (Normal - Good protein binding)
✓ Testosterone: <1.39 nmol/L (Normal - Appropriate for females)

NUTRITIONAL STATUS:
⚠️ Ferritin: 7 μg/L (CRITICAL - Severe iron deficiency)
⚠️ Vitamin B12: 118 ng/L (Borderline - Low end of normal)  
✓ Folate: 6.7 μg/L (Normal - Adequate levels)

KEY FINDINGS:
• Excellent reproductive hormone levels
• Optimal thyroid function
• Critical iron deficiency requiring immediate attention
• B12 levels at lower end of normal range

PRIORITY ACTIONS:
🚨 Contact healthcare provider within 1 week for iron deficiency treatment
🚨 Start prescribed iron supplements
🔄 Increase iron-rich foods in diet
🔄 Take vitamin C with iron-rich meals
📊 Monitor B12 levels for neurological symptoms
📊 Regular ferritin monitoring

Generated: ${new Date().toLocaleDateString()}
    `.trim();
}

// Initialize copy functionality
document.addEventListener('DOMContentLoaded', addCopyFunctionality);