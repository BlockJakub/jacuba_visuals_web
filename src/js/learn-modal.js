document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('learnModal');

    if (!modal) return;

    const galleryItems = document.querySelectorAll('.learn-gallery__item');
    const modalImage = modal.querySelector('.learn-modal__image');
    const closeButton = modal.querySelector('.learn-modal__close');
    const prevButton = modal.querySelector('.learn-modal__nav--prev');
    const nextButton = modal.querySelector('.learn-modal__nav--next');
    const backdrop = modal.querySelector('.learn-modal__backdrop');
    const toolButtons = modal.querySelectorAll('.learn-modal__tool');
    const stage = modal.querySelector('.learn-modal__stage');

    const slides = Array.from(galleryItems).map((item) => {
        const image = item.querySelector('.learn-gallery__image');

        return {
            src: image.getAttribute('src'),
            alt: image.getAttribute('alt') || ''
        };
    });

    let currentIndex = 0;
    let isOpen = false;

    let scale = 1;
    const minScale = 1;
    const maxScale = 4;
    const zoomStep = 0.25;

    let translateX = 0;
    let translateY = 0;

    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let dragStartX = 0;
    let dragStartY = 0;
    let lastFocusedTrigger = null;

    function updateTransform() {
        modalImage.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
    }

    function resetView() {
        scale = 1;
        translateX = 0;
        translateY = 0;
        updateTransform();
    }

    function getPanLimits() {
        const stageRect = stage.getBoundingClientRect();
        const imageRect = modalImage.getBoundingClientRect();

        const displayedWidth = imageRect.width / scale;
        const displayedHeight = imageRect.height / scale;

        const scaledWidth = displayedWidth * scale;
        const scaledHeight = displayedHeight * scale;

        const overflowX = Math.max(0, (scaledWidth - stageRect.width) / 2);
        const overflowY = Math.max(0, (scaledHeight - stageRect.height) / 2);

        return {
            minX: -overflowX,
            maxX: overflowX,
            minY: -overflowY,
            maxY: overflowY
        };
    }

    function clampPan() {
        const limits = getPanLimits();

        translateX = Math.min(limits.maxX, Math.max(limits.minX, translateX));
        translateY = Math.min(limits.maxY, Math.max(limits.minY, translateY));
    }

    function loadSlide(index) {
        const slide = slides[index];

        modalImage.onload = () => {
            resetView();
        };

        modalImage.src = slide.src;
        modalImage.alt = slide.alt;
    }

    function openModal(index, triggerElement) {
        currentIndex = index;
        isOpen = true;
        lastFocusedTrigger = triggerElement;

        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');

        loadSlide(currentIndex);

        requestAnimationFrame(() => {
            closeButton?.focus();
        });
    }

    function closeModal() {
        isOpen = false;

        modal.classList.remove('is-open');
        document.body.classList.remove('modal-open');
        resetView();

        if (lastFocusedTrigger) {
            lastFocusedTrigger.focus();
        }

        modal.setAttribute('aria-hidden', 'true');
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % slides.length;
        loadSlide(currentIndex);
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        loadSlide(currentIndex);
    }

    function zoomIn() {
        scale = Math.min(scale + zoomStep, maxScale);
        clampPan();
        updateTransform();
    }

    function zoomOut() {
        scale = Math.max(scale - zoomStep, minScale);
        clampPan();
        updateTransform();
    }

    function zoomReset() {
        resetView();
    }

    function startDrag(clientX, clientY) {
        if (scale <= 1) return;

        isDragging = true;
        stage.classList.add('is-dragging');
        modalImage.style.transition = 'none';

        startX = clientX;
        startY = clientY;
        dragStartX = translateX;
        dragStartY = translateY;
    }

    function onDrag(clientX, clientY) {
        if (!isDragging) return;

        const deltaX = clientX - startX;
        const deltaY = clientY - startY;

        translateX = dragStartX + deltaX;
        translateY = dragStartY + deltaY;

        clampPan();
        updateTransform();
    }

    function endDrag() {
        if (!isDragging) return;

        isDragging = false;
        stage.classList.remove('is-dragging');
        modalImage.style.transition = 'transform 0.2s ease';
    }

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            openModal(index, item);
        });
    });

    closeButton?.addEventListener('click', closeModal);
    backdrop?.addEventListener('click', closeModal);
    nextButton?.addEventListener('click', showNext);
    prevButton?.addEventListener('click', showPrev);

    toolButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const action = button.dataset.action;

            if (action === 'zoom-in') zoomIn();
            if (action === 'zoom-out') zoomOut();
            if (action === 'zoom-reset') zoomReset();
        });
    });

    stage.addEventListener('mousedown', (event) => {
        event.preventDefault();
        startDrag(event.clientX, event.clientY);
    });

    window.addEventListener('mousemove', (event) => {
        onDrag(event.clientX, event.clientY);
    });

    window.addEventListener('mouseup', endDrag);

    stage.addEventListener('touchstart', (event) => {
        if (event.touches.length !== 1) return;

        const touch = event.touches[0];
        startDrag(touch.clientX, touch.clientY);
    }, { passive: true });

    window.addEventListener('touchmove', (event) => {
        if (!isDragging || event.touches.length !== 1) return;

        const touch = event.touches[0];
        onDrag(touch.clientX, touch.clientY);
    }, { passive: true });

    window.addEventListener('touchend', endDrag);

    document.addEventListener('keydown', (event) => {
        if (!isOpen) return;

        if (event.key === 'Escape') closeModal();
        if (event.key === 'ArrowRight') showNext();
        if (event.key === 'ArrowLeft') showPrev();
    });

    window.addEventListener('resize', () => {
        if (!isOpen) return;

        clampPan();
        updateTransform();
    });
});