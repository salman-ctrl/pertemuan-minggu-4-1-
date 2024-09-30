document.getElementById('skillForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const skill = document.getElementById('skill').value;
    
    // Tampilkan alert
    alert(`Thank you, ${name}! Your selected skill is ${skill}.`);
    
    // Ubah background heading dan warna teks h2 berdasarkan skill yang dipilih
    const heading = document.querySelector('.heading');
    const headings2 = document.querySelectorAll('h2');

    if (skill === 'HTML') {
        heading.style.backgroundColor = 'var(--third-color)';
        headings2.forEach(h => h.style.color = 'var(--third-color)');
    } else if (skill === 'CSS') {
        heading.style.backgroundColor = 'var(--primary-color)';
        headings2.forEach(h => h.style.color = 'var(--primary-color)');
    } else if (skill === 'JavaScript') {
        heading.style.backgroundColor = 'var(--secondary-color)';
        headings2.forEach(h => h.style.color = 'var(--secondary-color)');
    }
});