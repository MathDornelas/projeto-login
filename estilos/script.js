document.addEventListener('DOMContentLoaded', () => {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const menuSections = document.querySelectorAll('.menu-section');

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 1. Esconde todas as seções
            menuSections.forEach(section => {
                section.classList.remove('active');
                section.classList.add('hidden');
            });

            // 2. Determina qual seção mostrar
            const targetId = button.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);

            // 3. Mostra a seção desejada
            if (targetSection) {
                targetSection.classList.remove('hidden');
                targetSection.classList.add('active');

                // 4. Efeito de rolagem suave para a seção
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start' // Rola para o topo da seção
                });
            }
        });
    });

    // Opcional: Garante que a primeira seção seja exibida ao carregar
    const firstSection = document.querySelector('.menu-section');
    if(firstSection) {
        firstSection.classList.add('active');
        firstSection.classList.remove('hidden');
    }
});
