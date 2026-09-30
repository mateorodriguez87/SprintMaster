document.addEventListener('DOMContentLoaded', () => {
    // 1. CONTROL DEL MENÚ SIDEBAR Y OVERLAY
    const botonMenu = document.getElementById('botonMenu');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    function toggleMenu() {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    }

    if (botonMenu && sidebar && overlay) {
        botonMenu.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu);
    }

    // 2. SISTEMA DE PESTAÑAS (TABS)
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTabId = button.getAttribute('data-tab');

            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            button.classList.add('active');
            const activePane = document.getElementById(targetTabId);
            if (activePane) {
                activePane.classList.add('active');
            }
        });
    });

    // 3. ACORDEÓN DINÁMICO (ISO 9126 Y ISO 25000)
    const accordionButtons = document.querySelectorAll('.accordion-btn');

    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            
            const isOpen = content.classList.contains('open');

            // Cerrar otros acordeones abiertos opcionalmente
            document.querySelectorAll('.accordion-content').forEach(el => {
                el.classList.remove('open');
            });

            // Abrir solo si no estaba abierto
            if (!isOpen) {
                content.classList.add('open');
            }
        });
    });
});