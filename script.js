// Experience data organized by year
const experienceData = {
    2025: [
        {
            title: '蝦皮UIUX Intern',
            items: []
        },
        {
            title: '捷德運動股份有限公司苦命設計師',
            items: []
        },
        {
            title: 'DFT創變對決',
            items: []
        },
        {
            title: 'OpenHCI工作坊視覺部',
            items: []
        },
        {
            title: '育秀杯',
            items: []
        },
        {
            title: '全國專題論文競賽',
            items: []
        }
    ],
    2024: [
        {
            title: '台科大設計週展出',
            items: []
        },
        {
            title: '電通永續之森工作坊',
            items: []
        },
        {
            title: 'KDM台韓交流工作坊',
            items: []
        }
    ],
    2023: [
        {
            title: '台科大設計周展出',
            items: []
        },
        {
            title: '瑞穗天合飯店X高雄餐旅大學服務設計合作',
            items: []
        },
        {
            title: '宿舍幹部',
            items: []
        },
        {
            title: '校長室工讀/接案',
            items: []
        }
    ],
    2022: [
        {
            title: '宿舍幹部',
            items: []
        }
    ],
    2021: [
        {
            title: '台灣科技大學 工業設計系',
            items: []
        },
        {
            title: '台灣科技大學 智慧財產學程',
            items: []
        },
        {
            title: '排球系隊',
            items: []
        }
    ]
};

// Works data - 所有圖片已移到根目錄
const worksData = {
    inlife: {
        title: 'InLife 興趣養成APP',
        images: [
            'inlife_01.jpg',
            'inlife_02.jpg',
            'inlife_03.jpg',
            'inlife_04.jpg',
            'inlife_05.jpg',
            'inlife_06.jpg',
            'inlife_07.jpg',
            'inlife_08.jpg',
            'inlife_09.jpg',
            'inlife_10.jpg',
            'inlife_11.jpg'
        ]
    },
    koselig: {
        title: 'Koselig 北歐中古家具零售服務設計',
        images: [
            'koselig_01.jpg',
            'koselig_02.jpg',
            'koselig_03.jpg',
            'koselig_04.jpg',
            'koselig_05.jpg',
            'koselig_06.jpg',
            'koselig_07.jpg',
            'koselig_08.jpg',
            'koselig_09.jpg',
            'koselig_10.jpg',
            'koselig_11.jpg',
            'koselig_12.jpg'
        ]
    },
    resort: {
        title: '瑞穗天合飯店服務設計',
        images: [
            'resort_01.jpg',
            'resort_02.jpg',
            'resort_03.jpg',
            'resort_04.jpg',
            'resort_05.jpg',
            'resort_06.jpg',
            'resort_07.jpg',
            'resort_08.jpg',
            'resort_09.jpg',
            'resort_10.jpg',
            'resort_11.jpg',
            'resort_12.jpg'
        ]
    },
    other: {
        title: '其他',
        images: [
            'other_01.jpg',
            'other_02.jpg',
            'other_03.jpg',
            'other_04.jpg',
            'other_05.jpg',
            'other_06.jpg',
            'other_07.jpg',
            'other_08.jpg',
            'other_09.jpg'
        ]
    }
};

// Works viewer state
let currentWorkKey = null;
let currentWorkIndex = 0;

// Future data
const futureData = {
    long: {
        title: 'Long Term',
        items: [
            '有2個實際落地專案',
            '畢業薪水5W+'
        ]
    },
    mid: {
        title: 'Mid Term',
        items: [
            '能將設計轉換為商業指標並具有技術可行性',
            '能從過程中獲得成就感並認同專案'
        ]
    },
    short: {
        title: 'Short Term',
        goals: [
            {
                goal: '3年畢業',
                skills: '批判式思考、研究執行能力',
                steps: [
                    '論文大量閱讀',
                    '尋找感興趣的論文主題',
                    '擬定三個研究方向並深入研究',
                    '參與計劃案'
                ]
            },
            {
                goal: '累積一年業界經驗',
                skills: '專案管理與跨域協作、設計與技術理解能力、商業實務能力',
                steps: [
                    {
                        main: '完成實習',
                        sub: [
                            '大企業的專案管理方式',
                            '規格化的PRD撰寫方式',
                            '以設計身分與工程師團隊在專案上抓取平衡點',
                            '了解開發實務上技術應用'
                        ]
                    },
                    {
                        main: '建立自由接案制度',
                        sub: [
                            '如何管理個人專案(建立收費方式/專案進度追蹤表)',
                            '與客戶溝通的技巧',
                            '了解自己專案價值'
                        ]
                    }
                ]
            },
            {
                goal: '半年擁有可應用的vibe coding能力',
                skills: '熟悉vibe coding與應用(html, CSS, JavaScript, Python, Github…)',
                steps: [
                    '不求精通但要看懂，跟著Ric教學',
                    '能夠自行修改程式碼並debug',
                    '定義一個自己會應用or會被他人應用的產品內容並實作'
                ]
            }
        ]
    }
};

// Initialize the timeline
function initTimeline() {
    const timelineYears = document.getElementById('timelineYears');
    const experiencePopup = document.getElementById('experiencePopup');
    const experienceSection = document.querySelector('.experience-section');
    
    // Get all unique years and sort them
    const years = Object.keys(experienceData).sort((a, b) => b - a);
    
    // Create year buttons
    years.forEach((year) => {
        const yearItem = document.createElement('div');
        yearItem.className = 'year-item';
        yearItem.textContent = year;
        yearItem.dataset.year = year;
        
        // Click event for popup
        yearItem.addEventListener('click', (e) => {
            e.stopPropagation();
            const currentPopup = document.getElementById('experiencePopup');
            const isCurrentlyShowing = currentPopup.classList.contains('show');
            
            // Toggle popup - close if already showing, open if not
            if (isCurrentlyShowing && currentPopup.dataset.currentYear === year) {
                hideExperiencePopup();
            } else {
                showExperiencePopup(year, yearItem);
            }
        });
        
        timelineYears.appendChild(yearItem);
    });
    
    // Close popup when clicking outside
    document.addEventListener('click', (e) => {
        const experiencePopup = document.getElementById('experiencePopup');
        if (experiencePopup.classList.contains('show') && 
            !experiencePopup.contains(e.target) &&
            !e.target.closest('.year-item')) {
            hideExperiencePopup();
        }
    });
}

// Show experience popup
function showExperiencePopup(year, yearElement) {
    const experiencePopup = document.getElementById('experiencePopup');
    const experiences = experienceData[year] || [];
    
    // Clear previous content
    experiencePopup.innerHTML = '';
    
    // Add close button
    const closeBtn = document.createElement('button');
    closeBtn.className = 'popup-close-btn';
    closeBtn.innerHTML = '×';
    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        hideExperiencePopup();
    });
    
    if (experiences.length === 0) {
        experiencePopup.innerHTML = '<p>此年份無相關經驗</p>';
        experiencePopup.appendChild(closeBtn);
        experiencePopup.dataset.currentYear = year;
        experiencePopup.classList.add('show');
        return;
    }
    
    // Create experience content
    experiences.forEach(exp => {
        let html = `<h3>${exp.title}</h3>`;
        if (exp.period) {
            html += `<div class="period">${exp.period}</div>`;
        }
        
        if (exp.items && exp.items.length > 0) {
            html += '<ul>';
            exp.items.forEach(item => {
                html += `<li>${item}</li>`;
            });
            html += '</ul>';
        }
        
        const card = document.createElement('div');
        card.className = 'popup-content';
        card.innerHTML = html;
        experiencePopup.appendChild(card);
    });
    
    experiencePopup.appendChild(closeBtn);
    experiencePopup.dataset.currentYear = year;
    
    // Set fixed positioning first (temporarily hidden to measure)
    experiencePopup.style.position = 'fixed';
    experiencePopup.style.left = '0';
    experiencePopup.style.top = '0';
    experiencePopup.style.opacity = '0';
    experiencePopup.style.visibility = 'visible';
    experiencePopup.classList.add('show');
    
    // Get actual popup dimensions
    const popupWidth = experiencePopup.offsetWidth;
    const popupHeight = experiencePopup.offsetHeight;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const padding = 20;
    
    // Calculate initial position (centered near the clicked element)
    const rect = yearElement.getBoundingClientRect();
    let initialX = rect.left + (rect.width / 2) - (popupWidth / 2);
    let initialY = rect.bottom + 20;
    
    // Ensure popup stays within viewport
    if (initialX < padding) {
        initialX = padding;
    }
    if (initialX + popupWidth > viewportWidth - padding) {
        initialX = viewportWidth - popupWidth - padding;
    }
    if (initialY + popupHeight > viewportHeight - padding) {
        initialY = rect.top - popupHeight - 20;
    }
    if (initialY < padding) {
        initialY = padding;
    }
    
    // Set final position
    experiencePopup.style.transform = `translate(${initialX}px, ${initialY}px)`;
    experiencePopup.style.marginTop = '0';
    experiencePopup.style.marginBottom = '0';
    
    // Show popup
    experiencePopup.style.opacity = '';
    experiencePopup.style.visibility = '';
    
    // Initialize drag functionality
    makeDraggable(experiencePopup);
    
    // Show overlay on mobile
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
        const overlay = document.getElementById('popupOverlay');
        if (overlay) {
            overlay.classList.add('show');
        }
    }
}

// Hide experience popup
function hideExperiencePopup() {
    const experiencePopup = document.getElementById('experiencePopup');
    const overlay = document.getElementById('popupOverlay');
    experiencePopup.classList.remove('show');
    if (overlay) {
        overlay.classList.remove('show');
    }
    // Reset positioning and styles
    experiencePopup.style.position = '';
    experiencePopup.style.left = '';
    experiencePopup.style.top = '';
    experiencePopup.style.transform = '';
    experiencePopup.style.cursor = '';
    experiencePopup.style.userSelect = '';
}

// Initialize Future section
function initFuture() {
    const futureItems = document.querySelectorAll('.future-item');
    const futurePopup = document.getElementById('futurePopup');
    
    futureItems.forEach(item => {
        const term = item.dataset.term;
        
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            const currentPopup = document.getElementById('futurePopup');
            const isCurrentlyShowing = currentPopup.classList.contains('show');
            
            // Toggle popup - close if already showing, open if not
            if (isCurrentlyShowing && currentPopup.dataset.currentTerm === term) {
                hideFuturePopup();
            } else {
                showFuturePopup(term, item);
            }
        });
    });
    
    // Close popup when clicking outside
    document.addEventListener('click', (e) => {
        const futurePopup = document.getElementById('futurePopup');
        if (futurePopup.classList.contains('show') && 
            !futurePopup.contains(e.target) &&
            !e.target.closest('.future-item')) {
            hideFuturePopup();
        }
    });
}

// Show future popup
function showFuturePopup(term, termElement) {
    const futurePopup = document.getElementById('futurePopup');
    const data = futureData[term];
    
    if (!data) return;
    
    let html = `<h2>${data.title}</h2>`;
    
    if (data.items) {
        // Long Term or Mid Term
        html += '<ul>';
        data.items.forEach(item => {
            html += `<li>${item}</li>`;
        });
        html += '</ul>';
    } else if (data.goals) {
        // Short Term
        data.goals.forEach(goalData => {
            html += `<div class="plan-goal">`;
            html += `<h3>目標：${goalData.goal}</h3>`;
            html += `<p><strong>培養技能：</strong>${goalData.skills}</p>`;
            html += `<p><strong>操作步驟：</strong></p>`;
            html += '<ul>';
            
            goalData.steps.forEach(step => {
                if (typeof step === 'string') {
                    html += `<li>${step}</li>`;
                } else if (step.main) {
                    // Nested structure
                    html += `<li>${step.main}`;
                    if (step.sub && step.sub.length > 0) {
                        html += '<ul>';
                        step.sub.forEach(subStep => {
                            html += `<li>${subStep}</li>`;
                        });
                        html += '</ul>';
                    }
                    html += '</li>';
                }
            });
            
            html += '</ul>';
            html += '</div>';
        });
    }
    
    // Add close button
    const closeBtn = document.createElement('button');
    closeBtn.className = 'popup-close-btn';
    closeBtn.innerHTML = '×';
    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        hideFuturePopup();
    });
    
    futurePopup.innerHTML = html;
    futurePopup.appendChild(closeBtn);
    futurePopup.dataset.currentTerm = term;
    
    // Set fixed positioning first (temporarily hidden to measure)
    futurePopup.style.position = 'fixed';
    futurePopup.style.left = '0';
    futurePopup.style.top = '0';
    futurePopup.style.opacity = '0';
    futurePopup.style.visibility = 'visible';
    futurePopup.classList.add('show');
    
    // Get actual popup dimensions
    const popupWidth = futurePopup.offsetWidth;
    const popupHeight = futurePopup.offsetHeight;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const padding = 20;
    
    // Calculate initial position (centered near the clicked element)
    const rect = termElement.getBoundingClientRect();
    let initialX = rect.left + (rect.width / 2) - (popupWidth / 2);
    let initialY = rect.bottom + 20;
    
    // Ensure popup stays within viewport
    if (initialX < padding) {
        initialX = padding;
    }
    if (initialX + popupWidth > viewportWidth - padding) {
        initialX = viewportWidth - popupWidth - padding;
    }
    if (initialY + popupHeight > viewportHeight - padding) {
        initialY = rect.top - popupHeight - 20;
    }
    if (initialY < padding) {
        initialY = padding;
    }
    
    // Set final position
    futurePopup.style.transform = `translate(${initialX}px, ${initialY}px)`;
    futurePopup.style.marginTop = '0';
    futurePopup.style.marginBottom = '0';
    
    // Show popup
    futurePopup.style.opacity = '';
    futurePopup.style.visibility = '';
    
    // Initialize drag functionality
    makeDraggable(futurePopup);
    
    // Show overlay on mobile
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
        const overlay = document.getElementById('popupOverlay');
        if (overlay) {
            overlay.classList.add('show');
        }
    }
}

// Hide future popup
function hideFuturePopup() {
    const futurePopup = document.getElementById('futurePopup');
    const overlay = document.getElementById('popupOverlay');
    futurePopup.classList.remove('show');
    if (overlay) {
        overlay.classList.remove('show');
    }
    // Reset positioning and styles
    futurePopup.style.position = '';
    futurePopup.style.left = '';
    futurePopup.style.top = '';
    futurePopup.style.transform = '';
    futurePopup.style.cursor = '';
    futurePopup.style.userSelect = '';
}

// Initialize Works section
function initWorks() {
    const workItems = document.querySelectorAll('.work-item');
    const worksPopup = document.getElementById('worksPopup');
    
    workItems.forEach(item => {
        const work = item.dataset.work;
        
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            const currentPopup = document.getElementById('worksPopup');
            const isCurrentlyShowing = currentPopup.classList.contains('show');
            
            // Toggle popup - close if already showing, open if not
            if (isCurrentlyShowing && currentPopup.dataset.currentWork === work) {
                hideWorksPopup();
            } else {
                showWorksPopup(work, item);
            }
        });
    });
    
    // Close popup when clicking outside
    document.addEventListener('click', (e) => {
        const worksPopup = document.getElementById('worksPopup');
        if (worksPopup.classList.contains('show') && 
            !worksPopup.contains(e.target) &&
            !e.target.closest('.work-item')) {
            hideWorksPopup();
        }
    });
}

// Show works popup
function showWorksPopup(work, workElement) {
    const worksPopup = document.getElementById('worksPopup');
    const data = worksData[work];
    
    if (!data) return;

    currentWorkKey = work;
    currentWorkIndex = 0;

    const total = data.images.length;
    const initialSrc = data.images[currentWorkIndex];

    const html = `
        <div class="works-popup-inner">
            <h2>${data.title}</h2>
            <div class="works-viewer">
                <div class="works-image-wrapper">
                    <img class="works-main-image" src="${initialSrc}" alt="${data.title}">
                </div>
                <div class="works-nav">
                    <button class="works-arrow works-arrow-prev" aria-label="上一張">‹</button>
                    <button class="works-arrow works-arrow-next" aria-label="下一張">›</button>
                </div>
            </div>
            <div class="works-counter">
                <span class="works-counter-text">${currentWorkIndex + 1} / ${total}</span>
            </div>
        </div>
    `;

    // Add close button
    const closeBtn = document.createElement('button');
    closeBtn.className = 'popup-close-btn';
    closeBtn.innerHTML = '×';
    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        hideWorksPopup();
    });

    worksPopup.innerHTML = html;
    worksPopup.appendChild(closeBtn);
    worksPopup.dataset.currentWork = work;

    // Show popup full screen
    worksPopup.style.position = 'fixed';
    worksPopup.style.left = '0';
    worksPopup.style.top = '0';
    worksPopup.style.opacity = '0';
    worksPopup.style.visibility = 'visible';
    worksPopup.style.transform = 'translateY(-10px)';
    worksPopup.classList.add('show');

    requestAnimationFrame(() => {
        worksPopup.style.opacity = '';
        worksPopup.style.visibility = '';
        worksPopup.style.transform = '';
    });

    // Attach navigation events
    const prevBtn = worksPopup.querySelector('.works-arrow-prev');
    const nextBtn = worksPopup.querySelector('.works-arrow-next');

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            showPrevWorkImage();
        });
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            showNextWorkImage();
        });
    }

    // Keyboard navigation
    document.addEventListener('keydown', handleWorksKeydown);

    // Initialize drag functionality (drag by top bar)
    makeDraggable(worksPopup);

    // Show overlay on mobile
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
        const overlay = document.getElementById('popupOverlay');
        if (overlay) {
            overlay.classList.add('show');
        }
    }
}

function updateWorksViewer() {
    if (!currentWorkKey) return;
    const worksPopup = document.getElementById('worksPopup');
    const data = worksData[currentWorkKey];
    if (!worksPopup || !data) return;

    const imgEl = worksPopup.querySelector('.works-main-image');
    const counterEl = worksPopup.querySelector('.works-counter-text');
    if (!imgEl || !counterEl) return;

    const total = data.images.length;
    const clampedIndex = ((currentWorkIndex % total) + total) % total;
    currentWorkIndex = clampedIndex;

    imgEl.src = data.images[currentWorkIndex];
    counterEl.textContent = `${currentWorkIndex + 1} / ${total}`;
}

function showPrevWorkImage() {
    if (!currentWorkKey) return;
    currentWorkIndex -= 1;
    updateWorksViewer();
}

function showNextWorkImage() {
    if (!currentWorkKey) return;
    currentWorkIndex += 1;
    updateWorksViewer();
}

function handleWorksKeydown(e) {
    const worksPopup = document.getElementById('worksPopup');
    if (!worksPopup || !worksPopup.classList.contains('show')) return;

    if (e.key === 'ArrowLeft') {
        e.preventDefault();
        showPrevWorkImage();
    } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        showNextWorkImage();
    } else if (e.key === 'Escape') {
        e.preventDefault();
        hideWorksPopup();
    }
}

// Hide works popup
function hideWorksPopup() {
    const worksPopup = document.getElementById('worksPopup');
    const overlay = document.getElementById('popupOverlay');
    worksPopup.classList.remove('show');
    if (overlay) {
        overlay.classList.remove('show');
    }
    // Reset positioning and styles
    worksPopup.style.position = '';
    worksPopup.style.left = '';
    worksPopup.style.top = '';
    worksPopup.style.transform = '';
    worksPopup.style.cursor = '';
    worksPopup.style.userSelect = '';

    // Remove keyboard listener
    document.removeEventListener('keydown', handleWorksKeydown);
    currentWorkKey = null;
}

// Initialize overlay click handler
function initOverlay() {
    const overlay = document.getElementById('popupOverlay');
    if (overlay) {
        overlay.addEventListener('click', () => {
            hideExperiencePopup();
            hideWorksPopup();
            hideFuturePopup();
        });
    }
}

// Drag functionality for popups
function makeDraggable(popupElement) {
    let isDragging = false;
    let currentX = 0;
    let currentY = 0;
    let initialX = 0;
    let initialY = 0;
    let xOffset = 0;
    let yOffset = 0;

    // Get initial position from transform
    function getInitialPosition() {
        const transform = popupElement.style.transform;
        if (transform && transform !== 'none') {
            const matches = transform.match(/translate\(([^,]+)px,\s*([^)]+)px\)/);
            if (matches) {
                xOffset = parseFloat(matches[1]) || 0;
                yOffset = parseFloat(matches[2]) || 0;
            }
        } else {
            const rect = popupElement.getBoundingClientRect();
            xOffset = rect.left;
            yOffset = rect.top;
        }
    }

    function dragStart(e) {
        // Don't drag if clicking on close button, links, or buttons
        if (e.target.classList.contains('popup-close-btn') || 
            e.target.closest('a') || 
            (e.target.closest('button') && !e.target.classList.contains('popup-close-btn'))) {
            return;
        }

        // Only allow dragging from the top area (header region)
        const rect = popupElement.getBoundingClientRect();
        const clickY = e.type === "touchstart" ? e.touches[0].clientY : e.clientY;
        const relativeY = clickY - rect.top;
        
        // Only allow dragging from top 50px (header area) or if clicking on h2/h3 in that area
        const isInHeaderArea = relativeY <= 50;
        const isHeaderElement = e.target.tagName === 'H2' || e.target.tagName === 'H3';
        
        if (!isInHeaderArea && !isHeaderElement) {
            return;
        }

        getInitialPosition();

        if (e.type === "touchstart") {
            initialX = e.touches[0].clientX - xOffset;
            initialY = e.touches[0].clientY - yOffset;
        } else {
            initialX = e.clientX - xOffset;
            initialY = e.clientY - yOffset;
        }

        isDragging = true;
        popupElement.style.cursor = 'grabbing';
        popupElement.style.userSelect = 'none';
        e.preventDefault();
    }

    function dragEnd(e) {
        if (isDragging) {
            initialX = currentX;
            initialY = currentY;
            isDragging = false;
            popupElement.style.cursor = 'grab';
            popupElement.style.userSelect = '';
        }
    }

    function drag(e) {
        if (isDragging) {
            e.preventDefault();
            
            if (e.type === "touchmove") {
                currentX = e.touches[0].clientX - initialX;
                currentY = e.touches[0].clientY - initialY;
            } else {
                currentX = e.clientX - initialX;
                currentY = e.clientY - initialY;
            }

            xOffset = currentX;
            yOffset = currentY;

            // Constrain to viewport
            const rect = popupElement.getBoundingClientRect();
            const maxX = window.innerWidth - rect.width;
            const maxY = window.innerHeight - rect.height;

            xOffset = Math.max(0, Math.min(xOffset, maxX));
            yOffset = Math.max(0, Math.min(yOffset, maxY));

            setTranslate(xOffset, yOffset, popupElement);
        }
    }

    function setTranslate(xPos, yPos, el) {
        el.style.transform = `translate(${xPos}px, ${yPos}px)`;
    }

    // Get initial position after popup is shown
    setTimeout(() => {
        getInitialPosition();
    }, 100);

    // Mouse events
    popupElement.addEventListener('mousedown', dragStart);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', dragEnd);

    // Touch events for mobile
    popupElement.addEventListener('touchstart', dragStart, { passive: false });
    document.addEventListener('touchmove', drag, { passive: false });
    document.addEventListener('touchend', dragEnd);

    // Set initial cursor style
    popupElement.style.cursor = 'grab';
}

// 滑鼠追蹤效果
function initCursorTrail() {
    // 只在非觸控設備上啟用
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        return;
    }
    
    const cursor = document.createElement('div');
    cursor.className = 'cursor-trail';
    document.body.appendChild(cursor);
    
    const trails = [];
    const trailCount = 5; // 拖尾數量
    
    // 創建拖尾元素
    for (let i = 0; i < trailCount; i++) {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail trail';
        trail.style.opacity = (trailCount - i) / trailCount * 0.6;
        document.body.appendChild(trail);
        trails.push(trail);
    }
    
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    const trailPositions = trails.map(() => ({ x: 0, y: 0 }));
    
    // 更新主游標位置
    function updateCursor(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    }
    
    // 動畫循環
    function animate() {
        // 平滑移動主游標
        cursorX += (mouseX - cursorX) * 0.3;
        cursorY += (mouseY - cursorY) * 0.3;
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        // 更新拖尾位置
        trails.forEach((trail, index) => {
            const prevIndex = index === 0 ? -1 : index - 1;
            const targetX = prevIndex === -1 ? cursorX : trailPositions[prevIndex].x;
            const targetY = prevIndex === -1 ? cursorY : trailPositions[prevIndex].y;
            
            trailPositions[index].x += (targetX - trailPositions[index].x) * 0.4;
            trailPositions[index].y += (targetY - trailPositions[index].y) * 0.4;
            
            trail.style.left = trailPositions[index].x + 'px';
            trail.style.top = trailPositions[index].y + 'px';
        });
        
        requestAnimationFrame(animate);
    }
    
    // 監聽滑鼠移動
    document.addEventListener('mousemove', updateCursor);
    
    // 開始動畫
    animate();
    
    // 隱藏默認游標
    document.body.style.cursor = 'none';
    
    // 在可點擊元素上顯示適當的游標並放大效果
    const clickableElements = document.querySelectorAll('a, button, .year-item, .work-item, .future-item, .popup-close-btn, .works-arrow');
    clickableElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.3)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initTimeline();
    initWorks();
    initFuture();
    initOverlay();
    initCursorTrail();
});
